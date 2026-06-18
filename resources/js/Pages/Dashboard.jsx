// Props kommen direkt von der Laravel-Route
import Button from '../Components/buttons/Button';
import Box from '../Components/Box';
import GridLayout from '../Components/grid/GridLayout';
import Page from '../Components/Page';

export default function Dashboard({ name }) {
    return (
        <>
            <Box title="Dashboard">
                <h1>Hallo, {name}, willkommen bei deinem persönlichen Dashboard!</h1>
            </Box>
            <GridLayout cols={3}>
                <Box className="flex justify-center items-center">
                    <p>Inhalt der Box 1</p>
                </Box>
                <Box className="flex justify-center items-center">
                    <p>Inhalt der Box 2</p>
                </Box>
                <Box className="flex justify-center items-center">
                    <p>Inhalt der Box 3</p>
                </Box>
            </GridLayout>
            <div className="mt-4 h-full">
                <Page title="Weitere Informationen">
                    <p>Hier findest du weitere Informationen und Details zu deinem Dashboard.</p>
                </Page>
            </div>
        </>
    );
}
