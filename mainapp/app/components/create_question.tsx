import React, { useState } from "react";

interface QuestionProps{
    question? : string
}

const QuestionComp: React.FC<QuestionProps> = ({question})=>{

    return (
        <>
        <form className="w-full max-w-2xl">
  <div className="flex items-center border-b border-teal-500 py-2">
    <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Untitled Question" aria-label="Full name"></input>
  </div>
</form>
        </>
    )
}
export default QuestionComp