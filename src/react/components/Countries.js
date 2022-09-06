import {useDispatch, useSelector} from "react-redux";
import {CountryCard} from "./CountryCard";
import {Pagination} from "./Pagination";
import {Sorting} from "../elements/Sorting";
import {Filter} from "./Filter";
import {useEffect} from "react";
import {searchCountries, setPageNumber} from "../../redux/actions";
import styled from "styled-components";

export const StyledCountries = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  align-self: center;

  @media (max-width: 1250px){
    max-width: 900px;
  }
  
`

export const Main = styled.div`
  display: flex;
  
  
`
export const CountriesContainer = styled.div`
  
  display: grid;
  gap: 16px;
  margin-left: 9px;
  margin-top: 10px;
  grid-template-columns: repeat(4, 1fr);
  min-height: 1000px;
  
  .noResults{
    display: flex;
    width: 1000px;
    flex-direction: column;
    align-content: center;
    margin-top: 250px;
    text-align: center;
  }
  
  
  
  @media (max-width: 1250px){
    grid-template-columns: repeat(2, 1fr);
  }
  
`

export const Countries = ({location}) => {

    const search = location.search
    const params = new URLSearchParams(search)
    const query = params.get('name')

    const dispatch = useDispatch()

    const {
        countries,
        currentCountries,
        currentPage
    } = useSelector(state => state)

    useEffect(() => {
        dispatch(setPageNumber(currentPage))
    }, [])


    return <StyledCountries>
        <Sorting/>
        <Main>
            <Filter/>
            <CountriesContainer>
                {countries.length > 0 ? currentCountries.map(country => {
                    return <CountryCard
                        key={country.id}
                        id={country.id}
                        name={country.name}
                        flag={country.flag}
                        region={country.region}
                        subregion={country.subregion}
                        capital={country.capital}
                        population={country.population}
                    />
                }) : <div className={'noResults'}>
                    <h5>No se encontraron resultados</h5>
                    <p>Proba con otro pais...</p>
                </div>}
            </CountriesContainer>

        </Main>
        <Pagination/>

    </StyledCountries>
}