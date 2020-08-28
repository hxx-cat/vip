import VueRouter from "vue-router";
// import index from "../../components/index.vue";
import login from "../../components/login.vue";
import code_login from "../../components/code_login.vue";
import shoppingcar from "../../components/shoppingcar.vue";
import shoppingcar_empty from "../../components/shoppingcar_empty.vue";
import crazybuy from "../../components/crazybuy.vue";
import womanwear from "../../components/womanwear.vue";
import personal from "../../components/personal.vue";
import type from "../../components/type.vue";
import giordano from "../../components/giordano.vue";
import first from "../../components/first.vue";
import index from "../../components/index.vue";
import test from "../../components/test.vue";
import address from "../../components/address.vue";
import details from "../../components/details.vue";

export default new VueRouter({
  routes: [
    // {
    //   path: "/index",
    //   component: index,
    //   // 配置子路由 index内部一定要有router-view。否则不能渲染
    //   children: [
    //     {
    //       path: "/login",
    //       component: login
    //     }
    //   ]
    // }
    {
      path: "/",
      component: first,
      children: [
        {
          path: "/index",
          component: index
        }
      ],
      redirect: "/index"
    },

    {
      path: "/womanwear",
      component: womanwear
    },
    {
      path: "/personal",
      component: personal
    },
    {
      path: "/giordano/:sh",
      component: giordano
    },
    {
      path: "/type",
      component: type
    },

    {
      path: "/login",
      component: login
    },
    {
      path: "/code_login",
      component: code_login
    },
    {
      path: "/shoppingcar",
      component: shoppingcar
    },
    {
      path: "/shoppingcar_empty",
      component: shoppingcar_empty
    },
    {
      path: "/crazybuy",
      component: crazybuy
    },
    {
      path: "/test",
      component: test
    },
    {
      path: "/address",
      component: address
    },

    {
      path: "/details/:pa",
      component: details
    },

    {
      path: "/*",
      redirect: "/index"
    }

    // 配置子路由，内容渲染到第一层的router-view内部
    //   {
    //     path: "/milk",
    //     component: milk,
    //   },
    // {
    //   path: "/*",
    //   redirect: "/index"
    // }
  ]
});
