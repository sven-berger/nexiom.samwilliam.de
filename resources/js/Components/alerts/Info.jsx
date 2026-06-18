export default function Info({ children, className = '' }) {
    return (
        <div
            className={`mt-4 mb-5 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-3 ${className}`}
        >
            <div className="text-sm font-medium text-emerald-800 hover:text-emerald-900">
                {children ??
                    'Hier findest du weitere Informationen zu meinen Projekten, Erfahrungen und Interessen. Schau dich gerne um!'}
            </div>
        </div>
    );
}
