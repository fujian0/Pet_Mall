<template>
  <!--包裹器-->
  <div class="categorybox">
    <!--头部包裹器-->
    <div class="head_nav">
      <!--分类-->
      <div class="fenlei">
        <router-link to="/categorys/classify">分类</router-link>
      </div>

      <!--品牌-->
      <div class="brand">
        <router-link to="/categorys/brand">品牌</router-link>
        <a href="javascript:;"><i class="iconfont icon-sousuo"></i></a>
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
  import './Classify.vue'//分类
  import './Brand.vue'//品牌
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
    position relative
    background-color #f5f5f5
    //头部导航
    .head_nav
      box-sizing border-box
      position fixed
      top 0
      left 0
      right 0
      height 50px
      background-color #f5f5f5
      z-index 100
      .fenlei
        float left
        width 50%
        box-sizing border-box
        text-align right
        padding-right  10px
        line-height 50px
        padding-bottom 10px
      .brand
        width 50%
        height 50px
        display flex
        justify-content center
        align-items center
        padding-bottom 10px
        margin-left 10px
      .icon-sousuo
        display block
        margin-left 90px
        font-size 20px
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
