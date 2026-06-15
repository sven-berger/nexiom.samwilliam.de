export default function Box({ title, children, className = '' }) {
    if (!title) {
        return (
            <div className="rounded-2xl shadow-md">
                <div
                    className={`space-y-2 h-full my-3 p-4 text-slate-700 border-t border-2 border-slate-300 bg-white rounded-2xl ${className}`}
                >
                    {children}
                </div>
            </div>
        );
    } else {
        return (
            <div className="rounded-2xl shadow-md">
                <h3 className="mt-3 text-lg border-b border-slate-300 bg-slate-200 p-4 font-semibold text-slate-700 rounded-t-2xl">
                    {title}
                </h3>
                <div
                    className={`p-5 space-y-2 text-slate-700 border-t border border-slate-300 bg-white rounded-b-2xl ${className}`}
                >
                    {children}
                </div>
            </div>
        );
    }
}
