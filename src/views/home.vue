<template>
  <div class="home">
    111111111111111
  </div>
</template>

<script>

import Button from "@/components/Button";
import Popup from "@/components/Popup";
import { Dialog } from 'element-ui'
import isShowImg from "@/components/isShowImg";
import { skillList } from "@/utils/data";
import Swiper from "swiper/bundle";
import { getchainDetail, getTransferDetail } from "@/api/borwser";
import { getNewsList } from "@/api";
import AnimationMixn from '@/mixin/initAnimation.js'
import _ from "lodash";
// import newsList from '@/utils/data/news'
require("swiper/swiper-bundle.css");
export default {
  name: "Home",
  components: {
    Button,
    Popup,
    isShowImg
  },
  mixins: [AnimationMixn],
  data() {
    return {
      locale: this.$i18n.locale,
      skillList,
      iosQRCodeAnimate: false,
      androidQRCodeAnimate: false,
      chainData: {},
      transferData: {
        blockHeight: "",
        txNum: "",
      },
      newsList: [],
      total: 0,
      imgStyles:{},
       dialogVisible: false,
    };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
      localStorage.setItem("lang", val);
    },
  },
  computed: {
    fadeInOrOutIOS() {
      return this.iosQRCodeAnimate
        ? ["animate__animated", "animate__fadeInUp"]
        : ["animate__animated", "animate__fadeOutDown"];
    },
    fadeInOrOutAndroid() {
      return this.androidQRCodeAnimate
        ? ["animate__animated", "animate__fadeInUp"]
        : ["animate__animated", "animate__fadeOutDown"];
    },
  },
  created() {
    let getImg = localStorage.getItem("EnterThePageToSeeWhetherThePictureIsDisplayed")
      console.log("getImg",getImg)
      if(!getImg){
          this.dialogVisible = true
          localStorage.setItem("EnterThePageToSeeWhetherThePictureIsDisplayed",1);
      }else{
           this.dialogVisible = false
      }
    
     let screenWidth =  window.screen.width;
     console.log('screenWidth', screenWidth);
    this.imgStyles = screenWidth < 640 ? {
          width:'auto',
          height:'8.5rem'
       } : {
        width:'auto',
          height:'700px'
       }
  },
  mounted() {
    this.initSwiper();
    this.getChainData();
    this.getTransferData();
    this.getNewsData();
    this.initAnimation();
  },
  methods: {
    handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
    initSwiper() {
      new Swiper(".swiper-container", {
        autoplay: true, //可选选项，自动滑动
        slidesPerView: "auto",
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
      });
    },
    async getChainData() {
      const { data } = await getchainDetail();
      this.chainData = data;
    },
    async getTransferData() {
      const { data } = await getTransferDetail({ chainId: 0 });
      const reg = /\B(?=(?:\d{3})+\b)/g;
      const blockHeight = _.get(data, "blockHeight", "").toString();
      const txNum = _.get(data, "txNum", "").toString();
      this.transferData.blockHeight = blockHeight.replace(reg, ",");
      this.transferData.txNum = txNum.replace(reg, ",");
    },
    async getNewsData() {
      return;
      const params = {
        page: 1,
        rows: 5,
        status: 1,
        companyType: 1,
        newsType: "",
      };
      const { data } = await getNewsList(params);
      data.data.forEach((v) => {
        v.title = JSON.parse(v.title).ENG;
        v.desc = JSON.parse(v.desc).ENG;
      });
      this.newsList = data.data;
      this.total = data.total;
    },
    whitePaper() {
      window.open(
        "https://TINK-data.s3-us-west-2.amazonaws.com/TINK+Whitepaper.pdf"
      );
    },
    bluePaper() {
      window.open(
        "https://TINK-data.s3-us-west-2.amazonaws.com/TINK+Technical+Bluepaper.pdf"
      );
    },
    seeDetailData() {
      window.open("https://browser.TINK.io");
    },
    understandSillMore() {
      this.$router.push("/technology");
    },
    openPopup() {
      this.$refs.popup.open();
    },
    becomeDevploder() {
      this.$router.push("/developer");
    },
    goTwitter() {
      window.open("https://twitter.com/TINK2");
    },
    goFaceBook() {
      window.open("https://www.facebook.com/kium.thin.3/");
    },
    goNews() {
      this.$router.push("/newsLayout");
    },
    goNewDeail(id) {
      this.$router.push(`/newsDetail?id=${id}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  height: 100%;
  .header-contianer {
    height: 1080px;
    background: url("../assets/images/home/homeBackgroud.png") no-repeat center
      center;
    background-size: cover;
    .header-adaptation {
      width: 1200px;
      // background: red;
      margin: 0 auto;
      .header-title-box {
        padding-top: 272px;
        padding-left: 114px;
        .red-icon {
          width: 60px;
          height: 10px;
          border-radius: 5px;
          opacity: 0.54;
          background: #ff7054;
          margin-bottom: 29px;
        }
        .only-zh-title {
          font-size: 26px;
          font-weight: 300;
          color: #ead7ff;
          margin-bottom: 14px;
        }
        .header-title {
          height: 145px;
          font-size: 49px;
          font-weight: bold;
          color: #fff;
          background: url("../assets/images/home/homeHeaderTitle.png") no-repeat
            left center;
        }
      }
      .header-certificate {
        display: flex;
        padding: 0 100px;
        justify-content: space-around;
        margin-top: 26px;
        .header-certificate-item {
          width: 188px;
          height: 72px;
          background: #f8f5ff;
          border-radius: 10px;
          opacity: 0.9;
          color: #7139ff;
          text-align: center;
          line-height: 72px;
          font-size: 20px;
          cursor: pointer;
        }
      }
    }
  }
  .think-data-contianer {
    width: 1000px;
    height: 494px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 15px 26px 0px rgba(58, 33, 121, 0.08);
    margin: 0 auto;
    position: relative;
    top: -213px;
    padding: 45px;
    .think-data-top {
      display: flex;
      .think-data-top-left {
        .think-data-title {
          color: #000000;
          font-size: 22px;
          font-weight: 800;
          position: relative;
          margin-bottom: 35px;
          &::before {
            content: "";
            width: 25px;
            height: 4px;
            background: #9369f9;
            border-radius: 2px;
            position: absolute;
            bottom: -15px;
          }
        }
        .think-data-content {
          width: 608px;
          color: #151515;
          margin-top: 21px;
        }
        .chain-data {
          width: 484px;
          height: 179px;
          background: #f8f7fc;
          box-shadow: 9px 12px 15px 0px rgba(15, 4, 64, 0.08);
          border-radius: 20px;
          position: relative;
          left: -145px;
          margin-top: 33px;
          padding-top: 18px;
          .chain-data-icon {
            text-align: center;
            margin-bottom: 20px;
            img {
              width: 41px;
              height: 34px;
            }
            p {
              text-align: center;
              color: #ff7054;
              font-weight: bold;
              font-size: 18px;
            }
          }
          .chain-data-content {
            display: flex;
            .chain-data-item {
              flex: 1;
              text-align: center;
              span {
                font-size: 30px;
                font-weight: 800;
                color: #000000;
              }
              p {
                color: #3d3d3d;
                font-weight: 500;
                margin-top: 13px;
              }
            }
          }
        }
      }
      .think-data-top-right {
        width: 345px;
        height: 337px;
        background: #f8f7fc;
        box-shadow: 9px 12px 15px 0px rgba(15, 4, 64, 0.08);
        border-radius: 20px;
        position: relative;
        right: -145px;
        padding: 20px 0;
        .chain-structure {
          text-align: center;
          img {
            width: 86px;
            height: 80px;
          }
          p {
            text-align: center;
            color: #000;
            font-weight: bold;
            font-size: 18px;
            margin-top: 20px;
          }
        }
        .chain-structure-data {
          display: flex;
          flex-wrap: wrap;
          margin-top: 20px;
          div {
            width: 50%;
            text-align: center;
            margin-bottom: 30px;
            span {
              font-size: 30px;
              font-weight: 800;
              color: #000000;
            }
            p {
              color: #3d3d3d;
              font-weight: 500;
              margin-top: 13px;
            }
          }
        }
      }
    }
    .think-data-bottom {
      width: 714px;
      height: 88px;
      padding: 0 19px;
      margin-top: 29px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #f8f7fc;
      box-shadow: 9px 12px 15px 0px rgba(15, 4, 64, 0.08);
      border-radius: 20px;
      position: relative;
      p {
        font-size: 18px;
        font-weight: 500;
        margin-left: 35px;
      }
      .go-detail {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        span {
          color: #8b3fff;
          font-weight: 800;
          margin-right: 10px;
        }
        img {
          width: 31px;
          height: 16px;
        }
      }
      .think-data-icon-left {
        position: absolute;
        left: -30px;
        bottom: -30px;
        animation: iconMove 2s infinite alternate;
      }
      .think-data-icon-right {
        position: absolute;
        right: 148px;
        top: -20px;
        animation: iconMove 2s infinite alternate;
      }
    }
  }
  .our-skill {
    position: relative;
    width: 1005px;
    height: 460px;
    margin: 0 auto;
    display: flex;
    // background: url("../assets/images/home/skillBackground.png") center center
    //   no-repeat;
    background-size: cover;
    .our-skill-left {
      padding-top: 131px;

      h2 {
        color: #7139ff;
        font-size: 30px;
        font-weight: 800;
        padding-bottom: 116px;
      }
      img {
        width: 24px;
        height: 25px;
        display: block;
        margin-top: 40px;
        animation: iconMove 2s infinite alternate;
      }
    }
    .our-skill-continaer {
      position: absolute;
      left: 250px;
      top: 100px;
      width: 800px;
      height: 290px;
      padding-top: 30px;
      .our-skill-item {
        width: 180px;
        height: 230px;
        text-align: center;
        padding: 50px 18px;
        border-radius: 14px;
        background: #fff;
        box-shadow: 0 0 26px 0 rgba(58, 33, 121, 0.08);

        margin: 0 20px;
        img {
          margin-bottom: 60px;
        }
        p {
          color: #7139ff;
          font-size: 16px;
          font-weight: bold;
          position: relative;
          &::after {
            content: "";
            width: 26px;
            height: 5px;
            background: #ff7054;
            border-radius: 3px;
            position: absolute;
            bottom: -17px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
      .decoration-icon{
        position: absolute;
        top: 0;
        right: 140px;
      }
    }
    .swiper-pagination {
      width: 90px;
      display: flex;
      justify-content: space-around;
      position: absolute;
      bottom: 60px;
      left: 270px;
      --swiper-theme-color: #7139FF;
      &::v-deep .swiper-pagination-bullet:focus {
          outline: 0;
      }

    }
  }
  .economic-module {
    width: 1200px;
    margin: 0 auto;
    margin-top: 117px;
    .title{
      position: relative;
      img{
        position: absolute;
        top: 0 !important;
        left: 100% !important;
        transform: translate(-50%, -50%);
      }
    }
    .loop{
      display: flex;
      justify-content: center;
      align-items: center;
      .loop-examples{
        display: flex;
        flex-wrap: wrap;
        margin-left: 56px;
        >li{
          &:nth-child(2n+1){
            margin-right: 97px;
          }
          color: #23282F;
          font-weight: Bold;
          font-size: 20px;
          display: flex;
          align-items: center;
          height: 50px;
          >i{
            margin-right: 15px;
            display: inline-block;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #9D79FB;
          }
        }

      }
    }

    .economic-module-table{
      width: 1000px;
      margin: 68px auto 0;
      background: #FFF;
      box-shadow: 0 15px 26px 0px rgba(58, 33, 121, 0.08);
      border-radius: 10px;
      padding: 19px 50px 0;

      th{
        color: #23282F;
        font-size: 18px;
        height: 76px;
        font-weight: bold;
        text-align: left;
      }

      td{
        color: #23282F;
        font-size: 18px;
        height: 94px;
        line-height: 24px;
        text-align: left;
      }

      tr+tr{
        td{
          border-top: 1px solid #E5E9F8;
        }
      }

   }
  }
  .our-ecology {
    width: 1000px;
    margin: 0 auto;
    margin-top: 117px;
    .our-ecology-box {
      display: flex;
      height: 600px;
      padding-left: 30px;
      .our-ecology-left {
        width: 380px;
        height: 100%;
        background: #7139ff url("../assets/images/home/ecologyBackground.png")
          no-repeat center bottom;
        padding: 65px 35px;
        color: white;
        font-size: 16px;
        line-height: 30px;
        font-weight: 500;
        p {
          margin-bottom: 43px;
        }
      }
      .our-ecology-right {
        width: 620px;
        height: 100%;
        box-shadow: 0 0 26px 0 rgba(58, 33, 121, 0.08);
        .our-ecology-title {
          display: flex;
          align-items: center;
          margin-left: 30px;
          margin-top: 30px;
          img {
            width: 86px;
            height: 80px;
            margin-right: 11px;
          }
          span {
            color: #000000;
            font-size: 18px;
            font-weight: bold;
          }
        }
        .our-ecology-community {
          width: 460px;
          margin-left: 112px;
          background: #f5f3fb;
          border-top-right-radius: 120px;
          border-bottom-right-radius: 120px;
          border-bottom-left-radius: 100px;
          padding: 20px;
          position: relative;
          padding-left: 40px;
          p {
            color: #7139ff;
            font-size: 16px;
            font-weight: 500;
            line-height: 30px;
            position: relative;
            &::before {
              content: "";
              width: 6px;
              height: 6px;
              background: #b1a3f9;
              opacity: 0.8;
              border-radius: 50%;
              display: inline-block;
              position: relative;
              bottom: 2px;
              right: 5px;
            }
          }
          p:first-child {
            width: 334px;
            margin-bottom: 7.5px;
          }
          p:last-child {
            width: 360px;
            margin-left: 41px;
          }
        }
        .our-devploader {
          width: 648px;
          height: 214px;
          background: #f5f3fb;
          border-top-left-radius: 120px;
          border-bottom-left-radius: 120px;
          border-bottom-right-radius: 100px;
          position: relative;
          right: 78px;
          bottom: -30px;
          padding-left: 72px;
          p {
            color: #7139ff;
            font-size: 16px;
            font-weight: 500;
            line-height: 48px;
            position: relative;
            &::before {
              content: "";
              width: 6px;
              height: 6px;
              background: #b1a3f9;
              opacity: 0.8;
              border-radius: 50%;
              display: inline-block;
              position: relative;
              bottom: 2px;
              right: 5px;
            }
          }
          div {
            span {
              display: inline-block;
              margin: 0 17.5px;
            }
            span:first-child {
              margin-left: 0;
            }
            span:last-child {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
  .our-product {
    width: 100%;
    height: 350px;
    margin-top: 368px;
    position: relative;
    background: url("../assets/images/home/productBackground.png") no-repeat
      center center;
    .product-adaptation {
      position: relative;
      width: 1200px;
      margin: 0 auto;
      // background: red;
      height: 200px;
      .our-product-bg {
        width: 100%;
        height: 176px;
        margin: 0 auto;
        position: absolute;
        z-index: -10;
        top: -116px;
        left: 50%;
        transform: translateX(-50%);
      }

      .our-product-icon {
        width: 65px;
        height: 57px;
        margin-top: 42px;
      }
      h2 {
        text-align: center;
        color: #ffffff;
        font-size: 30px;
        font-weight: 800;
      }
      .product-version {
        display: flex;
        margin-top: 54px;
        padding-left: 530px;
        justify-content: center;
        .button-content {
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            margin-right: 11px;
          }
          position: relative;
          &::after {
            content: "";
            width: 5px;
            height: 5px;
            background: #f2e5ff;
            border-radius: 50%;
            position: absolute;
            right: 16px;
            top: 50%;
          }
          &::before {
            content: "";
            width: 5px;
            height: 5px;
            background: #f2e5ff;
            border-radius: 50%;
            position: absolute;
            left: 16px;
            top: 50%;
          }
          .QRCode {
            width: 120px;
            height: 120px;
            position: absolute;
            bottom: -140px;
          }
        }
      }
      .phone-model-box {
        position: absolute;
        top: 134px;
        left: 130px;
        .phone-model {
          width: 357px;
          height: 557px;
          position: relative;
          z-index: 2;
        }
        .pruduct-img-1 {
          width: 219px;
          height: 208px;
          position: absolute;
          top: 0;
          left: -55px;
          z-index: 1;
        }
        .pruduct-img-2 {
          width: 267px;
          height: 152px;
          position: absolute;
          top: 198px;
          right: -205px;
          z-index: 1;
        }
        .pruduct-img-3 {
          width: 307px;
          height: 169px;
          position: absolute;
          top: 316px;
          left: -135px;
          z-index: 1;
        }
        .pruduct-icon {
          widows: 24px;
          height: 25px;
          position: absolute;
          top: 316px;
          right: -625px;
          z-index: 1;
          animation:  iconMove 2s infinite alternate;
        }
      }
    }
  }
  .our-dynamic {
    width: 1218px;
    margin: 0 auto;
    margin-top: 480px;
    position: relative;
    .dymamic-box {
      width: 998px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;
      .dymamic-box-left {
        width: 460px;
        .dymamic-box-news {
          width: 460px;
          height: 306px;
          border-radius: 20px;
          margin-bottom: 23px;
        }
      }
      .dymamic-box-item {
        margin-bottom: 23px;
        padding: 15px 24px;
        background: #ffffff;
        border-radius: 20px;
        box-shadow: 0 0 26px 0 rgba(58, 33, 121, 0.08);
        .news-time {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #606060;
          margin-bottom: 10px;
          img {
            margin-right: 6px;
          }
        }
        .news-title {
          padding: 13px 11px;
          background: #f8f8fa;
          border-radius: 20px;
          margin-bottom: 22px;
        }
        p {
          line-height: 22px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
      .dymamic-box-item-left {
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
        }
      }
      .dymamic-box-right {
        width: 460px;
      }
    }
    .our-dymamic-letter {
      width: 1218px;
      height: 176px;
      position: relative;
      top: -74px;
      z-index: -10;
    }
    .our-dymamic-icon {
      width: 24px;
      height: 25px;
      display: block;
      position: absolute;
      bottom: 27px;
      left: 111px;
    }
    .round-purple-icon {
      position: absolute;
      right: 50px;
      top: 255px;
      z-index: -1;
    }
    .see-more {
      position: absolute;
      bottom: 90px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .title {
    display: inline-block;
    position: relative;
    text-align: center;
    margin-bottom: 78px;
    p {
      font-size: 16px;
      color: #966dff;
      margin-bottom: 19;
    }
    h2 {
      color: #7139ff;
      font-size: 30px;
      font-weight: 800;
    }
    img {
      position: absolute;
      top: 7px;
      left: -15px;
      z-index: -1;
    }
  }
  .follow-us {
    width: 100%;
    height: 230px;
    background: #7139ff;
    .follow-us-adaptation {
      width: 1235px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      .contact-details {
        p {
          color: #f0eaff;
          font-size: 16px;
          margin-top: 60px;
          margin-bottom: 30px;
        }
        img {
          width: 43px;
          height: 44px;
          margin-right: 25px;
          cursor: pointer;
          position: relative;
          left: -10px;
        }
      }
      .principal {
        flex: 1;
        .principal-box {
          display: flex;
          margin-top: 29px;
          .principal-item {
            display: flex;
            align-items: center;
            margin-right: 60px;
            .avatar {
              width: 110px;
              height: 110px;
            }
            .principal-information {
              padding-left: 21px;
              h4 {
                color: #ffffff;
                font-size: 18px;
                margin-bottom: 28px;
                font-weight: 800;
              }
              p {
                color: #f0eaff;
                font-size: 16px;
                line-height: 24px;
              }
            }
          }
        }
        .understand-more {
          color: #ff7054;
          position: relative;
          bottom: -20px;
          float: right;
          cursor: pointer;
          &::after {
            content: "";
            width: 28px;
            height: 3px;
            background: #ff7054;
            opacity: 0.7;
            border-radius: 2px;
            position: absolute;
            bottom: -5px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
  }
  @keyframes iconMove {
    from {
      transform: translateY(10px);
    }
    to {
      transform: translateY(0px);
    }
  }
}
</style>
