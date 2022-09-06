import {Link} from "react-router-dom";
import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: #1F0A4E;
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.3));
  max-height: 390px;
  min-height: 390px;
  max-width: 230px;
  
  @media (max-width: 1250px){
    min-width: 320px;
    min-height: 430px;

    img{
      min-width: 320px;
      min-height: 200px;
    }
  }

  @media (max-width: 895px){
    
    

    min-width: 280px;
    min-height: 350px;
    
    max-width: 30%;
    
    img{
      min-width: 280px;
      min-height: 160px;
    }
  }
  
  @media(max-width: 610px){

    max-width: 150px;
    min-width: 120px;
    min-height: 200px;
    
    img{
      max-width: 150px;
      min-width: 150px;
      max-height: 90px;
      min-height: 90px;
    }
  }

  img{
    width: 229px;
    height: 141px;
  }
  
  h3{
    margin-bottom: 30px;
    @media (max-width: 895px){
      margin-bottom: 0;
      font-size: medium;
    }
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
    
    @media (max-width: 895px){
      margin-bottom: 5px;
      font-size: smaller;
    }
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