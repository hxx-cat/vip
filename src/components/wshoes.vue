<template>
    <main>
      <img src="../assets/images/mshoes11.jpg" alt />
        <p class="hotsale">
          <span>初秋上新</span>
        </p>
        <ol>
          <li v-for="(item,index) in mshoeslist1">
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
        return {
            mshoeslist1: [
                                {
                                    src: './src/assets/images/image/wshoes01.png',
                                    con: '休闲鞋'
                                },
                                {
                                    src: './src/assets/images/image/wshoes02.png',
                                    con: '凉鞋'
                                },
                                {
                                    src: './src/assets/images/image/wshoes03.jpg',
                                    con: '运动鞋'
                                },
                                {
                                    src: './src/assets/images/image/wshoes04.jpg',
                                    con: '一脚蹬'
                                },
                                {
                                    src: './src/assets/images/image/wshoes05.jpg',
                                    con: '商务鞋'
                                },
                                {
                                    src: './src/assets/images/image/wshoes06.jpg',
                                    con: '小白鞋'
                                },
                                {
                                    src: './src/assets/images/image/wshoes07.jpg',
                                    con: '板鞋'
                                },
                                {
                                    src: './src/assets/images/image/wshoes08.png',
                                    con: '老爹鞋'
                                },
                                {
                                    src: './src/assets/images/image/wshoes09.png',
                                    con: '帆布鞋'
                                },
                                {
                                    src: './src/assets/images/image/wshoes10.png',
                                    con: '百丽'
                                },
                                {
                                    src: './src/assets/images/image/wshoes11.jpg',
                                    con: '斯凯奇'
                                },
                                {
                                    src: './src/assets/images/image/wshoes12.jpg',
                                    con: '洞洞鞋'
                                }
                            ]
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