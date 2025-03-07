<template>
  <div class="layout">
    <div class="content item-a">
      <div class="content-title">2023年累计</div>
      <YearDetail />
    </div>
    <div class="content item-b">
      <div class="content-title">常用应用</div>
      <AppNav />
    </div>
    <div class="content item-c">
      <div class="content-title">近30天检查、隐患发现趋势</div>
      <DiscoverTrends />
    </div>
    <div class="content item-d">
      <div class="content-title">动态</div>
    </div>
    <div class="content item-e">
      <div class="content-title">村社检查及隐患排名情况</div>
    </div>
  </div>
</template>

<script setup>
import YearDetail from './components/YearDetail.vue'
import AppNav from './components/AppNav.vue'
import DiscoverTrends from './components/DiscoverTrends.vue'
</script>

<style lang="scss" scoped>
.layout {
  box-sizing: border-box;
  display: grid;
  grid-template-areas:
    'a b'
    'c d'
    'e e';
  grid-template-rows: 1fr 2fr 2fr;
  grid-template-columns: 1.8fr 1fr;
  row-gap: 16px;
  column-gap: 16px;
  height: calc(100vh - 90px);
  padding: 20px;
  background: #f2f4f5;

  .content {
    position: relative;
    padding: 20px 24px;
    background: #fff;

    .content-title {
      font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
      font-size: 16px;
      font-weight: bold;
      color: rgb(0 0 0 / 85%);
    }
  }

  .item-a {
    grid-area: a;
  }

  .item-b {
    grid-area: b;
  }

  .item-c {
    grid-area: c;
  }

  .item-d {
    grid-area: d;
  }

  .item-e {
    grid-area: e;
  }
}
</style>
