<template>
  <div class="box" v-if="$route.path=='/entrance/index'">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-tabs @click="tabChange" color="darkorange">
          <van-tab title="我参与的">
            <mettingItem :list="list" @getItem="getItemMsg"></mettingItem>
          </van-tab>
          <van-tab title="与我有关">2</van-tab>
          <van-tab title="其他">
            <mettingItem :list="list"></mettingItem>
          </van-tab>
        </van-tabs>
      </van-list>
    </van-pull-refresh>
    <div class="add-btn">
      <van-button class="vant-add-btn" round type="warning" @click="goAddMetting">+ 新建会议纪要</van-button>
    </div>
  </div>
  <router-view v-else />
</template>

<script>
import mettingItem from "@/components/mettingItem";
import { Toast } from "vant";

export default {
  name: "index",
  components: {
    mettingItem
  },
  data() {
    return {
      active: 1,
      list: [
        {
          title: "关于评审原型图的会议",
          main:
            "The whole night,my classmates and i went to and celebrated the future of our life.",
          persons: "彭万里、高大山、谢大海...",
          date: "2020-02-10",
          type: "1",
          id:'0'
        },
        {
          title: "关于评审原型图的会议",
          main:
            "The whole night,my classmates and i went to and celebrated the future of our life.",
          persons: "彭万里、高大山、谢大海...",
          date: "2020-02-07",
          type: "0",
          id:'1'
        },
        {
          title: "关于评审原型图的会议",
          main:
            "The whole night,my classmates and i went to and celebrated the future of our life.",
          persons: "彭万里、高大山、谢大海...",
          date: "2020-02-01",
          type: "0",
          id:'2'
        }
      ],
      count: 0,
      isLoading: true,
      loading: false,
      finished: false
    };
  },
  created() {},
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    getItemMsg(item) {
      this.$router.push({
        path:'/entrance/index/mettingDetail',
        name:'会议详情',
        params:{
          item:item
          }
        })
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          let newItem = {
            title: "关于评审原型图的会议",
            main:
              "The whole night,my classmates and i went to and celebrated the future of our life.",
            persons: "彭万里、高大山、谢大海...",
            date: "2019-02-07",
            type: "0",
            id:'0'
          };
          this.list.push(newItem);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 20) {
          this.finished = true;
        }
      }, 1000);
    },
    tabChange(name, title) {
      console.log(name);
      console.log(title);
    },
    goAddMetting() {
      this.$router.push({ path: "/entrance/index/addMetting" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box {
  padding-bottom: 5rem;
  .add-btn {
    height: 5rem;
    background: #fff;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    padding-top: 1rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    .vant-add-btn {
      padding: 0 3rem;
    }
  }
}
/deep/ .van-tabs__nav--line {
  background: #f7f9fc;
}
/deep/ .van-hairline--top-bottom::after,
.van-hairline-unset--top-bottom::after {
  border-width: 0;
}
/deep/ .van-tab--active {
  color: darkorange;
}
</style>
