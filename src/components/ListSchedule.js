import {useState} from "react"
import {Link} from "react-router-dom"
import {Container, Row, Col} from "react-bootstrap"
import {datakereta} from "../fakeData/datadummy"
import {Modal} from "react-bootstrap";

const style = {
    ListSchedule: {
        marginTop: "30px",
        border: "1px solid #B7B7B7",
        padding: "10px",
    },
    topList: {
        fontSize: "18px",
    },
    contentList: {
        fontSize: "18px",
        fontWeight: "900",
    },
    contentListPrice: {
        fontSize: "18px",
        fontWeight: "700",
        color: "#EC7A7A",
    },
    detailList: {
        fontSize: "14px",
        color: "#B7B7B7",
        fontWeight: "400",
        marginTop: "-20px",
        marginBottom: "0px"
    },
}

export default function ListSchedule(props) {
    const [doneAdd, setDoneAdd] = useState(false)

    const handleCloseAdd = () => setDoneAdd(false)
    const handleShowAdd = () => setDoneAdd(true)

    return (
        <Container fluid="lg">
            <Row>
                <Col style={{textAlign: "center"}}>
                <p style={style.topList}>Nama Kereta</p>
                </Col>
                <Col md={2} style={{textAlign: "center"}}>
                <p style={style.topList}>Berangkat</p>
                </Col>
                <Col md={1} style={{textAlign: "center"}}>
                <p style={style.topList}>Break</p>
                </Col>
                <Col md={2} style={{textAlign: "center"}}>
                <p style={style.topList}>Tiba</p>
                </Col>
                <Col md={2} style={{textAlign: "center"}}>
                <p style={style.topList}>Durasi</p>
                </Col>
                <Col style={{textAlign: "center"}}>
                <p style={style.topList}>Harga Per Orang</p>
                </Col>
            </Row>
            {datakereta.map((data) =>
            <Row style={style.ListSchedule} key={data.index} onClick={handleShowAdd} >
                <Col style={{textAlign: "center"}}>
                <p style={style.contentList}> {data.nama} </p>
                <p style={style.detailList}>{data.kelas}</p>
                </Col>
                <Col md={2} style={{textAlign: "center"}}>
                <p style={style.contentList}>{data.berangkat}</p>
                <p style={style.detailList}>{data.start}</p>
                </Col>
                <Col md={1} style={{textAlign: "center"}}>
                u
                </Col>
                <Col md={2} style={{textAlign: "center"}}>
                <p style={style.contentList}>{data.tiba}</p>
                <p style={style.detailList}>{data.finish}</p>
                </Col>
                <Col md={2} style={{textAlign: "center"}}>
                <p style={style.contentList}>{data.durasi}</p>
                </Col>
                <Col style={{textAlign: "center"}}>
                <p style={style.contentListPrice}>{data.harga}</p>
                </Col>
            </Row>
            )}
            <Modal show={doneAdd} onHide={handleCloseAdd}>
                <Modal.Body><p style={{textAlign: "center", fontSize: "14px"}}>Tiket anda berhasil ditambahkan silahkan segera melakukan pembayaran <br/> Klik <Link to="/myticket" style={{textDecoration: "none", color: "black"}}><b>disini</b></Link> </p></Modal.Body>
            </Modal>
        </Container>
    )
}