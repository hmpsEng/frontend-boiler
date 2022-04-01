const distFolder = 'website/dist';
const srcFolder = 'website/src';

const config = {
  source: {
    root: [
      `${srcFolder}/`,
    ],
    homepage: `${srcFolder}/index.html`,
    html_layout: `${srcFolder}/html/layout/**/*.html`,
    scripts: [
      `${srcFolder}/js//main.js`,
    ],
    css: `${srcFolder}/css/`,
    styles: [
      `${srcFolder}/style/scss/style.scss`,
    ],
    html: `${srcFolder}/*.html`,
    img: `${srcFolder}/img`,
    svg: `${srcFolder}/img/**/*.svg`,
    icons: `${srcFolder}/img/icons/*.svg`,
    fonts: `${srcFolder}/fonts/*`,
  },
  build: {
    root: `${distFolder}/`,
    scripts: `${distFolder}/js/`,
    css: `${distFolder}/css/`,
    html: `${distFolder}/demo/`,
    images: `${distFolder}/img/`,
    fonts: `${distFolder}/fonts/`,
  },
  watch: {
    scripts: `${srcFolder}/js/**/*.js`,
    styles: `${srcFolder}/style/scss/**/*.scss`,
    homepage: [
      `${srcFolder}/index.html`,
      `${srcFolder}/html/layout/**/*.html`,
      `${srcFolder}/html/components/**/*.html`,
    ],
  },
  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export { distFolder, srcFolder, config };
