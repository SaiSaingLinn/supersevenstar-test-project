import React from 'react'
import CenterAds from './centerads'
import { adsKey } from '../../key'

const { center_ads, } = adsKey

const Advertisement = props => {
  const { position_code } = props
  return (
    <>
      {position_code === center_ads && <CenterAds {...props} />}
    </>
  )
}

export default Advertisement
