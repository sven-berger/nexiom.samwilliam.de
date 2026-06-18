import Box from '../Box';
import Info from '../alerts/Info';

const stats = [
    { label: 'Rolle', value: 'Junior Fullstack Entwickler' },
    { label: 'Status', value: 'Aktiv auf Jobsuche' },
    { label: 'Verfügbarkeit', value: 'Ab sofort verfügbar' },
    { label: 'Abschluss', value: 'Fachinformatiker AE (IHK)' },
    { label: 'Fokus', value: 'Webentwicklung mit Laravel und React' },
    { label: 'Stack', value: 'Laravel, React, Tailwind, SQL' },
];

export default function AtAGlance() {
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

            <Info>
                <p className="flex justify-center">
                    Ich freue mich über Hinweise auf Junior-Positionen im Bereich Webentwicklung.
                    Interessiert an einem Kennenlernen?
                </p>
                <a href="#kontakt" className="flex justify-center font-bold">
                    Jetzt Kontakt aufnehmen
                </a>
            </Info>
        </Box>
    );
}
