import NavTabs from './NavTabs';
import {Outlet} from 'react-router-dom'

export default function PortfolioContainer() {

  return (
    <div>
      <NavTabs />
      <main className="container mx-3"><Outlet /></main>
    </div>
  );
}
