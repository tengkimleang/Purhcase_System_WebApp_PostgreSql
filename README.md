# Clean Architecture with Vue 3 + TypeScript + Vite

This project is a modular and scalable web application boilerplate built with **Vue 3**, **TypeScript**, and **Vite**, following the principles of **Clean Architecture**. The goal is to create a maintainable and testable application structure by separating concerns and achieving a clear distinction between core business logic and framework-specific details.

## Key Features
- **Clean Architecture Pattern**:
    - Decouples business logic from the UI layer to make the codebase more maintainable, reusable, and testable.
    - Implements a layered structure that separates concerns into core (domain), application (use cases), infrastructure, and presentation layers.

- **Modern Development Tooling**:
    - Powered by Vue 3 with `<script setup>` for a simpler and cleaner component authoring experience.
    - TypeScript integration for type safety and improved developer productivity.
    - Vite for fast and efficient development builds.

- **Scalability and Modularity**:
    - Structured for easy testing and future growth.
    - Components, services, and modules organized to facilitate independent development and testing.

- **State Management and Routing**:
    - Integrates core dependencies such as [Vue Router](https://router.vuejs.org/) for declarative client-side navigation and [Pinia](https://pinia.vuejs.org/) for centralized state management.

---

## Project Structure
The project adheres to the Clean Architecture principles with the following directory structure:

src/
├── core/               # Domain Layer: Business logic (entities, models, interfaces)
├── use-cases/          # Application Layer: Orchestrates domain logic (use case classes)
├── infrastructure/     # Infrastructure Layer: API calls, services, and repositories
├── presentation/       # Presentation Layer: Components, pages, and views
└── shared/             # Shared utilities and constants across the app


### Layer Descriptions
1. **Core (Domain Layer)**:
    - Contains business entities, enums, and core business rules.
    - **Example**: Models like `User`, value objects, etc.

2. **Use Cases (Application Layer)**:
    - This layer contains the use case implementations that coordinate between domain entities and infrastructure code.
    - **Example**: Operations like `RegisterUser`, `FetchData`.

3. **Infrastructure Layer**:
    - Handles all framework- and I/O-related concerns such as API interaction, local storage, and database access.
    - **Example**: Repositories like `UserRepository`, `HttpService`.

4. **Presentation Layer**:
    - Focuses on the UI and user interaction using Vue components.
    - **Example**: Components for `UserProfile`, `HomePage`.

---

## Getting Started
Follow these steps to get started:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build the application for production:
   ```bash
   npm run build
   ```

4. Run linting:
   ```bash
   npm run lint
   ```

---

## Goals of Clean Architecture in this Project
- **Independent Frameworks**:
    - The core business logic (`core/` and `use-cases/`) remains framework-agnostic, which helps in switching or upgrading frontend frameworks easily.

- **Testability**:
    - Each layer is designed to be independently testable without relying on other layers, improving overall reliability.

- **Scalability**:
    - The modular structure lays a strong foundation for scaling the application by adding new features or modifying existing ones with minimal changes.

- **Separation of Concerns**:
    - Keeps the code clean, easy to read, and maintain by separating business rules from presentation logic and framework-specific implementation.

---

This project serves as a starting point for adopting **Clean Architecture principles** in modern Vue applications, focusing on scalability, ease of maintenance, and testing.
