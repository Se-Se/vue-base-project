// import Header from "../views/layout/Header.vue";
import Footer from "@/views/layout/Footer.vue";
import Example from "@/views/example/Example.vue";
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
    path: "/example",
    name: "Example",
    components: {
      default: Example,
      footer: Footer,
    },
    meta: {
      notMember: true,
    },
  },
];
