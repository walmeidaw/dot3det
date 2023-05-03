'use client';

import Link from 'next/link'
import classes from './menu.module.scss'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function Menu(){
    const [ touchStart, setStart ] = useState({ x : 0 , y : 0 })
    const [ touchEnd, setEnd ] = useState({ x : 0 , y : 0 })
    const [ minimize, setMinimize ] = useState( false )

    function touchStartEvent( event ){
        const touch = event.changedTouches[0]
        const points = {
            x: touch.clientX,
            y: touch.clientY
        }

        setStart(points)
    }
    
    function touchEndEvent( event ){
        const touch = event.changedTouches[0]        
        const points = {
            x: touch.clientX,
            y: touch.clientY
        }
        setEnd(points)
    }

    function handleGesture(){
        // Swipe Right
        if( touchEnd.x > touchStart.x ){
            if( minimize ){
                setMinimize( false )
            }
            return;
        }

        // Swipe Left
        if( touchEnd.x < touchStart.x ){
            if( !minimize ){
                setMinimize( true )
            }
            return;
        }
    }

    useEffect(()=>{
        handleGesture()
    }, [touchEnd])

    function toogleMenu(){
        if( minimize ){
            setMinimize( false )
        }
    }

    return (
        <aside className={ `${ classes.Tab }${ minimize ? ` ${ classes.minimize }` : '' }` } onTouchStart={ touchStartEvent } onTouchEnd={ touchEndEvent } onClick={ toogleMenu }>
            <Item icon={ `home` } href='/' color={ `#008cff` }>Início</Item>
            <Item icon={ `search` } href='/busca' color={ `#ffbb00` }>Busca</Item>
            <Item icon={ `build` } href='/configuracoes' color={ `#5b6996` }>Configurações</Item>
        </aside>
    )
}

function Item({ icon = `extension`, href = `/`, children, color }){
    const pathname = usePathname();
    const [computedClasses, setComputedClasses] = useState( [ classes.Item ].join(' ') )

    useEffect(()=>{
        if( href === pathname ){
            setComputedClasses([ classes.Item, classes.Active ].join(' '))
        }else{
            setComputedClasses([ classes.Item ].join(' '))
        }
    },[pathname, href])

    let style = {}

    if( color ){
        style = { color }
    }

    return (
        <Link href={ href } className={ computedClasses } title={ children }>
            <span className={`material-symbols-rounded ${ classes.Icon }`} style={ style }>{ icon }</span>
            <span className={ classes.Label }>{ children }</span>
        </Link>
    )
}

