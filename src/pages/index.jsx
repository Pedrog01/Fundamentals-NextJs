import Navigation from "../components/Navigation";


 export default function Home(){
    return (
        <div style={{
            display: 'flex',
            justifyContent:'center',
            alignItems: 'center',
            flexWrap:'wrap',
            height: '100vh'
        }} >
           <Navigation texto ="Estiloso" destino="/estiloso" />
           <Navigation texto ="Exemplo" destino="/Exemplo" cor="#9400d3"/>
           <Navigation texto ="JSX" destino="/jsx" cor="#9400d3" />
        </div>
    )
 }