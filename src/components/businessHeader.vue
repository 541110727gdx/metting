<template>
  <van-row type="flex" class="continer" justify="space-between">
    <van-col span="8" v-if="!showBack">
      <div class="menu-box">
        <van-icon @click="showSidbar" name="wap-nav" />

      </div>
    </van-col>
    <van-col class="menu-box" span="8" v-else>
      <!-- <van-button type="default" @click="goback">后退</van-button> -->
      <van-icon class="go-back" name="arrow-left" @click="goback" />
    </van-col>

    <van-col span="8" class="page-name">{{headName}}</van-col>

  </van-row>
</template>

<script>
export default {
  name: "businessHeader",
  data() {
    return { headName: "", showBack: false };
  },
  created() {},
  watch: {
    $route: {
      handler(to) {
        console.log(to);
        this.headName = to.name;
        if (to.matched.length > 2) {
          this.showBack = true;
        } else {
          this.showBack = false;
        }
      },
      immediate: true
    }
  },
  methods: {
    showSidbar() {
      this.$store.commit("SET_SHOWSIDBAR", true);
    },
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.continer {
  padding: 0 1rem;
  height: 14%;
  background: rgba(0, 0, 0, 0.8);
  box-sizing: border-box;
  justify-content: flex-start;

  width: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  /deep/ .van-col {
    height: 3rem;
    padding-top: 1rem;
    box-sizing: border-box;
  }
  .page-name {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 2.3rem;
  }
}
.go-back {
  color: #fff;
  font-size: 1.5rem;
  // margin: 0.4rem 0 0 -5rem;
}
.menu-box {
  font-size: 29px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  color: #fff;
}
</style>
