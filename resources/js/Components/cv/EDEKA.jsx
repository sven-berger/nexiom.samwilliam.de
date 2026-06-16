import Box from '../Box';
import Label from '../Label';
import ContentHeader from '../ContentHeader';

export default function EDEKA() {
    return (
        <Box className="mb-5">
            <div className="lg:flex gap-8">
                <div className="flex-1">
                    <div className="flex items-center justify-between mt-3 mb-5">
                        <div className="text-xl font-bold">Kaufmann im Einzelhandel (EDEKA)</div>
                    </div>

                    <ContentHeader title="Arbeitgeber" />
                    <div className="mb-3">
                        <p>Lebensmittelmärkte Georg KG</p>
                        <p>Weldertstraße 1</p>
                        <p>65510 Idstein</p>
                        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm mb-5 mt-3">
                            <dt className="font-medium text-slate-500">Filiale</dt>
                            <dd className="text-slate-700 text-right">Idstein</dd>
                        </dl>
                    </div>

                    <ContentHeader title="Abteilungen" />
                    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm mb-3">
                        <dt className="font-medium text-slate-500 mb-2">Getränke</dt>
                        <dd className="text-slate-700 text-right">
                            <Label
                                variant="warning"
                                label="Hauptabteilung"
                                className="col-span-2 mb-2"
                            />
                        </dd>
                        <dt className="font-medium text-slate-500 mb-2">Tiefkühl</dt>
                        <dd className="text-slate-700 text-right">
                            <Label
                                variant="secondary"
                                label="Teil von Getränkeabteilung"
                                className="col-span-2 mb-2"
                            />
                        </dd>
                        <dt className="font-medium text-slate-500 mb-2">Obst & Gemüse</dt>
                        <dd className="text-slate-700 text-right">
                            <Label
                                variant="success"
                                label="Verräumen der Lieferung"
                                className="col-span-2 mb-2"
                            />
                        </dd>
                        <dt className="font-medium text-slate-500 mb-2">
                            MoPro, Kasse und Trocken
                        </dt>
                        <dd className="text-slate-700 text-right">
                            <Label variant="error" label="Bei Bedarf" className="col-span-2 mb-2" />
                        </dd>
                    </dl>

                    <ContentHeader title="Bereich" />
                    <p>Fullstack</p>
                    <small style={{ fontStyle: 'italic' }}>
                        Im Rahmen des Praktikums wurde ein Projekt entwickelt, welches auch am Ende
                        der Umschulung von der IHK kontrolliert und bewertet wurde.
                    </small>
                </div>

                <div className="w-px bg-slate-200 self-stretch" />

                <div className="flex-1 flex flex-col justify-center md:items-start lg:items-end mt-5">
                    <p className="text-slate-700 whitespace-nowrap font-bold lg:font-normal">
                        06/2020 - 11/2023
                    </p>
                </div>
            </div>
        </Box>
    );
}
