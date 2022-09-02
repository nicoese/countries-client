import {setState} from "../../redux/actions";
import styled from "styled-components";

const StyledInput = styled.div`
  h4{
    font-family: Bahnschrift;
    font-size: larger;
  }
  input{
    width: 400px;
    height: 40px;
    border-radius: 2px;
    background-color: #1F0A4E;
    outline: none;
    border: solid 2px white;
    padding-left: 10px;
    color: white;
    
    :focus{
      border: solid 2px #fffc01;
      background-color: #5825cc;

    }
  }
  p{
    display: ${({a}) => a === 'true' || a === null ? 'none' : 'block'};
    color: #fffc01;
  }
`

export const Input = ({
                          type,
                          name,
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
    return <StyledInput a={state.valid}>
        <label htmlFor="">
            <h4>{name}</h4>
            <input
                onChange={onChange}
                onKeyUp={validate}
                onBlur={validate}
                type={type}
                name={name}
                value={state.value}
                placeholder={placeholder}
            />
        </label>
        <p>{error}</p>
    </StyledInput>
}


