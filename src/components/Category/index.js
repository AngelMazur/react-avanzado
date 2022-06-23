import React from 'react'
import { Anchor, Image } from './category.style'

export const Category = ({ cover, path, emoji }) => {
  return (
    <Anchor href={path}>
      <Image src={cover} />
      {emoji}
    </Anchor>
  )
}
