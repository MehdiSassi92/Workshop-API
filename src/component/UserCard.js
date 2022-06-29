import { Card } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h2>
            {user.name} {user.username}
          </h2>
        </Card.Title>
        <Card.Text>
          <strong>E-mail</strong> : {user.email}
          <br />
          <strong>Phone</strong> :{user.phone}
          <br />
          <strong>Web</strong> :{user.website}
        </Card.Text>
        <Card.Text>{user.address.street}</Card.Text>
      </Card.Body>
    </Card>
  );
};
export default UserCard;