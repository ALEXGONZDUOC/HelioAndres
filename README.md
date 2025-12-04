# Helioandes Solar

This is a React-based web application for Helioandes Solar. It likely serves as a platform to showcase solar energy solutions, manage customer interactions, and potentially provide administrative functionalities.

## Features

Based on the project structure, the application includes:

*   **User Interface Components**:
    *   `Hero`: Main introductory section.
    *   `Home`: Landing page or main content area.
    *   `Navbar`: Navigation bar.
    *   `Footer`: Application footer.
    *   `Planes`: Section detailing solar plans/packages.
    *   `Servicios`: Information about services offered.
    *   `Soluciones`: Details on solar solutions.
    *   `Testimonios`: Customer testimonials.
    *   `Calculadora`: A calculator utility (possibly for solar savings/costs).
    *   `Contacto`: Contact form or information.
    *   `FAQ`: Frequently asked questions.
*   **Authentication**:
    *   `Login`: User login functionality.
    *   `ProtectedRoute`: Ensures only authenticated users can access certain routes.
    *   `AuthContext`: Manages authentication state across the application.
*   **Admin Panel**:
    *   `AdminDashboard`: Overview for administrators.
    *   `AdminPlanes`: Management of solar plans.
    *   `AdminServicios`: Management of services.
    *   `AdminVendedores`: Management of sales personnel.
    *   `AdminSidebar`: Navigation for the admin section.
    *   `AdminLayout`: Layout for the admin interface.

## Technologies Used

*   **React**: A JavaScript library for building user interfaces.
*   **Create React App**: Used for setting up the development environment.
*   (Potentially other libraries like React Router for navigation, context API for state management, etc.)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed.

*   [Node.js (includes npm)](https://nodejs.org/en/)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository_url>
    cd helioandes-solar
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```

### Running the application

To run the application in development mode:

```bash
npm start
```

This will open the application in your browser at [http://localhost:3000](http://localhost:3000).

## Project Structure

*   `src/`: Contains the main source code.
    *   `components/`: Reusable UI components.
    *   `context/`: React context providers (e.g., AuthContext).
    *   `data/`: Local data storage or mock data (e.g., db.js).
    *   `layouts/`: Layout components (e.g., AdminLayout).
    *   Other files: Main application logic, styling, and entry points (`App.js`, `index.js`, `App.css`, `index.css`).

## Available Scripts

In the project directory, you can run:

*   `npm start`: Runs the app in the development mode.
*   `npm test`: Launches the test runner.
*   `npm run build`: Builds the app for production.
*   `npm run eject`: Ejects from Create React App configuration (use with caution).

For more details, refer to the Create React App documentation.

## Latest Update

**December 4, 2025**: Minor README update.