<template>
  <div class="appHome">
    
    <!-- header-contianer -->
    <div class="header-contianer">
      <div class="header-adaptation">
        <div class="header-title-box">
          <div class="red-icon"></div>
          <div class="header-title">
            {{ $t("The core engine of the new world") }}
            <div class="header-titleBack">
              <img src="../../assets/images/home/homeHeaderTitle.png" alt />
            </div>
          </div>
        </div>
        <div class="header-certificate">
          <div
            @click="whitePaper"
            style="margin-right:0.47rem;"
            class="header-certificate-item"
          >{{ $t("White paper") }}</div>
          <div
            @click="bluePaper"
            style="margin-left:0.47rem;"
            class="header-certificate-item"
          >{{ $t("Blue paper") }}</div>
        </div>
      </div>
    </div>
    <!-- think-data-contianer -->
    <div class="think-data-contianer">
      <div class="think-data-top">
        <h2 class="think-data-top-title">{{ $t("TINK New World") }}</h2>
        <div class="think-data-top-pop-icon"></div>
        <p class="think-data-top-content">
          {{
          $t(
          "To build and contribute to the world a blockchain engine that helps to drive the world forward in an open, equitable directions based on trust, consensus, and collaboration."
          )
          }}
        </p>
        <p class="think-data-top-content">
          {{
          $t(
          "The engine is infinitely scalable, truly decentralized, comprehensively secure and trustworthy, it's also able to support massive DAPPs and users, and provides a convenient, friendly, efficient and secure deployment environment.It enables and synergizes the decentralized business of the new world to be easily built and connected through blockchain, fulfilling our mission of 'Empowering the World with Trust'."
          )
          }}
        </p>
        <div class="chain-data">
          <div style="display:block" class="chain-data-icon">
            <img src="../../assets/images/home/chainDataIcon.png" />
            <p>{{ $t("Chains data") }}</p>
          </div>
          <div class="chain-data-content">
            <div class="chain-data-item">
              <!-- <span>15,697,786</span> -->
               <span>{{ transferData.blockHeight }}</span>
              <p>{{ $t("Main chain block height") }}</p>
            </div>
            <div class="chain-data-item">
              <!-- <span>13,568,768</span> -->
              <span>{{ transferData.txNum }}</span>
              <p>{{ $t("Tx") }}</p>
            </div>
          </div>
        </div>
        <div class="think-data-top-chain-structure">
          <div class="chain-structure">
            <img src="../../assets/images/home/chainStructure.png" />
            <p>{{ $t("Chain structure") }}</p>
          </div>
          <div class="chain-structure-data">
            <div>
              <span>
                {{
                  chainData.businessChain &&
                  chainData.businessChain.num + chainData.mainChain.num
                }}</span>
              <p>{{ $t("Number of chains") }}</p>
            </div>
            <div>
              <span>{{ chainData.oreBasins && chainData.oreBasins.num }}</span>
              <p>{{ $t("Mining pools") }}</p>
            </div>
            <div>
               <span> {{ chainData.dataNode && chainData.dataNode.num }}</span>
              <p>{{ $t("Number of Nodes") }}</p>
            </div>
            <div>
               <span>
                {{
                  chainData.independentConsensusNode &&
                  chainData.independentConsensusNode.num
                }}</span>
              <p>{{ $t("Consensus node") }}</p>
            </div>
          </div>
        </div>
        <div class="think-data-bottom">
          <p>{{ $t("Welcome to TINK, the digital gateway to the new world.") }}</p>
          <div class="go-detail" @click="seeDetailData">
            <!-- @click="seeDetailData" -->
            <span>{{ $t("More") }}</span>
            <img src="../../assets/images/home/rightPointer.png" />
          </div>
          <img class="think-data-icon-left" src="../../assets/images/home/searchIconLeft.png" />
          <img
            class="think-data-icon-right animate__fadeInUp animate__infinite"
            src="../../assets/images/home/searchIcon.png"
          />
        </div>
      </div>
    </div>
    <!-- our-technology -->
    <div class="our-technology">
      <div class="our-technology-left">
        <h2>
          {{ $t("Our Technology") }}
          <img
            class="our-technology-left-topImg"
            src="../../assets/images/roundOrangeLittle.png"
          />
        </h2>

        <Button
          @click="understandSillMore"
          :style="{ margin: '0.98rem 0 0.29px 0'}"
          style="width:1.96rem;height:0.52rem;line-height:0.52rem;text-algin:center;font-size:0.2rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;"
        >{{$t("Learn more")}}</Button>
        <div style="margin-top:0.29rem;">
          <img class="our-technology-left-bottomImg" src="../../assets/images/home/skillIcon.png" />
        </div>
      </div>
      <div class="our-technology-continaer">
        <img src="../../assets/images/home/skillIconRound.png" class="decoration-icon" />
        <div class="our-technology-right">
          <div class="our-technology-item" v-for="item in skillList" :key="item.name">
            <img :src="item.imgUrl" />
            <p>{{ $t(item.name) }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="economic-module">
      <div style="text-align: center">
        <div class="title">
          <!-- <p>public-chain</p> -->
          <h2>
            {{ $t("Economic Model") }}
            <img
                class="our-ecology-topImg"
                src="../../assets/images/roundOrangeLittle.png"
            />
          </h2>
        </div>
      </div>

      <img style="width: 5.85rem; margin: .48rem auto .76rem;display: block"
          src="../../assets/images/home/tkm-loop.png"/>

      <ul class="loop-examples">
        <li>
          <i style="background: #9D79FB"/>
          PoS mining
        </li>
        <li>
          <i style="background: #65EAFA"/>
          Ecological Development Fund
        </li>
        <li>
          <i style="background: #7A9BFB"/>
          Early investors
        </li>
        <li>
          <i style="background: #FD7AFB"/>
          Founding team
        </li>
      </ul>

      <!--<div class="swiper-container">
        <div class="swiper-wrapper">
          <div
              class="our-skill-item swiper-slide"
              v-for="(item, index) in economicModuleList"
              :key="index"
          >
              <div class="top" :style="{color: item.color, borderColor: item.color,}">
                <span class="ratio">{{item.ratio}}</span>
                <span class="_title" >{{item.title}}</span>
              </div>
              <ul class="des-list">
                <li v-for="item1 in item.desList">
                  <div class="_title">
                    <i :style="{background: item.color}"/>
                    {{item1.title}}
                  </div>
                  <div class="content">
                    {{item1.content}}
                  </div>
                </li>
              </ul>
          </div>
        </div>

      </div>-->

    </div>
    <!-- our-ecology -->
    <div class="our-ecology">
      <div style="text-align: center">
        <div class="title">
          <!-- <p>public-chain</p> -->
          <h2>
            {{ $t("Our Ecology") }}
            <img
              class="our-ecology-topImg"
              src="../../assets/images/roundOrangeLittle.png"
            />
          </h2>
        </div>
      </div>
      <div class="our-ecology-box">
        <div class="our-ecology-top">
          <p class="our-ecology-top-text" style="padding-top:0.4rem;">
            {{
            $t(
            "We are committed to make the world more open and connected, in the hope of building a blockchain infrastructure for the global community."
            )
            }}
          </p>
          <p class="our-ecology-top-text">
            {{
            $t(
            "We hope that more community leaders, industry experts and influential leaders can join us."
            )
            }}
          </p>
        </div>
        <div class="our-ecology-bottom">
          <div class="our-ecology-title">
            <img src="../../assets/images/home/community.png" />
            <span>{{ $t("Global Community") }}</span>
          </div>
          <div class="our-ecology-community">
            <p class="our-ecology-community-text">
              {{
              $t("Join a global network of passionate advocates by becoming an TINK Ambassador!")
              }}
            </p>
            <p class="our-ecology-community-text">
              {{
              $t(
              "You'll take an active role in shaping the network while growing your own profile and community in the blockchain world, all through educating others on the opportunities made possible by TINK."
              )
              }}
            </p>
            <!-- contianerClass="wow fadeInUp"
            @click="openPopup"-->
            <Button
              @click="openPopup"
              :style="{
                position: 'absolute',
                right: '0.28rem',
                bottom: '-0.26rem',
              }"
              style="width:1.71rem;height:0.51rem;line-height:0.51rem;text-algin:center;font-size:0.2rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;"
            >{{$t("Join us")}}</Button>
          </div>
          <div style="margin-top:0.75rem" class="our-ecology-title">
            <img src="../../assets/images/home/devploderEcology.png" />
            <span>{{ $t("Developer ecology") }}</span>
          </div>
          <div class="our-devploader">
            <div class="our-ecology-developer-active">
              <p class="our-ecology-developer-active-title">{{ $t("Active community") }}</p>
              <div class="our-ecology-developer-active-text">
                <div>
                  <span>{{ $t("30+ cities") }}</span>
                  <span>{{ $t("10+ countries") }}</span>
                  <span>{{ $t("10+ communities") }}</span>
                </div>
                <div>
                  <span>{{ $t("30+ community leaders") }}</span>
                </div>
                <div>
                  <span>{{ $t("10+ global technical experts") }}</span>
                </div>
              </div>

              <Button
                @click="becomeDevploder"
                :style="{
                position: 'absolute',
                right: '-0.37rem',
                top: '-0.26rem',
              }"
                style="width:2.22rem;height:0.51rem;line-height:0.51rem;text-algin:center;font-size:0.2rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;"
              >{{$t("Become developers ")}}</Button>
            </div>
            <div class="our-ecology-developer-ecology">
              <p class="our-ecology-developer-ecology-title">{{ $t("Rich ecology") }}</p>
              <div class="our-ecology-developer-ecology-text">
                <div>
                  <span>{{ $t("50,000+User Addresses") }}</span>
                  <span>{{ $t("10+dApps") }}</span>
                </div>
                <div>
                  <span>{{ $t("80,000+Community Members") }}</span>
                </div>
              </div>
            </div>
            <div class="our-ecology-developer-resource">
              <p class="our-ecology-developer-resource-title">{{ $t("Rich ecology") }}</p>
              <div class="our-ecology-developer-resource-text">
                <div>
                  <span>{{ $t("Python") }}</span>
                  <span>{{ $t("Java") }}</span>
                  <span>{{ $t("JavaScript") }}</span>
                  <span>{{ $t("Go") }}</span>
                  <span>{{ $t("30+Technical Contributors") }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- our-product -->
    <div class="our-product">
      <div class="product-adaptation">
        <img class="our-product-bg" src="../../assets/images/home/productLetter.png" />
        <img class="our-product-icon" src="../../assets/images/home/productIcon.png" />
        <div class="title">
          <!-- <p>public-chain</p> -->
          <h2>
            {{ $t("Our products") }}
            <img
              class="our-product-topImg"
              src="../../assets/images/roundOrangeLittle.png"
            />
          </h2>
        </div>
        <div class="phone-model-box">
          <img class="phone-model" src="../../assets/images/home/phoneModelEn.png" />
          <img class="pruduct-img-1" src="../../assets/images/home/product1En.png" />
          <img class="pruduct-img-2" src="../../assets/images/home/product2En.png" />
          <img class="pruduct-img-3" src="../../assets/images/home/product3En.png" />
          <!-- <img class="pruduct-icon" src="../../assets/images/home/skillIcon.png" /> -->
        </div>
      </div>
      <div class="product-version-box">
        <div class="product-version">
          <Button
            @mouseleave="iosQRCodeAnimate = false"
            @mouseover="iosQRCodeAnimate = true"
            style="padding:0.13rem 0.31rem;width:1.54rem;height:0.43rem;font-size:0.2rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;display: flex;align-items: center;justify-content: center;"
          >
            <div class="button-content-ios">
              <img
                style="width:0.17rem;height:0.17rem;"
                src="../../assets/images/home/QRcodeIcon.png"
              />

              <div>IOS</div>
              <div>
                <img src="../../assets/images/home/ios.png" class="QRCode" />
              </div>
              <!-- :class="fadeInOrOutIOS" -->
              <!-- v-if="iosQRCodeAnimate" -->
            </div>
          </Button>
          <Button
            @mouseleave="androidQRCodeAnimate = false"
            @mouseover="androidQRCodeAnimate = true"
            style="padding:0.13rem 0.31rem;width:1.54rem;height:0.43rem;font-size:0.2rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;line-height:0.41rem;display: flex;align-items: center;justify-content: center;"
          >
            <!-- :style="{ padding: '0.13rem 0.32rem',height: '0.43rem', width: '1.54rem' }" -->
            <div class="button-content-android">
              <img
                style="width:0.17rem;height:0.17rem;"
                src="../../assets/images/home/QRcodeIcon.png"
              />
              <div>Android</div>
              <div>
                <img src="../../assets/images/home/android.png" class="QRCode" />
              </div>

              <!-- :class="fadeInOrOutAndroid" -->
              <!-- v-if="androidQRCodeAnimate" -->
              <!-- :class="fadeInOrOutAndroid" -->
            </div>
          </Button>
        </div>
      </div>
    </div>
    <!-- our-news -->
    <!-- <div class="our-news">
      <div class="title">
        <h2>
          {{ $t("Our news") }}
          <img
            class="our-news-topImg"
            src="../../assets/images/roundOrangeLittle.png"
          />
        </h2>
      </div>
      <div class="our-news-box">
        <div
          class="our-news-box-item"
          v-for="(item, index) in newsList.slice(2, 5)"
          :key="index"
          @click="goNewDeail(item.id)"
        >
          <div class="news-time">
            <img style="width:0.27rem;height:0.27rem;" src="../../assets/images/home/newsIcon.png" />
            <span>{{ item.updateTime | formatDate }}</span>
          </div>
          <div class="news-title">{{ item.desc }}</div>
        </div>
      </div>
      <div style="display: flex;justify-content: center;align-items: center;">
        <Button
          @click="goNews"
          :style="{ margin: '0.98rem 0 0.29px 0'}"
          style="width:2.24rem;height:0.51rem;line-height:0.51rem;text-algin:center;font-size:0.2rem;font-family: PingFang SC;font-weight: bold;color: #FFFFFF;"
        >{{$t("Learn more")}}</Button>
      </div>
    </div> -->
    <!-- follow-us -->
    <div class="follow-us">
      <div class="follow-us-adaptation">
        <div class="principal">
          <div class="principal-box">
            <div class="principal-item">
              <img class="avatar" src="../../assets/images/home/people1.png" />
              <div class="principal-information">
                <h4>Milen</h4>
                <p>{{ $t("Head of TINK Foundation") }}</p>
              </div>
            </div>
            <div class="principal-item">
              <img class="avatar" src="../../assets/images/home/people2.png" />
              <div class="principal-information">
                <h4>David Dapeng Li, Ph.D.</h4>
                <p>{{ $t("Head of decentralized Finance") }}</p>
              </div>
            </div>
            <div class="principal-item">
              <img class="avatar" src="../../assets/images/home/people3.png" />
              <div class="principal-information">
                <h4>Assoc Prof Joseph Liu</h4>
                <p>{{ $t("Chief scientist") }}</p>
              </div>
            </div>
          </div>
          <span @click="$router.push('/contributor')" class="understand-more">{{ $t("Learn more") }}</span>
        </div>
      </div>
    </div>
    <Popup ref="Popup"/>
    <!-- <isShowImg  ref="isShowImg"/> -->
    <el-dialog
  title=""
  :visible.sync="dialogVisible"
  width="70%"
  center
  >
  <!-- :before-close="handleClose" -->
  <div style=" display: flex;justify-content: center;align-items: center;">
  <img :style="imgStyles" src="@/assets/images/home/popup.jpg" alt="">
  </div>
  <!-- <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">cancel</el-button>
    <el-button type="primary" @click="dialogVisible = false">confirm</el-button>
  </span> -->
</el-dialog>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Popup from "@/components/Popup";
import isShowImg from "@/components/isShowImg";
import { Dialog } from 'element-ui'
import { skillList } from "@/utils/data";
import Swiper from "swiper/bundle";
import { getchainDetail, getTransferDetail } from "@/api/borwser";
import { getNewsList } from "@/api";
import AnimationMixn from "@/mixin/initAnimation.js";
import _ from "lodash";
require("swiper/swiper-bundle.css");
export default {
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
        txNum: ""
      },
      newsList: [],
      total: 0,
      imgStyles:{},
       dialogVisible: false,

      economicModuleList: [
        {
          color: '#8D61FF',
          ratio: '50%',
          title: 'PoS mining',
          desList: [
            {title: 'INCENTIVE REASONS', content: 'Operation nodes participate in network construction'},
            {title: 'RULES', content: 'Reward according to PoS mining algorithm'},

          ]
        },
        {
          color: '#65EAFA',
          ratio: '30%',
          title: 'Ecological Development Fund',
          desList: [
            {title: 'INCENTIVE REASONS', content: 'Foundation operation, ecological construction support and community construction support'},
            {title: 'RULES', content: 'Reward according to the contribution of the sharer'},

          ]
        },
        {
          color: '#7A9BFB',
          ratio: '10%',
          title: 'Early investors',
          desList: [
            {title: 'INCENTIVE REASONS', content: 'Invest capital and resources to promote ecological development'},
            {title: 'RULES', content: 'Ecological prosperity reaches a certain proportion'},

          ]
        },
        {
          color: '#FD7AFB',
          ratio: '10%',
          title: 'Founding team',
          desList: [
            {title: 'IINCENTIVE REASONS', content: 'Technology development, operation and maintenance, upgrading'},
            {title: 'RULES', content: ' Ecological prosperity reaches a certain proportion'},

          ]
        },
      ],
    };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
      localStorage.setItem("lang", val);
    }
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
    }
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
        width:'460px',
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
    understandSillMore() {
      console.log("jishu");
    },
    initSwiper() {
      return;
      new Swiper(".swiper-container", {
        autoplay: true, //可选选项，自动滑动
        slidesPerView: "auto",
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
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
        newsType: ""
      };
      const { data } = await getNewsList(params);
      data.data.forEach(v => {
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
      window.open("http://browser-pro.TINK.io/");
    },
    understandSillMore() {
      this.$router.push("/appTechnology");
    },
    openPopup() {
      this.$refs.Popup.open();
    },
    becomeDevploder() {
      this.$router.push("/appDeveloper");
    },
    goTwitter() {
      window.open("https://twitter.com/TINK2");
    },
    goFaceBook() {
      window.open("https://www.facebook.com/kium.thin.3/");
    },
    goNews() {
      this.$router.push("/appNews");
    },
    goNewDeail(id) {
      this.$router.push(`/appNewsDetail?id=${id}`);
    }
  }
};
</script>
<style lang="scss">
  .el-message-box{
    width: 70%;
  }
  .el-dialog__wrapper{
    top: -1.2rem;
  }
</style>
<style scoped lang="scss">
.appHome {
  width: 100%;
  height: 100%;
  .header-contianer {
    width: 100%;
    height: 5.97rem;
    background: url("../../assets/images/apphome/appHomeBackgroud.png")
      no-repeat center center;
    background-size: cover;
    .header-adaptation {
      width: 6.4rem;
      background: #dddddd;
      margin: 0 auto;
      .header-title-box {
        position: absolute;
        top: 1.83rem;
        left: 0.45rem;
        .red-icon {
          width: 0.48rem;
          height: 0.09rem;
          border-radius: 5px;
          opacity: 0.54;
          background: #ff7054;
          margin-bottom: 0.2rem;
        }
        .header-title {
          font-size: 0.27rem;
          font-family: PingFang SC;
          font-weight: 800;
          color: #ffffff;
          color: #fff;

          .header-titleBack {
            margin-top: -0.26rem;
            margin-left: -0.56rem;
            //   width: 2.18rem;
            height: 0.71rem;
            img {
              height: 100%;
            }
          }
        }
      }
      .header-certificate {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 3.29rem;
        // padding: 0 1.13rem;
        padding-left: 1.13rem;
        margin: 0 auto;
        margin-top: 0.45rem;
        .header-certificate-item {
          width: 1.66rem;
          height: 0.62rem;
          background: #f8f5ff;
          border-radius: 10px;
          opacity: 0.9;
          color: #7139ff;
          text-align: center;
          line-height: 0.62rem;
          font-size: 0.2rem;
          cursor: pointer;
        }
      }
    }
  }
  .think-data-contianer {
    width: 5.89rem;
    height: 11.34rem;
    background: #fff;
    box-shadow: 0px 13px 22px 0px rgba(117, 117, 117, 0.08);
    border-radius: 10px;
    margin: 0 auto;
    margin-top: -1.15rem;
    .think-data-top {
      //   display: flex;
      padding-bottom: 0.2rem;
      padding-left: 0.2rem;
      .think-data-top-title {
        font-size: 0.26rem;
        font-family: PingFang SC;
        font-weight: 800;
        color: #000000;
        padding-top: 0.39rem;
        padding-bottom: 0.13rem;
      }
      .think-data-top-pop-icon {
        width: 0.3rem;
        height: 0.04rem;
        background: #9369f9;
        border-radius: 2px;
        margin-bottom: 0.4rem;
      }
      .think-data-top-content {
        width: 5.5rem;
        line-height: 0.26rem;
        font-size: 0.2rem;
        font-family: PingFang SC;
        font-weight: 400;
        color: #585858;
        padding-bottom: 0.32rem;
      }
      .chain-data {
        width: 4.47rem;
        height: 2.05rem;
        background: #f8f7fc;
        box-shadow: 7px 10px 13px 0px rgba(15, 4, 64, 0.08);
        border-radius: 10px;
        margin-left: -0.39rem;
        margin-top: 0.05rem;
        padding-top: 0.17rem;
        .chain-data-icon {
          text-align: center;
          margin-bottom: 0.13rem;
          img {
            width: 0.59rem;
            height: 0.43rem;
          }
          p {
            text-align: center;
            color: #ff7054;
            font-weight: bold;
            font-size: 0.26rem;
          }
        }
        .chain-data-content {
          display: flex;
          justify-content: space-around;
          .chain-data-item {
            // flex: 1;

            text-align: center;
            span {
              font-size: 0.22rem;
              font-weight: 800;
              color: #000000;
            }
            p {
              font-family: PingFang SC;
              font-weight: 400;
              color: #606060;
              margin-top: 0.12rem;
            }
          }
        }
      }
      .think-data-top-chain-structure {
        width: 4.5rem;
        padding-top: 0.27rem;
        margin-top: 0.34rem;
        margin-left: 1.3rem;
        margin-right: -0.1rem;
        margin-bottom: 0.44rem;
        background: #f8f7fc;
        box-shadow: 7px 10px 13px 0px rgba(15, 4, 64, 0.08);
        border-radius: 10px;
        .chain-structure {
          text-align: center;
          img {
            width: 0.61rem;
            height: 0.51rem;
          }
          p {
            text-align: center;
            color: #7139ff;
            font-weight: bold;
            font-size: 0.26rem;
            line-height: 0.26rem;
            margin-top: 0.13rem;
            margin-bottom: 0.42rem;
          }
        }
        .chain-structure-data {
          display: flex;
          flex-wrap: wrap;
          div {
            width: 50%;
            text-align: center;
            span {
              font-size: 0.26rem;
              line-height: 0.26rem;
              font-family: PingFang SC;
              font-weight: 800;
              color: #000000;
            }
            p {
              font-size: 0.2rem;
              line-height: 0.2rem;
              font-family: PingFang SC;
              font-weight: 400;
              color: #606060;
              margin-bottom: 0.29rem;
            }
          }
        }
      }
      .think-data-bottom {
        position: relative;
        width: 5.22rem;
        height: 0.85rem;
        // margin: 0 auto;
        margin-left: 0.16rem;
        background: #f8f7fc;
        box-shadow: 7px 10px 13px 0px rgba(15, 4, 64, 0.08);
        border-radius: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 0.22rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: #3a3a3a;
          padding-left: 0.29rem;
        }
        .go-detail {
          display: flex;
          justify-content: center;
          height: 0.26rem;
          align-items: center;
          cursor: pointer;
          span {
            font-size: 0.2rem;
            line-height: 0.16rem;
            font-family: PingFang SC;
            font-weight: bold;
            color: #7139ff;
            margin-right: 0.12rem;
          }
          img {
            width: 0.26rem;
            height: 0.14rem;
            margin-top: 0.06rem;
            margin-right: 0.12rem;
          }
        }
        .think-data-icon-left {
          width: 0.63rem;
          height: 0.64rem;
          position: absolute;
          left: -0.47rem;
          bottom: -0.35rem;
          animation: iconMove 2s infinite alternate;
        }
        .think-data-icon-right {
          width: 0.6rem;
          height: 0.61rem;
          position: absolute;
          right: -0.34rem;
          top: -0.35rem;
          animation: iconMove 2s infinite alternate;
        }
      }
    }
  }
  .our-technology {
    width: 5.89rem;
    // height: 4.83rem;
    background: #ffffff;
    // box-shadow: 0 0 26px 0 rgba(58, 33, 121, 0.08);
    margin: 0 auto;
    margin-top: 1.56rem;
    display: flex;
    justify-content: space-between;
    .our-technology-left {
      margin-top: 0.48rem;
      h2 {
        position: relative;
        z-index: 100;
        font-size: 0.29rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: #7139ff;
        .our-technology-left-topImg {
          position: absolute;
          z-index: -1;
          top: -0.14rem;
          left: 0.36rem;
          width: 0.34rem;
          height: 0.34rem;
        }
      }
      .our-technology-left-bottomImg {
        width: 0.2rem;
        height: 0.21rem;
      }
    }
    .our-technology-continaer {
      flex: 1;
      position: relative;
      .decoration-icon {
        width: 0.49rem;
        height: 0.49rem;
        position: absolute;
        z-index: -2;
        // top: -0.13rem;
        bottom: 4.65rem;
        left: 2.63rem;
        right: 0.13rem;
      }
      .our-technology-right {
        z-index: 20;
        width: 3.25rem;
        // height: 4.83rem;
        background: #fff;
        box-shadow: 0 0 26px 0 rgba(58, 33, 121, 0.08);
        border-radius: 8px;
        .our-technology-item {
          // height: 0.41rem;
          padding-top: 0.3rem;
          padding-bottom: 0.3rem;
          display: flex;
          align-items: center;

          img {
            width: 0.3rem;
            height: 0.34rem;
            margin-left: 0.2rem;
            margin-right: 0.26rem;
          }
          p {
            font-size: 0.2rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: #7139ff;
          }
        }
      }
    }
  }
  .economic-module{
    margin: 1.58rem 0 0;
    .title {
      background: #ffffff;
      opacity: 0.8;
      padding-bottom: 0.52rem;
      h2 {
        display: inline-block;
        // width: 1.74rem;
        position: relative;
        z-index: 100;
        font-size: 0.29rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: #7139ff;
        .our-ecology-topImg {
          position: absolute;
          z-index: -1;
          top: 0;
          left: 50%;
          width: 0.34rem;
          height: 0.34rem;
          transform: translate(-50%, -28%);
        }
      }
    }

    .loop-examples{
      display: flex;
      flex-wrap: wrap;
      margin-left: .36rem;
      >li{
        &:nth-child(2n + 1){
          width: 2.07rem;
        }
        color: #23282F;
        font-weight: Bold;
        font-size: .22rem;
        display: flex;
        align-items: center;
        margin-top: .25rem;
        >i{
          margin-right: .16rem;
          display: inline-block;
          width: .1rem;
          height: .1rem;
          border-radius: 50%;
          background: #9D79FB;
        }
      }

    }

    .swiper-container{
      margin-top: .56rem;
      .swiper-slide{
        height: 4.18rem;
        width: 4.46rem;
        border-radius: .17rem;
        box-shadow: .07rem .1rem .13rem 0 rgba(15, 4, 64, 0.08);
        margin: .2rem;
        background: #F8F7FC;
        padding: .25rem .35rem 0;
        .top{
          border-bottom: 1px solid black;
          display: flex;
          align-items: center;
          height:  .64rem;
          .ratio{
            font-size: .31rem;
            font-weight: bold;
            margin-right: .2rem;
          }
          ._title{
            font-size: .24rem;
          }

        }
        .des-list{
          padding-top: .10rem;
          ._title{
            display: flex;
            align-items: center;
            font-weight: 400;
            color: #545C66;
            font-size: .2rem;
            margin-top: .38rem;
            line-height: .16rem;
            >i{
              height: .07rem;
              width: .07rem;
              border-radius: 50%;
              margin-right: .09rem;
            }
          }
          .content{
            color: #23282F;
            font-size: .22rem;
            line-height: .31rem;
            margin-top: .21rem;
          }
        }
      }

    }
  }
  .our-ecology {
    width: 5.89rem;
    margin: 0 auto;
    margin-top: 1.22rem;

    .title {
      background: #ffffff;
      opacity: 0.8;
      padding-bottom: 0.52rem;
      h2 {
        display: inline-block;
        // width: 1.74rem;
        position: relative;
        z-index: 100;
        font-size: 0.29rem;
        font-family: PingFang SC;
        font-weight: bold;
        color: #7139ff;
        .our-ecology-topImg {
          position: absolute;
          z-index: -1;
          top: -0.02rem;
          right: -0.09rem;
          width: 0.34rem;
          height: 0.34rem;
        }
      }
    }
    .our-ecology-box {
      background: #ffffff;
       box-shadow: 0 0 26px 0 rgba(58, 33, 121, 0.08);
      .our-ecology-top {
        width: 5.89rem;
        height: 2.86rem;
        background: #7139ff
          url("../../assets/images/apphome/ecologyBackground.png") no-repeat
          center bottom;
        // background-image: url(../../assets/images/apphome/ecologyBackground.png);
        // background-repeat: no-repeat;
        // background-position: center;
        background-size: cover;
        color: white;
        font-size: 0.2rem;
        font-weight: 500;
        .our-ecology-top-text {
          padding-left: 0.19rem;
          padding-right: 0.2rem;
          font-size: 0.2rem;
          font-family: PingFang SC;
          font-weight: 400;
          color: #ffffff;
          padding-bottom: 0.3rem;
        }
      }
      .our-ecology-bottom {
        background: #ffffff;
        width: 5.89rem;
        margin: 0 auto;
        .our-ecology-title {
          display: flex;
          align-items: center;
          margin-left: 0.21rem;
          margin-top: 0.38rem;
          img {
            width: 0.73rem;
            height: 0.68rem;
            margin-right: 0.15rem;
          }
          span {
            font-size: 0.26rem;
            font-family: PingFang SC;
            font-weight: 800;
            color: #424242;
          }
        }
        .our-ecology-community {
          width: 4.44rem;
          margin-left: 1.13rem;
          margin-top: 0.09rem;
          background: #f5f3fb;
          border-top-right-radius: 100px;
          border-bottom-right-radius: 100px;
          border-bottom-left-radius: 60px;
          padding: 0.2rem;
          position: relative;
          padding-left: 0.33rem;
          p {
            font-size: 0.2rem;
            font-family: PingFang SC;
            font-weight: 400;
            color: #7139ff;
            line-height: 0.26rem;
            position: relative;
            &::before {
              content: "";
              width: 0.07rem;
              height: 0.07rem;
              background: #b1a3f9;
              opacity: 0.8;
              border-radius: 50%;
              display: inline-block;
              position: relative;
              bottom: 0.04rem;
              right: 0.08rem;
            }
          }
          p:first-child {
            width: 3.46rem;
            margin-bottom: 0.25rem;
          }
          p:last-child {
            width: 3.72rem;
            // margin-left: 41px;
          }
        }
        .our-devploader {
          width: 5.44rem;
          margin: 0 auto;
          padding-bottom: 0.42rem;

          .our-ecology-developer-active,
          .our-ecology-developer-ecology,
          .our-ecology-developer-resource {
            position: relative;
            width: 5.44rem;
            height: 1.83rem;
            // margin-left: 0.21rem;
            margin-top: 0.31rem;
            padding-top: 0.12rem;
            padding-left: 0.73rem;
            background: #f5f3fb;
            box-shadow: 0px 13px 22px 0px rgba(58, 33, 121, 0.08);
            border-top-left-radius: 120px;
            border-bottom-left-radius: 120px;
            border-bottom-right-radius: 100px;
            .our-ecology-developer-active-title,
            .our-ecology-developer-ecology-title,
            .our-ecology-developer-resource-title {
              font-size: 0.22rem;
              font-weight: bold;
              font-family: PingFang SC;
              color: #7139ff;
              line-height: 0.41rem;
              position: relative;
              // padding-bottom: 0.2rem;

              &::before {
                content: "";
                width: 0.07rem;
                height: 0.07rem;
                background: #b1a3f9;
                opacity: 0.8;
                border-radius: 50%;
                display: inline-block;
                position: relative;
                bottom: 0.04rem;
                right: 0.08rem;
              }
            }
            .our-ecology-developer-active-text,
            .our-ecology-developer-ecology-text,
            .our-ecology-developer-resource-text {
              div {
                span {
                  display: inline-block;
                  margin: 0.06rem 0.16rem;
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
          .our-ecology-developer-ecology,
          .our-ecology-developer-resource {
            height: 1.53rem;
          }
        }
      }
    }
  }
  .our-product {
    // width: 6.4rem;
    width: 100%;
    height: 2.56rem;
    margin-top: 1rem;
    position: relative;
    background-image: url(../../assets/images/home/productBackground.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 118% 110%;
    // background: url("../../assets/images/home/productBackground.png") no-repeat
    //   center center;
    .product-adaptation {
      position: relative;
      width: 100%;
      margin: 0 auto;
      // background: red;
      // height: 200px;
      .our-product-bg {
        width: 100%;
        height: 0.64rem;
        margin: 0 auto;
        position: absolute;
        z-index: -10;
        top: -0.5rem;
        left: 50%;
        transform: translateX(-50%);
      }

      .our-product-icon {
        width: 0.55rem;
        height: 0.49rem;
        margin-top: 0.65rem;
        margin-left: 0.26rem;
      }
      .title {
        position: absolute;
        left: 2.28rem;
        top: 0.51rem;
        h2 {
          display: inline-block;
          position: relative;
          z-index: 100;
          font-size: 0.29rem;
          font-family: PingFang SC;
          font-weight: bold;
          text-align: center;
          color: #ffffff;
          line-height: 41px;
          .our-product-topImg {
            position: absolute;
            z-index: -1;
            bottom: 0.27rem;
            right: -0.17rem;
            width: 0.34rem;
            height: 0.34rem;
          }
        }
      }

      .phone-model-box {
        position: absolute;
        top: 1.04rem;
        left: 1.46rem;
        .phone-model {
          width: 3.05rem;
          height: 4.91rem;
          position: relative;
          z-index: 2;
        }
        .pruduct-img-1 {
          width: 2.16rem;
          height: 2.07rem;
          position: absolute;
          top: 0.14rem;
          left: -1.06rem;
          z-index: 1;
        }
        .pruduct-img-2 {
          width: 2.54rem;
          height: 1.59rem;
          position: absolute;
          top: 1.5rem;
          right: -1.86rem;
          z-index: 1;
        }
        .pruduct-img-3 {
          width: 2.55rem;
          height: 1.38rem;
          position: absolute;
          top: 2.8rem;
          left: -1.17rem;
          z-index: 1;
        }
        .pruduct-icon {
          widows: 24px;
          height: 25px;
          position: absolute;
          top: 316px;
          right: -625px;
          z-index: 1;
          animation: iconMove 2s infinite alternate;
        }
      }
    }
    .product-version-box {
      position: absolute;
      top: 5.72rem;
      left: 0.9rem;
      right: 0.9rem;
      .product-version {
        display: flex;
        justify-content: space-between;
        .button-content-ios,
        .button-content-android {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          img {
            margin-right: 0.1rem;
          }
          &::after {
            content: "";
            width: 0.04rem;
            height: 0.04rem;
            background: #f2e5ff;
            border-radius: 50%;
            position: absolute;
            right: -0.32rem;
            top: 50%;
          }
          &::before {
            content: "";
            width: 0.04rem;
            height: 0.04rem;
            background: #f2e5ff;
            border-radius: 50%;
            position: absolute;
            left: -0.32rem;
            top: 50%;
          }
          .QRCode {
            width: 1.48rem;
            height: 1.48rem;
            position: absolute;
            top: 0.56rem;
            left: -0.43rem;
            // bottom: -140px;
          }
        }
        .button-content-android {
          &::after {
            right: -0.1rem;
          }
          &::before {
            left: -0.1rem;
          }
          .QRCode {
            top: 0.68rem;
            left: -0.2rem;
            // bottom: -140px;
          }
        }
      }
    }
  }
  // .our-news {
  //   width: 100%;
  //   margin: 0 auto;
  //   // height: 2.56rem;
  //   margin-top: 6.58rem;
  //   margin-bottom: 0.6rem;
  //   // top: 6.18rem;
  //   // position:relative;
  //   .title {
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     margin-bottom: 0.6rem;
  //     // position: absolute;
  //     // left: 2.52rem;
  //     // top: 0.51rem;
  //     h2 {
  //       display: inline-block;
  //       position: relative;
  //       z-index: 100;
  //       font-size: 0.29rem;
  //       font-family: PingFang SC;
  //       font-weight: bold;
  //       text-align: center;
  //       color: #7139ff;
  //       // line-height:0.41rem;
  //       .our-news-topImg {
  //         position: absolute;
  //         z-index: -1;
  //         top: -0.09rem;
  //         left: 0.12rem;
  //         width: 0.34rem;
  //         height: 0.34rem;
  //       }
  //     }
  //   }
  //   .our-news-box {
  //     padding: 0.26rem;
  //     width: 5.32rem;
  //     margin: 0 auto;
  //     background: #ffffff;
  //     border-radius: 0.16rem;
  //     box-shadow: 0 0 26px 0 rgba(58, 33, 121, 0.08);
  //   }
  //   .our-news-box-item {
  //     // margin-bottom: 23px;
  //     // padding: 15px 24px;

  //     .news-time {
  //       display: flex;
  //       align-items: center;
  //       font-size: 0.2rem;
  //       color: #606060;
  //       margin-bottom: 0.16rem;
  //       img {
  //         width: 0.27rem;
  //         height: 0.27rem;
  //         margin-right: 0.14rem;
  //       }
  //     }
  //     .news-title {
  //       padding: 0.16rem 0.12rem;
  //       background: #f8f8fa;
  //       color: #222222;
  //       border-radius: 0.1rem;
  //       margin-bottom: 22px;
  //     }
  //     p {
  //       line-height: 22px;
  //       overflow: hidden;
  //       text-overflow: ellipsis;
  //       display: -webkit-box;
  //       -webkit-line-clamp: 2;
  //       -webkit-box-orient: vertical;
  //     }
  //   }
  // }
  .follow-us {
    width: 100%;
    margin-top: 6rem;
    // height: 2.39rem;
    background: #7139ff;
    .follow-us-adaptation {
      width: 100%;
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
        // width: 100%;
        .principal-box {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          .principal-item {
            padding-top: 0.43rem;
            width: 5.21rem;
            display: flex;
            align-items: center;
            // margin-right: 60px;

            .avatar {
              width: 1.28rem;
              height: 1.28rem;
              margin-left: 0.26rem;
            }
            .principal-information {
              padding-left: 0.18rem;
              h4 {
                font-size: 0.24;
                font-family: PingFang SC;
                font-weight: 800;
                color: #ffffff;
                margin-bottom: 0.2rem;
              }
              p {
                font-size: 0.2rem;
                font-family: PingFang SC;
                font-weight: 400;
                color: #f0eaff;
              }
            }
          }
        }
        .understand-more {
          display: block;
          text-align: center;
          padding-bottom: 0.2rem;
          color: #ff7054;
          position: relative;
          // bottom: -20px;
          // float: right;
          cursor: pointer;
          &::after {
            content: "";
            width: 28px;
            height: 3px;
            background: #ff7054;
            opacity: 0.7;
            border-radius: 2px;
            position: absolute;
            bottom: 5px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
    .swiper-pagination {
      width: 90px;
      display: flex;
      justify-content: space-around;
      position: absolute;
      bottom: 60px;
      left: 270px;
      --swiper-theme-color: #7139ff;
      &::v-deep .swiper-pagination-bullet:focus {
        outline: 0;
      }
    }
  }



}
</style>
