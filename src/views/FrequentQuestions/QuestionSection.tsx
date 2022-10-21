import { useNavigate } from 'react-router-dom';
import AccordeonList from '../../components/common/accordeonList';
import { useTranslation } from 'react-i18next';

const QuestionSection = () => {
  // Hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // Component
  return (
    <div className='flex flex-col text-left w-full px-6 mt-3 md:px-36 mb-36 md:mt-[6.35rem]'>
      <h3 className='text-pixieLightBlue text-2xl text-left md:text-[30px]'>Preguntas frecuentes</h3>
      <ul className='mt-10 flex flex-col gap-8 md:gap-[2.7rem]'>
        <AccordeonList title={t('q1Text')}>
          <p>{t('q1Answer')}</p>
        </AccordeonList>
        <AccordeonList title={t('q2Text')}>
          <div className='flex flex-col gap-5'>
            <p className='flex flex-col'>
              <strong>{t('q2AnswerFrag1')}</strong> {t('q2AnswerFrag2')}
              <strong>{t('q2AnswerFrag3')}</strong> {t('q2AnswerFrag4')}
            </p>
            <span>
              {t('q2AnswerFrag5')}
              <a className='underline cursor-pointer' onClick={() => navigate('/calculator')}>
                {t('q2AnswerFrag6')}
              </a>
            </span>
          </div>
        </AccordeonList>
        <AccordeonList title={t('q3Text')}>
          <div className='flex flex-col gap-5'>
            <p>{t('q3AnswerFrag1')}</p>
            <span>
              {t('q3AnswerFrag2')}{' '}
              <a className='underline cursor-pointer' onClick={() => navigate('/calculator')}>
                {t('q3AnswerFrag3')}
              </a>
            </span>
          </div>
        </AccordeonList>
        <AccordeonList title={t('q4Text')}>
          <p>{t('q4Answer')}</p>
        </AccordeonList>
        <AccordeonList title={t('q5Text')}>
          <div>
            {t('q5AnswerFrag1')}
            <ul className='mt-4 list-disc pl-5'>
              <li>{t('q5AnswerFrag2')}</li>
              <li>{t('q5AnswerFrag3')}</li>
              <li>{t('q5AnswerFrag4')}</li>
              <li>{t('q5AnswerFrag5')}</li>
            </ul>
          </div>
        </AccordeonList>
        <AccordeonList title={t('q6Text')}>
          <p>{t('q6Answer')}</p>
        </AccordeonList>
        <AccordeonList title={t('q7Text')}>
          <div className='flex flex-col gap-5'>
            <p className='flex flex-col gap-3'>
              <span>
                <strong>{t('q7AnswerFrag1')}</strong> {t('q7AnswerFrag2')}
              </span>
              <span>
                <strong>{t('q7AnswerFrag3')}</strong> {t('q7AnswerFrag4')}
              </span>
            </p>
            <p>{t('q7AnswerFrag5')}</p>
          </div>
        </AccordeonList>
        <AccordeonList title={t('q8Text')}>
          <p>
            <strong>{t('q8AnswerFrag1')}</strong> {t('q8AnswerFrag2')} <strong>{t('q8AnswerFrag3')} </strong>
            {t('q8AnswerFrag4')}
            <strong> {t('q8AnswerFrag5')} </strong>
            {t('q8AnswerFrag6')}
            <strong> {t('q8AnswerFrag7')}</strong> {t('q8AnswerFrag8')} <span>{t('q8AnswerFrag9')} </span>
            {t('q8AnswerFrag10')} <strong>{t('q8AnswerFrag11')} </strong>
            {t('q8AnswerFrag12')} <strong>{t('q8AnswerFrag13')}</strong>.
          </p>
        </AccordeonList>
        <AccordeonList title={t('q9Text')}>
          <div className='flex flex-col gap-5'>
            <p>{t('q9AnswerFrag1')}</p>
            <p>{t('q9AnswerFrag2')}</p>
          </div>
        </AccordeonList>
        <AccordeonList title={t('q10Text')}>
          <div className='flex flex-col gap-5'>
            <p>{t('q10AnswerFrag1')}</p>
            <p>{t('q10AnswerFrag2')}</p>
            <div>
              <ul className='list-disc flex flex-col gap-4 pl-5'>
                <li>{t('q10AnswerFrag3')}</li>
                <li>{t('q10AnswerFrag4')}</li>
              </ul>
            </div>
            <div>
              <ul>
                <li>{t('q10AnswerFrag5')}</li>
                <li>{t('q10AnswerFrag6')}</li>
                <li>{t('q10AnswerFrag7')}</li>
                <li>{t('q10AnswerFrag8')}</li>
              </ul>
            </div>
          </div>
        </AccordeonList>
        <AccordeonList title={t('q11Text')}>
          <div className='flex flex-col gap-5'>
            <p>{t('q11AnswerFrag1')}</p>
            <p>{t('q11AnswerFrag2')}</p>
          </div>
        </AccordeonList>
        <AccordeonList title={t('q12Text')}>
          <div className='flex flex-col gap-5'>
            <p>{t('q12AnswerFrag1')}</p>
            <p>{t('q12AnswerFrag1')}</p>
          </div>
        </AccordeonList>
      </ul>
    </div>
  );
};

export default QuestionSection;
