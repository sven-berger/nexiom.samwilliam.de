export default function MyProfile({
    name,
    age,
    mail,
    phone,
    status,
    location,
    company,
    shortInfo,
}) {
    return (
        <>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 mb-3">
                <dt className="text-gray-500">Name:</dt>
                <dd className="font-medium text-gray-500">{name}</dd>

                <dt className="text-gray-500">Alter:</dt>
                <dd className="font-medium text-gray-500">
                    {age} (<small>Das Datum wird automatisch berechnet</small>)
                </dd>

                <dt className="text-gray-500">Wohnort:</dt>
                <dd className="font-medium text-gray-500">{location}</dd>

                <dt className="text-gray-500">E-Mail:</dt>
                <dd className="font-medium text-gray-500">
                    <span className="text-sm">
                        <a href={`mailto:${mail}`}>{mail}</a>
                    </span>
                </dd>
                <dt className="text-gray-500">Handynummer:</dt>
                <dd className="font-medium text-gray-500">+49 {phone}</dd>
            </dl>

            <hr className="border-slate-400 my-5" />

            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 mb-3">
                <dt className="text-gray-500">Betrieb:</dt>
                <dd className="font-medium text-gray-500">{company}</dd>

                <dt className="text-gray-500">Status:</dt>
                <dd className="font-medium text-gray-500">{status}</dd>
            </dl>

            <hr className="border-slate-400 my-5" />

            <dl className="block grid-cols-[auto_1fr] gap-x-6 gap-y-2 mb-3">
                <dd className="font-medium text-gray-500">{shortInfo}</dd>
            </dl>
        </>
    );
}
