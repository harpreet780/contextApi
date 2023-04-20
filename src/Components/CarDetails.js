import React, { useContext, useState } from 'react';
import { CarOptions } from "../Pages/Home"

const CarDetails = () => {
    const [isSelected, setIsSelected] = useState([]);
    const [showSelectedCard, setShowSelectedCard] = useState(false);

    const carInfo = useContext(CarOptions);

    const splicedData = carInfo?.carlist?.slice(0, 10);
    console.debug(carInfo)

    const selectCard = (id) => {
        splicedData?.filter((carItem) => carItem.id === id).map((i) => {
            return (
                setIsSelected([...isSelected, i]),
                setShowSelectedCard(true)
            )
        })
    }

    return (
        <div>
            <button className='btn'>Total Price:</button>
            <span className='mx-2'><b>${carInfo?.showTotalPrice(isSelected)}</b></span>
            <div className='d-flex justify-content-center flex-wrap mt-5'>
                {splicedData?.map((item) => {
                    return (
                        <div className={`card ${showSelectedCard === true && "active-card"}`}
                            onClick={() => selectCard(item.id)}
                        >
                            <div className="d-flex align-items-center justify-content-between">
                                <p><b> Id:</b></p>
                                <p>{item.id}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><b>Car:</b></p>
                                <p>{item.car}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><b>Car Modal:</b></p>
                                <p>{item.car_model}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><b>Modal Year:</b></p>
                                <p>{item.car_model_year}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><b>Car Color:</b></p>
                                <p>{item.car_color}</p>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <p><b>Car Price:</b></p>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CarDetails;