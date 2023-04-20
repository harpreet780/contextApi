import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import CarDetails from '../Components/CarDetails';

const CarOptions = createContext();

const Home = () => {
    const [carlist, setCarlist] = useState();

    const CarView = async () => {
        return await axios.get('https://myfakeapi.com/api/cars').then((res) => {
            setCarlist(res.data.cars)
        }).catch((error) => {
            console.log(error)
        })
    }
    const showTotalPrice = (totalPrice = []) => {
        let total = totalPrice.map((item) => {
            return item.price.replace(/\$/g, '')
        })
        let findTotalPrice = total.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
        return findTotalPrice.toFixed(2);
    };

    useEffect(() => {
        CarView()
    }, [])

    return (
        <div className='p-5'>
            <h2 className='text-center text-decoration-underline'>
                Implement ContextApi
            </h2>
            <CarOptions.Provider value={{ carlist, showTotalPrice }}>
                <CarDetails />
            </CarOptions.Provider>
        </div>
    )
}

export default Home;
export { CarOptions };