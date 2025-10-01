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
        <section className={styles.section}>
            <div role={"group"}>
                <h2 className={styles.h2}>{dataForm.title}</h2>
                <h3 className={styles.h3}>{dataForm.subtitle}</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <fieldset className={styles.info}>
                    <div role="group">

                        <input type="text"  placeholder={dataForm.firstName}{...register("firstName", {
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

                        <input type="text"  placeholder={dataForm.lastName} {...register("lastName", {
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

                        <input type="email"  placeholder={dataForm.email} {...register("email", {
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

                        <input type="text"  placeholder={dataForm.phone} {...register("phone", {
                            required: dataErrors.require,
                            pattern: {
                                value: /^(?:\+33\s?|0)[1-9](?:[\s.-]?\d{2}){4}$/,
                                message: dataErrors.tel,
                            }
                        })}  />
                    </div>
                </fieldset>
                <fieldset className={styles.subject}>

                    <select className={styles.select} {...register("subject")}>
                        {dataForm.subject.map(subject => (
                            <option key={subject.id} value={subject.label}>{subject.label}</option>
                        ))}
                    </select>
                </fieldset>
                <fieldset className={styles.message}>

                    <textarea placeholder={dataForm.message} {...register("message", {
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