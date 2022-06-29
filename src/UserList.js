import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import UserCard from './component/UserCard';

const UserList = () => {
  const [user, setUser] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUser(response.data))
      .then((error) => console.log(error));
  }, []);

  return (
    <div>
      <Container fluid>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
            {user.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
      </Container>
    </div>
  );
};

export default UserList;
