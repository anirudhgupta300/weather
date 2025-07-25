// Use formData parameter
'use server'
import { redirect } from "next/navigation";



let input:string= ""
export async function GetInput(formData:FormData){
    const Name = formData.get("CityName");
    if(Name === null){
        throw new Error("Enter the city name")
    }
    input = Name.toString();
    // console.log(input)

}

export interface WeatherData{
    name:string
    main:{
        temp: number
        feels_like: number
        humidity: number
    };
    weather: Array<{
        description: string,
        icon: string}>
    wind: {
        speed:number
    }
}

export async function Redirect(formData:FormData){
    const Name = formData.get("city");
    const city = Name?.toString()
    if(city){
        redirect(`/city/${city}`)
    }
}

export async function GetData(input:string): Promise<WeatherData>{
 const city:string| null = input;
 if(city=== null){
    throw new Error("Please enter a city name")
 }
 const Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee378d226fbe8451d08a27a922fd691b`)
 if(!Response.ok){
    throw new Error(`Something went wrong ${Response.status}`)
 }

 return await Response.json();
}