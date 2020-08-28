<template>
  <main>
    <div class="logo_bg">
      <img src="../assets/images/login_logo.png" alt />
      <link rel="stylesheet" href="../../src/assets/css/iconfont.css" />
      <router-link to="/first">
        <span class="iconfont icon-icon_nav_close login_close"></span>
      </router-link>
    </div>

    <div class="num">
      <p class="txt">手机号</p>
      <input id="num_input" class="num_input" type="text" placeholder="请输入手机号" maxlength="11" />
    </div>
    <div class="code">
      <p class="txt">验证码</p>
      <input id="code_input" class="code_input" type="text" placeholder="请输入验证码" maxlength="11" />
      <button class="code_btn">获取验证码</button>
    </div>
    <div class="bottom">
      <router-link to="/personal">
        <button class="bottom_btn" type="submit">手机号注册登录</button>
      </router-link>
      <div class="agree">
        <div
          class="sp"
          :style="{
            backgroundImage: bag.backgroundImage,
            backgroundPosition: bag.backgroundPosition
          }"
          @click="change()"
        ></div>
        <!-- <span> -->
        <!-- <span
          :style="{background:'url(../assets/images/rectangle.png)',backgroundRepeat:'no-repeat' backgroundPosition:'0px 0px'}"
        >-->
        <!-- <router-link> -->
        <!-- <img src="../assets/images/rectangle.png" alt /> -->
        <!-- <img src="../assets/images/rectangle.png" no-repeat0px 0px alt /> -->
        <!-- </router-link> -->
        <!-- </span> -->
        <p>同意《唯品会服务条款》、《隐私条款》、《唯品支付用户服务协议》</p>
      </div>
    </div>
    <div class="bottom_cypher">
      <p>或</p>
      <div class="cypher_btn">
        <router-link to="/code_login" class="txt">密码登录</router-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      bag: {
        backgroundImage:
          "url(" + require("../assets/images/rectangle.png") + ")",

        backgroundRepeat: "no-repeat",
        // backgroundPosition: a + "px" + b + "px",
        backgroundPosition: "0px -22px",
      },
    };
  },
  methods: {
    change() {
      if (this.bag.backgroundPosition == "0px 0px") {
        this.bag.backgroundPosition = "0px -22px";
      } else {
        this.bag.backgroundPosition = "0px 0px";
      }
    },
    // close() {
    //   this.$router.go(-1);
    // },
  },
};
</script>

<style scoped>
main {
  margin: 0px;
}
.logo_bg {
  width: 100%;
  height: 170px;
  text-align: center;
  position: relative;
  /* line-height: 170px; */

  background: url("../assets/images/login_bg.jpg");
}
.logo_bg img {
  width: 125px;
  height: 50px;
  /* border: 1px solid red; */
  margin: 60px auto;
}
.logo_bg .login_close {
  /* width: 10%; */
  font-size: 22px;
  position: absolute;
  left: 93%;
  top: 4%;
}
.num {
  width: 100%;
  height: 52px;
  line-height: 52px;
  /* padding-left: 15px; */
  border-bottom: 1px solid#e7e7e7;
}
.code {
  width: 100%;
  height: 52px;
  line-height: 52px;
  /* padding-left: 15px; */
  border-bottom: 1px solid#e7e7e7;
  position: relative;
}
.num p,
.code p {
  font-size: 16px;
  display: block;
  /* margin-left: 15px; */
  margin: auto 15px;
  float: left;
}
.num .num_input,
.code .code_input {
  height: 20px;
  float: left;

  padding: 16px 0 15px;
  border: none;
  outline: none;
}
.code_btn {
  height: 52px;
  width: 120px;
  font-size: 16px;
  background: #fff;
  color: #4a90e2;
  outline: none;
  border: 0 none;
  border-left: 1px solid #e7e7e7;
  position: absolute;
  right: 0;
}
.bottom {
  width: 100%;
  height: 126px;
  /* background: lawngreen; */
  /* text-align: center; */

  /* line-height: 100px; */
}
.bottom_btn {
  width: 90%;
  height: 44px;
  font-size: 16px;
  color: #fff;
  background: #de3d96;
  border-radius: 22px;
  margin-top: 30px;
  margin-left: 15px;
  outline: none;
  border: 0 none;
}
.agree {
  width: 307.33px;
  height: 40px;
  margin: 12px 15px;
  /* border: 1px solid red; */
  position: relative;
}

.agree .sp {
  height: 22px;
  width: 21px;
  display: inline-block;
  /* border: 1px solid red; */
  /* background: url("../assets/images/rectangle.png") no-repeat 0px 0px; */
  background-size: 100%;
  position: absolute;
}
.agree p {
  height: 37px;
  width: 274.33px;
  font-size: 12px;
  margin-left: 22px;
  line-height: 20px;
  /* border: 1px solid red; */
  display: inline-block;
}
.bottom_cypher {
  width: 100%;
  height: 120px;
  /* background: lightcoral; */
  margin-top: 52px;
  text-align: center;
  border-top: 1px solid #dbdbdb;
  position: relative;
}
.bottom_cypher p {
  height: 18px;
  width: 32px;
  /* border: 1px solid red; */
  text-align: center;
  font-size: 12px;
  color: #dbdbdb;

  background: #fff;
  /* display: block; */
  position: absolute;
  left: 45%;
  top: -12px;
}
.cypher_btn {
  height: 36px;
  line-height: 36px;
  padding: 0 14px;
  border-radius: 18px;
  display: inline-block;
  border: 1px solid #e4007f;

  font-size: 14px;
  margin-top: 18px;
}
.cypher_btn .txt {
  color: #e4007f;
  text-decoration: none;
}
</style>
