# EventManager

EventManager is a web-based application designed for managing events and tracking progress. Built using Next.js, TypeScript, and styled with Tailwind CSS, this application aims to provide a seamless user experience with a clean and modern interface.

## Features

- **Dashboard**: Overview of your projects, progress, and activities.
- **Progress Tracking**: Visual representation of overall progress through a percentage-based progress bar.
- **Latest Projects**: A section to view and manage your latest events and tasks.
- **Dark Mode**: Toggle between light and dark themes for a customizable user experience.
- **Responsive**: The interface is designed to be mobile-friendly and responsive across various devices.
- **Error Handling**: The application has error handling mechanisms in place, visible in the UI for debugging.

## Tech Stack

- **Next.js**: React framework for server-side rendering and static site generation.
- **TypeScript**: Type-safe programming language that builds on JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for creating modern, responsive designs.
- **React**: The core JavaScript library for building user interfaces.
- **State Management**: Local component state or context API for managing application-wide state.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/EventManager.git
cd EventManager
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open `http://localhost:3000` in your browser to view the application.

## Environment Variables

For certain configurations, make sure to create a `.env.local` file with the following (replace the placeholders with your actual data):

```env
NEXT_PUBLIC_API_URL=https://your-api-url.com
```

## Available Scripts

In the project directory, you can run:

- `npm run dev` — Runs the app in development mode.
- `npm run build` — Builds the app for production.
- `npm run start` — Starts the app in production mode.
- `npm run lint` — Lints the code for style issues.
- `npm run test` — Runs tests for the application.

## Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
