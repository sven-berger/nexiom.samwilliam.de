const variants = {
    primary: 'bg-indigo-600',
    secondary: 'bg-fuchsia-500',
    success: 'bg-green-600',
    warning: 'bg-yellow-500',
    error: 'bg-red-600',
};

export default function Label({ label, variant = 'primary', className = '' }) {
    const baseStyle = `text-white text-sm text-center rounded-2xl px-2 py-1 ${variants[variant] ?? variants.primary} ${className}`;

    return <span className={baseStyle}>{label}</span>;
}
