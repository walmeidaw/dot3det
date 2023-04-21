'use client';

import { useSearchParams } from 'next/navigation';

export default function Page() {
    const searchParams = useSearchParams();
    const search = searchParams.get('id');

    return <div>{ search }</div>;
}