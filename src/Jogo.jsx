import { useState } from "react";

const arr = ['Lucão', 'Lucas', 'Lukinha']

export default function App() {
    const [pope, setPope] = useState(arr[1])
    console.log(pope)

    function exibir() {
        if(pope==='Lucas'){
            setPope('Lucão')
        }else{
            setPope('Lucas')
        }
    }

    return (
      <>
        <h1>{pope}</h1>
        <button onClick={exibir}>{pope}</button>
      </>
    );
}