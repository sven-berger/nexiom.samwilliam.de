import Box from '../Box';
import Label from '../Label';
import ContentHeader from '../ContentHeader';

export default function InternshipWWRK() {
    return (
        <Box className="mb-5">
            <div className="lg:flex gap-8">
                <div className="flex-1">
                    <div className="flex items-center justify-between mt-3 mb-5">
                        <div className="text-xl font-bold">Praktikum</div>
                        <div className="flex gap-2">
                            <Label variant="success" label="Beendet" />
                            <Label variant="secondary" label="Umschulung" />
                        </div>
                    </div>

                    <ContentHeader title="Praktikumsort" />
                    <div className="mb-3">
                        <p>WolkenWerk GmbH</p>
                        <p>Alt Langenhain 8</p>
                        <p>65719 Hofheim am Taunus</p>
                    </div>

                    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm mb-3">
                        <dt className="font-medium text-slate-500">Fachrichtung</dt>
                        <dd className="text-slate-700 text-right">Webentwicklung/Webapps</dd>
                        <dt className="font-medium text-slate-500">Frontend</dt>
                        <dd className="text-slate-700 text-right">
                            JavaScript (Framework: React), Tailwind (CSS)
                        </dd>
                        <dt className="font-medium text-slate-500">Backend</dt>
                        <dd className="text-slate-700 text-right">(Ruby on) Rails, PHP</dd>
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
                        09.10.2025 – 08.06.2026
                    </p>
                </div>
            </div>
        </Box>
    );
}
