// import React from 'react'
import Link from 'next/link'

// class Header extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <Link href='/'>
//           <a> Home </a>
//         </Link>
//         <Link href='/about'>
//           <a> About </a>
//         </Link>
//         <Link href='/portfolios'>
//           <a> Portfolio </a>
//         </Link>
//         <Link href='/blogs'>
//           <a> Blogs </a>
//         </Link>
//         <Link href='/cv'>
//           <a> CV </a>
//         </Link>
//       </React.Fragment>
//     )
//   }
// }

// export default Header
import React, { useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar className='port-navbar port-default absolute' color='transparent' dark expand='md'>
        <Link href='/'><a className='navbar-brand port-navbar-brand'>Volodymyr Batsyk</a></Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem className='port-navbar-item'>
              <Link href='/about'><a className='nav-link port-navbar-link'>About</a></Link>
            </NavItem>
            <NavItem className='port-navbar-item'>
              <Link href='/portfolios'><a className='nav-link port-navbar-link'>Portfolios</a></Link>
            </NavItem>
            <NavItem className='port-navbar-item'>
              <Link href='/blogs'><a className='nav-link port-navbar-link'>Blogs</a></Link>
            </NavItem>
            <NavItem className='port-navbar-item'>
              <Link href='/cv'><a className='nav-link port-navbar-link'>CV</a></Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header
