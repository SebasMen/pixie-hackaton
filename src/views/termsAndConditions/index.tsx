import { Helmet } from 'react-helmet';
import Footer from '../../components/layout/footer';
import Page from '../../components/layout/page';
import TermsSection from './TermsSection';

const TermsAndConditions = () => (
  <Page className='bg-sixth'>
    <Helmet>
      <title>Pixie - términos y condiciones</title>
      <meta name='description' content='términos y condiciones' />
      <meta name='keywords' content='términos, condiciones'/>
    </Helmet>
    <TermsSection />
    <Footer/>
  </Page>
);

export default TermsAndConditions;
