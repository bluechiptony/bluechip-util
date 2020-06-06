export interface User {
  id?: any;
  userCode?: any;
  firstName: string;
  lastName: string;
  emailAddress?: string;
  phoneNumber?: string;
}

export interface AuthenticationBooklet {
  id?: any;
  userCode?: any;
  emailAddress?: string;
  phoneNumber?: string;
  password?: string;
  active?: string;
}
