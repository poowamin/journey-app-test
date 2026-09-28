import BookLayout from "../components/BookLayout.jsx";
import EntryForm from "../components/EntryForm.jsx";
import JournalHeader from "../components/JournalHeader.jsx";

function WriteEntryPage() {
  // Reuse the book layout to present the writing form as the right-hand page.
  return (
    <>
      <JournalHeader />
      <main>
        <h1>Write an entry</h1>
        <BookLayout
          leftPage={
            <>
              <h2>A new page</h2>
              <p>This page is ready for your thoughts.</p>
            </>
          }
          rightPage={<EntryForm />}
        />
      </main>
    </>
  );
}

export default WriteEntryPage;
