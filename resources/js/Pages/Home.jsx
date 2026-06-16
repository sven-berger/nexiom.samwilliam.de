import Box from '../Components/Box';
import Page from '../Components/Page';
import GridLayout from '../Components/grid/GridLayout';
import GridColumn from '../Components/grid/GridColumn';
import ThatsMeImage from '../Components/home/ThatsMeImage';
import Counter from '../Components/home/Counter';
import TechStack from '../Components/home/TechStack';
import Card from '../Components/Cards';
import ContentTitle from '../Components/ContentTitle';

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
            <ContentTitle title="Meine Kenntnisse" />
            <GridLayout cols={5}>
                <Card
                    title="Laravel"
                    description="Hier findest du meinen Blog, in dem ich über meine Erfahrungen in der IT-Welt berichte. Von Projekten bis hin zu Tipps und Tricks – alles rund um die IT."
                    image="/images/knowledge/laravel.webp"
                />
                <Card
                    title="React"
                    description="Hier findest du meinen Blog, in dem ich über meine Erfahrungen in der IT-Welt berichte. Von Projekten bis hin zu Tipps und Tricks – alles rund um die IT."
                    image="/images/knowledge/react.webp"
                />
                <Card
                    title="Tailwind CSS"
                    description="Hier findest du eine Übersicht meiner Projekte, an denen ich gearbeitet habe. Von Webanwendungen bis hin zu Open-Source-Beiträgen – entdecke meine Arbeit und meine Fähigkeiten."
                    image="/images/knowledge/tailwindcss.webp"
                />
                <Card
                    title="GitHub"
                    description="Hier findest du Möglichkeiten, mit mir in Kontakt zu treten. Ob per E-Mail oder über soziale Medien – ich freue mich darauf, von dir zu hören!"
                    image="/images/knowledge/git.webp"
                />
                <Card
                    title="Ausbildung"
                    description="Hier findest du Möglichkeiten, mit mir in Kontakt zu treten. Ob per E-Mail oder über soziale Medien – ich freue mich darauf, von dir zu hören!"
                    image="/images/knowledge/general.png"
                    link="/cv/"
                />
            </GridLayout>
        </Page>
    );
}
