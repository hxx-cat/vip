<template>
  <main>
    <header>
      <input type="text" placeholder="2020新款连衣裙" />
    </header>
    <section>
      <div class="top">
        <ul>
          <li v-for="(item,index) in toplist" :style="{background:item.bgcolor}">
            <img :src="item.src" alt />
            <p>{{item.type}}</p>
          </li>
        </ul>
      </div>
      <div class="buttom">
        <div class="brand">品牌精选 低至1折</div>
        <ul>
          <li v-for="(item,index) in brandlist">
            <img :src="item.src" alt class="big" />
            <h3>
              <img src="../assets/images/span05.webp" alt class="small" />
            </h3>
            <p v-if="item.count">{{item.count}}</p>
          </li>
        </ul>
        <span>
          <img src="../assets/images/more.webp" alt />
        </span>
      </div>
      <div class="nav">
        <ul>
          <li
            v-for="(item,index) in navlist"
            @click="changenav(item,index)"
            :class="{nav_color:nav==index}"
          >
            {{item}}
            <span :class="{current:nav==index}"></span>
          </li>
        </ul>
      </div>
      <div class="menu">
        <ul>
          <li
            v-for="(item,index) in menulist"
            @click="changemenu(item,index)"
            :class="{menu_color:menu==index}"
          >
            {{item}}
            <span :class="{triangle:menu==index}"></span>
          </li>
        </ul>
      </div>
      <div class="content">
        <ul>
          <router-link to="/giordano">
            <li v-for="(item,index) in contentlist">
              <router-link :to="'/giordano/'+item.brand">
                <img :src="item.src" alt />
                <div class="content_top">
                  <span class="discount">折后价</span>
                  <h2>{{item.discount}}</h2>
                </div>
                <p>{{item.brand}}</p>
                <div class="content-bottom">
                  <span :class="{new:item.new}" v-if="item.new">新货上架</span>
                  <span :class="{seller:item.seller}" v-if="item.seller">畅销</span>
                </div>
              </router-link>
            </li>
          </router-link>
        </ul>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      nav: 0,
      menu: -1,
      toplist: [
        {
          src: "./src/assets/images/womanwear01.webp",
          type: "连衣裙",
          bgcolor: "#f8f8f8",
        },
        {
          src: "./src/assets/images/womanwear02.webp",
          type: "衬衫",
        },
        {
          src: "./src/assets/images/womanwear03.webp",
          type: "T恤",
        },
        {
          src: "./src/assets/images/womanwear04.webp",
          type: "牛仔裤",
        },
        {
          src: "./src/assets/images/womanwear05.webp",
          type: "半身裙",
        },
        {
          src: "./src/assets/images/womanwear06.webp",
          type: "套装",
        },
        {
          src: "./src/assets/images/womanwear07.webp",
          type: "休闲裤",
        },
        {
          src: "./src/assets/images/womanwear08.webp",
          type: "针织衫",
          bgcolor: "#f8f8f8",
        },
        {
          src: "./src/assets/images/womanwear09.webp",
          type: "运动服",
          bgcolor: "#f8f8f8",
        },
        {
          src: "./src/assets/images/womanwear10.webp",
          type: "更多分类",
          bgcolor: "white",
        },
      ],
      brandlist: [
        {
          src: "./src/assets/images/womanwear11.webp",
          count: "1.5折起",
        },
        {
          src: "./src/assets/images/womanwear12.webp",
          count: "1.1折起",
        },
        {
          src: "./src/assets/images/womanwear13.webp",
          count: "5折封顶",
        },
        {
          src: "./src/assets/images/womanwear14.webp",
          count: "0.1折起",
        },
        {
          src: "./src/assets/images/womanwear15.webp",
          count: "0.9折起",
        },
        {
          src: "./src/assets/images/womanwear16.webp",
          count: "2.5折起",
        },
        {
          src: "./src/assets/images/womanwear17.webp",
          count: "1折起",
        },
      ],
      navlist: ["精选好货", "今日新货", "大牌美裙", "大牌特卖"],
      menulist: [
        "Milli Millu",
        "丽丽",
        "铁狮丹顿",
        "MO&Co.",
        "迪赛尼斯",
        "斐乐",
        "太平鸟",
        "La Chapelle SPORT",
        "麦特斯邦威",
        "BANANA BABY",
        "恩裳",
        "G2000",
        "玖姿",
        "诗篇",
        "森马",
        "唐狮",
        "猫人",
        "菲阁",
        "帕罗",
        "逸阳",
        "德玛纳",
        "...minette",
        "红袖",
        "卡帝乐鳄鱼",
        "ONE MORE",
        "慕托丽",
        "德菲蒂奥",
        "真维斯",
        "XG",
        "nissen",
        "B.Duck",
        "URBAN REVIVO",
        "S.DEER",
        "米可芭纳",
      ],
      contentlist: [
        {
          src: "./src/assets/images/goods10.webp",
          discount: "¥46",
          brand: "米可芭纳",
          new: true,
        },
        {
          src: "./src/assets/images/goods11.webp",
          discount: "¥40.9",
          brand: "木巴伦",
          seller: true,
        },
        {
          src: "./src/assets/images/goods12.webp",
          discount: "¥67",
          brand: "奢步士",
          seller: true,
        },
        {
          src: "./src/assets/images/goods13.webp",
          discount: "¥229",
          brand: "IHIMI",
          seller: true,
        },
        {
          src: "./src/assets/images/goods14.webp",
          discount: "¥49",
          brand: "佐丹奴",
          seller: true,
        },
        {
          src: "./src/assets/images/goods15.webp",
          discount: "¥49",
          brand: "左岸",
          seller: true,
        },
        {
          src: "./src/assets/images/goods16.webp",
          discount: "¥59",
          brand: "La Chapelle SPORT",
          seller: true,
        },
        {
          src: "./src/assets/images/goods17.webp",
          discount: "¥62",
          brand: "La Chapelle SPORT",
          seller: true,
        },
        {
          src: "./src/assets/images/goods18.webp",
          discount: "¥79",
          brand: "米可芭纳",
          new: true,
        },
      ],
    };
  },
  methods: {
    changenav(a, b) {
      this.nav = b;
    },
    changemenu(c, d) {
      this.menu = d;
    },
  },
};
</script>
<style scoped>
main {
  background-color: #f3f4f5;
}
header {
  width: 100%;
  height: 48px;
  background-color: white;
}
header input {
  width: 92%;
  padding: 2% 0px;
  background-color: #f3f4f4;
  border-radius: 0.08px;
  border: none;
  outline: none;
  margin-left: 4%;
  margin-top: 2%;
  margin-bottom: 2%;
  border: 1.3px solid #edeeee;
  line-height: 0.8px;
  font-family: PingFangSC-Regular;
  font-size: 11.52px;
  text-indent: 15px;
  background: url(/dist/search.png?806d5fd…) no-repeat 97%;
  background-size: 23px;
  opacity: 0.7;
}
.top {
  width: 96%;
  height: 204.95px;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 10px;
}
.top ul {
  width: 100%;
  height: 204.95px;
  background-color: white;
}
.top li {
  width: 17%;
  height: 31%;
  border-radius: 50%;
  float: left;
  margin-left: 2%;
  margin-top: 3%;
  margin-bottom: 7%;
  border: 1px solid #eeece9;
}
.top li:nth-of-type(5n) {
  margin-right: 0px;
}
.top li img {
  width: 100%;
  border-radius: 50%;
}
.top p {
  width: 57.6px;
  font-size: 12.48px;
  margin-top: 5px;
  color: black;
  text-align: center;
  background-color: white;
}
.buttom {
  width: 96%;
  height: 183.84px;
  background-color: white;
  margin: 3% auto;
  border-radius: 8px;
}
.buttom .brand {
  width: 143.51px;
  height: 23.04px;
  background-color: red;
  border-radius: 8px 0px;
  color: white;
  font-size: 14.4px;
  text-align: center;
  line-height: 23.04px;
}
.buttom ul {
  width: 100%;
  margin-top: 4%;
}
.buttom li {
  position: relative;
  float: left;
  margin: 2% 2.9%;
  width: 19%;
}

.buttom .big {
  width: 62.4px;
  height: 31.2px;
}
.buttom .small {
  width: 67.2px;
  height: 15.35px;
}
.buttom p {
  font-size: 10.08px;
  color: #d21d1d;
  position: absolute;
  left: 14px;
  top: 38px;
}
.buttom span img {
  width: 58.55px;
  height: 52.31px;
  margin-left: 10px;
}
.nav {
  width: 100%;
  height: 52.8px;
  background-color: white;
  margin-top: 12px;
}
.nav ul {
  width: 100%;
  height: 52.8px;
  border-bottom: 0.02667rem solid #ccc;
}
.nav li {
  float: left;
  margin: 0px 5.3%;
  font-size: 13.44px;
  color: #666666;
  line-height: 52.8px;
  position: relative;
}
.nav .current {
  width: 100%;
  height: 3.5px;
  background-color: #e70068;
  position: absolute;
  bottom: 14%;
  left: 0px;
}
.nav .nav_color {
  color: black;
  font-weight: bold;
}
.menu {
  width: 100%;
  height: 40.31px;
  overflow: auto;
}
.menu ul {
  width: 692%;
  height: 40.31px;
}
.menu li {
  float: left;
  background-color: white;
  margin: 7px 10px;
  height: 22.95px;
  border: 1px solid #c6c6c6;
  text-align: center;
  padding: 0 5.5px;
  font-size: 11.52px;
  line-height: 22.95px;
  position: relative;
  border-radius: 2px;
}
.menu .triangle {
  position: absolute;
  right: 0px;
  bottom: 0px;
  border-bottom: 10px solid #e8439e;
  border-left: 10px solid transparent;
}
.menu .menu_color {
  color: #e8439e;
  border: 1px solid #e8439e;
}
.content {
  width: 100%;
  height: 690px;
  margin-top: 8px;
}
.content ul {
  /* width: 100%; */
  margin-left: 4%;
}
.content li {
  width: 30%;
  background-color: white;
  float: left;
  margin-top: 5px;
  margin-right: 3%;
  border-radius: 5px;
}
.content li:nth-of-type(3n) {
  margin-right: 0px;
}
.content img {
  width: 100%;
}
.content .content_top {
  width: 101.56px;
  height: 25.9px;
  margin-left: 5px;
}
.content_top .discount {
  width: 36.48px;
  height: 14.4px;
  background: linear-gradient(90deg, #f03867, #cb78dc);
  float: left;
  border-radius: 10px;
  margin-top: 5px;
  font-size: 9.6px;
  color: white;
  text-align: center;
  line-height: 14.4px;
}
.content_top h2 {
  float: left;
  margin-left: 4px;
  font-size: 14.4px;
  font-weight: bold;
  margin-top: 2px;
}
.content p {
  color: #585c64;
  font-size: 11.52px;
  margin-left: 5px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  /* 行数 */
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
.content .content-bottom {
  width: 101.76px;
  height: 19.2px;
  margin-top: 10px;
}
.content-bottom .new {
  width: 47.08px;
  height: 14.92px;
  border: 1px solid #32b444;
  border-radius: 10px;
  float: left;
  color: #32b444;
  font-size: 10px;
  text-align: center;
  margin-left: 5px;
  line-height: 14.92px;
}
.content-bottom .seller {
  width: 27.88px;
  height: 14.92px;
  border: 1px solid #f07009;
  border-radius: 10px;
  float: left;
  color: #f07009;
  font-size: 10px;
  text-align: center;
  margin-left: 5px;
  line-height: 14.92px;
}
/* * {
  border: 1px solid red !important;
} */
</style>