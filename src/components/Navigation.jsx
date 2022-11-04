import Link from "next/link";
import styles from "../styles/Navigation.module.css";

export default function Navigation(props){

return (

    <Link href={props.destino}>
        <div className={styles.Navigation} styles={{
            backgroundColor: props.cor ?? 'dodgerblue'
        }}>
             {props.text}
        </div>
    </Link>

)

}