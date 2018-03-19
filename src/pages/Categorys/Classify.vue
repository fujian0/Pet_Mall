<template>
  <!--包裹器-->
  <div class="categorybox">
    <!--头部包裹器-->
    <div class="header">
      <div class="tab">
        <div class="tabItem">
          <router-link to="/categorys/classify" replace>分类</router-link>
        </div>
        <div class="tabItem">
          <router-link to="/categorys/brand" replace>品牌</router-link>
        </div>
      </div>
      <div class="search">
        <img src="./search-ico.png">
      </div>
    </div>
    <!--主体-->
    <div class="body_wrap">
      <!--左边菜单栏-->
      <div class="cmenu_left">
        <div id="categorys_list">
          <ul>
            <!--<li class="list on" v-for="(classify,index) in categorys" :key="index">{{classify.name}}</li>-->
            <li class="list">为你推荐</li>
            <li class="list">E宠国际</li>
            <li class="list">狗粮主食</li>
            <li class="list">狗狗零食</li>
            <li class="list">狗狗服务</li>
            <li class="list">狗狗窝垫</li>
            <li class="list">狗狗生活</li>
            <li class="list">狗狗玩具</li>
            <li class="list">狗狗保健</li>
            <li class="list">狗狗医疗</li>
            <li class="list">狗狗牵引</li>
            <li class="list">狗狗美容</li>
            <li class="list">狗狗周边</li>
            <li class="list">狗狗清洁</li>
          </ul>
        </div>

      </div>

      <!--商品详情包裹器-->
      <div class="commodity_right">
        <!--热门分类-->
        <div class="reimen_warp">
          <a href="javascript:;" class="reimen">热门分类</a>

          <ul class="clearfix">
            <li class="fl">
              <a href="javascript:;">
                <div class="rela">
                  <img src="./imags/1-1.jpg" alt="">
                  <p>进口狗粮</p>
                </div>
              </a>
            </li>
            <li class="fl">
              <a href="javascript:;">
                <div class="rela">
                  <img src="./imags/1-2.jpg" alt="">
                  <p>进口狗粮</p>
                </div>
              </a>
            </li>
            <li class="fl">
              <a href="javascript:;">
                <div class="rela">
                  <img src="./imags/1-3.jpg" alt="">
                  <p>进口狗粮</p>
                </div>
              </a>
            </li>
            <li class="fl">
              <a href="javascript:;">
                <div class="rela">
                  <img src="./imags/1-4.jpg" alt="">
                  <p>进口狗粮</p>
                </div>
              </a>
            </li>
            <li class="fl">
              <a href="javascript:;">
                <div class="rela">
                  <img src="./imags/1-5.jpg" alt="">
                  <p>进口狗粮</p>
                </div>
              </a>
            </li>
            <li class="fl">
              <a href="javascript:;">
                <div class="rela">
                  <img src="./imags/1-1.jpg" alt="">
                  <p>进口狗粮</p>
                </div>
              </a>
            </li>
          </ul>


        </div>

      </div>

    </div>
  </div>

</template>

<script>

  export default {
  comments: {

  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .categorybox
    width 100%
    height 100%
    padding-bottom 45px
    margin-top 45px
    .header
      position fixed
      top 0
      left 0
      right 0
      z-index 100
      .tab
        box-sizing border-box
        background-color #ffffff
        height 40px
        line-height 40px
        display flex
        justify-content center
        border-bottom 1px solid #cbcbcb
        .tabItem
          text-align center
          font-size 14px
          margin auto 20px
          a
            height 40px
            width 34px
            display block
            box-sizing border-box
            color #333
            font-weight bold
            font-size 13px
            &.router-link-active
              color #ed4044
              border-bottom 2px solid #ed4044
      .search
        img
          width 14px
          height 14px
          position absolute
          top 13px
          right 14px
    //主体容器
    .body_wrap
      width 100%
      height 100%
      padding-top 50px
      display flex
      //左边分类列表
      .cmenu_left
        width 20%
        height 100%
        box-sizing border-box
        margin-right 0 10px
        font-size 14px
        #categorys_list
          width 100%
          > ul
            width 100%
            display flex
            text-align center
            flex-direction column
            background #fff
            margin-right 5px
            .list
              padding 20px 0

      //右边商品详情
      .commodity_right
        width 80%
        height 100%
        /*padding  10px*/
        .reimen_warp
          width 100%
          //热门分类a标签
          .reimen
            width 100%
            display table-cell
            text-align center
            //ul
          .clearfix
            display flex
            flex-wrap wrap
            justify-content space-around
            width 100%
            box-sizing border-box
            margin-top 10px

            >li
              width 33.3333%
              >a
                width 100%
                display block
                .rela
                  font-size 14px
                  text-align center
                  vertical-align middle
                  width 100%
                  >img
                    display block
                    width 100%
                    margin-top 20px
                  p
                    margin-top 20px
</style>
