"use client";  

import React, { useState } from "react"


const CreateOption :React.FC = () =>
{

return <>
      <legend className="sr-only">Countries</legend>

<fieldset>

  <div className="flex items-center mb-4">
    <input id="country-option-1" type="radio" name="countries" placeholder="option1" className="w-4 h-4 border-gray-300  dark:bg-gray-700 dark:border-gray-600 mr-3"></input>
    <input placeholder="new option"></input>
    <label htmlFor="country-option-1" className="block ms-2  text-sm font-medium text-gray-900 dark:text-black-300">
    </label>
  </div>

  <div className="flex items-center mb-4">
    <input id="country-option-2" type="radio" name="countries"  className="w-4 h-4 border-gray-300  dark:bg-gray-700 dark:border-gray-600 mr-3"></input>
    <input placeholder="new option"></input>

    <label htmlFor="country-option-2" className="block ms-2 text-sm font-medium text-gray-900 dark:text-black-300">
    </label>
  </div>

  <div className="flex items-center mb-4">
    <input id="country-option-3" type="radio" name="countries"  className="w-4 h-4 border-gray-300  dark:bg-gray-700 dark:border-gray-600 mr-3" ></input>
    <input placeholder="new option"></input>

    <label htmlFor="country-option-3" className="block ms-2 text-sm font-medium text-gray-900 dark:text-black-300">
    </label>
  </div>

  <div className="flex items-center mb-4">
    <input id="country-option-4" type="radio" name="countries" className="w-4 h-4 border-gray-300  dark:bg-gray-700 dark:border-gray-600 mr-3" ></input>
    <input placeholder="new option"></input>

    <label htmlFor="country-option-4" className="block ms-2 text-sm font-medium text-gray-900 dark:text-black-300">
    </label>
  </div>


</fieldset>

    </>
}

export default CreateOption
