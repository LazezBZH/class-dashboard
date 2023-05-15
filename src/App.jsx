import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
// const Class = lazy(() => import("./pages/Class/Class"));
// const Child = lazy(() => import("./pages/Child/Child"));
const Error = lazy(() => import("./pages/Error/Error"));

export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="/:id" element={<Class />} /> */}
          {/* <Route path="/:id" element={<Child />} /> */}
          <Route path="*" element={<Error />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}
