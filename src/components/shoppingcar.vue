<template>
  <main>
    <div class="header">
      <!-- 返回上一级 -->
      <link rel="stylesheet" href="../../src/assets/css/iconfont.css" />

      <span class="iconfont icon-icon_nav_back nav_back" @click="back()"></span>
      <!-- 倒计时 -->
      <div class="countdown">
        <h1>确认订单</h1>

        <!-- <span ref="time_m">20</span> -->
        <span>{{ minute }}:{{ second }}</span>
        <!-- <span ref="time_s">00</span> -->
      </div>
    </div>
    <div class="safe_tips">
      <span class="iconfont icon-qiandun qiandun"></span>
      你正在安全购物环境中，请放心购买
    </div>
    <div class="addre">
      <router-link to="/address">
        <p>设置收货地址</p>

        <span class="iconfont icon-icon_arrow_right right"></span>
      </router-link>
    </div>

    <div class="con" v-for="(item,index) in list">
      <h2>唯品自营</h2>
      <div class="goods">
        <div class="left">
          <img :src="item.src" alt />
        </div>

        <div class="right">
          <p class="name">{{item.name}}</p>
          <span class="goods_mon">￥{{item.money}}</span>
          <div class="type">
            <span class="sex">{{item.type}};</span>
            <!-- <span class="color">黑兰;</span> -->
            <span class="size">{{item.size}}</span>
          </div>
          <div class="activity">
            <span class="act_1">7天退换</span>
            <span class="act_2">退换无忧</span>
          </div>
          <div></div>
        </div>
        <div class="create">
          <button class="button_crea" @click="subtract_car(index)">-</button>
          <input type="text" value="0" size="1" v-model="item.nums" />
          <button class="button_del" @click="add_car(index)">+</button>
        </div>

        <span class="iconfont icon-icon_nav_close nav_close" @click="close(index)"></span>
      </div>
      <div class="goods_allmoney">
        <span>￥{{money}}</span>
      </div>
    </div>
    <!-- 优惠券 -->
    <div class="coupon">
      <h2>
        使用优惠券
        <span>
          <span class="iconfont icon-icon_arrow_right coupon_right"></span>
        </span>
      </h2>
    </div>
    <div class="money">
      <div class="before">
        <span class="before_left">订单金额</span>
        <span class="before_right">￥{{money}}</span>
      </div>
      <div class="all">
        <span class="all_left">商品总金额</span>
        <span class="all_right">￥{{money}}</span>
      </div>
      <div class="freight">
        <span class="freight_left">总运费</span>
        <b>
          <img src="../assets/images/arrb.png" alt />
        </b>
        <span class="freight_right">￥0.00</span>
      </div>
    </div>
    <!-- 发票 -->
    <div class="bill">
      <p>开具发票（自然量暂不支持开具发票）</p>
    </div>

    <div class="pay">
      <div class="pay_con">
        <div class="total_mon">
          还需支付:
          <span>￥{{money}}</span>
        </div>
        <button class="btn">在线支付</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      minutes: 20,
      seconds: 0,
      // count: 0,
      //总价
      money: 0,
      //默认总数量
      nums: 0,
      list: [
        {
          name: "2020夏季新款纯色休闲polo衫女气质翻领宽松百搭短袖t恤",
          nums: 0,
          money: 49,
          type: "蔷薇粉红(64)",
          size: "M",
          src: "../../src/assets/images/goods10.jpg",
        },
        {
          name: "安之伴睡衣春秋新品长袖休闲长裤套装韩版纯色宽松家居服",
          nums: 0,
          money: 52,
          type: "男款黑兰",
          size: "M",
          src: "../../src/assets/images/goods1.jpg",
        },
      ],
    };
  },
  //初始化加载   显示总价总数量
  created: function () {
    var price = 0;
    var numb = 0;
    var list = this.list;
    for (var i = 0; i < list.length; i++) {
      if (list[i].selected) {
        price += list[i].nums * list[i].money;
        numb += list[i].nums;
      }
    }
    this.money = price;
    this.nums = numb;
    console.log(numb);
    console.log(price);
  },
  mounted() {
    this.add();
  },
  methods: {
    back() {
      this.$router.go(-3);
    },
    num(n) {
      return n < 10 ? "0" + n : "" + n;
    },

    //总价总数量方法
    hh() {
      var price = 0;
      var numb = 0;
      var list = this.list;
      for (var i = 0; i < list.length; i++) {
        // if (list[i].selected) {
        price += list[i].nums * list[i].money;
        numb += list[i].nums;
        // }
      }
      this.money = price;
      this.nums = numb;
      console.log(numb);
    },
    add_car(index) {
      var list = this.list;
      var nums = list[index].nums;
      nums = nums + 1;
      list[index].nums = nums;
      this.hh();
    },
    subtract_car(index) {
      var list = this.list;
      var nums = list[index].nums;
      if (nums > 1) {
        nums = nums - 1;
        list[index].nums = nums;
      }
      this.hh();
    },

    //删除列表
    close(index) {
      this.list.splice(index, 1);
    },

    //倒计时
    add() {
      var _this = this;
      var time = window.setInterval(function () {
        if (_this.seconds === 0 && _this.minutes !== 0) {
          _this.seconds = 59;
          _this.minutes -= 1;
        } else if (_this.minutes === 0 && _this.seconds === 0) {
          _this.seconds = 0;
          window.clearInterval(time);
        } else {
          _this.seconds -= 1;
        }
      }, 1000);
    },
  },
  watch: {
    second: {
      handler(newVal) {
        this.num(newVal);
      },
    },
    minute: {
      handler(newVal) {
        this.num(newVal);
      },
    },
  },
  computed: {
    second: function () {
      return this.num(this.seconds);
    },
    minute: function () {
      return this.num(this.minutes);
    },
  },
};
</script>

<style>
main {
  background: #f3f4f5;
  position: relative;
}
.header {
  height: 48.93px;
  width: 100%;
  background: #fff;
  line-height: 48.93px;
}
.countdown {
  height: 48.93px;
  width: 76.08%;
  /* background: plum; */
  margin: 0 auto;
  /* overflow: hidden; */
  /* float: left; */
}
.countdown h1 {
  font-size: 20px;
  float: left;

  padding-left: 30%;
  padding-right: 2%;
  /* background: khaki; */
}
/* .countdown .count_time{
    
} */
.countdown span {
  font-size: 17.792px;
  color: #e80080;
}
.nav_back {
  font-size: 28px;
  /* background: green; */
  float: left;
  padding-left: 2.5%;
}

.safe_tips {
  height: 40px;
  width: 100%;
  background: #e8eaf4;
  /* text-align: center; */
  line-height: 40px;
  font-size: 13.34px;
}
.safe_tips span {
  font-size: 20px;
  padding-left: 4.2%;
}
a {
  color: #fff;
}
.addre {
  height: 53.13px;
  width: 100%;
  background: #656c89;
}
.addre p {
  font-size: 17.79px;
  line-height: 53.13px;
  padding-left: 4.2%;
  float: left;
}
.addre span {
  line-height: 53.13px;
  float: right;
  font-size: 22.4px;
  padding-right: 3%;
}
.con {
  height: 289.094px;
  width: 100%;
  margin-top: 10px;
  background: #ffffff;
  /* position: relative; */
}
.con h2 {
  height: 55.13px;
  width: 91.8%;
  font-size: 15.56px;
  line-height: 55.13px;
  border-bottom: 1px solid #ccc;
  /* padding: 8.896px auto; */
  /* padding-left: 4.2%; */
  margin: 0 auto;
  margin-bottom: 8.89px;
  /* background: lawngreen; */
}
.con .goods {
  height: 131.677px;
  width: 91.8%;
  margin: 16.68px auto;
  /* background: aqua; */
}
.goods img {
  /* height: 82px; */
  width: 19.7%;
  float: left;
}
.goods .right {
  height: 82px;
  width: 77.1%;
  /* background: red; */
  float: right;
}
.right .name {
  width: 80%;
  /* height: 34px; */
  font-size: 15.56px;
  color: #222;
  /* background: #656c89; */
  /* line-height: 0.48rem; */
  /* text-align: center; */
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  /* margin-left: 6px; */
  float: left;
}
.right .goods_mon {
  width: 19.2%;
  /* height: 12px; */

  color: #222;
  font-size: 15.56px;
  /* line-height: 20px; */
  margin-bottom: 36px;
  /* background: khaki; */
  float: right;
}

.type span {
  color: #999999;
  margin-bottom: 6.672px;
  /* margin: 10% 10%; */
  padding: 1% 0;
  font-size: 13.34px;
  float: left;
  /* background: #e80080; */
}

.right .act_1 {
  /* width: 20%; */
  font-size: 11.12px;
  color: #627db6;
  background: #edf3ff;
  border-radius: 0.2rem;
  margin-top: 28px;
  margin-left: -67px;
  display: block;
  float: left;
}
.right .act_2 {
  /* width: 20%; */
  font-size: 11.12px;
  color: #627db6;
  background: #edf3ff;
  border-radius: 0.2rem;
  margin-top: 28px;
  margin-left: -21px;
  display: block;
  float: left;
}
/* .activity .act_1 {
  background: #edf3ff;
  border-radius: 0.2rem;
}
.activity .act_2 {
  background: #edf3ff;
  border-radius: 0.2rem;
} */

.goods .create {
  width: 43%;
  float: left;
  margin-left: 3%;
  margin-top: 3%;
  line-height: 36.55px;
  /* border: 1px solid red; */
}
.goods .nav_close {
  /* width: 43%; */
  float: right;
  margin-left: 3%;
  margin-top: 3%;
  color: gray;
  /* position: absolute; */
  line-height: 36.55px;
}

.create button {
  width: 20%;
  height: 36.55px;
}
.create .button_crea {
  float: left;
}
.create .button_del {
  float: left;
}
.create input {
  width: 20%;
  height: 30.55px;
  float: left;
  text-align: center;
}

.con .goods_allmoney {
  height: 52.38px;
  width: 91.8%;
  /* background: indianred; */
  border-top: 1px solid #ccc;
  margin: 2px auto;
}
.goods_allmoney span {
  float: right;
  line-height: 53.38px;
}
.coupon {
  width: 100%;
  height: 56.71px;
  margin-top: 10px;
  background: #ffffff;
}
.coupon h2 {
  width: 91.8%;
  height: 56.71px;
  font-size: 15.56px;
  color: #555555;
  margin: 0 auto;
  line-height: 56.71px;
  background: #ffffff;
  /* display: inline-block; */
}
.coupon span {
  /* line-height: 56.71px; */

  font-size: 22px;
  /* color: #fff; */
  float: right;
}
.money {
  width: 100%;
  height: 139.127px;
  font-size: 15.56px;
  background: #ffffff;
}
.money .before {
  width: 91.8%;
  height: 52.33px;
  line-height: 52.33px;

  font-weight: bold;
  margin: 0 auto;
  background: #ffffff;
  border-bottom: 1px solid #ccc;
}
.before .before_left {
  color: #000000;
  float: left;
}
.before .before_right {
  float: right;
  color: #e80080;
}
.money .all {
  height: 33.33px;
  line-height: 33.33px;
  width: 91.8%;
  margin: 0 auto;
  margin-top: 8px;
  background: #ffffff;
}
.all .all_left {
  float: left;
}
.all .all_right {
  float: right;
}
.money .freight {
  height: 34.67px;
  line-height: 34.67px;
  width: 91.8%;
  margin: 0 auto;
  background: #ffffff;
}
.freight .freight_left {
  float: left;
}
.freight .freight_right {
  float: right;
}
.freight b {
  height: 100px;
  position: relative;

  top: 10px;
  left: 10px;
}
.freight b img {
  height: 10px;
  width: 10px;
  /* margin: 10px 10px; */
  position: absolute;
  left: -5px;
  top: 4px;
}
.bill {
  height: 200px;
  width: 100%;
  font-size: 16.68px;
  /* text-align: center; */
  line-height: 50px;
  background: #f3f4f5;
  margin-top: 10px;

  color: #dbdbdb;
}
.bill p {
  height: 50px;
  background: #fff;
  padding-left: 4.1%;
  margin-bottom: 50%;
}
.pay {
  height: 107.83px;
  width: 100%;
  background: #ffffff;
  margin-top: 207.83px;
  border-bottom: 1px solid #ccc;
  /* margin-top: 86.8px; */
  position: fixed;
  bottom: 0px;
  /* position: fixed; */
}
.pay_con {
  width: 91.8%;
  height: 107.83px;
  margin: auto auto;
  padding-top: 12.68px;
  background: #ffffff;
  text-align: center;
}
.pay_con .total_mon {
  font-size: 16.68px;
  margin-bottom: 7.784px;
  /* margin: 15px auto 7.784px; */
}
.total_mon span {
  color: #e80080;
}
.pay_con .btn {
  height: 50px;
  width: 100%;
  font-size: 17.79px;
  color: #fff;
  border: none;
  border-radius: 0.05333rem;
  outline: 0;
  background: #e80080;
}
</style>
