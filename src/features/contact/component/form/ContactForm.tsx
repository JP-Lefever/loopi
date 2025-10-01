"use client"

import styles from "./contactForm.module.css"
import dataForm from "@/assets/data/contact.json"
import {SubmitHandler, useForm} from "react-hook-form";
import dataErrors from "@/assets/data/errors.json"
import {ContactProps} from "@/types/definitions";
import {sendEmail} from "@/features/contact/component/action";
import {toast} from "react-toastify";

export default function ContactForm(){

    const {register, handleSubmit, formState: {errors}, reset} = useForm<ContactProps>();

    const onSubmit : SubmitHandler<ContactProps> = async (data : ContactProps)=>{

        const response = await sendEmail(data)

        if(response.success){
            toast.success(response.data)
            reset()
        } else{
            toast.error(response.error)
        }


    }

    return (
        <>
        <section>
            <h2 className={styles.h2}>{"Contact"}</h2>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <fieldset className={styles.info}>
                    <div role="group">
                        <label htmlFor="firstName">{dataForm.firstName}</label>
                        <input type="text"  placeholder="*************" {...register("firstName", {
                            required: dataErrors.require,
                            pattern : {
                                value : /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,30}$/,
                                message : dataErrors.invalid,
                            }
                        })}  />
                        {errors.firstName &&
                            <p>{errors.firstName?.message as string}</p>}
                    </div>
                    <div role="group">
                        <label htmlFor="lastName">{dataForm.lastName}</label>
                        <input type="text"  placeholder="*************" {...register("lastName", {
                            required: dataErrors.require,
                            pattern: {
                                value: /^[A-Za-zÀ-ÖØ-öø-ÿ' -]{2,30}$/,
                                message: dataErrors.invalid,
                            }
                        })}  />
                        {errors.lastName &&
                            <p>{errors.lastName?.message as string}</p>}
                    </div>
                    <div role="group">
                        <label htmlFor="email">{dataForm.email}</label>
                        <input type="email"  placeholder="*************" {...register("email", {
                            required: dataErrors.require,
                            pattern: {
                                value: /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/,
                                message: dataErrors.mail,
                            }
                        })}  />
                        {errors.email &&
                            <p>{errors.email?.message as string}</p>}
                    </div>
                    <div role="group">
                        <label htmlFor="phone">{dataForm.phone}</label>
                        <input type="text"  placeholder="*************" {...register("phone", {
                            required: dataErrors.require,
                            pattern: {
                                value: /^(?:\+33\s?|0)[1-9](?:[\s.-]?\d{2}){4}$/,
                                message: dataErrors.tel,
                            }
                        })}  />
                    </div>
                </fieldset>
                <fieldset className={styles.subject}>
                    <label htmlFor="subject">{dataForm.subjectLabel}</label>
                    <select className={styles.select} {...register("subject")}>
                        {dataForm.subject.map(subject => (
                            <option key={subject.id} value={subject.label}>{subject.label}</option>
                        ))}
                    </select>
                </fieldset>
                <fieldset className={styles.message}>
                    <label htmlFor="message">{dataForm.message}</label>
                    <textarea placeholder="*************" {...register("message", {
                        required: dataErrors.require,
                        pattern: {
                            value: /^[^<>]{2,1000}$/,
                            message: dataErrors.require,
                        }
                    })} />
                    {errors.message &&
                        <p>{errors.message?.message as string}</p>}
                </fieldset>
                <button className={styles.button} type="submit">{dataForm.submit}</button>
            </form>
        </section>
        </>
    )
}