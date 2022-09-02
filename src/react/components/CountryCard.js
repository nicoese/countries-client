import {Link} from "react-router-dom";
import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: #1F0A4E;
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.3));
  max-height: 390px;
  min-height: 390px;
  
  h3{
    margin-bottom: 30px;
  }
  
  h3, p{
    margin-left: 10px;
  }

  :hover{
    filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.9));

  }
  
  p{
    margin-bottom: 20px;
    margin-right: 5px;
  }
  
  span{
    color: gray;
  }
`

export const CountryCard = ({
                                id,
                                name,
                                flag,
                                region,
                                subregion,
                                capital,
                                population,
                            }) => {

    return <StyledCard>
        <Link to={`/countries/${id}`}>
            <img src={flag} alt=""/>
            <h3>{name}</h3>
            <p><span>Continente: </span>{region}</p>
            <p><span>Region: </span>{subregion}</p>
            <p><span>Capital: </span>{capital}</p>
            <p><span>Poblacion: </span>{new Intl.NumberFormat().format(population)} habitantes</p>
        </Link>
    </StyledCard>
}