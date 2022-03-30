/* eslint-disable arrow-body-style */
import del from 'del';
import { distFolder } from '../config';

const cleanDist = () => {
  return del(distFolder);
};

export default cleanDist;
