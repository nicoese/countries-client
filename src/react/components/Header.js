import styled from "styled-components";
import {Seeker} from "../elements/Seeker";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getState, setPageNumber} from "../../redux/actions";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 130px;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 45px;
  }

  button {
    width: 200px;
    height: 50px;
    color: white;
    font-size: large;
    //border: solid 2px white;
    background-color: #311178;

    :hover {
      filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.9));
      cursor: pointer;
    }
  }
  
  .landing{
    width: 60px;
    margin-left: 50px;
    border: none;
    background-color: #4618ac;
    :hover{
      cursor: pointer;
      font-size: larger;
    }
  }
`

export const Header = (props) => {

    const dispatch = useDispatch()
    const {pageNumber} = useSelector(state => state)

    return <StyledHeader>
        <Link to={'/countries'}>
            <h1 onClick={ev => {
                const checks = [...document
                    .querySelectorAll('input[type="checkbox"]')]
                checks.forEach(elem => {
                    if (elem.checked) elem.checked = false
                })
                const select = document.querySelector('select')
                if (select){
                    if (select.selectedIndex) select.selectedIndex = 0
                }
                return dispatch(getState())
            }}>COUNTRIES</h1>
        </Link>
        <Seeker/>
        <Link to={'/activities'}>
            <button>Ingresar actividad</button>
        </Link>

        <Link to={'/'}>
            <button className={'landing'}>?</button>
        </Link>
    </StyledHeader>
}