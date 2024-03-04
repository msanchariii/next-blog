import Link from "next/link";

const ArchiveSection = () => {
    // Get the current date
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate
        .toLocaleString("default", { month: "short" })
        .toLowerCase();

    // Mapping of month names from full to short (for database)
    const monthMap = {
        january: "jan",
        february: "feb",
        march: "mar",
        april: "apr",
        may: "may",
        june: "jun",
        july: "jul",
        august: "aug",
        september: "sep",
        october: "oct",
        november: "nov",
        december: "dec",
    };

    // Generate the links for the last 12 months
    const archiveLinks = [];
    for (let i = 0; i < 12; i++) {
        const date = new Date(currentDate);
        date.setMonth(currentDate.getMonth() - i);

        const year = date.getFullYear();
        const month = date
            .toLocaleString("default", { month: "long" })
            .toLowerCase();
        const shortMonth = monthMap[month];

        archiveLinks.push(
            <li
                className="hover:underline cursor-pointer font-normal"
                key={`${shortMonth}-${year}`}
            >
                <Link href={`/blog/search/${year}/${shortMonth}`}>
                    {`${
                        month.charAt(0).toUpperCase() + month.slice(1)
                    }, ${year}`}
                </Link>
            </li>
        );
    }

    return (
        <div>
            <h2 className="font-semibold">Archive</h2>
            <ul className="list-disc pl-6">{archiveLinks}</ul>
        </div>
    );
};

export default ArchiveSection;
