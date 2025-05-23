import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Raven(渡鸦)-轻量双模视觉小说引擎',
  globalStyles: path.join(__dirname, 'styles/index.css'),
  head: [
    '<meta name="raven Engine" content="视觉小说游戏引擎">',
    // 或者
    ['meta', { name: 'author', content: 'John Doe' }]

  ],
  icon: 'https://imgs.freeimg.cn/s/68309e7895514.png',
  logo: {
    light: 'https://imgs.freeimg.cn/s/68309e7895514.png',
    dark: 'https://imgs.freeimg.cn/s/68309e7895514.png',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/e72uj/raven',
      },
    ],
  },
});
