import entries from "../data/entries.js";

function EntryList() {
  return (
    <section
      aria-labelledby="entries-heading"
      className="flex min-h-64 flex-col"
    >
      <h2 id="entries-heading" className="text-xl font-semibold text-amber-950">
        Journal entries
      </h2>
      <ul className="mt-4 flex flex-col gap-3">
        {/* Each mock entry links to its detail page using its unique ID. */}
        {entries.map((entry) => (
          <li key={entry.id}>
            <a
              href={`/entries/${entry.id}`}
              className="block rounded-md border border-amber-200 p-3 text-amber-950 transition-colors hover:bg-amber-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
            >
              <span className="block font-medium">{entry.title}</span>
              <span className="mt-1 block text-sm text-amber-800">
                {entry.date}
              </span>
              <span className="mt-1 block text-sm text-amber-900">
                {entry.excerpt}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default EntryList;
