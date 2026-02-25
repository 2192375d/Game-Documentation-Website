import NavBar from "@components/NavBar";
import AppRoutes from "@routes/AppRoutes";

function App() {

  return (
    <div style={{
      display: "flex",
      gap: "1.5rem",
      margin: "2rem",
    }}>
      <NavBar />
      <AppRoutes />
    </div>
  )
}

export default App
