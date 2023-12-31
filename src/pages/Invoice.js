import {Container, Row, Col, Navbar, Image, Button} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTriangleExclamation} from '@fortawesome/free-solid-svg-icons'
import Brand2 from "../components/img/brand2.png"
import Transfer from "../components/img/transfer.png"
import Qrcode from "../components/img/qr-code.png"
import Footer  from "../components/Footer"

const style = {
    alertBuy: {
        border: "1px solid #BBB", 
        padding: "10px",
        background: "#EEE",
        paddingBottom: "-5px"
    },
    boxTicket: {
        border: "1px solid #B7B7B7",
        borderRadius: "5px",
        marginTop: "20px",
    },
    ticketBrand: {
        background: "linear-gradient(to top, #EC7AB7, #EC7A7A)",
        marginLeft: "-12px",
        padding: "2px 25px",
        borderRadius: "7px 3px 60px 0px",
    },
    headOrder: {
        marginTop: "35px",
    },
    detailOrder: {
        color: "#B1B1B1",
        marginTop: "5px",
    },
    detailPrice: {
        border: "1px solid #B7B7B7",
        padding: "25px 15px -5px 15px",
    },
    btnBuy: {
        width: "100%", 
        marginTop: "1rem",
        border: "none", 
        background: "linear-gradient(to right, #EC7AB7, #EC7A7A)"
    },
    circle1: {
        width: "15px",
        height: "15px",
        borderRadius: "100%",
        border: "1px solid #EC7A7A",
        marginBottom: "1px",
    },
    circle2: {
        width: "15px",
        height: "15px",
        borderRadius: "100%",
        border: "none",
        background: "#EC7A7A",
        marginTop: "-6px",
    },
    verticalLine: {
        height: "65px",
        borderLeft: "1px solid #D0D0D0",
        display: "inline-block",
        margin: "0 7px",

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
}

export default function Invoice() {
    return(
        <div>
            <Container>
                <h3>Invoice</h3>
                <Row>
                    <Col md={8}>
                        <Container fluid style={style.alertBuy}>
                            <Row>
                                <Col md={2} style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                                <FontAwesomeIcon icon={faTriangleExclamation} style={{color: "#ffb751", fontSize: "50px",}}/>
                                </Col>
                                <Col md={10}>
                                <p>Silakan melakukan pembayaran melalui M-Banking, E-Banking dan ATM Ke No.rek Yang Tertera. <br /><br />  No.rek : 09812312312</p>
                                </Col>
                            </Row>
                        </Container>
                <Container style={style.boxTicket}>
                <Row>
                    <Col style={{marginTop: "-7px"}}>
                            <Navbar.Brand style={style.ticketBrand} className="ticket-brand">Land Tick <Image src={Brand2} style={{width: "40px", marginBottom: "5px"}} /> </Navbar.Brand>
                    </Col>
                </Row>
                <Row md={4} style={style.headOrder}>
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
                <hr style={{width: "46rem", marginLeft: "-12px", marginTop: "-10px", marginBottom: "0px"}} />
                <Row md={4} style={style.detailOrder}>
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
                </Row>
            </Container>
                    <Row className="mt-4">
                        <Col>
                            <h3>Rincian Harga</h3>
                            <Container style={style.detailPrice}>
                                <Row className="mt-2">
                                    <Col md={7}>
                                    <p style={{fontSize: "14px"}}>Argo Wilis (Dewasa) x1</p>
                                    </Col>
                                    <Col>
                                    <p style={{fontSize: "14px", textAlign: "end",}}>Rp. 250.000</p>
                                    </Col>
                                </Row>
                                <Row className="mt-2" style={{backgroundColor: "#E6E6E6"}}>
                                    <Col>
                                    <p style={{fontSize: "18px"}}>Total</p>
                                    </Col>
                                    <Col>
                                    <p style={{fontSize: "18px", textAlign: "end", fontWeight: "900",}}>Rp. 250.000</p>
                                    </Col>
                                </Row>
                            </Container>
                            <Row>
                                <Container>
                                    <Button style={style.btnBuy}>Bayar Sekarang</Button>
                                </Container>
                            </Row>
                        </Col>
                        <Col md={5} style={{textAlign: "center"}}>
                        <Image src={Transfer} style={{width: "170px",}}/>
                        <p style={{color: "#B1B1B1", marginTop: "2px",}}>upload payment proof</p>
                        </Col>
                    </Row>
                </Col>
                    <Col md={4}>
                        <Row>
                            <Container style={{border: "none", padding: "20px", paddingLeft: "25px", paddingBottom: "-20px", background: "#D0D0D0",}}>
                                <Row>
                                    <Col md={8}>
                                        <h4 className="mb-0 fw-bold">Kereta Api</h4>
                                        <p style={{color: "#878787"}}><span style={{fontWeight: "900"}}>Saturday,</span> 21 Februari 2020</p>
                                    </Col>
                                    <Col md={4} style={{textAlign: "end"}}>
                                        <Image src={Qrcode}/>
                                        <p style={{fontSize: "12px", marginRight: "7px",}}>INV0101</p>
                                    </Col>
                                </Row>
                            </Container>
                            <Container style={{border: "none", padding: "25px", paddingLeft: "25px", paddingBottom: "-20px", background: "#F5F5F5",}}>
                                <h5 className="mb-0 fw-bold">Argo Wilis</h5>
                                <p style={{fontSize: "12px"}}>Eksekutif (H)</p>
                                <Row>
                                    <Col md={2} className="mt-2">
                                    <div style={style.circle1}></div>
                                    <span style={style.verticalLine}></span>
                                    <div style={style.circle2}></div>
                                    </Col>
                                    <Col md={5}>
                                        <div style={{marginBottom: "35px"}}>
                                            <p style={style.scheduleTicket}>05.00</p>
                                            <p style={style.detailTicket}>21 Februari 2020</p>
                                            </div>
                                            <div>
                                            <p style={style.scheduleTicket}>10.05</p>
                                            <p style={style.detailTicket}>21 Februari 2020</p>
                                        </div>
                                    </Col>
                                    <Col md={5}>
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
                            </Container>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}