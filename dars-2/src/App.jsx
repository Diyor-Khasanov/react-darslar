import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='m-auto w-full h-full flex'>
      <Card bgColor='bg-red-400' imgSrc='https://picsum.photos/id/237/300/200' title='Kuchuk' description='lorem ipsum' btnBg='bg-red-400' />
      <Card bgColor='bg-yellow-400' imgSrc='https://picsum.photos/id/234/300/200' title='Parij' description='lorem' btnBg='bg-blue-400'/>
      <Card bgColor='bg-green-400' imgSrc='https://picsum.photos/id/230/300/200' title='Sohil' description='ipsum' btnBg='bg-green-400' />
    </div>
  )
}

export default App