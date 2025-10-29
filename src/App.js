import React, { useState } from "react";
import { Box, CssBaseline, useMediaQuery } from "@mui/material";

// Componentes de navegación
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MobileNavbar from "./components/MobileNavbar";

// Vistas de usuario
import AdminDashboard from "./views/AdminDashboard";
import MemberDashboard from "./views/MemberDashboard";

// Páginas internas
import DocumentsPage from "./pages/DocumentsPage";
import LoansPage from "./pages/LoansPage";
import ReportsPage from "./pages/ReportsPage";
import ContabPage from "./pages/ContabPage";
import GroupPage from "./pages/GroupPage";
import AdminsPage from "./pages/AdminsPage";

// Nuevas páginas de gestión de socios
import AddMemberPage from "./pages/AddMemberPage";
import DeactivateMemberPage from "./pages/DeactivateMemberPage";
import ViewActiveMembersPage from "./pages/ViewActiveMembersPage";

// Nuevas páginas de gestión de préstamos
import ViewActiveLoansPage from "./pages/ViewActiveLoansPage";
import ViewLoanApplicationsPage from "./pages/ViewLoanApplicationsPage";
import ViewCanceledLoansPage from "./pages/ViewCanceledLoansPage";
import LoansByMemberPage from "./pages/LoansByMemberPage";

// Nuevas páginas de gestión de descuentos
import AnnualDiscountReportPage from "./pages/AnnualDiscountReportPage";
import MonthlyDiscountReportPage from "./pages/MonthlyDiscountReportPage";

function App() {
  // Estado para controlar tipo de usuario y vista activa
  const [currentView, setCurrentView] = useState("admin"); // 'admin' o 'member'
  const [activeNav, setActiveNav] = useState("dashboard"); // vista activa en sidebar/navbar
  const [navigationData, setNavigationData] = useState(null); // Datos adicionales para navegación
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  // Cambiar entre vistas admin / member
  const handleViewSwitch = () => {
    setCurrentView((prev) => (prev === "admin" ? "member" : "admin"));
    setActiveNav("dashboard"); // Resetear a dashboard al cambiar de vista
  };

  // Cambiar el contenido principal según la navegación (con datos opcionales)
  const handleNavClick = (view, data = null) => {
    setActiveNav(view);
    setNavigationData(data);
  };

  // Contenido central según la vista seleccionada
  const renderContent = () => {
    if (currentView === "admin") {
      switch (activeNav) {
        case "dashboard":
          return <AdminDashboard setActiveNav={handleNavClick} />;
        case "documentos":
          return <DocumentsPage />;
        case "prestamos":
          return <LoansPage />;
        case "reportes":
          return <ReportsPage />;
        case "contabilidad":
          return <ContabPage />;
        case "socios":
          return <GroupPage />;
        case "administracion":
          return <AdminsPage />;

        // Gestión de Socios
        case "add-member":
          return <AddMemberPage />;
        case "deactivate-member":
          return <DeactivateMemberPage />;
        case "view-active-members":
          return <ViewActiveMembersPage />;

        // Gestión de Préstamos
        case "view-active-loans":
          return <ViewActiveLoansPage />;
        case "view-loan-applications":
          return (
            <ViewLoanApplicationsPage
              autoOpenSocio={navigationData?.autoOpenSocio}
            />
          );
        case "view-canceled-loans":
          return <ViewCanceledLoansPage />;
        case "loans-by-member":
          return <LoansByMemberPage />;

        // Gestión de Descuentos
        case "annual-discount-report":
          return <AnnualDiscountReportPage />;
        case "monthly-discount-report":
          return <MonthlyDiscountReportPage />;
        default:
          return <AdminDashboard setActiveNav={handleNavClick} />;
      }
    } else {
      // Vista de USUARIO/MIEMBRO
      switch (activeNav) {
        case "dashboard":
          return (
            <MemberDashboard
              activeNav={activeNav}
              setActiveNav={handleNavClick}
            />
          );
        case "documentos":
          return (
            <Box sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2 }}>
              <h2>Documentos</h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  marginBottom: "20px",
                }}
              >
                Accede a todos los documentos importantes, formatos y recursos
                de la organización
              </p>
              <DocumentsPage />
            </Box>
          );

        // Mi Perfil
        case "my-profile":
          return (
            <Box sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2 }}>
              <h2>Mi Perfil</h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  marginBottom: "20px",
                }}
              >
                Gestiona tu información personal, datos de contacto y
                configuración de cuenta
              </p>
              {/* Aquí puedes crear un componente MyProfilePage */}
            </Box>
          );

        // Mis Préstamos
        case "my-active-loans":
          return (
            <Box sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2 }}>
              <h2>Mis Préstamos Activos</h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  marginBottom: "20px",
                }}
              >
                Consulta el estado actual de tus préstamos activos, saldos
                pendientes y próximos pagos
              </p>
              {/* Aquí puedes usar ViewActiveLoansPage filtrado por usuario */}
              <ViewActiveLoansPage isUserView={true} />
            </Box>
          );

        case "my-payment-history":
          return (
            <Box sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2 }}>
              <h2>Historial de Pagos</h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  marginBottom: "20px",
                }}
              >
                Revisa el registro completo de todos tus pagos realizados,
                fechas y conceptos
              </p>
              {/* Crear componente MyPaymentHistoryPage */}
            </Box>
          );

        case "my-finished-loans":
          return (
            <Box sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2 }}>
              <h2>Préstamos Finalizados</h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  marginBottom: "20px",
                }}
              >
                Consulta el historial de préstamos que ya han sido pagados
                completamente
              </p>
              {/* Aquí puedes usar ViewCanceledLoansPage filtrado por usuario */}
              <ViewCanceledLoansPage isUserView={true} />
            </Box>
          );

        // Reportes de Descuentos
        case "annual-discount-report":
          return (
            <Box sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2 }}>
              <h2>Reporte Anual de Descuentos</h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  marginBottom: "20px",
                }}
              >
                Consulta el resumen anual de tus descuentos aplicados y estado
                de aportaciones
              </p>
              <AnnualDiscountReportPage isUserView={true} />
            </Box>
          );

        case "monthly-discount-report":
          return (
            <Box sx={{ p: 3, backgroundColor: "#fff", borderRadius: 2 }}>
              <h2>Reporte Mensual de Descuentos</h2>
              <p
                style={{
                  color: "#666",
                  fontSize: "16px",
                  marginBottom: "20px",
                }}
              >
                Revisa el detalle mensual de tus descuentos y aportaciones
                realizadas
              </p>
              <MonthlyDiscountReportPage isUserView={true} />
            </Box>
          );

        default:
          return (
            <MemberDashboard
              activeNav={activeNav}
              setActiveNav={handleNavClick}
            />
          );
      }
    }
  };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <CssBaseline />

      {/* Barra superior */}
      <Navbar currentView={currentView} onSwitchView={handleViewSwitch} />

      {/* Sidebar (solo escritorio) */}
      {!isMobile && (
        <Sidebar
          activeNav={activeNav}
          onNavClick={handleNavClick}
          isAdmin={currentView === "admin"}
        />
      )}

      {/* Contenedor principal */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, lg: 3 },
          pt: { xs: 10, lg: 12 },
          backgroundColor: "#f5f5f5",
          transition: "all 0.3s ease-in-out",
        }}
      >
        {renderContent()}
      </Box>

      {/* Navbar móvil (solo móvil/tablet) */}
      {isMobile && (
        <MobileNavbar
          activeNav={activeNav}
          onNavClick={handleNavClick}
          isAdmin={currentView === "admin"}
        />
      )}
    </Box>
  );
}

export default App;
