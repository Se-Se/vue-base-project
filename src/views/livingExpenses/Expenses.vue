<template>
  <EchartsCom></EchartsCom>
</template>
<script lang="ts">
// import { defineComponent } from 'vue'

// export default defineComponent({
//   setup() {

//   },
// })
import {Options, Vue} from 'vue-class-component';
import EchartsCom from '@/components/echarts/Echart.vue';
@Options({
  props: {
    msg: String
  },
  components: {
    EchartsCom
  }
})
export default class Expenses extends Vue {
  name = 'Expenses';
  msg!: string;
}
</script>
