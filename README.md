# Kichirmichir 🦜

**Kichirmichir** is an interactive language learning application designed to make language acquisition as fun as the chirping of birds. The name "Kichirmichir" is derived from the Bengali word for "chirping," symbolizing this app's vibrant and engaging nature.

This project is a clone of the popular language-learning app Duolingo, built with cutting-edge technologies to create a seamless and intuitive user experience.

## Demo:

#### Live URL: https://dub.sh/kichirmichir-app

#### Demo Video: http://www.youtube.com/watch?v=eG07ISE_TDc

[![Demo Video](http://img.youtube.com/vi/eG07ISE_TDc/0.jpg)](http://www.youtube.com/watch?v=eG07ISE_TDc "Demo")

## 🚀 Features

- **Interactive Lessons:** Engaging language lessons that guide users from basic to advanced levels.
- **Gamified Learning Experience:** Earn points, unlock new levels, and track progress like in Duolingo.
- **Voiceover by AI:** Leveraging Elevenlabs AI for natural and dynamic voiceovers.
- **Admin Dashboard:** Manage users, courses, and content effortlessly with a powerful admin interface.

## 🛠 Tech Stack

- **Next.js v14:** Utilizes server-side rendering and static site generation for fast, SEO-friendly pages.
- **Shadcn UI & Tailwind CSS:** Provides a modern and accessible user interface with utility-first CSS for responsive design.
- **Clerk:** Manages secure user authentication and user management.
- **Drizzle ORM:** Offers type-safe ORM for efficient database queries with PostgreSQL.
- **Elevenlabs AI:** Delivers natural voiceovers to enhance the auditory learning experience.
- **React-Admin:** Powers the admin dashboard for efficient backend management.
- **Neon DB:** Hosts a scalable and secure cloud-based PostgreSQL database.
- **React-Use & Zustand:** Enhances app functionality with hooks and centralized state management.

## 🛤 Future Plans

Kichirmichir aims to go beyond language learning. We plan to introduce various challenges and expand the course offerings to transform it into a versatile quiz and for-fun app.

## 📚 Getting Started

### Prerequisites

- **Node.js** v16 or higher
- **npm**
- An working account on [Clerk](https://clerk.dev)
- An working account on [Neon DB](https://neon.tech)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/kichirmichir.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd kichirmichir
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Set up environment variables:**

    - Copy the `.env.example` file to `.env`:

        ```bash
        cp .env.example .env
        ```

    - Open the `.env` file and fill in the necessary values:

        ```env
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"
        CLERK_SECRET_KEY="your_clerk_secret_key"
        NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL="/learn"
        NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL="/learn"
        DATABASE_URL="your_postgresql_database_url"
        ADMIN_USER_ID="your_admin_user_id"
        ```

        > **Notes:**
        >
        > - Replace `your_clerk_publishable_key` and `your_clerk_secret_key` with your keys from the [Clerk Dashboard](https://dashboard.clerk.dev/).
        > - Replace `your_postgresql_database_url` with your Neon DB connection string from the [Neon DB Dashboard](https://console.neon.tech/).

5. **Run the development server:**

    ```bash
    npm run dev
    ```

6. **Open the app in your browser:**

    Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

      Now please sign up in the application using `Clerk` in your localhost and then find your `userId` in the [Clerk Dashboard](https://dashboard.clerk.dev/) or inside the `userProgress` table in your Neon database. 
  
    > - Add your `userId` in the `ADMIN_USER_ID` field of your `.env` file and restart the `localhost` server again
    > - Only the account with the `ADMIN_USER_ID` will be able to access the admin dashboard at the `/admin` route.


## 🧑‍💻 Contributing

Contributions are welcome! If you'd like to contribute to Kichirmichir, please fork the repository, create a new branch, and submit a pull request. Make sure to follow the code style and add relevant tests.

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

