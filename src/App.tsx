import { useEffect, useRef, useState } from "react";
import "./App.css";
import { User } from "./models/User";
import UserList from "./components/UserList";
import { CanceledError } from "./services/api-client";
import userService from "./services/user-service";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const httpService = userService.create();

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = httpService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  // In an optimistic update we update the UI before the server
  const deleteUser = (userId: number) => {
    const originalUsers = [...users];
    setIsLoading(true);
    setError("");

    httpService
      .delete(userId)
      .then(() => {
        console.log(`User ${userId} deleted successfully`);
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateUser = (user: User) => {
    setIsLoading(true);
    const updatedUser = { ...user, name: user.name + "!" };

    httpService
      .update(updatedUser)
      .then((res) => {
        setUsers(
          users.map((user: User) => (user.id === res.data.id ? res.data : user))
        );
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser: User = {
      id: 0,
      name: "Anita",
    };

    setIsLoading(true);
    setError("");
    httpService
      .add(newUser)
      .then(({ data: newUser }) => {
        // setUsers([...users, newUser]);
        setUsers((prevUsers) => [...prevUsers, newUser]);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading === true && (
        <div className="spinner-border" role="status"></div>
      )}
      {error !== "" && <div className="text-danger">{error}</div>}
      <button
        className="btn btn-primary"
        onClick={() => {
          addUser();
        }}
      >
        Add User
      </button>
      <UserList
        users={users}
        updateUser={updateUser}
        deleteUser={deleteUser}
      ></UserList>
    </>
  );

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await axios.get<User[]>(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );

  //       setUsers(res.data);
  //     } catch (err) {
  //       setError((err as AxiosError).message);
  //     }
  //   };

  //   fetchUsers();
  // }, []);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/usersx")
  //     .then((res) => {
  //       console.log(res.ok);
  //       if (res.ok) {
  //         res.json().then((json) => {
  //           setUsers(json);
  //         });
  //       } else {
  //         setError(res.status.toString());
  //       }
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //     });
  // }, []);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/usersx");
  //       if (res.ok) {
  //         const userJSON: User[] = await res.json();
  //         setUsers(userJSON);
  //       } else {
  //         setError(res.status.toString());
  //       }
  //     } catch (err) {
  //       setError("Error [" + err + "]");
  //     }
  //   };

  //   fetchUsers();
  // }, []);
}

export default App;
