import Link from "next/link";

export default function Header(){
    return (
        <header className="bg-blue-400 text-white p-4">
            <nav className="max-w-4xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">UesleiTech</h1>
                <ul className="flex gap-8">
                    <li className="hover:bg-blue-500 rounded-sm px-2"><Link href={"/"}>Home</Link></li>
                    <li className="hover:bg-blue-500 rounded-sm px-2"><Link href={"/artigos"}>Artigos</Link></li>
                    <li className="hover:bg-blue-500 rounded-sm px-2"><Link href={"/sobre"}>Sobre</Link></li>
                </ul>
            </nav>
        </header>
    )
}