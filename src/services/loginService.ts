import { LoginForm } from '../interfaces/login';

export const loginService = async (user: LoginForm, api = '') => {
  try {
    const response = await fetch(`${api}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = (await (response as Response).json()) as any;

    if (data.error) throw new Error(data.msg);

    return { ok: true, user: data.user };
  } catch (error: any) {
    return { ok: false, msg: error.message };
  }
};

export const checkTokenService = () => {};
