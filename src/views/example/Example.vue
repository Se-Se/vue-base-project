<template>
  <div id="container" class="login">EXAMPLE:{{ $t("example.example.d1") }}</div>
</template>
<script lang="ts">
import { Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import { ExampleTypes } from "@/types";
import {getExampleApi} from '@/api';


export default class Login extends Vue {
  @State("malls", { namespace: "example" })
  private malls!: ExampleTypes;
  // eslint-disable-next-line
  private tt: string = "";
 async mounted(): Promise<void> {
    console.log(1);
    // let res = await getExampleApi()
    // console.log(res)
    console.log(2)
  }
}
</script>
