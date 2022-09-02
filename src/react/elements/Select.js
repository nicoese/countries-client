import styled from "styled-components";

export const StyledSelect = styled.div`
  h4{
    font-family: Bahnschrift;
    font-size: larger;
  }
  select{
    width: 400px;
    height: 45px;
    border-radius: 2px;
    background-color: #1F0A4E;
    //background-color: white;
    outline: none;
    //border: solid 2px #5825cc;
    border: solid 2px white;
    padding-left: 10px;
    color: white;

    :hover{
      cursor: pointer;
    }
    
    :focus{
      border: solid 2px #fffc01;
      //background-color: #5825cc;

    }
  }
  p{
    display: ${({a}) => a === 'true' || a === null ? 'none' : 'block'};
    color: #fffc01;
  }
`

export const Select = ({
                           name,
                           options,
                           state,
                           setState,
                           placeholder,
                           error,
                           regex,
                           onChange,

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

    return <StyledSelect a={state.valid}>
        <label htmlFor="">
            <h4>{name}</h4>
            <select
                onChange={onChange}
                onBlur={validate}
                onKeyUp={validate}

            >
                <option value={''}>{placeholder}</option>
                {options.map(option => <option value={option}>{option}</option>)}
            </select>
        </label>
        <p>{error}</p>
    </StyledSelect>
}