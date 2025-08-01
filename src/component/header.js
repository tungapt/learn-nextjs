import Link from "next/link";
export default async function Header() {
    const res = await fetch('http://localhost:3001/api/category', {
        cache: 'no-cache',
    })
    if(!res.ok) {
        return(
            <ul>
                <li><Link href="/">Home</Link></li>
            </ul>
        );
    };
    const menu = await res.json();
    return (
        <nav>
            <ul className="flex align-center gap-4 w-[800px] min-h-[5vh] p-4 text-[15px] mx-auto bg-[#bebebe]">
                <li className="hover:text-blue-600"><Link href="/">Home</Link></li>
                {
                    menu.data.map((item) => (
                        <li key={item.id} className="hover:text-blue-600"><Link href={`/category/${item.slug}`}>{item.name}</Link></li>
                    ))
                }
            </ul>
        </nav>
    );
}