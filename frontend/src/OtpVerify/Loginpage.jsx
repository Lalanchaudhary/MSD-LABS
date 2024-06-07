import React, { useRef, useState } from 'react'
import './Loginpage.css'
import msd from'../Assets/MSD.PNG'
import { Link } from 'react-router-dom'
// import axios from 'axios'
function SignupPage() {
    const [user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        password:""
    })

    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    // const AddUser=async(e)=>{
    //     e.preventDefault();
    //     alert("User Added Successfuly")
    //     try
    //     {
    //         await axios.post("http://localhost:9000/user",user)
    //         console.log("Done")
    //     }
    //     catch(error)
    //     {
    //         console.log("Error agya",error);
    //     }
    // }
    const inputRef=useRef();
    const [image,setImage]=useState('');
    const UploadImage=()=>{
        inputRef.current.click();
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log(file);
        setImage(file);
    };
    
    return (
        <div className="bdy">
            <form action='POST' className="main123">
                {/* <div className='upimage' onClick={UploadImage}>
                {image ? (
    <img src={URL.createObjectURL(image)} alt="" />
) : (
    <img src="https://cdn1.iconfinder.com/data/icons/unicons-line-vol-4/24/image-upload-1024.png" alt="" />
)}
                <input type='file' ref={inputRef} onChange={handleImageChange} style={{display:'none'}}/>
                </div> */}
                {/* <h2 className="heading">Fill the form for Users!</h2> */}
                <img src={msd} width={100}  alt="" />
                <input type="email" className="boxes1" onChange={handleChange} name="email" placeholder="E-mail" />
                <input type="password" className="boxes1" onChange={handleChange} name="password" placeholder="password" />
                <br />
               <Link to={"/admin"}> <button type='submit' className="btn1">Sign up</button></Link>
                <div className="links1">
                    <a id="log" href="/">Log in</a>
                    <a href="/">Forgot password?</a>
                </div>
            </form>
        </div>
    )
}

export default SignupPage
