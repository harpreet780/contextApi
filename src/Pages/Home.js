import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import CarDetails from '../Components/CarDetails';

const CarOptions = createContext();

const Home = () => {
    const [carlist, setCarlist]= useState();

    const CarView = async()=>{
        return await axios.get('https://myfakeapi.com/api/cars').then((res)=>{
            setCarlist(res.data.cars)
        }).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        CarView()
    },[])

    return (
        <div className='p-5'>
            <h2 className='text-center text-decoration-underline'>
                Implement ContextApi
            </h2>
            <CarOptions.Provider value={{carlist}}>
               <CarDetails/>
            </CarOptions.Provider>
        </div>
    )
}

export default Home;
export { CarOptions };