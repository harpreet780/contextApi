import React, { useContext } from 'react';
import { CarOptions } from "../Pages/Home"

const CarDetails = () => {
    const carInfo = useContext(CarOptions);

    return (

        <div>
            <div className='d-flex justify-content-center flex-wrap mt-5'>
                {carInfo?.carlist?.splice(0, 12).map((item) => {
                    return (
                        <div className="card">
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
                                <p><b>Car color:</b></p>
                                <p>{item.car_color}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default CarDetails;