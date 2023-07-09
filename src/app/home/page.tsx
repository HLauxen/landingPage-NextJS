"use client"

import ImageHome from '../../assets/Home/pexels-bich-tran-669996.jpg'
import Image from 'next/image'
import styles from './home.module.css'
import { useRef, useState } from 'react'
import { ArrowDown, ArrowUp, CaretDoubleDown, CaretDoubleUp, Check } from 'phosphor-react';
import classNames from 'classnames'
import { useRouter } from 'next/navigation'

export default function Home() {
    const ref = useRef<any>()
    const [clicked, setClicked] = useState(false)
    const [clickedUp, setClickedUp] = useState(false)
    const [secound, setSecound] = useState(false)
    const [displayButton, setDisplayButton] = useState(false)
    
    const router = useRouter();

    const scrollScreen = () => {
        
        setClicked(true)
        setTimeout(() => {
            window.scrollTo({
                top: ref.current.offsetTop,
                left: 0,
                behavior: 'smooth'
            })
            setClicked(false)
            setSecound(true)
        }, 500)
    }
    const scrollScreenUp = () => {
        
        setClickedUp(true)
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
            setClickedUp(false)
        }, 500)
    }
    
    const routerToForm = () => {
        setDisplayButton(true);
        router.push('/form');
    }

    return (
        <div className={styles.container}>
                
            <div  ref={ref} className={styles.description}>
                <div className={styles.description__details}>
                    <h1>Tenha um time de marketing atuando no crescimento do seu negócio</h1>
                    {/* <a href="/">Return</a> */}
                </div>
                <button className={classNames({
                    [styles.clicked]: clicked,
                    
                })} onClick={scrollScreen}><CaretDoubleDown className={styles.img} size={25} /></button>
            </div>

            <div ref={ref} className={styles.advertising}>
                <div className={classNames({
                    [styles.advertising__details]: true,
                    [styles.advertising__details__clicked]: secound
                })}>
                    <h1>Você está <strong>satisfeito</strong> com faturamento da sua empresa?</h1>
                    <p className={styles.p__principal}>Se a resposta for <strong>NÃO</strong>, o meu método de Landing Page pode te ajudar. Você não vai ficar  mais atrasado enquanto seus concorrentes estão faturando muito no mundo digital.Sem precisar correr atrás dos seus clientes, você transforma o seu negócio numa máquina de fazer dinheiro pela internet, vendendo mais e todos os dias.</p>
                    <p className={styles.p__secundario}>Se a resposta for <strong>NÃO</strong>, o meu método de <strong>Landing Page</strong> pode te ajudar. Você transforma o seu negócio numa <strong>máquina de fazer dinheiro</strong> pela internet, vendendo mais e todos os dias.</p>
                </div>
            </div>

            <div /* ref={ref} */ className={styles.about}>
                <div className={styles.about__details}>
                    <h1>Quem é Nome Teste?</h1>
                    <p>Somos um time especializado em criação de Landing Page, para ajudar a sua empresa a vender mais, proporcionando campanhas mais avançadas, além de sugestões e dicas que visam seu sucesso!</p>
                    <button  className={classNames({
                        [styles.buttonDisabled] : true,
                        [styles.buttonActive] : displayButton
                    })} onClick={routerToForm} type="submit">Solicitar</button>
                    <Check size={30} className={classNames({
                        [styles.check]: true,
                        [styles.checkActive] : displayButton
                    })}/> 
                </div>
                <button className={classNames({
                    [styles.clickedUpButton]: true,
                    [styles.clickedUp]: clickedUp
                })} onClick={scrollScreenUp} ><CaretDoubleUp size={25} /></button>
            </div>
        </div>
    )
}