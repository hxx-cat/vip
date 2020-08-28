<template>
  <main>
    <div class="top">
      <mt-header title="添加收货地址">
        <router-link to="/shoppingcar" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
        <!-- <mt-button icon="more" slot="right"></mt-button> -->
      </mt-header>
    </div>
    <div class="tablelist">
      <mt-field label="收货人" v-model="username"></mt-field>
      <mt-field label="手机号" type="tel" v-model="phone"></mt-field>
      <div class="recivetime">
        <div class="recivetime_popup">
          <mt-popup
            v-model="popupVisible1"
            popup-transition="popup-fade"
            closeOnClickModal="true"
            position="center"
          >
            <div class="recivetime_second">
              <mt-picker :slots="news" @change="onValuesChange1" showToolbar></mt-picker>
            </div>
          </mt-popup>
        </div>
        <div class="recivetime_field" @click="shoupup1">
          <mt-field label="收货时间" placeholder="请选择收货时间" v-model="message1"></mt-field>
        </div>
      </div>

      <div class="tablelist_middle">
        <div class="first">
          <mt-popup
            id="popup"
            v-model="popupVisible"
            popup-transition="popup-fade"
            closeOnClickModal="true"
            position="right"
          >
            <div class="second">
              <mt-picker :slots="slots" @change="onValuesChange" showToolbar>
                <div class="picker-toolbar-title">
                  <div class="usi-btn-cancel" @click="popupVisible = !popupVisible">取消</div>
                  <div class>选择省份</div>
                  <div class="usi-btn-sure" @click="popupVisible = !popupVisible">确定</div>
                </div>
              </mt-picker>
            </div>
          </mt-popup>
        </div>
        <div class="my-content-list" @click="ShouPup">
          <mt-field label="所在地区" v-model="message" class="text-hui"></mt-field>
        </div>
        <mt-field label="详细地址" type="textarea" rows="4" v-model="introduction"></mt-field>
      </div>
    </div>

    <div class="footer">
      <div class="footer_con">确定</div>
    </div>
  </main>
</template>
<script>
import { Popup } from "mint-ui";
import { Picker } from "mint-ui";
export default {
  name: "",
  data() {
    return {
      username: "",
      phone: "",
      introduction: "",
      showToolbar: true,
      message: "选择省份",
      message1: "",
      slots: [
        {
          values: [
            "请选择",
            "北京市",
            "天津市",
            "河北省",
            "陕西省",
            "内蒙古自治区",
            "辽宁省",
            "吉林省",
            "黑龙江省",
            "苏州",
            "常州",
            "杭州",
            "湖州",
            "上海",
            "南京",
          ],
        },
      ],
      news: [
        {
          values: ["收货时间不限", "周六日/节假日收货", "周一至周五收货"],
        },
      ],
      popupVisible1: false,
      popupVisible: false,
    };
  },
  methods: {
    ShouPup() {
      this.popupVisible = true;
    },
    shoupup1() {
      this.popupVisible1 = true;
    },
    onValuesChange(picker, values) {
      this.message = values;
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    onValuesChange1(picker1, values1) {
      this.message1 = values1;
      if (values1[0] > values1[1]) {
        picker1.setSlotValue(1, values1[0]);
      }
    },
  },
  mounted() {},
};
</script>
<style>
html {
  background-color: #f3f4f5;
}
.top .mint-header {
  width: 100%;
  height: 44px;
  background-color: white;
  font-size: 18px;
}
.tablelist {
  margin-top: 10px;
}
.tablelist_middle {
  margin-top: 10px;
}
.is-textarea .mint-cell-text {
  vertical-align: 79px;
}
.picker-toolbar-title {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 50px;
  line-height: 40px;
  font-size: 16px;
  width: 100%;
}
.picker-toolbar-title {
  width: 100%;
  overflow: auto;
}
.usi-btn-cancel,
.usi-btn-sure {
  color: #ff6600;
}

.first .mint-popup .mint-popup-right {
  z-index: 2001;
  width: 80%;
  height: 100%;
}
#popup {
  width: 80%;
  height: 100%;
}
.picker-slot {
  width: 100%;
}
.picker-slot-wrapper {
  height: 70%;
  overflow: auto;
  transform: translate(0px, 0px) translateZ(0px);
}
.picker-items {
  justify-content: left;
}
.picker-slot.picker-slot-center {
  margin-left: 10px;
  text-align: left;
}
.footer {
  width: 100%;
  height: 80px;
  background-color: white;
  position: absolute;
  bottom: 0px;
}
.footer .footer_con {
  width: 90%;
  height: 45.6px;
  margin: 17px auto;
  background-color: #de3d96;
  text-align: center;
  line-height: 45.6px;
  color: white;
  font-size: 12px;
}
.mint-cell-wrapper {
  background-image: none;
}
.mint-header-button > a {
  color: black;
}
.mint-header-title {
  color: black;
}
</style>