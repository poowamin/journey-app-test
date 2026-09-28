function EntryForm() {
  return (
    <form>
      <h2>Write an entry</h2>

      <label htmlFor="entry-title">Title</label>
      <input id="entry-title" name="title" type="text" />

      <label htmlFor="entry-date">Date</label>
      <input id="entry-date" name="date" type="date" />

      <label htmlFor="entry-content">Your entry</label>
      <textarea id="entry-content" name="content" rows="8" />
    </form>
  );
}

export default EntryForm;
