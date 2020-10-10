module.exports = {
  title: '个人文档',
  description: '去留无意，闲看庭前花开花落；宠辱不惊，漫随天外云卷云舒',
  head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    serviceWorker: true,
   base: '/', // 这是部署到github相关的配置  使用'/'时
              //部署到 https://<USERNAME>.github.io  USERNAME=你的用户名
     markdown: {
      lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
       
      sidebar: 'auto',
      sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
      lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
      
     //导航栏配置
      nav: [
          { text: '首页', link: '/'},
          { text: 'Python', link: '/python/python.md' },
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
             
            {text:'关于', link:'/guide/guide.md'},
      ],
      displayAllHeaders: true, // 默认值：false
      activeHeaderLinks: false, // 默认值：true
       
      //侧边栏配置
      sidebar: {
         
   
         
       
           '/index/': [
              // 侧边栏在 /index/ 目录上
              '/index/',
              {
                title: 'Html',
                collapsable: false, // 不可折叠
                children: [
                   
                  '/html/one.md',
                  
              ]
              },
              {
                title: 'CSS',
                collapsable: false, // 不可折叠
                children: [
                    '/index/css/one.md',
                     
              ]
              },
              // 侧边栏在 /javascript/ 目录上
              {
                title: 'Javascript',
                collapsable: true, // 不可折叠
                children: [
                  '/index/javascript/javascript.md'
                ]
              },
              // 侧边栏在 /node.js/ 目录上
              {
                  title: 'nodejs',
                  collapsable: true, // 不可折叠
                  children: [
                    '/index/nodejs/nodejs.md',
                    
                  ]
                },
                // 侧边栏在 /react.js/ 目录上
              {
                  title: 'react',
                  collapsable: true, // 不可折叠
                  children: [
                    '/index/nodejs/react.md',
                     
                  ]
                },
                // 侧边栏在 /others/ 目录上
                {
                  title: '其它',
                  collapsable: true, // 不可折叠
                  children: [
                    '/index/others/others.md',
                     
                  ]
                },
                // 侧边栏在 /vue.js/ 目录上
              {
                  title: 'vuejs',
                  collapsable: true, // 不可折叠
                  children: [
                    '/index/vue/vue.md',
                     
                  ]
                },
                   // 侧边栏在 /vx/ 目录上
              {
                  title: 'vx',
                  collapsable: true, // 不可折叠
                  children: [
                    '/index/vx/vx.md',
                     
                  ]
                },
          ]
        }
        
          
          },
           
          algolia: {
              apiKey: '<API_KEY>',
              indexName: '<INDEX_NAME>'
            }
      }