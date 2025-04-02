import { Link } from 'react-router-dom';

const QuotesSection = () => {
  return (
    <section id="quotes" className="py-8">
      <div className="container max-w-6xl mx-auto px-4 md:px-0">
        <div className="ml-0 md:-ml-4">
          <h2 className="text-3xl font-jura font-semibold mb-6">
            <Link 
              to="/quotes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary/70 transition-colors"
            >
              Best Quotes I have ever heard →
            </Link>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default QuotesSection; 