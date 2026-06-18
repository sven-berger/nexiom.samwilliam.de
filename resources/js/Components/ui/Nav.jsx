import { useState } from 'react';
import { Link } from '@inertiajs/react';

const links = [
    { href: '/', label: 'Startseite' },
    { href: '#cv', label: 'Lebenslauf' },
    { href: '#interests', label: 'Interessen' },
    { href: '#github', label: 'Meine GitHub-Projekte' },
];

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex-1 flex justify-end lg:justify-center">
            {/* Hamburger-Button – nur auf mobil sichtbar */}
            <button
                className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors md:flex md:justify-end"
                onClick={() => setOpen((prev) => !prev)}
                aria-label="Navigation öffnen"
            >
                <span className="block w-5 h-0.5 bg-current mb-1" />
                <span className="block w-5 h-0.5 bg-current mb-1" />
                <span className="block w-5 h-0.5 bg-current" />
            </button>

            {/* Desktop-Nav */}
            <ul className="hidden lg:flex justify-center gap-1">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Mobile-Nav – aufklappbar */}
            {open && (
                <ul className="lg:hidden absolute left-0 right-0 mt-2 mx-2 bg-white border border-slate-200 rounded-2xl shadow-md p-2 z-50">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}
