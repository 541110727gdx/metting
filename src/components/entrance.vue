<template>
  <div class="all-box">
    <!-- <van-button type="default">库存</van-button>
    <van-button type="primary">价格管理</van-button>
    <van-button type="info">收银台</van-button> -->

    <businessHeader class="header-box"></businessHeader>
    <div class="content-box">

      <keep-alive>
        <router-view v-if="$route.meta.isKeepAlive" />
      </keep-alive>
      <router-view v-if="!$route.meta.isKeepAlive" />
    </div>

    <businessDrawer></businessDrawer>
  </div>
</template>

<script>
import businessHeader from "./businessHeader"; //暂时入口
import businessDrawer from "./businessDrawer"; //暂时入口
export default {
  name: "Entrance",
  components: {
    businessHeader,
    businessDrawer
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.all-box {
  height: 100%;
}
.content-box {
  height: 86%;
  position: fixed;
  top: 14%;
  z-index: 2;
  width: 100%;
  padding-bottom: 44px;
  overflow-y: auto;
}
</style>
