import Box from '../Components/Box';
import Page from '../Components/Page';
import GridLayout from '../Components/grid/GridLayout';
import GridColumn from '../Components/grid/GridColumn';
import ThatsMeImage from '../Components/home/ThatsMeImage';
import Counter from '../Components/home/Counter';
import TechStack from '../Components/home/TechStack';

export default function Home() {
    return (
        <Page title="Startseite">
            <GridLayout>
                <ThatsMeImage />
                <GridColumn>
                    <TechStack />
                    <Counter />
                </GridColumn>
            </GridLayout>
            <Box grow>
                <div>
                    Nexiom ist ein fiktives Unternehmen, das sich auf die Entwicklung von Software
                    spezialisiert hat. Es wurde 2006 von Sven Oliver Berger gegründet und hat seinen
                    Sitz in Idstein, Deutschland. Nexiom bietet eine Vielzahl von Dienstleistungen
                    an, darunter Webentwicklung, App-Entwicklung, IT-Beratung und maßgeschneiderte
                    Softwarelösungen für Unternehmen jeder Größe. Das Unternehmen legt großen Wert
                    auf Qualität, Innovation und Kundenzufriedenheit und hat sich einen Ruf als
                    zuverlässiger Partner in der IT-Branche erarbeitet. Mit einem engagierten Team
                    von Fachleuten und einer Leidenschaft für Technologie strebt Nexiom danach, die
                    digitale Landschaft zu gestalten und seinen Kunden zum Erfolg zu verhelfen.
                </div>
            </Box>
        </Page>
    );
}
