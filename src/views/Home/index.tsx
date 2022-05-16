import { style } from 'typestyle';

import Page from '../../components/layout/page/index';
import Button from '../../components/common/button/index';
import Spinner from '../../components/common/spinner';

import { useFetch, useLogout } from '../../hooks';

import logo from '../../assets/vectors/logo.svg';

const Home = () => {
  // Hooks
  const logout = useLogout();
  const { loading, response } = useFetch<_Response>('https://jsonplaceholder.typicode.com/todos');

  // Component
  return (
    <Page>
      <h1>React Base Project</h1>
      <img src={logo} className='App-logo' alt='logo' width={200} height={200} />
      <Button onClick={logout}>Logout</Button>
      <br />
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h3>Sample Todos Response</h3>
            <pre className={style({ width: '320px' })}>{JSON.stringify(response, null, 2)}</pre>
          </>
        )}
      </div>
    </Page>
  );
};

type _Response = any[];

export default Home;
