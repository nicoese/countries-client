import {useDispatch, useSelector} from "react-redux";
import {clearDetail, getCountryDetail} from "../../redux/actions";
import {useEffect} from "react";
import styled from "styled-components";

const StyledDetail = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
  //height: 100vh;
  min-height: 100vh;
  align-self: center;
  background-color: #1F0A4E;
  
  .countryInfo{
    padding: 20px;
    margin-top: 30px;
    border: solid 3px white;
    border-radius: 2px;
    max-width: 360px;
    filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
  }

  h2{
    text-align: center;
  }
  
  .activities{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: solid 3px white;
    border-radius: 2px;
    //min-height: 600px;
  }
  
  .activityCard{
    font-family: Bahnschrift;
    display: flex;
    max-width: 300px;
    height: 180px;
    flex-direction: column;
    //text-align: center;
    //margin-left: 20px;
    
    h3{
      color: lightslategray;
      margin-left: 20px;
    }
    p{
      margin: 2px;
      margin-left: 20px;

    }
  }
  
  
  
  .left{
    margin-left: 40px;
    margin-top: 10px;
  }
  .right{
    margin-right: 40px;
  }
  
  span{
    color: #fffc01;
    font-family: Bahnschrift;
    font-weight: 700;
    
    
  }
  
  img {
    width: 400px;
  }
  div{
    width: 600px;
  }
  .noacts{
    display: ${({acts}) => {
        if (acts) {
            return acts.length === 0 ? 'block' : 'none'
        }
    }};
    margin-left: 20px;
  }
`

export const CountryDetail = ({match}) => {

    const countryId = match.params.id

    const dispatch = useDispatch()

    const {detail} = useSelector(state => state)

    useEffect(() => {
        dispatch(clearDetail())
        dispatch(getCountryDetail(countryId))
    }, []);

    const country = useSelector(state => state.countryDetail)

    return detail !== {} ? <StyledDetail acts={country.activities}>
        <div className={'left'}>

            <h3>
                {country.name}
            </h3>
            <img src={country.flag} alt=""/>
            <div className="countryInfo">

                <p><span>Capital</span>: {country.capital}</p>
                <p><span>Poblacion</span>: {new Intl.NumberFormat().format(country.population)} habitantes</p>
                <p><span>Continente</span>: {country.region}</p>
                <p><span>Subregion</span>: {country.subregion}</p>
            </div>
        </div>
        <div className={'right'}>
            <h2>ACTIVIDADES</h2>
            <div className={"activities"}>

                <p className={'noacts'}>No se registraron actividades</p>
                {country.activities ?
                    country.activities.map(act => {
                        return <div className={'activityCard'}>
                            <h3>{act.name}</h3>
                            <p><span>Nivel de dificultad: </span>{act.difficulty}</p>
                            <p><span>Temporada: </span>{act.season}</p>
                            <p><span>Duracion: </span>{act.duration}</p>
                        </div>
                    })
                    : 'Todavia no tiene actividades'
                }
            </div>
        </div>
    </StyledDetail> : ''
}