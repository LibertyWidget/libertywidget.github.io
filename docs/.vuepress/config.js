module.exports = {
  title: '个人文档',
  description: '去留无意，闲看庭前花开花落；宠辱不惊，漫随天外云卷云舒',
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    serviceWorker: true,
   base: '/', // 这是部署到github相关的配置  使用'/'时 //部署到 https://<USERNAME>.github.io  USERNAME=你的用户名
     markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
      sidebar: 'auto',
      sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      lastUpdated: '最后更新时间', // 文档更新时间：每个文件git最后提交的时间
      
     //导航栏配置
      nav: [
          { text: '首页', link: '/'},
          { text: 'Android', link: '/android/'},
          {
            text: '博客',
             
            items: [
                { text: 'Html', link: '/index/html/one.md' },
                { text: 'css', link: '/index/css/one.md' },
                { text: 'Javascript', link: '/index/javascript/javascript.md' },
                { text: 'nodejs', link: '/index/nodejs/nodejs.md' },
                { text: 'vue', link: '/index/vue/vue.md' },
                { text: 'react', link: '/index/react/react.md' },
                { text: 'vx', link: '/index/vx/vx.md' },
                { text: 'others', link: '/index/others/others.md' },
            ]
          },
          {
              text: '链接',
              //ariaLabel: 'Language Menu',
              items: [
                { text: 'Github', link: 'https://github.com/Chandler712/practice' },
                { text: '博客园', link: 'https://www.cnblogs.com/chandlerwong/' },
              ]
            },
            {text:'关于', link:'/abut.md'},
      ],
      displayAllHeaders: true, // 默认值：false
      activeHeaderLinks: false, // 默认值：true
      //侧边栏配置
      sidebar: {
        "/android/ndk/": "auto"
      }
     },
}