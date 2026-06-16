import Button from '../Components/Button';
import Page from '../Components/Page';
import ContentTitle from '../Components/ContentTitle';
import CVAboutMe from '../Components/cv/CVAboutMe';
import InternshipWWRK from '../Components/cv/InternshipWWRK';
import EDEKA from '../Components/cv/EDEKA';
import McSL from '../Components/cv/MCSL';
import MC from '../Components/cv/MC';
import FiAE from '../Components/cv/FiAE';
import ITKnowledge from '../Components/cv/ITKnowledge';
import EDVKnowledge from '../Components/cv/EDVKnowledge';
import SocialSkills from '../Components/cv/SocialSkills';
import GridLayout from '../Components/grid/GridLayout';
import Interests from '../Components/cv/Interests';

export default function CV() {
    return (
        <>
            <Page title="Lebenslauf">
                <CVAboutMe />
                <ContentTitle title="Beruflicher Werdegang" />
                <InternshipWWRK />
                <EDEKA />
                <McSL />
                <ContentTitle title="Ausbildung" />
                <FiAE />
                <MC />
                <ContentTitle title="Kenntnisse & Interessen" />
                <GridLayout cols={3}>
                    <ITKnowledge />
                    <EDVKnowledge />
                    <SocialSkills />
                </GridLayout>
                <Interests />
                <Button
                    className="mt-5"
                    to={'/cv/complete/'}
                    variant="secondary"
                    label="Zum kompletten Lebenslauf"
                />
                <Button
                    className="mt-2"
                    to={'/cv/Lebenslauf_Berger.pdf'}
                    variant="success"
                    label="Lebenslauf herunterladen"
                />
            </Page>
        </>
    );
}
