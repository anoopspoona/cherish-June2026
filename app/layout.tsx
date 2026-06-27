import './globals.css';
import Link from 'next/link';
export const metadata={title:'Cherish Every Bite',description:'Premium Kerala-style healthy meals in Trivandrum'};
function Header(){return <header className="sticky top-0 z-30 border-b hairline bg-cream/95 backdrop-blur"><div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5"><Link href="/" className="font-serif text-3xl tracking-tight">Cherish</Link><nav className="hidden gap-10 md:flex"><Link className="label hover:text-accent" href="/">THE CONCEPT</Link><Link className="label hover:text-accent" href="/menu">WEEKLY MENU</Link><Link className="label hover:text-accent" href="/plans">SUBSCRIPTION</Link></nav><span className="label text-forest">TRIVANDRUM, KL</span></div></header>}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/>{children}</body></html>}
