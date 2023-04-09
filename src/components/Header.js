import AppLaunchericon from './AppLauncherIcon';
import Menu from './Mmenu';
import Profile from './Profile'
import "../styles/header.css"
const Header = () => {
    return (
           <div className="app-header">
               <div className="app-header-content">
                 <Menu title={"Gmail"} />
                 <Menu title={"Images"} />
                 <AppLaunchericon />
                 <Profile />
                </div>
          </div>
    )
}
 
export default Header;