import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/pages/auth/Login";
import { ThemeProvider } from "./components/theme-provider";
import Header from "./components/layout/Header";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import Overview from "./components/pages/dashboard/Overview";
import DashboardLayout from "./components/layout/DashboardLayout";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
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
          </Route>

          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
