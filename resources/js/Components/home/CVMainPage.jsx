import Button from '../Button';
import Page from '../Page';
import ContentTitle from '../ContentTitle';
import CVAboutMe from '../cv/CVAboutMe';
import InternshipWWRK from '../cv/InternshipWWRK';
import EDEKA from '../cv/EDEKA';
import McSL from '../cv/MCSL';
import MC from '../cv/MC';
import FiAE from '../cv/FiAE';
import ITKnowledge from '../cv/ITKnowledge';
import EDVKnowledge from '../cv/EDVKnowledge';
import SocialSkills from '../cv/SocialSkills';
import GridLayout from '../grid/GridLayout';
import Interests from '../cv/Interests';

export default function CVMainPage() {
    return (
        <>
            <ContentTitle title="Beruflicher Werdegang" />
            <InternshipWWRK />
            <EDEKA />
            <McSL />
            <ContentTitle title="Ausbildung" />
            <FiAE />
            <MC />
            <section id="interessen" className="scroll-mt-24">
                <Interests />
            </section>
            <Button
                className="mt-5"
                to={'/cv/'}
                variant="secondary"
                label="Zum kompletten Lebenslauf 2"
            />
        </>
    );
}
