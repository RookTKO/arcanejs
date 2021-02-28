import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, {useState} from 'react'
import Emoji from './widgets/emoji'
import './header.scss'
import {RiArrowDownSFill} from "@react-icons/all-files/ri/RiArrowDownSFill"
import {RiArrowUpSFill} from "@react-icons/all-files/ri/RiArrowUpSFill"


function NavBar(){
  return(
    <div className="horizontal-navBar">
      <Emoji bigLogo={false}/>
    <Link to="/" className="logo-prefix" >
      arcane
    </Link>
  </div>
  )
}

function SideBarMenu(){
  return(
    <>
    <NavBar  />
    <div className="sideBarNav">
      {SideBarData.map((item, index)=>
      {
        return <SideBarItem item={item} key={index} />
      })}
    </div>
    </>
  )
}

function SideBarItem({ item }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav)
  return (
    <>
      <a className="sideBarLabel" onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <span className="sideBarLink">{item.title}</span>
        </div>
        {item.subNav && subnav
            ? item.iconOpen
            : item.subNav
            ? item.iconClose
            : null}
      </a>
      {subnav && item.subNav.map((item, index) =>{
        return(
          <NestedSideBarItem item={item} key={index} />
        )
      })}
    </>
  );
}

function NestedSideBarItem({ item }) {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav)
  return (
    <>
      <Link className="sideBarLabelNested" to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <span className="sideBarLink">{item.title}</span>
        </div>
        {item.subNav && subnav
            ? item.iconOpen
            : item.subNav
            ? item.iconClose
            : null}
      </Link>
      {subnav && item.subNav.map((item, index) =>{
        return(
          <NestedSideBarItem item={item} key={index} />
        )
      })}
    </>
  );
}

const SideBarData = [
  {
    title:'Data Types',
    path: '/',
    icon: '🥚',
    iconClose: <RiArrowDownSFill />,
    iconOpen: <RiArrowUpSFill />,
    subNav: [
      {
        title:'Overview',
        path: '/Data Types Overview',
        icon: '🥚',
      },
      {
        title:'undefined',
        path: '/',
        icon: '🥚',
      },
      {
        title:'Boolean',
        path: '/',
        icon: '🥚',
      },
      {
        title:'String',
        path: '/',
        icon: '🥚',
      },
      {
        title:'Symbol',
        path: '/',
        icon: '🥚',
      },
      {
        title:'Number',
        path: '/',
        icon: '🥚',
      },
      {
        title:'BigInt',
        path: '/',
        icon: '🥚',
      },
      {
        title:'null',
        path: '/',
        icon: '🥚',
      }
    ]
  },
  {
    title:'Variables & Scoping',
    path: '/',
    icon: '🥚',
    iconClose: <RiArrowDownSFill />,
    iconOpen: <RiArrowUpSFill />,
    subNav: [
      {
        title:'Overview',
        path: '/',
        icon: '🥚',
      },
      {
        title:'closure',
        path: '/',
        icon: '🥚',
      },
      {
        title:'hoisting',
        path: '/',
        icon: '🥚',
      },
      {
        title:'var',
        path: '/',
        icon: '🥚',
      },
      {
        title:'let',
        path: '/',
        icon: '🥚',
      },
      {
        title:'const',
        path: '/',
        icon: '🥚',
      },
      {
        title:'static',
        path: '/',
        icon: '🥚',
      }
    ]
  },
  {
    title:'Functions',
    path: '/',
    icon: '🥚',
    iconClose: <RiArrowDownSFill />,
    iconOpen: <RiArrowUpSFill />,
    subNav: [
      {
        title:'Overview',
        path: '/',
        icon: '🥚',
      },
      {
        title:'function declaration',
        path: '/',
        icon: '🥚',
      },
      {
        title:'function expression',
        path: '/',
        icon: '🥚',
      },
      {
        title:'anonymous function',
        path: '/',
        icon: '🥚',
      },
      {
        title:'iffe',
        path: '/',
        icon: '🥚',
      },
      {
        title:'factory function',
        path: '/',
        icon: '🥚',
      }
    ]
  },
  {
    title:'Classes',
    path: '/',
    icon: '🥚',
    iconClose: <RiArrowDownSFill />,
    iconOpen: <RiArrowUpSFill />,
    subNav: [
      {
        title:'Overview',
        path: '/',
        icon: '🥚',
      },
      {
        title:'Constructor',
        path: '/',
        icon: '🥚',
      },
      {
        title:'Super',
        path: '/',
        icon: '🥚',
      },
      {
        title:'Extend',
        path: '/',
        icon: '🥚',
      }
    ]
  }

]

const Header = () => (
  <>
  <SideBarMenu />

  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
