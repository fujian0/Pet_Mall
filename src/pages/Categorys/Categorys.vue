<template>
  <div class="clssify">
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
      <router-view></router-view>
  </div>
</template>

<script>
 /* import './Classify.vue'//分类
  import './Brand.vue'//品牌*/
  export default{
    mounted () {

    },
    components: {

    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .clssify
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
</style>
