import Box from '../../Box';
import Button from '../../Button';

export default function LoginForm() {
    return (
        <Box title="Anmeldung">
            <form className="space-y-4">
                <div>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="w-full rounded-2xl border border-slate-300 bg-slate-100 p-4"
                        placeholder="Benutzernamen eingeben"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full rounded-2xl border border-slate-300 bg-slate-100 p-4"
                        placeholder="Passwort eingeben"
                    />
                </div>
                <div className="space-y-3">
                    <Button type="submit" variant="success" label="Anmelden" className="w-full" />
                    <Button
                        to="/forgot-password"
                        label="Passwort vergessen?"
                        variant="primary"
                        className="w-full"
                    />
                    <Button
                        to="/register"
                        label="Registrieren"
                        variant="secondary"
                        className="w-full"
                    />
                </div>
            </form>
        </Box>
    );
}
