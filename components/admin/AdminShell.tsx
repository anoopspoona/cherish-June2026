import Link from 'next/link';
const links=['import','menu','dishes','categories','delivery-zones','production','orders','backups','admin-users','settings'];
export default function AdminShell({children}:{children:React.ReactNode}){return <main className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-[240px_1fr]"><aside className="editorial-card p-6"><p className="label">Cherish Ops</p><nav className="mt-6 flex flex-col">{links.map(l=><Link className="admin-link" key={l} href={`/admin/${l}`}>{l.replace('-',' ')}</Link>)}</nav></aside><section>{children}</section></main>}
