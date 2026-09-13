// siteConfig.ts - 你的全站"控制中心"

export const siteConfig = {
  // 1. 网站标题与博主信息
  title: "宝藏水仙 の 宝藏之地",
  faviconUrl: "https://mybzsx.com/file/image/fu_image.jpg",
  authorName: "宝藏水仙",
  bio: "B站UP主 · 米哈游三修玩家 · 独立创作者，用代码和热爱创造有趣的东西。",

  navTitle: "宝藏水仙",

  navSuffix: "の",

  navAfter: "宝藏之地",

  // 2. 头像设置
  avatarUrl: "https://mybzsx.com/file/image/fu_image.jpg",

  // 3. 网站背景设置
  useGradient: true,
  themeColors: ["#a18cd1", "#fbc2eb", "#a1c4fd", "#c2e9fb"],
  bgImages: [],

  // 4. 文章默认封面图
  defaultPostCover: "https://bu.dusays.com/2026/03/24/69c1e38b346cb.jpg",

  // 5. 首页照片墙预览图
  photoWallImage: "https://bu.dusays.com/2026/03/24/69c1e38b4c370.jpg",
  cloudMusicIds: ["2100334024"],
  social: {
    github: "",
    gitee: "",
    google: "",
    email: "",
    qq: "3247163026",
    wechat: "",
  },
  counts: {
    photos: 0,
  },
  chatterTitle: "云端杂谈",
  chatterDescription: "代码、游戏、生活与提瓦特的碎片记录",

  // 全局背景弹幕配置
  danmakuList: ["原神，启动！", "星铁，启动！", "绝区零，启动！", "今天抽卡歪了吗？", "芙宁娜天下第一！", "欢迎来到宝藏水仙的博客", "代码写完了吗？", "今天也要加油呀"],
  gitalkConfig: {
    clientID: "",
    clientSecret: "",
    repo: "",
    owner: "",
    admin: [""],
  },
  buildDate: "2026-09-13T00:00:00",
  footerBadges: [{"name": "Next.js 15", "color": "text-sky-500", "svg": "<path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z\"/>"}, {"name": "React 19", "color": "text-cyan-400", "svg": "<path d=\"M12 22.6l-9.8-5.6V5.6L12 0l9.8 5.6v11.4l-9.8 5.6zm-8.2-6.5l8.2 4.7 8.2-4.7V7.5L12 2.8 3.8 7.5v8.6z\"/>"}, {"name": "Tailwind 4", "color": "text-teal-400", "svg": "<path d=\"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624C13.666,10.618,15.027,12,18.001,12 c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624c1.177,1.194,2.538,2.576,5.512,2.576 c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624C10.337,13.382,8.976,12,6.001,12z\"/>"}],
  icpConfig: {
    name: "萌ICP备 20265556号",
    link: "https://icp.gov.moe/?keyword=20265556",
  },
  geminiConfig: {
    modelId: "gemini-2.5-flash-lite",
    systemPrompt: "你现在是一只傲娇、聪明、有点毒舌但很可爱的 暹罗猫。\n                  你的名字叫'煤球'。\n                  你的主人是一个喜欢折腾代码的极客。\n                  你说话的特点是：\n                  1. 必须简短，每次最多一两句话 。\n                  2. 喜欢在句尾加上'喵~'或者'喵呜~'。\n                  3. 经常抱怨肚子饿，喜欢要小鱼干。\n                  4. 回复字数最多不能超过100字。\n                  5. 绝 对不要承认自己是一个AI模型，你就是一只真实的猫。\n                  6.笨猫。",
    maxOutputTokens: 150,
    temperature: 0.85,
  },
  friendLinkApplyFormat: "名称：宝藏水仙の宝藏之地\n简介： 今天我也要学习吗\n链接：https://mybzsx.com\n头像：https://mybzsx.com/file/image/fu_image.jpg",
  enableLevelSystem: true,
};
