function JournalHeader() {
  return (
    <header className="mx-auto mt-6 flex max-w-4xl items-center justify-between rounded-lg border border-gray-300 bg-white px-6 py-4 shadow-sm">
      <a className="font-semibold text-gray-900" href="/">
        Journal
      </a>
      {/* Simple URL links let the app's pathname-based routing select a page. */}
      <nav className="flex gap-4" aria-label="Main navigation">
        <a className="text-gray-700 hover:text-gray-950" href="/">
          Home
        </a>
        <a className="text-gray-700 hover:text-gray-950" href="/write">
          Write entry
        </a>
      </nav>
    </header>
  );
}

export default JournalHeader;
