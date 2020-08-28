<template>
  <main>
    <div class="logo_bg">
      <img src="../assets/images/login_logo.png" alt />
      <link rel="stylesheet" href="../../src/assets/css/iconfont.css" />
      <router-link to="/first">
        <span class="iconfont icon-icon_nav_close code_close"></span>
      </router-link>
    </div>

    <div class="num">
      <p class="txt">登录名</p>
      <input id="num_input" class="num_input" type="text" placeholder="请输入手机号或邮箱" maxlength="11" />
    </div>
    <div class="code">
      <p class="txt">密码</p>
      <input id="code_input" class="code_input" type="text" placeholder="请输入密码" maxlength="11" />
      <b>
        <div class="eye_img">
          <!-- <img src="../assets/images/eye.png" alt /> -->
        </div>
        <!-- <img src="../assets/images/eye.png" alt /> -->
      </b>
      <!-- <button class="code_btn">获取验证码</button> -->
    </div>
    <div class="bottom">
      <router-link to="/personal">
        <button class="bottom_btn" type="submit">登 录</button>
      </router-link>
      <!-- <div class="agree">
        <span>
         
        </span>
        <p>同意《唯品会服务条款》、《隐私条款》、《唯品支付用户服务协议》</p>
      </div>-->
    </div>

    <div class="forget">
      <p>忘记密码</p>
      <!-- <router-link to="#" class="forget">忘记密码</router-link> -->
    </div>
    <div class="bottom_cypher">
      <p>或</p>
      <div class="cypher_btn">
        <router-link to="/login" class="txt">手机号注册登录</router-link>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  methods: {
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

  /* line-height: 170px; */

  background: url("../assets/images/login_bg.jpg");
}
.logo_bg img {
  width: 125px;
  height: 50px;
  /* border: 1px solid red; */
  margin: 60px auto;
}
.logo_bg .code_close {
  /* width: 10%; */
  font-size: 22px;
  position: absolute;
  left: 93%;
  top: 1%;
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
  width: 50px;
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
.code b {
  height: 100%;
  width: 50px;
  text-align: center;
  /* line-height: 50%; */
  /* border: 1px solid red; */
  background: url("../assets/images/eye.png") no-repeat 50% 50%;
  position: absolute;

  right: 0px;
}
.forget {
  height: 52px;
  width: 100%;
  /* border: 1px solid red; */
}
.forget p {
  float: right;
  font-size: 14px;
  color: #0079ff;
  line-height: 52px;
  padding-right: 15px;
}
/* .code .eye_img {
  height: 20px;
  width: 30px;
  margin: 15px auto;
  background: url("../assets/images/eye.png") no-repeat 50% 50%;

  text-align: center;
  border: 1px solid red;
} */
/* .code img {
  height: 100%;
  width: 100%;
  position: absolute;

  right: 0px;
  background: url("../assets/images/eye.png") no-repeat 50% 50%;

  display: inline-block;
} */
/* .code_btn {
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
} */
.bottom {
  width: 100%;
  height: 74px;
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

.bottom_cypher {
  width: 100%;
  height: 120px;
  /* background: lightcoral; */
  margin-top: 9px;
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