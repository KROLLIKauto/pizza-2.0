import { IPromotion } from '@/components/Promotions/types/promotion'
import promo1 from './images/1.png'
import promo2 from './images/2.png'
import promo3 from './images/3.png'

export const promotionsData: IPromotion[] = [
  {
    id: 1,
    title: 'Закажи 2 пиццы – 3-я в подарок',
    description: 'При заказе 2-х больших пицц – средняя пицца в подарок',
    image: promo1,
  },
  {
    id: 2,
    title: 'Напиток в подарок',
    description: 'Скидка на заказ от 3 000 рублей + напиток в подарок',
    image: promo2,
  },
  {
    id: 3,
    title: '25% при первом заказе',
    description: 'Скидка новым клиентам!',
    image: promo3,
  }
]