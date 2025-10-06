import { StaticImageData } from 'next/image'

export interface IBannerContent {
  title: string
  description: string
  buttonText: string
  image: StaticImageData
  imageAlt: string
}
