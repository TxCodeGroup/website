<template>
  <div class="index">
    <!-- 头部 -->

    <div class="header-contianer">
      <div class="header-box">
        <div class="header-center">
          <img
            style="width:86px;height:70px;cursor:pointer;"
            src="../assets/images/index/logoicon.png"
            alt
          />
          <div>
            <img
              v-if="$i18n.locale == 'en'"
              @click="changeLang('zh')"
              style="width:28px;height:28px;cursor:pointer;"
              src="../assets/images/index/changeLang.png"
              alt
            />
            <img
              v-else
              @click="changeLang('en')"
              style="width:28px;height:28px;cursor:pointer;"
              src="../assets/images/index/changeLangzh.png"
              alt
            />
          </div>
        </div>
        <div class="header-content">
          <div class="des-1">{{$t('title')}}</div>
          <div v-if="$i18n.locale == 'en'">
            <div class="des-2">{{$t('introduce')}}</div>
            <div class="des-2">{{$t('introduce1')}}</div>
            <div class="des-2">{{$t('introduce2')}}</div>
          </div>
          <div v-else>
            <div style="width:700px;line-height:50px;" class="des-2">{{$t('introduce')}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="body-contianer">
      <div class="body-products">{{$t('Academy')}}</div>
      <div class="body-products-wrap">
        <div class="body-products-item" @click="goAcademy">
          <div class="des-1">
            {{$t('Tools')}}
            <img src="../assets/images/index/itemBg.png" alt />
          </div>
        </div>
        <div class="body-products-item" @click="goAcademy">
          <div class="des-1">
            {{$t('testnet')}}
            <img src="../assets/images/index/itemBg.png" alt />
          </div>
        </div>
        <div class="body-products-item" @click="goAcademy">
          <div class="des-1">
            {{$t('LearningZone')}}
            <img src="../assets/images/index/itemBg.png" alt />
          </div>
        </div>
      </div>
      <div class="body-products" style="padding-bottom:69px">{{$t('How_can_I_participate')}}</div>
      <div class="body-Tink">
        <div class="body-Tink-box">
          <div>
            <img style="width:294px;height:230px;" src="../assets/images/index/learning.png" alt />
          </div>
          <div class="body-introduce" style="padding-left:59px">
            <div class="body-title">{{$t('Learning')}}</div>
            <p class="body-des">{{$t('joinDAO')}}</p>
          </div>
        </div>
      </div>
      <div class="body-Token" style="padding-top:80px;padding-bottom:102px;">
        <div class="body-Tink-box">
          <div class="body-introduce" style="padding-right:59px">
            <div class="body-title des-end">{{$t('BrandBuilding')}}</div>
            <div v-if="$i18n.locale == 'en'">
              <div class="body-des des-end">{{$t('Buildingtext1')}}</div>
              <div
                class="body-des des-end"
              >{{$t('Buildingtext2')}}</div>
              <div
                class="body-des des-end"
              >{{$t('Buildingtext3')}}</div>
            </div>
            <div v-else>
              <div
                class="body-des des-end"
                style="line-height:40px;"
              >{{$t('BrandBuildingDes')}}</div>
            </div>
          </div>

          <div>
            <img
              style="width: 302pxpx;height: 235px;"
              src="../assets/images/index/building.png"
              alt
            />
          </div>
        </div>
      </div>
      <div class="body-Developers">
        <div class="body-Tink-box">
          <div>
            <img
              style="width:295px;height:230px;margin-top:30px"
              src="../assets/images/index/development.png"
              alt
            />
          </div>
          <div class="body-introduce" style="padding-left:59px">
            <div class="body-title">{{$t('Development')}}</div>
            <div class="body-des">{{$t('Developmenttext1')}}</div>
          </div>
        </div>
      </div>
      <div class="body-products" style="padding-top:168px;padding-bottom:98px;">{{$t('Resources')}}</div>
      <div class="body-communities">
        <div class="body-communities-title">{{$t('Communities')}}</div>
        <div class="body-communities-des">{{$t('CommunitiesText')}}</div>
      </div>
      <div class="body-communities-wrap">
        <div class="body-communities-item" @click="goTwitter">
          <div class="body-communities-item-img">
            <img src="../assets/images/index/Twitter.png" alt />
            <img src="../assets/images/index/TwitterB.png" alt />
          </div>
          <div class="body-communities-item-title">Twitter</div>
          <div class="body-communities-item-des">https://twitter.com/TxCodeGroup</div>
        </div>
        <div class="body-communities-item" @click="goForum">
          <div class="body-communities-item-img">
            <img src="../assets/images/index/Forum.png" alt />
            <img src="../assets/images/index/ForumB.png" alt />
          </div>
          <div class="body-communities-item-title">Forum</div>
          <div class="body-communities-item-des">https://forum.txcode.org/</div>
        </div>
        <div class="body-communities-item" @click="goTelegram">
          <div class="body-communities-item-img">
            <img src="../assets/images/index/Telegram.png" alt />
            <img src="../assets/images/index/TelegramB.png" alt />
          </div>
          <div class="body-communities-item-title">Telegram</div>
          <div class="body-communities-item-des">https://t.me/TxCode</div>
        </div>
      </div>
    </div>
    <div class="footer-contianer">
      <a class="footer-contianer-des" href="https://github.com/TxCodeGroup/website" target="_blank">
        {{$t('end')}} <i class="el-icon-arrow-right" style="font-size: 26px; font-weight: bold;"/>
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
  computed:{
   langType() {
      return this.$i18n.locale == "en" ? "zh" : "en";
    },
  },
  components: {
    HomeCanvas
  },
  created() {
    // this.changeLang()
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
  computed: {
    langType() {
      return this.$i18n.locale == "en" ? "zh" : "en";
    }
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
      window.open("https://forum.txcode.org/");
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
    height: 1058px;
    background: url("../assets/images/index/header_back.png") no-repeat center
      center;
    background-size: cover;
    display: flex;
    .header-box {
      width: 1200px;
      margin: 0 auto;
      .header-center {
        padding-top: 40px;
        padding-bottom: 160px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .btn {
          font-size: 16px;
          font-weight: 400;
          width: 110px;
          height: 40px;
          line-height: 40px;
          border-radius: 20px;
          text-align: center;
          margin-left: 16px;
          cursor: pointer;
        }
        .btn-white {
          background: #fefffd;
          color: #333333;
        }
        .btn-orange {
          background: #fcbf19;
          color: #ffffff;
          position: relative;
        }

        .changeLanguage {
          display: none;
          margin-top: 10px;
          position: absolute;
          top: 40px;
          left: 0;
          right: 0;
          padding: 12px 0;
          border-radius: 15px;
          background: #fcbf19;
          color: #ffffff;
          list-style: none;
          li {
            font-size: 16px;
            font-family: Arial;
            font-weight: 400;
            color: #ffffff;
            line-height: 22px;
          }
        }
      }
      .btn-orange:hover {
        .changeLanguage {
          display: block;
        }
      }
      .header-content {
        width: 1200px;
        font-family: PingFang SC;
        color: #ffffff;
        .des-1 {
          cursor: pointer;
          font-size: 70px;
          line-height: 70px;
          font-weight: bold;
          padding-bottom: 57px;
        }
        .des-2 {
          cursor: pointer;
          line-height: 30px;
          font-size: 30px;
          padding-bottom: 25px;
          font-weight: 500;
        }
      }
    }
  }
  .body-contianer {
    width: 1200px;
    margin: 0 auto;
    .body-products {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 48px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #2e2828;
    }
    .body-products-wrap {
      padding: 0 42px;
      padding-top: 130px;
      padding-bottom: 231px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .body-products-item {
        cursor: pointer;
        img {
          width: 78px;
          height: 70px;
          position: absolute;
          right: -42px;
          bottom: -8px;
        }
        .des-1 {
          box-sizing: content-box;
          position: relative;
          font-size: 36px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #474747;
          padding-bottom: 4px;
          border-bottom: 1px solid rgba(0, 0, 0, 0);
        }
        .des-1:hover {
          color: #ff5c4f;
          padding-bottom: 4px;
          border-bottom: 1px solid #ff5c4f;
        }
        .des-1:active {
          color: #ff5c4f;
          padding-bottom: 4px;
          border-bottom: 1px solid #ff5c4f;
        }
      }
    }
    .body-title {
      font-size: 36px;
      line-height: 36px;
      padding-bottom: 29px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ff5c4f;
    }
    .body-des {
      text-align: left;
      font-size: 24px;
      line-height: 24px;
      padding-bottom: 22px;
      font-family: PingFang SC;
      font-weight: 400;
      color: #474747;
    }
    .des-end {
      text-align: right;
    }
    .body-Tink,
    .body-Token,
    .body-Developers {
      // height: 680px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      .body-Tink-box {
        width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .body-introduce {
          cursor: pointer;
          flex: 1;
        }
      }
    }
    .body-communities {
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      .body-communities-title {
        cursor: pointer;
        font-size: 36px;
        line-height: 36px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #474747;
      }
      .body-communities-des {
        cursor: pointer;
        padding-top: 34px;
        padding-bottom: 90px;
        font-size: 24px;
        line-height: 24px;
        font-family: PingFang SC;
        font-weight: 400;
        color: #474747;
      }
    }
    .body-communities-wrap {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .body-communities-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .body-communities-item-img {
          position: relative;

          cursor: pointer;
          width: 172px;
          height: 172px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ffffff;
          border: 1px solid #ff5c4f;
          border-radius: 50%;
          img {
            width: 66px;
            height: 57px;
          }
        }
        .body-communities-item-img img:last-child {
          position: absolute;
          top: 0px;
          margin: 0 0 0 0;
          opacity: 0; /*设置透明度0->隐藏*/
          transition: all 0.3s ease-in; /*设置缓慢0.3秒出现的动画*/
        }
        .body-communities-item-img:hover img:last-child {
          opacity: 1;
          position: absolute;
          top: 58px;
        }
        .body-communities-item-img:hover {
          background: #ff5c4f;
          border: 1px solid #ff5c4f;
        }
        .body-communities-item-title {
          cursor: pointer;
          // width: 172px;
          padding-top: 39px;
          padding-bottom: 17px;
          text-align: center;
          font-size: 24px;
          line-height: 24px;
          font-family: PingFang SC;
          font-weight: bold;
          color: #ff5c4f;
        }
        .body-communities-item-des {
          cursor: pointer;
          // width: 172px;
          text-align: center;
          font-size: 20px;
          line-height: 20px;
          font-family: PingFang SC;
          font-weight: 500;
          color: #474747;
        }
      }
    }
  }
  .footer-contianer {
    height: 420px;
    background: url("../assets/images/index/end.png") no-repeat center center;
    background-size: cover;
    display: flex;
    // align-items: center;
    justify-content: center;
    padding-top: 340px;
      padding-bottom: 46px;
    .footer-contianer-des {
      cursor: pointer;
      
      font-size: 36px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #ffffff;
      // display: flex;
      // align-items: center;
      
    }
  }

  .swiper-container {
    width: 1200px;
    margin: 0 auto;
    .card-item-area {
      padding: 0 15px;
      margin: 10px 0;
      .card-item {
        height: 141px;
        background: #ffffff;
        box-shadow: 0px 0px 18px 0px rgba(4, 0, 0, 0.11);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .card-item {
    background: #ffffff;
    box-shadow: 0px 0px 18px 0px rgba(4, 0, 0, 0.11);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
