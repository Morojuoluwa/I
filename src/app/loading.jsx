'use client'

import React from 'react'
import { Hourglass } from 'react-loader-spinner'


const loading = () => {
  return (
    <div className=' h-screen flex justify-center items-center'>
      <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />
    </div>
  )
}

export default loading
