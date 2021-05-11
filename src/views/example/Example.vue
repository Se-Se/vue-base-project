<template>
  <div class="wrap">
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          EXAMPLE:{{ $t('message.example.example.d1') }}
          <button @click="changLang">lang</button>
          <el-date-picker v-model="value1" type="date" placeholder="选择日期">
          </el-date-picker>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
<script lang="ts">
import {Vue, Options} from 'vue-property-decorator';
import {State} from 'vuex-class';
import {ExampleTypes} from '@/types';
// import {getExampleApi} from '@/api';
import {mapActions} from 'vuex';

@Options({
  methods: {
    ...mapActions('lang', ['setLang'])
  }
})
export default class Example extends Vue {
  @State('malls', {namespace: 'example'})
  private malls!: ExampleTypes;

  @State('lang', {namespace: 'lang'})
  private lang!: any;
  // eslint-disable-next-line
  private tt: string = '';
  private value1: any = '';

  async mounted(): Promise<void> {
    console.log(1);
    console.log(this);
    (this as any).$api.postExample({data: '123'});

    // let res = await getExampleApi()
    // console.log(res)
    console.log(2);
  }

  private changLang() {
    this.$i18n.locale = this.$i18n.locale === 'zh' ? 'en' : 'zh';
    console.log(this);
    (this as any).setLang(this.$i18n.locale);
  }
}
</script>
<style scoped>
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
</style>

