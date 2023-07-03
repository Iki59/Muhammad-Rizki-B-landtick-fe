import {Link} from "react-router-dom"
import {Container, Navbar, Row, Col, Button, Image} from "react-bootstrap"
import Brand2 from "../components/img/brand2.png"

const style = {
    boxTicket: {
        width: "63rem",
        border: "1px solid #B7B7B7",
        borderRadius: "5px",
    },
    ticketBrand: {
        background: "linear-gradient(to top, #EC7AB7, #EC7A7A)",
        marginLeft: "-12px",
        padding: "2px 25px",
        borderRadius: "7px 3px 60px 0px",
    },
    pendingStatus: {
        background: "pink",
        opacity: "0.6",
        padding: "4px 10px",
        fontStyle: "normal",
        fontWeight: "500",
        color: "#DC7D0B",
    },
    pointer: {
        display: "flex",
        alignItems: "end",
        flexDirection: "column", 
        marginTop: "6px",
    },
    circle1: {
        width: "20px",
        height: "20px",
        borderRadius: "100%",
        border: "1px solid #EC7A7A",
        marginBottom: "3px",
    },
    circle2: {
        width: "20px",
        height: "20px",
        borderRadius: "100%",
        border: "none",
        background: "#EC7A7A",
        marginTop: "3px",
    },
    verticalLine: {
        height: "55px",
        borderLeft: "1px solid #D0D0D0",
        display: "inline-block",
        margin: "0 9px",

    },
    scheduleTicket: {
        fontSize: "18px",
        fontWeight: "900",
    },
    detailTicket: {
        fontSize: "14px",
        color: "#B7B7B7",
        fontWeight: "400",
        marginTop: "-20px",
        marginBottom: "0px"
    },
    headOrder: {
        marginTop: "35px",
    },
    detailOrder: {
        color: "#B1B1B1",
        marginTop: "5px",
    },
    btnBuy: {
        fontSize: "18px",
        padding: "4px 20px",
        background: "linear-gradient(to right, #EC7AB7, #EC7A7A)",
        border: "none",
        marginBottom: "10px",
        marginTop: "-10px"
    }

}

export default function MyTicket() {
    return(
        <div>
            <h3 style={{margin: "1rem 7rem"}}>Tiket Saya</h3>
            <Container style={style.boxTicket}>
                <Row>
                    <Col style={{marginTop: "-7px"}}>
                            <Navbar.Brand style={style.ticketBrand} className="ticket-brand">Land Tick <Image src={Brand2} style={{width: "40px", marginBottom: "5px"}} /> </Navbar.Brand>
                    </Col>
                    <Col>
                        <h3 className="text-end fw-bold mb-0">Kereta Api</h3>
                        <p style={{color: "#878787", textAlign: "end"}}><span style={{fontWeight: "900"}}>Saturday,</span> 21 Februari 2020</p>
                    </Col>
                </Row>
                <Row md={6}>
                    <Col style={{textAlign: "center"}}>
                        <h4><b>Argo Wilis</b></h4>
                        <p className="mt-0">Eksekutif (H)</p>
                        <p style={style.pendingStatus}>Pending</p>
                    </Col>
                    <Col md={1} style={style.pointer}>
                        <div style={style.circle1}></div>
                        <span style={style.verticalLine}></span>
                        <div style={style.circle2}></div>
                    </Col>
                    <Col>
                        <div style={{marginBottom: "35px"}}>
                        <p style={style.scheduleTicket}>05.00</p>
                        <p style={style.detailTicket}>21 Februari 2020</p>
                        </div>
                        <div>
                        <p style={style.scheduleTicket}>10.05</p>
                        <p style={style.detailTicket}>21 Februari 2020</p>
                        </div>
                    </Col>
                    <Col>
                        <div style={{marginBottom: "35px"}}>
                        <p style={style.scheduleTicket}>Jakarta (GMR)</p>
                        <p style={style.detailTicket}>Stasiun Gambir</p>
                        </div>
                        <div>
                        <p style={style.scheduleTicket}>Surabaya (SBY)</p>
                        <p style={style.detailTicket}>Stasiun Surabaya</p>
                        </div>
                    </Col>
                </Row>
                <Row md={5} style={style.headOrder}>
                    <Col style={{textAlign: "center"}}>
                    <p>No. Tanda Pengenal</p>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                    <p>Nama Pemesan</p>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                    <p>No. Handphone</p>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                    <p>Email</p>
                    </Col>
                </Row>
                <hr style={{width: "49rem", marginLeft: "-14px", marginTop: "-10px", marginBottom: "0px"}} />
                <Row md={5} style={style.detailOrder}>
                    <Col style={{textAlign: "center"}}>
                    <p>31175033003970001</p>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                    <p>Anto</p>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                    <p>083896833112</p>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                    <p>anto@gmail.com</p>
                    </Col>
                    <Col style={{textAlign: "center"}}>
                    <Link to="/payment">
                        <Button style={style.btnBuy}>Bayar Sekarang</Button>
                    </Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}