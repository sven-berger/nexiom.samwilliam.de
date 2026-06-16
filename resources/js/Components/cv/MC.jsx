import Box from '../Box';
import Label from '../Label';
import ContentHeader from '../ContentHeader';

export default function MC() {
    return (
        <Box className="mb-5">
            <div className="lg:flex gap-8">
                <div className="flex-1">
                    <div className="flex items-center justify-between mt-3 mb-5">
                        <div className="text-xl font-bold">
                            Fachmann für die Systemgastronomie (McDonalds)
                        </div>
                    </div>

                    <ContentHeader title="Ausbildungsort" />
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

                    <ContentHeader title="Schwerpunkte" />
                    <ul className="list-disc list-inside mb-3">
                        <li>Rechnungswesen und Controlling</li>
                        <li>Buchhaltung</li>
                        <li>Starke Vertiefung in HACCP</li>
                    </ul>
                    <ContentHeader title="Hinweise" />
                    <ol className="list-disc list-inside mb-3">
                        <li>
                            Bei Ausbildungsbeginn gehörte diese Firma noch zur McDonald´s
                            Deutschland LLC
                        </li>
                        <li>Die Ausbildung wurde auf Grund von sehr guter Leistung verkürzt.</li>
                    </ol>

                    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm mb-5 mt-5">
                        <dt className="font-medium text-slate-500">Status</dt>
                        <dd className="text-slate-700 text-right">Erfolgreich abgeschlossen</dd>
                        <dt className="font-medium text-slate-500">Abschlussnote</dt>
                        <dd className="text-slate-700 text-right">1,4</dd>
                    </dl>
                </div>

                <div className="w-px bg-slate-200 self-stretch" />

                <div className="flex-1 flex flex-col justify-center md:items-start lg:items-end mt-5">
                    <p className="text-slate-700 whitespace-nowrap font-bold lg:font-normal">
                        08/2016 - 02/2019
                    </p>
                </div>
            </div>
        </Box>
    );
}
