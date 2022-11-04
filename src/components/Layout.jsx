import Link from "next/link"
import styles from "../styles/Navigation.module.css";


export default function Layout(props) {

return (

    <div className={styles.Layout} >
         <div className={styles.Cabecalho} >
            <h1>{props.title ?? 'Mais um exemplo'}</h1>
         <Link href="/">Voltar</Link>
         </div>
    <div className={styles.conteudo} >
          {props.children}
        </div>
       
    </div>
)

}