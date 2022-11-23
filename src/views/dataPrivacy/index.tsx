import { Helmet } from 'react-helmet';
import Footer from '../../components/layout/footer';
import Page from '../../components/layout/page';
import DataPrivacyInfoSection from './dataPrivacyInfoSection';

const DataPrivacy = () => (
  <Page className='bg-sixth'>
    <Helmet>
      <title>Pixie - aviso de privacidad integral</title>
      <meta name='description' content='Aviso de privacidad integral' />
      <meta name='keywords' content='privacidad, integral'/>
    </Helmet>
    <DataPrivacyInfoSection />
    <Footer/>
  </Page>
);

export default DataPrivacy;
