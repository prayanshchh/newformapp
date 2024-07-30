import React from "react"



const CreateFormComp: React.FC<FormData> = () =>
{
    return <>
    <div className="max-w-3xl rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
            <input className="font-bold text-xl mb-2" type="text" placeholder="Title"></input>
            <p>
            <input className="text-gray-700 text-base" type="text" placeholder="description"></input>
            </p>
        </div>
    </div>
    </>
}

export default CreateFormComp
