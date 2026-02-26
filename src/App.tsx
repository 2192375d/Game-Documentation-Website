import FunctionBar from "@components/FunctionBar";
import NavBar from "@components/NavBar";
import AppRoutes from "@routes/AppRoutes";

function App() {

  return (
    <div
      className="hcontainer apppage"
      style={{
        gap: "1.5rem",
        margin: "2rem",
        alignItems: "stretch",
        width: "70vw",
      }}>
      <NavBar />
      <main className="mainpage">
        <AppRoutes />
      </main>
      <FunctionBar />
    </div>
  )
}

export default App
