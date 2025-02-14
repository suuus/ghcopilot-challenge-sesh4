# Challenge 2: User Service Testing

## Objective
Create and test a user service that makes API calls, implementing proper mocking techniques.

## Requirements

1. Implement `UserService` class in `userService.ts` with these methods:
   - `async getUserById(id: string): Promise<User>`
   - `async updateUserEmail(id: string, email: string): Promise<User>`

2. Create proper mocks for the API calls
3. Handle error cases and write tests for them
4. Implement proper TypeScript interfaces

## Steps

1. Create the User interface
2. Write tests with mocked API calls
3. Implement the service
4. Test error scenarios

## Success Criteria
- Mock external API calls correctly
- Handle and test error cases
- Achieve full test coverage
- Proper TypeScript typing

## Tips
- Use Jest's mock functionality
- Ask Copilot about mocking best practices
- Use Copilot to help generate comprehensive test cases