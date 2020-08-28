<template>
  <main>
    <header>
      <div class="top">
        <router-link to="/login">
          <span>登录</span>
        </router-link>

        <input type="text" placeholder="大家正在搜索：护肤套装" />
        <p>
          <router-link to="/type">
            <img src="../assets/images/type.png" alt />
          </router-link>
        </p>
      </div>
      <div class="buttom">
        <ul>
          <li v-for="(item,index) in list">
            <router-link :to="item.path">{{item.con}}</router-link>
            <span></span>
          </li>
        </ul>
      </div>
      <div class="down">
        <img src="../assets/images/down.png" />
      </div>
    </header>

    <section class="toper">
      <div class="swipe">
        <!-- <img src="../assets/images/index01.webp" alt /> -->
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <img src="../assets/images/image/index01.webp" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/image/index02.webp" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/image/index03.webp" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/image/index04.webp" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/image/index05.webp" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/image/index06.webp" alt />
          </mt-swipe-item>
          <mt-swipe-item>
            <img src="../assets/images/image/index07.webp" alt />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <h2>
        <img src="../assets/images/promise.jpg" alt />
      </h2>
      <div class="menu">
        <ul>
          <li
            v-for="(item,index) in imglist"
            :style="{background:item.color, 'border-color':item.borcolor}"
          >
            <router-link to="/womanwear">
              <img :src="item.src" alt />
            </router-link>

            <p>{{item.title}}</p>
          </li>
        </ul>
      </div>
      <div class="bigsale">
        <img src="../assets/images/bigsale.png" alt />
        <span>
          <img src="../assets/images/bigsale04.jpg" alt />
          <img src="../assets/images/bigsale05.jpg" alt class="small" />
          <img src="../assets/images/bigsale06.jpg" alt />
          <p>89.2万人正在逛</p>
        </span>
        <ul>
          <li v-for="(item,index) in bigsalelist">
            <img :src="item" alt />
          </li>
        </ul>
      </div>
      <div class="quick">
        <img src="../assets/images/quick.jpg" alt />
        <img src="../assets/images/span01.gif" alt class="span01" />
        <span>精选爆款 已售190+万件</span>
        <ul>
          <li v-for="(item,index) in quicklist">
            <img :src="item.src" alt />
            <p>{{item.brand}}</p>
            <b>{{item.money}}</b>
          </li>
        </ul>
      </div>
      <div class="crazy">
        <img src="../assets/images/crazy.jpg" alt />
        <img src="../assets/images/span02.gif" alt class="span02" />
        <span>1000+品牌正在疯抢</span>
        <ul>
          <li v-for="(item,index) in crazylist">
            <img :src="item.src" alt class="bigbrand" />
            <h2>
              <img :src="item.brandsrc" alt class="smallbrand" />
            </h2>
            <p>{{item.count}}</p>
          </li>
        </ul>
      </div>
      <div class="clearn">
        <img src="../assets/images/clearn.jpg" alt />
        <img src="../assets/images/span03.gif" alt class="span03" />
        <span>极致性价比好物大搜罗</span>
        <ul>
          <li v-for="(item,index) in clearnlist">
            <img :src="item.src" alt />
            <span class="clbrand">{{item.brand}}</span>
            <p>{{item.money}}</p>
          </li>
        </ul>
      </div>

      <div class="content">
        <span>
          <img src="../assets/images/tenclock.jpg" alt />
        </span>
        <img src="../assets/images/content01.webp" alt />
        <img src="../assets/images/content02.webp" alt />
        <ul>
          <li v-for="(item,index) in contentlist">
            <img :src="item.src" alt />
            <span class="ctitle">{{item.ctitle}}</span>
            <span class="cday" v-if="item.cday">{{item.cday}}</span>
            <div class="cbottom">
              <span class="cnum" v-if="item.cnum">{{item.cnum}}</span>
              <span class="ccount">{{item.ccount}}</span>
              <span class="ctext">{{item.ctext}}</span>
            </div>
          </li>
        </ul>
        <img src="../assets/images/content17.webp" alt />
      </div>

      <div class="goods">
        <img src="../assets/images/goods.png" alt />
        <ul>
          <li v-for="(item,index) in goodslist">
            <img :src="item.src" alt />
            <img src="../assets/images/goodsfoot.png" alt class="goodsfoot" />
            <p>{{item.type}}</p>
          </li>
        </ul>
      </div>
      <div class="buycar">
        <router-link to="/shoppingcar_empty">
          <img src="../assets/images/buycar.png" alt class="car" />
        </router-link>
      </div>
      <div class="gotop" v-show="gotop" @click="toTop()">
        <img src="../assets/images/up.png" alt class="up" />
      </div>
      <div class="under">早10晚8，更多特卖，敬请期待！</div>
      <div class="blank"></div>
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
    </section>
  </main>
</template>
<script src="../assets/js/iconfont.js"></script>

<script>
import { Swipe, SwipeItem } from "mint-ui";
export default {
  data() {
    return {
      gotop: false,

      list: [
        {
          con: "今日推荐",
          path: "/index",
        },
        {
          con: "季末特卖",
          path: "/sale",
        },
        {
          con: "最后疯抢",
          path: "/crazybuy",
        },
        {
          con: "唯品快抢",
          path: "/quick",
        },
        {
          con: "品牌清仓",
          path: "/clearn",
        },
        {
          con: "唯品奥莱",
          path: "/outlet",
        },
      ],
      bigsalelist: [
        "./src/assets/images/bigsale01.png",
        "./src/assets/images/bigsale02.png",
        "./src/assets/images/bigsale03.png",
      ],
      imglist: [
        {
          src: "./src/assets/images/menu01.webp",
          title: "女装",
          color: "#fce5f2",
          borcolor: "#fadeeb",
        },
        {
          src: "./src/assets/images/menu02.webp",
          title: "男装",
          color: "#c6e5fd",
          borcolor: "#e1eff8",
        },
        {
          src: "./src/assets/images/menu03.webp",
          title: "鞋包",
          color: "#ffdbd7",
          borcolor: "#fbd6ce",
        },
        {
          src: "./src/assets/images/menu04.webp",
          title: "内衣",
          color: "#f4ddfe",
          borcolor: "#eeddf9",
        },
        {
          src: "./src/assets/images/menu05.webp",
          title: "秋上新",
          color: "#cbebda",
          borcolor: "#d4e9e0",
        },
        {
          src: "./src/assets/images/menu06.webp",
          title: "运动户外",
          color: "#cbf3f8",
          borcolor: "#cbebf0",
        },
        {
          src: "./src/assets/images/menu07.webp",
          title: "母婴童装",
          color: "#fae0e9",
          borcolor: "#fde3ec",
        },
        {
          src: "./src/assets/images/menu08.webp",
          title: "美妆个护",
          color: "#f5d1e6",
          borcolor: "#f3d3e2",
        },
        {
          src: "./src/assets/images/menu09.webp",
          title: "手表配饰",
          color: "#ffefc9",
          borcolor: "#faefc9",
        },
        {
          src: "./src/assets/images/menu10.webp",
          title: "清仓",
          color: "#f9dcde",
          borcolor: "#efd3da",
        },
      ],
      quicklist: [
        {
          src: "./src/assets/images/quick01.jpg",
          brand: "超人",
          money: "¥89",
        },
        {
          src: "./src/assets/images/quick02.jpg",
          brand: "海尔",
          money: "¥89",
        },
        {
          src: "./src/assets/images/quick03.jpg",
          brand: "波图公爵",
          money: "¥125",
        },
        {
          src: "./src/assets/images/quick04.jpg",
          brand: "蓝月亮",
          money: "¥89",
        },
      ],
      crazylist: [
        {
          src: "./src/assets/images/crazy01.jpg",
          brandsrc: "./src/assets/images/crazybrand01.png",
          count: "共914款",
        },
        {
          src: "./src/assets/images/crazy02.jpg",
          brandsrc: "./src/assets/images/crazybrand02.png",
          count: "共1475款",
        },
        {
          src: "./src/assets/images/crazy03.jpg",
          brandsrc: "./src/assets/images/crazybrand03.png",
          count: "共894款",
        },
      ],
      clearnlist: [
        {
          src: "./src/assets/images/clearn01.jpg",
          brand: "耐克",
          money: "¥45",
        },
        {
          src: "./src/assets/images/clearn02.jpg",
          brand: "真维斯",
          money: "¥45",
        },
        {
          src: "./src/assets/images/clearn03.jpg",
          brand: "耐克",
          money: "¥45",
        },
        {
          src: "./src/assets/images/clearn04.jpg",
          brand: "衣品天成",
          money: "¥45",
        },
      ],
      contentlist: [
        {
          src: "./src/assets/images/content03.jpg",
          ctitle: "斯凯奇休闲潮流男女鞋-季末特卖专场",
          cday: "剩2天",
          cnum: "50+款新货",
          ccount: "1.8",
          ctext: "折起",
        },
        {
          src: "./src/assets/images/content04.jpg",
          ctitle: "ZARA专场 即刻开启时尚之旅-季末特卖",
          cday: "剩2天",
          cnum: "300+款新货",
          ccount: "1.5",
          ctext: "折起",
        },
        {
          src: "./src/assets/images/content05.jpg",
          ctitle: "欧莱雅Loreal男士-季末特卖专场",
          cday: "剩2天",
          ccount: "6.1",
          ctext: "折起",
        },
        {
          src: "./src/assets/images/content06.jpg",
          ctitle: "接吻猫KISSCAT品质女包-季末特卖专场",
          cday: "剩2天",
          cnum: "100+款新货",
          ccount: "4.9",
          ctext: "折封顶",
        },
        {
          src: "./src/assets/images/content07.jpg",
          ctitle: "滇园美食-季末特卖专场",
          cday: "剩2天",
          ccount: "2.4",
          ctext: "折起",
        },
        {
          src: "./src/assets/images/content08.jpg",
          ctitle: "郁美净母婴用品-季末特卖专场",
          cday: "剩2天",
          ccount: "2.3",
          ctext: "折起",
        },
        {
          src: "./src/assets/images/content09.jpg",
          ctitle: "斐乐FILA-季末特卖专场",
          cday: "剩2天",
          ccount: "2",
          ctext: "折起",
        },
        {
          src: "./src/assets/images/content10.jpg",
          ctitle: "安踏ANTA运动鞋服专场",
          ccount: "1.8",
          ctext: "折起",
        },
        {
          src: "./src/assets/images/content11.jpg",
          ctitle: "GXG男装专场",
          ccount: "5",
          ctext: "折起",
        },
        {
          src: "./src/assets/images/content12.jpg",
          ctitle: "芬腾FENTENG家居服-季末特卖专场",
          cday: "剩2天",
          cnum: "100+款新货",
          ccount: "4.4",
          ctext: "折封顶",
        },
        {
          src: "./src/assets/images/content13.jpg",
          ctitle: "gxg.jeans男装专场",
          ccount: "4.8",
          ctext: "折封顶",
        },
        {
          src: "./src/assets/images/content14.jpg",
          ctitle: "MO&Co.女装专场",
          ccount: "0.8",
          ctext: "折起",
        },
        {
          src: "./src/assets/images/content15.jpg",
          ctitle: "布布发现童装-季末特卖专场",
          cday: "剩2天",
          ccount: "3.6",
          ctext: "折封顶",
        },
        {
          src: "./src/assets/images/content16.jpg",
          ctitle: "味滋源休闲零食-季末特卖专场",
          cday: "剩2天",
          ccount: "4.2",
          ctext: "折起",
        },
      ],
      goodslist: [
        {
          src: "./src/assets/images/goods01.jpg",
          type: "护肤套装",
        },
        {
          src: "./src/assets/images/goods02.jpg",
          type: "运动休闲鞋",
        },
        {
          src: "./src/assets/images/goods03.jpg",
          type: "连衣裙",
        },
        {
          src: "./src/assets/images/goods04.jpg",
          type: "单肩包",
        },
        {
          src: "./src/assets/images/goods05.jpg",
          type: "女式衬衫",
        },
        {
          src: "./src/assets/images/goods06.jpg",
          type: "石英表",
        },
        {
          src: "./src/assets/images/goods07.jpg",
          type: "女休闲鞋",
        },
        {
          src: "./src/assets/images/goods08.jpg",
          type: "女单鞋",
        },
        {
          src: "./src/assets/images/goods09.jpg",
          type: "女式牛仔裤",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener(
      "scroll",
      () => {
        var scrollTop = this.$el.querySelector(".toper");
        console.log(scrollTop.scrollTop);
        console.log(scrollTop.scrollHeight);
      },
      true
    );
    window.addEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    handleScroll() {
      let scrolltop = this.$el.querySelector(".toper");
      scrolltop.scrollTop > 400 ? (this.gotop = true) : (this.gotop = false);
    },
    toTop() {
      var scrollTop = this.$el.querySelector(".toper");
      const timeTop = setInterval(() => {
        scrollTop.scrollTop = scrollTop.scrollTop -= 100;
        if (scrollTop.scrollTop <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
};
</script>
<style>
.swipe .mint-swipe-items-wrap {
  padding-bottom: 40%;
}
</style>
<style scoped>
header {
  width: 100%;
  /* height: 74.88px; */
  font-size: 13.4399px;
}
.top {
  /* height: 42.24px; */
  width: 100%;
}
.top span {
  width: 10%;
  /* height: 42.24px; */
  display: block;
  text-align: center;
  float: left;
  color: #585c64;
  font-size: 12.4801px;
  font-weight: bold;
  margin-top: 3%;
}
.top input {
  float: left;
  width: 76%;
  /* height: 28.8px; */
  background-color: #f3f4f4;
  border-radius: 12.7px;
  border: none;
  outline: none;
  margin-top: 2%;
  border: 1.3px solid #edeeee;
  color: #98989e;
  text-indent: 10px;
  opacity: 0.7;
  padding: 1%;
  margin-left: 1%;
}
.top p {
  width: 10%;
  /* height: 42.24px; */
  float: right;
}
.top img {
  width: 23.04px;
  height: 23.04px;
  display: block;
  margin: 34% auto;
}
.buttom {
  width: 90%;
  overflow: auto;
  position: relative;
  padding-top: 2%;
}
.buttom::-webkit-scrollbar {
  display: none;
}
.buttom ul {
  width: 138%;
}

.buttom li {
  width: 15%;
  float: left;
  margin-right: 1%;
  line-height: 32.64px;
  text-align: center;
}
.buttom li:nth-of-type(1) {
  margin-left: 6px;
}
.buttom li span {
  width: 16%;
  height: 2.5px;
  background-color: #d34ba8;
  position: absolute;
  left: 13px;
  bottom: 0px;
}
main .down {
  width: 10%;
  position: absolute;
  right: 0px;
  top: 42.2px;
}
.down img {
  width: 56%;
  display: block;
  margin: 6px auto;
}
.router-link-active {
  color: #d34ba8;
}
section {
  width: 100%;
  height: calc(100vh - 74.88px);
  overflow: auto;
  background-color: #f3f4f5;
}
section img {
  width: 100%;
}
section .swipe img {
  width: 100%;
}
.swipe {
  margin-top: 1%;
  background: white;
}
.swipe .mint-swipe-items-wrap {
  position: relative;
  overflow: hidden;
  height: 100%;
  padding-bottom: 40%;
}
h2 {
  margin-top: -3.5px;
  margin-bottom: -5px;
}
.menu {
  width: 100%;
  background-color: white;
}
.menu ul {
  width: 100%;
  height: 161.28px;
  padding-top: 7px;
}
.menu li {
  width: 14%;
  height: 29%;
  border-radius: 50%;
  background-color: red;
  position: relative;
  float: left;
  border: 1px solid pink;
  margin: 0px 4.5% 9% 0.5%;
}
.menu li:nth-of-type(1) {
  margin-left: 7px;
}
.menu li:nth-of-type(6) {
  margin-left: 7px;
}

.menu p {
  font-size: 12px;
  margin-top: 51px;
  margin-left: 2px;
  width: 48px;
  text-align: center;
}
.menu img {
  width: 72px;
  height: 80.64px;
  position: absolute;
  left: -10px;
  top: -8px;
}
.bigsale {
  width: 100%;
  position: relative;
}
.bigsale ul {
  width: 96%;
  position: absolute;
  top: 34%;
  margin-left: 4%;
}
.bigsale li {
  float: left;
  margin-right: 3%;
  width: 30%;
}
.bigsale li:nth-of-type(3) {
  margin-right: 0px;
}
.bigsale img {
  width: 100%;
  margin-top: -12px;
}
.bigsale li img {
  width: 100%;
}
.bigsale span {
  width: 43%;
  position: absolute;
  top: 18%;
  left: 31%;
}
.bigsale span img {
  width: 16.31px;
  height: 16.31px;
  border-radius: 50%;
}
.bigsale p {
  margin-top: -22px;
  margin-left: 54px;
  font-size: 11.5px;
  color: white;
}
.bigsale .small {
  margin-left: -4px;
  margin-right: -4px;
}
.quick {
  width: 100%;
  position: relative;
}
.quick ul {
  width: 90%;
  position: absolute;
  top: 29%;
  left: 6%;
}
.quick ul img {
  width: 100%;
  margin-top: 13%;
}
.quick ul li {
  float: left;
  margin-right: 4%;
  width: 21%;
}
.quick li:nth-of-type(4) {
  margin-right: 0px;
}
.quick p {
  font-size: 10.56px;
  margin-left: 29%;
}
.quick b {
  font-size: 12.48px;
  font-weight: normal;
  color: #d71cec;
  margin-left: 36%;
}
.quick .span01 {
  width: 50.88px;
  height: 13.91px;
  position: absolute;
  top: 12%;
  left: 25%;
}
.quick span {
  position: absolute;
  top: 13%;
  left: 55%;
  font-size: 11.52px;
  color: #808080;
}
.crazy {
  width: 100%;
  position: relative;
}
.crazy ul {
  width: 92%;
  position: absolute;
  top: 25%;
  left: 4%;
}
.crazy ul li {
  width: 30%;
  float: left;
  margin-right: 5%;
  position: relative;
}
.crazy li:nth-of-type(3) {
  margin-right: 0px;
}
.crazy .bigbrand {
  width: 100%;
}
.crazy h2 {
  width: 60%;
  position: absolute;
  left: 24%;
  top: 106%;
}
.crazy p {
  position: absolute;
  left: 32%;
  top: 139%;
  font-size: 11.52px;
  color: #eb247e;
}
.crazy .span02 {
  width: 50.88px;
  height: 13.91px;
  position: absolute;
  top: 13%;
  left: 25%;
}
.crazy span {
  position: absolute;
  top: 10%;
  left: 64%;
  font-size: 11.52px;
  color: #808080;
}
.clearn {
  width: 100%;
  position: relative;
}
.clearn ul {
  width: 92%;
  position: absolute;
  top: 33%;
  left: 5%;
}
.clearn li {
  float: left;
  width: 23%;
  margin-right: 2%;
  position: relative;
}
.clearn li:nth-of-type(4) {
  margin-right: 0px;
}
.clearn .clbrand {
  width: 75%;
  background-color: white;
  position: absolute;
  text-align: center;
  font-size: 10.56px;
  line-height: 16.8px;
  top: 85%;
  left: 11%;
  border-radius: 3px;
  color: black;
}
.clearn p {
  position: absolute;
  font-size: 12.48px;
  color: #f40000;
  left: 33%;
  bottom: -27%;
}
.clearn .span03 {
  width: 50.88px;
  height: 13.91px;
  position: absolute;
  top: 14.5%;
  left: 25%;
}
.clearn span {
  position: absolute;
  top: 15%;
  left: 60%;
  font-size: 11.52px;
  color: #808080;
}
.content {
  width: 100%;
  background-color: #f3f4f5;
}
.content span {
  width: 100%;
  position: relative;
}
.content ul {
  width: 100%;
  margin-bottom: 12px;
}
.content li {
  width: 96%;
  height: 226px;
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  margin-bottom: 12px;
  background-color: white;
}
.content li img {
  width: 100%;
  height: 161.75px;
}
.content .ctitle {
  position: absolute;
  left: 10px;
  top: 173px;
  font-size: 13.44px;
  font-weight: bold;
}
.content .cday {
  position: absolute;
  left: 85%;
  top: 174px;
  color: #98989f;
  font-size: 11.52px;
}
.content .cbottom {
  width: 114px;
  height: 15.44px;
  position: absolute;
  top: 200px;
  left: 11px;
}
.cbottom .cnum {
  width: 67.6px;
  height: 15.44px;
  overflow: hidden;
  float: left;
  background: url("../assets/images/span04.png") no-repeat;
  background-size: 129%;
  color: white;
  font-size: 9.6px;
  text-align: center;
  line-height: 15.44px;
  border-radius: 16px;
  margin-right: 4px;
}
.cbottom .ccount {
  position: absolute;
  float: left;
  font-size: 11.52px;
  color: #de3d96;
}
.cbottom .ctext {
  position: absolute;
  float: right;
  margin-left: 16px;
  font-size: 11.52px;
  color: #585c64;
}
.goods {
  width: 100%;
  border-radius: 2px;
  position: relative;
  background-color: #f3f4f5;
}
.goods ul {
  width: 94%;
  position: absolute;
  top: 20%;
  right: 0px;
}
.goods li {
  width: 30%;
  position: relative;
  float: left;
  margin-right: 2%;
  margin-bottom: 1%;
  border-radius: 3px;
  overflow: hidden;
}
.goods li:nth-of-type(3n) {
  margin-right: 0px;
}
.goods ul img {
  width: 100%;
}
.goods .goodsfoot {
  position: absolute;
  top: 0px;
}
.goods p {
  position: absolute;
  top: 80%;
  left: 25%;
  font-size: 11.52px;
  color: #222222;
}
.buycar {
  position: fixed;
  bottom: 22px;
  left: 14px;
  width: 43.2px;
  height: 43.2px;
  background-color: rgba(34, 34, 34, 0.9);
  border-radius: 50%;
}
.buycar .car {
  width: 24.93px;
  height: 21.6px;
  margin: 11px 9px;
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
.under {
  width: 100%;
  background-color: #f3f4f5;
  color: #999999;
  font-size: 11.52px;
  text-align: center;
  line-height: 49.58px;
}
.blank {
  width: 100%;
  background-color: white;
  height: 5%;
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
</style>
