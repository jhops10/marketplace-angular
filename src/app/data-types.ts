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
  qtd: undefined | number;
  category: string;
  img: string;
  id: number;
}

export interface Cart {
  name: string;
  price: number;
  qtd: undefined | number;
  category: string;
  img: string;
  id: number | undefined;
  userId: number;
  productId: number;
}
