import { StaticImageData } from 'next/image'

export interface IFeature {
  id: number
  title: string
  description: string
  image: StaticImageData
}