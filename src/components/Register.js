import {Modal, Container, Form, Button} from "react-bootstrap";

const style = {
    formBox: {
        height: "490px",
        overflow: "auto",
        padding: "30px",
        background: "#FFF",
    },
    fontRegister: {
        fontSize: "36px",
        fontWeight: "900",
        background: "-webkit-linear-gradient(45deg, #EC7AB7, #EC7A7A)",
        webkitBackgroundClip: "text",
        webkitTextFillColor: "transparent",
        marginBottom: "50px",
    },
    formRegister : {
        width: "350px",
        height: "50px",
        margin: "30px auto"
    },
    formAdress : {
        width: "350px",
        height: "100px",
        margin: "30px auto",
        resize: "none"
    },
    btnRegister : {
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
    }
}

export default function Register(props) {


    return(
        <div>
            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton style={{border: "none"}}></Modal.Header>
                <Modal.Body>
                    <Container style={style.formBox}>
                        <h1 style={style.fontRegister} className="text-center">REGISTER</h1>
                        <Form>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Nama Lengkap" style={style.formRegister} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Username" style={style.formRegister} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="email" placeholder="Email" style={style.formRegister} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="password" placeholder="Password" style={style.formRegister} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="password" placeholder="Password" style={style.formRegister} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control type="number" placeholder="Telp" style={style.formRegister} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control as="textarea" type="text" placeholder="Alamat" style={style.formAdress} />
                            </Form.Group>
                        </Form>
                        <div className="d-grid gap-2">
                            <Button onClick={props.onHide} size="lg" style={style.btnRegister}>Daftar</Button>
                        </div>
                    <p className="text-center" style={style.linkTo}>Sudah Punya Akun? Klik <span onClick={props.onClick} style={{cursor: "pointer", fontWeight: "bold"}}>disini</span></p>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    )
}