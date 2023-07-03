import {Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import MyTicket from "./pages/MyTicket"
import Payment from "./pages/Invoice"
import ListTransaksi from "./pages/ListTransaksi"


function App() {
  return(
    <div style={{minHeight: "100%", position: "relative"}}>
       <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myticket" element={<MyTicket />} />
        <Route path="/myticket" element={<MyTicket />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/listtransaksi" element={<ListTransaksi />} />
      </Routes>
    </div>
  )
}

export default App