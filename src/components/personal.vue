<template>
  <main>
    <header>
      <div class="top">
        <div class="nav">
          <router-link to="/first">
            <span class="return">
              <img src="../assets/images/return.png" alt />
            </span>
          </router-link>
          <router-link to="/first">
            <span class="home">
              <img src="../assets/images/home.png" alt />
            </span>
          </router-link>
        </div>
        <div class="middle">
          <div class="vip">
            <img src="../assets/images/vip01.png" alt />
            <img src="../assets/images/vip02.png" alt class="vip_head" />
          </div>

          <div class="level">
            <img src="../assets/images/vip03.png" alt />
            <span>银卡会员</span>
          </div>
          <p>ph_efd0e1aea314d88980da34c3eb8***a7</p>
        </div>
      </div>
      <div class="content">
        <ul>
          <li v-for="(item,index) in viplist">
            <span>
              <img :src="item.src" alt />
            </span>
            <p>{{item.con}}</p>
          </li>
        </ul>
      </div>
    </header>
    <section>
      <div class="menu">
        <ul>
          <li v-for="(item,index) in menulist">
            <p>{{item.text}}</p>
            <span class="right">
              <img src="../assets/images/right.png" alt />
            </span>
            <span class="new" v-if="item.new">
              <img src="../assets/images/vip07.png" alt />
            </span>
          </li>
        </ul>
      </div>
      <div class="signout">
        <router-link to="/login">退出登录</router-link>
      </div>
      <div class="bottom">
        <div class="bottom_top">
          <span class="logo">唯品会</span>
          <span class="client">唯品会客户端，特卖抢不停</span>
          <span class="download">下载</span>
        </div>
        <div class="bottom_nav">
          <a class="index">唯品会首页</a>
          <a class="about">关于我们</a>
          <a class="myself">个人中心</a>
        </div>
        <p class="bottom_middle">Copyright © 2008-2019 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>
        <div class="bottom_under">
          <span class="police"></span>
          <p class="policenum">粤公网安备 44010302000068号</p>
        </div>
      </div>
    </section>
    <section></section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      viplist: [
        {
          src: "./src/assets/images/vip06.png",
          con: "待付款",
        },
        {
          src: "./src/assets/images/vip05.png",
          con: "待收货",
        },
        {
          src: "./src/assets/images/vip04.png",
          con: "全部订单",
        },
      ],
      menulist: [
        {
          text: "我的收藏",
        },
        {
          text: "购物车历史",
        },
        {
          text: "浏览历史",
        },
        {
          text: "申请退换",
        },
        {
          text: "零钱",
        },
        {
          text: "唯品花",
          new: true,
        },
        {
          text: "优惠券",
        },
        {
          text: "我的唯品币",
        },
        {
          text: "收货地址",
        },
        {
          text: "修改登录密码",
        },
        {
          text: "管理支付密码",
        },
        {
          text: "绑定手机",
        },
        {
          text: "实名认证",
        },
        {
          text: "我的银行卡",
        },
      ],
    };
  },
};
</script>
<style scoped>
header .top {
  width: 100%;
  height: 196.8px;
  background: url("../assets/images/personal01.png") no-repeat;
  background-size: 100%;
}

.top .nav {
  width: 100%;
  height: 42.24px;
}
.nav .return {
  width: 44.15px;
  height: 42.24px;
  float: left;
  text-align: center;
  line-height: 52.24px;
}
.return img {
  width: 24.95px;
  height: 24.8px;
}
.nav .home {
  width: 50.66px;
  height: 42.24px;
  float: right;
  text-align: center;
  line-height: 42.24px;
}
.home img {
  width: 21.85px;
  height: 19.2px;
}
.top .middle {
  width: 100%;
  height: 128.94px;
}
.middle .vip {
  width: 76.96px;
  height: 76.96px;
  margin: 0 auto;
  position: relative;
}
.vip img {
  width: 100%;
}
.vip .vip_head {
  width: 68.15px;
  height: 68.15px;
  position: absolute;
  top: 5px;
  left: 5px;
}
.middle .level {
  width: 100%;
  height: 24.95px;
  position: relative;
}
.level span {
  color: #95959f;
  font-size: 11.52px;
  position: absolute;
  top: 6px;
}
.level img {
  width: 23.04px;
  height: 23.04px;
  margin-left: 146px;
}
.middle p {
  font-size: 13.44px;
  text-align: center;
  margin-top: 9px;
}
.content {
  width: 100%;
  height: 80.65px;
  border-bottom: 0.5px solid #ccc;
}
.content li {
  width: 30%;
  height: 79.65px;
  float: left;
  margin-right: 4.5%;
}
.content li:nth-of-type(3) {
  margin: 0px 0px;
}
.content li span {
  display: block;
  width: 36.48px;
  height: 36.48px;
  background-color: #fcf9f1;
  border-radius: 50%;
  margin: 10px auto;
}
.content img {
  width: 19.2px;
  height: 15.2px;
  margin: 11px 9px;
}
.content li p {
  color: #585c64;
  font-size: 11.52px;
  text-align: center;
}
section .menu {
  width: 100%;
  margin-top: 20px;
  border-top: 0.5px solid #ccc;
  border-bottom: 0.5px solid #ccc;
}
.menu ul {
  width: 95%;
  margin-left: 13px;
}
.menu li {
  width: 100%;
  height: 47.83px;
  border-bottom: 0.5px solid #ccc;
}
.menu li:nth-of-type(14) {
  border: none;
}
.menu p {
  float: left;
  font-size: 15.36px;
  color: #555555;
  line-height: 47.83px;
}
.menu .right {
  line-height: 47.83px;
  float: right;
  margin-right: 12px;
}
.menu .right img {
  width: 19.19px;
  height: 19.2px;
  opacity: 0.6;
}
.menu .new img {
  width: 40px;
  height: 19px;
}
.menu .new {
  float: right;
  line-height: 47.83px;
  margin-right: 10px;
}
.signout {
  border-top: 0.5px solid #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  text-align: center;
  font-size: 15.3px;
  color: #555555;
}
.bottom {
  width: 100%;
  height: 172.44px;
  background-color: #f3f4f5;
}
.bottom .bottom_top {
  width: 100%;
  height: 60.46px;
  border-bottom: 0.02667rem solid #ccc;
}
.bottom_top .logo {
  width: 40.31px;
  height: 40.31px;
  background-color: #ea4c88;
  margin: 11px 15px;
  text-align: center;
  line-height: 40.31px;
  float: left;
  border-radius: 10px;
  color: white;
  font-size: 11.52px;
}
.bottom_top .client {
  float: left;
  font-size: 13.44px;
  color: #222222;
  line-height: 60.46px;
}
.bottom_top .download {
  width: 67.18px;
  height: 28.78px;
  border: 1px solid #cf3e8e;
  text-align: center;
  line-height: 28.78px;
  color: #cf3e8e;
  font-size: 11.52px;
  float: right;
  margin: 14px 10px;
  border-radius: 3px;
}
.bottom .bottom_nav {
  width: 100%;
  height: 22.4px;
  color: #585c64;
  text-decoration: none;
  font-size: 13.44px;
}
.bottom_nav .index {
  float: left;
  margin-top: 5px;
  margin-left: -54px;
  margin-right: 8px;
}
.bottom_nav .about {
  float: left;
  margin-top: 5px;
}
.bottom_nav .myself {
  float: right;
  margin-top: 5px;
  margin-right: 5px;
}

.bottom .bottom_middle {
  width: 100%;
  height: 51.2px;
  color: #cccccc;
  font-size: 11.52px;
  text-align: center;
  padding: 14.4px 0 0;
  float: left;
}
.bottom .bottom_under {
  width: 100%;
  height: 19.19px;
  position: relative;
  color: #cccccc;
  font-size: 11.52px;
}
.bottom_under .police {
  margin-left: 24%;
  width: 19.19px;
  height: 19.19px;
  float: left;
  background: url("../assets/images/police.png") no-repeat;
}
.bottom_under .policenum {
  color: #cccccc;
  font-size: 11.52px;
  margin-top: 2px;
  margin-right: 56px;
}
</style>