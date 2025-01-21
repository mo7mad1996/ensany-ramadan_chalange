export interface User {
  email: string;
  password: string;
}

export interface NewUser {
  name: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_confirmation: string;
  country_id: string;
}
