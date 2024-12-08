import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { TaskProvider } from './context/TaskContext'; // Importa el proveedor

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskProvider> {/* Envolver App con el TaskProvider */}
      <App />
    </TaskProvider>
  </StrictMode>
);
