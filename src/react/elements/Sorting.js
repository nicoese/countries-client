import {useDispatch, useSelector} from "react-redux";
import {setPageNumber, sort} from "../../redux/actions";
import styled from "styled-components";


export const StyledSorting = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 180px;
  border-radius: 3px;
  background-color: #311178;
  font-weight: 700;
  font-size: medium;
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.3));
  
  @media (max-width: 1250px){
    max-height: 100px;
    max-width: 870px;
    
    h2{
      margin-right: 40px;
    } 
  }
  
  @media(max-width: 895px){
    display: none;
  }
  
  select{
    width: 200px;
    height: 35px;
    padding-left: 10px;
    background-color: #311178;
    color: white;
    outline: none;
    border: solid 1px white;
    margin-bottom: 20px;
    margin-right: 20px;
    
    :hover{
      cursor: pointer;
    }
  }
  
  p{
    margin-bottom: 20px;
    margin-right: 4%;
  }  
  
  h2{
    align-self: flex-start;
    font-size: 35px;
    width: 320px;
    margin-left: 50px;
    
  }

`

export const Sorting = () => {

    const dispatch = useDispatch()

    const {
       currentPage,
        countriesLength,
        countriesPerPage,
    } = useSelector(state => state)

    const handleChange = (ev) => {

        const index = ev.target.selectedIndex
        const value = ev.target.children[index].value

        switch (value){

            case "nameAsc":
                dispatch(sort('name', 'asc'))
                break
            case "nameDesc":
                dispatch(sort('name', 'desc'))
                break
            case "popAsc":
                dispatch(sort('population', 'asc'))
                break
            case "popDesc":
                dispatch(sort('population', 'desc'))
                break
            default:
                break
        }

        dispatch(setPageNumber(currentPage))

    }

    return <StyledSorting>
        <h2>Bienvenido!</h2>
        <p>Pagina actual: {currentPage}</p>
        <p>Resultados por pagina: {countriesPerPage}</p>
        <p>Resultados: {countriesLength}</p>
        <label htmlFor="sorting">
            <select onChange={handleChange} name="sorting" id="">
                <option value="">Ordenar</option>
                <option value="nameAsc">Nombre - Asc</option>
                <option value="nameDesc">Nombre - Desc</option>
                <option value="popAsc">Poblacion - Asc</option>
                <option value="popDesc">Poblacion - Desc</option>
            </select>
        </label>
    </StyledSorting>
}
