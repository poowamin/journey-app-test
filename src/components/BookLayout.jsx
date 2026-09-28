function BookLayout({ leftPage, rightPage, label = "Journal pages" }) {
  return (
    <section aria-label={label}>
      <article>{leftPage}</article>
      <article>{rightPage}</article>
    </section>
  );
}

export default BookLayout;
