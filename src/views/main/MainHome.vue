<template>
  <div class="common-layout container">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <el-button type="success" @click="show3 = !show3">Click Me</el-button>

          <div style="margin-top: 20px; height: 200px;">
            <el-collapse-transition>
              <div v-show="show3">
                <div class="transition-box">el-collapse-transition</div>
                <div class="transition-box">el-collapse-transition</div>
              </div>
            </el-collapse-transition>
          </div>
          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { Vue } from "vue-class-component";
export default class Home extends Vue {
  data () {
    return {
      show3: true,
      radio:'2'
    }
  }
}
</script>
<style scoped>
.container {
  height: 100%;
  width: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
