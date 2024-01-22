import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "🫠",
  description: "一堆破烂罢了",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Golang', link: '/golang-examples' }
    ],

    sidebar: [
      {
        text: '分类',
        items: [
          { text: 'Golang Code', link: '/golang-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],
    outlineTitle:"缩略",
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
