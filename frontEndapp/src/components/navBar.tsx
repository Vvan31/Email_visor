import React, { useEffect } from 'react';
import "../style/navBar.css"
// images
import chart from "../assets/navBar/chart.png";
import open from "../assets/navBar/arrow.png";
import mail from "../assets/navBar/mail.png";
import mailOopen from "../assets/navBar/mailOpen.png";
import logout from "../assets/navBar/logout.png";

// https://reactjsexample.com/react-side-nav-component/
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

export const NavBar = () => {
   
    return (
        <SideNav  className="SideBar"
    onSelect={(selected: any) => {
        console.log(selected)
    }}
>   
    <SideNav.Toggle className="NavToggle" />
    <SideNav.Nav defaultSelected="home">
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
                <img src={mailOopen} className='' height={23} />
            </NavIcon>
            <NavText>
                Unread
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
            </NavItem> */}
    </SideNav.Nav>
</SideNav>
    );

}