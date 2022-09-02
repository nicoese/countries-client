import styled from "styled-components";

export const StyledDropdown = styled.div`
  h4{
    font-family: Bahnschrift;
    font-size: larger;
  }

  input{
    width: 400px;
    height: 40px;
    border-radius: 2px;
    background-color: #1F0A4E;
    //background-color: white;
    outline: none;
    //border: solid 2px #5825cc;
    border: solid 2px white;
    padding-left: 10px;
    color: white;
    margin-bottom: 5px;

    :focus{
      border: solid 2px #fffc01;
      background-color: #5825cc;

    }
  }
  
  p.err{
    display: ${({a}) => a === 'true' || a === null ? 'none' : 'block'};
    color: #fffc01;
  }
  div.countriesContainer{
    max-width: 410px;
    border-left: solid 2px white;
    border-right: solid 2px white;
    border-radius: 4px;
    margin-top: 10px;

  p{
    margin: 0;
  }

    div{
      margin: 0;
      height: 30px;
      padding-left: 12px;
    }
    
    div:hover{
      background-color: #5825cc;
    }
  }
  
  .selectedCountries{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-width: 450px;
  }
  
  .selectedCountry{
    display: flex;
    p{
      margin-right: 10px;
    }
    button{
      width: 30px;
      height: 30px;
    }
  }
`

export const Dropdown = ({
    name,
    state,
    setState,
    placeholder,
    error,
    regex,
    onChange
}) => {

    const validate = (ev) => {
        if (setState) {
            if (regex) {
                if (regex === 1) return setState({...state, valid: "true"})
                if (regex === 2) return setState({...state, valid: "false"})
            }
            setState({...state, valid: null})
        }
    }

    const onClick = (ev) => {
        const countryName = ev.target.previousSibling.innerText
        setState({
            ...state,
            value: state.value.filter(country => country !== countryName)
        })
    }

    return <StyledDropdown a={state.value.length > 0 ? 'true' : 'false'}>
        <label htmlFor="">
            <h4>{name}</h4>
            {state.value.length > 0 ?
                <div>
                    <p>Paises seleccionados</p>
                    <div className={'selectedCountries'}>
                        {state.value.map(country => {
                            return <div className={'selectedCountry'}>
                                <p>{country}</p>
                                <button onClick={onClick} type={"button"}>X</button>
                            </div>
                        })}
                    </div>
                </div>
                : <p className={'err'}>Aun no ha seleccionado ningún pais.</p>
            }

            <div >
                <input
                    onChange={onChange}
                    onKeyUp={validate}
                    onBlur={validate}
                    type="text"
                    placeholder={placeholder}
                />
                {/*<p>lupita</p>*/}
                <div className={'countriesContainer'}> </div>
            </div>
        </label>
        {/*<p className={'err'}>{error}</p>*/}
    </StyledDropdown>
}