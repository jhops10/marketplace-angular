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
  productId: undefined | number;
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

export interface PriceSummary {
  price: number;
  total: number;
}

export interface Order {
  endereco: string;
  numero: string;
  cep: string;
  bairro: string;
  totalPrice: number;
  userId: number;
  id: number | undefined;
}
