import Box from '../Box';
import ContentTitle from '../ContentTitle';

export default function Privacy() {
    return (
        <>
            <ContentTitle title="Datenschutzerklärung" />
            <Box>
                <p>
                    Der Schutz personenbezogener Daten ist mir wichtig. Diese Website dient
                    ausschließlich der Präsentation meiner Person, meines Lebenslaufs und meines
                    privaten Webentwicklungsprojektes. Es handelt sich um eine private
                    Portfolio-Seite.
                    <br />
                    Eine Registrierung, Community-Funktion oder Gewinnerzielungsabsicht besteht zum
                    aktuellen Stand (zu finden unter "Stand"){' '}
                    <span className="font-semibold">nicht</span>.
                </p>
                <h3 className="text-lg font-semibold mt-5 mb-3">1. Verantwortlicher</h3>
                <p>
                    Sven Berger
                    <br />
                    Limburger Straße 30
                    <br />
                    65510 Idstein
                    <br />
                    E-Mail:{' '}
                    <a href="mailto:bergersvenoliver@gmail.com">bergersvenoliver@gmail.com</a>
                </p>
                <h3 className="text-lg font-semibold mt-5 mb-3">2. Hosting und Server-Logfiles</h3>
                <p>
                    Diese Website wird bei einem externen Hosting-Anbieter, welcher in Deutschland
                    sitzt, betrieben. Beim Aufruf der Website werden durch den Hosting-Anbieter
                    automatisch technische Informationen verarbeitet, die für die Bereitstellung und
                    Sicherheit der Website erforderlich sind.
                </p>
                <p>Hierzu können insbesondere folgende Daten gehören:</p>
                <ul className="list-disc list-inside mb-3">
                    <li>IP-Adresse</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>aufgerufene Seite oder Datei</li>
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer-URL</li>
                </ul>
                <p>
                    Die Verarbeitung dieser Daten erfolgt zur technischen Bereitstellung der
                    Website, zur Sicherstellung eines stabilen Betriebs sowie zur Erkennung und
                    Abwehr von Angriffen. Eine Zusammenführung dieser Daten mit anderen Datenquellen
                    erfolgt durch mich nicht.
                </p>

                <h3 className="text-lg font-semibold mt-5 mb-3">3. Einbindung der GitHub API</h3>
                <p>
                    Auf dieser Website werden öffentlich verfügbare Informationen aus meinem
                    GitHub-Profil über die GitHub API eingebunden, zum Beispiel Repository-Namen,
                    Beschreibungen, verwendete Technologien oder Links zu Projekten.
                    <br />
                    Beim Laden dieser Daten kann eine Verbindung zu Servern von GitHub hergestellt
                    werden. Dabei können technische Daten wie Ihre IP-Adresse, Browserinformationen
                    und der Zeitpunkt des Zugriffs an GitHub übermittelt werden.
                    <br />
                    Anbieter ist GitHub, Inc. beziehungsweise GitHub B.V. Weitere Informationen zur
                    Verarbeitung personenbezogener Daten durch GitHub finden Sie in der
                    Datenschutzerklärung von GitHub.
                </p>

                <h3 className="text-lg font-semibold mt-5 mb-3">4. Einbindung einer Wetter-API</h3>
                <p>
                    Auf dieser Website wird eine kleine Wetteranzeige für den Bereich 65510
                    eingebunden. Hierfür werden aktuelle Wetterdaten über eine externe Wetter-API
                    abgerufen.
                    <br />
                    Beim Abruf dieser Daten kann eine Verbindung zum jeweiligen API-Anbieter
                    hergestellt werden. Dabei können technische Daten wie Ihre IP-Adresse,
                    Browserinformationen und der Zeitpunkt des Zugriffs verarbeitet werden.
                    <br />
                    Die Wetterfunktion dient ausschließlich der technischen Demonstration des Abrufs
                    und der Darstellung externer API-Daten innerhalb dieser Portfolio-Seite.
                </p>

                <h3 className="text-lg font-semibold mt-5 mb-3">
                    5. Cookies, Tracking und Analyse-Tools
                </h3>
                <p>
                    Diese Website verwendet aktuell keine Tracking-Tools wie Google Analytics,
                    Matomo oder vergleichbare Analyse-Dienste.
                    <br />
                    Sofern keine Login-Funktion aktiv ist, werden keine eigenen Cookies oder
                    Sessions zur Nutzerverfolgung eingesetzt.
                    <br />
                    Sollte zukünftig ein Login- oder Administrationsbereich ergänzt werden, können
                    technisch notwendige Cookies und Sessions erforderlich sein. Die
                    Datenschutzerklärung wird in diesem Fall entsprechend angepasst.
                </p>

                <h3 className="text-lg font-semibold mt-5 mb-3">6. Eingesetzte Technologien</h3>
                <p>
                    Diese Website kann lokal eingebundene Bibliotheken und Frameworks verwenden, zum
                    Beispiel React, Laravel, Tailwind CSS oder vergleichbare
                    Open-Source-Technologien. Soweit diese lokal eingebunden sind, findet dadurch
                    kein zusätzlicher Datenaustausch mit Drittanbietern statt.
                </p>

                <h3 className="text-lg font-semibold mt-5 mb-3">7. Rechte betroffener Personen</h3>
                <p>
                    Betroffene Personen haben nach Maßgabe der gesetzlichen Vorschriften das Recht
                    auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
                    Widerspruch gegen die Verarbeitung sowie Datenübertragbarkeit.
                    <br />
                    Bei Fragen zum Datenschutz können Sie sich jederzeit an die oben genannte
                    E-Mail-Adresse wenden.
                </p>

                {/* <h3 className="text-lg font-semibold mt-5 mb-3">8. Kontaktaufnahme per E-Mail</h3>
                <p>
                    Wenn Sie mich per E-Mail kontaktieren, werden die von Ihnen übermittelten Daten
                    ausschließlich zur Bearbeitung Ihrer Anfrage verwendet. Eine Weitergabe an
                    Dritte erfolgt nicht, sofern keine gesetzliche Pflicht hierzu besteht.
                </p> */}

                <h3 className="text-lg font-semibold mt-5 mb-3">8. Stand</h3>
                <p>Stand: 18.06.2026</p>
            </Box>
        </>
    );
}
