import style from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estiloso() {

    return (
        <Layout title="Exemplos de Css Modularizado">
        <div className={style.roxo}>
            <h1>Estilo usando CSS Módulos</h1>
            
        </div>
        </Layout>
      
    )

}