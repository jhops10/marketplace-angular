export interface SignUp {
  email: string;
  name: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Product {
  name: string;
  price: number;
  qtd: string;
  category: string;
  img: string;
  id: number;
}
