import { User, UserServiceError } from './types';

export class UserService {
    private apiBaseUrl = 'https://api.example.com/users';

    async getUserById(id: string): Promise<User> {
        // TODO: Implement this method
        // Requirements:
        // - Fetch user from API
        // - Handle 404 errors
        // - Handle network errors
        throw new Error('Not implemented');
    }

    async updateUserEmail(id: string, email: string): Promise<User> {
        // TODO: Implement this method
        // Requirements:
        // - Validate email format
        // - Send PUT request
        // - Handle validation and server errors
        throw new Error('Not implemented');
    }
}