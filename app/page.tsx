
import { GetData, GetCookieData } from "@/actions/action";
import CityCard from "@/components/CityCard"
import Input from "@/components/input"
import Location from "@/components/location"
export default async function Page(){
  const Coords = await GetCookieData();
  let Data = null
  if(Coords== null){
   return new Error("Something went wrong")
   
   }else{
    const lat = Coords.lat;
    const lng = Coords.lng;
    Data = await GetData(lat ,lng,null);
   }


  
 
  
  return (
    <div className="bg-black border border-gray-900 min-h-screen rounded-2xl p-8 text-white shadow-2xl w-full">
    <Input/>
    <CityCard data={Data}/>
    <Location/>
    </div>
    
  );}