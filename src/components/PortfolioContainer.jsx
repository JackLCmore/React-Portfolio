import { useState } from 'react';
import NavTabs from './NavTabs';
import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  // const renderPage = () => {
  //   switch (currentPage) {
  //     case 'Resume':
  //       return <Resume />;
  //     case 'About':
  //       return <About />;
  //     case 'Portfolio':
  //       return <Portfolio />;
  //     default:
  //       return <Contact />;
  //   }
  // };
  
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <main className="container mx-3">{renderPage()}</main>
    </div>
  );
}
