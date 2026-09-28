import JournalHeader from "../components/JournalHeader.jsx";

function NotFoundPage() {
  return (
    <>
      <JournalHeader />
      <main>
        <h1>Page not found</h1>
        <p>This journal page does not exist.</p>
        <a href="/">Return to the journal</a>
      </main>
    </>
  );
}

export default NotFoundPage;
