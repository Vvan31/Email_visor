
import { useAuth } from "../App"; // Import AuthProvider from the App file
import "../style/navBar.css"
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

// images
import chart from "../assets/navBar/chart.png";
import mail from "../assets/navBar/mail.png";
import mailOpen from "../assets/navBar/mailOpen.png";
import logoutImg from "../assets/navBar/logout.png";

export const NavBar = () => {
  const { signout } = useAuth();

  const handleLogout = () => {
    signout(() => {
      // Optional callback function after signing out
    });
  };

  return (
    <SideNav
      className="SideBar"
      onSelect={(selected: String) => {
        console.log(selected);
      }}
    >
      <SideNav.Toggle className="NavToggle" />
      <SideNav.Nav defaultSelected="home" className="navItems">
        <NavItem eventKey="home">
          <NavIcon>
            <img src={chart} className="" height={23} />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="read">
          <NavIcon>
            <img src={mail} className="" height={23} />
          </NavIcon>
          <NavText>Read</NavText>
        </NavItem>
        <NavItem eventKey="unread">
          <NavIcon>
            <img src={mailOpen} className="" height={23} />
          </NavIcon>
          <NavText>Unread</NavText>
        </NavItem>
        <NavItem eventKey="signOut" className="signOut" onClick={handleLogout}>
          <NavIcon>
            <img src={logoutImg} height={23} />
          </NavIcon>
          <NavText>Sign Out</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
};
