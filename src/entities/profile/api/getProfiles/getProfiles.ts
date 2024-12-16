import { api } from '../../../../shared/api';
import { Profile } from '../../modal/types/profile';

export const getProfiles = async () => {
  try {
    const res = await api.get<Promise<Profile[]>>(
      '?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
    );
    const data = await res.data;
    return data;
  } catch (error) {
    throw new Error('Failed to featch profiles');
  }
};
