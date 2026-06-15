export default function Page({ title, children }) {
    if (!title) {
        return (
            <div className="flex-1 rounded-2xl shadow-md">
                <div className="h-full space-y-2 my-3 p-5 text-slate-700 border-t border-2 border-slate-300 bg-white rounded-2xl">
                    {children}
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex-1 flex flex-col rounded-2xl shadow-md">
                <h3 className="mt-3 text-lg border-b border-slate-300 bg-slate-200 p-4 font-semibold text-slate-700 rounded-t-2xl">
                    {title}
                </h3>
                <div className="flex-1 p-5 space-y-2 text-slate-700 border-t border border-slate-300 bg-white rounded-b-2xl">
                    {children}
                </div>
            </div>
        );
    }
}
