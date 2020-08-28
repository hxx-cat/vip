<template >
  <main>
    <header>
      <input type="text" placeholder="护肤套装" />
    </header>
    <section>
      <ul>
        <li v-for="(item,index) in list" @click="change(index,item)" :class="{bgcolor:msg==index}">
          {{item.con}}
          <span :class="{current:msg==index}"></span>
        </li>
      </ul>
      <div class="content">
        <component :is="m"></component>
      </div>

      <!-- <div class="content" v-show="num==0">
        <p class="hotsale">
          <span>好物推荐</span>
        </p>
        <ol>
          <li v-for="(item,index) in recommandlist1">
            <img :src="item.src" alt />
            <p>{{item.con}}</p>
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
      </div>
      <div class="content" v-show="num==1">
        <p class="hotsale">
          <span>初秋上新</span>
        </p>
        <ol>
          <li v-for="(item,index) in wclotheslist1">
            <img :src="item.src" alt />
            <p>{{item.con}}</p>
          </li>
        </ol>
        <p class="hotsale">
          <span>美裙衣橱</span>
          <b>热销榜 ></b>
        </p>
        <ol>
          <li v-for="(item,index) in wclotheslist2">
            <img :src="item.src" alt />
            <p>{{item.con}}</p>
          </li>
        </ol>
      </div>
      <div class="content" v-show="num==2">
        <img src="../assets/images/image/mclothes01.jpg" alt />
        <p class="hotsale">
          <span>潮流来袭</span>
        </p>
        <ol>
          <li v-for="(item,index) in mclotheslist1">
            <img :src="item.src" alt />
            <p>{{item.con}}</p>
          </li>
        </ol>
        <p class="hotsale">
          <span>热销分类</span>
          <b>热销榜 ></b>
        </p>
        <ol>
          <li v-for="(item,index) in mclotheslist2">
            <img :src="item.src" alt />
            <p>{{item.con}}</p>
          </li>
        </ol>
      </div>
      <div class="content" v-show="num">
        <img src="../assets/images/image/mclothes01.jpg" alt />
        <p class="hotsale">
          <span>潮流来袭</span>
        </p>
        <ol>
          <li v-for="(item,index) in mclotheslist1">
            <img :src="item.src" alt />
            <p>{{item.con}}</p>
          </li>
        </ol>
        <p class="hotsale">
          <span>热销分类</span>
          <b>热销榜 ></b>
        </p>
        <ol>
          <li v-for="(item,index) in mclotheslist2">
            <img :src="item.src" alt />
            <p>{{item.con}}</p>
          </li>
        </ol>
      </div>-->
    </section>
  </main>
</template>

<script>
import recommend from "./recommend.vue";
import wclothes from "./wclothes.vue";
import mclothes from "./mclothes.vue";
import mshoes from "./mshoes.vue";
import wshoes from "./wshoes.vue";
export default {
  components: {
    'recommend': recommend,
    'wclothes':wclothes,
    'mclothes':mclothes,
    'mshoes':mshoes,
    'wshoes':wshoes
  },
  data() {
    return {
      m: "recommend",
      msg: 0,
      list: [
        {
                        con: '精选推荐',
                        id: 'recommend'
                    },
                    {
                        con: '女装',
                        id: 'wclothes'
                    },
                    {
                        con: '男装',
                        id: 'mclothes'
                    },
                    {
                        con:'男女内衣',
                        id:'recommend'
                    },
                    {
                        con: '女鞋',
                        id: 'wshoes'
                    },
                    {
                        con: '男鞋',
                        id: 'mshoes'
                    },
                    {
                        con:'箱包皮具',
                        id:'recommend'
                    },
                    {
                        con:'手表配饰',
                        id:'recommend'
                    },
                    {
                        con:'护肤彩妆',
                        id:'recommend'
                    },
                    {
                        con:'个人护理',
                        id:'recommend'
                    },
                    {
                        con:'母婴',
                        id:'recommend'
                    },
                    {
                        con:'运动户外',
                        id:'recommend'
                    },
                    {
                        con:'手机数码',
                        id:'recommend'
                    },
                    {
                        con:'家用电器',
                        id:'recommend'
                    },
                    {
                        con:'家居家纺',
                        id:'recommend'
                    },
                    {
                        con:'家居家装',
                        id:'recommend'
                    },
                    {
                        con:'生活超市',
                        id:'recommend'
                    },
                    {
                        con:'唯品国际',
                        id:'recommend'
                    },
                    {
                        con:'医药健康',
                        id:'recommend'
                    },
                    {
                        con:'图书文娱',
                        id:'recommend'
                    }
                    
      ],
      
    };
  },
  methods: {
    change(a, b) {
      this.m = b.id;
      this.msg = a;
    },
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 48px;
  background-color: #f3f4f4;
  /* border-bottom: 1px solid #e4e4e4; */
}
header input {
  width: 90%;
  height: 28.8px;
  background-color: #f3f4f4;
  border-radius: 0.08px;
  border: none;
  outline: none;
  margin-left: 14px;
  margin-top: 9.5px;
  border: 1.3px solid #edeeee;
  line-height: 0.8px;
  font-family: PingFangSC-Regular;
  font-size: 11.52px;
  color: #98989e;
  text-indent: 15px;
  background: url("../assets/images/search.png") no-repeat 97%;
  background-size: 15px;
}

section {
  height: calc(100vh - 48px);
  width: 100%;
  background: pink;
}

ul {
  width: 23.4%;
  float: left;
  overflow: auto;
  height: calc(100vh - 48px);
  font-size: 14px;

  font-family: Arial, Helvetica, sans-serif;
  background-color: #f3f4f4;
}

ul::-webkit-scrollbar {
  display: none;
}

ul li {
  width: 100%;
  font-size: 14px;
  height: 46.8px;
  line-height: 46.8px;
  text-align: center;
  background-color: white;
  position: relative;
  background-color: #f3f4f4;
  color: #585c64;
}

.current {
  width: 4px;
  height: 46.8px;
  left: 0px;
  background: #de3d96;
  color: black;
  position: absolute;
}
.bgcolor {
  background-color: white;
}

.content {
  width: 76.6%;
  background-color: white;
  float: right;
  overflow: auto;
  height: calc(100vh - 48px);
}

content::-webkit-scrollbar {
  display: none;
}
</style>