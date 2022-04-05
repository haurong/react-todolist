import styled from 'styled-components';
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
    return(
        <Wrapper>
            <Filter/>
            <TaskListContainer>
                <TaskItem />
                <TaskItem />
                <TaskItem />
            </TaskListContainer>
        </Wrapper>
    );
}


export default TaskList;