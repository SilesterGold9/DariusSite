import { Routes, Route } from "react-router-dom";

// Importar todas as páginas
import SearchPage from "../pages/SearchPage";
import AdminPage from "../pages/AdminPage";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SearchPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
