import ItemListInfo from '../../components/common/itemListInfo';
import { useTranslation } from 'react-i18next';

const DataPrivacyInfoSection = () => {
  // Hooks
  const { t } = useTranslation();

  // Component
  return (
    <div className='flex flex-col text-left w-full px-6 mt-3 md:px-36 mb-36 md:mt-[6.35rem]'>
      <h1 className='text-pixieLightBlue text-2xl text-left md:text-[30px]'>{t('privacyTitle')}</h1>
      <ul className='mt-10 flex flex-col gap-5 md:gap-7'>
        <ItemListInfo title={t('privacyI1Title')}>
          <p>{t('privacyI1Frag1')}</p>
        </ItemListInfo>
        <ItemListInfo title={t('privacyI2Title')}>
          <div className='flex flex-col gap-5'>
            <p>{t('privacyI2Frag1')}</p>
            <p>{t('privacyI2Frag2')}</p>
          </div>
        </ItemListInfo>
        <ItemListInfo title={t('privacyI3Title')}>
          <div className='flex flex-col gap-5'>
            <p>{t('privacyI3Frag1')}</p>
            <p>{t('privacyI3Frag2')}</p>
          </div>
        </ItemListInfo>
        <ItemListInfo title={t('privacyI4Title')}>
          <div className='flex flex-col gap-5'>
            <p>{t('privacyI4Frag1')}</p>
            <p>{t('privacyI4Frag2')}</p>
          </div>
        </ItemListInfo>
        <ItemListInfo title={t('privacyI5Title')}>
          <div className='flex flex-col gap-5'>
            <p>{t('privacyI5Frag1')}</p>
            <p>{t('privacyI5Frag2')}</p>
            <p>
              <ul className='list-disc ml-5'>
                <li>{t('privacyI5Frag3')}</li>
                <li>{t('privacyI5Frag4')}</li>
                <li>{t('privacyI5Frag5')}</li>
                <li>{t('privacyI5Frag6')}</li>
                <li>{t('privacyI5Frag7')}</li>
                <li>{t('privacyI5Frag8')}</li>
                <li>{t('privacyI5Frag9')}</li>
              </ul>
            </p>
          </div>
        </ItemListInfo>
        <ItemListInfo title={t('privacyI6Title')}>
          <p>{t('privacyI6Frag1')}</p>
        </ItemListInfo>
        <ItemListInfo title={t('privacyI7Title')}>
          <p>{t('privacyI7Frag1')}</p>
        </ItemListInfo>
        <ItemListInfo title={t('privacyI8Title')}>
          <div className='flex flex-col gap-5'>
            <p>{t('privacyI8Frag1')}</p>
            <p>{t('privacyI8Frag2')}</p>
            <p>{t('privacyI8Frag3')}</p>
          </div>
        </ItemListInfo>
        <ItemListInfo title={t('privacyI9Title')}>
          <div className='flex flex-col gap-5'>
            <p>{t('privacyI9Frag1')}</p>
          </div>
        </ItemListInfo>
        <p className='font-subTitles'>
          <span className='font-sanzBold text-lg'>{t('privacyLastUpdt')} </span>
          {t('privacyLastUpdtDate')}
        </p>
      </ul>
    </div>
  );
};

export default DataPrivacyInfoSection;
