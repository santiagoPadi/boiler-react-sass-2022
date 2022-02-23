import { ObjectKey } from "../types/global";


export const stringToDateFormat = (date: any, options?: any) => new Date(date).toLocaleDateString('es', options);

export const stringToTimeFormat = (date: any, options?: any) => new Date(date).toLocaleTimeString('es', options);

export const removeAccents = (str: string) => {
  let result = str;
  const map: ObjectKey<string> = {
    a: 'á|à|ã|â|ä|À|Á|Ã|Â|Ä',
    e: 'é|è|ê|ë|É|È|Ê|Ë',
    i: 'í|ì|î|ï|Í|Ì|Î|Ï',
    o: 'ó|ò|ô|õ|ö|Ó|Ò|Ô|Õ|Ö',
    u: 'ú|ù|û|ü|Ú|Ù|Û|Ü',
    c: 'ç|Ç',
    n: 'ñ|Ñ'
  };

  Object.keys(map).forEach((key: string) => {
    result = result?.replace(new RegExp(map[key], 'g'), key);
  });

  return result;
};
