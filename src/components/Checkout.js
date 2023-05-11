import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';

function Info() {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(new Date());
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: ''
  });
//   function goTocheck(){
//     navigate("/check",{state: {customerInfo:customerInfo}})
// }

  const [eventInfo, setEventInfo] = useState({
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    setupDate: '',
    setupTime: '',
    location: '',
    paymentMethod: '',
    transportCharge: '',
    distance: ''
  });

  const [records, setRecords] = useState([]);
  const handleSubmit = (e) =>{
    e.preventDefault();
    const newRecord = {...customerInfo, id:new Date().getTime().toString()};

    setRecords([...records, newRecord])

    setCustomerInfo({name:"",email:"", address:"",city:"",state:"",zip:""})
  }



  

  function handleInputChange(event) {
    const { name, value } = event.target;
    setCustomerInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleEventInputChange(event) {
    const { name, value } = event.target;
    setEventInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log('Customer Info:', customerInfo);
//     console.log('Event Info:', eventInfo);
//   }

  return (
    <div>
      <h1>Information</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={customerInfo.name} onChange={handleInputChange} required /><br/><br/>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={customerInfo.email} onChange={handleInputChange} required /><br/><br/>

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" value={customerInfo.address} onChange={handleInputChange} required /><br/><br/>

        <label htmlFor="city">City:</label>
        <input type="text" id="city" name="city" value={customerInfo.city} onChange={handleInputChange} required /><br/><br/>

        <label htmlFor="state">State:</label>
        <input type="text" id="state" name="state" value={customerInfo.state} onChange={handleInputChange} required /><br/><br/>

        <label htmlFor="zip">Zip:</label>
        <input type="text" id="zip" name="zip" value={customerInfo.zip} onChange={handleInputChange} required /><br/><br/>

        <label htmlFor="startDate">Start Date:</label>
        <input type="date" id="startDate" name="startDate" value={startDate.toISOString().split('T')[0]} onChange={(e) => setStartDate(new Date(e.target.value))} /><br/><br/>

        <label htmlFor="startTime">Start Time:</label>
        <input type="time" id="startTime" name="startTime" value={eventInfo.startTime} onChange={handleEventInputChange} required /><br/><br/>

        <label htmlFor="endDate">End Date:</label>
        <input type="date" id="endDate" name="endDate" value={eventInfo.endDate} onChange={handleEventInputChange} required /><br/><br/>

        <label htmlFor="endTime">End Time:</label>
        <input type="time" id="endTime" name="endTime" value={eventInfo.endTime} onChange={handleEventInputChange} required /><br/><br/>

        <label htmlFor="setupDate">Setup Date:</label>
        <input type="date" id="setupDate" name="setupDate" value={eventInfo.setupDate} onChange={handleEventInputChange} required /><br/><br/>

        <label htmlFor="setupTime">Setup Time:</label>
        <input type="time" id="setupTime" name="setupTime" value={eventInfo.setupTime} onChange={handleEventInputChange} required /><br/><br/>

        {/* <Button  onClick={goTocheck}> save</Button> <br/> */}
        <Button type='submit'>Save</Button>

        <div>
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
        </div>
</form>
</div>
  )}
  export default Info

