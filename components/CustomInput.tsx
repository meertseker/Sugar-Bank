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
import { Control } from 'react-hook-form'
import {z} from "zod"
import { authFormSchema } from '@/lib/utils'
import { FieldPath } from 'react-hook-form'

interface CustomInput {
  form : Control<z.infer<typeof authFormSchema>>,
  name: FieldPath<z.infer<typeof authFormSchema>>,
  label : string,
  placeholder: string

}

const CustomInput = ({control, name , label , placeholder,type}) => {
  return (
    <div>
      <FormField
                control={control}
                name={name}
                render={({ field }) => (
                  <div className='form-item'>
                    <FormLabel className='form-label'>{label}</FormLabel>
                    <div className='flex w-full flex-col'>
                      <FormControl>
                        <Input
                          placeholder={placeholder}
                          className='input-class'
                          type = {type}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className='mt-2 form-message '/>

                </div>      
           </div>
         )}
      />
    </div>
  )
}

export default CustomInput
