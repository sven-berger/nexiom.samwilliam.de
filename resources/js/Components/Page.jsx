export default function Page({ title, children, hasBg = false }) {
    if (!title) {
        return (
            <div className="flex-1 flex flex-col rounded-2xl mt-3">
                <div
                    className={`flex-1 p-5 space-y-2 text-slate-700 ${hasBg ? 'border-t border border-slate-300 bg-white rounded-2xl' : ''}`}
                >
                    {children}
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex-1 flex flex-col rounded-2xl">
                <div className="mt-3 border-t border-2 border-slate-300 bg-white rounded-2xl p-5 text-slate-700 flex items-center justify-center">
                    <h1 className="text-2xl font-bold">{title}</h1>
                </div>
                <div
                    className={`flex-1 flex flex-col text-slate-700 ${hasBg ? 'mt-3 border-t border border-slate-300 bg-white rounded-2xl' : ''}`}
                >
                    {children}
                </div>
            </div>
        );
    }
}
