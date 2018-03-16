<template>
  <div>
    <!--头部搜索-->
      <header  class="home_header">
        <div class="home_header_top">
          <span  class="dog">狗狗 |</span>
          <span  class="city">重庆</span>
          <span class="icon">
         <i class="iconfont icon-xiala"></i>
        </span>
          <span class="search">
          <input class="search_input" type="text" placeholder="搜索商品和品牌">
          <span>
           <i class="iconfont icon-search"></i>
          </span>
        </span>
          <span class="xiaoxi">
           <i class="iconfont icon-xiaoxi"></i>
        </span>

        </div>
        <div class="home_menu swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide menu_li_slide">
              <a href="javascript:;" class="menu_li on">首页</a>
            </div>
            <div class="swiper-slide menu_li_slide">
              <a href="javascript:;" class="menu_li">狗狗主粮</a>
            </div>
            <div class="swiper-slide menu_li_slide">
              <a href="javascript:;" class="menu_li">服饰</a>
            </div>
            <div class="swiper-slide menu_li_slide">
              <a href="javascript:;" class="menu_li">医疗保健</a>
            </div>
            <div class="swiper-slide menu_li_slide">
              <a href="javascript:;" class="menu_li">零食玩具</a>
            </div>
            <div class="swiper-slide menu_li_slide">
              <a href="javascript:;" class="menu_li">首页</a>
            </div>
            <div class="swiper-slide menu_li_slide">
              <a href="javascript:;" class="menu_li">零食玩具</a>
            </div>
            <div class="swiper-slide menu_li_slide">
              <a href="javascript:;" class="menu_li">日用外出</a>
            </div>
          </div>

          <!--<ul class="menu_ul">
            <li class="menu_li on" > 首页 </li>
            <li class="menu_li"> 狗狗主粮 </li>
            <li class="menu_li"> 服饰 </li>
            <li class="menu_li"> 医疗保健 </li>
            <li class="menu_li"> 零食玩具 </li>
          </ul>-->
        </div>
      </header >


    <!--主体-->
    <div class="allmoudule module">
      <!--轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to"><img src="./images/1.jpg" alt=""></a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to"><img src="./images/2.jpg" alt=""></a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to"><img src="./images/3.jpg" alt=""></a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to"><img src="./images/4.jpg" alt=""></a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to"><img src="./images/5.jpg" alt=""></a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to"><img src="./images/6.jpg" alt=""></a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!--315我们一直在行动-->
      <div class="currency-adcon1">
        <div class="divboximg flex">
          <div class="divimg">
            <a href="javascript:;">
              <img src="./images/315.jpg">
            </a>
          </div>
        </div>
      </div>
      <!--E宠团-->
      <div class="E_list">
        <ul class="ect">
          <li><img src="./images/home/e1.jpg" alt=""></li>
          <li><img src="./images/home/e2.jpg" alt=""></li>
          <li><img src="./images/home/e3.jpg" alt=""></li>
          <li><img src="./images/home/e4.jpg" alt=""></li>
          <li><img src="./images/home/e5.jpg" alt=""></li>
          <li><img src="./images/home/e6.jpg" alt=""></li>
          <li><img src="./images/home/e7.jpg" alt=""></li>
          <li><img src="./images/home/e8.jpg" alt=""></li>
          <li><img src="./images/home/e9.jpg" alt=""></li>
          <li><img src="./images/home/e10.jpg" alt=""></li>
        </ul>

      </div>
      <!--正品秒杀-->
      <div class="zpms">
        <img src="./images/home/1zdphh2.jpg" alt="">
      </div>
      <!--每日疯抢-->
      <div class="mrfq">
         <!--tb-->
         <div class="toubu">
           <div class="mr">
             <img src="./images/home/new_index_icon_suprice.png" alt="">
           </div>
           <div class="gd">
             <img src="./images/home/gd.png" alt="">
           </div>
         </div>
         <!--滑屏每日商品-->
        <div class="qiang_img">
          <ul>
            <li>
              <img src="./images/home/mr1.jpg" alt="">
              <span class="price">￥2.98</span>
              <span>省110.52</span>
            </li>
            <li>
              <img src="./images/home/mr2.jpg" alt="">
              <span class="price">￥5.99</span>
              <span>省11.52</span>
            </li>
            <li>
              <img src="./images/home/mr3.jpg" alt="">
              <span class="price">￥9.99</span>
              <span>省5.2</span>
            </li>
            <li>
              <img src="./images/home/mr4.jpg" alt="">
              <span class="price">￥7.99</span>
              <span>省12.99</span>
            </li>
            <li>
              <img src="./images/home/mr5.jpg" alt="">
              <span class="price">￥4.99</span>
              <span>省19.9</span>
            </li>
            <li>
              <img src="./images/home/mr6.jpg" alt="">
              <span class="price">￥22.99</span>
              <span>省16.52</span>
            </li>
            <li>
              <img src="./images/home/mr7.jpg" alt="">
              <span class="price">￥12.99</span>
              <span>9.52</span>
            </li>
          </ul>
        </div>
      </div>
      <!--品牌力量-->
      <div class="pinpai">
        <img src="./images/home/1zpp.jpg" alt="">
      </div>
      <!--gif动态图-->
      <div class="gif">
        <img src="./images/home/GIF.gif" alt="">
      </div>
      <!--vip-->
      <div class="vip">
        <img src="./images/home/1zvip.jpg" alt="">
      </div>
      <!--大牌-->
      <div class="dapai">
        <img src="./images/home/1zcj.jpg" alt="">
      </div>

      <!--1折轮播图-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to"><img src="./images/home/tj1.jpg" alt=""></a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to"><img src="./images/home/tj2.jpg" alt=""></a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to"><img src="./images/home/tj3.jpg" alt=""></a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to"><img src="./images/home/tj4.jpg" alt=""></a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to"><img src="./images/home/tj5.jpg" alt=""></a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;" class="link_to"><img src="./images/home/tj6.jpg" alt=""></a>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>

      <!--大牌好货-->
      <div class="dapai_haohuo">
        <img src="./images/home/1zdphh.jpg" alt="">
      </div>


      </div>

  </div>

</template>

<script>
  import swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default {
    mounted() {
      new swiper('.swiper-container', {
        loop: true,
        // 配置小圆点
        pagination: {
          // el必须是小圆点的结构
          el: '.swiper-pagination'
        },
        autoplay: {  // 配置无限循环轮播
          delay: 1500,
          disableoninteraction: false,
        }
      })

      /*首页nav*/
      new swiper('.findnavlist', '.swiper-container', {
        el: '.findnavlist'
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home
    height 100%
    width 100%
    position relative
    // 头部样式
    .home_header
      position fixed
      top 0
      left 0
      right 0
      font-size 14px
      color #999999
      display flex
      justify-content center
      flex-direction column
      align-items center
      padding 15px 5px 0 5px
      background #fff
      z-index 100
      .home_header_top
        margin-left 20px
        width 100%
        .icon
          .iconfont
            font-size 12px
        .search
          width 50%
          padding 5px
          margin 0 10px
          border-radius 5px
          background #ddd
          .search_input
            outline none
            background #ddd
            border 0
        .xiaoxi
          text-align center
          .iconfont
            font-size 25px

      .swiper-container
        margin-top 20px
        height 100%
        text-align center
        .swiper-wrapper
          margin-bottom 15px
          .swiper-slide
            .menu_li
              padding-bottom 5px
              &.on
                color green
                border-bottom 1px solid green

  .module
    width 100%
    .swiper-container
      width 100%
      .swiper-wrapper
        width 100%
        .swiper-slide
          width 100%
          .link_to
            display block
            width 100%
            > img
              display: block
              width 100%
    .swiper-pagination
      > span.swiper-pagination-bullet-active
        background #02a774

    .currency-adcon1
      width 100%
      .divimg
        width 100%
        a
          display block
          width 100%
          img
            display block
            width 100%
            height 100%
    .E_list
      width 100%
      .ect
        display flex
        flex-wrap wrap
        li
          width 20%
          img
            display block
            width 100%
    .zpms
      width 100%
      img
        display block
        width 100%

    .mrfq
      width 100%
      display flex
      .toubu
        display block
        width 100%
        .mr
          float left
        .gd
          float right
      .qiang_img
        margin 10px 0
        width 100%
        overflow hidden
        >ul
          padding-bottom 10px
          width 250%
          display flex
          >li
            display flex
            flex-direction column
            font-size 12px
            text-align center
            margin 0 10px
            >span
              font-size 12px
              margin 5px 0
              color #999
              &.price
                color red
            >img
              width 85px
              height 85px
              margin-top 10px
    .pinpai
      width 100%
      img
        display block
        width 100%


    .gif
      width 100%
      img
        display block
        width 100%


    .vip
      width 100%
      img
        display block
        width 100%
    .dapai
      width 100%
      img
        display block
        width 100%


    .dapai_haohuo
      width 100%
      img
        display block
        width 100%





</style>

