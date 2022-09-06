import {useDispatch} from "react-redux";
import {searchCountries} from "../../redux/actions";
import {Link, Route} from "react-router-dom";
import {Countries} from "../components/Countries";
import {useState} from "react";
import styled from "styled-components";


export const StyledSeeker = styled.div`
  
  
  input{
    width: 340px;
    height: 45px;
    //font-size: large !important;
    font-weight: bold;
    color: white;
    border: solid 2px white;
    margin-left: 40px;
    padding-left: 20px;
    background-color: #4618ac;
    outline: none;

    @media (max-width: 1080px){
      max-height: 36px;
      max-width: 300px;
      font-size: small;
    }

    @media(max-width: 895px){
      max-width: 100px;
    }
    
    :focus{
      filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.7));
    }
  }
  
  button{
    margin-right: 50px;
    width: 50px !important; 
    height: 50px;
    //font-size: large;
    border: solid 2px white ;
    background-color: #311178;
    
    
    
  }
`

export const Seeker = (props) => {

    const dispatch = useDispatch()
    const [name, setName] = useState('');

    const handleChange = (ev) => {
        setName(ev.target.value)
    }

    const handleKeyUp = (ev) => {
        if (ev.keyCode === 13) {
            ev.target.nextSibling.firstChild.click()
        }
    }


    return <StyledSeeker>
        <input onChange={handleChange} onKeyUp={handleKeyUp} value={name} placeholder={'Buscar...'} type="text"/>
        <Link to={`/countries`}>
            <button onClick={() => dispatch(searchCountries(name))}>
                Ir
            </button>
        </Link>
    </StyledSeeker>
}