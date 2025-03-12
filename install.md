

"Set up a modern React frontend development environment using the following specifications and best practices. Ensure the project is optimized for performance, maintainability, and scalability."

- --

### 🔧 **Instructions for Cursor AI**

1. **Project Setup**

- Initialize a new React 20+ project with TypeScript.

- Use **Vite** as the build tool for fast development.

- Install and configure:

- **ESLint** for code linting.

- **Prettier** for code formatting.

- **styled-components** 

2. **Folder Structure**

Organize the project with the following folder hierarchy:

```

src/

├── components/    # Reusable UI components

├── pages/         # Page-level components

├── hooks/         # Custom React hooks

├── context/       # Global state management

├── utils/         # Utility functions

├── config/        # Project configurations (e.g., API endpoints)

```

3. **Code Standards**

- Use functional components exclusively.

- Define all props using `interface` or `type` (avoid `any`).

- Avoid global CSS; use scoped styles with `styled-components`

- Configure ESLint rules to enforce consistent code style.

4. **Routing & State Management**

- Set up client-side routing using **react-router-dom**.

- Use **React Query** for API calls and caching optimization.

- Provide an example of global state management using the Context API.

5. **Component Template**

Auto-generate components with the following structure:

```tsx

import React from "react";

interface Props {

title: string;

}

const ExampleComponent: React.FC<Props> = ({ title }) => {

return <h1>{title}</h1>;

};

export default ExampleComponent;

```

6. **Additional Features**

- Include sample API integration using React Query.

- Add a basic custom hook in the `src/hooks/` directory.

- Provide an example of reusable styled components 

7. **Configuration Files**

Ensure the following configuration files are included:

- `.eslintrc.js` for linting rules.

- `.prettierrc` for formatting rules.

- `tsconfig.json` optimized for React development.

- --

### 🚀 **Expected Output**

A fully functional React project template with:

- TypeScript configuration.
- Pre-configured ESLint and Prettier.
- Vite as the build tool.
- Styled-components  integration.
- React Router and React Query setup.
- A clean folder structure with example files in each directory.