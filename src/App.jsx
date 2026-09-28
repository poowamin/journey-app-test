import EntryPage from "./pages/EntryPage.jsx";
import JournalPage from "./pages/JournalPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import WriteEntryPage from "./pages/WriteEntryPage.jsx";

function App() {
  const { pathname } = window.location;

  if (pathname === "/" || pathname === "/journal") {
    return <JournalPage />;
  }

  if (pathname === "/write") {
    return <WriteEntryPage />;
  }

  if (/^\/entries\/[^/]+$/.test(pathname)) {
    return <EntryPage />;
  }

  return <NotFoundPage />;
}

export default App;
