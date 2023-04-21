'use client';

import Link from 'next/link'
import classes from './menu.module.scss'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react';

export default function Menu(){

    return (
        <aside className={ classes.Tab }>
            <Item icon={ `home` } href='/'>início</Item>
            <Item icon={ `search` } href='/open'>busca</Item>
            <Item icon={ `build` } href='/'>configurações</Item>
        </aside>
    )
}

function Item({ icon = `extension`, href = `/`, children }){
    const pathname = usePathname();
    const [computedClasses, setComputedClasses] = useState( [ classes.Item ].join(' ') )

    useEffect(()=>{
        if( href === pathname ){
            setComputedClasses([ classes.Item, classes.Active ].join(' '))
        }else{
            setComputedClasses([ classes.Item ].join(' '))
        }
    },[pathname, href])

    return (
        <Link href={ href } className={ computedClasses } title={ pathname }>
            <span className={`material-symbols-rounded ${ classes.Icon }`}>{ icon }</span>
            <span className={ classes.Label }>{ children }</span>
        </Link>
    )
}

