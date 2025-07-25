import { GetData } from "@/actions/action";
import CityCard from "@/components/CityCard"
import Input from "@/components/input"
export default async function Page(){
  const ipResponse = await fetch('http://ip-api.com/json/?fields=61439')
  const ipData = await ipResponse.json();

  const data = await GetData(`${ipData.city}`);
 
  
  return (
    <div className="bg-black border border-gray-900 min-h-screen rounded-2xl p-8 text-white shadow-2xl w-full">
    <Input/>
    <CityCard data={data}/>
    </div>
    
  );
}