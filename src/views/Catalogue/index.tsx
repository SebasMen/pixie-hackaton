import { useEffect, useState } from 'react';
import { useAppContext } from '../../hooks';

// Components
import Page from '../../components/layout/page';
import Footer from '../../components/layout/footer';
import AnimalFilter from '../../components/common/animalFilter';
import ProductsSection from './productsSection';
import Spinner from '../../components/common/spinner';
import BannerSection from './bannerSection';

import { ProductListResponse } from '../../interfaces/product';
import { filterShop } from '../../interfaces/filter';
import productService from '../../services/productService';

import '../../styles/catalogue.css';
import { useParams, useSearchParams } from 'react-router-dom';
import useScrolled from '../../hooks/useScrolled';
import ButtonWhatsap from '../../components/common/buttonWhatsapp';
import { useLoading } from '../../hooks/useLoading';

const Catalogue = () => {
  // Hooks
  const [products, setproducts] = useState<ProductListResponse>();
  const [loading, setLoading] = useState(true);
  const { type, cat } = useParams();
  const [filterSelected, setfilterSelected] = useState<filterShop>({
    agePet: [],
    typePet: [],
    typeProduct: ''
  });
  const { updateContext, location } = useAppContext();
  const [searchParams] = useSearchParams();
  const { scrollTo } = useScrolled();
  const { loadingDeterminate } = useLoading();

  useEffect(() => {
    updateContext(old => ({ ...old, showNavbar: true }));
  }, [screen.width]);

  useEffect(() => {
    getProducts();
  }, [searchParams, location]);

  // Show loading
  useEffect(() => {
    loadingDeterminate(loading);
  }, [loading]);

  useEffect(() => {
    setFilterUrl();
    return () => {};
  }, [type, cat]);

  // Methods
  const getProducts = async () => {
    if (searchParams.get('query'))
      await productService.getQueryProducts(searchParams.get('query') ? searchParams.get('query') : '')
        .then(data => {
          setproducts(data);
          setLoading(false);
          scrollTo(800);
        });
    else
      await productService.getAllProducts(location === 'USA' ? 2 : 1, true).then(data => {
        setproducts(data);
        setLoading(false);
      });
  };

  const setFilterUrl = () => {
    switch (type) {
      case 'gatos':
        setfilterSelected(old => ({
          ...old,
          typePet: ['CAT']
        }));
        break;
      case 'perros':
        setfilterSelected(old => ({
          ...old,
          typePet: ['DOG']
        }));
        break;
      default:
        break;
    }

    switch (cat) {
      case 'alimentos':
        setfilterSelected(old => ({
          ...old,
          typeProduct: 'Alimentos'
        }));
        break;
      case 'snacks':
        setfilterSelected(old => ({
          ...old,
          typeProduct: 'Snacks'
        }));
        break;
      default:
        break;
    }
  };

  return (
    <Page className='bg-pixieLightBlue md:bg-[#7bc6bf]' addPadding={false}>
      {loading
        ?
        <div className='w-full h-screen flex items-center justify-center'>
          <Spinner />
        </div>
        : (
          <>
            {/* Banner */}
            <BannerSection />

            {/* FAB */}
            <ButtonWhatsap />

            <AnimalFilter setFilter={setfilterSelected} filter={filterSelected} />

            {/* Products */}
            <ProductsSection data={products?.products} filter={filterSelected} />

            {/* Footer */}
            <Footer />
          </>)}
    </Page>
  );
};

export default Catalogue;
