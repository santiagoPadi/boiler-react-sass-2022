import * as yup from 'yup';
import i18next from 'i18next';

export const requiredField = (field: string, type?: 'number' | 'string') => {
  if (type === 'number') {
    return yup.number().required(i18next.t('errors.requiredField', { field: field }));
  }
  return yup.string().required(i18next.t('errors.requiredField', { field: field }));
};
