import { Home, AddFlight, Error, UpdateFlight } from "./pages";
import { AppNav } from "./features";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Content } from "./components/styles/BackGround";

const App = () => {
    return (
        <Content>

            {/* Everything inside of here is going to be managed by react-router-dom
        to allow the site to toggle between pages */}
            <BrowserRouter>
                <AppNav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AddFlight" element={<AddFlight />} />
                    <Route path="/UpdateFlight" element={<UpdateFlight />} />
                    <Route path="*" element={<Error />} />

                </Routes>
            </BrowserRouter>

        </Content>


    );
}

export default App;