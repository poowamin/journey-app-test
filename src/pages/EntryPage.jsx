import BookLayout from "../components/BookLayout.jsx";
import EntryNavigation from "../components/EntryNavigation.jsx";
import JournalHeader from "../components/JournalHeader.jsx";
import entries from "../data/entries.js";

function EntryPage() {
  // Match the URL's final segment to an entry ID from the mock data.
  const entryId = decodeURIComponent(window.location.pathname.split("/").pop());
  const entryIndex = entries.findIndex((entry) => entry.id === entryId);
  const entry = entries[entryIndex];

  // Unknown IDs render a recovery link instead of an empty entry page.
  if (!entry) {
    return (
      <>
        <JournalHeader />
        <main className="mx-auto mt-6 max-w-4xl px-6">
          <h1 className="text-2xl font-semibold text-amber-950">
            Entry not found
          </h1>
          <p className="mt-2 text-amber-900">
            This journal entry does not exist.
          </p>
          <a
            href="/journal"
            className="mt-4 inline-block text-amber-800 underline underline-offset-2"
          >
            Return to the journal
          </a>
        </main>
      </>
    );
  }

  // Entries are newest-first, so adjacent array positions provide older/newer links.
  const previousEntry = entries[entryIndex + 1];
  const nextEntry = entries[entryIndex - 1];

  // Show navigation on the left page and the selected entry on the right.
  return (
    <>
      <JournalHeader />
      <main className="px-4">
        <h1 className="mx-auto mt-6 max-w-4xl text-2xl font-semibold text-amber-950">
          {entry.title}
        </h1>
        <BookLayout
          label="Journal entry pages"
          leftPage={
            <EntryNavigation
              previousEntry={previousEntry}
              nextEntry={nextEntry}
            />
          }
          rightPage={
            <article className="space-y-4 text-amber-950">
              <p className="text-sm text-amber-800">{entry.date}</p>
              <h2 className="text-xl font-semibold">{entry.title}</h2>
              <p className="whitespace-pre-line leading-7">{entry.content}</p>
            </article>
          }
        />
      </main>
    </>
  );
}

export default EntryPage;
