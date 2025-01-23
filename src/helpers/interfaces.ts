export interface User {
  account: string;
  password: string;
  remember_me: string;
}

export interface NewUser {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  password: string;
  password_confirmation: string;
  country_id: string;
}
