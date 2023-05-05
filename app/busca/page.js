'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
    const [history, setHistory] = useState([]) 

    useEffect(()=>{
        let h = [ ...history ]
        if( navigator ){
            h.push( 'navigator' + JSON.stringify( navigator ) )
        }

        console.dir( navigator, { depth: null })

        if(navigator.devicePosture){
            h.push( 'navigator devicePosture' + JSON.stringify( navigator.devicePosture ) )
            setHistory( h )
        }

        setHistory( h )
        // navigator.devicePosture.addEventListener("change", () => {
        //     history.push(`The current posture is: ${navigator.devicePosture.type}!`);
        // })
    },[])
    
    return <section>
        <header>
            <h1>Teste</h1>
        </header>
        <div>
            { history.map( item => <div>{ item }</div>)}
        </div>
    </section>
}