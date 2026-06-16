import Box from '../Box';

export default function ThatsMeImage() {
    return (
        <Box noPadding className="mt-3">
            <div className="relative h-full min-h-48 rounded-2xl overflow-hidden">
                <img
                    src="/images/thatsMe.png"
                    alt="Sven Berger"
                    className="w-full h-185 object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent bg-black/70 opacity-70 p-4 text-white">
                    <p>Ich freue mich, Sie auf meiner persönlichen Webseite begrüßen zu dürfen!</p>
                </div>
            </div>
        </Box>
    );
}
