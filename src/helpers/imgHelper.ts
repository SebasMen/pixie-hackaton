// Transform url google drive in a url to put in src
export const transformUrlGDrive = (urlImg: string) => {
  const id = urlImg.split('/');
  return `https://drive.google.com/uc?export=view&id=${id[5]}`;
};
