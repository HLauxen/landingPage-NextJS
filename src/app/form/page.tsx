"use client"

import styles from './form.module.css'
import { useState } from "react";
import classNames from 'classnames'

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useSearchParams } from 'next/navigation';

import {AxiosError} from "axios";
import axios from "axios";
import { Check } from "phosphor-react";

const registerFormSchema = z.object({
    email: z.string()
        /* .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, {
            message: 'Email indefinido'
        }) */
        .transform(email => email.toLocaleLowerCase()),
    name: z.string()
        /* .min(3, { message: 'O nome precisa ter pelo menos 3 letras' }) */,
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Form() {
    const [focus, setFocus] = useState(false)
    const [focusEmail, setFocusEmail] = useState(false)
    const [displayButton, setDisplayButton] = useState(false)

    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<RegisterFormData>({
        resolver: zodResolver(registerFormSchema),
    })
    const searchParams = useSearchParams()

    /* useEffect(() => {
        if (searchParams.get('email')) {
            setValue('email', String(searchParams.get('email')))
        }
    }, [searchParams.get?.('email'), setValue] [setValue]) */
    
    async function HandleRegister(data: RegisterFormData) {
        setDisplayButton(true);
        
        try {
            await axios.post('api/users', {
                name: data.name,
                email: data.email,
                
            }, {
                headers: {
                    'content-type': 'text/json'
                }
            })
        
        }catch (err) {
            if (err instanceof AxiosError && err?.response?.data?.message) {
                alert(err.response.data.message);
                return;
            }
            console.error(err)
        }
    }

    const changeFocus = () => {
        setFocus(true)
    }
    const outFocus = () => {
        setFocus(false)
    }
    const changeFocusEmail = () =>  {
        setFocusEmail(true)
    }
    const outFocusEmail = () => {
        setFocusEmail(false)
    }



    return(
        <div className={styles.container}>
            
            <div  className={styles.data}>
                <form  onSubmit={handleSubmit(HandleRegister)} className={styles.data__details}>
                    <h1>Solicite um <strong>orçamento</strong> com o <strong>nosso time!</strong></h1>
                    <p>Preencha o formulário abaixo, e nossa equipe entrará em contato com você.</p>
                    
                    <div className={styles.inputBox}>
                        <input  className={classNames({
                            [styles.input]: true,
                            [styles.input__focus]: focus
                        })} onFocus={changeFocus} /* onBlur={outFocus} */  {...register('name')}/>
                        <label className={classNames({
                            [styles.label]: true,
                            [styles.label__focus]: focus
                        })} htmlFor="name">Nome completo</label>
                    </div>
                    
                    <div className={styles.inputBox} >
                        <input  className={classNames({
                            [styles.input__email]: true,
                            [styles.input__focus__email]: focusEmail
                        })} type="email" id="email" onFocus={changeFocusEmail} /* onBlur={outFocusEmail} */  {...register('email')}/>
                        <label className={classNames({
                            [styles.label__email]: true,
                            [styles.label__focus__email]: focusEmail
                        })} htmlFor="email">Digite seu melhor e-mail</label>
                    </div>
                    
                    <button  className={classNames({
                        [styles.buttonDisabled] : true,
                        [styles.buttonActive] : displayButton
                    })} type="submit" disabled={isSubmitting}>Solicitar</button>
                    <Check size={30} className={classNames({
                        [styles.check]: true,
                        [styles.checkActive] : displayButton
                    })}/> 
                </form>
            </div>

            <div className={styles.spacing}>
                    <div className={styles.spacing__text}>
                        <p>Alavanque o seu negócio com o melhor especialista do mercado digital.</p>
                    </div>
                    <div className={styles.spacing__text}>
                        <p>Conhecimento tirado direto do campo de batalha, fruto de milhões de reais investidos em ads online.</p>
                    </div>
                    <div className={styles.spacing__text}>
                        <p>Aulas atualizadas com as últimas novidades, técnicas e estratégias para anunciar nas maiores plataformas.</p>
                    </div>
            </div>
        </div>
    )
}