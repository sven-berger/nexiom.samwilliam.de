import Box from '../Box';
import ContentTitle from '../ContentTitle';

export default function Imprint() {
    return (
        <>
            <ContentTitle title="Impressum" />
            <Box>
                <h3 className="text-lg font-semibold mt-5 mb-3">Allgemeine Informationen</h3>
                <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm mb-5 mt-3">
                    <dt className="font-medium text-slate-500 mb-5">Name und Anschrift</dt>
                    <dd className="text-slate-700 mb-5">
                        Sven Oliver Berger
                        <br />
                        Limburger Straße 30
                        <br />
                        65510 Idstein
                    </dd>
                    <dt className="font-medium text-slate-500">E-Mail-Adresse</dt>
                    <dd className="text-slate-700">
                        <a href="mailto:bergesvenoliver@gmail.com">bergersvenoliver@gmail.com</a>
                    </dd>
                    <dt className="font-medium text-slate-500">Telefon</dt>
                    <dd className="text-slate-700">
                        <a href="tel:%2B49%2015119409788">+49 15119409788</a>
                    </dd>
                </dl>
                <h3 className="text-lg font-semibold mt-5 mb-3">Weitere Informationen</h3>
                <p className="mb-3">
                    Dies ist ein nicht-kommerzielles, privates Projekt.
                    <br />
                    Die Inhalte dieser Website sind privater Natur und stellen keine
                    journalistisch-redaktionellen Angebote dar.
                </p>

                <p>
                    Diese Seite ist ein Hobbyprojekt und dient ausschließlich der persönlichen
                    Darstellung meiner Fähigkeiten und Erfahrungen als Softwareentwickler und
                    gleichzeitig als Referenz/Portfolio für potenzielle Arbeitgeber.
                    <br />
                    Es erfolgt{' '}
                    <span className="font-bold text-orange-500">
                        keine Gewinnerzielungsabsicht
                    </span>{' '}
                    mit dieser Projektseite.
                </p>
            </Box>
        </>
    );
}
