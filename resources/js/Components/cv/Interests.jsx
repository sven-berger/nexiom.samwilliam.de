import Box from '../Box';
import Label from '../Label';
import ContentHeader from '../ContentHeader';

export default function Interests() {
    return (
        <Box className="mb-5" title="Interessen">
            <div className="flex-1">
                <ul class="auflistung">
                    <li class="mb-3">
                        <strong>Kontinuierlicher Ausbau meiner Website</strong>
                        <br />
                        <span>Redaktionell &amp; Technisch</span>
                    </li>
                    <li class="mb-3">
                        <strong>Filme und Serien</strong>
                        <br />
                        <span>bevorzugt realitätsnah und logisch aufgebaut</span>
                    </li>
                    <li class="mb-3">
                        <strong>PlayStation</strong>
                        <br />
                        <span>Vor allem storybasierte Rollenspiele (z. B. Assassin's Creed)</span>
                    </li>
                    <li>
                        <strong>Regelmäßige Weiterbildung im IT-Bereich</strong>
                        <br />
                        <span>Durch Tutorials, die dann in eigene Projekte einfließen</span>
                    </li>
                </ul>
            </div>
        </Box>
    );
}
