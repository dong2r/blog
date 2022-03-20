module.exports = {
  "title": "dongr",
  "description": "",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
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
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "関纡莪",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/dong2r/blog",
            "icon": "reco-github"
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
        "title": "dog",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "dongrui23@163.com",
        "link": "https://github.com/dong2r"
      }
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