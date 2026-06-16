import Page from '../Components/Page';
import GridLayout from '../Components/grid/GridLayout';
import GridColumn from '../Components/grid/GridColumn';
import ThatsMeImage from '../Components/home/ThatsMeImage';
import Counter from '../Components/home/Counter';
import TechStack from '../Components/home/TechStack';
import Card from '../Components/Cards';
import Button from '../Components/Button';
import ContentTitle from '../Components/ContentTitle';
import ContactMe from '../Components/home/ContactMe';
import MyKnowledge from '../Components/home/MyKnowledge';
import CVMainPage from '../Components/home/CVMainPage';
import Interests from '../Components/cv/Interests';

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

            <section id="kontakt" className="scroll-mt-24">
                <ContentTitle title="Nimm Kontakt zu mir auf" />
                <ContactMe />
            </section>
        </Page>
    );
}
