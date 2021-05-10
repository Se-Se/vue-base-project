import axios, {AxiosError} from 'axios';

enum XhrErrorCode {
  CLIENT_ERROR = 'CLIENT_ERROR',
  SERVER_ERROR = 'SERVER_ERROR',
  CANCEL_ERROR = 'CANCEL_ERROR',
  TIMEOUT_ERROR = 'TIMEOUT_ERROR',
  NETWORK_ERROR = 'NETWORK_ERROR',
  UNKNOWN_ERROR = 'UNKNOWN_ERROR',
  TOKEN_ERROR = 'TOKEN_ERROR',
  NOTFOUND_ERROR = 'NOTFOUND_ERROR'
}

interface xhrErrorIn extends Error {
  name: string;
  message: string;
  code: XhrErrorCode;
  data: any;
  status: number;
}

function xhrError({status = 0, code, data = {}}: any): Promise<xhrErrorIn> {
  const err: xhrErrorIn = {
    data,
    code,
    name: 'xhrError',
    message: code,
    status
  };
  return Promise.reject(err);
}

export default function axiosError(error: AxiosError): Promise<xhrErrorIn> {
  // timeout
  if (error.code === 'ECONNABORTED') {
    return xhrError({
      code: XhrErrorCode.TIMEOUT_ERROR
    });
  }
  // cancel
  if (axios.isCancel(error)) {
    return xhrError({
      code: XhrErrorCode.CANCEL_ERROR
    });
  }
  // service error, 400 401 404 500 502...
  if (error.response) {
    if (error.response.status === 401) {
      return xhrError({
        code: XhrErrorCode.TOKEN_ERROR,
        status: error.response.status,
        data: error.response.data
      });
    }
    if (error.response.status === 404) {
      return xhrError({
        code: XhrErrorCode.NOTFOUND_ERROR,
        status: error.response.status,
        data: error.response.data
      });
    }
    if (error.response.status >= 400 && error.response.status < 500) {
      return xhrError({
        code: XhrErrorCode.CLIENT_ERROR,
        status: error.response.status,
        data: error.response.data
      });
    }
    if (error.response.status >= 500 && error.response.status < 600) {
      return xhrError({
        code: XhrErrorCode.SERVER_ERROR,
        status: error.response.status,
        data: error.response.data
      });
    }
    return xhrError({
      code: XhrErrorCode.UNKNOWN_ERROR
    });
  }

  // network error
  if (error.request) {
    return xhrError({
      code: XhrErrorCode.NETWORK_ERROR
    });
  }

  // throw error on request config?
  return xhrError({
    code: XhrErrorCode.UNKNOWN_ERROR
  });
}
