<template>
  <div id="container" class="login"> EXAMPLE:{{ $t('example.example.d1') }}
    <button @click="changLang">lang</button>
  </div>
</template>
<script lang="ts">
import {Vue, Options} from 'vue-property-decorator';
import {State} from 'vuex-class';
import {ExampleTypes} from '@/types';
import {getExampleApi} from '@/api';
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
  async mounted(): Promise<void> {
    console.log(1);

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

