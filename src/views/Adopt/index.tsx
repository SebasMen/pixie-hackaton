import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

import { useLoading } from '../../hooks/useLoading';

import Page from '../../components/layout/page';
import Spinner from '../../components/common/spinner';
import Footer from '../../components/layout/footer';
import BannerSection from '../Catalogue/bannerSection';
import { FilterPet } from '../../interfaces/filter';
import AnimalFilter from '../../components/common/animalFilter';
import petService from '../../services/petService';
import { PetsListResponse } from '../../interfaces/product';
import AdoptPetsSections from './AdoptPetsSections';


const Adopt = () => {
  const { type, cat } = useParams();

  const [pets, setPets] = useState<any[]>();
  const [loading, setLoading] = useState(true);
  const [filterSelected, setFilterSelected] = useState<FilterPet>({
    typePet: [],
    agePet: []
  });

  const { loadingDeterminate } = useLoading();

  // Show loading
  useEffect(() => {
    loadingDeterminate(loading);
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setFilterUrl();
    return () => {};
  }, [type, cat]);

  useEffect(() => {
    getPets();
  }, [location]);

  const getPets = async () => {
    const data: any = await petService.getAllPets();
    console.log(data.data);
    setPets(data.data);
  };

  const setFilterUrl = () => {
    switch (type) {
      case 'gatos':
        setFilterSelected(old => ({
          ...old,
          typePet: ['CAT']
        }));
        break;
      case 'perros':
        setFilterSelected(old => ({
          ...old,
          typePet: ['DOG']
        }));
        break;
      default:
        break;
    }
  };

  return (
    <Page className='bg-pixieLightBlue md:bg-[#7bc6bf]' addPadding={false}>
      <Helmet>
        <title>Pixie - Adopta Pixie</title>
        <meta name='description' content='Adopta pixie' />
        <meta name='keywords' content='adopt, pets, friends'/>
      </Helmet>
      {loading
        ?
        <div className='w-full h-screen flex items-center justify-center'>
          <Spinner />
        </div>
        : (
          <>
            {/* Banner */}
            <BannerSection />

            <AnimalFilter
              setFilter={setFilterSelected}
              filter={filterSelected}
              adopt='adopt'
            />

            <AdoptPetsSections data={pets} filter={filterSelected} />

            {/* Footer */}
            <Footer />
          </>
        )}
    </Page>
  );
};

export default Adopt;
