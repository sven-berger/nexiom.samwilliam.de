import Box from '../Box';
import ContentTitle from '../ContentTitle';

export default function ContactMe() {
    return (
        <>
            <ContentTitle title="Nimm Kontakt zu mir auf" />
            <Box>
                <form action="https://formspree.io/f/mayvlgqj" method="POST" className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 mb-3"
                        >
                            Name*
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full rounded-2xl border border-slate-300 bg-slate-100 p-4 text-sm"
                            placeholder="Name eingeben"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-3"
                        >
                            E-Mail*
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full rounded-2xl border border-slate-300 bg-slate-100 p-4 text-sm"
                            placeholder="E-Mail eingeben"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 mb-3"
                        >
                            Nachricht*
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            required
                            className="w-full rounded-2xl border border-slate-300 bg-slate-100 p-4 text-sm"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Nachricht senden
                    </button>
                    <small className="block mt-2 text-gray-500">
                        * Diese Felder sind erforderlich.
                    </small>
                </form>
            </Box>
        </>
    );
}
