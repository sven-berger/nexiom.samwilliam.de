import Box from '../../Box';
import MyProfile from '../../MyProfile';
import Button from '../../Button';

export default function AboutMe() {
    const birthday = new Date(1991, 0, 21);
    const today = new Date();
    const age =
        today.getFullYear() -
        birthday.getFullYear() -
        (today.getMonth() < birthday.getMonth() ||
        (today.getMonth() === birthday.getMonth() && today.getDate() < birthday.getDate())
            ? 1
            : 0);
    return (
        <Box title="Über mich">
            <MyProfile
                name="Sven Berger"
                age={age}
                mail="bergersvenoliver@gmail.com"
                phone={15119409788}
                status="Praktikum beendet"
                location="Idstein"
                company="WolkenWerk GmbH"
                shortInfo={
                    <>
                        <p className="mb-3">
                            Meine Begeisterung für die IT wurde früh durch meinen Vater, einen
                            Senior System Manager, geweckt. Auch während meiner beruflichen
                            Stationen außerhalb der IT hat mich das Thema nie losgelassen – weshalb
                            ich nun bewusst den Weg in die Anwendungsentwicklung gehe.
                        </p>
                        <Button
                            label="Mehr erfahren"
                            variant="secondary"
                            onClick={() => alert('Mehr erfahren')}
                            className="w-full"
                        />
                    </>
                }
            />
        </Box>
    );
}
