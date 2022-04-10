import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as actions from "./actions/filter";

const ButtonContainer = styled.div`
    display: flex;
`;
const Button = styled.div`
    width: min-content;
    padding: 5px 10px;
    margin-right: 10px;
    background-color: ${(props) => (props.active ? "#FA984F" : "#5D4037" )};
    border: none;
    border-radius: 3px 3px 0 0;
    color: #FFFFFF;
    letter-spacing: 1px;
    text-align: center;
    cursor: pointer;

`;


function Filter(props){
    const dispatch = useDispatch();
    return(
        <ButtonContainer>
            <Button
            active={props.selected === "SHOW_ALL"}
            onClick={ () => dispatch(actions.setFilter("SHOW_ALL")) }
            >
                All
            </Button>
            <Button active={props.selected === "SHOW_TODO" }
            onClick={ () => dispatch(actions.setFilter("SHOW_TODO")) }
            >
                Todo
            </Button>
            <Button active={props.selected === "SHOW_DONE" }
            onClick={ () => dispatch(actions.setFilter("SHOW_DONE")) }
            >
                Done
            </Button>
        </ButtonContainer>
    );
}

export default Filter;