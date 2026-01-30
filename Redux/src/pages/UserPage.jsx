import { useSelector, useDispatch } from "react-redux";
import { usersData } from "../features/api/apiSlice";
import { useEffect } from "react";

const UserPage = () => {
  const { loading, error, users } = useSelector(
    (state) => state.usersData
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersData());
  }, [dispatch]);

  if (loading) return <p style={styles.center}>Loading...</p>;
  if (error) return <p style={styles.error}>{error}</p>;

  return (
    <div style={styles.page}>
      <h1 style={styles.pageTitle}>Users</h1>

      <div style={styles.grid}>
        {users.map((user) => (
          <div key={user.id} style={styles.card}>
            <h2 style={styles.name}>{user.name}</h2>
            <p style={styles.email}>{user.email}</p>
            <p style={styles.meta}>
              <strong>Username:</strong> {user.username}
            </p>
            <p style={styles.meta}>
              <strong>City:</strong> {user.address.city}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserPage;

const styles = {
  page: {
    padding: "30px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
  },
  pageTitle: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  name: {
    margin: "0 0 8px",
    color: "#2c7be5",
    fontSize: "20px",
  },
  email: {
    margin: "0 0 10px",
    color: "#28a745",
    fontSize: "14px",
    wordBreak: "break-word",
  },
  meta: {
    margin: "4px 0",
    color: "#555",
    fontSize: "14px",
  },
  center: {
    textAlign: "center",
    marginTop: "50px",
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: "50px",
  },
};
