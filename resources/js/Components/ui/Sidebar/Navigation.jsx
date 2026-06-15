import Box from '../../Box';
import { Link } from '@inertiajs/react';

export default function Navigation() {
    return (
        <Box title="Navigation">
            <ul>
                <li>
                    <Link href="/" className="block rounded hover:bg-gray-200">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard" className="block rounded hover:bg-gray-200">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="/test" className="block rounded hover:bg-gray-200">
                        Testseite
                    </Link>
                </li>
            </ul>
        </Box>
    );
}
