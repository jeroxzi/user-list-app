import { FunctionComponent } from "react";
import { Card, Button } from "react-bootstrap";
import { User } from "../pages/api/users";

type Props = {
  user: User;
};

const UserCard: FunctionComponent<Props> = ({ user }) => {
  return (
    <Card style={{ width: "18rem" }} className="border-0 mb-5">
        <Card.Img
        variant="top"
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        style={{ borderRadius: "50%", width: "200px", height: "200px", objectFit: "cover" }}
        className="mx-auto"
      />
      <Card.Body>
        <Card.Text>{user.id}</Card.Text>
        <Card.Text>{user.email}</Card.Text>
        <Card.Title>{`${user.first_name} ${user.last_name}`}</Card.Title>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
