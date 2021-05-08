<template>
  <div id="container" class="login">login</div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import { ExampleTypes } from "@/types";
export default class Login extends Vue {
  @State("malls", { namespace: "example" })
  private malls!: ExampleTypes;
  // eslint-disable-next-line
  private tt: string = "";
  mounted(): void {
    console.log(1);
  }
}
</script>
