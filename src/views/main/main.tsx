import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Loading } from '../../components';
import { sendTo } from '../../utils/sendTo';

const Main = () => {
  const { t } = useTranslation();
  const { push } = useHistory();
  const onClick = () =>sendTo(push,'test')
  return (
    <>
      <header>{t('title')}</header>
      <button onClick={onClick}>send to</button>
      <Loading />
    </>
  );
};

export default Main;
