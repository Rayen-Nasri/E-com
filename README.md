# NN-Project Frontend

## Overview
This project has been configured to run the frontend without requiring the backend. The backend code is still available but has been commented out, and mock services have been implemented to simulate backend functionality.

## How to Run the Frontend

1. Navigate to the frontend directory:
   ```
   cd front/NS
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. The application will be available at: http://localhost:5173

## Mock Services

The following mock services have been implemented to simulate backend functionality:

- **Authentication**: Login, signup, logout, email verification, password reset
- **Profile Management**: Change username, password, and phone number

### Demo Credentials
You can use these credentials to test the login functionality:
- Email: demo@example.com
- Password: password

## Backend Code

The backend code is still available in the `back` directory but has been commented out. The server.js file has been modified to run a minimal Express server without database connections or API routes.

If you want to re-enable the backend in the future, you can uncomment the relevant code in the server.js file and revert the changes in the frontend authentication and profile stores.

## Project Structure

- `front/NS`: Frontend React application
  - `src/services/mockApiService.ts`: Mock API services that simulate backend functionality
  - `src/global/authStore.tsx`: Authentication store using mock services
  - `src/global/profileStore.tsx`: Profile management store using mock services

- `back`: Backend Express application (commented out)
  - `server.js`: Modified to run without database connections or API routes