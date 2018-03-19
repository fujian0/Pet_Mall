<template>
  <div class="home">
    <!--头部搜索-->
    <header class="home_header">
      <!--top-->
      <div class="home_header_top">
        <span class="dog">狗狗 |</span>
        <span class="city">重庆</span>
        <!--下拉字体图标-->
        <span class="icon">
         <i class="iconfont icon-xiala"></i>
        </span>
        <!--搜索商品和品牌-->
        <span class="search">
          <input class="search_input" type="text" placeholder="搜索商品和品牌">
          <!--搜索字体图标-->
          <span class="icon">
           <i class="iconfont icon-sousuo"></i>
          </span>
        </span>
        <!--信息字体图标-->
        <span class="xiaoxi">
           <i class="iconfont icon-xinxi"></i>
        </span>
      </div>
      <!--首页导航-->
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
    </header>

    <!--主体-->
    <div class="contest_wrap">
      <div class="allmoudule module">
        <!--轮播图-->
        <div class="banner swiper-container">
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
        <div class="qiang">
          <div class="qiang_top">
            <div class="qiang_logo">
              <img src="./images/home/new_index_icon_suprice.png" alt="">
            </div>
            <span class="qiang_text">
              <span>本场结束</span>
              <span class="number">21</span>
              <span>:</span>
              <span class="number">00</span>
              <span class="more">
                更多
                <i class="iconfont icon-xiangyou"></i>
              </span>
            </span>
          </div>
          <div class="qiang_img swiper-container">
            <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <img src="./images/home/mr1.jpg" alt="">
                <span class="price">￥8.99</span>
                <span>省19.52</span>
              </li>
              <li class="swiper-slide">
                <img src="./images/home/mr2.jpg" alt="">
                <span class="price">￥18.99</span>
                <span>省33.52</span>
              </li>
              <li class="swiper-slide">
                <img src="./images/home/mr3.jpg" alt="">
                <span class="price">￥28.99</span>
                <span>省53.52</span>
              </li>
              <li class="swiper-slide">
                <img src="./images/home/mr4.jpg" alt="">
                <span class="price">￥9.99</span>
                <span>省18.52</span>
              </li>
              <li class="swiper-slide">
                <img src="./images/home/mr5.jpg" alt="">
                <span class="price">￥29.99</span>
                <span>省19.62</span>
              </li>
              <li class="swiper-slide">
                <img src="./images/home/mr6.jpg" alt="">
                <span class="price">￥39.99</span>
                <span>省7.92</span>
              </li>
              <li class="swiper-slide">
                <img src="./images/home/mr7.jpg" alt="">
                <span class="price">￥12.99</span>
                <span>省6.52</span>
              </li>
              <li class="swiper-slide">
                <img src="./images/home/mr1.jpg" alt="">
                <span class="price">￥16.99</span>
                <span>省18.52</span>
              </li>
              <li class="swiper-slide">
                <img src="./images/home/mr2.jpg" alt="">
                <span class="price">￥13.99</span>
                <span>省16.52</span>
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
        <!--Go-->
        <div class="go">
          <div class="go_left">
            <a href="javascript:;"><img src="./images/12-1.jpg" alt=""></a>
            <a href="javascript:;"><img src="./images/12-2.jpg" alt=""></a>
          </div>
          <div class="go_right">
            <a href="javascript:;"><img src="./images/12-1.jpg" alt=""></a>
            <a href="javascript:;"><img src="./images/12-2.jpg" alt=""></a>
          </div>

        </div>
        <!--大牌-->
        <div class="dapai">
          <img src="./images/home/1zcj.jpg" alt="">
        </div>
        <!--1折轮播图-->
        <div class="daze swiper-container">
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
        <!--选购-->
        <div class="db_rq">
          <div class="dp_left">
            <ul class="xg_left">
              <li><img src="./images/xg/xg1.jpg" alt=""></li>
              <li><img src="./images/xg/xg2.jpg" alt=""></li>
              <li><img src="./images/xg/xg3.jpg" alt=""></li>
              <li><img src="./images/xg/xg4.jpg" alt=""></li>
              <li><img src="./images/xg/xg5.jpg" alt=""></li>
              <li><img src="./images/xg/xg6.jpg" alt=""></li>
              <li><img src="./images/xg/xg7.jpg" alt=""></li>
              <li><img src="./images/xg/xg8.jpg" alt=""></li>
              <li><img src="./images/xg/xg9.jpg" alt=""></li>
              <li><img src="./images/xg/xg10.jpg" alt=""></li>
            </ul>
          </div>

          <div class="dp_right">
            <ul class="xg_right">
              <li><img src="./images/xg/xg1.jpg" alt=""></li>
              <li><img src="./images/xg/xg2.jpg" alt=""></li>
              <li><img src="./images/xg/xg3.jpg" alt=""></li>
              <li><img src="./images/xg/xg4.jpg" alt=""></li>
              <li><img src="./images/xg/xg5.jpg" alt=""></li>
              <li><img src="./images/xg/xg6.jpg" alt=""></li>
              <li><img src="./images/xg/xg7.jpg" alt=""></li>
              <li><img src="./images/xg/xg8.jpg" alt=""></li>
              <li><img src="./images/xg/xg9.jpg" alt=""></li>
              <li><img src="./images/xg/xg10.jpg" alt=""></li>
            </ul>

          </div>

        </div>
        <!--最惨奖-->
        <div class="zc">
          <a href="javascript:;">
            <img src="./images/zc1.jpg" alt="">
          </a>
        </div>
        <!--dianzhang-->
        <div class="dianzhang">
          <a href="javascript:;">
            <img src="./images/zc2.jpg" alt="">
          </a>
        </div>
        <!--特别星球-->
        <div class="xingqiu">
          <a href="javascript:;">
            <img src="./images/19-xing.jpg" alt="">
          </a>
        </div>
        <!--潮品-->
        <div class="chaopin">
          <div class="chaopin_left">
            <a href="javascript:;">
              <img src="./images/20-1caho.jpg" alt="">
            </a>
          </div>
          <!--you-->
          <div class="chaopin_right">
            <div class="cp_left">
              <a href="javascript:;">
                <img src="./images/20-2chao.jpg" alt="">
              </a>
            </div>
            <div class="cp_right">
              <a href="javascript:;">
                <img src="./images/20-3chao.jpg" alt="">
              </a>
            </div>
          </div>
        </div>
        <!--特色栏目-->
        <div class="lanmu">
          <a href="javascript:;">
            <img src="./images/ts.jpg" alt="">
          </a>
        </div>
        <!--特色栏目底部-->
        <div class="footer_z">
          <div class="footer_left">
            <div class="f_l">
              <a href="javascript:;">
                <img src="./images/22-1e.jpg" alt="">
              </a>
            </div>
            <div class="f_l">
              <a href="javascript:;">
                <img src="./images/22-2e.jpg" alt="">
              </a>
            </div>
          </div>

          <div class="footer_right">
            <div class="f_r">
              <a href="javascript:;">
                <img src="./images/22-2e.jpg" alt="">
              </a>
            </div>
            <div class="f_r">
              <a href="javascript:;">
                <img src="./images/22-1e.jpg" alt="">
              </a>
            </div>
          </div>

        </div>
        <!--联系我们-->
        <footer class="home_footer">
          <div class="footer_top">
            <span>
              <a href="javascript:;" class="lianjie chuping">触屏版</a>
            </span>
            <span>
              <a href="javascript:;" class="lianjie">手机客户端</a>
            </span>
            <span>
              <a href="javascript:;" class="lianjie">关于我们</a>
            </span>
            <span>
              <a href="javascript:;" class="lianjie">联系我们</a>
            </span>
          </div>
          <p class="copy">
            <a href="javascript:;" class="lianjie copy_lianjie">
              &copy;wap.epet.com版权 : 重庆易宠科技有限公司
            </a>
          </p>
        </footer>
      </div>
    </div>
    </div>



</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted() {
      /*首页nav*/
      new Swiper('.home_menu.swiper-container', {
        slidesPerView: 5,  //设置一页显示的个数
        //spaceBetween: 20   // 每个之间的间距

      })

      new Swiper('.banner.swiper-container', {
        // 配置小圆点
        loop:true,
        pagination: {
          // el必须是小圆点的结构
          el: '.swiper-pagination'
        },
        autoplay: {  // 配置无限循环轮播
          delay: 1500,
          disableOnInteraction: false,
        }
      })

      /*今日特价团1折轮播图*/
      new Swiper('.daze.swiper-container', {
        loop:true,//设置手滑动

        pagination: {
          // el必须是小圆点的结构
          el: '.swiper-pagination'
        },
        autoplay: {  // 配置无限循环轮播
          delay: 1500,
          //设置手滑动后还可以自动轮播
          disableOnInteraction: false
        }
      })

      /*每日疯抢轮播图*/
      new Swiper('.qiang_img.swiper-container', {
        //loop:true,//设置手滑动
        slidesPerView: 3.5,  //设置一页显示的个数
        disableOnInteraction: false

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
        margin-left 10px
        width 100%
        .icon
          display inline-block
          vertical-align middle
          .iconfont
            font-size 30px
        .search
          width 50%
          padding 5px
          margin-right 15px
          border-radius 5px
          background #ddd
          .search_input
            outline none
            background #919191
            border 0
          .icon
            .icon-sousuo
              font-size 20px

        .xiaoxi
          text-align center


      .swiper-container
        padding-top 20px
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

    .contest_wrap
      padding-bottom 50px
      .module
        width 100%
        padding-top 100px
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


        .qiang
          padding  10px 0 0 10px
          width 100%
          background #fff
          box-sizing border-box
          .qiang_top
            display flex
            justify-content space-around
            align-items center
            width 100%
            .qiang_logo
              width 30%
              >img
                width 100%
            .qiang_text
              font-size 14px
              display flex
              justify-content space-around
              align-items center
              .number
                padding 3px 3px
                border 1px solid gainsboro
                margin 0 5px
              .more
                color #999
                margin-left 20px
                .iconfont
                  font-size 16px

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
        .go
          width 100%
          display flex
          .go_left
          img
            flex-wrap wrap
            width 100%
          .go_right
          img
          flex-wrap wrap
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


        .db_rq
          width 100%
          display flex
          .dp_left
            width 100%
            .xg_left
              width 100%
              flex-wrap wrap
              img
                width 100%
          .dp_right
            width 100%
            .xg_right
              width 100%
              flex-wrap wrap
              img
                width 100%
        .zc
          width 100%
          a
            width 100%
            img
              display block
              width 100%
        .dianzhang
          width 100%
          a
            width 100%
            img
              display block
              width 100%
        .xingqiu
          width 100%
          a
            width 100%
            img
              display block
              width 100%
        .chaopin
          width 100%
          display flex
          .chaopin_left
            width 50%
            a
              width 100%
            img
              display block
              width 100%
          .chaopin_right
            width 50%
            a
              width 100%
            img
              display block
              width 100%



        .lanmu
          width 100%
          a
            width 100%
            img
              display block
              width 100%

        .footer_z
          display flex
          width 100%
          .footer_left
            flex-wrap wrap
            width 100%
            .f_l
              a
                width 100%
                img
                  width 100%
                  display block
          .footer_right
            flex-wrap wrap
            width 100%
            .f_r
              a
                width 100%
                img
                  width 100%
                  display block
        .home_footer
          margin-top 30px
          text-align center
          width 100%
          font-size 14px
          .footer_top
            width 100%
            padding 0 45px 10px 40px
            box-sizing border-box
            display flex
            justify-content space-between
            .lianjie
              color black
              &.chuping
                color red
          .copy
            .copy_lianjie
              color black
</style>

