<template>
  <van-popup class="drawer-box" v-model="showSidbar" position="left">
    <div class="account-msg">
      <van-image class="member-tx" round width="3rem" fit="cover" height="3rem" :src="userInfo.pic" />
      <div class="member-name">{{userInfo.roldName}}</div>
    </div>

    <van-cell class="drawer-item" :class="{selected:item.selected}" v-for="(item,index) in drawerList" :key="index" @click="changeDrawerItem(item.path,index) " :title="item.name" :icon="item.icon" />
    <!-- 退出登录按钮 -->
    <van-cell class="drawer-item-logout" @click="logout()" title="退出登录" />
  </van-popup>

</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    showSidbar: {
      get() {
        return this.$store.getters.showSidbar;
      },
      set(val) {
        this.$store.commit("SET_SHOWSIDBAR", val);
      }
    },

    ...mapGetters(["loginType", "userInfo"])
  },
  data() {
    return {
      drawerList: []
    };
  },
  methods: {
    onChange() {
      //   Notify({ type: "primary", message: index });
    },
    changeDrawerItem(path, index) {
      if (this.$route.path != "/entrance/" + path) {
        this.$router.push("/entrance/" + path);
      }

      this.drawerList.forEach((item, idx) => {
        item.selected = false;
        if (index == idx) {
          localStorage.setItem("drawer", idx);
          item.selected = true;
        }
      });
      this.showSidbar = false;
    },
    logout() {
      this.$router.push("/");
      localStorage.removeItem("drawer");
    }
  },
  created() {
    let routerChildren = [...this.$router.options.routes[1].children];

    for (let i in routerChildren) {
      // if (this.loginType == routerChildren[i].meta.type) {
        let drawerListItem = {
          name: routerChildren[i].name,
          id: i,
          selected: false,
          path: routerChildren[i].path,
          icon: routerChildren[i].icon
        };

        this.drawerList.push(drawerListItem);
        console.log(this.loginType);
      // }
    }
    let selectNum = 0;
    if (localStorage.getItem("drawer")) {
      selectNum = localStorage.getItem("drawer");
    } else {
      localStorage.setItem("drawer", 0);
    }

    if (this.drawerList[selectNum]) {
      this.drawerList[selectNum].selected = true;
    }

    // 显示头像和名字
    console.log(this.userInfo);
  }
};
</script>

<style lang="scss" scoped>
.drawer-box {
  box-sizing: border-box;
  height: 100%;
  width: 60%;
  padding: 2rem 1rem 0;
  .account-msg {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1.875rem;
    .member-tx {
      // margin: 0 auto;
      margin-bottom: 1rem;
    }
    .member-name {
      margin-bottom: 1rem;
    }
  }

  .drawer-item {
    height: 2.5rem;
    border-bottom: none;
    margin-bottom: 1rem;
    i {
      font-size: 1.5rem;
      margin-left: 2rem;
    }
  }
  .drawer-item-logout {
    height: 2.5rem;
    position: fixed;
    left: 0.5rem;
    bottom: 1rem;
    background: url("../assets/images/退出.png") 3rem no-repeat;
  }
  .drawer-item:after {
    border-bottom: none;
  }
  .selected {
    background-image: linear-gradient(90deg, #ff7901 3%, #fe5845 100%);
    border-radius: 50px;
    color: #fff;
  }
}
</style>
