const QuotesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-0 py-16">
        <div className="-ml-4">
          <h1 className="text-3xl font-jura font-semibold mb-12">
            Best Quotes I have ever heard
          </h1>

          <div className="space-y-8 text-lg font-jura">
            <p className="hover:text-primary/70 transition-colors">
              "The only way to do great work is to love what you do." - Steve Jobs
            </p>
            {/* Add more quotes here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesPage; 