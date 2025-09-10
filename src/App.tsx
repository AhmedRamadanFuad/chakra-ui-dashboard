import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Sidebar from "./components/Sidebar";
// import TeamMeetingImageCard from "./components/Footer";
import Table from "./pages/table";
import Billing from "./pages/billing";
import Profile from "./pages/profile";

import { useLocation } from "react-router";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const pathname = location.pathname;
  console.log(location.pathname);
  return (
    <main className="bg-background flex gap-1 lg:gap-[20.5px]">
      {pathname === "/sign-in" || pathname === "/sign-up" ? (
        <></>
      ) : (
        <div className="sticky top-0 left-0 h-10/12">
          <Sidebar />
        </div>
      )}
      {/* <div className="md:ml-0 ml-10 pl-[31.5px] pr-[22px] md:pt-[31.5px] pt-5 pb-[23.5px] w-full"> */}
      <div
        className={`w-full  ${
          pathname === "/sign-in" || pathname === "/sign-up" ? "" : "py-6 pr-6"
        }`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table" element={<Table />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
        {pathname === "/sign-in" || pathname === "/sign-up" ? (
          <></>
        ) : (
          <Footer />
        )}
      </div>
    </main>
  );
}

export default App;
