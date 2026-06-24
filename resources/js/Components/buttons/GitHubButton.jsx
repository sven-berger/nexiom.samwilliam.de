export default function GitHubButton({
    to,
    label,
    variant = 'primary',
    title = 'Mit GitHub anmelden',
    link = '/auth/github',
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
            ? '/images/thirdPartyLogin/github.png'
            : '/images/thirdPartyLogin/github-white.png';
    const linkTarget = target === false ? undefined : target === true ? '_blank' : target;
    const linkRel = linkTarget === '_blank' ? 'noopener noreferrer' : undefined;

    return (
        <a
            href={href}
            target={linkTarget}
            rel={linkRel}
            className={`flex items-center justify-center w-full border border-gray-200 rounded-2xl p-3 text-center text-sm font-semibold ${variants[variant]} ${className}`}
        >
            <img src={imageSrc} alt="GitHub Logo" className="inline-block mr-2 h-5 w-5" />
            {text}
        </a>
    );
}
