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
  const tasks = ["Tarea 1", "Tarea 2"]; // Tareas de ejemplo

  return (
    <Container>
      <Card>
        <Title>Nuctasks</Title>
        <InputContainer>
          <Input type="text" placeholder="¿Qué tarea desea agregar?" />
          <AddButton>Agregar</AddButton>
        </InputContainer>
        <TaskList>
          {tasks.map((task, index) => (
            <TaskItem key={index} task={task} onDelete={() => {}} />
          ))}
        </TaskList>
        <ClearAllButton>Borrar todas</ClearAllButton>
      </Card>
    </Container>
  );
};

export default App;