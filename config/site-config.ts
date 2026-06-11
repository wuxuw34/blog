


const skills: {
  icon: string;
  name: string;
  description: string;
}[] = [
    {
      icon: 'skill-icons:html',
      name: 'HTML',
      description: 'HyperText Markup Language'
    },
    {
      icon: 'skill-icons:css',
      name: 'CSS',
      description: 'Cascading Style Sheets'
    },
    {
      icon: 'skill-icons:typescript',
      name: 'TypeScript',
      description: 'Superset of JavaScript'
    },
    {
      icon: 'skill-icons:javascript',
      name: 'JavaScript',
      description: 'Programming language'
    },
    {
      icon: 'skill-icons:react-dark',
      name: 'React',
      description: 'JavaScript library for building user interfaces'
    },
    {
      icon: 'devicon:vuejs',
      name: 'Vue',
      description: 'JavaScript framework for building user interfaces'
    },
    {
      icon: 'skill-icons:nodejs-light',
      name: 'Node.js',
      description: 'JavaScript runtime environment'
    }
  ]

const siteConfig = {
  profile: {
    username: 'Kagerou',
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
    ],
    skills
  },
  settings: {
    timeFormat: "MMM DD, YYYY"
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