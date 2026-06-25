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
import MyGitHub from '../Components/MyGitHub';
import Imprint from '../Components/home/Imprint';
import Privacy from '../Components/home/Privacy';

export default function Home() {
    return (
        <Page title="RiftCore.de - Sven Berger">
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
                    to="#contact"
                    variant="secondary"
                    className="w-full"
                    target={false}
                />
            </div>
            <section id="knowledge" className="scroll-mt-24">
                <MyKnowledge />
            </section>
            <section id="cv" className="scroll-mt-24">
                <CVMainPage />
            </section>

            <section id="github" className="scroll-mt-24">
                <ContentTitle title="Meine GitHub Repositories" />
                <MyGitHub />
            </section>

            <section id="imprint" className="scroll-mt-24">
                <Imprint />
            </section>

            <section id="privacy" className="scroll-mt-24">
                <Privacy />
            </section>

            <section id="contact" className="scroll-mt-24">
                <ContactMe />
            </section>
        </Page>
    );
}
