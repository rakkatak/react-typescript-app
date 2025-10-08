import { useEffect, useRef, useState } from "react";
import "./App.css";
import axios, { AxiosError } from "axios";
import { User } from "./models/User";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // In an optimistic update we update the UI before the server
  const deleteUser = (userId: number) => {
    const originalUsers = [...users];
    const updatedList: User[] = users.filter((user) => {
      return user.id != userId;
    });
    setIsLoading(true);
    setError("");

    //setUsers(updatedList);
    // Set users functional form below
    // Set users accepts a function as an argument
    // the function receives the most up to date state as prevUsers
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    console.log("Delete user", updatedList);
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + userId)
      .then(() => {
        console.log(`User ${userId} deleted successfully`);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

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

  // Optimistic add, update the UI then the server
  const addUser = () => {
    const originalUsers = [...users];
    const newUser: User = {
      id: 0,
      name: "Anita",
    };

    setIsLoading(true);
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
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
      <UserList users={users} deleteUser={deleteUser}></UserList>
    </>
  );
}

export default App;
