// Use formData parameter
'use server'
import { redirect } from "next/navigation";
import { cookies } from "next/headers";



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
export interface Coords{
    lat: number
    lng: number
    accuracy?: number;
    timestamp?: number;
} 

export async function Redirect(formData:FormData){
    const Name = formData.get("city");
    const city = Name?.toString()
    if(city){
        redirect(`/city/${city}`)
    }}
export async function GetCookieData(): Promise<Coords | null>{
    const CookieStore = await cookies();  
        const Cookie_data =  CookieStore.get('User_coords')?.value
    if(Cookie_data){
            return JSON.parse(Cookie_data) as Coords
    }
    else{
        return null;
    }
}

export async function GetData(lat:number|null, lng:number|null , city: string|null): Promise<WeatherData>{
 const apiKey = process.env.OPENWEATHER_API_KEY
    let Response = null
 if((lat && lng) === null){
    Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    
 }else{
    Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`)
 }

 if(!Response.ok){
    throw new Error(`Something went wrong ${Response.status}`)
 }

 return await Response.json();
}