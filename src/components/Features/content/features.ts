import { IFeature } from '@/components/Features/types/feature'
import feature1 from '../images/1.png'
import feature2 from '../images/2.png'
import feature3 from '../images/3.png'

export const featuresData: IFeature[] = [
  {
    id: 1,
    title: 'Изготавливаем пиццу по своим рецептам в лучших традициях',
    description: 'Наши пиццы готовятся из самой свежей, вкусной и главное хрустящей с нежной и ароматной начинкой, готовим по своим итальянским рецептам.',
    image: feature1,
  },
  {
    id: 2,
    title: 'Используем только свежие ингридиенты',
    description: 'Ежедневно закупаем продукты и овощи для наших пицц, соблюдая все сроки хранения',
    image: feature2,
  },
  {
    id: 3,
    title: 'Доставка в течение 60 минут или заказ за нас счёт',
    description: 'Все наши курьеры – фанаты серии Need for Speed и призеры гонок World Rally Championship в World Superbike во всех категориях',
    image: feature3,
  }
]