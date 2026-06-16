import { Link } from '@inertiajs/react';
import Nav from './Nav';

export default function Header() {
    return (
        <header className="flex items-center gap-6 text-slate-700 border-t border border-slate-300 bg-white mb-2 rounded-2xl p-4">
            <h2 className="text-2xl sm:text-2xl">
                <Link href="/">RiftCore.de</Link>
            </h2>
            <Nav />
        </header>
    );
}
