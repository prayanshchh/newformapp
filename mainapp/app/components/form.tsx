import React from "react"

interface FormData{
    title: string,
    description?: string
}

const FormComp: React.FC<FormData> = ({title, description}) =>
{
    return <>
    <div className="max-w-3xl rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
        </div>
    </div>
    </>
}

export default FormComp

