import React, {useState, useContext} from "react"
import {Link, useNavigate} from "react-router-dom"
import {UserContext} from "../context/UserContext"
import {Navbar, Nav, NavDropdown,  Container, Image, Button} from "react-bootstrap"
import Profile from "../components/img/profile.png"
import Brand from "../components/img/brand.png"
import Register from "./Register"
import Login from "./Login"

const style = {
    Navbar: {
        height: "8vh",
        boxShadow: "0px 3px 20px 0px rgba(0, 0, 0, 0.25)",
    },
    BtnRegis: {
        padding: "4px 25px",
        background: "white",
        border: "2px solid #EC7AB7",
        color: "#EC7AB7"
    },
    BtnLogin: {
        padding: "4px 28px",
        border: "none",
        background: "linear-gradient(to right, #EC7AB7, #EC7A7A)"
        
    },
}

function NavBar() {
    const [loginShow, setLoginShow] = useState(false)
    const [registerShow, setRegisterShow] = useState(false)

    const handleCloseLogin = () => setLoginShow(false)
    const handleShowLogin= () => {
        handleCloseRegister(false)
        setLoginShow(true)
    }

    const handleCloseRegister = () => setRegisterShow(false)
    const handleShowRegister= () => {
        handleCloseLogin(false)
        setRegisterShow(true)
    }

    const [state, dispatch] = useContext(UserContext)
    const navigate = useNavigate()

    const logout = () => {
        dispatch({
            type: "LOGOUT"
        })
        navigate("/")
    }

    return(
        <div>
            <Navbar style={style.Navbar}>
                <Container>
                        <Navbar.Brand className="nav-brand">Land Tick <Image src={Brand} style={{width: "40px", marginBottom: "7px",}} /> </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                {state.status ?(
                                    <>
                                    <NavDropdown id="basic-nav-dropdown" title={
                                        <>
                                            <img src={Profile} alt="profile" style={{width: "30px"}} />
                                        </>
                                       
                                    }>
                                        <NavDropdown.Item>Tambah Tiket</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                    </>
                                ) : state.isLogin? (
                                    <>
                                    <NavDropdown title="user">
                                        <Link to="/myticket" style={{textDecoration: "none"}}>
                                        <NavDropdown.Item href="#/action2">Tiket Saya</NavDropdown.Item>
                                        </Link>
                                        <NavDropdown.Item>Payment</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                    </NavDropdown>
                                    </>
                                ) : (
                                <Nav>
                                <Button onClick={handleShowRegister} style={{padding: "2px 13px", background: "white", border: "2px solid #EC7AB7", color: "#EC7AB7", marginTop: "1px", marginRight: "10px"}}>
                                    Register
                                </Button>
                                <Button onClick={handleShowLogin} style={{padding: "3px 20px",border: "2px solid", background: "linear-gradient(to right, #EC7AB7, #EC7A7A)"}}>
                                    Login
                                </Button>
                                </Nav>
                                )
                                }
                </Container>
            <Register show={registerShow} onHide={handleCloseRegister} onClick={handleShowLogin} />
            <Login show={loginShow} onHide={handleCloseLogin} onClick={handleShowRegister}  />
            </Navbar>
        </div>
    )
}

export default NavBar