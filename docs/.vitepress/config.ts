import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CSS to Tailwindcss",
  description: "A library convert css to tailwindcss",
  outDir: "docs",
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hunghg255/css2tailwind' }
    ]
  }
})
