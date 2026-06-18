import GridLayout from '../grid/GridLayout';
import ContentTitle from '../ContentTitle';
import Card from '../Cards';

export default function MyKnowledge() {
    return (
        <>
            <ContentTitle title="Meine Kenntnisse" />
            <GridLayout cols={5}>
                <Card
                    title="Laravel"
                    description="Backend-Entwicklung mit sauberer Struktur, Authentifizierung und wartbaren APIs in Laravel."
                    image="/images/knowledge/laravel.webp"
                />
                <Card
                    title="React"
                    description="Komponentenbasierte Frontends mit Fokus auf Lesbarkeit, State-Management und gute UX."
                    image="/images/knowledge/react.webp"
                />
                <Card
                    title="Tailwind CSS"
                    description="Schnelles UI-Prototyping und konsistente Designsysteme mit utility-first Styling."
                    image="/images/knowledge/tailwindcss.webp"
                />
                <Card
                    title="GitHub"
                    description="Versionsverwaltung mit klaren Commits, Branching-Strategien und dokumentierten Projekten."
                    image="/images/knowledge/git.webp"
                />
                <Card
                    title="Ausbildung"
                    description="IHK-Umschulung zum Fachinformatiker für Anwendungsentwicklung mit praxisnahen Projekten."
                    image="/images/knowledge/general.png"
                    link="/cv/"
                />
            </GridLayout>
        </>
    );
}
