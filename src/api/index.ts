
import {get,post} from './http';

export function getExampleApi(){
    return get('/api/example')
}
export function postExampleApi(){
    return post('/api/example')
}