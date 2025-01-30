import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../presentation/pages/home";
import { About } from "../presentation/pages/about";
import { StickyNavbar } from "../presentation/components/navbar/navbar";
import { Footer } from "../presentation/components/footer/footer";
function AppRouter() {
  return (
    <StickyNavbar>
      <Routes>
        {/* Main Routes */}
        <Route path="/">
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </StickyNavbar>
  );
}
export default AppRouter;
