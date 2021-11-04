<template>
  <div class="index">
    <!-- 头部 -->

    <div class="header-contianer">
      <div class="header-box">
        <div class="header-center">
          <img
            style="width:0.8rem;height:0.65rem;"
            src="../../assets/images/index/logoicon.png"
            alt
          />
          <div>
            <img
              v-if="$i18n.locale == 'en'"
              @click="changeLang('zh')"
              style="width:0.34rem;height:0.34rem;cursor:pointer;"
              src="../../assets/images/index/changeLang.png"
              alt
            />
            <img
              v-else
              @click="changeLang('en')"
              style="width:0.34rem;height:0.34rem;cursor:pointer;"
              src="../../assets/images/index/changeLangzh.png"
              alt
            />
          </div>
        </div>
        <div class="header-content">
          <div class="des-1">{{$t('title')}}</div>
          <div v-if="$i18n.locale == 'en'">
              <div
            class="des-2"
            style="width:3.1rem"
          >{{$t('introduce')}}</div>
          <div
            class="des-2"
            style="width:4.14rem"
          >{{$t('introduce1')}}{{$t('introduce2')}}</div>
          </div>
          <div v-else>
              <div style="width:3.4rem;line-height:0.46rem;" class="des-2">{{$t('introduce')}}</div>
          </div>
          
        </div>
      </div>
    </div>
    <div class="body-contianer">
      <div
        class="body-products"
        style="padding-top:0.3rem;padding-bottom:0.37rem;"
      >{{$t('Academy')}}</div>
      <div class="body-products-wrap">
        <div class="body-products-item" @click="goAcademy">
          <div class="des-1">
            {{$t('Tools')}}
            <img src="../../assets/images/index/itemBg.png" alt />
          </div>
        </div>
        <div class="body-products-item" @click="goAcademy">
          <div class="des-1">
            {{$t('testnet')}}
            <img src="../../assets/images/index/itemBg.png" alt />
          </div>
        </div>
        <div class="body-products-item" @click="goAcademy">
          <div class="des-1">
            {{$t('LearningZone')}}
            <img src="../../assets/images/index/itemBg.png" alt />
          </div>
        </div>
      </div>
      <div class="body-products" style="padding-bottom:0.49rem">{{$t('How_can_I_participate')}}</div>
      <div class="body-Tink">
        <div class="body-Tink-box">
          <div>
            <img
              style="width:1.86rem;height:1.45rem;"
              src="../../assets/images/index/learning.png"
              alt
            />
          </div>
          <div class="body-introduce" style="padding-left:0.25rem">
            <div class="body-title">{{$t('Learning')}}</div>
            <p class="body-des">{{$t('joinDAO')}}</p>
          </div>
        </div>
      </div>
      <div class="body-Token" style="padding-top:0.7rem;padding-bottom:0.93rem;">
        <div class="body-Tink-box">
          <div class="body-introduce" style="padding-right:0.25rem">
            <div class="body-title des-end">{{$t('BrandBuilding')}}</div>
            <div v-if="$i18n.locale == 'en'">
              <div class="body-des des-end">{{$t('Buildingtext1')}}</div>
              <div class="body-des des-end">{{$t('Buildingtext4')}}</div>
              <div class="body-des des-end">{{$t('Buildingtext5')}}</div>
              <div class="body-des des-end">{{$t('Buildingtext6')}}</div>
              <div class="body-des des-end">{{$t('Buildingtext7')}}</div>
            </div>
            <div v-else>
              <div class="body-des des-end" style="line-height:0.4rem;">{{$t('BrandBuildingDes')}}</div>
            </div>
          </div>
          <div>
            <img
              style="width:1.87rem;height:1.45rem;"
              src="../../assets/images/index/building.png"
              alt
            />
          </div>
        </div>
      </div>
      <div class="body-Developers">
        <div class="body-Tink-box">
          <div>
            <img
              style="width:1.86rem;height:1.45rem;"
              src="../../assets/images/index/development.png"
              alt
            />
          </div>
          <div class="body-introduce" style="padding-left:0.25rem">
            <div class="body-title">{{$t('Development')}}</div>
            <div class="body-des">{{$t('Developmenttext1')}}</div>
          </div>
        </div>
      </div>
      <div
        class="body-products"
        style="padding-top:1.21rem;padding-bottom:0.58rem;"
      >{{$t('Resources')}}</div>
      <div class="body-communities">
        <div class="body-communities-title">{{$t('Communities')}}</div>
        <div class="body-communities-des">{{$t('CommunitiesText')}}</div>
      </div>
      <div class="body-communities-wrap">
        <div class="body-communities-item" @click="goTwitter">
          <div class="body-communities-item-img">
            <img src="../../assets/images/index/Twitter.png" alt />
          </div>
          <div class="body-communities-item-text" style="padding-left:0.26rem">
            <div class="body-communities-item-title">Twitter</div>
            <div class="body-communities-item-des">https://twitter.com/TxCodeGroup</div>
          </div>
        </div>
        <div class="body-communities-item" @click="goForum">
          <div class="body-communities-item-img">
            <img src="../../assets/images/index/Forum.png" alt />
          </div>
          <div class="body-communities-item-text" style="padding-left:0.26rem">
            <div class="body-communities-item-title">Forum</div>
            <div class="body-communities-item-des">https://txcode.io/</div>
          </div>
        </div>
        <div class="body-communities-item" @click="goTelegram">
          <div class="body-communities-item-img">
            <img src="../../assets/images/index/Telegram.png" alt />
          </div>
          <div class="body-communities-item-text" style="padding-left:0.26rem">
            <div class="body-communities-item-title">Telegram</div>
            <div class="body-communities-item-des">https://t.me/TxCode</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-contianer">
      <a class="footer-contianer-des" href="https://github.com/TxCodeGroup/website" target="_blank">
        {{$t('end')}} <i class="el-icon-arrow-right" style="font-size: .25rem; font-weight: bold;"/>
      </a>
    </div>
  </div>
</template>

<script>

import HomeCanvas from "@/components/HomeCanvas";
import Swiper from "swiper";
export default {
  data() {
    return {
      PartnersStyles: {},
      imageList: [
        // {imgSrc: require('../assets/images/index/thinkium.png')},
        // {imgSrc: require('../assets/images/index/bitcoin.png')},
        // {imgSrc: require('../assets/images/index/ethereum.png')},
        // {imgSrc: require('../assets/images/index/uniswap.png')},
        // {imgSrc: require('../assets/images/index/binance.png')},
        // {imgSrc: require('../assets/images/index/sushi.png')},
      ],
      windowWidth: 0
    };
  },
  components: {
    HomeCanvas
  },
   computed: {
    langType() {
      return this.$i18n.locale == "en" ? "zh" : "en";
    }
  },
  created() {
    //   this.changeLang()
    let screenWidth = window.screen.width;
    (this.PartnersStyles =
      screenWidth < 640
        ? {
            width: "50rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap-reverse",
            margin: "0 auto"
          }
        : {
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }),
      (this.ItemStyles =
        screenWidth < 640
          ? {
              margin: "30px 0"
            }
          : {});

    this.ItemStyles = {};
  },
  mounted() {
    var mySwiper = new Swiper(".swiper-container", {
      autoplay: true, //可选选项，自动滑动
      slidesPerView: "auto",
      loop: true,
      slidesPerView: 3
    });
    this.windowWidth = window.screen.width;
  },
  methods: {
    goAcademy() {
      window.open("https://github.com/TxCodeGroup/TxCodeDao");
    },
    goTwitter() {
      window.open("https://twitter.com/TxCodeGroup");
    },
    goForum() {
      window.open("https://txcode.io/");
    },
    goTelegram() {
      window.open("https://t.me/TxCode");
    },
    changeLang(lang = this.$i18n.locale == "en" ? "zh" : "en") {
      console.log("改语言", lang);
      if (lang == "en" ? "zh" : "en") {
        this.$i18n.locale = lang;
        localStorage.setItem("lang", lang);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.index {
  height: 100%;
  .header-contianer {
    height: 5.62rem;
    background: url("../../assets/images/index/appheader_back.png") no-repeat
      center center;
    background-size: cover;
    display: flex;
    .header-box {
      padding: 0 0.22rem;
      width: 6.4rem;
      margin: 0 auto;
      .header-center {
        padding-top: 0.58rem;
        padding-bottom: 0.56rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .header-content {
        //    padding: 0 0.22rem;
        //   width: 6.4rem;
        margin: 0 auto;
        font-family: PingFang SC;
        color: #ffffff;
        .des-1 {
          font-size: 0.4rem;
          line-height: 0.4rem;
          font-weight: bold;
          padding-bottom: 0.24rem;
        }
        .des-2 {
          font-size: 0.2rem;
          line-height: 0.31rem;
          padding-bottom: 0.11rem;
          font-weight: 500;
        }
      }
    }
  }
  .body-contianer {
    padding: 0 0.32rem;
    width: 6.4rem;
    margin: 0 auto;
    .body-products {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 0.39rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: #2e2828;
    }
    .body-products-wrap {
      padding-right: 0.5rem;
      padding-top: 0.37rem;
      padding-bottom: 1.24rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .body-products-item {
        img {
          width: 0.67rem;
          height: 0.61rem;
          position: absolute;
          right: -0.41rem;
          bottom: -0.08rem;
        }
        .des-1 {
          box-sizing: content-box;
          position: relative;
          font-size: 0.26rem;
          font-family: PingFang SC;
          font-weight: 500;
          color: #474747;
          padding-bottom: 0.02rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0);
        }
        .des-1:hover {
          color: #ff5c4f;
          padding-bottom: 0.02rem;
          border-bottom: 1px solid #ff5c4f;
        }
        .des-1:active {
          color: #ff5c4f;
          padding-bottom: 0.02rem;
          border-bottom: 1px solid #ff5c4f;
        }
      }
    }
    .body-title {
      font-size: 0.31rem;
      line-height: 0.31rem;
      padding-bottom: 0.14rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ff5c4f;
    }
    .body-des {
      text-align: left;
      font-size: 0.2rem;
      line-height: 0.32rem;
      font-family: PingFang SC;
      font-weight: 400;
      font-weight: 400;
      color: #474747;
    }
    .des-end {
      text-align: right;
    }
    .body-Tink,
    .body-Token,
    .body-Developers {
      // padding: 0 0.3rem;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .body-Tink-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .body-introduce {
          flex: 1;
        }
      }
    }
    .body-communities {
      padding: 0 0.22rem;
      margin: 0 auto;
      text-align: center;
      .body-communities-title {
        font-size: 0.31rem;
        line-height: 0.31rem;
        font-family: PingFang SC;
        font-weight: 500;
        color: #474747;
      }
      .body-communities-des {
        padding-top: 0.33rem;
        padding-bottom: 0.6rem;
        font-size: 0.2rem;
        line-height: 0.34rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #474747;
      }
    }
    .body-communities-wrap {
      padding: 0 0.3rem;

      margin: 0 auto;

      .body-communities-item {
        //   background: red;
        margin: 0 auto;
        display: flex;
        padding: 0 0.4rem;
        padding-bottom: 0.5rem;
        // flex-direction: column;

        justify-content: center;
        align-items: center;
        .body-communities-item-img:hover {
          background: #ff5c4f;
          border: 1px solid #ff5c4f;
        }
        .body-communities-item-img {
          width: 0.77rem;
          height: 0.77rem;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ffffff;
          border: 1px solid #ff5c4f;
          border-radius: 50%;
          img {
            width: 0.43rem;
            height: 0.37rem;
          }
        }
        .body-communities-item-text {
          flex: 1;
          padding: 0.15rem 0;
        }
        .body-communities-item-title {
          text-align: left;
          padding-bottom: 0.17rem;
          font-size: 0.2rem;
          line-height: 0.2rem;
          font-family: PingFang SC;
          font-weight: bold;
          color: #ff5c4f;
        }
        .body-communities-item-des {
          // width: 172px;
          text-align: left;
          font-size: 0.17rem;
          line-height: 0.17rem;
          font-family: PingFang SC;
          font-weight: 500;
          color: #474747;
        }
      }
    }
  }
  .footer-contianer {
    margin: 0 auto;
    // height: 1.9rem;
    background: url("../../assets/images/index/append.png") no-repeat center
      center;
    background-size: cover;
    display: flex;
    // align-items: center;
    justify-content: center;
    .footer-contianer-des {
      margin-top: 1.21rem;
      margin-bottom: 0.42rem;
      font-size: 0.31rem;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;
    }
  }
}
</style>
