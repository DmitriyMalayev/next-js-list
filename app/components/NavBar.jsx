"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'

export const navLinks = [
    { href: "/", label: "Home" },
    { href: "/client", label: "Client" },
    { href: "/drinks", label: "Drinks" },
    { href: "/prisma-example", label: "Prisma" },
    { href: "/tasks", label: "Tasks" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
]

const NavBar = () => {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <nav className="bg-base-300 py-4">
            <div className="navbar justify-center">
                <ul className="menu menu-horizontal md:ml-8">
                    {navLinks.map((link) => {
                        return (
                            <li key={link.href}>
                                <Link className={`${pathname === link.href ? "text-blue-500 focus:text-blue-500 underline " : "text-blue-100"}`} key={link.href} href={link.href}  >{link.label}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
export default NavBar