import { API_URL } from '../consts';

// interface IFilters {
//   name?: string;
//   gender?: 'm' | 'f';
//   ageRange?: string;
//   castrated?: string;
//   vaccinated?: string;
//   fiv?: string;
//   felv?: string;
//   status?: string;
// }

export const ListPets = async (
  page = 0,
  perPage = 99,
  filters?: any,
  token = ''
) => {
  try {
    let queryString = '';
    if (filters)
      Object.entries(filters).forEach(([key, value]) => {
        queryString += `&${key}=${value}`;
      });
    const url =
      API_URL +
      `${
        token ? '/admin' : ''
      }/pets?page=${page}&perPage=${perPage}${queryString}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + token,
      },
    });
    return await response.json();
  } catch (error) {
    return { error: 'não foi possivel realizar sua requisicão' };
  }
};

export const AddPet = async (pet, token) => {
  try {
    const url = API_URL + `/admin/pets`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        authorization: 'Bearer ' + token,
      },
      body: pet,
    });
    return await response.json();
  } catch (error) {
    return { error: 'não foi possivel realizar sua requisicão' };
  }
};

export const UpdatePet = async (pet, token) => {
  try {
    const url = API_URL + `/admin/pets`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        authorization: 'Bearer ' + token,
      },
      body: pet,
    });
    return await response.json();
  } catch (error) {
    return { error: 'não foi possivel realizar sua requisicão' };
  }
};

export const RemovePet = async (_id, token) => {
  try {
    const url = API_URL + `/admin/pets?_id=${_id}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        authorization: 'Bearer ' + token,
      },
    });
    return await response.json();
  } catch (error) {
    return { error: 'não foi possivel realizar sua requisicão' };
  }
};

export const AdoptPet = () => {};
