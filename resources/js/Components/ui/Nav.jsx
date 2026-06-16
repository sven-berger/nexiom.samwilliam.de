import { Link } from '@inertiajs/react';

export default function Nav() {
    return (
        <nav className="flex-1 flex justify-center">
            <ul className="flex gap-1">
                <li>
                    <Link
                        href="/"
                        className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                        Startseite
                    </Link>
                </li>{' '}
                |
                <li>
                    <Link
                        href="/cv/"
                        className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                        Lebenslauf
                    </Link>
                </li>{' '}
                |
                <li>
                    <Link
                        href="/games/"
                        className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    >
                        Meine Spiele bei IGDB
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
