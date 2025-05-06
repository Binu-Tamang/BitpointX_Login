import { Routes, Route } from "react-router-dom";
import Main from "../pages/main/index";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default index;