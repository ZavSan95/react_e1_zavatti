import { createContext, useState } from "react";
import PropTypes from "prop-types";

// Creación del contexto
export const TaskContext = createContext();

// Componente proveedor
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(["Tarea 1", "Tarea 2"]);

  // Función para agregar una tarea
  const addTask = (task) => {
    if (!tasks.includes(task)) {
      setTasks([...tasks, task]);
    }
  };

  // Función para eliminar una tarea específica
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  // Función para eliminar todas las tareas
  const clearAllTasks = () => {
    setTasks([]);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, clearAllTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

// Definir PropTypes para el componente TaskProvider
TaskProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
