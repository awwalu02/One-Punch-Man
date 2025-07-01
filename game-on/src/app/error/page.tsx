'use client';
import {useEffect} from 'react';

export default function ErrorPage(){
    const gerer = (count: number) => {
        const random = Math.floor(Math.random()*count);
        if (random == 1) {
            throw new Error("Error Testing")
        }
    };
    useEffect(() => {gerer(2)})
    
   
    return <>
    <h1>Error testing</h1>
    
    </>

}
   
