export default function Jsx() {

const title = <h1>Title JSX</h1> 

function Sub () {
    return   <h2>{"Testando"}</h2>
}

return (
    <div>
          {title}
            {Sub}
         <p>
           {JSON.stringify({nome:"Pedro Gabriel", idade: 20})}
          </p>
    </div>
 
)

};