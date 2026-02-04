import React, { useState } from 'react'
import { useForm } from "react-hook-form"

function Form() {

    const [showPassword, setShowPassword] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors, touchedFields, isValid },
        reset,
        watch,
    } = useForm({ mode: "onChange" })

    function onSubmit(data) {
        console.log(data)
    }

    const inputStyle = (field, value) => {
        if (!touchedFields[field]) return 'outline-gray-200'
        if (errors[field]) return 'outline-red-500'
        if (!value) return 'outline-gray-200'
        return 'outline-green-500'
    }

    function handleReset() {
        reset()
        setShowPassword(false)
    }




    return (
        <div className='min-h-screen w-full bg-[#ae7e6a] flex flex-col items-center gap-2 p-5'>
            <div>
                <h1 className='text-2xl font-bold '>Contact Form</h1>
            </div>

            <div>
                <form className=' flex flex-col p-4 gap-3 ' onSubmit={handleSubmit(onSubmit)}>

                    <div className=' flex flex-col '>
                        <label>Name</label>
                        <div className='flex gap-2 '>
                            <div>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className={`bg-white outline ${inputStyle('firstName', watch('firstName'))}`}
                                    {...register('firstName', {
                                        required: 'First name is required',
                                        minLength: { value: 3, message: 'At least 3 characters' },
                                        maxLength: { value: 20, message: 'Up to 20 characters current-21' },
                                    })}
                                    maxLength={21}
                                />

                                {touchedFields.firstName && errors.firstName && (
                                    <p className="text-red-500 text-xs">
                                        {errors.firstName.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Middle Name"
                                    className={`bg-white outline ${inputStyle('middleName', watch('middleName'))}`}
                                    {...register('middleName', {
                                        maxLength: { value: 20, message: 'Up to 20 characters current-21' },
                                    })}
                                    maxLength={21}
                                />

                                {touchedFields.middleName && errors.middleName && (
                                    <p className="text-red-500 text-xs">
                                        {errors.middleName.message}
                                    </p>
                                )}

                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="last Name"
                                    className={`bg-white outline ${inputStyle('lastName', watch('lastName'))}`}
                                    {...register('lastName', {
                                        required: 'last name is required',
                                        minLength: { value: 3, message: 'At least 3 characters' },
                                        maxLength: { value: 20, message: 'Up to 20 characters current-21 ' },
                                    })}
                                    maxLength={21}
                                />
                                {touchedFields.lastName && errors.lastName && (
                                    <p className="text-red-500 text-xs">
                                        {errors.lastName.message}
                                    </p>
                                )}

                            </div>

                        </div>


                        <div className='flex flex-col mt-2 '>
                            <label>Email</label>
                            <input
                                type="text"
                                placeholder="Email"
                                className={`bg-white outline ${inputStyle('email', watch('email'))}`}
                                {...register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Enter a valid email address",
                                    },

                                })}
                            />
                            {touchedFields.email && errors.email && (
                                <p className="text-red-500 text-xs">
                                    {errors.email.message}
                                </p>
                            )}

                        </div>




                        <div className='flex flex-col mt-2 '>
                            <label>Phone no</label>
                            <input
                                type="text"
                                placeholder="contact number"
                                className={`bg-white outline ${inputStyle('phno', watch('phno'))}`}
                                {...register('phno', {
                                    required: 'Phone no is required',
                                    pattern: {
                                        value: /^\d{10}$/,
                                        message: "Phone no must be of 10 digit",
                                    },
                                })}
                                maxLength={10}
                                minLength={10}
                            />
                            {touchedFields.phno && errors.phno && (
                                <p className="text-red-500 text-xs">
                                    {errors.phno.message}
                                </p>
                            )}
                        </div>



                        <div className='flex flex-col mt-2  '>
                            <label>Address</label>
                            <div className='flex gap-2'>
                                <div className='flex flex-col'>
                                    <input
                                        type="text"
                                        placeholder="Pin code"
                                        className={`bg-white w-20 outline ${inputStyle('pincode', watch('pincode'))}`}
                                        {...register('pincode', {
                                            required: 'Pin code is required',
                                            pattern: {
                                                value: /^\d{6}$/,
                                                message: "Pin code must be 6 digit",
                                            },
                                        })}
                                    />
                                    {touchedFields.pincode && errors.pincode && (
                                        <p className="text-red-500 text-xs">
                                            {errors.pincode.message}
                                        </p>
                                    )}
                                </div>

                                <div className="flex flex-col ">
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className={`bg-white w-full outline ${inputStyle('city', watch('city'))}`}
                                        {...register('city', {
                                            required: 'City is required',
                                            minLength: {
                                                value: 3,
                                                message: 'City must be at least 3 characters',
                                            },
                                            pattern: {
                                                value: /^[A-Za-z ]+$/,
                                                message: 'City can contain letters only',
                                            },
                                        })}
                                    />

                                    {touchedFields.city && errors.city && (
                                        <p className="text-red-500 text-xs">
                                            {errors.city.message}
                                        </p>
                                    )}
                                </div>


                                <div className='flex flex-col w-full'>
                                    <input
                                        type="text"
                                        placeholder="Address line-1"
                                        className={`bg-white w-full outline ${inputStyle('address1', watch('address1'))}`}
                                        {...register('address1', {
                                            required: 'Address is required',
                                            minLength: { value: 15, message: "Address must be of atleat 15 char" }
                                        })}
                                    />
                                    {touchedFields.address1 && errors.address1 && (
                                        <p className="text-red-500 text-xs">
                                            {errors.address1.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className='flex flex-col mt-2 '>
                                <input
                                    type="text"
                                    placeholder="Address line-2"
                                    className={`bg-white w-full outline ${inputStyle('address2', watch('address2'))}`}
                                    {...register('address2', {
                                        maxLength: { value: 100, message: 'Up to 100 characters ' },
                                    })}
                                    maxLength={101}
                                />
                                {touchedFields.address2 && errors.address2 && (
                                    <p className="text-red-500 text-xs">
                                        {errors.address2.message}
                                    </p>
                                )}
                            </div>
                        </div>




                        <div className="flex flex-col mt-2">
                            <label>Password</label>


                            <div className='relative'>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password"
                                    className={`bg-white w-full outline ${inputStyle('password', watch('password'))}`}
                                    {...register('password', {
                                        required: 'Password is required',
                                        pattern: {
                                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/,
                                            message:
                                                'Password must contain at least 8 characters, including uppercase, lowercase, number, and special character',
                                        },
                                    })}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(prev => !prev)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-sm text-gray-600"
                                >
                                    {showPassword ? 'hide' : 'show'}
                                </button>
                            </div>


                            {touchedFields.password && errors.password && (
                                <p className="text-red-500 text-xs">
                                    {errors.password.message}
                                </p>
                            )}


                        </div>

                    </div>

                    <button
                        type="submit"
                        disabled={!isValid}
                        className={`py-2 rounded text-white transition mt-20
                                ${isValid ? 'bg-black cursor-pointer' : 'bg-gray-400 cursor-not-allowed'}
                                 `}>
                        Submit
                    </button>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="py-2 px-6 rounded border border-gray-400 text-gray-700 hover:bg-gray-100 transition"
                    >
                        Reset
                    </button>

                </form>
            </div>


        </div>
    )
}

export default Form