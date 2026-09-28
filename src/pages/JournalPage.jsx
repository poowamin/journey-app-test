import BookLayout from "../components/BookLayout.jsx";
import EntryList from "../components/EntryList.jsx";
import JournalHeader from "../components/JournalHeader.jsx";

function JournalPage() {
  // Compose the shared navigation and book, placing the intro and entry list on separate pages.
  return (
    <>
      <JournalHeader />
      <main>
        <h1 className="mx-auto mt-6 max-w-4xl text-2xl font-semibold text-gray-900 rounded-2xl border border-gray-300 bg-white px-6 py-4 shadow-sm">
          Journal
        </h1>
        <BookLayout
          leftPage={
            <>
              <h2>Your journal</h2>
              <p>Your thoughts and feelings, one page at a time.</p>
            </>
          }
          rightPage={<EntryList />}
        />
      </main>
    </>
  );
}

export default JournalPage;
