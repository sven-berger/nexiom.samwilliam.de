import Box from '../Box';
import Label from '../Label';
import ContentHeader from '../ContentHeader';

export default function MCSL() {
    return (
        <Box className="mb-5">
            <div className="lg:flex gap-8">
                <div className="flex-1">
                    <div className="flex items-center justify-between mt-3 mb-5">
                        <div className="text-xl font-bold">
                            Schichtführer in der Systemgastronomie (McDonalds)
                        </div>
                    </div>

                    <ContentHeader title="Arbeitgeber" />
                    <div className="mb-3">
                        <p>HI fries GmbH</p>
                        <p>Inhaber: Sandra Bürkle</p>
                        <p>Auroffer Straße 2</p>
                        <p>65510 Idstein</p>

                        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm mb-5 mt-3">
                            <dt className="font-medium text-slate-500">Filiale</dt>
                            <dd className="text-slate-700 text-right">Idstein</dd>
                        </dl>
                    </div>

                    <ContentHeader title="Bereiche" />
                    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm mb-3">
                        <dt className="font-medium text-slate-500 mb-2">Kasse</dt>
                        <dd className="text-slate-700 text-right">
                            <Label
                                variant="success"
                                label="Bei Bedarf"
                                className="col-span-2 mb-2"
                            />
                        </dd>
                        <dt className="font-medium text-slate-500 mb-2">
                            Ausgabe der Bestellungen
                        </dt>
                        <dd className="text-slate-700 text-right">
                            <Label
                                variant="success"
                                label="Bei Bedarf"
                                className="col-span-2 mb-2"
                            />
                        </dd>
                        <dt className="font-medium text-slate-500 mb-2">Küche</dt>
                        <dd className="text-slate-700 text-right">
                            <Label
                                variant="success"
                                label="Bei Bedarf"
                                className="col-span-2 mb-2"
                            />
                        </dd>
                    </dl>

                    <ContentHeader title="Aufgaben" />
                    <ul className="list-disc list-inside mb-3">
                        <li>Koordinieren und Delegieren der Mitarbeiter</li>
                        <li>Tagesschichtplan erstellen</li>
                        <li>Kassen abrechnen</li>
                        <li>Verwalten des Tresors und dessen Inhalt</li>
                        <li>
                            Annahme und Wechseln des Kleingeldes bei Lieferung
                            <br />
                            <span className="lg:ml-5">
                                (
                                <a
                                    href="https://www.prosegur.de/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Prosegur Cash Services Germany GmbH
                                </a>
                                )
                            </span>
                        </li>
                        <li>Kontrolle des HACCP</li>
                    </ul>
                </div>

                <div className="w-px bg-slate-200 self-stretch" />

                <div className="flex-1 flex flex-col justify-center md:items-start lg:items-end mt-5">
                    <p className="text-slate-700 whitespace-nowrap font-bold lg:font-normal">
                        08/2014 - 04/2020
                    </p>
                </div>
            </div>
        </Box>
    );
}
