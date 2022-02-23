import { useTranslation } from 'react-i18next';
import { Loading } from '../../components';

const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <header>{t('title')}</header>
      <Loading />
    </>
  );
};

export default Main;
