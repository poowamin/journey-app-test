function BookLayout({ leftPage, rightPage, label = "Journal pages" }) {
  return (
    /* Reusable book shell: callers supply the content for each facing page. */
    <section
      className="mx-auto mt-6 h-125 w-230 rounded-xl border border-amber-950 bg-amber-900 p-2 shadow-xl mb-6"
      aria-label={label}
    >
      <div className="grid h-full overflow-hidden rounded-lg md:grid-cols-[minmax(0,1fr)_1rem_minmax(0,1fr)]">
        <article className="min-h-80 bg-amber-50 p-6 shadow-inner sm:p-8">
          {leftPage}
        </article>
        <div
          aria-hidden="true"
          className="hidden bg-linear-to-r from-amber-200 via-amber-800 to-amber-200 shadow-inner md:block"
        />
        <article className="min-h-80 border-t border-amber-200 bg-amber-50 p-6 shadow-inner sm:p-8 md:border-t-0">
          {rightPage}
        </article>
      </div>
    </section>
  );
}

export default BookLayout;
