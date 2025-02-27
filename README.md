# Advanced React Redux Blog

A modern, feature-rich blog application built with React, Redux Toolkit, and JSONPlaceholder API. This project demonstrates best practices in React development, state management with Redux, and responsive design.

![React Redux Blog](https://i.imgur.com/YourScreenshot.png)

## 🚀 Features

- **Advanced Post Management**
  - View all posts in a responsive grid layout
  - Search posts by title and content
  - Filter posts by user
  - Pagination with dynamic page numbers

- **Detailed Post View**
  - Individual post pages with full content
  - Comments section for each post
  - User information display

- **Modern UI/UX**
  - Responsive design for all devices
  - Smooth animations and transitions
  - Loading states and error handling
  - Clean and intuitive interface

- **State Management**
  - Centralized state with Redux Toolkit
  - Async operations with Redux Thunk
  - Efficient data fetching and caching

## 🛠️ Technologies

- React 18
- Redux Toolkit
- React Router DOM
- Axios
- HeroIcons
- JSONPlaceholder API

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-redux-blog.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-redux-blog
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

## 🏗️ Project Structure

```
src/
├── components/         # React components
│   ├── LoadingSpinner.jsx
│   ├── Pagination.jsx
│   ├── PostDetail.jsx
│   └── PostsList.jsx
├── store/             # Redux store configuration
│   ├── slices/        # Redux slices
│   │   └── postsSlice.js
│   └── store.js
├── App.jsx            # Main application component
├── App.css            # Global styles
├── main.jsx          # Application entry point
└── index.css         # Base styles
```

## 🔍 Features in Detail

### Posts List
- Grid layout with responsive design
- Search functionality for filtering posts
- User-based filtering
- Pagination with dynamic page numbers
- Loading states and error handling

### Post Detail
- Full post content display
- Comments section
- Back navigation
- Loading and error states

### UI Components
- Custom loading spinner
- Responsive navigation
- Error boundaries
- Clean and modern design

## 🔧 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build
- `npm run lint` - Runs ESLint for code quality

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the fake REST API
- [HeroIcons](https://heroicons.com/) for the beautiful icons
- [React](https://reactjs.org/) and [Redux](https://redux.js.org/) teams for the amazing libraries

## 📧 Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter) - email@example.com

Project Link: [https://github.com/yourusername/react-redux-blog](https://github.com/yourusername/react-redux-blog)