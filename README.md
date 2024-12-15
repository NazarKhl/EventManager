# Event Manager  

Event Manager is a dynamic web application designed to simplify the process of event creation, management, and tracking. With features like progress monitoring, user interactions, and seamless customization, this project leverages modern technologies like **React**, **Next.js**, **TypeScript**, and **TailwindCSS** to deliver a responsive and user-friendly experience.  

---

## Features  

### Core Functionality  
- **Event Creation and Management**  
  Effortlessly create, update, and delete events with detailed information like:  
  - Event name, date, and time.  
  - Location.  
  - Descriptions and categories.  

- **Progress Tracking Dashboard**  
  - Visualize event tasks' status using interactive charts and graphs.  
  - Percentage-based progress bars for better event task management.  

- **Dark Mode**  
  - Toggle a dark or light theme to suit user preferences, powered by TailwindCSS's `dark:` classes.  

- **Mobile-Friendly and Responsive Design**  
  - Fully responsive layouts ensuring optimal performance across all screen sizes.  

- **Interactive Calendar View**  
  - Display events in a weekly/monthly calendar with hover tooltips.  

- **Advanced Filtering and Search**  
  - Filter events by categories, time, or user preferences.  

- **Detailed Single Event Page**  
  - Includes:  
    - Event image galleries.  
    - In-depth descriptions.  
    - Integrated contact form for inquiries.  

- **User Dashboard**  
  - Personalized dashboard for managing your hosted events and RSVP details.  

---

## Technologies Used  

- **Frontend**:  
  - **React**: Component-based library for building UI.  
  - **Next.js**: Framework for server-side rendering and static site generation.  
  - **TypeScript**: Ensures type safety and maintainability.  
  - **TailwindCSS**: Utility-first framework for modern, responsive design.  

- **Backend**:  
  - **Python(Django)**: RESTful APIs for event and user management.  

- **Database**:  
  - **MongoDB**: For storing event and user data.  

- **Visualizations**:  
  - **Chart.js**: Interactive and customizable charts for event progress tracking.  

---

## Installation  

### Steps  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/NazarKhl/EventManager.git  
   cd EventManager  
   ```  

2. Install dependencies:  
   ```bash  
   npm install  
   ```  

3. Start the development server:  
   ```bash  
   npm run dev  
   ```  

4. Open the application in your browser at `http://localhost:3000`.  

---

## Environment Variables  

Create a `.env.local` file in the root directory and add the following:  
```env  
NEXT_PUBLIC_API_URL=https://api.example.com  
NEXT_PUBLIC_ANALYTICS_KEY=your-analytics-key  
```  

Replace the placeholders with your actual API URL and keys.  

---

## Contributing  

We welcome contributions from the community! Follow these steps to contribute:  

1. Fork the repository.  
2. Create a new branch:  
   ```bash  
   git checkout -b feature-name  
   ```  
3. Commit your changes:  
   ```bash  
   git commit -m "Add feature: description"  
   ```  
4. Push to your branch:  
   ```bash  
   git push origin feature-name  
   ```  
5. Open a pull request for review.  

---

## License  

This project is licensed under the **MIT License**. See the `LICENSE` file for more details.  

---

## Acknowledgements  

- [React](https://reactjs.org/)  
- [Next.js](https://nextjs.org/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Chart.js](https://www.chartjs.org/)  

