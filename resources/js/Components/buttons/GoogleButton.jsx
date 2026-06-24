export default function GitHubButton({
    to,
    label,
    variant = 'primary',
    title = 'Mit Google anmelden',
    link = '/auth/google',
    target = true,
    className = '',
}) {
    const variants = {
        primary: 'bg-gray-100 hover:bg-gray-200',
        secondary: 'bg-gray-500 hover:bg-gray-600 text-white',
    };

    const href = to ?? link;
    const text = label ?? title;
    const imageSrc =
        variant === 'primary'
            ? '/images/thirdPartyLogin/google.png'
            : '/images/thirdPartyLogin/google-white.png';
    const linkTarget = target === false ? undefined : target === true ? '_blank' : target;
    const linkRel = linkTarget === '_blank' ? 'noopener noreferrer' : undefined;

    return (
        <a
            href={href}
            target={linkTarget}
            rel={linkRel}
            className={`flex items-center justify-center w-full border border-gray-200 p-3 text-center text-sm rounded-2xl font-semibold ${variants[variant]} ${className}`}
        >
            <img src={imageSrc} alt="Google Logo" className="inline-block mr-2 h-5 w-5" />
            {text}
        </a>
    );
}
