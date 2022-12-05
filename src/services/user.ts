import { API_URL } from '../consts';

export const LoginService = async (
  email: string,
  password: string
): Promise<string> => {
  try {
    const url = API_URL + '/login';
    console.log('1');
    const body = JSON.stringify({
      email,
      password,
    });
    console.log('dados');
    console.log(body);

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });
    const { user, token } = await response.json();
    return token;
  } catch (error) {
    console.log(error);
    return '';
  }
};
