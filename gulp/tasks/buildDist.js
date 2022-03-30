import { src, dest } from 'gulp';
import { config } from '../config';

const buildDistFolder = () => {
  return src(config.source.root)
    .pipe(dest(config.build.root));
};

export default buildDistFolder;
