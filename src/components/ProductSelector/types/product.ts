import { StaticImageData } from 'next/image';
import { ProductCategory } from './category';

interface IProductSize {
  sizeProduct: number
  sizeImg: string
}

export interface IProduct {
  id: number;
  name: string;
  description: string;
  sizes: IProductSize[];
  price: number;
  image: StaticImageData;
  category: ProductCategory;
}

