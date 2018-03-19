<template>
  <div class="user">
    <div class="user-center" v-if="islogin">
      <h1>用户中心</h1>
      <p>
        <a @click="tologin(true)">登录</a> |
        <a @click="tologin(false)">注册</a>
      </p>
    </div>
    <div class="login-center" v-else>
      <div class="login" v-if="isregister">
        <i class="back" @click="gouser"></i>
        <a class="regist-link" @click="isregister=false">注册</a>
        <div class="logo">
          <img src="./logo.png" alt="">
        </div>
        <ul class="login-type">
          <li @click="changeLoginType(true)">普通登录</li>
          <li @click="changeLoginType(false)">手机动态密码登录</li>
          <i class="arrow" :class="ispsw?'arrowdirL':'arrowdirR'"></i>
        </ul>
        <div class="form-div">
          <form action="#" v-if="ispsw">
            <p><i class="user-icon"></i><input type="text" placeholder="手机号/邮箱/用户名"></p>
            <p><i class="psw-icon"></i><input type="password" placeholder="输入密码"></p>
            <p><span>忘记密码？</span></p>
            <input type="submit" value="登录">
          </form>
          <form action="#" v-else>
            <p><i class="phone-icon"></i><input type="text" placeholder="已注册的手机号"></p>
            <p><i class="psw-icon"></i><input type="text" placeholder="请输入图片内容"><a class="code"></a></p>
            <p><i class="psw-icon"></i><input type="text" placeholder="动态密码"><input type="button" value="获取动态密码"></p>
            <p><span>忘记密码？</span></p>
            <input type="submit" value="登录">
          </form>
        </div>
        <div class="login-site">
          <p>合作网站登录</p>
          <ul>
            <li><img src="./login_ico2.png" alt=""></li>
            <li><img src="./login_ico4.png" alt=""></li>
          </ul>
        </div>
      </div>
      <div class="register" v-else>
        <i class="back" @click="gouser"></i>
        <span class="register-title">注册</span>
        <div class="form-div">
          <form action="#">
            <p><i class="phone-icon"></i><input type="text" placeholder="手机号码"></p>
            <p><i class="psw-icon"></i><input type="text" placeholder="请输入验证码"><input type="button" value="获取验证码"></p>
            <p><i class="psw-icon"></i><input type="password" placeholder="请输入8-20位密码"><i class="psw-show"></i></p>
            <p><span>忘记密码？</span></p>
            <input type="submit" value="注册" disabled>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    data () {
      return {
        islogin: false, // 是否登录
        isregister: true, // 是否注册
        ispsw: true
      }
    },
    mounted () {
    },
    computed: {
      ...mapState(['showFooter'])
    },
    methods: {
      tologin (bol) {
        this.islogin = false
        this.isregister = bol
      },
      gouser () {
        this.islogin = true
        this.isregister = false
      },
      changeLoginType (ispsw) {
        this.ispsw = ispsw
      }
    },
    watch: {
      // 根据是否登录决定是否显示底部
      islogin (oldvalue, newvalue) {
        this.$store.dispatch('changeFooter', this.islogin)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .user
    position absolute
    top 0
    right 0
    bottom 0
    left 0
    .user-center
      c(#999)
      position absolute
      top 0
      right 0
      bottom 45px
      left 0
      text-align center
      h1
        font normal 200 42px/80px 'Microsoft YaHei'
      p
        ft(16px)
        a:hover
          c(#888)
    .login-center
      position absolute
      top 0
      right 0
      left 0
      bottom 0
      ft(14px)
      .login, .register
        c(#fff)
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        background url(./bg.png) 0 0 no-repeat
        background-size 100%
        .back
          position absolute
          top 16px
          left 10px
          width 16px
          height 16px
          border 2px solid #fff
          border-right none
          border-bottom none
          transform rotate(-45deg)
        .regist-link
          position absolute
          top 0
          right 0
          padding 10px
          cursor default
          ft(18px)
        .logo
          margin 62px auto 24px
          height 48px
          text-align center
          img
            height 100%
        .login-type
          position relative
          display flex
          height 44px
          line-height 44px
          background-color rgba(255,255,255, 0.4)
          .arrow
            position absolute
            bottom -2px
            left 84px
            z-index 999
            margin-left -10px
            width 0
            height 0
            border 12px solid transparent
            border-bottom-color #fff
            &.arrowdirL
              animation toleft 0.1s ease-out both
            &.arrowdirR
              animation toright 0.1s ease-out both
          li
            width 50%
            text-align center
            ft(16px)
        .form-div
          position relative
          background #fff
          form
            margin 0 15px 12px
            padding 0 6px
            c(#999)
            p
              height 45px
              padding 12px 0 12px 30px
              border-b-1px()
              i
                float left
                width 17px
                height 21px
                background-size contain
                background-repeat no-repeat
                margin 1px 0 0 -25px
                &.user-icon
                  background-image url(./ico3.png)
                &.psw-icon
                  background-image url(./ico4.png)
                &.phone-icon
                  background-image url(./ico1.png)
              input
                ft(14px)
                &::-webkit-input-placeholder
                  color: #ddd
              input:-webkit-autofill {
                -webkit-box-shadow: 0 0 0 20px white inset;
              }
              span, a
                float right
                text-align right
              a
                width 73px
                height 25px
                background url(./code.jpg) no-repeat
            input[type='submit']
              width 100%
              height 38px
              line-height 38px
              background #2ec975
              border-radius 5px
              c(#fff)
            input[type='button']
              float right
              width 100px
              height 34px
              line-height 34px
              border 1px solid #eb4c33
              border-radius 5px
              c(#ff4259)
              margin-top -7px
              -webkit-appearance:none;
              background #fff
        .login-site
          position absolute
          left 0
          bottom 0
          right 0
          text-align center
          p
            c(#ccc)
            ft(18px)
          ul
            display flex
            margin 18px 0
            li
              width 33.333333%
              img
                width 58px
      .register
        background none
        c(#666)
        &>.back
          border-color #666
        .register-title
          display block
          line-height 44px
          text-align center
          ft(18px)
        .form-div
          form
            input[type='submit']
              background #eb4c33
              &[disabled]
                background #aaa
              &:hover
                background red
  @keyframes toright {
    from {
      transform translateX(0)
    }
    to {
      transform translateX(195px)
    }
  }
  @keyframes toleft {
    from {
      transform translateX(195px)
    }
    to {
      transform translateX(0)
    }
  }
</style>
