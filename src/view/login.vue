<template>
  <div class="login">
    <div class="login-top">
      <div class="login-text">
        <span>登录</span>
        <span>企业中心</span>
      </div>
      <div class="login-icon">
      </div>
    </div>
    <van-cell-group class="login-form">
      <van-field class="login-input phone" placeholder="手机号码" v-model="nameValue" center clearable> </van-field>
      <van-field class="login-input pwd" v-model="pwdValue" placeholder="密码" center clearabl type="password"></van-field>
    </van-cell-group>
    <van-button class="sub-btn" type="danger" @click="loginEvent">登录</van-button>
    <!-- <div class="wechat">
      <span>更多登录方式</span>
      <img class="we-img" src="../assets/images/微信.png" alt="">
    </div> -->
    <div class="agreement">
      <span class="desc">登录即您已阅读同意</span>
      <span class="content">用户协议及隐私政策</span>
    </div>
  </div>
</template>

<script>
import { login } from "@/api/metting";
import { mapGetters } from "vuex";
export default {
  name: "login",
  data() {
    return {
      nameValue: "",
      pwdValue: "",
      routers: []
    };
  },

  computed: {
    ...mapGetters(["loginType"])
  },
  methods: {
    loginEvent() {
      let data = {
        name: this.nameValue,
        password: this.pwdValue
      };
      login(data).then(res => {
        console.log(res);
        this.$store.commit("LOGIN_TYPE", res.data.data.rold);
        this.$store.commit("SET_USERINFO", res.data.data);

        // let routerChildren = [...this.$router.options.routes[1].children];
        // for (let i in routerChildren) {
        //   if (this.loginType == routerChildren[i].meta.type) {
        //     this.routers.push(routerChildren[i]);
        //   }
        // }
        this.$router.push({path:'entrance/index'});
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  padding: 30% 5% 0 5%;
  background: #fff;
  box-sizing: border-box;
  .login-top {
    display: flex;
    justify-content: space-between;
    .login-text {
      font-size: 1.75rem;
      font-weight: bold;
      display: flex;
      text-align: left;
      flex-direction: column;
    }
    .login-icon {
      width: 2.7rem;
      height: 2.7rem;
      background: url("../assets/images/logo位置.png") no-repeat;
      background-color: #8f9bb3;
      border: 0.875rem solid #8f9bb3;
      border-radius: 50%;
      opacity: 0.5;
    }
  }
  .login-form {
    margin-top: 4rem;
    .login-input {
      width: 100%;
      margin-bottom: 1.5rem;
      border: 1px solid rgb(143, 155, 179);
      border-radius: 1.46875rem;
      background-color: rgba(143, 155, 179, 0.06);
    }
    .phone {
      background:#faf9f9 url("../assets/images/手机号码.png") 1.5rem no-repeat;
    }
    .pwd {
      background:#faf9f9 url("../assets/images/密码.png") 1.5rem no-repeat;
    }
  }
}
.get-code {
  color: #ff891c;
  border-radius: 1rem;
}
.sub-btn {
  width: 100%;
  margin: 0 auto;
  height: 3.5rem;
  border-radius: 1.75rem;
  margin-top: 2.125rem;
  font-size:1.2rem;
  background-image: linear-gradient(90deg, #ff7901 3%, #fe5845 100%);
  border: 0;
}
.wechat {
  display: flex;
  margin-top: 2.125rem;
  flex-direction: column;
  align-items: center;
  .we-img {
    margin-top: 1.5rem;
    width: 2.625rem;
    height: 2.625rem;
  }
}
.agreement {
  margin-top: 10rem;
  font-size: 0.875rem;
  .desc {
    font-family: PingFangSC-Medium;
    color: #8f9bb3;
  }
  .content {
    font-family: PingFangSC-Medium;
    color: #f39946;
  }
}
/deep/ .van-cell-group,
.van-cell {
  background: rgba(0, 0, 0, 0);
  width: 95%;
  margin: 0 auto;
  border: 0;
}
/deep/ .van-cell-group::after {
  border-width: 0;
}
/deep/ .van-cell:not(:last-child)::after {
  border: 0;
}
/deep/.van-cell:last-child ::after {
  border-bottom: 1px solid #fff;
}
/deep/ .van-cell {
  border-bottom: 1px solid #fff;
}
/deep/ .van-cell__title span {
  color: #8f9bb3;
}
/deep/ .van-field__label {
  width: 72px;
}
/deep/ .van-field__control,
.van-field__control::-webkit-input-placeholder {
  margin-left: 3.4375rem;
  color: #8f9bb3;
  
}
/deep/ .van-field__control,
.van-field__control::-moz-input-placeholder {
  margin-left: 3.4375rem;
  color: #8f9bb3;
}
/deep/ .van-field__control,
.van-field__control::-ms-input-placeholder {
  margin-left: 3.4375rem;
  color: #8f9bb3;
}
</style>
