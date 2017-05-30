import React from 'react'
import Link from 'next/link'

function HomePage () {
    return (
        <main>
            <h1>Hola!!!</h1>
            <Link href="/about">
                <a>Ir a <em>/about</em></a>
            </Link>
            <style jsx>{`
                h1 {
                    color: red;
                }
            `}
            </style>
        </main>
    )
}

export default HomePage