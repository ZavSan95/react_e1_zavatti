import { useState } from "react";
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

  const [tasks, setTasks] = useState(["Tarea 1", "Tarea 2"]);
  const [newTask, setNewTask] = useState("");

  // Función para manejar el cambio en el input
  const handleInputChange = (e) =>{
    setNewTask(e.target.value);
  }

  // Función para agregar una nueva tarea
  const handleAddTask = () => {

    if(newTask.trim() === ""){
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask("");

  }

  //Función para borrar una tarea especifica
  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  // Función para borrar todas las tareas
  const handleClearAll = () => {
    setTasks([]);
  }

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
        <TaskList>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              onDelete={() => handleDeleteTask(index)} 
            />
          ))}
        </TaskList>
        <ClearAllButton onClick={handleClearAll}>Borrar todas</ClearAllButton>
      </Card>
    </Container>
  );
};

export default App;