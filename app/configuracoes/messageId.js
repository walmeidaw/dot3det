'use client';

import { useEffect, useState } from "react";
import localforage from "localforage";
import Style from './index.module.scss'

function MessageId(){
    const [token, setToken] = useState( null )
    const [copyed,setCopyed] = useState( false )

    function copy(){
        if( token ){
            navigator.clipboard.writeText(token)
            setCopyed(true)
            setTimeout(()=>{
                setCopyed(false)
            }, 5000 )
        }
    }

    useEffect(()=>{
        localforage.getItem('USER_TOKEN').then( value => {
            setToken( value )
        })
        return;
    },[])

    return (
        <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '.5rem' }}>
            <div className={ `${ Style.Bullet }${ copyed ? ` ${ Style.Active }` : '' }` } onClick={ copy }>
                <strong>Token: </strong>
                <span className={ Style.Info }>
                    { token ? token : '---' }
                </span>
            </div>
            { copyed && <span style={{ opacity: 0.6 }}>Copiado</span> }
        </div>
    )
}
export default MessageId