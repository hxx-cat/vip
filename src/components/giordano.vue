<template>
  <main>
    <header>
      <div class="swipe">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img src="../assets/images/giordano01.webp" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/giordano24.webp" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/giordano25.webp" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/giordano26.webp" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/giordano27.webp" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/giordano28.webp" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/giordano29.webp" alt />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="title">
        <span class="now_price">¥49</span>
        <span class="original_price">¥230</span>
        <span class="discount">2.2折</span>
        <div class="crazy">
          <img src="../assets/images/span06.webp" alt />
        </div>
        <span class="bar"></span>
        <span class="percent">已抢79%</span>
      </div>
      <div class="brand">
        <div class="introduce">
          <p>2020夏季新款纯色休闲polo衫女气质翻领弹力宽松百搭短袖t恤</p>
          <span>佐丹奴</span>
        </div>
      </div>
      <div class="ensure">
        <div class="ensure_con">
          <div class="ensure_img">
            <img src="../assets/images/span08.webp" alt />
          </div>
          <div class="ensure_detail">100%正品 · 专业鉴定 · 正品险</div>
          <div class="ensure_icon">
            <img src="../assets/images/right.png" alt />
          </div>
        </div>
      </div>
      <div class="specifications">
        <div class="specifications_con">
          <div class="colorful">
            <div class="colorful_title">颜色</div>
            <div class="colorful_choice">
              <ul>
                <li
                  v-for="(item,index) in colorful_choice_list"
                  v-bind:class="{current:index==cnum}"
                  v-on:click="change_colorful(index)"
                  :style="{background:item.bgcolor}"
                >
                  <img :src="item.src" alt />
                  <p :style="{color:item.pcolor}">{{item.p}}</p>
                  <span v-if="item.span">已抢光</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="size">
            <div class="size_title">
              <span class="size_name">尺码</span>
              <span class="size_table">查看尺码表</span>
            </div>
            <div class="size_choice">
              <ul>
                <li
                  v-for="(item,index) in size_choice_list"
                  v-on:click="change_size(index)"
                  v-bind:class="{current:index==snum}"
                  :style="{background:item.bgcolor}"
                >
                  <p :style="{color:item.pcolor}">{{item.size}}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="data">
        <div class="data_con">
          <span class="data_product">商品参数</span>
          <span class="data_detail">弹性、版型、衣长等</span>
          <img src="../assets/images/span09.png" alt />
        </div>
      </div>
      <div class="delivery">
        <div class="delivery_con">
          <span class="delivery_title">配送至</span>
          <span class="delivery_address">请选择配送地址</span>
          <img src="../assets/images/address.png" alt />
        </div>
      </div>
      <div class="freight">
        <div class="freight_con">
          <span class="freight_title">运费</span>
          <span class="freight_detail">新会员专享首单满38元免邮（限唯品自营商品，部分商品不可用）</span>
        </div>
      </div>
      <div class="privilege">
        <div class="privilege_con">
          <div class="privilege_left">
            <ul>
              <li v-for="(item,index) in privilege_list">
                <img src="../assets/images/span10.png" alt />
                <span>{{item}}</span>
              </li>
            </ul>
          </div>
          <div class="more">
            <img src="../assets/images/span09.png" alt />
          </div>
        </div>
      </div>
      <div class="shop">
        <div class="shop_con">
          <div class="top">
            <div class="logo">
              <img src="../assets/images/giordano_logo.webp" alt />
            </div>
            <div class="shop_detail">
              <p class="shopname">佐丹奴</p>
              <p class="shopintro">没有陌生人的世界</p>
            </div>
            <div class="shop_colection">
              <button>收藏</button>
            </div>
          </div>
          <div class="down">查看品牌</div>
        </div>
      </div>
      <div class="question">
        <div class="question_top">
          <span class="often">常见问题</span>
          <span class="all">全部</span>
        </div>
        <div class="question_bottom">
          <div class="question_Q">
            <span class="sq">Q</span>
            <span class="pq">洗了之后会褪色吗？会变形吗？</span>
          </div>
          <div class="question_A">
            <span class="sa">A</span>
            <span class="pa">一般洗后不会褪色，也不会变形吗。</span>
          </div>
        </div>
      </div>
      <div class="imgdetail">
        <div class="imgdetail_title">图文详情</div>
        <div class="imgdetail_img">
          <div class="imgdetail_power">
            <img src="../assets/images/giordano07.webp" alt />
          </div>
          <img src="../assets/images/giordano08.webp" alt />
          <img src="../assets/images/giordano09.webp" alt />
          <img src="../assets/images/giordano10.webp" alt />
          <img src="../assets/images/giordano11.webp" alt />
          <img src="../assets/images/giordano12.webp" alt />
          <img src="../assets/images/giordano13.webp" alt />
          <img src="../assets/images/giordano14.webp" alt />
          <img src="../assets/images/giordano15.webp" alt />
          <img src="../assets/images/giordano16.webp" alt />
          <img src="../assets/images/giordano17.webp" alt />
          <img src="../assets/images/giordano18.webp" alt />
          <img src="../assets/images/giordano19.webp" alt />
          <img src="../assets/images/giordano20.webp" alt />
          <img src="../assets/images/giordano21.webp" alt />
          <img src="../assets/images/giordano22.webp" alt />
          <img src="../assets/images/giordano23.png" alt />
        </div>
      </div>
      <div class="price">
        <div class="price_detail">
          <div class="price_title">价格说明</div>
          <div class="price_con">唯品会展示的中间未划横线价格（显示如¥799）为唯品会销售价，该价格是交易成交价，是您最终决定是否购买商品的依据。</div>
          <span>
            展开全部
            <i>
              <img src="../assets/images/down.png" alt />
            </i>
          </span>
        </div>
      </div>
      <div class="under">—· 已经到底啦，再往上逛逛吧 ·—</div>
      <div class="bottom">
        <div class="bottom_top">
          <span class="logo">唯品会</span>
          <span class="client">唯品会客户端，特卖抢不停</span>
          <span class="download">下载</span>
        </div>
        <div class="bottom_nav">
          <a class="index">唯品会首页</a>
          <a class="about">关于我们</a>
          <a class="regist">注册</a>
          <a class="login">登录</a>
        </div>
        <p class="bottom_middle">Copyright © 2008-2019 m.vip.com, All Rights Reserved 粤ICP备08114786号</p>
        <div class="bottom_under">
          <span class="police"></span>
          <p class="policenum">粤公网安备 44010302000068号</p>
        </div>
      </div>
      <div class="gotop">
        <img src="../assets/images/up.png" alt class="up" />
      </div>
    </header>
    <footer>
      <div class="footer_bottom">
        <button class="service">
          <img src="../assets/images/service.png" alt />
        </button>
        <button class="buycar">
          <img src="../assets/images/buycar_black.png" alt />
        </button>
        <button class="add_buycar">
          <router-link to="/shoppingcar">加入购物车</router-link>
        </button>
      </div>
    </footer>
  </main>
</template>
<script>
export default {
  data() {
    return {
      cnum: 0,
      snum: -1,
      colorful_choice_list: [
        {
          src: "./src/assets/images/giordano_white.webp",
          p: "标志白(23)",
        },
        {
          src: "./src/assets/images/giordano02.webp",
          p: "雪花中灰(70)",
        },
        {
          src: "./src/assets/images/giordano03.webp",
          p: "高贵红(36)",
        },
        {
          src: "./src/assets/images/giordano04.webp",
          p: "蔷薇粉红(64)",
        },
        {
          src: "./src/assets/images/giordano05.webp",
          p: "方纳蓝(32)",
          span: true,
          bgcolor: "#f6f6f6",
          pcolor: "hsla(0,0%,68%,.9)",
        },
        {
          src: "./src/assets/images/giordano06.webp",
          p: "标志海军蓝(31)",
        },
      ],
      size_choice_list: [
        {
          size: "S",
        },
        {
          size: "M",
          bgcolor: "#f6f6f6",
          pcolor: "hsla(0,0%,68%,.9)",
        },
        {
          size: "L",
          bgcolor: "#f6f6f6",
          pcolor: "hsla(0,0%,68%,.9)",
        },
        {
          size: "XL",
          bgcolor: "#f6f6f6",
          pcolor: "hsla(0,0%,68%,.9)",
        },
      ],
      privilege_list: [
        "唯品会发货及售后",
        "顺丰配送",
        "7天无理由退货",
        "退货无忧",
        "7天可换",
      ],
    };
  },
  methods: {
    change_colorful(a) {
      this.cnum = a;
    },
    change_size(b) {
      this.snum = b;
    },
  },
};
</script>
<style>
.swipe .mint-swipe-items-wrap {
  padding-bottom: 100%;
}
</style>
<style scoped>
header {
  width: 100%;
  background-color: #f3f4f5;
}
header .swipe {
  width: 100%;
}
.swipe img {
  width: 100%;
}
a {
  color: white;
}
.title {
  width: 100%;
  background: url(../assets/images/span07.webp) no-repeat;
  background-size: 100% 77%;
  overflow: hidden;
  position: relative;
  margin-top: -1.2%;
  background-color: white;
}
.title img {
  width: 100%;
}
.title .now_price {
  float: left;
  margin-top: 3.5%;
  margin-right: 1%;
  font-size: 20px;
  color: white;
  margin-bottom: 5%;
}
.title .original_price {
  float: left;
  margin-top: 5.5%;
  margin-right: 1%;
  font-size: 11.95px;
  color: white;
  text-decoration: line-through;
  margin-bottom: 5%;
  opacity: 0.6;
}
.title .discount {
  float: left;
  font-size: 11.95px;
  margin-top: 5.5%;
  margin-bottom: 10.5%;
  color: white;
  opacity: 0.6;
}
.title .crazy {
  width: 20%;
  float: right;
  margin-top: 2%;
}
.crazy img {
  width: 100%;
}
.title .bar {
  width: 40.2px;
  height: 5.06px;
  background-color: white;
  position: absolute;
  right: 17%;
  bottom: 39%;
  border-radius: 5px;
}
.title .bar::before {
  content: "";
  width: 51.2px;
  height: 5.06px;
  background-color: white;
  opacity: 0.6;
  position: absolute;
  border-radius: 5px;
}
.title .percent {
  float: right;
  margin-top: 10%;
  font-size: 9.6px;
  color: white;
  position: absolute;
  right: 0px;
}
.brand {
  width: 100%;
  border-bottom: 0.02667rem solid #ccc;
  background-color: white;
}
.brand .introduce {
  width: 92%;
  margin: 0 auto;
  padding-bottom: 3%;
}
.introduce p {
  color: #222222;
  font-size: 11.95px;
  margin-bottom: 2%;
}
.introduce span {
  color: #4a90e2;
  font-size: 10.24px;
}
.ensure {
  width: 100%;
  margin-top: 3%;
  background-color: white;
}
.ensure .ensure_con {
  width: 92%;
  margin: 0 auto;
  position: relative;
}
.ensure_con .ensure_img {
  width: 24%;
  float: left;
  margin-top: 2%;
}
.ensure_img img {
  width: 100%;
}
.ensure_con .ensure_icon {
  width: 3%;
  float: right;
  position: absolute;
  right: 0;
  bottom: 21%;
}
.ensure_con .ensure_detail {
  width: 50%;
  font-size: 10.24px;
  color: #585c64;
  margin-left: 28%;
  padding-top: 3%;
  padding-bottom: 3%;
}
.ensure_icon img {
  width: 100%;
}
.specifications {
  width: 100%;
  background-color: white;
  margin-top: 3%;
}
.specifications .specifications_con {
  width: 92%;
  margin: 0 auto;
}
.specifications_con .colorful {
  width: 100%;
}
.colorful .colorful_title {
  width: 100%;
  font-size: 11.95px;
  color: #222222;
  font-weight: bold;
  margin-bottom: 2%;
}
.colorful .colorful_choice {
  width: 100%;
}
.colorful_choice ul {
  width: 100%;
  overflow: hidden;
  margin-top: 4%;
  margin-bottom: 2%;
}
.colorful_choice li {
  float: left;
  border: 1px solid #c5c5c5;
  margin-right: 2.1%;
  margin-bottom: 3%;
  position: relative;
  height: 30px;
}
.colorful_choice li:nth-of-type(3) {
  margin-right: 0px;
}
.colorful_choice img {
  width: 20px;
  float: left;
  margin: 5.5% 5.5px;
}
.colorful_choice p {
  font-size: 10.24px;
  text-align: center;
  float: left;
  margin-right: 7.9px;
  line-height: 28px;
}
.colorful_choice span {
  position: absolute;
  left: 0px;
  bottom: 0px;
  padding: 0px 29.8px;
  background: rgba(34, 34, 34, 0.5);
  font-size: 9.6px;
  color: white;
}
.specifications_con .size {
  width: 100%;
}
.size .size_title {
  width: 100%;
}
.size_title {
  font-size: 11.95px;
  color: #222222;
  font-weight: bold;
}
.size_title .size_table {
  float: right;
  color: #4a90e2;
  font-size: 10.24px;
  font-weight: normal;
}
.size .size_choice {
  width: 100%;
}
.size_choice ul {
  width: 100%;
  overflow: hidden;
  margin-top: 4%;
  margin-bottom: 2%;
}
.size_choice li {
  float: left;
  border: 1px solid #c5c5c5;
  margin-right: 1.5%;
  margin-bottom: 3%;
  height: 26px;
  color: #222;
  font-size: 10.24px;
  padding: 0% 14.6%;
  line-height: 26px;
}
.size_choice li:nth-of-type(3) {
  margin-right: 0px;
}
li.current {
  border: 1px solid #de3d96;
  background: url("../assets/images/gouxuan.png") no-repeat 100% 100%;
  background-size: 17%;
}
.current p {
  color: #de3d96;
}
.data {
  width: 100%;
  background-color: white;
  margin-top: 3%;
}
.data .data_con {
  width: 92%;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
}
.data_con .data_product {
  font-size: 11.95px;
  color: #222222;
  font-weight: bold;
}
.data_con .data_detail {
  font-size: 10.24px;
  color: #585c64;
  margin: 0 2%;
}
.data_con img {
  width: 4%;
  float: right;
  margin-top: 3%;
}
.delivery {
  width: 100%;
  background-color: white;
  margin-top: 3%;
  border-bottom: 0.02667rem solid #ccc;
}
.delivery .delivery_con {
  width: 92%;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
}
.delivery .delivery_title {
  font-size: 11.95px;
  color: #222222;
  font-weight: bold;
}
.delivery .delivery_address {
  font-size: 10.24px;
  color: #585c64;
}
.delivery img {
  width: 4%;
  margin-bottom: -3px;
}
.freight {
  width: 100%;
  background-color: white;
}
.freight .freight_con {
  width: 92%;
  margin: 0 auto;
  padding-top: 10px;
  padding-bottom: 10px;
}
.freight .freight_title {
  font-size: 11.95px;
  color: #222222;
  font-weight: bold;
}
.freight .freight_detail {
  width: 85%;
  float: right;
  font-size: 10.24px;
  color: #585c64;
  margin-right: 1.5%;
}
.privilege {
  height: 59px;
  width: 100%;
  background-color: white;
  margin-top: 3%;
}
.privilege .privilege_con {
  width: 92%;
  margin: 0 auto;
  padding-top: 10px;
}
.privilege_con .privilege_left {
  width: 92%;
  font-size: 10.24px;
}
.privilege_left ul {
  width: 100%;
}
.privilege_left li {
  float: left;
  margin-right: 8px;
  margin-bottom: 10px;
}
.privilege_left li img {
  width: 12px;
}
.privilege_left span {
  color: #585c64;
}
.privilege_con .more {
  float: right;
  margin-top: -6%;
  width: 4%;
}
.more img {
  width: 100%;
}
.shop {
  width: 100%;
  background-color: white;
  margin-top: 3%;
}
.shop .shop_con {
  width: 100%;
  margin: 0 auto;
  padding-top: 10px;
}
.shop_con .top {
  width: 92%;
  height: 60px;

  margin: 0 auto;
}
.top .logo {
  width: 57px;
  height: 45px;
  border: 1px solid #e7e7e7;
  float: left;
}
.logo img {
  width: 100%;
  margin-top: 7px;
  margin-bottom: 7px;
}
.top .shop_detail {
  margin-left: 72px;
  margin-top: 1px;
  padding: 8px 0px;
}
.shop_detail .shopname {
  font-size: 12px;
  color: #222222;
}
.shop_detail .shopintro {
  font-size: 10.24px;
  color: #98989f;
}
.top .shop_colection {
  width: 54.61px;
  height: 19.43px;
  float: right;
  margin-top: -35px;
}
.shop_colection button {
  width: 100%;
  border: 1px solid #de3d96;
  border-radius: 0.21333rem;
  font-size: 12px;
  color: #ed4ca9;
  text-align: center;
  line-height: 19.43px;
  background: white;
}
.shop_con .down {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #585c64;
  font-size: 12px;
  border-top: 0.02667rem solid #ccc;
}
.question {
  width: 100%;
  height: 80px;
  background-color: white;
  margin-top: 3%;
}
.question .question_top {
  width: 92%;
  height: 17px;
  margin: 0 auto;
  padding-top: 10px;
  margin-bottom: 5px;
}
.question_top .often {
  font-size: 12px;
  font-weight: bold;
  float: left;
}
.question_top .all {
  float: right;
  font-size: 10.24px;
  margin-bottom: 0px;
}
.question .question_bottom {
  width: 92%;
  margin: 0 auto;
}
.question_bottom .question_Q {
  width: 100%;
}
.question_Q .sq {
  width: 13.65px;
  height: 13.65px;
  background: #8396be;
  color: white;
  font-size: 10.24px;
  text-align: center;
  line-height: 13.65px;
  border-radius: 3px;
  display: inline-block;
}
.question_Q .pq {
  color: #585c64;
  font-size: 12px;
  margin-left: 4px;
}
.question_A .sa {
  width: 13.65px;
  height: 13.65px;
  background: #e6e8f4;
  color: #8396be;
  font-size: 10.24px;
  text-align: center;
  line-height: 13.65px;
  border-radius: 3px;
  display: inline-block;
}
.question_A .pa {
  color: #585c64;
  font-size: 12px;
  margin-left: 4px;
}
.imgdetail {
  width: 100%;
  background-color: white;
  margin-top: 3%;
}
.imgdetail .imgdetail_title {
  width: 92%;
  margin: 0 auto;
  font-size: 12px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
}
.imgdetail .imgdetail_img {
  width: 100%;
}
.imgdetail_img img {
  width: 100%;
}
.imgdetail_img .imgdetail_power {
  width: 92%;
  margin: 0 auto;
  margin-bottom: 10px;
}
.imgdetail_img img {
  margin-top: -1.3%;
}
.price {
  width: 100%;
  background-color: white;
  height: 86px;
}
.price .price_detail {
  width: 92%;
  margin: 0 auto;
  height: 86px;
}
.price_detail .price_title {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
  padding-top: 8px;
}
.price_detail .price_con {
  font-size: 10.24px;
  color: #585c64;
}
.price_detail span {
  float: right;
  font-size: 10.24px;
  color: #98989f;
  margin-top: 5px;
}

.price_detail i img {
  width: 15%;
}
.under {
  width: 100%;
  color: #98989f;
  font-size: 10.24px;
  text-align: center;
  height: 10px;
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
.bottom_nav .login {
  float: right;
  margin-top: 5px;
  margin-right: 5px;
}
.bottom_nav .regist {
  float: right;
  margin-top: 5px;
  margin-right: 11px;
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
footer {
  width: 100%;
  background-color: white;
  bottom: 0px;
  left: 0px;
  right: 0px;
  position: fixed;
}
footer .footer_bottom {
  width: 92%;
  height: 50px;
  /* position: fixed; */
  margin: 0 auto;
  padding-top: 15px;
  padding-bottom: 10px;
}
.footer_bottom .service {
  float: left;
  border: none;
  margin-top: 10px;
  background-color: white;
}
.service img {
  width: 80%;
}
.footer_bottom .buycar {
  width: 73.16px;
  height: 44px;
  border-radius: 20px;
  border: none;
  outline: none;
  border: 1px solid #e1e1e1;
  background-color: white;
  float: left;
  margin-left: 3px;
}
.buycar img {
  width: 34%;
}
.footer_bottom .add_buycar {
  width: 179px;
  height: 44px;
  border-radius: 20px;
  outline: none;
  border: 1px solid #e1e1e1;
  background-color: #de3d96;
  color: white;
  text-align: center;
  line-height: 35.84px;
  float: right;
  font-size: 15px;
}
.gotop {
  position: fixed;
  bottom: 22px;
  right: 15px;
  width: 43.2px;
  height: 43.2px;
  background-color: rgba(34, 34, 34, 0.9);
  border-radius: 50%;
}
.gotop .up {
  width: 32.93px;
  height: 31.6px;
  margin: 5px 5px;
}

/* *{
  border:1px solid red !important;
} */
</style>