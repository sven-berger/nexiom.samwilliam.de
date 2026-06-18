import { useEffect, useState } from 'react';
import GridLayout from './grid/GridLayout';
import GitHubButton from './buttons/GitHubButton';
import Info from './alerts/Info';

export function GitHubCard({ repo }) {
    return (
        <div className="flex h-full flex-col">
            <article className="rounded-t-2xl border border-slate-300 border-b-0 bg-white p-4 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <h3 className="text-lg font-semibold">{repo.name}</h3>

                <p className="mt-2 text-sm">
                    {repo.description ?? 'Keine Beschreibung vorhanden.'}
                </p>

                <div className="mt-4 text-sm">
                    <p>Sprache: {repo.language ?? 'Nicht angegeben'}</p>
                    <p>Aktualisiert: {new Date(repo.updated_at).toLocaleDateString('de-DE')}</p>
                </div>
            </article>

            <GitHubButton
                label="Auf GitHub ansehen"
                to={repo.html_url}
                variant="secondary"
                className="mt-auto w-full rounded-t-none rounded-b-2xl"
                target
            />
        </div>
    );
}

export default function MyGitHub() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const response = await fetch(
                    'https://api.github.com/users/sven-berger/repos?sort=updated&per_page=6',
                );

                if (!response.ok) {
                    throw new Error('GitHub-Daten konnten nicht geladen werden.');
                }

                const data = await response.json();
                setRepos(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unbekannter Fehler');
            } finally {
                setLoading(false);
            }
        }

        fetchRepos();
    }, []);

    if (loading) {
        return <p>Projekte werden geladen...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <>
            <Info>
                <a
                    href="https://github.com/sven-berger/riftcore.de/blob/main/resources/js/Components/MyGitHub.jsx"
                    className="mt-2 flex justify-center items-center text-sm font-medium text-emerald-800 hover:text-emerald-900 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Diese Übersicht lädt meine zuletzt aktualisierten öffentlichen Repositories über
                    die GitHub API. Die Daten werden asynchron abgefragt, im State gespeichert und
                    mit Lade- sowie Fehlerstatus dargestellt.
                </a>
            </Info>

            <GridLayout cols={3}>
                {repos.map((repo) => (
                    <GitHubCard key={repo.id} repo={repo} />
                ))}
            </GridLayout>
        </>
    );
}
