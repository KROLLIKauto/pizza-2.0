import { IProduct } from '@/components/ProductSelector/types/product'
import { ProductCategory } from '@/components/ProductSelector/types/category'
import pizza1 from './images/01.png'
import pizza2 from './images/02.png'
import pizza3 from './images/03.png'
import pizza4 from './images/04.png'
import pizza5 from './images/05.png'
import pizza6 from './images/06.png'
import pizza7 from './images/07.png'
import pizza8 from './images/08.png'

const sizes = [
  {
    sizeProduct: 20,
    sizeImg: '150px'
  },
  {
    sizeProduct: 30,
    sizeImg: '165px'
  },
  {
    sizeProduct: 40,
    sizeImg: '200px'
  }
]

export const productsData: IProduct[] = [
  {
    id: 1,
    name: 'Итальянская',
    description: 'Томат, шампиньоны, сыр, красный лук, маслины, соус, тесто, базилик',
    sizes,
    price: 699,
    image: pizza1,
    category: ProductCategory.MEAT,
  },
  {
    id: 2,
    name: 'Маргарита',
    description: 'Тесто со шпинатом, сырный соус и колбаска, много колбаски',
    sizes,
    price: 479,
    image: pizza2,
    category: ProductCategory.SPICY,
  },
  {
    id: 3,
    name: 'Барбекю',
    description: 'Цыплёнок запечённый, пепперони, моцарелла, соус барбекю',
    sizes,
    price: 699,
    image: pizza3,
    category: ProductCategory.CHEESE,
  },
  {
    id: 4,
    name: 'Вегетарианская',
    description: 'Томат, шампиньоны, болгарский перец, кукуруза, соус, тесто, базилик',
    sizes,
    price: 399,
    image: pizza4,
    category: ProductCategory.VEGAN,
  },
  {
    id: 5,
    name: 'Мясная',
    description: 'Томат, шампиньоны, сыр, красный лук, маслины, соус',
    sizes,
    price: 799,
    image: pizza5,
    category: ProductCategory.MEAT,
  },
  {
    id: 6,
    name: 'Овощная',
    description: 'Тесто со шпинатом, сырный соус и колбаска',
    sizes,
    price: 599,
    image: pizza6,
    category: ProductCategory.VEGAN,
  },
  {
    id: 7,
    name: 'Римская',
    description: 'Цыплёнок запечённый, пепперони, сырный соус, шампиньоны',
    sizes,
    price: 749,
    image: pizza7,
    category: ProductCategory.MEAT,
  },
  {
    id: 8,
    name: 'С грибами',
    description: 'Томат, шампиньоны, сыр, красный лук, маслины, соус',
    sizes,
    price: 899,
    image: pizza8,
    category: ProductCategory.CHEESE,
  },
]