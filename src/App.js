import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Left from "./component/Left";
import Header from "./component/Header";
import Main from "./pages/Main";

const App = () => {
  return (
    <BrowserRouter>
      <>
        {/* 화면에 보이는 영역*/}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/left" element={<Left />} />
          {/* <Route path="/member">
            <Route index element={<Member />} />
            <Route path=":memberID" element={<MemberDetail />} />
          </Route> */}
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
