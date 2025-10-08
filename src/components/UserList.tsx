import { User } from "../models/User";

interface Param {
  users: User[];
  deleteUser: (userId: number) => void;
}

const UserList = ({ users, deleteUser }: Param) => {
  return (
    <>
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserList;
