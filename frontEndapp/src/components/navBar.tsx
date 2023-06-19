/* import React, { useEffect } from 'react';
import { useAuth } from "../App"; // Import AuthProvider from the App file

import "../style/navBar.css"
// images
import chart from "../assets/navBar/chart.png";
import open from "../assets/navBar/arrow.png";
import mail from "../assets/navBar/mail.png";
import mailOpen from "../assets/navBar/mailOpen.png";
import logoutImg from "../assets/navBar/logout.png";

// https://reactjsexample.com/react-side-nav-component/
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { SignpostOutlined } from '@mui/icons-material';

export const NavBar = () => {
    const { signout } = useAuth();

    const handleLogout = () => {
        signout(()=>{});
    }
    return (
        <SideNav  className="SideBar"
    onSelect={(selected: any) => {
        console.log(selected)
    }}
>   
    <SideNav.Toggle className="NavToggle" />
    <SideNav.Nav defaultSelected="home" className="navItems">
        <NavItem eventKey="home">
            <NavIcon>
                <img src={chart} className='' height={23} />
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>
        <NavItem eventKey="read">
            <NavIcon>
                <img src={mail} className='' height={23} />
            </NavIcon>
            <NavText>
                Read
            </NavText>
        </NavItem>
        <NavItem eventKey="unread">
            <NavIcon>
                <img src={mailOpen} className='' height={23} />
            </NavIcon>
            <NavText>
                Unread
            </NavText>
        </NavItem>
        <NavItem eventKey="signOut" className='signOut' onChange={handleLogout}>
            <NavIcon>
                <img src={logoutImg}  height={23} />
            </NavIcon>
            <NavText>
                Sign Out
            </NavText>
        </NavItem>
            {/* <NavItem eventKey="charts">
                <NavIcon>
                    <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                </NavIcon>
                <NavText>
                    Emails
                </NavText>
                <NavItem eventKey="charts/linechart">
                    <NavText>
                        Read
                    </NavText>
                </NavItem>
                <NavItem eventKey="charts/barchart">
                    <NavText>
                        Unread
                    </NavText>
                </NavItem>
            </NavItem> }
    </SideNav.Nav>
</SideNav>
    );

} */
import React from 'react';
import { useAuth } from "../App"; // Import AuthProvider from the App file
import "../style/navBar.css"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { SignpostOutlined } from '@mui/icons-material';

// images
import chart from "../assets/navBar/chart.png";
import open from "../assets/navBar/arrow.png";
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
      onSelect={(selected) => {
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
