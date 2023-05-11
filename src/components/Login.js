import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_img from './Sign_img'
import { useNavigate } from 'react-router-dom'
// import Checkout from './Checkout'
import { NavLink } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const history = useNavigate();  //use navigate Hook for redirect page

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    // const [data, setData] = useState([]);
    // console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryou");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            // toast.error('email field is requred', {
            //     position: "top-center",
            // });
            alert("email field is requred")
        } else if (!email.includes("@")) {
            // toast.error('plz enter valid email addres', {
            //     position: "top-center",
            // });
            alert("enter valid email addres")
        } else if (password === "") {
            // toast.error('password field is requred', {
            //     position: "top-center",
            // });
            alert("password field is requred")
        } else if (password.length < 5) {
            // toast.error('password length greater five', {
            //     position: "top-center",
            // });
            alert("password length greater five")
        } else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/details")
                }
            }
        }

    }

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign IN</h3>
                        <Form >

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        {/* <p className='mt-3'>Already Have an Account <span>SignIn</span> </p> */}
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/info">Info</NavLink></span> </p>
                    </div>
                    <Sign_img />
                    {/* <Checkout/> */}
                </section>
                {/* <ToastContainer /> */}
            </div>
            {/* <Checkout/> */}
        </>
    )
}

export default Login