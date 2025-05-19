# This is the documentation guide for the Chatbot Application

## Overview

The Chatbot Application is designed to facilitate interactions through a chat interface, allowing users to upload PDF documents and engage in conversations. It integrates with Supabase for authentication and data management, and utilizes the Gemini API for enhanced functionalities.

## Project Structure

The project is organized into several key directories:

- **public/**: Contains static assets such as images.
- **src/**: The main source code for the application.
  - **styles/**: Global CSS styles and Tailwind CSS configuration.
  - **lib/**: External service clients for Supabase and Gemini.
  - **utils/**: General-purpose utility functions and helpers.
  - **hooks/**: Custom React hooks for managing state and logic.
  - **components/**: Reusable UI components for the application.
  - **pages/**: Next.js routes for the application.
  - **prisma/**: Database schema definitions if using Prisma.
  - **scripts/**: Database setup and migration scripts.
  - **docs/**: Documentation and sample queries.
  - **types/**: Shared TypeScript interfaces.

## Getting Started

To get started with the Chatbot Application, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd chatbot-app
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env.local` file based on the `.env.example` template and fill in your Supabase and Gemini configurations.

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## Documentation

For detailed information on how to use the application, refer to the following resources:

- **Sample Queries**: Check `src/docs/sample-queries.txt` for example user questions and responses.
- **Component Documentation**: Each component in the `src/components` directory is documented within the code for clarity on usage and props.
- **API Endpoints**: The API routes are defined in the `src/pages/api` directory, with specific handlers for authentication, chat messages, and file uploads.

## Contributing

Contributions are welcome! Please follow the standard Git workflow for submitting changes and improvements. Ensure that your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.