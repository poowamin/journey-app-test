import BookLayout from "../components/BookLayout.jsx";
import EntryList from "../components/EntryList.jsx";
import JournalHeader from "../components/JournalHeader.jsx";

function JournalPage() {
  return (
    <>
      <JournalHeader/>
      <main>
        <h1>Journal</h1>
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
