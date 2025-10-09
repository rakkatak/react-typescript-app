import { User } from "../models/User";
import { apiClient, CanceledError } from "./api-client";

interface HttpEntity {
    id: number
}

export class HttpService {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }
    getAll<T>() {
        const controller = new AbortController();
        const request = apiClient.get<T[]>(this.endpoint, { signal: controller.signal });
        const cancel = () => {controller.abort()};

        return {request, cancel};
    }
    delete(id: number) {
        return apiClient.delete(this.endpoint + id);
    }

    update<T extends HttpEntity>(entity: T) {
        return apiClient.patch<User>(this.endpoint + entity.id, entity);
    }

    add<T>(entity: T) {
        return apiClient.post(this.endpoint, entity);
    }    
}

export const create = (endpoint: string) : HttpService => {
    return new HttpService(endpoint);
}
