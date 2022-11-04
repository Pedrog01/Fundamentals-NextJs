import Link from "next/link"
import style from "../styles/Layout.module.css"


export default function Layout(props) {

return (

    <div className={style.Layout} >
         <div className={style.Cabecalho} >
            <h1>{props.title ?? 'Mais um exemplo'}</h1>
         <Link href="/">Voltar</Link>
         </div>
    <div className={style.conteudo} >
          {props.children}
        </div>
       
    </div>
)

}