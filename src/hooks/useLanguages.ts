import i18next from 'i18next';
import { ObjectKey } from '../types/global';

const useLanguages = () => {
  const sections: ObjectKey<string> = {
    l: 'labels',
    b: 'buttons',
    p: 'placeholders',
    e: 'errors',
    t: 'texts',
    h: 'heading',
    c: 'checks',
    cu: 'currency'
  };

  /**
   * manage translations
   *  l: labels
   *  b: buttons
   *  p: placeholders
   *  e: errors
   *  t: texts
   *  h: heading
   *  c: checks
   * cu: currency
   * @param {string} sectionKey -  key of section
   * @param {string} text  - text to translate
   **/
  function t(sectionKey: string, text: string, capitalize?: boolean) {
    const traduction = i18next.t(`${sections[sectionKey]}.${text}`);
    if (capitalize) {
      const firstLetter = traduction.charAt(0).toUpperCase();
      const restSentence = traduction.slice(1);
      return `${firstLetter}${restSentence}`;
    }
    return traduction;
  }
  return { t };
};

export default useLanguages;
