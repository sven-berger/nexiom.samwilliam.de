import Box from '../Box';
import Label from '../Label';
import ContentTitle from '../ContentTitle';

export default function Interests() {
    return (
        <>
            <ContentTitle title="Interessen" />
            <Box className="mb-5">
                <div className="flex-1">
                    <ul className="list-none list-inside text-sm text-slate-700">
                        <li className="mb-3">
                            <span className="font-bold">
                                Kontinuierlicher Ausbau meiner Website
                            </span>
                            <br />
                            <span className="text-gray-500 text-sm italic">
                                Redaktionell &amp; Technisch
                            </span>
                        </li>
                        <li className="mb-3">
                            <span className="font-bold">Filme und Serien</span>
                            <br />
                            <span className="text-gray-500 text-sm italic">
                                bevorzugt realitätsnah und logisch aufgebaut
                            </span>
                        </li>
                        <li className="mb-3">
                            <span className="font-bold">PlayStation</span>
                            <br />
                            <span className="text-gray-500 text-sm italic">
                                Vor allem storybasierte Rollenspiele (z. B. Assassin's Creed)
                            </span>
                        </li>
                        <li>
                            <span className="font-bold">
                                Regelmäßige Weiterbildung im IT-Bereich
                            </span>
                            <br />
                            <span className="text-gray-500 text-sm italic">
                                Durch Tutorials, die dann in eigene Projekte einfließen
                            </span>
                        </li>
                    </ul>
                </div>
            </Box>
        </>
    );
}
