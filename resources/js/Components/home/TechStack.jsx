import { usePage } from '@inertiajs/react';
import pkg from '../../../../package.json';
import Box from '../Box';

const HIGHLIGHT = ['react', 'tailwindcss', '@inertiajs/react', 'vite', 'laravel-vite-plugin'];

export default function TechStack() {
    const { phpVersion, mysqlVersion, apacheVersion } = usePage().props;
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };

    return (
        <Box title="Eingesetze Technologien & Versionen" grow>
            <ul className="space-y-1">
                <li className="flex justify-between">
                    <span className="font-medium text-slate-800">PHP</span>
                    <span className="text-slate-500 text-sm">{phpVersion}</span>
                </li>
                {mysqlVersion && (
                    <li className="flex justify-between">
                        <span className="font-medium text-slate-800">MySQL</span>
                        <span className="text-slate-500 text-sm">{mysqlVersion}</span>
                    </li>
                )}
                {apacheVersion && (
                    <li className="flex justify-between mb-4">
                        <span className="font-medium text-slate-800">Apache</span>
                        <span className="text-slate-500 text-sm">{apacheVersion}</span>
                    </li>
                )}
                {HIGHLIGHT.map((name) =>
                    deps[name] ? (
                        <li key={name} className="flex justify-between">
                            <span className="font-medium text-slate-800">{name}</span>
                            <span className="text-slate-500 text-sm">{deps[name]}</span>
                        </li>
                    ) : null,
                )}
            </ul>
        </Box>
    );
}
