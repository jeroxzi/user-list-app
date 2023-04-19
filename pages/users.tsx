import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import UserCard from "../components/UserCard";
import getUsers, { User } from "./api/users";

const PAGE_SIZE = 6;

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  const fetchUsers = async (page: number) => {
    try {
      const userResponse = await getUsers(page);
      if (page === 1) {
        setUsers(userResponse.data);
      } else {
        setUsers((prevUsers) => [...prevUsers, ...userResponse.data]);
      }
      setCurrentPage(userResponse.page);
      setTotalPages(userResponse.total_pages);
    } catch (error) {
      console.error(`Failed to fetch page ${page}`, error);
    }
  };

  useEffect(() => {
    fetchUsers(currentPage);
  }, []);

  const loadMore = () => {
    fetchUsers(currentPage + 1);
  };

  const isLoadMoreDisabled = currentPage === totalPages;

  console.log(
    `Current page: ${currentPage}, Total pages: ${totalPages}, Users:`,
    users
  );

  return (
  <>
  <Container className="text-center d-flex flex-column justify-content-center mt-5">
      <Row>
      {users &&
        users.map((user) => (
          <Col
          key={user.id}
          xs={12}
          sm={6}
          md={4}
          lg={4}
          className="d-flex flex-column align-items-center"
        >
          <UserCard user={user} />
        </Col>
        ))}
      </Row>
      <div className="mt-5 mb-5">
          <Button
            onClick={loadMore}
            disabled={isLoadMoreDisabled}
            className="btn-lg"
          >
            {isLoadMoreDisabled || users.length === PAGE_SIZE * totalPages
              ? "No more users"
              : "Load more"}
          </Button>
        </div>
    </Container>
    </>
  );
};

export default UsersPage;
