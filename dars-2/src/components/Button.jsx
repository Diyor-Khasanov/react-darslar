import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className={`p-2 text-center ${props.color}`}>Click ME</button>
    </div>
  )
}

export default Button