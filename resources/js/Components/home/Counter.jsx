import Box from '../Box';

const stats = [
    { label: 'Rolle', value: 'Junior Fullstack Entwickler' },
    { label: 'Status', value: 'Aktiv auf Jobsuche' },
    { label: 'Verfügbarkeit', value: 'Ab sofort verfügbar' },
    { label: 'Abschluss', value: 'Fachinformatiker AE (IHK)' },
    { label: 'Fokus', value: 'Webentwicklung mit Laravel und React' },
    { label: 'Stack', value: 'Laravel, React, Tailwind, SQL' },
];

export default function Counter() {
    return (
        <Box title="Auf einen Blick" grow>
            <ul className="space-y-2">
                {stats.map((entry) => (
                    <li
                        key={entry.label}
                        className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-3 py-2"
                    >
                        <span className="text-sm text-slate-500">{entry.label}</span>
                        <span className="text-sm font-semibold text-slate-700 text-right">
                            {entry.value}
                        </span>
                    </li>
                ))}
            </ul>
            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-3">
                <p className="text-sm font-semibold text-emerald-700">
                    Ich freue mich über Hinweise auf Junior-Positionen im Bereich Webentwicklung.
                </p>
                <a
                    href="#kontakt"
                    className="mt-2 inline-block text-sm font-medium text-emerald-800 underline underline-offset-2 hover:text-emerald-900"
                >
                    Interesse an einem Kennenlernen? Jetzt Kontakt aufnehmen
                </a>
            </div>
        </Box>
    );
}
