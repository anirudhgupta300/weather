// Routes enclosed in [someId] dir are route for /[someId] where someId is a dynamic value and which is accessible under the component in the page.tsx component via params prop which returns a promise
import CityCard from "@/components/CityCard";
import { GetData } from "@/actions/action";
import Input from "@/components/input";
export default async function page({params}:{
    params: Promise<{ city : string }>;
}){
    const CityName = (await params).city
    const data = await GetData(CityName)
    console.log(CityName)
    return(
        <div className="bg-black border border-gray-800 min-h-screen rounded-2xl p-8 text-white shadow-2xl w-full">
        <Input/>
        <CityCard data={data}/>
        </div>
    )
}