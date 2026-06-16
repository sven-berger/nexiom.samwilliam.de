import HR_Center from './HR_Center';

export default function MyProfile({ name, age, mail, phone, status, location, company }) {
    return (
        <>
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 mb-3">
                <dt className="text-gray-500">Name:</dt>
                <dd className="font-medium text-gray-500 text-right">{name}</dd>

                <dt className="text-gray-500">Alter:</dt>
                <dd className="font-medium text-gray-500 text-right">
                    {age} Jahre<span className="text-gray-300 text-sm italic"> *</span>
                </dd>

                <dt className="text-gray-500">Wohnort:</dt>
                <dd className="font-medium text-gray-500 text-right">{location}</dd>

                <dt className="text-gray-500">E-Mail:</dt>
                <dd className="font-medium text-gray-500 text-right">
                    <span>
                        <a href={`mailto:${mail}`}>{mail}</a>
                    </span>
                </dd>
                <dt className="text-gray-500">Handynummer:</dt>
                <dd className="font-medium text-gray-500 text-right">+49 {phone}</dd>
            </dl>

            <span className="flex justify-end text-gray-300 text-sm italic">
                * Das Alter wird automatisch berechnet
            </span>

            <HR_Center />
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 mb-3">
                <dt className="text-gray-500">Betrieb:</dt>
                <dd className="font-medium text-gray-500 text-right">{company}</dd>

                <dt className="text-gray-500">Status:</dt>
                <dd className="font-medium text-gray-500 text-right">{status}</dd>
            </dl>
        </>
    );
}
