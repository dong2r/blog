module.exports = {
  "title": "dongr",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        // "href": "/favicon.ico"
        "href": "/img.jpeg"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
  "themeConfig": {
    /**
     * 代码主题
     * support for
     * 'default'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     * 
     * default 'tomorrow'
     */
    codeTheme: 'solarizedlight',
    // 侧边栏
    subSidebar: 'auto',
    // 评论插件
    valineConfig: {
      appId: 'fM5yTY4veBeTkW5QazJGEjOa-gzGzoHsz',// your appId
      appKey: 'UMzk4yMvVGQKsbdx0i61UMEz', // your appKey
    },
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "工具箱",
        "icon": "reco-category",
        "items": [
          {
            "text": "Pdf工具",
            "link": "https://pdf.io/"
          },
          {
            // https://staging-cn.vuejs.org/guide/introduction.html
            "text": "Vue",
            "link": "https://staging-cn.vuejs.org/guide/introduction.html"
          },
          {
            "text": "动漫",
            "link": "https://www.agefans.cc/"
          },
          {
            "text": "插件",
            "link": "https://chrome.zzzmh.cn/#ext"
          },
          {
            "text": "Json解析",
            "link": "http://tool.mkblog.cn/json/"
          },
          {
            "text": "壁纸",
            "link": "https://wallhaven.cc/"
          },
          {
            "text": "AI写作",
            "link": "https://xiezuocat.com/#/?s=ilxdh"
          },
          {
            "text": "PPT",
            "link": "https://pptsupermarket.com/"
          },
          {
            "text": "Maven仓库",
            "link": "https://developer.aliyun.com/mvn/search"
          },
          {
            "text": "转在线img",
            "link": "https://imgtu.com/"
          },
          // https://thisissand.com/
          {
            "text": "画⛰️",
            "link": "https://thisissand.com/"
          },
          // https://www.processon.com/diagrams
          {
            "text": "在线流程图",
            "link": "https://www.processon.com/diagrams"
          },
          {
            "text": "markdown排版",
            "link": "https://editor.mdnice.com/"
          },
          {
            // 在线Cron表达式生成器
            "text": "Cron表达式",
            "link": "https://www.bejson.com/othertools/cron/"
          },
          {
            "text":"热搜摸🐟",
            "link":"https://tophub.today/"
          },
          {
            "text":"影视搜索",
            "link":"https://video.bqrdh.com/"
          },
          {
            "text":"AI搜索",
            "link":"https://magi.com/"
          },
          {
            "text":"ya网飞",
            "link":"https://yanetflix.com/"
          },
          {
            "text": "科学上网",
            "link": "https://gitee.com/zeng-chaofan/awesome-vpn?_from=gitee_search"
          }
        ]
      },
      {
        "text": "関纡莪",
        "icon": "reco-account",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/dong2r/blog",
            "icon": "reco-github"
          },
          {
            "text": "Gitee",
            "link": "https://gitee.com/idogrui",
            "icon": "reco-mayun"
          },
          {
            "text": "bilibili",
            "link": "https://space.bilibili.com/491471655?spm_id_from=333.337.0.0",
            "icon": "reco-bilibili"
          },
          {
            "text": "博客园",
            "link": "https://www.cnblogs.com/drsyq/",
            "icon": "reco-bokeyuan"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "me",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "dongrui23@163.com",
        "link": "https://github.com/dong2r"
      },
      {
        "title": "君哥",
        "link": "https://www.it235.com/"
      },
      // https://programmer-yili.github.io/yili-music-doc/
      {
        "title": "伊力",
        "link": "https://programmer-yili.github.io/yili-music-doc/"
      },
    ],
    "logo": "/me.jpeg",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "董同学",
    "authorAvatar": "/me.jpeg",
    "record": "🆙",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  }
}