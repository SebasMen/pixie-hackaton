import { Navigate } from 'react-router-dom';
import { centerCenter, padding, vertical } from 'csstips';
import { style } from 'typestyle';

import Page from '../../components/layout/page';
import Button from '../../components/common/button';
import TextField from '../../components/form/textField/index';

import { useAppContext, useLogin } from '../../hooks';
import Tooltiped from '../../components/common/tooltiped/index';

const container = style({ width: 'max-content' }, centerCenter, vertical, padding(5));

const Login = () => {
  // Hooks
  const { isAuthenticated } = useAppContext();

  const {
    form: { email, password },
    handleFormChange,
    onSubmit,
  } = useLogin({ email: '', password: '' });

  // Component
  if (isAuthenticated) return <Navigate to='/' />;

  return (
    <Page>
      <h1>React Base Project</h1>
      <form className={container} onSubmit={onSubmit}>
        <TextField
          type='email'
          label='Email'
          placeholder='your@email.com'
          name='email'
          required
          value={email}
          handler={handleFormChange}
        />
        <TextField
          type='password'
          label='Password'
          placeholder='********'
          name='password'
          required
          value={password}
          handler={handleFormChange}
        />

        <Button tooltip='Submit Form' type='submit'>
          Login
        </Button>
      </form>
    </Page>
  );
};

interface LoginForm {
  email: string;
  pass: string;
}

export default Login;
