import { useContext, useState } from "react";
import { TaskContext } from "./context/TaskContext"; // Importamos el contexto
import Container from "./components/Container";
import Card from "./components/Card";
import Title from "./components/Title";
import InputContainer from "./components/InputContainer";
import Input from "./components/Input";
import AddButton from "./components/AddButton";
import TaskList from "./components/TaskList";
import TaskItem from "./components/TaskItem";
import ClearAllButton from "./components/ClearAllButton";

const App = () => {
  const { tasks, addTask, deleteTask, clearAllTasks } = useContext(TaskContext); // Obtenemos funciones y estado del contexto
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(""); // Estado para manejar errores

  // Función para manejar el cambio en el input
  const handleInputChange = (e) => {
    setNewTask(e.target.value);
    if (error) setError(""); // Limpiar el error al escribir
  };

  // Función para agregar una nueva tarea
  const handleAddTask = () => {
    if (newTask.trim() === "") {
      setError("La tarea no puede estar vacía");
      return;
    }
    if (tasks.includes(newTask)) {
      setError("La tarea ya existe");
      return;
    }
    addTask(newTask); // Usamos la función del contexto
    setNewTask("");
  };

  return (
    <Container>
      <Card>
        <Title>Nuctasks</Title>
        <InputContainer>
          <Input
            type="text"
            placeholder="¿Qué tarea desea agregar?"
            value={newTask}
            onChange={handleInputChange}
          />
          <AddButton onClick={handleAddTask}>Agregar</AddButton>
        </InputContainer>
        {error && <p style={{ color: "red" }}>{error}</p>} {/* Mensaje de error */}
        <TaskList>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onDelete={() => deleteTask(index)} // Usamos la función del contexto
            />
          ))}
        </TaskList>
        <ClearAllButton onClick={clearAllTasks}>Borrar todas</ClearAllButton>
      </Card>
    </Container>
  );
};

export default App;
