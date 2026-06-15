// Props kommen direkt von der Laravel-Route
import Button from '../Components/Button';
import Page from '../Components/Page';

export default function Test({ name }) {
    return (
        <Page title="Testseite">
            <h1>Hallo, {name}, willkommen bei deiner Testseite!</h1>
            <Button label="Klick mich" />
        </Page>
    );
}
