'use client'
import Link from 'next/link'
import React from 'react'

export default function BottomNav() {
    return (
        <div className="btm-nav bg-base-100 shadow-[0px_-10px_50px_0px_#00000024] text-primary">
            <Link href={'/demo/applications/dashboard'}>
                <button>
                    <img src='/menu-std/menu-home.png' width={24} height={24} className="h-5 w-5"></img>
                    <span className="btm-nav-label">Home</span>
                </button>
            </Link>
            <button>
                <img src='/menu-std/menu-recipes.png' width={24} height={24} className="h-5 w-5"></img>
                <span className="btm-nav-label">Recipes</span>
            </button>
            <button>
                <img src='/menu-std/menu-cattering.png' width={24} height={24} className="h-5 w-5"></img>
                <span className="btm-nav-label">Catering</span>
            </button>
            <button>
                <img src='/menu-std/menu-premium.png' width={24} height={24} className="h-5 w-5"></img>
                <span className="btm-nav-label">Premium</span>
            </button>
        </div>
    )
}
