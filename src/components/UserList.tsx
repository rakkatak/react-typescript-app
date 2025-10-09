import { User } from "../models/User";

interface Param {
  users: User[];
  deleteUser: (userId: number) => void;
  updateUser: (user: User) => void;
}

const UserList = ({ users, deleteUser, updateUser }: Param) => {
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
              <div>
                <button
                  className="btn btn-outline-primary me-3"
                  onClick={() => {
                    updateUser(user);
                  }}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    deleteUser(user.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UserList;
