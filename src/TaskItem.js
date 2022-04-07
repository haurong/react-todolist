import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #FFF7EB;
    width: 80%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-item: center;
    letter-spacing: 0.02em;
    padding: 20px 20px;

`;
const Checkbox = styled.input.attrs({ type:'checkbox' })`
    width: 18px;
    height: 18px;
    cursor: pointer;
    border: none;
`;
const TaskName = styled.div`
    flex-grow: 1;
    margin: 0 20px;
`;
const Button = styled.div`
    font-family: "Noto Sans TC", sans-serif;
    font-size: 12px;
    font-weight: 400;
    background-color: inherit;
    width: 24px;
    height: 20px;
    color: #9E9E9E;
    display: flex;
    justify-content: center; 
    align-items: center; 
    cursor: pointer;

    &:hover{
        color: #9E9E9E;
    }
`;



function TaskItem(props){
    return(
        <Wrapper>
            <Checkbox
            type='checkbox' 
            checked={props.task.isCompleted}
            />
            <TaskName>{props.task.taskName}</TaskName>
            <Button>✕</Button>
        </Wrapper>
    );
}

export default TaskItem;