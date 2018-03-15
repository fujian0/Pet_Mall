<template>
  <div>
    <section id="firstPage">
      <header ref="header" class="header border-1px">
        <div class="headerNav">
          <div class="headerTitle">
            <a href="javascript:;">
              <span>狗狗站</span>
              <span>|</span>
              <span class="city">重庆</span>
              <span class="headerTitleIcon"></span>
            </a>
          </div>
          <div class="headerSearch">
            <p class="search-text">
              <a href="javascript:;">
                <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
                <span class="search-icon"></span>
              </a>
            </p>
          </div>
          <a href="javascript:;" class="headerCategory">
            <img src="./mydope.png">
          </a>
        </div>
        <div class="findNav" ref="findNav">
          <div class="findNavList swiper-wrapper">
            <div class="swiper-slide">
              <a href="javascript:;" class="link_to">首页</a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;" class="link_to">狗狗主食</a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;" class="link_to">服饰城</a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;" class="link_to">医疗保健</a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;" class="link_to">零食玩具</a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;" class="link_to">日用外出</a>
            </div>
            <div class="swiper-slide">
              <a href="javascript:;" class="link_to">美容香波</a>
            </div>
          </div>
        </div>
      </header>
    </section>
    <div class="allmoudule module">
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
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'

  export default {
    mounted() {
      new Swiper('.swiper-container', {
        loop: true,
        // 配置小圆点
        pagination: {
          // el必须是小圆点的结构
          el: '.swiper-pagination'
        },
        autoplay: {  // 配置无限循环轮播
          delay: 1500,
          disableOnInteraction: false,
        }
      })

      /*首页nav*/
      new Swiper('.findNavList', '.swiper-container',{
        el: '.findNavList'
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  #firstPage
    position relative
    width: 100%
    height 100%
    .header
      bottomBorder-1px(rgba(7, 17, 27, 0.1))
      position fixed
      width 100%
      height 3.5rem
      overflow hidden
      background: #fff
      z-index 99
      .headerNav
        width: 100%
        .headerTitle
          float left
          position relative
          margin-left .2rem
          padding .2rem
          width 3.9rem
          span
            font-size .6rem
            line-height .6rem
            color #898989
            &.city
              font-size .5rem
            &.headerTitleIcon
              position absolute
              top 1rem
              right 0
              border-width .2rem
              font-size 0
              line-height 0
              border-style solid solid dotted
              border-color #898989 transparent transparent

        .headerSearch
          float left
          width 9.5rem
          margin-top .2rem
          margin-left .2rem
          a
            position relative
            input
              box-sizing border-box
              width 100%
              border 0
              height 25px
              background #e9e9e9
              border-radius 4px
              color #bcbcbc
              text-indent 10px
              font-size 13px
              outline 0
            .search-icon
              position absolute
              top .6rem
              right 0.3rem
              width .5rem
              height .5rem
              background url("./search.png") no-repeat
              background-size 100%
        .headerCategory
          float right
          width 1.2rem
          height 1.2rem
          margin-top .5rem
          margin-right .3rem
          img
            width 100%
            height: 100%
      .findNav
        display flex
        width 100%
        .findNavList
          width 140%
          li
            float left
            width 14%
            text-align center
            line-height .6rem
            font-size .6rem

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
            >img
              display: block
              width 100%
    .swiper-pagination
      >span.swiper-pagination-bullet-active
        background #02a774



</style>

