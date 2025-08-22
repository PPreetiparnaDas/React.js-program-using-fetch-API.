import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [users, setUsers] = useState([]); // store API data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error handling

  // Fetch API data when component loads
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3 className="text-center mt-5">Loading...</h3>;
  }

  if (error) {
    return <h3 className="text-danger text-center mt-5">Error: {error}</h3>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">User List (Fetched from API)</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
