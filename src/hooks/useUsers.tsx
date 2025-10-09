import { useEffect, useState } from "react";
import { User } from "../models/User";
import userService from "../services/user-service";
import { CanceledError } from "../services/api-client";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = userService.getAll<User>();
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

  return { users, error, isLoading, setUsers, setError, setIsLoading };
};
