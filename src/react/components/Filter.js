import {useDispatch, useSelector} from "react-redux";
import {getState, setPageNumber, setState} from "../../redux/actions";
import styled from "styled-components";

export const StyledFilter = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 220px;
  background-color: #5825cc;
  margin-top: 10px;
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.7));
  
  @media (max-width: 1250px){
    min-width: 200px;
  }
  @media (max-width: 895px){
    display: none;
  }
  
  h3{
    margin-top: 30px;
    margin-bottom: 30px;
  }
  
  h2{
    font-family: Bahnschrift !important;
    font-weight: 100;
    text-align: center;
    margin-bottom: 0;
    color: lightgrey;
  }
  
  label{
    :hover{
      cursor: pointer;
    }
  }
  
  input{
    margin-bottom: 18px;
    margin-right: 10px;
    
    :checked, :not(checked){
      width: 20px;
      height: 20px;
      outline: none;
      :hover{
        cursor: pointer;
      }

    }
  }
  
  
  h3, input{
    margin-left: 30px;
  }
`

export const Filter = (props) => {

    const dispatch = useDispatch()

    const regions = [
        {name: 'America', value: 'Americas'},
        {name: 'Europa', value: 'Europe'},
        {name: 'Africa', value: 'Africa'},
        {name: 'Asia', value: 'Asia'},
        {name: 'Oceania', value: 'Oceania'},
        {name: 'Antartida', value: 'Antarctic'}
    ]

    const seasons = [
        'Primavera',
        'Verano',
        'Otoño',
        'Invierno'
    ]

    const {
        currentPage,
        countries,
        countriesBeforeFilter
    } = useSelector(state => state)

    const handleFilter = ev => {
        const filtersContainer = ev.target.parentNode.parentNode

        const filters = Array.prototype.slice
            .call(filtersContainer.querySelectorAll(`label input`))
            .map(elem => {
                return {
                    name: elem.className,
                    value: elem.value,
                    checked: elem.checked
                }
            }).filter(elem => elem.checked)

        const region = filters.find(filter => filter.name === 'region')
        const season = filters.find(filter => filter.name === 'season')


        if (!region && !season) {
            dispatch(getState())
            dispatch(setPageNumber(1))
        }

        if(region && season){
            let filteredCountriesByRegion = []
            let filteredCountriesByRegionAndSeason = []
            filters.forEach(filter => {
                const filtred =  countriesBeforeFilter.filter(country => country.region === filter.value)
                filteredCountriesByRegion = filteredCountriesByRegion.concat(filtred)
            })
            filters.forEach(filter => {
                const filtred = filteredCountriesByRegion.filter(country => {
                    const activity = country.activities.find(act => {
                        return act.season === filter.value || act.season === "Todo el año"
                    })
                    if (activity) return true
                })
                filteredCountriesByRegionAndSeason = filteredCountriesByRegionAndSeason.concat(filtred)
                filteredCountriesByRegionAndSeason = [...new Set(filteredCountriesByRegionAndSeason)]
            })
            dispatch(setState(filteredCountriesByRegionAndSeason))
            dispatch(setPageNumber(1))
        }
        if (region && !season){
            let filteredCountriesByRegion = []
            filters.forEach(filter => {
                const filtred =  countriesBeforeFilter.filter(country => country.region === filter.value)
                filteredCountriesByRegion = filteredCountriesByRegion.concat(filtred)
            })
            dispatch(setState(filteredCountriesByRegion))
            dispatch(setPageNumber(1))

        }
        if (!region && season){
            let filteredCountriesBySeason = []
            filters.forEach(filter => {
                const filtred =  countriesBeforeFilter.filter(country => {

                    const activity = country.activities.find(act => act.season === filter.value || act.season === "Todo el año")
                    if (activity) return true
                })
                filteredCountriesBySeason = filteredCountriesBySeason.concat(filtred)
                filteredCountriesBySeason = [...new Set(filteredCountriesBySeason)]
            })
            console.log(filteredCountriesBySeason)
            dispatch(setState(filteredCountriesBySeason))
            dispatch(setPageNumber(1))

        }

    }

    return <StyledFilter>
        <h2>Filtrar</h2>
        <h3>Continente</h3>
        {regions.map(region => {
            return <label key={region.name} htmlFor={region.name}>
                <input id={region.name} className={'region'} onChange={handleFilter} name={'region'} value={region.value} type="checkbox"/>
                {region.name}
            </label>
        })}
        <h3>Actividades</h3>
        {seasons.map(season => {
            return <label key={season} htmlFor={season}>
                <input id={season} className={'season'} type="checkbox" onChange={handleFilter} name={'season'} value={season}/>
                {season}
            </label>
        })}
    </StyledFilter>

}