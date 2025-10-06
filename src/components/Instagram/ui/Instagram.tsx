import React from 'react'
import Image from 'next/image'
import './Instagram.scss'
import { instagramPosts, instagramHeader } from '../content/instagram'
import { IInstagramPost } from '../types/instagram'

const Instagram: React.FC = () => {
  return (
    <section className="instagram">
      <div className="header">
        <h2 className="title">{instagramHeader.title}</h2>
        <p className="username">{instagramHeader.username}</p>
      </div>
      <div className="grid">
        {instagramPosts.map((post: IInstagramPost) => (
          <div key={post.id} className="item">
            <Image
              src={post.image}
              alt={post.alt}
              width={384}
              height={384}
              sizes="(max-width: 450px) 160px, (max-width: 834px) 278px, 384px"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Instagram