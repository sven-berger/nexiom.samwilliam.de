import { useState, useEffect } from 'react';

export default function Footer() {
    const [time, setTime] = useState('');
    const [weekday, setWeekday] = useState('');
    const [date, setDate] = useState('');

    useEffect(() => {
        const update = () => {
            const now = new Date();
            setWeekday(now.toLocaleDateString('de-DE', { weekday: 'long' }));
            setTime(now.toLocaleTimeString('de-DE') + ' Uhr');
            setDate(now.toLocaleDateString('de-DE'));
        };
        update();
        const interval = setInterval(update, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="text-slate-500 border border-slate-300 bg-white rounded-2xl p-4 mt-4 text-xs sm:text-sm">
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 items-center">
                <div className="hidden lg:block">
                    {weekday}, {time}
                    <br />
                    {date}
                </div>

                <div className="text-center">
                    <p>Copyright 2006 – {new Date().getFullYear()} by Sven Oliver Berger.</p>
                    <p>Diese Seite wurde mit ganz viel ❤️, 🎧 und 🍔 erstellt.</p>
                </div>

                <div className="flex items-center justify-center lg:justify-end mt-2 lg:mt-0">
                    <div className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 lg:justify-end">
                        <a href="https://kyrex.de" className="hover:text-slate-700">
                            Impressum
                        </a>{' '}
                        •
                        <a href="https://kyrex.de/wissensportal" className="hover:text-slate-700">
                            Datenschutzerklärung
                        </a>{' '}
                        •
                        <a href="https://kyrex.de/dummy-page" className="hover:text-slate-700">
                            Kontakt
                        </a>{' '}
                        •
                        <a href="https://kyrex.de" className="hover:text-slate-700">
                            Nutzungsbedingungen
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
