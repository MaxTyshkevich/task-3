export type Adress = {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
};

export type Profile = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: Adress;
  description: string;
};
