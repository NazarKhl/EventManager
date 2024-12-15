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

- **User Invitations and RSVP Tracking**  
  - Invite attendees via email or direct links.  
  - Track RSVPs in real time.  

- **Progress Tracking Dashboard**  
  - Visualize event tasks' status using interactive charts and graphs.  
  - Percentage-based progress bars for better event task management.  

- **Dark Mode**  
  - Toggle a dark or light theme to suit user preferences, powered by TailwindCSS's `dark:` classes.  

- **Mobile-Friendly and Responsive Design**  
  - Fully responsive layouts ensuring optimal performance across all screen sizes.  

### Features in Progress  
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

### Completed Features  
- **feature/1-navbar**  
  - Sticky and responsive navigation bar for seamless browsing.  

- **feature/2-pagination**  
  - Event list pagination for faster browsing through large datasets.  

- **feature/3-event-slider**  
  - Highlight featured events with an interactive slider.  

- **feature/4-contact-form**  
  - Feedback collection through a robust and validated contact form.  

- **feature/5-progress-chart**  
  - Event progress tracking through visually appealing charts.  

- **feature/12-dark-mode**  
  - Easily switch between light and dark modes for a personalized experience.  

---

## Known Bugs and Fixes  

### Bugs in Progress  
- **fix/1-slider-flickering**  
  Event slider flickers when transitioning between the last and first elements.  

- **fix/2-calendar-responsiveness**  
  Calendar component overflows on smaller screens, requiring responsive adjustments.  

- **fix/3-safari-background**  
  Background alignment issues in Safari browsers on the Contact Page.  

### Completed Fixes  
- **fix/4-dark-mode-bug**  
  Fixed TailwindCSS's `dark:` prefix behavior for nested components.  

- **fix/5-progress-bar-calculations**  
  Corrected percentage values for progress bar when task counts were low.  

---

## Technologies Used  

- **Frontend**:  
  - **React**: Component-based library for building UI.  
  - **Next.js**: Framework for server-side rendering and static site generation.  
  - **TypeScript**: Ensures type safety and maintainability.  
  - **TailwindCSS**: Utility-first framework for modern, responsive design.  

- **Backend (Optional)**:  
  - **Node.js/Express**: RESTful APIs for event and user management.  
  - **Firebase/AWS Lambda**: Serverless backend support for notifications and storage.  

- **Database**:  
  - **PostgreSQL/MongoDB**: For storing event and user data.  

- **Visualizations**:  
  - **Chart.js**: Interactive and customizable charts for event progress tracking.  

---

## To-Do  

1. **Integrate Google Calendar API**  
   Sync events with Google Calendar for real-time updates.  

2. **Email Notifications**  
   Add email-based RSVP confirmations and event reminders.  

3. **Enhanced Accessibility Features**  
   Include ARIA roles and keyboard navigation for better usability.  

4. **File Uploads**  
   Support file uploads (e.g., images for events) directly from the UI.  

5. **Improve Animations**  
   Add smooth transitions for page changes, modals, and form submissions.  

---

## Installation  

### Prerequisites  
- Ensure you have **Node.js** and **npm** or **yarn** installed.  

### Steps  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/EventManager.git  
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

