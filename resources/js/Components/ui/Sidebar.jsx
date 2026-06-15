import Navigation from './Sidebar/Navigation';
import Weather from './Sidebar/Weather';
import AboutMe from './Sidebar/AboutMe';
import LoginForm from './Sidebar/LoginForm';
import Counter from './Sidebar/Counter';

export default function Sidebar() {
    return (
        <div className="min-h-full flex-1">
            <Navigation />
            <AboutMe />
            <Counter />
            <Weather />
            <LoginForm />
        </div>
    );
}
