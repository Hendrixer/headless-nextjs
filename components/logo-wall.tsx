import React from 'react'
import Clients from './clients'
import { contentForLogoCarousel } from '@/content/queries'

const LogoWall = async () => {
  const data = await contentForLogoCarousel()
  
  return (
    <Clients 
        content={data.assetCollection.items}    
    />
  )
}

export default LogoWall