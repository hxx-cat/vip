<template>
  <main>
    <div class="go">
      <header>
        <img class="header_bg" src="../assets/images/header_crazy_bg.webp" alt />
        <div class="header_left">
          <img src="../assets/images/crazy_left.png" alt />
          <!-- <div class="message">
          <ul>
            <li>梅****正在抢购米基的睡裙</li>
            <li>梅****正在抢购米基的睡裙</li>
            <li>梅****正在抢购米基的睡裙</li>
            <li>梅****正在抢购米基的睡裙</li>
          </ul>
          </div>-->
        </div>
      </header>
      <div class="craybuy_nav">
        <!-- <div class="re"></div> -->
        <div class="type">
          <ul ref="lis">
            <li v-for="(item, index) in list">{{ item.txt }}</li>
          </ul>
        </div>
      </div>
      <!-- C位大牌 -->
      <div class="C_site">
        <!-- <div class="C_site_body"> -->
        <div class="c_bg">
          <div class="C_site_top">
            <img src="../assets/images/purchase_top.webp" alt />
          </div>
          <div class="c_site_con">
            <img src="../assets/images/purchase_body.webp" alt />
          </div>
          <!-- <div class="C_site_body_con"> -->
          <!-- <ul>
          <li class="body_img" v-for="(item,index) in list_img">
            <img :src="item.src" alt />
          </li>
          </ul>-->
          <ul>
            <li v-for="(item,index) in list_img">
              <i>
                <img :src="item.src1" alt />
              </i>

              <span>
                <img :src="item.src2" alt />
                <b>{{item.title}}</b>
              </span>
            </li>
          </ul>
        </div>

        <!-- </div> -->
        <!-- </div> -->
      </div>
      <div class="like">
        <div class="like_bg">
          <div class="like_top">
            <img src="../assets/images/like_top.webp" alt />
          </div>
          <div class="like_con">
            <img src="../assets/images/like_con.webp" alt />
          </div>

          <ul>
            <li>
              <img src="../assets/images/like_i1.webp" alt />
              <span>女单鞋</span>
            </li>
            <li>
              <img src="../assets/images/like_i2.webp" alt />
              <span>女式衬衫</span>
            </li>
            <li>
              <img src="../assets/images/like_i3.webp" alt />
              <span>女休闲鞋</span>
            </li>
            <li>
              <img src="../assets/images/like_i4.webp" alt />
              <span>女式牛仔裤</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="clear_season">
        <div class="clear_season_top">
          <img src="../assets/images/pop_goods_top.webp" alt />
        </div>
        <div class="clear_season_con">
          <div class="clear_left">
            <div class="clear_left_bg">
              <img src="../assets/images/clear_left_bg.webp" alt />
            </div>
            <ul>
              <li>
                <i>
                  <img src="../assets/images/clear_left_i1.webp" alt />
                </i>
                <span>
                  <img src="../assets/images/clear_left_c1.webp" alt />
                  <b>3折封顶</b>
                </span>
              </li>
              <li>
                <i>
                  <img src="../assets/images/clear_left_i2.webp" alt />
                </i>
                <span>
                  <img src="../assets/images/clear_left_c2.webp" alt />
                  <b>3折封顶</b>
                </span>
              </li>
            </ul>
          </div>

          <div class="clear_right">
            <div class="clear_right_bg">
              <img src="../assets/images/clear_right_bg.webp" alt />
            </div>
            <ul>
              <li>
                <i>
                  <img src="../assets/images/clear_right_i1.webp" alt />
                </i>
                <span>
                  <img src="../assets/images/popular.webp" alt />
                </span>
                <div>
                  <span class="clear_txt_left">连衣裙</span>
                  <span class="clear_txt_right">榜</span>
                </div>
              </li>
              <li>
                <i>
                  <img src="../assets/images/clear_right_i2.webp" alt />
                </i>
                <span>
                  <img src="../assets/images/popular.webp" alt />
                </span>
                <div>
                  <span class="clear_txt_left">女单鞋</span>
                  <span class="clear_txt_right">榜</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 分类 -->
      <div class="crazy_type">
        <div class="type_top">
          <img src="../assets/images/list_top.webp" alt />
        </div>
        <div class="type_left" ref="type_left">
          <ul>
            <li
              class="nav1"
              v-for="(item, index) in list_type_left"
              :key="index"
              @click="jump(index)"
              :class="{ current: num == index }"
            >{{ item.con }}</li>
          </ul>
        </div>

        <div class="type_right" ref="type_right">
          <ul class="type_right_u">
            <li class="section" v-for="(item,index) in list_type_right_all" :key="index">
              <ul class="type_right_u2">
                <!-- <li v-for="(item, index) in list_type_right">{{ item.con }}</li> -->
                <li>
                  <div class="type_right_top">
                    <h2>{{item.title_top}}</h2>
                    <h3>{{item.title_bottom}}</h3>
                  </div>
                  <div class="type_right_nav">
                    <ul>
                      <li v-for="(item, index) in list_type_right_nav">{{ item.name }}</li>
                    </ul>
                  </div>
                  <div class="type_right_con">
                    <ul>
                      <li v-for="(item, index) in list_type_right_con">
                        <h4>
                          <img :src="item.img_top" alt />
                        </h4>
                        <h5>
                          <img :src="item.img_span" alt />
                        </h5>
                        <b>{{ item.img_name }}</b>
                        <span>{{ item.img_btn }}</span>
                      </li>
                    </ul>
                  </div>
                  <div class="type_right_bottom">
                    <p>加载更多</p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="back_top" @click="toTop()">
          <img src="../assets/images/back_top.png" alt class="up" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      n: 0,
      num: 0,
      scroll: "",
      list: [
        {
          txt: "女士套装 >",
          ind: "1",
        },
        {
          txt: "牛仔裤 >",
          ind: "2",
        },
        {
          txt: "1折封顶 >",
          ind: "3",
        },
        {
          txt: "三十而已 >",
          ind: "4",
        },
        {
          txt: "风衣外套 >",
          ind: "5",
        },
        {
          txt: "连衣裙 >",
          ind: "6",
        },
        {
          txt: "99元封顶 >",
          ind: "7",
        },
        {
          txt: "睡衣 >",
          ind: "8",
        },
        {
          txt: "小白莲 >",
          ind: "9",
        },
        {
          txt: "女士套装 >",
          ind: "1",
        },
        {
          txt: "牛仔裤 >",
          ind: "2",
        },
        {
          txt: "1折封顶 >",
          ind: "3",
        },
        {
          txt: "三十而已 >",
          ind: "4",
        },
        {
          txt: "风衣外套 >",
          ind: "5",
        },
      ],
      list_img: [
        {
          img_1: "1",
          src1: "../../src/assets/images/i1.webp",
          src2: "../../src/assets/images/i1_1.webp",
          title: "3折封顶",
        },
        {
          img_1: "2",
          src1: "../../src/assets/images/i2.webp",
          src2: "../../src/assets/images/i2_2.webp",
          title: "3折封顶",
        },
        {
          img_1: "3",
          src1: "../../src/assets/images/i3.webp",
          src2: "../../src/assets/images/i3_3.webp",
          title: "3折封顶",
        },
        {
          img_1: "4",
          src1: "../../src/assets/images/i4.webp",
          src2: "../../src/assets/images/i4_4.webp",
          title: "3折封顶",
        },
        {
          img_1: "5",
          src1: "../../src/assets/images/i5.webp",
          src2: "../../src/assets/images/i5_5.webp",
          title: "3折封顶",
        },
        {
          img_1: "6",
          src1: "../../src/assets/images/i6.webp",
          src2: "../../src/assets/images/i6_6.webp",
          title: "3折封顶",
        },
      ],

      list_type_left: [
        {
          con: "女装",
          id: "v-cloth1",
        },
        {
          con: "鞋包",
          id: "v-shoes",
        },
        {
          con: "男装",
          id: "v-cloth2",
        },
        {
          con: "运动户外",
          id: "v-outside",
        },
        {
          con: "内衣",
          id: "v-nei",
        },
        {
          con: "母婴",
          id: "v-mother",
        },
        {
          con: "美妆精品",
          id: "v-beautiful",
        },
        {
          con: "生活居家",
          id: "v-live",
        },
      ],
      list_type_right_all: [
        {
          title_top: "· 时尚女装 ·",
          title_bottom: "夏末超人气女装合集",
        },
        {
          title_top: "· 潮流鞋包 ·",
          title_bottom: '"足"够精彩 "包"治百病',
        },
        {
          title_top: "· 品质男装 ·",
          title_bottom: "独特有度 尽显不凡",
        },
        {
          title_top: "· 运动户外 ·",
          title_bottom: "潮流运动 先人一步",
        },
        {
          title_top: "· 亲肤内衣 ·",
          title_bottom: "给身体的赞美诗",
        },
        {
          title_top: "· 母婴鞋服 ·",
          title_bottom: "争做时尚小潮童",
        },
        {
          title_top: "· 美妆精品 ·",
          title_bottom: "圈粉力max 宠你美上天",
        },
        {
          title_top: "· 生活居家 ·",
          title_bottom: "一蔬一饭里 藏着实实在在的烟火气",
        },
      ],
      list_type_right_nav: [
        {
          name: "女式外套",
        },
        {
          name: "女式T恤",
        },
        {
          name: "女式针织衫",
        },
        {
          name: "女式套装",
        },
        {
          name: "女式风衣",
        },
        {
          name: "半截裙",
        },
        {
          name: "女式羽绒服",
        },
        {
          name: "女式大衣",
        },
      ],
      list_type_right_con: [
        {
          img_top: "../../src/assets/images/type_right_i1.webp",
          img_span: "../../src/assets/images/type_right_s1.webp",
          img_name: "衣香丽影YSING女装-季末特卖3折封顶专场",
          img_btn: "进入专场",
        },
        {
          img_top: "../../src/assets/images/type_right_i2.webp",
          img_span: "../../src/assets/images/type_right_s2.webp",
          img_name: "七格格女装-季末特卖3折封顶专场",
          img_btn: "进入专场",
        },
        {
          img_top: "../../src/assets/images/type_right_i3.webp",
          img_span: "../../src/assets/images/type_right_s3.webp",
          img_name: "衣香丽影YSING女装-季末特卖3折封顶专场",
          img_btn: "进入专场",
        },
        {
          img_top: "../../src/assets/images/type_right_i4.webp",
          img_span: "../../src/assets/images/type_right_s4.webp",
          img_name: "衣香丽影YSING女装-季末特卖3折封顶专场",
          img_btn: "进入专场",
        },
        {
          img_top: "../../src/assets/images/type_right_i5.webp",
          img_span: "../../src/assets/images/type_right_s5.webp",
          img_name: "衣香丽影YSING女装-季末特卖3折封顶专场",
          img_btn: "进入专场",
        },
        {
          img_top: "../../src/assets/images/type_right_i6.webp",
          img_span: "../../src/assets/images/type_right_s6.webp",
          img_name: "衣香丽影YSING女装-季末特卖3折封顶专场",
          img_btn: "进入专场",
        },
        {
          img_top: "../../src/assets/images/type_right_i7.webp",
          img_span: "../../src/assets/images/type_right_s7.webp",
          img_name: "衣香丽影YSING女装-季末特卖3折封顶专场",
          img_btn: "进入专场",
        },
        {
          img_top: "../../src/assets/images/type_right_i8.webp",
          img_span: "../../src/assets/images/type_right_s8.webp",
          img_name: "衣香丽影YSING女装-季末特卖3折封顶专场",
          img_btn: "进入专场",
        },
        {
          img_top: "../../src/assets/images/type_right_i9.webp",
          img_span: "../../src/assets/images/type_right_s9.webp",
          img_name: "衣香丽影YSING女装-季末特卖3折封顶专场",
          img_btn: "进入专场",
        },
      ],
    };
  },

  mounted() {
    this.timer();
    window.addEventListener(
      "scroll",
      () => {
        var scrollTop = this.$el.querySelector(".go");
        console.log(scrollTop.scrollTop);
        console.log(scrollTop.scrollHeight);
      },
      true
    );
  },
  beforeDestroy() {
    //页面关闭时清除定时器
    clearInterval(this.clearTimeSet);
  },
  methods: {
    timer() {
      this.clearTimeSet = setInterval(() => {
        this.n--;

        if (this.n <= -500) {
          this.n = 0;
        }
        this.$refs.lis.style.left = this.n + "px";
      }, 20);
    },
    clearTime() {
      //清除定时器
      clearInterval(this.clearTimeSet);
    },
    onScroll() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    },
    jump(index) {
      console.log(index);
      let jump = document.querySelectorAll(".section");
      // 获取需要滚动的距离
      let total = jump[index].offsetTop - this.$refs.type_left.offsetTop;
      console.log(total);

      this.$refs.type_right.scrollTop = total;

      this.num = index;
    },
    loadSroll() {
      var self = this;
      var $navs = $(".nav1");
      var sections = document.querySelectorAll(".section");
      for (var i = sections.length - 1; i >= 0; i--) {
        if (self.scroll >= sections[i].offsetTop - 100) {
          $navs.eq(i).addClass("current").siblings().removeClass("current");
          break;
        }
      }
    },

    toTop() {
      var scrollTop = this.$el.querySelector(".go");
      console.log(scrollTop.scrollTop);
      console.log(scrollTop.scrollHeight);
      const timeTop = setInterval(() => {
        scrollTop.scrollTop = scrollTop.scrollTop -= 100;
        if (scrollTop.scrollTop <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
  },
  watch: {
    scroll: function () {
      this.loadSroll();
    },
  },
};
</script>

<style scoped>
/* main {
  height: 100vh;
  background: rgb(255, 120, 157);
} */

header {
  width: 100%;
  height: auto;
  /* border: 1px solid red; */
  /* position: relative; */
  /* background: url("../assets/images/header_crazy_bg.webp") no-repeat; */
}
header .header_bg {
  position: relative;
  width: 100%;
  display: block;
}
/* header .header_left {
  height: 195px;
  width: 100%;

  background: lavender;
} */
header .header_left img {
  height: auto;
  width: 9.1%;
  position: absolute;
  top: 0px;
  left: 16.5px;
}

.back_top img {
  position: fixed;
  width: 50%;
  /* height: 30px; */
  bottom: 22px;
  right: 15px;
  width: 43.2px;
  height: 43.2px;
  /* background-color: rgba(34, 34, 34, 0.9); */
  /* border-radius: 50%; */
}
/* header .header_left .message {
  height: 10%;
  width: 93%;
  background: darkcyan;
  position: absolute;
  left: 16.5px;
  top: 10%;
} */
.craybuy_nav {
  width: 100%;
  height: 36px;
  overflow: hidden;
  background: url("../assets/images/crazy_nav_bg.jpg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  display: block;
  /* border: 1px solid blue; */

  /* margin-top: -4px; */
}

.craybuy_nav .type {
  width: 88%;
  /* transform: translate3d(-2788px, 0px, 0px); */

  /* border: 1px solid yellow; */
  height: 33.08px;
  /* margin-top: 10px; */
  overflow: hidden;
  float: right;
}

.craybuy_nav .type ul {
  width: 300%;
  height: 33.08px;
  position: relative;
  /* border: 1px solid red; */
  /* margin-top: 50%; */
  /* background: darkkhaki; */
}
.type ul li {
  /* height: auto; */
  width: auto;
  font-size: 13px;

  /* line-height: 33.08px; */
  color: #ffffff;
  margin-top: 10px;
  margin-right: 0.13333333333333333rem;
  padding: 0 0.26666666666666666rem;
  background-color: #ff408e;
  border-radius: 0.29333333333333333rem;
  border: 0.026666666666666665rem solid hsla(0, 0%, 100%, 0.76);
  float: left;
}
.C_site {
  /* text-align: center; */
  background: rgb(255, 120, 157);
  width: 100%;
}
.C_site .C_site_top {
  margin: 0 auto;
}
.C_site .C_site_top img {
  width: 100%;
  height: auto;

  /* display: block; */
}

.c_site_con {
  margin: 0 auto;
}
.c_site_con img {
  width: 100%;
}

.c_bg {
  width: 82.29%;
  margin: 0 auto;
  position: relative;
}

.c_bg ul {
  width: 100%;
  position: absolute;
  margin: -82% 3.5%;
  position: relative;
}
.c_bg ul li {
  width: 30%;
  float: left;

  margin: 0.6% 0.6%;
}
.c_bg li:nth-of-type(3n) {
  margin-right: 0;
}
.c_bg i img {
  width: 100%;
  display: block;
  border-radius: 5%;
}
.c_bg span {
  width: 16%;
  height: auto;
  /* border: 1px solid red; */
  display: block;
  text-align: center;
  margin: -17% 7%;
  font-size: 12px;
  /* font-weight: 400; */
  color: rgba(0, 0, 0, 0.84);
  position: absolute;
}
.c_bg span img {
  width: 100%;
}
.like {
  width: 100%;
}
.like .like_bg {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.like_bg .like_top img,
.like_bg .like_con img {
  width: 100%;
  height: auto;

  display: block;
}

.like_bg ul {
  width: 92.5%;
  /* border: 1px solid red; */

  margin: -31.5% 3.9%;
  position: absolute;
}
.like_bg ul li {
  width: 24.1%;
  height: auto;
  margin: 0 auto;
  margin-right: 1%;
  border-radius: 5%;
  background: #ffffff;
  text-align: center;
  float: left;
}
.like_bg li:nth-of-type(4n) {
  margin-right: 0;
}
.like_bg li img {
  width: 100%;
  border-radius: 5% 5% 0 0;
  display: block;
}
.like_bg li span {
  margin-top: 5%;
  margin-bottom: 5%;
  font-size: 11px;
  display: inline-block;
}
.clear_season {
  width: 100%;
  margin: 0 auto;
}
.clear_season .clear_season_top img {
  width: 100%;
  display: block;
}
.clear_season .clear_season_con {
  width: 100%;
  /* border: 1px solid red; */
}
.clear_season_con .clear_left {
  width: 50%;

  position: relative;
}
.clear_left .clear_left_bg {
  width: 100%;
  float: left;

  /* border: 1px solid blue; */
}
.clear_left_bg img {
  width: 100%;
  display: block;
}

.clear_left ul {
  width: 86.5%;
  /* height: auto; */
  /* border: 1px solid blue; */
  position: absolute;
  margin: 26% 0 0 8%;
}
.clear_left ul li {
  width: 49%;
  float: left;
  font-size: 12px;
  /* position: relative; */
}
.clear_left li:nth-of-type(1),
.clear_right li:nth-of-type(1) {
  margin-right: 2%;
}
.clear_left i img {
  width: 100%;
  border-radius: 5%;
  display: block;
}
.clear_left span {
  width: 50%;
  /* border: 1px solid red; */
  position: absolute;
  margin: -28% auto;
  text-align: center;
}
.clear_left span img {
  width: 50%;
  margin: 0 auto;
  display: block;
}

.clear_season_con .clear_right {
  width: 50%;
  float: right;
  position: relative;
}
.clear_right .clear_right_bg {
  width: 100%;
}

.clear_right_bg img {
  width: 100%;
  display: block;
}
.clear_right ul {
  width: 86.5%;
  /* height: auto; */
  /* border: 1px solid blue; */
  position: absolute;
  margin: -61% 4.5%;
}
.clear_right ul li {
  width: 49%;
  float: left;
  text-align: center;
  position: relative;
}
.clear_right i img {
  width: 100%;
  border-radius: 5% 5% 0 0;
  display: block;
}
.clear_right span img {
  width: 34%;
  position: absolute;
  display: block;
  margin: -100% 5%;
}
.clear_right li div {
  width: 100%;
  /* height: 35px; */
  color: #ffffff;
  /* margin: 0 auto 6%; */
  line-height: 138%;
  /* height: 20%; */
  /* border: 1px solid red; */
  border-radius: 10%;
  /* display: block; */
  /* text-align: center; */
}
.clear_right .clear_txt_left {
  width: 70%;
  /* height: auto; */
  background: #e15373;
  /* border: 1px solid blue; */
  font-size: 12px;
  display: block;
  border-radius: 0 0 0 10%;
  float: left;
}
.clear_right .clear_txt_right {
  width: 30%;

  background: #dc1843;
  border-radius: 0 0 10% 0;
  font-size: 12px;
  /* border: 1px solid bisque; */
  float: right;
}

/*分类列表  */
.crazy_type {
  width: 100%;
}
.crazy_type .type_top img {
  width: 100%;
  display: block;
}
/* 去除滚动条 */
::-webkit-scrollbar {
  display: none;
}
.crazy_type .type_left {
  height: 100vh;
  width: 13.33%;
  text-align: center;
  background: #c60855;
  font-size: 18px;
  float: left;
  overflow: auto;
}
.type_left ul {
  height: auto;
  width: 100%;
}
.type_left ul li {
  height: 64px;
  line-height: 64px;
  color: white;
  font-size: 12px;
  /* border: 1px solid blue; */
  width: 100%;
}
.crazy_type .type_right {
  width: 86.67%;
  height: 100vh;
  float: right;
  background: rgb(255, 120, 157);
  overflow: auto;
}
.type_right .type_right_u {
  height: 1200px;
  width: 100%;
}
.type_right_u .type_right_u2 {
  height: auto;
  width: 100%;
}
/* .type_right ul li {
  height: 100vh;
  line-height: 97px;
  border: 1px solid blue;
  width: 100%;
} */
.type_right .type_right_top {
  width: 100%;
  color: white;
  text-align: center;
}
.type_right_top h2 {
  font-size: 16px;
}
.type_right_top h3 {
  font-size: 12px;
  opacity: 0.6;
}

.type_right_nav {
  width: 100%;
  height: 100px;
}
.type_right_nav ul {
  width: 95%;
  height: 20px;

  /* background: yellow; */
  margin: 0 auto;
  margin-top: 10px;
}

.type_right_nav ul li {
  width: 22.9%;
  border: 1px solid gainsboro;
  background: #c60855;
  border-radius: 20px;
  float: left;
  color: white;
  text-align: center;
  font-size: 12px;
  margin: 4px 4px 7px 0;
  padding: 4px 0 6px 0;
}
.type_right_nav li:nth-of-type(4n) {
  margin-right: 0px;
}
.type_right_con {
  width: 100%;
  height: auto;
}
.type_right_con ul {
  width: 96%;
  height: 534px;
  /* border: 1px solid red; */
  /* float: right; */

  margin: 0 auto;
  margin-bottom: 40px;
}
.type_right_con ul li {
  background: #ffffff;
  width: 31.7%;

  padding-bottom: 5px;
  border-radius: 5px;
  margin-right: 4px;
  margin-bottom: 6px;
  float: left;
}
.type_right_con li:nth-of-type(3n) {
  margin-right: 0px;
}
.type_right_con h4 img {
  border-radius: 5px 5px 0 0;
  width: 100%;
}
.type_right_con h5 {
  width: 56%;
  margin: 0 auto;
}
.type_right_con h5 img {
  width: 100%;
}
.type_right_con b {
  width: 83%;
  margin: 0 auto;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
  white-space: nowrap;
  font-size: 12px;
  color: #ed3c69;
}
.type_right_con span {
  width: 67%;
  margin: 0 auto;
  color: white;
  border-radius: 2px;
  font-size: 12px;
  text-align: center;
  background: #ff408e;
  margin-top: 5px;

  padding: 5% 7%;
  display: block;
}
.type_right_bottom {
  width: 50%;
  border-radius: 4px;
  font-size: 13px;
  color: white;
  margin: 0 auto;
  background: #ff408e;
  border: 1px solid white;
  text-align: center;
  margin-bottom: 20px;
}
.type_right_bottom p {
  width: 100%;

  height: 30px;
  line-height: 30px;
}
.current {
  border-left: 4px solid white;
  background: #ff408e;
}
</style>
