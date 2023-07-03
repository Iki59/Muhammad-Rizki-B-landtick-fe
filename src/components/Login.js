import {useContext} from "react"
import {useNavigate} from "react-router-dom"
import {UserContext} from "../context/UserContext"
import {Modal, Container, Form, Button} from "react-bootstrap";

const style = {
    formBox: {
        height: "auto",
        padding: "30px",
        borderRadius: "10px",
        background: "#FFF",
    },
    fontLogin: {
        fontSize: "36px",
        fontWeight: "900",
        background: "-webkit-linear-gradient(45deg, #EC7AB7, #EC7A7A)",
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent",
        marginBottom: "50px",
    },
    formLogin : {
        width: "350px",
        height: "50px",
        margin: "30px auto"
    },
    btnLogin : {
        borderRadius: "50px",
        border: "none",
        background: "linear-gradient(#EC7AB7, #EC7A7A)",
        width: "360px",
        margin: "5px auto"

    },
    linkTo: {
        fontSize: "18px",
        marginTop: "20px",
        color: "#B1B1B1"
    },
}

export default function Login(props) {
const navigate = useNavigate()
const [state, dispatch] = useContext(UserContext)
console.log({state})

const handleSubmit = (e) => {
    e.preventDefault()
    const username = document.getElementById("username").value

    if (username === "admin@gmail.com") {
        dispatch({
            type: "LOGIN_ADMIN_SUCCESS"
        })
        navigate("/listtransaksi")
    } else {
        dispatch({
            type: "LOGIN_USER_SUCCESS",
            payload: username,
        })
    }
    }
    
    return(
        <div>
            <Modal  show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton style={{border: "none"}}></Modal.Header>
                <Modal.Body>
                    <Container fluid style={style.formBox}>
                        <h1 style={style.fontLogin} className="text-center">LOGIN</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group>
                                <Form.Control type="text" placeholder="username" id="username" style={style.formLogin} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="password" placeholder="password" style={style.formLogin} />
                            </Form.Group>
                        <div className="d-grid gap-2">
                            <Button onClick={props.onHide} type="submit" size="lg" style={style.btnLogin}>Login</Button>
                        </div>
                        </Form>
                        <p className="text-center" style={style.linkTo}>Belum Punya Akun? Klik <span onClick={props.onClick} style={{cursor: "pointer", fontWeight: "bold"}}>disini</span></p>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    )
}

