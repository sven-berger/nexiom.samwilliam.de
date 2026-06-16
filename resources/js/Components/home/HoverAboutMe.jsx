export default function HoverAboutMe() {
    return (
        <div>
            <p className="text-white text-lg font-semibold drop-shadow">Sven Berger</p>
            <p className="text-white/80 text-sm mt-1 drop-shadow">
                Fachinformatiker für Anwendungsentwicklung Lorem100 ipsum dolor sit amet,
                consectetur adipiscing elit. Donec vel sapien eget nunc efficitur varius. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
                qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
                quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>
            <p className="text-white/80 text-sm mt-3 drop-shadow">
                Mehr über mich findest du hier:{' '}
                <a href="/cv/" className="underline">
                    Lebenslauf
                </a>
            </p>
        </div>
    );
}
