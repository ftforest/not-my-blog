import { LogOut } from './LogOut/LogOut';
import { Navigation } from './Navigation/Navigation';
import './SideBar.css';
import { User } from './User/User';

export const SideBar = () => {
  return (
    <aside className='sidebar'>

      <section className="sidebarTop">
        <User />
        <Navigation />
      </section>

      <LogOut />
    </aside>
  );
};
