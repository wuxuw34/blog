

const siteConfig = {
  profile: {
    socials: [
      {
        icon: "mdi:location",
        name: "Enshi",
      },
      {
        icon: "mingcute:bilibili-line",
        name: "bilibili",
        href: "https://space.bilibili.com/35105554",
      },
      {
        icon: "material-symbols:mail-outline",
        name: "Email",
        href: "mailto:ljfwbd@foxmail.com",
      },
      {
        icon: "mdi:github",
        name: "github",
        href: "",
      },
    ],
    /**
     * 教育经历
     * @param {string} name - 学校名称
     * @param {string} location - 学校位置
     * @param {number} start - 入学年份
     * @param {number} end - 毕业年份
     * @param {string} image - 学校图片
     * */
    educations: [
      {
        name: '西南民族大学',
        location: '中国，四川',
        start: 2020,
        end: 2024,
        image: '/img/xnmzdx.jpg'
      }
    ]
  },
  settings: {
    timeFormat: "MMM yy, YYYY"
  },
  projects: [
    {
      name: "Project 1",
      description: "This is project 1",
      url: "https://github.com/",
      urls: [
        {
          icon: "mdi:github",
          url: "https://github.com/",
        },
      ]
    },
  ] as Project[]
}

export default siteConfig 