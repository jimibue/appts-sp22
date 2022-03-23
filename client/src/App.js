import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <nav
        style={{
          padding: "0 20px",
          borderBottom: "1px solid",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Starter App</h1>
        <nav>
          <Link to="/home">Home</Link> - 
          <Link to="/about">About</Link> -
          <Link to="/doctors">Doctors</Link> -
          <Link to="/patients">Patients</Link> -
          <Link to="/appointments">Appointments</Link> -
          <Link to="/appointments/new">New Appointment</Link> -
        </nav>
      </nav>
      <div
        style={{
          padding: "0 20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
