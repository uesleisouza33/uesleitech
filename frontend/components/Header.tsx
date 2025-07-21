"use client"

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [open, setOpen] = useState(false);
    return (
        <header className="bg-blue-400 text-white p-4">
            <nav className="max-w-4xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">UesleiTech</h1>

                {/* Botão mobile */}
                <button onClick={() => { setOpen(!open) }} className="md:hidden" aria-label="Abrir menu">
                    {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>

                {/* Menu desktop */}
                <ul className="hidden md:flex gap-8">
                    <li className="hover:bg-blue-500 rounded-sm px-2"><Link href={"/"}>Home</Link></li>
                    <li className="hover:bg-blue-500 rounded-sm px-2"><Link href={"/artigos"}>Artigos</Link></li>
                    <li className="hover:bg-blue-500 rounded-sm px-2"><Link href={"/sobre"}>Sobre</Link></li>
                </ul>
            </nav>

            {open && (
                <ul className="md:hidden bg-blue-400 px-4 py-2 space-y-4 text-center transition-all duration-500 overflow-hidden">
                <li className="hover:bg-blue-500 rounded-sm px-2"><Link href={"/"}>Home</Link></li>
                <li className="hover:bg-blue-500 rounded-sm px-2"><Link href={"/artigos"}>Artigos</Link></li>
                <li className="hover:bg-blue-500 rounded-sm px-2"><Link href={"/sobre"}>Sobre</Link></li>
            </ul>
            )}

        </header>
    )
}

