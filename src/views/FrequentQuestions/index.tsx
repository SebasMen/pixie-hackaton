import { Helmet } from 'react-helmet';
import Footer from '../../components/layout/footer';
import Page from '../../components/layout/page';
import QuestionSection from './QuestionSection';

const FrequentQuestions = () => (
  <Page className='bg-sixth'>
    <Helmet>
      <title>pixie - preguntas frecuentes</title>
      <meta name='description' content='Preguntas frecuentes' />
      <meta name='keywords' content='preguntas, frecuentes'/>
    </Helmet>
    <QuestionSection />
    <Footer/>
  </Page>
);

export default FrequentQuestions;
