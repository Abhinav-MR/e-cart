// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
    const whishlist = useSelector((state=>state.whishlistReducer))
    const cart = useSelector((state=>state.cartReducer))
  return (
    <div>
      <Navbar expand="lg" className="bg-primary position-fixed top-0 w-100" style={{zIndex:1}}>
      <Container>
        <Navbar.Brand >
        <Link to={'/'} style={{color:"white",fontWeight:'bold',textDecoration:"none"}}>
           <i className="fa-solid fa-truck-fast fa-bounce"></i>E-Cart
           </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link >
            <Link to={'/whishlist'} style={{color:"white",fontWeight:'bold',textDecoration:"none"}}>
            <i className="fa-solid fa-heart text-danger"></i>WhishList
            <Badge bg="success rounded ms-2">{whishlist.length}</Badge>
           </Link></Nav.Link>
            <Nav.Link > <Link to={'/cart'} style={{color:"white",fontWeight:'bold',textDecoration:"none"}}>
            <i className="fa-solid fa-cart-shopping text-warning"></i>Cart
            <Badge bg="success rounded ms-2">{cart.length}</Badge>
           </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default Header