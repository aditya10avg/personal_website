const QuotesSection = () => {
  return (
    <section id="quotes" className="py-8">
      <div className="container max-w-6xl mx-auto px-0">
        <div className="-ml-4">
          <h2 className="text-3xl font-jura font-semibold mb-6">
            <a 
              href="/quotes" 
              className="hover:text-primary/70 transition-colors"
            >
              Best Quotes I have ever heard →
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection; 