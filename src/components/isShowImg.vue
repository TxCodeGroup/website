<template>
  <div v-if="visible" ref="isShowImg" class="comn-popup-masking" @click.self="close">
    <div class="postion-continaer">
     

    <!-- :class="fadeInOrOut" -->
      <div class="comn-popup-contianer" >
           <div style=" display: flex;justify-content: center;align-items: center;">
               <img :style="imgStyles" src="../assets/images/home/popup.jpg" alt=""></div>
               <!-- <div style=" display: flex;justify-content: center;align-items: center;">
                    <Button
              :style="buttonSubmitStyle"
            >
              <div class="button-content" @click="sumbit">
                {{ $t("confirm") }}
              </div>
            </Button>
               </div> -->
               
        <!-- <img src="../assets/images/comn/popClose.png" class="pop-close" @click="close"/> -->
       
        <!-- <div class="comn-popup-body">
            <div><img style="width:6rem;" src="../assets/images/home/popup.jpg" alt=""></div>
          <div class="button-box">
            <Button
              :style="buttonSubmitStyle"
            >
              <div class="button-content" @click="sumbit">
                {{ $t("确认") }}
              </div>
            </Button>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import Button from "@/components/Button";
import { addShareWorld } from "@/api";
export default {
    props: {
    styles: {
      type: Object,
      default: () => ({}),
    },
    contianerClass: {
      type: String,
    }
  },
  data() {
    return {
      visible: false,
      animate: false,
      form: {
        name: "",
        email: "",
        phone: "",
        theme: "",
        message: "",
      },
      imgStyles:{},
      buttonSubmitStyle: {}
    };
  },
  components: {
    Button,
  },
  computed: {
    fadeInOrOut() {
      return this.animate
        ? ["animate__animated", "animate__fadeIn"]
        : ["animate__animated", "animate__fadeOutUpBig"];
    },
  },
  created() {
      let getImg = localStorage.getItem("EnterThePageToSeeWhetherThePictureIsDisplayed")
      console.log("getImg",getImg)
      if(!getImg){
          this.open()
          localStorage.setItem("EnterThePageToSeeWhetherThePictureIsDisplayed",1);
      }else{
          this.close()
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
     this.buttonSubmitStyle = screenWidth < 640 ? {
           background: '#7139FF',
           margin:'0.2rem auto',
           padding:'0.08rem 0',
        //    padding: '0.19rem 0',
           borderRadius: '0.34rem',
        //    width: '4.25rem',
        width: '60%',
           boxShadow: '0 0 0 0',
       } : {
         background: '#7139FF',
         margin:'20px auto',
        //    padding: '18px 0',
        padding:'8px 0',
           borderRadius: '50px',
        //    width: '460px',
        width: '60%',
           boxShadow: '0 0 0 0',
       }

  },
  mounted() {
    this.$nextTick(() => {
      const body = document.querySelector("body");
      if (body.append) {
        body.append(this.$el);
      } else {
        body.appendChild(this.$el);
      }
    });
  },
  methods: {
    open() {
      this.visible = true;
      this.animate = true;
      const body = document.querySelector("body");
      body.style.overflow = "hidden";
    },
    close() {
      this.animate = false;
      setTimeout(() => {
        this.visible = false;
        const body = document.querySelector("body");
        body.style.overflow = "";
      }, 200);
    },
    async sumbit() {

      this.close();
    },
  },
};
</script>
<style lang="scss" scoped>
//  @media screen and (min-width: 640px)
  @media screen and (min-width: 640px){
    .comn-popup-masking {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      z-index: 999;
      overflow: auto;
      padding-top: 108px;
      .postion-continaer {
        // width: 670px;
        width: auto;
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;
        .icon0 {
          width: 88px;
          height: 30px;
        }
        .comn-popup-contianer {
            width: auto;
        //   width: 670px;
        //   padding: 35px 70px 45px 70px;
        padding: 6px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0px 0px 100px 0px rgba(113, 57, 255, 0.4);
          font-size: 24px;
          font-weight: 800;
          color: #7139ff;
          margin-top: 15px;
          position: relative;
          z-index: 1;
          .pop-close{
            display: none;
          }
          .comn-popup-title {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 40px;
            span {
              margin: 0 16px;
            }
            img {
              width: 34px;
              height: 4px;
            }
          }
          .comn-popup-body {
            .input-contianer {
              width: 100%;
              background: #f8f8fa;
              border-radius: 10px;
              padding: 14px 51px;
              padding-left: 21px;
              display: flex;
              align-items: center;
              margin-bottom: 30px;
              .input-icon {
                width: 30px;
                .image-name{
                  width: 18px; height: 22px
                }
                .image-email{
                  width: 22px; height: 18px;
                }
                .image-detail{
                  width: 18px; height: 22px
                }
                .image-theme{
                  width: 20px; height: 21px
                }
                .image-message{
                  width: 20px; height: 21px
                }
              }
              .input-item {
                width: 100%;
                background: #f8f8fa;
                color: #7139ff;
                font-size: 18px;
                font-weight: 500;
                &::-webkit-input-placeholder {
                  /* WebKit browsers */
                  color: #7139ff;
                }
              }
              .input-item-textarea {
                border: 0;
                outline: none;
                resize: none;
                font-family: PingFang SC;
              }
            }
            .input-contianer-textarea {
              display: flex;
              align-items: flex-start;
              margin-bottom: 19px;
            }
            .remark {
              font-size: 14px;
              color: #4f4f4f;
              line-height: 20px;
              font-weight: 400;
            }
            .button-box {
              display: flex;
              justify-content: center;
              margin-top: 53px;
            }
            .button-content {
              display: flex;
              justify-content: center;
              position: relative;
              font-size: 24px;
              // &::after {
              //   content: "";
              //   width: 5px;
              //   height: 5px;
              //   background: #f2e5ff;
              //   border-radius: 50%;
              //   position: absolute;
              //   right: 0px;
              //   top: 50%;
              // }
              // &::before {
              //   content: "";
              //   width: 5px;
              //   height: 5px;
              //   background: #f2e5ff;
              //   border-radius: 50%;
              //   position: absolute;
              //   left: 16px;
              //   top: 50%;
              // }
            }
          }
        }

        .icon1 {
          position: absolute;
          right: -40px;
          top: 40px;
        }
        .icon2 {
          position: absolute;
          left: -104px;
          top: 390px;
        }
        .icon3 {
          position: absolute;
          left: -36px;
          top: 800px;
        }
        .icon4 {
          position: absolute;
          right: -59px;
          top: 800px;
        }
        .icon5 {
          position: absolute;
          right: -153px;
          top: 900px;
        }
      }

      .animate__animated .animate__fadeOutUpBig {
        --animate-duration: 0.1s;
      }
    }
  }

  @media screen and (max-width: 640px){
    .comn-popup-masking {
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      z-index: 999;
      overflow: auto;
      padding-top: 1rem;
      .postion-continaer {
        // width: 5.72rem;
        width: auto;
        position: relative;
        display: flex;
        align-items: center;
        flex-direction: column;

        .comn-popup-contianer {
        //   width: 5.72rem;
        width: auto;
        //   padding: 0.44rem 0.44rem 0.34rem;
        padding: 0.04rem;
          background: #ffffff;
          border-radius: 0.17rem;
          /*box-shadow: 0px 0px 100px 0px rgba(113, 57, 255, 0.4);*/
          font-size: 0.29rem;
          font-weight: 800;
          color: #7139ff;
          /*margin-top: 15px;*/
          position: relative;
          z-index: 1;
          .pop-close{
            position: absolute;
            right: 0.14rem;
            top: 0.14rem;
            width: 0.38rem;
            height: 0.37rem;
          }
          .comn-popup-title {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-bottom: 0.51rem;
            span {
              margin: 0 0.19rem;
            }
            img {
              width: 0.29rem;
              height: 0.03rem;
            }
          }
          .comn-popup-body {
            .input-contianer {
              width: 100%;
              background: #f8f8fa;
              border-radius: 0.09rem;
              padding: 0.19rem 0.55rem;
              padding-left: 0.17rem;
              display: flex;
              align-items: center;
              margin-bottom: 0.26rem;
              .input-icon {
                width: 0.38rem;
                .image-name{
                  width: 0.21rem; height: 0.26rem;
                }
                .image-email{
                  width: 0.22rem; height: 0.19rem;
                }
                .image-detail{
                  width: 0.19rem; height: 0.24rem;
                }
                .image-theme{
                  width: 0.24rem; height: 0.20rem;
                }
                .image-message{
                  width: 0.22rem; height: 0.20rem;
                }
              }
              .input-item {
                width: 100%;
                background: #f8f8fa;
                color: #393939;
                font-size: 0.22rem;
                font-weight: 500;
                &::-webkit-input-placeholder {
                  /* WebKit browsers */
                  color: #C0C0C0;
                }
              }
              .input-item-textarea {
                border: 0;
                outline: none;
                resize: none;
                font-family: PingFang SC;
              }
            }
            .input-contianer-textarea {
              display: flex;
              align-items: flex-start;
              margin-bottom: 0.16rem;
            }
            .remark {
              font-size: 0.2rem;
              color: #818181;
              line-height: 0.26rem;
              font-weight: 300;
            }
            .button-box {
              display: flex;
              justify-content: center;
              margin-top: 0.64rem;
            }
            .button-content {
              display: flex;
              justify-content: center;
              position: relative;
              font-size: 0.29rem;
              // &::after {
              //   content: "";
              //   width: 5px;
              //   height: 5px;
              //   background: #f2e5ff;
              //   border-radius: 50%;
              //   position: absolute;
              //   right: 0px;
              //   top: 50%;
              // }
              // &::before {
              //   content: "";
              //   width: 5px;
              //   height: 5px;
              //   background: #f2e5ff;
              //   border-radius: 50%;
              //   position: absolute;
              //   left: 16px;
              //   top: 50%;
              // }
            }
          }
        }

        .icon0 {
          position: absolute;
          left: 1.63rem;
          top: -0.24rem;
          width: 0.75rem;
          height: 0.26rem;
        }
        .icon1 {
          position: absolute;
          right: -0.28rem;
          top: -0.43rem;
          width: 0.65rem;
          height: 0.65rem;
        }
        .icon2 {
          position: absolute;
          left: -0.32rem;
          top: 0.6rem;
          width: 1.19rem;
          height: 0.67rem;
        }
        .icon3 {
          position: absolute;
          left: -0.25rem;
          top: 5.92rem;
          width: 0.39rem;
          height: 0.39rem;
        }
        .icon4 {
          position: absolute;
          right: -0.28rem;
          top: 7.42rem;
          width: 1.02rem;
          height: 0.58rem;
        }
        .icon5 {
          position: absolute;
          right: 0.51rem;
          bottom: -0.38rem;
          width: 0.47rem;
          height: 0.47rem;
        }
      }

      .animate__animated .animate__fadeOutUpBig {
        --animate-duration: 0.1s;
      }
    }
  }

</style>
