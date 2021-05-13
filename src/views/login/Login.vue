<template>
<div class="wrap">
  <div class="content">

  </div>
</div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  name:'login'
})
export default class Login extends Vue {
  data(){
    return{

    }
  }
  private time:any
}
</script>
<style lang="scss" scoped>
$color:red;
.wrap{
  background-color: $color;
}
</style>

