import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin: 25px auto 40px;
`;

const Input = styled.input`
    padding: 0.5em;
    margin: 0.5em;
    background-color: inherit;
    border: none;
    border-bottom: 1px solid #5D4037;
    width: 300px;
    font-size: 14px;
    letter-spacing: 0.05em;

    &::placeholder{
        color: #9E9E9E;
    }
`;

const AddBtn = styled.button`
    padding: 0;
    border: none;
    height: 30px;
    width: 38px;
    border-radius: 3px;
    background-color: #FA984F;
    font-size: 20px;
    color: #FEEED8;
    cursor: pointer;
`;


function AddTask(){
    return(
        <Wrapper>
            <Input
                type='text'
                placeholder={'Add new task...'}
            />
            <AddBtn>
                +
            </AddBtn>
        </Wrapper>
    );
}

export default AddTask;