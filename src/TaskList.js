import styled from 'styled-components';
import Filter from './Filter';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';
import store from './store';

const Wrapper = styled.div`
    margin: 0 auto;
    width: 80%;
    max-width: 600px;
    min-width: 300px;
`;
const TaskListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 30px 0;
    border: 1px solid #5D4037;
`;


function TaskList(){
    const tasks = useSelector((store) => store.todosReducer);

    const renderItems = () => {
        let list = [];
        tasks.forEach((item, index)=>{
            list.push(
                <TaskItem key={item.taskName} task={{ ...item, idx: index }}/>
            );
        });
        return list;
    };
    return(
        <Wrapper>
            <Filter/>
            <TaskListContainer>{renderItems()}</TaskListContainer>
        </Wrapper>
    );
}


export default TaskList;