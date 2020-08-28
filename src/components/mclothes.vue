<template>
    <main>
        <img src="../assets/images/image/mclothes01.jpg" alt />
        <p class="hotsale">
          <span>潮流来袭</span>
        </p>
        <ol>
          <li v-for="(item,index) in mclotheslist1">
              <router-link :to="'/details/'+item.con">
            <img :src="item.src" alt />
            <p>{{item.con}}</p>
              </router-link>
          </li>
        </ol>
        <p class="hotsale">
          <span>热销分类</span>
          <b>热销榜 ></b>
        </p>
        <ol>
          <li v-for="(item,index) in mclotheslist2">
              <router-link :to="'/details/'+item.con">
            <img :src="item.src" alt />
            <p>{{item.con}}</p>
              </router-link>
          </li>
        </ol>
    </main>
</template>
<script>
export default {
    data(){
        return{
            mclotheslist1: [
        {
          src: "./src/assets/images/image/mclothes02.png",
          con: "潮人夏日穿搭",
        },
        {
          src: "./src/assets/images/image/mclothes03.png",
          con: "潮流T恤",
        },
        {
          src: "./src/assets/images/image/mclothes04.png",
          con: "IP联名",
        },
      ],
      mclotheslist2: [
        {
          src: "./src/assets/images/image/mclothes05.png",
          con: "直降",
        },
        {
          src: "./src/assets/images/image/mclothes06.png",
          con: "短袖T恤",
        },
        {
          src: "./src/assets/images/image/mclothes07.png",
          con: "衬衫",
        },
        {
          src: "./src/assets/images/image/mclothes08.png",
          con: "Polo衫",
        },
        {
          src: "./src/assets/images/image/mclothes09.png",
          con: "卫衣",
        },
        {
          src: "./src/assets/images/image/mclothes10.png",
          con: "夹克",
        },
        {
          src: "./src/assets/images/image/mclothes11.png",
          con: "男士套装",
        },
        {
          src: "./src/assets/images/image/mclothes12.png",
          con: "休闲裤",
        },
        {
          src: "./src/assets/images/image/mclothes13.png",
          con: "牛仔裤",
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