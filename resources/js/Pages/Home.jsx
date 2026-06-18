import Page from '../Components/Page';
import GridLayout from '../Components/grid/GridLayout';
import GridColumn from '../Components/grid/GridColumn';
import ThatsMeImage from '../Components/home/ThatsMeImage';
import AtAGlance from '../Components/home/AtAGlance';
import TechStack from '../Components/home/TechStack';
import Card from '../Components/Cards';
import Button from '../Components/buttons/Button';
import ContentTitle from '../Components/ContentTitle';
import ContactMe from '../Components/home/ContactMe';
import MyKnowledge from '../Components/home/MyKnowledge';
import CVMainPage from '../Components/home/CVMainPage';
import Interests from '../Components/cv/Interests';
import MyGitHub from '../Components/MyGitHub';

export default function Home() {
    return (
        <Page title="Startseite">
            <GridLayout>
                <ThatsMeImage />
                <GridColumn>
                    <TechStack />
                    <AtAGlance />
                </GridColumn>
            </GridLayout>
            <div className="my-4 grid gap-3 sm:grid-cols-2">
                <Button
                    label="Vollständigen Lebenslauf ansehen (auf meiner privaten Seite)"
                    to="https://samwilliam.de/lebenslauf/"
                    className="w-full"
                />
                <Button
                    label="Kontakt aufnehmen"
                    to="#kontakt"
                    variant="secondary"
                    className="w-full"
                    target={false}
                />
            </div>
            <MyKnowledge />
            <section id="lebenslauf" className="scroll-mt-24">
                <CVMainPage />
            </section>

            <section id="github" className="scroll-mt-24">
                <ContentTitle title="Meine GitHub-Projekte" />
                <MyGitHub />
            </section>

            <section id="kontakt" className="scroll-mt-24">
                <ContentTitle title="Nimm Kontakt zu mir auf" />
                <ContactMe />
            </section>
        </Page>
    );
}
