import { isValidUrl } from './isUrl';
import { notImage } from '../assets/vectors';

// Transform url google drive in a url to put in src
export const transformUrlGDrive = (urlImg: string) => {
  if (isValidUrl(urlImg)) {
    const id = urlImg.split('/');
    return `https://drive.google.com/uc?export=view&id=${id[5]}`;
  }

  return notImage;
};
