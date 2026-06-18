import Box from '../../Box';
import MyProfile from '../../MyProfile';
import Button from '../../buttons/Button';

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
                phone="1511 9409788"
                status="Praktikum beendet"
                location="Idstein"
                company="WolkenWerk GmbH"
            />
            <Button
                label="Mehr erfahren"
                variant="secondary"
                onClick={() => alert('Mehr erfahren')}
                className="mt-5 w-full"
            />
        </Box>
    );
}
