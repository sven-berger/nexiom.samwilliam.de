import Box from '../Box';
import Label from '../Label';
import ContentHeader from '../ContentHeader';

export default function FiAE() {
    return (
        <Box className="mb-5">
            <div className="lg:flex gap-8">
                <div className="flex-1">
                    <div className="flex items-center justify-between mt-3 mb-5">
                        <div className="text-xl font-bold">
                            Fachinformatiker für Anwendungsentwicklung
                        </div>
                        <div className="flex gap-2">
                            <Label variant="success" label="Abgeschlossen" />
                            <Label variant="secondary" label="Umschulung" />
                        </div>
                    </div>

                    <ContentHeader title="Bildungsträger" />
                    <div className="mb-3">
                        <p>BoxGFN GmbH</p>
                        <p>Maaßstraße 24</p>
                        <p>69123 Heidelberg</p>

                        <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm mb-5 mt-3">
                            <dt className="font-medium text-slate-500">Standort</dt>
                            <dd className="text-slate-700 text-right">Frankfurt am Main</dd>
                        </dl>
                    </div>

                    <ContentHeader title="Maßnahme" />
                    <p>
                        <a href="https://svenoliver-berger.de/lernplattform/">Umschulung (IHK)</a>
                    </p>
                    <small>
                        Die Umschulung endet mit dem zertifzierten{' '}
                        <a href="https://de.wikipedia.org/wiki/IHK-Pr%C3%BCfungszeugnis">
                            IHK-Prüfungszeugnis
                        </a>
                        .<br />
                        Dieses erhalte ich mit dem Bestehen der offiziellen IHK-Abschlussprüfung.
                    </small>
                    <ContentHeader title="Beschreibung" />
                    <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm mb-5 mt-5">
                        <dt className="font-medium text-slate-500">Meine Wunschrichtung</dt>
                        <dd className="text-slate-700 text-right">Webentwicklung</dd>
                        <dt className="font-medium text-slate-500">Themen</dt>
                        <dd className="text-slate-700 text-right">
                            HTML, CSS, JavaScript, PHP und SQL
                        </dd>
                    </dl>
                    <p className="mt-5">
                        Mehr dazu findet ihr hier:
                        <br />
                        Blog: Meine Welt in der IT 🏃🏻‍♂️🖥
                    </p>
                </div>

                <div className="w-px bg-slate-200 self-stretch" />

                <div className="flex-1 flex flex-col justify-center md:items-start lg:items-end mt-5">
                    <p className="text-slate-700 whitespace-nowrap font-bold lg:font-normal">
                        09.10.2025 - 08.06.2026
                    </p>
                </div>
            </div>
        </Box>
    );
}
