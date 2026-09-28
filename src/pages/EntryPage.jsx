import BookLayout from "../components/BookLayout.jsx";
import EntryNavigation from "../components/EntryNavigation.jsx";
import JournalHeader from "../components/JournalHeader.jsx";

function EntryPage() {
  return (
    <>
      <JournalHeader />
      <main>
        <h1>Journal entry</h1>
        <BookLayout
          label="Journal entry pages"
          leftPage={<EntryNavigation />}
          rightPage={
            <>
              <h2>Entry title placeholder</h2>
              <p>Date placeholder</p>
              <p>Entry content will be displayed here.</p>
            </>
          }
        />
      </main>
    </>
  );
}

export default EntryPage;
