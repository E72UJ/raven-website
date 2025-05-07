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
  icon: 'https://s21.ax1x.com/2025/04/12/pERffsK.png',
  logo: {
    light: 'https://img.picui.cn/free/2025/05/03/6815c7b966355.png',
    dark: 'https://img.picui.cn/free/2025/05/03/6815c7b966355.png',
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
