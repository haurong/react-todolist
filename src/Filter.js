import styled from "styled-components";

const ButtonContainer = styled.div`
    display: flex;
`;
const Button = styled.div`
    width: min-content;
    padding: 5px 10px;
    margin-right: 10px;
    background-color: #5D4037;
    border: none;
    border-radius: 3px 3px 0 0;
    color: #FFFFFF;
    letter-spacing: 1px;
    text-align: center;
    cursor: pointer;

    &:hover {
        background-color: #FA984F;
    }
`;


function Filter(){
    return(
        <ButtonContainer>
            <Button>All</Button>
            <Button>Todo</Button>
            <Button>Done</Button>
        </ButtonContainer>
    );
}

export default Filter;