import { StaticImageData } from 'next/image'

export interface IInstagramPost {
  id: number
  image: StaticImageData
  alt: string
}

export interface IInstagramHeader {
  title: string
  username: string
}