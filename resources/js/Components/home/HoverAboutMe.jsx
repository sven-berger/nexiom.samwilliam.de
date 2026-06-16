export default function HoverAboutMe() {
    const skills = ['Laravel', 'React', 'MySQL', 'HTML', 'Tailwinmd CSS', 'Git', 'Docker'];

    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="bg-black/70 backdrop-blur-sm p-8 text-left text-white">
                    <p className="text-sm uppercase tracking-widest text-white/70">
                        Junior Webentwickler
                    </p>

                    <h2 className="mt-1 text-3xl font-bold drop-shadow">Sven Berger</h2>

                    <p className="mt-4 max-w-4xl text-base leading-relaxed text-white/85 drop-shadow">
                        Fachinformatiker für Anwendungsentwicklung mit Schwerpunkt Webentwicklung.
                        Nach meiner Umschulung und praktischer Erfahrung bei der WolkenWerk GmbH
                        suche ich den Einstieg als Junior Webentwickler.
                    </p>

                    <p className="mt-3 max-w-4xl text-base leading-relaxed text-white/85 drop-shadow">
                        Mein Fokus liegt auf modernen Webanwendungen, verständlichen
                        Benutzeroberflächen, strukturiertem Code und sauberen technischen Lösungen.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full bg-white/15 px-3 py-1 text-sm text-white/90 ring-1 ring-white/20"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="/cv/"
                            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white/90"
                        >
                            Lebenslauf ansehen
                        </a>

                        <a
                            href="/projects/"
                            className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/30 transition hover:bg-white/20"
                        >
                            Projekte ansehen
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
