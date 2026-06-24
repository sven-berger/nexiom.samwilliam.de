import Box from '../../Box';
import Button from '../../buttons/Button';
import GitHubButton from '../../buttons/GitHubButton';
import GoogleButton from '../../buttons/GoogleButton';

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

                    <GoogleButton variant="primary" link={'/auth/google'} />
                    <GitHubButton variant="primary" link={'/auth/github'} />
                </div>
            </form>
        </Box>
    );
}
