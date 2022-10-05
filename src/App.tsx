// Packages
import { ToastContainer } from 'react-toastify';

// Routes
import AppRoutes from './routes/AppRoutes';

// Styling
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <header className="header">Reservations</header>
      <main className="main">
        <AppRoutes />
      </main>
      <footer className="footer">Yassir Frontend Challenge v0.0.1</footer>
    </div>
  );
}

export default App;
