import React from 'react'

import "./Register.css"

import { Formik, useFormik } from 'formik'
import { RegisterFormSchemas } from '../../schemas/RegisterFormSchemas'


const Register = () => {

    const submit = (values, action) => {
        // console.log(values)
        // console.log(action)

        setTimeout(() => {
            action.resetForm();
        }, 2000)

    }

    const { values, errors, handleChange, handleSubmit } = useFormik({

        initialValues:{
            email:"",
            username:"",
            age:"",
            password:"",
            confirm_password:"",
            term:""
        },
        validationSchema: RegisterFormSchemas,
        onSubmit: submit
    })

    // console.log(errors)
   
    return (
        <div className='Main'>
           
            <form onSubmit={handleSubmit}>

                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='email' onChange={handleChange} value={values.email} />
                {errors.email && <p>{errors.email}</p>}
                <br />

                <label htmlFor="username">Username</label>
                <input type="text" id='username' placeholder='username' onChange={handleChange} value={values.username} />
                {errors.username && <p>{errors.username}</p>}
                <br />

                <label htmlFor="age">Age</label>
                <input type="number" id='age' placeholder='age' onChange={handleChange} value={values.age} />
                {errors.age && <p>{errors.age}</p>}
                <br />

                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='password' onChange={handleChange} value={values.password} />
                {errors.password && <p>{errors.password}</p>}
                <br />

                <label htmlFor="confirm_password">Confirm password</label>
                <input type="password" id='confirm_password' placeholder='confirm password' onChange={handleChange} value={values.confirm_password} />
                {errors.confirm_password && <p>{errors.confirm_password}</p>}
                <br />
 
                <input type="checkbox" id='term' onChange={handleChange}  value={values.term}/> <label htmlFor="term">Term</label>
                {errors.term && <p>{errors.term}</p>}
                <br />

                <button type='submit' className='btn_class'>Send</button>
            </form>

        </div>
    )
}

export default Register
