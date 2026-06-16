const colsMap = {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5',
    6: 'lg:grid-cols-6',
};

export default function GridLayout({ cols = 2, children }) {
    return <div className={`grid gap-2.5 items-stretch ${colsMap[cols]}`}>{children}</div>;
}
