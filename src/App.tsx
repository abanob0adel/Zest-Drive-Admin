import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import Overview from "./components/pages/dashboard/Overview";
import DashboardLayout from "./components/layout/DashboardLayout";
import routes from "./lib/routes";
import MainBrands from "./components/pages/dashboard/Brands/main/MainBrands";
import AddBrand from "./components/pages/dashboard/Brands/add/AddBrand";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Overview />} />
            <Route
              path={routes?.Dashboard?.Brand?.Main}
              element={<MainBrands />}
            />
            <Route
              path={routes?.Dashboard?.Brand?.Add}
              element={<AddBrand />}
            />
          </Route>

          {/* Public Routes */}
          <Route path={routes?.Auth?.Login} element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
