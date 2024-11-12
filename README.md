# Kanban Board Project

A full-stack Kanban board application featuring JWT authentication, built using Node.js, Express, React, and TypeScript. This application supports secure user login, task management, and project tracking with a visually organized Kanban board layout.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **JWT Authentication**: Secure login and logout with JSON Web Tokens.
- **Kanban Board Layout**: Intuitive task organization with draggable tasks across columns.
- **Persistent Data**: Stores user, project, and task data in a SQL database.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Error Handling**: Robust error handling for a smooth user experience.
- **User Management**: Each user can manage their own tasks and projects.

## Technologies Used

- **Frontend**: React, TypeScript, CSS
- **Backend**: Node.js, Express, Sequelize (ORM)
- **Database**: PostgreSQL
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Render

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14+ and npm v6+
- [PostgreSQL](https://www.postgresql.org/) v12+
- A GitHub account for storing your repository

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/J0263/KanbanBoard.git
   cd KanbanBoard