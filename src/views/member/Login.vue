<template>
  <div id="container" class="login">login</div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import { State } from "vuex-class";
export default class Login extends Vue {
  @State("malls", { namespace: "mall" })
  private malls!: string;
  private tt: string[] = [];
  mounted(): void {
    console.log(1);
  }
}
</script>
