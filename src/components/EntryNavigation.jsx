function EntryNavigation({ previousEntry, nextEntry }) {
  return (
    <nav aria-label="Entry navigation" className="flex flex-col gap-3">
      <a
        href="/journal"
        className="text-sm text-amber-800 underline underline-offset-2 hover:text-amber-950"
      >
        All entries
      </a>
      {/* Hide either direction when the current entry is at that end of the list. */}
      {previousEntry && (
        <a
          href={`/entries/${previousEntry.id}`}
          className="mt-auto rounded-md border border-amber-200 p-3 text-amber-950 hover:bg-amber-100"
        >
          <span className="block text-xs uppercase tracking-wide text-amber-800">
            Older entry
          </span>
          <span className="mt-1 block font-medium">{previousEntry.title}</span>
        </a>
      )}
      {nextEntry && (
        <a
          href={`/entries/${nextEntry.id}`}
          className="rounded-md border border-amber-200 p-3 text-amber-950 hover:bg-amber-100"
        >
          <span className="block text-xs uppercase tracking-wide text-amber-800">
            Newer entry
          </span>
          <span className="mt-1 block font-medium">{nextEntry.title}</span>
        </a>
      )}
    </nav>
  );
}

export default EntryNavigation;
