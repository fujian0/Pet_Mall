2018/3/14项目day01(我的E宠)
# 项目总结 

### 项目目录结构 ###

### 1.项目目录


	├─ build/            # Webpack 配置目录
	├─ config/           # Webpack 配置目录
	├─ dist/			 # build 生成的生产环境下的项目
	├─ src/              # 源码目录（开发都在这里进行）
	│   ├─ api/ 		   # 发送ajax请求，返回响应
	│   ├─ common/         # 放置需要经由 Webpack 处理的静态文件
	│   ├─ components/     # 组件（COMPONENT）
	│   ├─ mock/		   # 模拟请求返回的数据
	│   ├─ pages/          # 路由组件目录
	│   │   ├─ classify/      # 分类路由组件
	│   │   ├─ firstPage/     # 首页路由组件
	│   │   ├─ shopping/      # 购物车路由组件
	│   │   ├─ userCenter/    # 登录/注册/用户中心路由组件
	│   ├── router/        # 路由配置（ROUTE）
	│   ├── store/         # vuex状态管理目录
	│   ├── App.vue        # 初始化页面
	│   ├── main.js        # 启动文件
	├── static/          # 放置无需经由 Webpack 处理的静态文件
	├── .babelrc         # Babel 转码配置
	├── .eslintignore    # （配置）ESLint 检查中需忽略的文件（夹）
	├── .eslintrc        # ESLint 配置
	├── .gitignore       # （配置）需被 Git 忽略的文件（夹）
	├── package.json     # （依赖包）
  
###2. 技术选型
### vue全家桶
    * "vue""
    * vue-cli    (脚手架)搭建项目
    * "vue-lazyload"  （懒加载）
    * "vue-router"   (路由器)
    * "vue-scroller"（滑屏库）
    * "vuex"    （状态管理模式）
    * "iconfont"  字体图标 - 阿里巴巴矢量库（http://www.iconfont.cn/）
    * "stylus"    预编译器 stylus中文版参考文档(http://www.zhangxinxu.com/jq/stylus/)
    
   

#####* 项目已完成功能
    * 底部路由切换功能
    * 头部搜索功能

 






