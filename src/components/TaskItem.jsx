import styled from "styled-components";

const TaskContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
  font-size: 16px;

  &:last-child {
    border-bottom: none; 
  }

`;

const TaskText = styled.span`
  flex: 1;
  color: #333;
`;

const DeleteButton = styled.button`
  background-color: #f84e50;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #fa7a7c; /* Tono más claro */
  }
`;

const TaskItem = ({ task }) => {
  return (
    <TaskContainer>
      <TaskText>{task}</TaskText>
      <DeleteButton>Borrar</DeleteButton>
    </TaskContainer>
  );
};

export default TaskItem;