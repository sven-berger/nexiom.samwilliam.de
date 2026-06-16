import Box from '../Box';
import HoverAboutMe from './HoverAboutMe';

export default function ThatsMeImage() {
    return (
        <Box noPadding className="mt-3">
            <div className="group relative lg:h-255 min-h-48 rounded-2xl overflow-hidden">
                <img
                    src="/images/thatsMe.png"
                    alt="Sven Berger"
                    className="w-full h-full object-cover object-top transition-all duration-500 group-hover:scale-105 group-hover:blur-sm group-hover:brightness-75"
                />
                <HoverAboutMe />
            </div>
        </Box>
    );
}
