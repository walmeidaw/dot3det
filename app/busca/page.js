'use client';

import { useSearchParams } from 'next/navigation';

export default function Page() {
    const searchParams = useSearchParams();
    const search = searchParams.get('id')
    
    return <section>
        <header>
            <h1>Busca {search && `:: ${search}`}</h1>
        </header>
    </section>
}