import React, { useState } from "react";
export default function useFormFields (){
    const [fields,setFields]=useState({})
    const handleFields=(e)=>{
        const {target}=e
        setFields({...fields,[target.name]:target.value})
    }
    return [fields,handleFields]
}