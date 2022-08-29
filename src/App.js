import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Organazation from './pages/Organazation';
import Welcome from './pages/Welcome';
import Dashboard from "./pages/Dashboard";
import Users from './pages/Users';
import UserCreate from './pages/UserCreate';
import UserEdit from './pages/UserEdit'


const App = () => {
  return (
    <div>
      {/* Start header */}
      <header>
        <nav class="container-fluid navbar navbar-expand-lg navbar-light bg-light shadow-lg">
          <div class="container">
            <Link to="/">
              <a class="navbar-brand" href="#">Green Academy</a>
            </Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/users">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                  </Link>
                </li>
                <li class="nav-item">
                <Link to="/dashboard">
                  <a class="nav-link" href="#">Dashboard</a>
                  </Link>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* Start main */}
      <main>
        <div className="container my-4">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/create" element={<UserCreate />} />
            <Route path="/users/:id/edit" element={<UserEdit />} />
          </Routes>
        </div>
      </main>
      {/* Start footer */}
      <footer></footer>
    </div>
  )
}

export default App;