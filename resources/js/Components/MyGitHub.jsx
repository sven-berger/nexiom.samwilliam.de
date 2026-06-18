import { useEffect, useState } from 'react';
import GridLayout from './grid/GridLayout';
import GitHubButton from './buttons/GitHubButton';
import Info from './alerts/Info';
import ContentTitle from './ContentTitle';

function getRateLimitResetText(headers) {
    const resetHeader = headers.get('x-ratelimit-reset');

    if (!resetHeader) {
        return null;
    }

    const resetUnix = Number(resetHeader);

    if (Number.isNaN(resetUnix)) {
        return null;
    }

    return new Date(resetUnix * 1000).toLocaleString('de-DE');
}

export function GitHubCard({ repo }) {
    const latestCommitMessage = repo.latestCommit?.message ?? 'Keine Commit-Daten verfuegbar.';
    const latestCommitDate = repo.latestCommit?.date
        ? new Date(repo.latestCommit.date).toLocaleDateString('de-DE')
        : null;
    const latestCommitUrl = repo.latestCommit?.url ?? null;

    return (
        <>
            <div className="flex h-full flex-col">
                <article className="h-full rounded-t-2xl border border-slate-300 border-b-0 bg-white p-4 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <h3 className="text-lg font-semibold">{repo.name}</h3>

                    <p className="mt-2 text-sm">
                        {repo.description ?? 'Keine Beschreibung vorhanden.'}
                    </p>

                    <div className="mt-4 text-sm">
                        <p>Sprache: {repo.language ?? 'Nicht angegeben'}</p>
                        <p>Aktualisiert: {new Date(repo.updated_at).toLocaleDateString('de-DE')}</p>
                    </div>

                    <div className="pt-3 text-sm">
                        <ContentTitle title="Letzter Commit" />
                        {latestCommitUrl ? (
                            <a
                                href={latestCommitUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 inline-block max-w-full truncate rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white hover:bg-green-700 hover:underline"
                                title={latestCommitMessage}
                            >
                                {latestCommitMessage}
                            </a>
                        ) : (
                            <p
                                className="mt-1 inline-block max-w-full truncate rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white"
                                title={latestCommitMessage}
                            >
                                {latestCommitMessage}
                            </p>
                        )}
                        {latestCommitDate && (
                            <p className="text-slate-500 italic">am {latestCommitDate}</p>
                        )}
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
        </>
    );
}

export default function MyGitHub() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [rateLimitHit, setRateLimitHit] = useState(false);
    const [rateLimitResetAt, setRateLimitResetAt] = useState(null);

    useEffect(() => {
        async function fetchRepos() {
            try {
                const response = await fetch(
                    'https://api.github.com/users/sven-berger/repos?sort=updated&per_page=6',
                );

                if (!response.ok) {
                    if (
                        response.status === 403 &&
                        response.headers.get('x-ratelimit-remaining') === '0'
                    ) {
                        setRateLimitHit(true);
                        setRateLimitResetAt(getRateLimitResetText(response.headers));
                        throw new Error(
                            'GitHub API Rate-Limit erreicht... Bitte versuche es später erneut.',
                        );
                    }

                    throw new Error('GitHub-Daten konnten nicht geladen werden.');
                }

                const data = await response.json();

                const reposWithCommits = await Promise.all(
                    data.map(async (repo) => {
                        try {
                            const commitsResponse = await fetch(
                                `https://api.github.com/repos/${repo.full_name}/commits?per_page=1`,
                            );

                            if (!commitsResponse.ok) {
                                if (
                                    commitsResponse.status === 403 &&
                                    commitsResponse.headers.get('x-ratelimit-remaining') === '0'
                                ) {
                                    setRateLimitHit(true);
                                    setRateLimitResetAt(
                                        getRateLimitResetText(commitsResponse.headers),
                                    );
                                }

                                return { ...repo, latestCommit: null };
                            }

                            const commits = await commitsResponse.json();
                            const latest = commits?.[0];

                            return {
                                ...repo,
                                latestCommit: latest
                                    ? {
                                          message: latest.commit?.message,
                                          date: latest.commit?.author?.date,
                                          url: latest.html_url,
                                      }
                                    : null,
                            };
                        } catch {
                            return { ...repo, latestCommit: null };
                        }
                    }),
                );

                setRepos(reposWithCommits);
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
                    className="flex justify-center items-center text-sm font-medium text-emerald-800 hover:text-emerald-900 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Diese Übersicht lädt meine zuletzt aktualisierten öffentlichen Repositories über
                    die GitHub API. Die Daten werden asynchron abgefragt, im State gespeichert und
                    mit Lade- sowie Fehlerstatus dargestellt.
                </a>
            </Info>

            {rateLimitHit && (
                <Info>
                    <p className="text-sm font-medium text-amber-800">
                        Hinweis: Das GitHub API Rate-Limit wurde erreicht. Commit-Daten sind
                        eventuell unvollständig.
                        {rateLimitResetAt && ` Zurücksetzung voraussichtlich: ${rateLimitResetAt}.`}
                    </p>
                </Info>
            )}

            <GridLayout cols={3}>
                {repos.map((repo) => (
                    <GitHubCard key={repo.id} repo={repo} />
                ))}
            </GridLayout>
        </>
    );
}
