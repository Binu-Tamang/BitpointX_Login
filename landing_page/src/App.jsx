import { BrowserRouter } from "react-router-dom";
import AppRoutesPage from "./routes/index";

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutesPage />
    </BrowserRouter>
  );
}
