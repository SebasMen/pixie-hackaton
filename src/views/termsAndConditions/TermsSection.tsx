import ItemListInfo from '../../components/common/itemListInfo';
import { useTranslation } from 'react-i18next';

const TermsSection = () => {
  // Hooks
  const { t } = useTranslation();

  // Component
  return (
    <div className='flex flex-col text-left w-full px-6 mt-3 md:px-36 mb-36 md:mt-[6.35rem]'>
      <h3 className='text-pixieLightBlue text-2xl text-left md:text-[30px]'>{t('termsTitle')}</h3>
      <ul className='mt-10 flex flex-col gap-5 md:gap-7'>
        <ItemListInfo title={t('term1Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term1Frag1')}</li>
            <li>{t('term1Frag2')}</li>
            <li>{t('term1Frag3')}</li>
            <li>{t('term1Frag4')}</li>
            <li>{t('term1Frag5')}</li>
            <li>{t('term1Frag6')}</li>
            <li>{t('term1Frag7')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term2Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term2Frag1')}</li>
            <li>{t('term2Frag2')}</li>
            <li>{t('term2Frag3')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term3Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term3Frag1')}</li>
            <li>{t('term3Frag2')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term4Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term4Frag1')}</li>
            <li>{t('term4Frag2')}</li>
            <li>{t('term4Frag3')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term5Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term5Frag1')}</li>
            <li>{t('term5Frag2')}</li>
            <li>{t('term5Frag3')}</li>
            <li>{t('term5Frag4')}</li>
            <li>{t('term5Frag5')}</li>
            <li>{t('term5Frag6')}</li>
            <li>{t('term5Frag7')}</li>
            <li>{t('term5Frag8')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term6Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term6Frag1')}</li>
            <li>{t('term6Frag2')}</li>
            <li>{t('term6Frag3')}</li>
            <li>{t('term6Frag4')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term7Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term7Frag1')}</li>
            <li>{t('term7Frag2')}</li>
            <li>{t('term7Frag3')}</li>
            <li>{t('term7Frag4')}</li>
            <li>{t('term7Frag5')}</li>
            <li>{t('term7Frag6')}</li>
            <li>{t('term7Frag7')}</li>
            <li>{t('term7Frag8')}</li>
            <li>{t('term7Frag9')}</li>
            <li>{t('term7Frag10')}</li>
            <li>{t('term7Frag11')}</li>
            <li>{t('term7Frag12')}</li>
            <li>{t('term7Frag13')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term8Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term8Frag1')}</li>
            <li>{t('term8Frag2')}</li>
            <li>{t('term8Frag3')}</li>
            <li>{t('term8Frag4')}</li>
            <li>{t('term8Frag5')}</li>
            <li>{t('term8Frag6')}</li>
            <li>{t('term8Frag7')}</li>
            <li>{t('term8Frag8')}</li>
            <li>{t('term8Frag9')}</li>
            <li>{t('term8Frag10')}</li>
            <li>{t('term8Frag11')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term9Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term9Frag1')}</li>
            <li>{t('term9Frag2')}</li>
            <li>{t('term9Frag3')}</li>
            <li>{t('term9Frag4')}</li>
            <li>{t('term9Frag5')}</li>
            <li>{t('term9Frag6')}</li>
            <li>{t('term9Frag7')}</li>
            <li>{t('term9Frag8')}</li>
            <li>{t('term9Frag9')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term10Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term10Frag1')}</li>
            <li>{t('term10Frag2')}</li>
            <li>{t('term10Frag3')}</li>
            <li>{t('term10Frag4')}</li>
            <li>{t('term10Frag5')}</li>
            <li>{t('term10Frag6')}</li>
            <li>{t('term10Frag7')}</li>
            <li>{t('term10Frag8')}</li>
            <li>{t('term10Frag9')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term11Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term11Frag1')}</li>
            <li>{t('term11Frag2')}</li>
            <li>{t('term11Frag3')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term12Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term12Frag1')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term13Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term13Frag1')}</li>
            <li>{t('term13Frag2')}</li>
            <li>{t('term13Frag3')}</li>
            <li>{t('term13Frag4')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term14Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term14Frag1')}</li>
            <li>{t('term14Frag2')}</li>
            <li>{t('term14Frag3')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term15Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term15Frag1')}</li>
            <li>{t('term15Frag2')}</li>
            <li>{t('term15Frag3')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term16Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term16Frag1')}</li>
            <li>{t('term16Frag2')}</li>
            <li>{t('term16Frag3')}</li>
            <li>{t('term16Frag4')}</li>
            <li>{t('term16Frag5')}</li>
            <li>{t('term16Frag6')}</li>
            <li>{t('term16Frag7')}</li>
            <li>{t('term16Frag8')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term17Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term17Frag1')}</li>
            <li>{t('term17Frag2')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term18Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term18Frag1')}</li>
            <li>{t('term18Frag2')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term19Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term19Frag1')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term20Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term20Frag1')}</li>
            <li>{t('term20Frag2')}</li>
            <li>{t('term20Frag3')}</li>
            <li>{t('term20Frag4')}</li>
            <li>{t('term20Frag5')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term21Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term21Frag1')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term22Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term22Frag1')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term23Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term23Frag1')}</li>
            <li>{t('term23Frag2')}</li>
            <li>{t('term23Frag3')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term24Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term24Frag1')}</li>
            <li>{t('term24Frag2')}</li>
            <li>{t('term24Frag3')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term25Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term25Frag1')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term26Title')}>
          <ul className='list-decimal ml-6'>
            <li>{t('term26Frag1')}</li>
            <li>{t('term26Frag2')}</li>
          </ul>
        </ItemListInfo>
        <ItemListInfo title={t('term27Title')}>
          <ul>
            <li>{t('term27Frag1')}</li>
            <li>{t('term27Frag2')}</li>
            <li>{t('term27Frag3')}</li>
          </ul>
        </ItemListInfo>
        <p className='font-subTitles'>
          <span className='font-sanzBold text-lg'>{t('termsLastUpdt')} </span> {t('termsLastUpdtDate')}
        </p>
      </ul>
    </div>
  );
};

export default TermsSection;
