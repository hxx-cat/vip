<template>
  <div class="container">
    <div class="wrapper">
      <div
        class="section"
        style="height:1800px;width:100%"
        v-for="(item, index) in list"
        :key="index"
        :style="{'height':index==0?'1000px':'500px'}"
      >
        <div
          style="width:100%;height:100%;font-size:30px;text-align:center;font-weight:bold;color:#fff;"
          :style="{'background':item.backgroundcolor}"
        >{{item.name}}</div>
      </div>
    </div>
    <div id="nac" style="height:500px;"></div>
    <nav style="position:fixed;right:30px;top:300px;">
      <ul>
        <li
          class="nav1"
          v-for="(item, index) in navList"
          :key="index"
          @click="jump(index)"
          :class="{ current: num == index }"
        >{{item.con}}</li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scroll: "",
      num: 0,
      list: [
        {
          title_top: "· 时尚女装 ·",
          title_bottom: "夏末超人气女装合集",
          backgroundcolor: "#90B2A3",
        },
        {
          name: "第二条",
          backgroundcolor: "#A593B2",
        },
        {
          name: "第三条",
          backgroundcolor: "#A7B293",
        },
        {
          name: "第四条",
          backgroundcolor: "#0F2798",
        },
        {
          name: "第五条",
          backgroundcolor: "#0A464D",
        },
      ],
      navList: [
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
    };
  },
  methods: {
    onScroll() {
      this.scroll =
        document.documentElement.scrollTop || document.body.scrollTop;
    },
    jump(index) {
      let jump = document.querySelectorAll(".section");
      // 获取需要滚动的距离
      let total = jump[index].offsetTop;
      console.log(total);
      // Chrome
      document.body.scrollTop = total;
      // Firefox
      document.documentElement.scrollTop = total;
      // Safari
      window.pageYOffset = total;
      this.num = index;
      // $('html, body').animate({
      // 'scrollTop': total
      // }, 400);
    },
    loadSroll: function () {
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
  },
  watch: {
    scroll: function () {
      this.loadSroll();
    },
  },
  mounted() {
    // window.addEventListener("scroll", this.OnScroll);
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.nav1 {
  display: block;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background: #eee;
  margin: 10px 0;
}
.current {
  color: #fff;
  background: red;
}
</style>