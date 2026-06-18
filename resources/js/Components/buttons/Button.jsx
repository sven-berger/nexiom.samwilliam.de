const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700',
    secondary: 'bg-gray-500 hover:bg-gray-600',
    success: 'bg-green-600 hover:bg-green-700',
    warning: 'bg-yellow-500 hover:bg-yellow-600',
    error: 'bg-red-600 hover:bg-red-700',
};

export default function Button({
    to,
    label,
    variant = 'primary',
    className = '',
    type = 'button',
    target = true,
    onClick,
}) {
    const baseStyle = `text-white text-center rounded-2xl p-4 ${variants[variant] ?? variants.primary} ${className}`;
    const linkTarget = target === false ? undefined : target === true ? '_blank' : target;
    const linkRel = linkTarget === '_blank' ? 'noopener noreferrer' : undefined;

    if (to) {
        return (
            <a href={to} className={`block ${baseStyle}`} target={linkTarget} rel={linkRel}>
                {label ?? 'Button-Verlinkung'}
            </a>
        );
    } else {
        return (
            <button onClick={onClick} className={baseStyle} type={type}>
                {label ?? 'Button-Verlinkung'}
            </button>
        );
    }
}
