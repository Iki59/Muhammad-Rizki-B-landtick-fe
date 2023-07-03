import {Container, Row, Col} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faPenToSquare, faTrashCan} from '@fortawesome/free-solid-svg-icons'
import Footer  from "../components/Footer"

export default function ListTransaksi() {
    return(
        <div>
            <Container className="mt-5">
                <h3>List Transaksi</h3>
                <Row className="mt-4">
                    <Col>
                    <p>No.</p>
                    </Col>
                    <Col>
                    <p>Users</p>
                    </Col>
                    <Col>
                    <p>Tiket</p>
                    </Col>
                    <Col>
                    <p>Bukti Transfer</p>
                    </Col>
                    <Col>
                    <p>Status Payment</p>
                    </Col>
                    <Col>
                    <p>Action</p>
                    </Col>
                </Row>
                <Row style={{padding: "10px 0px", background: "#C4C4C4", border: "2px solid grey",}}>
                    <Col>
                    <p>1</p>
                    </Col>
                    <Col>
                    <p>Anto</p>
                    </Col>
                    <Col>
                    <p>Surabaya-Jakarta</p>
                    </Col>
                    <Col>
                    <p>bca.jpg</p>
                    </Col>
                    <Col>
                    <p style={{color: "#F7941E"}}>Pending</p>
                    </Col>
                    <Col>
                        <Row md={7}>
                            <Col>
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#2fc5f7", fontSize: "25px",}} />
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faPenToSquare} style={{color: "#0acf83", fontSize: "25px",}} />
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faTrashCan} style={{color: "#ff0742", fontSize: "25px",}} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{padding: "10px 0px",}}>
                    <Col>
                    <p>2</p>
                    </Col>
                    <Col>
                    <p>Fahrul Akbar</p>
                    </Col>
                    <Col>
                    <p>Jakarta-Malang</p>
                    </Col>
                    <Col>
                    <p>bni.jpg</p>
                    </Col>
                    <Col>
                    <p style={{color: "#FF0742"}}>Cancel</p>
                    </Col>
                    <Col>
                        <Row md={7}>
                            <Col>
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#2fc5f7", fontSize: "25px",}} />
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faPenToSquare} style={{color: "#0acf83", fontSize: "25px",}} />
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faTrashCan} style={{color: "#ff0742", fontSize: "25px",}} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row style={{padding: "10px 0px", background: "#C4C4C4", border: "2px solid grey",}}>
                    <Col>
                    <p>3</p>
                    </Col>
                    <Col>
                    <p>Abdul Faris</p>
                    </Col>
                    <Col>
                    <p>Jakarta-Bandung</p>
                    </Col>
                    <Col>
                    <p>bca.jpg</p>
                    </Col>
                    <Col>
                    <p style={{color: "#0ACF83"}}>Approved</p>
                    </Col>
                    <Col>
                        <Row md={7}>
                            <Col>
                                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#2fc5f7", fontSize: "25px",}} />
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faPenToSquare} style={{color: "#0acf83", fontSize: "25px",}} />
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faTrashCan} style={{color: "#ff0742", fontSize: "25px",}} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}