"use client";

import React from 'react'
import Link from "next/link"
import Image from 'next/image'
import { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomInput from './CustomInput';
import { Loader2 } from 'lucide-react';
import { authFormSchema } from '@/lib/utils';

const formSchema = z.object({
  email: z.string().email(),})

const AuthForm = ({type}: {type : string}) => {
  
  const [user,setUser] = useState(null)
  const [isLoading, setisLoading] = useState(false);

  const formSchema = authFormSchema(type)

    // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
    email: "",
    },
  })

    // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      setisLoading(true);
      console.log(values)
      setisLoading(false);

    }

  return (
    <section className='auth-form'>
      <header className='flex flex-col gap-5 md:gap-8'> 
      <Link href="/" className=" mb-12 cursor-pointer flex items-center gap-1 ">
          <Image 
            alt="SugarBank" 
            src="/icons/logo.svg" 
            width={34} 
            height={34} 
          />
          <h1 className='text-26 font-ibm-plex-serif text-black-1'>
            SugarBank
          </h1>
        </Link>
        <div className='flex flex-col gap-1 md:gap-3'>
          <h1 className=' text-24 lg:text-26 font-semibold text-gray-900'>
            {user
            ? "Link Account"
          : type === "sign-in"
            ? "Sign In"
            : "Sign Up"
            }
          <p className='text-16 font-normal text-gray-600'> 
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className='flex flex-col gap-4'>
          {/*Plaid Link*/}
        </div>
      ): (
        <>
          {type === "sign-in" ? (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              
              <CustomInput
                control = {form.control}
                name = "email"
                label = "Email"
                placeholder="Enter your Email"
                type = "email"
              />
              <CustomInput
                control = {form.control}
                name = "password"
                label = "Password"
                placeholder="Enter your Password"
                type = "password"
              />

              <div className='flex flex-col gap-4'>
              <Button type="submit" disabled = {isLoading} className='form-btn'>
                {isLoading ? (
                  <>
                    <Loader2 size ={20} 
                    className = "animate-spin"/> &nbsp;
                    Loading...
                  </>
                ): type === "sign-in"
                    ? "Sign In" : "Sign Up"}

              </Button>
              </div>
            </form>
          </Form>
          ) : (
            
            <Form {...form}>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-8">  
              
                <div className='flex gap-4'>
                  <CustomInput
                    control={form.control}
                    name="firstname"
                    label="First Name"
                    placeholder="Enter your First Name"
                  />
                  <CustomInput
                    control={form.control}
                    name="lastname"
                    label="Last Name"
                    placeholder="Enter your Last Name"
                  />
                </div>

                <CustomInput
                  control={form.control}
                  name="address"
                  label="Address"
                  placeholder="Enter your specific address"
                />
                <div className='flex gap-4'>
                  <CustomInput
                    control={form.control}
                    name="state"
                    label="State"
                    placeholder="ex: NY"
                  />
                  <CustomInput
                    control={form.control}
                    name="postalcode"
                    label="Postal Code"
                    placeholder="ex: 11101"
                  />
                </div>

              <div className="flex gap-4">
                <CustomInput
                  control={form.control}
                  name="dob"
                  label="Date of Birth"
                  placeholder="yyyy-mm-dd"
                />
                  
                <CustomInput
                  control={form.control}
                  name="ssn"
                  label="SSN"
                  placeholder="ex: 1234"
                />
              </div>


                <CustomInput
                  control={form.control}
                  name="email"
                  label="Email"
                  placeholder="Enter your Email"
                  type="email"
                />
                <CustomInput
                  control={form.control}
                  name="password"
                  label="Password"
                  placeholder="Enter your Password"
                  type="password"
                />
              </div>


              <div className='flex flex-col gap-4'>
              <Button type="submit" disabled = {isLoading} className='form-btn'>
                {isLoading ? (
                  <>
                    <Loader2 size ={20} 
                    className = "animate-spin"/> &nbsp;
                    Loading...
                  </>
                ): type === "sign-in"
                    ? "Sign In" : "Sign Up"}

              </Button>
              </div>
            </form>
          </Form>
          )}
          <footer className='flex justify-center gap-1'>
            <p className='text-14 font-normal text-gray-600'>
              {type === " sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link href = {type === "sign-in" ? "/sign-up" 
            : "sign-in"} className='form-link'>
              {type === "sign-in" ? "Sign up" : "Sign in"}
            </Link>
          </footer>
        </>
      )}
    </section>
  )
}

export default AuthForm
