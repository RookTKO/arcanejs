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
      <Emoji />
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
      <Link className="sideBarLabelNested" to="/page-2" onClick={item.subNav && showSubnav}>
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
        title:'Variables22',
        path: '/',
        icon: '🥚',
      },
      {
        title:'Variables22',
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
        title:'Variable Overview',
        path: '/',
        icon: '🥚',
      },
      {
        title:'var Variable',
        path: '/',
        icon: '🥚',
      },
      {
        title:'let & const',
        path: '/',
        icon: '🥚',
      },
      {
        title:'static Keyword',
        path: '/',
        icon: '🥚',
      },
      {
        title:'Variable Review',
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
    iconOpen: <RiArrowUpSFill />
  },
  {
    title:'Objects',
    path: '/',
    icon: '🥚',
    iconClose: <RiArrowDownSFill />,
    iconOpen: <RiArrowUpSFill />
  },
  {
    title:'Classes',
    path: '/',
    icon: '🥚',
    iconClose: <RiArrowDownSFill />,
    iconOpen: <RiArrowUpSFill />
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
