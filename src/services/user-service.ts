// import { User } from "../models/User";
// import { CanceledError } from "./api-client";
import {HttpService, create} from "./http-service";

class UserService {
    // getUsers() {
    //     const controller = new AbortController();
    //     const request = apiClient.get<User[]>("/users", { signal: controller.signal });
    //     const cancel = () => {controller.abort()};

    //     return {request, cancel};
    // }
    // deleteUser(userId: number) {
    //     return apiClient.delete("/users/" + userId);
    // }

    // updateUser(updatedUser: User) {
    //     return apiClient.patch<User>("/users/" + updatedUser.id, updatedUser);
    // }

    // addUser(newUser: User) {
    //     return apiClient.post("/users", newUser);
    // }

    
}

export default create("/users/");