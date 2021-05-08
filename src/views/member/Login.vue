<template>
  <div id="container" class="login">login</div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import { State } from "vuex-class";
export default class Login extends Vue {
  @State("malls", { namespace: "mall" })
  private malls!: any;
  data(): any {
    return {
      login: {
        email: "",
        password: "",
      },
      saveId: false,
      snsState: Math.floor(Math.random() * 10000),
    };
  }
  mounted(): any {
    console.log(1);
  }
}
</script>
