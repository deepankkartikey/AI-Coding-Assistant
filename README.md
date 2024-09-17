# MERN-gpt : A Coding Assistant

### Checkout the Demo of Project at [Demo-Link](./Coding-Assistant_Demo.mp4)
  
A full-featured chat assistant built from scratch using the MERN stack, OpenAI API, Material UI, and TypeScript. The application provides a seamless and engaging user experience with features like SignUp, LogIn, View Previous Chats, Chatting Assistance, and the ability to delete conversations.

## Features

### Frontend
- **Reusable and Modular Components**: The frontend is designed using reusable and modular components, ensuring scalability and maintainability.
- **React Concepts**:
  - `useState()`: For managing state within components.
  - `context API`: For persisting and exchanging data between various components, including `authContext` for user authentication.
  - `useEffect()`: To trigger functions based on component lifecycle events.
  - `useRef()`: To reference input elements directly within the DOM.
  - `useLayoutEffect()`: To run functions before page rendering occurs.
- **API Integration**: Utilized `axios` for making API calls to the backend.
- **Routing**: Implemented routing using `react-router-dom` for managing all links and URLs within the application.
- **Material UI**: Used to create a pleasant and user-friendly interface.
- **Additional Libraries**:
  - `react-icons`, `react-toast`, and `react-type-animation`: For an engaging and interactive user interface.

### Backend
- **Authentication**:
  - JSON Web Tokens (JWT) for secure SignIn and storing http-only cookies for up to 7 days to keep users logged in.
  - Cookie operations handled using `cookie-parser` library.
- **Protected Routes**:
  - User routes: Signup, login, authentication, logout.
  - Chat routes: New chat, retrieve all chats, delete chats.
  - Routes secured using `cors` and `jsonwebtoken` libraries.
- **OpenAI Integration**: 
  - Integrated with OpenAI API using `openai` library for providing chat completion and answering coding queries.
- **Input Validation**:
  - Custom and in-built validators using `express-validator` to ensure the integrity of user inputs and chat data.
- **Database**:
  - User schema designed using `mongoose` to store user information and conversations in MongoDB.
- **Express Middlewares**:
  - **Middleware Functionality**: Used express middlewares for request processing, authentication checks, error handling, and request validation.
- **Error Handling**:
  - Robust error handling with specified expected response codes, implemented using `try-catch` blocks and promises (resolve and reject) for handling asynchronous operations.

## Tech Stack
- **Frontend**: React.js, TypeScript, Material UI, axios, react-router-dom
- **Backend**: Node.js, Express.js, MongoDB, JWT, OpenAI API
- **Libraries**: 
  - Frontend: `react-icons`, `react-toast`, `react-type-animation`
  - Backend: `cookie-parser`, `cors`, `jsonwebtoken`, `express-validator`, `mongoose`

## Installation and Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/deepankkartikey/Coding-Assistant
    cd your-repo-name
    ```
2. Install dependencies for both frontend and backend:
    ```bash
    cd frontend
    npm install
    cd ../backend
    npm install
    ```
3. Create a `.env` file in the `backend` directory and add the following environment variables:
    ```env
    PORT=<PORT Number to run Backend>
    FRONTEND_PORT=<PORT on Which Frontend React-app is running>
    MONGO_URI=<Your MongoDB URI>
    JWT_SECRET=<Your JWT Secret>
    OPENAI_API_KEY=<Your OpenAI API Key>
    COOKIE_SECRET=<Your Cookie Secret>
    MODEL_NAME=<GPT model you want to use> like gpt-3.5-turbo, gpt-4o-mini, gpt-4o etc.
    ```
4. Start the development server:
    ```bash
    cd backend
    npm run dev
    cd ../frontend
    npm run dev
    ```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- OpenAI for providing the chat completion API.
- Material UI for the beautiful UI components.
- The amazing open-source community for the libraries and tools used in this project.
