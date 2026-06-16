import Box from '../../Box';
import Button from '../../Button';

export default function LoginForm() {
    return (
        <Box title="Anmeldung" className="mt-0" grow>
            <form className="space-y-4">
                <div>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-full rounded-2xl border border-slate-300 bg-slate-100 p-4 text-sm"
                        placeholder="Benutzernamen eingeben"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full rounded-2xl border border-slate-300 bg-slate-100 p-4 text-sm"
                        placeholder="Passwort eingeben"
                    />
                </div>
                <div className="space-y-3">
                    <Button
                        type="submit"
                        variant="success"
                        label="Anmelden"
                        className="w-full text-sm"
                    />
                    <Button
                        to="/forgot-password"
                        label="Passwort vergessen?"
                        variant="primary"
                        className="w-full text-sm"
                    />
                    <Button
                        to="/register"
                        label="Registrieren"
                        variant="secondary"
                        className="w-full text-sm"
                    />
                    <a
                        href="/auth/google"
                        className="flex items-center justify-center w-full border border-gray-200 rounded-2xl bg-gray-100 p-3 text-center text-sm font-semibold text-black hover:bg-gray-200"
                    >
                        <img
                            src="/images/thirdPartyLogin/google.png"
                            alt="Google Logo"
                            className="inline-block mr-2 h-5 w-5"
                        />
                        Mit Google anmelden
                    </a>

                    <a
                        href="/auth/github"
                        className="flex items-center justify-center w-full border border-gray-200 rounded-2xl bg-gray-100 p-3 text-center text-sm font-semibold text-black hover:bg-gray-200"
                    >
                        <img
                            src="/images/thirdPartyLogin/github.png"
                            alt="GitHub Logo"
                            className="inline-block mr-2 h-5 w-5"
                        />
                        Mit GitHub anmelden
                    </a>
                </div>
            </form>
        </Box>
    );
}
