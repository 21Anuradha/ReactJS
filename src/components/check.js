import React from 'react'
import { useLocation } from 'react-router-dom'

const check = () => {
    const location = useLocation();
    console.log(location.state)
  return (
    <>
        <div>{location.state.customerInfo}</div>

        {/* <div>
            {
                records.map((curElem) =>{
                    return (
                        <div className='showData'>
                            <p>{curElem.name}</p>
                            <p>{curElem.email}</p>
                            <p>{curElem.address}</p>
                            <p>{curElem.city}</p>
                            <p>{curElem.state}</p>
                            <p>{curElem.zip}</p>
                        </div>
                    )
                })
            }
        </div> */}
        {/* <div>{location.state.email}</div>
        <div>{location.state.address}</div>
        <div>{location.state.city}</div>
        <div>{location.state.state}</div>
        <div>{location.state.zip}</div> */}
    </>
  )
}

export default check
