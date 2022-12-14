import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import Home from "../pages/home/home";
import Listing from "../pages/listing/listing";


function RouterComp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/hostels/:name" element={<Listing />} />
            </Routes>
        </Router>
    )

}

export default RouterComp