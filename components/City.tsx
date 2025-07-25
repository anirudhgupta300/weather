'use client'
import { GetData } from "../actions/action";
import { FormEvent, useState } from "react"
import { GetInput } from "../actions/action";
function city(){
    const[City, setCity] = useState("");
    const [submittedVal, setSubmittedVal] = useState("")  
        const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSubmittedVal(City);  // This triggers the query
    };  
    const data = GetData(submittedVal)

return(<>
<form action={GetInput}>
<input type="text" value={City} onChange={(e)=>setCity(e.target.value)} name="CityName"></input>{/*the srting will store in this until button is pressed */}
<button type="submit" onClick={handleSubmit}>Enter</button>
<p> { <p>Temperature: °C </p>}</p>
</form></>
) 
}

export default city;