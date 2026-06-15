import { Link } from '@inertiajs/react';

export default function Header() {
    return (
        <header className="space-y-2 text-slate-700 border-t border border-slate-300 bg-white shadow-md rounded-2xl p-4">
            <h2 className="text-2xl sm:text-2xl">
                <Link href="/">RiftCore.de</Link>
            </h2>
        </header>
    );
}
