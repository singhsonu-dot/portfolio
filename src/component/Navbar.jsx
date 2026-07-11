import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="fixed top-0 left=0 w-full border-b border-zinc-800 bg-zinc-950">
            <nav className="max-w-6x1 mx-auto flex items-center justify-between px-8 py-5">
                <h1 className="font-bold text-x1 text-white">
                    Sonu Kumar Singh
                </h1>

                <div className="flex gap-6 text-zinc-100">
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/project">Project</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </nav>
        </header>
    )
}

export default Navbar