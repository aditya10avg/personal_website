const quotes = [
  {
    text: "Be impatient with action and patient with result.",
  },
  {
    text: "Humans are dynamic, there are times a person might be introvert, there are times a person might be an extrovert, there will be a context in which you will be pessimistic and there will be a context in which you will be optimistic. Your traits are dynamic and changes with conditions you are in.",
    },
  {
    text: "When you fail there are infinite-1 more opportunities i.e. Infinite more opportunities.",
    
  },
  {
    text: "Your real resume is the catalogue of all your sufferings.", 
  },
  {
    text: "Any freedom that desires for more freedom is not a freedom.",
  },
  {
    text: "The only way to do great work is to love what you do.",
  },
  {
    text:"The solution to any problem is not the solution you think it is but the problem itself. It is somewhere deeply rooted in the problem.Go backwards to solve that problem",
  },
  {
    text: "The only way to do great work is to love what you do.",
  },
  {
    text: "The only way to do great work is to love what you do.",
  },
  {
    text: "Life is not the journey as you think it is most often, it has a destination. If there is no destination there would be no journey. There would be no compulsion to start your journey at all without a destination.",
  },
  {
    text: "Hard work doesn't mean efficient work.",
  },
  {
    text: "We are naturally drawn to things when we immersed into them. That's Surrounding matters.",
  },
  {
    text: "'Should' and 'Shouldn't' to do anything are pure poison.",
  },
  {
    text: "No technique of the mind will free you from the mind.",
  },
  {   
    text: "There is no prescription to do great things. But there is for normal work. You can't do great things by just following the prescription/roadmap.",
  },
  {
    text: "Innovation is the child of freedom and parent of prosperity.",
  },
  {
    text: "The goal of education is to teach a person to think and reason, not to simply load the memory with thoughts of other men.",
  },
  {
    text: "Education is not the learning of facts, but the training of the mind to think.",
  },
];

const QuotesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl mx-auto px-4 md:px-0 py-16">
        <div className="ml-0 md:-ml-4">
          <h1 className="text-3xl font-jura font-semibold mb-12">
            Best Quotes I have ever heard
          </h1>

          <div className="space-y-6 text-lg font-jura">
            {quotes.map((quote, index) => (
              <div 
                key={index} 
                className="p-4 md:p-6 bg-card/50 rounded-lg hover:bg-card/80 transition-colors"
              >
                <p className="mb-4 leading-relaxed text-base md:text-lg">"{quote.text}"</p>
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