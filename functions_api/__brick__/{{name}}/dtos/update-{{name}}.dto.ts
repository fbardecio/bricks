// TODO: Add or remove properties as needed
export interface Update{{name.pascalCase()}}Dto {
    name: string;
    email: string;
    role?: 'admin' | 'user';
  }