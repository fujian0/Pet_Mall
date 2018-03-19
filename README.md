2018/3/14项目(我的E宠商场)
# 项目总结
## 1.项目目录
                          

	>build/             --- 配置目录
	>config/            --- Webpack 配置目录
	>dist/			        --- build 生成的生产环境下的项目
	>src/               --- 源码目录（开发都在这里进行）
	   |- api/ 		      --- 发送ajax请求，返回响应
	   |- common/        --- 放置需要经由 Webpack 处理的静态文件
	   |- components/    --- 组件（UI组件模块）
	   |- contaners      --- 容器组件模块文件
	   |- mock/		       --- 模拟请求返回的数据
	   |- pages/         --- 路由组件目录
	   |   |- Categorys/ --- 分类路由组件
	   |   |- Home/      --- 首页路由组件
	   |   |- Cart /     --- 购物车路由组件
	   |   |- Person/    --- 登录/注册/用户个人中心路由组件
	   |- router /      --- 路由配置
	   |- store /       --- vuex状态管理目录
	   |- App.vue       --- 初始化页面
	   |- main.js       --- 入口js
	>static/           --- 放置无需经由 Webpack 处理的静态文件
	>.babelrc          --- Babel 转码配置
	>.eslintignore     --- 配置语法检查中需忽略的文件（夹）
	>.eslintrc         --- ESLint 配置
	>.gitignore        --- 配置需被 Git 忽略的文件（夹）
	>package.json      --- 下载的依赖包及版本

## 2. 技术选型
### vue全家桶 ###
    * "vue""
    * vue-cli    (脚手架)搭建项目
    * "vue-lazyload"  （懒加载）
    * "vue-router"   (路由器)
    * "vue-scroller"（滑屏库）
    * "vuex"    （状态管理模式）
    * "iconfont"  字体图标 - 阿里巴巴矢量库（http://www.iconfont.cn/）
    * "stylus"    预编译器 stylus中文版参考文档(http://www.zhangxinxu.com/jq/stylus/)

### 使用Swiper插件
    * 下载安装
    npm install --save swiper
    * 基本使用
   
   1). template:
      ``
    swiper-container后面再加一个属于自己的类名，配置获取到该元素时，两个类名同时写
                <div class="swiper-container">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a href="javascript:" class="link_to">
                         // 上面三层结构必不可少的，下面a标签及img是的可替换的内容
                        <img src="./images/2-bander1.jpg">
                      </a>
                    </div>
                  </div>
                  <div class="swiper-pagination"></div>
                </div>
      ``
      
   2). js配置:  
      ``
      <script>
            import Swiper from 'swiper'
            import 'swiper/dist/css/swiper.min.css'
            export default{
              mounted(){
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
              }
            }
          </script>
      ``
   3). style样式设置
   `` .swiper-container
           width 100%
           .swiper-wrapper
             width 100%
             .swiper-slide
               width 100%
               .link_to
                 display block
                 width 100%
                 >img
                   display block
                   width 100%
           .swiper-pagination
             >span.swiper-pagination-bullet-active
               background #02a774
``

### *项目已完成功能
    * 底部路由切换功能
    * 头部搜索功能
    * 头部轮播图
    * 首页静态页面初步完成
    * 分类页面完成
    * 品牌页面搭建中
    
    
     完成进度 ：分类页面开始搭建
     问题：flex布局和css3不太熟悉浪费太多时间在布局和css样式上，比较纠结样式，布局
         : 2级路由不太会用    
           页面不出来,子路由径配置错误 
     








