'use client';
import { useEffect, useState } from "react";
import FormComp from "../components/form";


interface FormData {
    title: string;
    description?: string;
    id: string;
}
const formspage : React.FC =  () =>{

    const [forms, setforms] = useState<FormData[]>([]);
    useEffect(() => {
        const fetchForms = async () => {
            try {
                const response = await fetch('/api/forms', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                const idResponse = await fetch('/api/token');
                const idData = await idResponse.json();
                localStorage.clear();
                localStorage.setItem("userId", idData.id);
                console.log(localStorage.getItem("userId"));
                if (!response.ok) {
                    throw new Error("Couldn't fetch forms");
                }
                const data = await response.json();
                setforms(data.forms);
            } catch (err) {
                console.error(err);
            }
        };

        fetchForms();
    }, []); 
    return (
        <>
        <div className="space-y-4">
            {forms.map((form)=> (
                <FormComp id={form.id} title= {form.title}></FormComp>
            ))}
        </div>
        </>
    )
}

export default formspage;
