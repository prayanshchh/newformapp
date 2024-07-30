import React from "react";

interface LoadQuestionProps{
    question : string
    option1? : string
    option2?: string
    option3? : string
    option4? : string
}
const LoadQuestionComp: React.FC<LoadQuestionProps> = ({question})=>{
    return (
        <>
        <form className="w-full max-w-2xl">
  <div className="flex items-center border-b border-teal-500 py-2">
    <p className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none">{question}</p>
    
   
  </div>
</form>
        </>
    )
}
export default LoadQuestionComp