// import Header from "../views/layout/Header.vue";
import Footer from "@/views/layout/Footer.vue";
import Login from "@/views/member/Login.vue";
import MainHome from "@/views/main/MainHome.vue";
export default [
  {
    path: "/",
    name: "Home",
    redirect: "/m",
  },
  {
    path: "/m",
    name: "Home",
    components: {
      // default: (reslove: any) => require(["@/views/main/Home.vue"], reslove),
      default: MainHome,
    },
  },
  {
    path: "/login",
    name: "Login",
    components: {
      default: Login,
      footer: Footer,
    },
    meta: {
      notMember: true,
    },
  },
];
