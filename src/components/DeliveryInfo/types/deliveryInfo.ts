import { StaticImageData } from 'next/image'

export interface IDeliveryInfo {
  id: number
  title: string
  description: string
  image: StaticImageData
}