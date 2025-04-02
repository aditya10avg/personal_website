const quotes = [
  {
    text: "Impatience with action and patience with result.",
    author: "Aditya"
  },
  {
    text: "Humans are dynamic, there are times a person might be introvert, there are times a person might be an extrovert, there will be a context in which you will be pessimistic and there will be a context in which you will be optimistic.",
    author: "Aditya"
  },
  {
    text: "When you fail there are infinite - 1 more opportunities i.e. Infinite more opportunities.",
    author: "Aditya"
  }
];

const QuotesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-0 py-16">
        <div className="-ml-4">
          <h1 className="text-3xl font-jura font-semibold mb-12">
            Best Quotes I have ever heard
          </h1>

          <div className="space-y-12 text-lg font-jura">
            {quotes.map((quote, index) => (
              <div 
                key={index} 
                className="p-6 bg-card/50 rounded-lg hover:bg-card/80 transition-colors"
              >
                <p className="mb-4 leading-relaxed">"{quote.text}"</p>
                <p className="text-primary text-sm">- {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotesPage; 