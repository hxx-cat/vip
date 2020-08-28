<template>
  <main>
    <p class="hotsale">
      <span>好物推荐</span>
    </p>
    <ol>
      <li v-for="(item,index) in recommandlist1">
        <router-link :to="'/details/'+item.con">
        <img :src="item.src" alt />
        <p>{{item.con}}</p>
        </router-link>
      </li>
    </ol>
    <p class="hotsale">
      <span>品质精选</span>
    </p>
    <ol>
      <li v-for="(item,index) in recommandlist2">
        <img :src="item.src" alt />
        <p>{{item.con}}</p>
      </li>
    </ol>
  </main>
</template>
<script>
export default {
    data(){
        return {
            recommandlist1: [
        {
          src: "./src/assets/images/image/recommend01.png",
          con: "运动裤",
        },
        {
          src: "./src/assets/images/image/recommend02.webp",
          con: "儿童裤子",
        },
        {
          src: "./src/assets/images/image/recommend03.webp",
          con: "女士套装",
        },
        {
          src: "./src/assets/images/image/recommend04.webp",
          con: "婴幼裤子",
        },
        {
          src: "./src/assets/images/image/recommend05.webp",
          con: "女式T恤",
        },
        {
          src: "./src/assets/images/image/recommend06.png",
          con: "月饼",
        },
        {
          src: "./src/assets/images/image/recommend07.webp",
          con: "连衣裙",
        },
        {
          src: "./src/assets/images/image/recommend08.png",
          con: "女式羽绒服",
        },
        {
          src: "./src/assets/images/image/recommend09.png",
          con: "男士西裤",
        },
      ],
      recommandlist2: [
        {
          src: "./src/assets/images/image/recommend10.png",
          con: "糖巧饼干",
        },
        {
          src: "./src/assets/images/image/recommend11.png",
          con: "耳机/蓝牙耳机",
        },
        {
          src: "./src/assets/images/image/recommend12.png",
          con: "手机配件",
        },
        {
          src: "./src/assets/images/image/recommend13.png",
          con: "纸品清洁",
        },
        {
          src: "./src/assets/images/image/recommend14.webp",
          con: "手机通讯",
        },
        {
          src: "./src/assets/images/image/recommend15.png",
          con: "黄金饰品",
        },
        {
          src: "./src/assets/images/image/recommend16.png",
          con: "耐克",
        },
        {
          src: "./src/assets/images/image/recommend17.png",
          con: "石英表",
        },
        {
          src: "./src/assets/images/image/recommend18.png",
          con: "欧莱雅",
        },
        {
          src: "./src/assets/images/image/recommend19.webp",
          con: "阿迪达斯",
        },
        {
          src: "./src/assets/images/image/recommend20.png",
          con: "周大福",
        },
        {
          src: "./src/assets/images/image/recommend21.png",
          con: "苹果",
        },
        {
          src: "./src/assets/images/image/recommend22.webp",
          con: "斐乐",
        },
        {
          src: "./src/assets/images/image/recommend23.png",
          con: "安踏",
        },
        {
          src: "./src/assets/images/image/recommend24.png",
          con: "机械表",
        },
        {
          src: "./src/assets/images/image/recommend25.png",
          con: "兰蔻",
        },
        {
          src: "./src/assets/images/image/recommend26.png",
          con: "洗发护发",
        },
        {
          src: "./src/assets/images/image/recommend27.png",
          con: "迈克高仕",
        },
        {
          src: "./src/assets/images/image/recommend28.png",
          con: "丸美",
        },
        {
          src: "./src/assets/images/image/recommend29.webp",
          con: "华为",
        },
        {
          src: "./src/assets/images/image/recommend30.webp",
          con: "音儿",
        },
      ],
        }
    }
}
</script>
<style scoped>
div img {
  width: 100%;
}
ol {
  overflow: hidden;
  width: 90%;
  margin-top: 40px;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid #dedede;
  margin-right: auto;
  margin-left: auto;
}

ol li {
  float: left;
  width: 33.33%;
  text-align: center;
  margin-right: -4px;
  margin-bottom: 26px;
}
ol p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  width: 73%;
  margin-left: auto;
  margin-right: auto;
}
li img {
  width: 41.44px;
  height: 52.9px;
}

/* li img {
  width: 100%;
} */
.hotsale {
  padding-top: 31px;
  width: 80%;
  background-color: white;
  margin: 0 auto;
}
.hotsale span {
  color: #333333;
  font-size: 12px;
  font-family: Arial, Helvetica, sans-serif;
  float: left;
  font-weight: 600;
}
.hotsale b {
  font-weight: normal;
  float: right;
  font-size: 12px;
  color: #585c64;
  font-family: Arial, Helvetica, sans-serif;
}
</style>