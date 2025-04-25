import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Dashboard from "./pages/Dashboard";
import UserList from "./components/UserList";
import Ratings from "./components/Ratings";
import Transactions from "./components/Transactions";
import SupportTickets from "./components/SupportTickets";
import Login from "./components/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn") === "true");
  }, []);

  return (
    <Routes>
      {!loggedIn ? (
        <Route path="*" element={<Login setLoggedIn={setLoggedIn} />} />
      ) : (
        <Route path="/" element={<Dashboard />}>
          <Route path="users" element={<UserList />} />
          <Route path="reviews" element={<Ratings />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="tickets" element={<SupportTickets />} />
          <Route path="*" element={<Navigate to="users" />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
