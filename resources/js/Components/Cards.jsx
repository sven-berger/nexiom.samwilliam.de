export default function Card({
    link,
    image,
    title,
    children,
    description,
    className = 'bg-white',
}) {
    if (link) {
        return (
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group h-full flex flex-col w-full ${className} border border-gray-300 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
                <article
                    className={`h-full flex flex-col w-full ${className} border border-gray-300 rounded-2xl overflow-hidden`}
                >
                    <img
                        src={image ?? '/images/placeholder-image.jpg'}
                        alt={title ?? 'Platzhalter'}
                        className="rounded-t-2xl w-full object-fit h-55 transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="p-3 sm:px-6 sm:pb-6">
                        <h5 className="mb-2 mt-5 text-2xl text-gray-900">
                            {title ?? 'Noteworthy technology acquisitions 2021'}
                        </h5>
                        <div className="mb-3 dark:text-gray-400">
                            {description ??
                                children ??
                                'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'}
                        </div>
                    </div>
                </article>
            </a>
        );
    } else {
        return (
            <article
                className={`group h-full flex flex-col w-full ${className} border border-gray-300 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
                <img
                    src={image ?? '/images/placeholder-image.jpg'}
                    alt={title ?? 'Platzhalter'}
                    className="rounded-t-2xl w-full object-fit h-55 transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-3 sm:px-6 sm:pb-6">
                    <h5 className="mb-2 mt-5 text-2xl text-gray-900">
                        {title ?? 'Noteworthy technology acquisitions 2021'}
                    </h5>
                    <div className="mb-3 dark:text-gray-400">
                        {description ??
                            children ??
                            'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'}
                    </div>
                </div>
            </article>
        );
    }
}
