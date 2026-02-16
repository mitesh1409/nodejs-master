# Node.js Project Structure (That Scales)

Clean & Clear
    Easy to understand.
Modular
    Each module has a single responsibility.
Production Ready
    Follows best practices for scalability and maintainability.

Isolate your logic into distinct modules. This promotes separation of concerns and makes your codebase easier to maintain and scale.

src/
    |-- models/
    |-- views/
    |-- controllers/
    |-- routes/
    |-- middlewares/
    |-- services/
    |-- db/
    |-- config/
    |-- utils/
    |-- modules/
    |-- scripts/
    |-- tests/
    |-- app.js
    |-- server.js
.gitignore
package.json
package-lock.json
README.md
.env

---

**src/config/**  

Centralized configuration management for all your application environments (Development, Staging, Production).

This can include database configuration, API keys, and other settings.

Note that sensitive information should be stored in environment variables and not  
hardcoded in configuration files, for example database credentials, API keys, AWS secrets etc.  

This is to ensure that sensitive information is not exposed in version control and  
can be easily managed across different environments using seperate .env files for each environment.

---

**.env**  

.env file is used to store environment variables, such as database credentials, API keys,  
and other sensitive information.  

This allows you to keep your configuration separate from your code and easily manage  
different environments (Development, Staging, Production) using seperate .env files for  
each environment.  

This is put in .gitignore to prevent it from being committed to version control,  
which helps protect sensitive information from being exposed in public repositories.

---

**src/services/**

Encapsulate business logic and external API interactions in services, not controllers.  

This keeps your controllers "thin" and focused on handling HTTP requests and responses only.  

---

**src/modules/**

For microservices or feature-based architecture, organize code into modules that contain all related components (models, controllers, services) for a specific feature.

---

**src/tests/**

Organize your tests in a dedicated directory, mirroring the structure of your source code for easy navigation and maintenance.

---

**src/scripts/**

For utility scripts, database seeding, automation tasks or any one-off tasks that are not part of the main application logic.

---

**src/controllers/**

Keep controllers thin by delegating business logic to services.  

Controllers should be responsible for handling HTTP requests and responses, and should not contain business logic.  

---

**Global Error Handler**

A single, consistent error handling mechanism to catch all errors of the entire application.

There should be one middleware in place to handle all errors in the application.  
This ensures consistent error handling and response formatting across the entire application.  

Improves application robustness and maintainability by centralizing error handling logic.
