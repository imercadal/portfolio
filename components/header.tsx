"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()  

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return(
        <header className="fixed w-full bg-white z-50">
            <div className="container mx-auto px-4 py-6 tracking-wide">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-lg font-light tracking-widest">
                        IRENE MERCADAL
                    </Link>

                    {/* Mobile menu button */}
                    <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop navigation */}
                    <nav className="hidden md:block">
                        <ul className="flex text-sm space-x-8">
                            <li>
                                <Link href="/cinematography" className={`hover:text-orange-500 transition-colors ${
                                    pathname === '/cinematography' ? 'font-bold' : ''
                                }`}>
                                CINEMATOGRAPHY
                                </Link>
                            </li>
                            <li>
                                <Link href="/directing" className={`hover:text-orange-500 transition-colors ${
                                    pathname === '/directing' ? 'font-bold' : ''
                                }`}>
                                DIRECTING
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className={`hover:text-orange-500 transition-colors ${
                                    pathname === '/about' ? 'font-bold' : ''
                                }`}>
                                ABOUT
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Mobile navigation */}
                {isOpen && (
                    <nav className="fixed md:hidden pt-4 pb-2 inset-0 z-50">
                        <ul className="flex flex-col space-y-4">
                            <li>
                                <Link
                                href="/cinematography"
                                className="block py-2 hover:text-orange-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                                >
                                CINEMATOGRAPHY
                                </Link>
                            </li>
                            <li>
                                <Link
                                href="/directing"
                                className="block py-2 hover:text-orange-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                                >
                                DIRECTING
                                </Link>
                            </li>
                            <li>
                                <Link
                                href="/about"
                                className="block py-2 hover:text-orange-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                                >
                                ABOUT
                                </Link>
                            </li>
                            <li>
                                <Link
                                href="/other"
                                className="block py-2 hover:text-orange-500 transition-colors"
                                onClick={() => setIsOpen(false)}
                                >
                                OTHER
                                </Link>
                            </li>
                        </ul>
                    </nav>
                )}
            </div>
        </header>
    )
}