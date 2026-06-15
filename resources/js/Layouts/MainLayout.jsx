import Header from '../Components/ui/Header';
import Footer from '../Components/ui/Footer';
import Sidebar from '../Components/ui/Sidebar';

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col p-4">
            <Header />
            <main className="flex flex-1 gap-8 flex-col md:flex-row">
                <aside className="order-2 md:order-1 min-w-0 lg:w-110">
                    <Sidebar title="Navigation" />
                </aside>

                <section className="order-1 md:order-2 flex-1 min-w-0 flex flex-col">{children}</section>
            </main>
            <Footer />
        </div>
    );
}
