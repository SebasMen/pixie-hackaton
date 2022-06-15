export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

capitalize.all = (str: string): string =>
  str.split(' ').map(capitalize).join(' ');

