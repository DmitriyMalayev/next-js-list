import Link from "next/link"

export const navLinks = [
    { href: "/about", label: "About" },
    { href: "/drinks", label: "Drinks" },
    { href: "/tasks", label: "Tasks" },
    { href: "/client", label: "Client" },
    { href: "/contact", label: "Contact" },
]

const NavBar = () => {
    return (
        <nav className="bg-base-300 py-4">
            <div className="navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row justify-center">
                <Link href={"/"} className="btn btn-primary row-span-full">Home</Link>
                <ul className="menu menu-horizontal md:ml-8">
                    {navLinks.map((link) => {
                        return (
                            <li>
                                <Link key={link.href} href={link.href}>{link.label}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}
export default NavBar