export default function Box({ title, children, className = '', grow = false, noPadding = false, noFlex = false }) {
    if (!title) {
        return (
            <div className={`${grow ? 'grow ' : ''}rounded-2xl mb-3`}>
                <div
                    className={`text-slate-700 border-2 border-slate-300 bg-white rounded-2xl ${noPadding ? `${noFlex ? '' : 'flex flex-col '}overflow-hidden` : 'h-full my-3 p-4 space-y-2'} ${className}`}
                >
                    {children}
                </div>
            </div>
        );
    } else {
        return (
            <div className={`${grow ? 'grow ' : ''}flex flex-col rounded-2xl`}>
                <h3 className="mt-3 text-lg border-b border-slate-300 bg-slate-200 p-4 font-semibold text-slate-700 rounded-t-2xl">
                    {title}
                </h3>
                <div
                    className={`flex-1 text-slate-700 border-t border border-slate-300 bg-white rounded-b-2xl overflow-hidden ${noPadding ? '' : 'p-5 space-y-2'} ${className}`}
                >
                    {children}
                </div>
            </div>
        );
    }
}
