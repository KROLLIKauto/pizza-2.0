import { IDeliveryInfo } from '@/components/DeliveryInfo/types/deliveryInfo'
import delivery1 from '../images/1.png'
import delivery2 from '../images/2.png'
import delivery3 from '../images/3.png'

export const deliveryInfoData: IDeliveryInfo[] = [
  {
    id: 1,
    title: 'Заказ',
    description: 'После оформления заказа мы свяжемся с вами для уточнения деталей.',
    image: delivery1,
  },
  {
    id: 2,
    title: 'Доставка курьером',
    description: 'Мы доставим вашу пиццу горячей. Бесплатная доставка по городу.',
    image: delivery2,
  },
  {
    id: 3,
    title: 'Оплата',
    description: 'Оплатить можно наличными или картой курьеру. И золотом тоже можно.',
    image: delivery3,
  }
]