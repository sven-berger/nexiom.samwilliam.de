import Box from '../../Box';
import MyProfile from '../../MyProfile';

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
                shortInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores alias mollitia nemo soluta, libero tempore veritatis numquam aliquam officiis? Doloribus."
            />
        </Box>
    );
}
