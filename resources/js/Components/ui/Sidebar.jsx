import Weather from './Sidebar/Weather';
import AboutMe from './Sidebar/AboutMe';
import LoginForm from './Sidebar/LoginForm';

export default function Sidebar() {
    return (
        <div className="min-h-full flex-1">
            <AboutMe />
            <Weather />
            <LoginForm />
        </div>
    );
}
