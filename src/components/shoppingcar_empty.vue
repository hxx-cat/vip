<template>
  <main>
    <header>
      <link rel="stylesheet" href="../../src/assets/css/iconfont.css" />

      <span class="iconfont icon-icon_nav_back head_back" @click="back_1()"></span>

      <h1>购物车</h1>
      <!-- <div class="header"></div> -->
    </header>
    <div class="con">
      <img class="bg" src="../assets/images/shoppingcar_bg.png" alt />

      <img class="car" src="../assets/images/shoppingcar_empty.png" alt />

      <h2 class="txt">购物车空空如也</h2>
      <router-link to="/first">
        <button class="btn">去抢购</button>
      </router-link>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    back_1() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
header {
  height: 63.35px;
  width: 100%;
  background: #fbfbfa;
  line-height: 63.35px;
}
header span {
  width: 11.5%;
  text-align: center;
  font-size: 37.5px;
  color: #555555;
  float: left;
}
header h1 {
  height: 63.35px;
  width: 77%;
  font-size: 25.92px;
  margin: 0 auto;
  /* background: salmon; */
  text-align: center;
}
.con .bg {
  width: 79.4%;
  display: block;
  margin: 0 auto;
}
.con .car {
  width: 28.08%;
  display: block;
  margin: 0 auto;
  margin-top: -114.5px;
  /* position: relative;
  top: -114px; */
}
.con .txt {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 23.04px;
  margin-top: 28.8px;
  text-align: center;
}
.con .btn {
  width: 46.5%;
  height: 44.67px;
  /* border: none; */
  background: #ffffff;
  border-radius: 0.30667rem;
  outline: 0;
  font-size: 20px;
  border: 1px solid #de3c96;
  color: #de3c96;
  display: block;
  margin: 30px auto 86px;
  /* margin-top: 30px; */
}
</style>>
