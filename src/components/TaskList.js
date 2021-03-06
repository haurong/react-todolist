import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Filter from './Filter';
import TaskItem from './TaskItem';


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

    const filter = useSelector((store) => store.filterReducer);

    const renderItems = () => {
        let list = [];
        tasks.forEach((item, index)=>{
            if(
                (filter === "SHOW_ALL" ) ||
                (filter === "SHOW_TODO" && !item.isCompleted ) ||
                (filter === "SHOW_DONE" && item.isCompleted )
            ){
            list.push(
                <TaskItem key={item.taskName} task={{ ...item, idx: index }}/>
            );
            }
        });
        return list;
    };

    return(
        <Wrapper>
            <Filter selected = {filter} />
            <TaskListContainer>{renderItems()}</TaskListContainer>
        </Wrapper>
    );
}


export default TaskList;