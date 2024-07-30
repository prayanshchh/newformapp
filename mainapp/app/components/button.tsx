import React from 'react'
import { any } from 'zod';
interface ButtonProps{
    text: string,
    onclick: any
}

const Button: React.FC<ButtonProps>  = ({text, onclick}) =>
{
    return (
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={onclick}>
  {text}
</button>
    )
}

export default Button;