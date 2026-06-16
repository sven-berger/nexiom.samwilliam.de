import { usePage } from '@inertiajs/react';
import pkg from '../../../../package.json';
import Box from '../Box';

const HIGHLIGHT = ['react', 'tailwindcss', '@inertiajs/react'];
const NICE = ['vite', 'laravel-vite-plugin'];

export default function TechStack() {
    const { phpVersion, laravelVersion, mysqlVersion, apacheVersion } = usePage().props;
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };

    return (
        <Box title="Eingesetze Technologien & Versionen" grow>
            <ul className="space-y-1">
                {apacheVersion && (
                    <li className="flex justify-between">
                        <span className="font-medium text-slate-800">Webserver</span>
                        <span className="text-slate-500 text-sm">{apacheVersion}</span>
                    </li>
                )}
                {mysqlVersion && (
                    <li className="flex justify-between">
                        <span className="font-medium text-slate-800">MySQL</span>
                        <span className="text-slate-500 text-sm">{mysqlVersion}</span>
                    </li>
                )}
                <li className="flex justify-between">
                    <span className="font-medium text-slate-800">Laravel</span>
                    <span className="text-slate-500 text-sm">{laravelVersion}</span>
                </li>
                <li className="flex justify-between mb-4">
                    <span className="font-medium text-slate-800 font-bold">PHP</span>
                    <span className="text-slate-500 text-sm">{phpVersion}</span>
                </li>

                {HIGHLIGHT.map((name) =>
                    deps[name] ? (
                        <li key={name} className="flex justify-between">
                            <span className="font-medium text-slate-800">{name}</span>
                            <span className="text-slate-500 text-sm">{deps[name]}</span>
                        </li>
                    ) : null,
                )}

                {NICE.map((name) =>
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
