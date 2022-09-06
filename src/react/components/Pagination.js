import {useDispatch, useSelector} from "react-redux";
import {setPageNumber} from "../../redux/actions";
import styled from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  margin-left: 200px;
  
  @media (max-width: 1250px){
    margin-left: 50px;
  }
  
  @media (max-width: 895px){
    display: none;
  }
  
  button{
    background-color: #4618ac;
    color: white;
    border: none;
    outline: none;
    font-size: large;
    margin-right: 5px;
    margin-bottom: 100px;
    width: 30px;
    height: 30px;
    
    @media (max-width: 1250px){
      margin-right: 0;
      width: 23px;
      height: 20px;
    }
    
    :hover{
      cursor: pointer;
      border: 1px solid white;
    }
  }
`

export const Pagination = () => {

    const dispatch = useDispatch()

    const {
        countriesLength,
        countriesPerPage,
    } = useSelector(state => state)

    const pageNumbers = []

    for (let i = 0; i < Math.ceil(countriesLength / countriesPerPage); i++) {
        pageNumbers.push(i)
    }

    const handleClick = (ev) => {
        const pageNumber = Number(ev.target.innerHTML)
        dispatch(setPageNumber(pageNumber))
    }

    return <StyledPagination>
        {pageNumbers.map(number => <button key={number} onClick={handleClick}>{number + 1}</button>)}
    </StyledPagination>

}