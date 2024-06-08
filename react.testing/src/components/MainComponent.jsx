import React from 'react'
import { CardComponent } from './CardComponent'
const MainComponent = () => {
  return (
    <main className='flex justify-center gap-10 m-5'>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
      <CardComponent></CardComponent>
    </main>
  )
}

export default MainComponent
