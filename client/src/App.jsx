import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importar el authProvider
import { AuthProvider } from "./context/authContext.jsx";

import RegisterPage from "./pages/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<h1 className="text-4xl font-bold">Home page</h1>} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/tasks' element={<h1 className="text-4xl font-bold">Tasks page</h1>} />
          <Route path='/add-tasks' element={<h1 className="text-4xl font-bold">New task</h1>} />
          <Route path='/tasks/:id' element={<h1 className="text-4xl font-bold">Update Task</h1>} />
          <Route path='/profile' element={<h1 className="text-4xl font-bold">Profile</h1>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App