import TaskList from './TaskList';
import AddTask from './AddTask';
import styled from 'styled-components';
import './app.css';


const Wrapper = styled.div`
  background-color: #FEEED8;
  height: 100vh;
  padding-top: 70px;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 1px;
  color: #5D4037;
  
  
`;

function App() {
  return (
      <Wrapper>
        <Title>ToDoList</Title>
        <AddTask/>
        <TaskList/>
      </Wrapper>
  );
}


export default App;
