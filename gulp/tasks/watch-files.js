import { watch } from 'gulp';
import browserSync from 'browser-sync';
import mainTemplateTask from './templateTask';
import mainLayoutTask from './layout-html';
import styles from './styles';
import scripts from './jsTask';
import { config, distFolder } from '../config';

const watchFiles = (callback) => {
  browserSync.init({
    server: {
      baseDir: distFolder,
    },
    port: 3000,
    notify: false,
    open: false,
  });
  callback();
};

watch(config.watch.homepage, mainTemplateTask);
// watch(config.watch.html_layout, mainLayoutTask);
watch(config.watch.styles, styles);
watch(config.watch.scripts, scripts);

export default watchFiles;
