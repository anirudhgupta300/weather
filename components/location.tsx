'use client'
import { useEffect } from "react";
import Cookies from 'js-cookie';
import {Coords}from "../actions/action"
export default function Geolocation(){
    useEffect(()=>{ // runs every time the components mount
        /*navigator: a global browser object that contain information about user browser
        geolocation: is a property of the navigator object that contains the Geolocation API */
        if(navigator.geolocation){ 
            navigator.geolocation.getCurrentPosition((Position) =>{
                const location: Coords ={
                    lat: Position.coords.latitude,
                    lng: Position.coords.longitude,
                    accuracy: Position.coords.accuracy,
                    timestamp: Date.now()
                };
                /* JSON.stringify: converts a object into string so we can store it into cookie
                 */
                Cookies.set('User_coords', JSON.stringify(location)),{
                    expires: 7,  //Will expire in 7 days 
                    secure: true,
                    samesite: 'strict'
                }
            })
        }
    },[])
    return(null)
}