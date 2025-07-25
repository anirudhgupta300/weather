'use client'
import { Redirect } from "../actions/action"
import { FormEvent, useState } from "react";


export default function input(){
    const[city, setCity] = useState("");
   return (
        <div className="flex items-center justify-center py-12 bg-black">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md mx-4">
                <h2 className="text-2xl font-bold text-white text-center mb-6">
                    Search Weather
                </h2>
                
                <form action={Redirect} className="space-y-4">
                    <div className="relative">
                        <input 
                            type="text" 
                            value={city} 
                            name="city" 
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter city name..."
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all duration-200 text-white placeholder-gray-400"
                        />
                    </div>
                    
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                    >
                        Get Weather
                    </button>
                </form>
            </div>
        </div>
    );
}
