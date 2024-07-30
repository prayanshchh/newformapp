"use client";  

import React, { useState } from "react"
interface OptionProps{
    option1? : string
    option2?: string
    option3? : string
    option4? : string
}

const LoadOption :React.FC<OptionProps> = ({option1, option2, option3, option4}) =>
{
    const [selectedoption, setselectoption] = useState<string | null>(null);
    const handler = (event: React.ChangeEvent<HTMLInputElement>)=>
    {
        setselectoption(event.target.value)
    }
return <>
      <legend className="sr-only">Countries</legend>

<fieldset>

  <div className="flex items-center mb-4">
    <input id="country-option-1" type="radio" name="countries" value={option1} className="w-4 h-4 border-gray-300  dark:bg-gray-700 dark:border-gray-600 "onChange={handler} checked={selectedoption == option1}></input>
    <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-black-300">
     {option1}
    </label>
  </div>

  <div className="flex items-center mb-4">
    <input id="country-option-2" type="radio" name="countries" value={option2} className="w-4 h-4 border-gray-300  dark:bg-gray-700 dark:border-gray-600"onChange={handler} checked={selectedoption == option2}></input>
    <label htmlFor="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-black-300">
      {option2}
    </label>
  </div>

  <div className="flex items-center mb-4">
    <input id="country-option-3" type="radio" name="countries" value={option3} className="w-4 h-4 border-gray-300  dark:bg-gray-700 dark:border-gray-600" onChange={handler} checked={selectedoption == option3}></input>
    <label htmlFor="country-option-3" className="block ms-2 text-sm font-medium text-gray-900 dark:text-black-300">
      {option3}
    </label>
  </div>

  <div className="flex items-center mb-4">
    <input id="country-option-4" type="radio" name="countries" value={option4} className="w-4 h-4 border-gray-300  dark:bg-gray-700 dark:border-gray-600" onChange={handler} checked={selectedoption == option4}></input>
    <label htmlFor="country-option-4" className="block ms-2 text-sm font-medium text-gray-900 dark:text-black-300">
      {option4}
    </label>
  </div>


</fieldset>

    </>
}

export default LoadOption
