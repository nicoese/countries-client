import styled from "styled-components";
import {Link} from "react-router-dom";

export const StyledLanding = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  border-radius: 3px;
  display: flex;
  flex-direction: column;

  
  //@media(max-width: 600px){
  //  width: 100%;
  //}
  

  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.3));

  .image {
    background-image: url("https://www.es.cheapflights.com/res/images/horizon/common/frontdoor/cheapflights-fd.jpg?v=7e8c30b4c6386c865a9912246c2bb1a390a1f9c7&cluster=4");
    background-position: 2200px;
    background-size: 2200px;
    max-width: 100vw;
    height: 500px;
    border-radius: 2px;
    display: flex;
    align-content: center;
    justify-content: center;
  }

  h1 {
    margin: 0;
    margin-top: 40px;
    margin-bottom: 30px;
    font-family: Bahnschrift;

    @media(max-width: 600px){
      font-size: 20px;
      //max-width: 50%;
    }
  }
  p{
    margin-left: 200px;
    margin-right: 200px;

    
  }
  button{
    margin-top: 50px;
    width: 400px;
    height: 50px;
    border-radius: 5px;
    border: 3px solid white;
    color: gray;
    background-color: white;

    font-size: large;

    @media(max-width: 600px){
      max-width: 50%;
      font-size: medium;
      min-height: 200px;
    }
    
    :hover{
      cursor: pointer;
      filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.7));
      background-color: lightgrey;
    }
  }
  
  a {
    font-size: large;
    
  }

  .cover-content {
    display: flex;
    flex-direction: column;
    width: 1200px;
    text-align: center;
    
    @media(max-width: 600px){
      max-width: 80%;
    }
  }
  
  .about{
    display: flex;
    flex-direction: column;
    width: 1100px;
    min-height: 600px;
    background-color: #5825cc;
    align-self: center;

    @media(max-width: 1120px){
      max-width: 600px;
      padding: 0;
    }
    @media (max-width: 650px){
      max-width: 350px;
    }
    
  }
  
  .aboutp{
    font-family: Bahnschrift;
    font-size: larger;
    margin-left: 120px;
    margin-top: 40px;
    
    @media (max-width: 1120px){
      min-width: 80%;
      margin-left: 30px;
    }
  }
  
  
  
  h2{
    padding: 35px;
    font-family: "Bahnschrift";
    color: white;
    font-size: 37px;
    background-color: #4618ac;
    border-radius: 2px;
    margin: 0;
    margin-bottom: 30px;
    height: 40px;
    filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.1));

  }
  
.linkedin{
  padding: 6px;
  width: 70px;
  font-size: large;
  border-radius: 5px;
  margin-top: 30px;
  border: 2px solid white;
  margin-left: 120px;
  margin-bottom: 50px;
  
  :hover{
    cursor: pointer;
    border: white solid 4px;
  }
}

  .coverp{

    @media(max-width: 600px){
      display: none;
    }

  }
`

export const Landing = (props) => {

    return <StyledLanding>
        <div className={'image'}>
            <div className={'cover-content'}>
                <h1>
                    Hola, viajeros. ¿A dónde les gustaría ir?
                </h1>
                <div>
                    <p className={"coverp"}>
                        Nuestro equipo de viajeros expertos y apasionados
                        exploradores está aquí para ayudarte a descubrir el
                        mundo y simplificar tu experiencia de viaje.
                    </p>

                    <Link to={'/countries'}>
                        <button>
                            ¡Descubrir nuevas actividades y destinos!
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        <div className={'about'}>
            <h2>
                Sobre Nosotros
            </h2>
            <p className={'aboutp'}>Te ayudamos a buscar y comparar los destinos y actividades recreativas, para que puedas ir preparando tu viaje!</p>
            <p className={'aboutp'}>COUNTRIES es una web de búsqueda de información básica de países y sus respectivas excursiones. Esta app fue creada desde cero, principalmente escrita en Javascript, stack PERN (Postgres, Express, React, Nodejs), sin ningún tipo de autocompletado de código, ni librería que proporcione código escrito.</p>
            <p className={'aboutp'}>COUNTRIES se realizo como proyecto individual (PI) para el bootcamp de HENRY por Nicolás.</p>
            <a target="_blank" className={'linkedin'} href="https://www.linkedin.com/in/nicolas-salinas-5068211ba/">LinkedIn</a>
        </div>
    </StyledLanding>
}