import {Input} from "../elements/Input";
import {useDispatch, useSelector} from "react-redux";
import {createElement, useEffect, useState} from "react";
import {Select} from "../elements/Select";
import {Dropdown} from "../elements/Dropdown";
import {clearErrorAndSuccess, createActivity, searchCountries, setError} from "../../redux/actions";
import styled from "styled-components";

export const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  min-height: 100vh;
  background-color: #1F0A4E;
  align-self: center;
  filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.2));
  border-radius: 3px;


  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    padding: 40px;
  }

  h2 {
    text-align: center;
    font-size: 40px;
    font-family: Bahnschrift;
    color: lightgrey;
  }
  

  button {

    color: white;
    width: 350px;
    height: 50px;
    align-self: center;
    font-size: larger;
    outline: none;
    margin-bottom: 40px;
    border-radius: 3px;
    background-color: #1F0A4E;
    border: solid 2px white;

    :hover {
      border: solid 2px #fffc01;
      filter: drop-shadow(0 0.2rem 0.25rem rgba(0, 0, 0, 0.9));
      background-color: #5825cc;
      cursor: pointer;

    }

  }

  p.error-api {
    justify-content: center;
    font-size: larger;
    width: 450px;
    display: flex;
    align-self: center;
    margin-bottom: 50px;
    border: solid 4px red;
    border-radius: 4px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    display: ${({error}) => error ? 'block' : 'none'};
  }

  p.success {
    text-align: center;
    justify-content: center;
    font-size: larger;
    width: 450px;
    align-self: center;
    margin-bottom: 50px;
    border: solid 4px greenyellow;
    border-radius: 4px;
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
    display: ${({success}) => success ? 'block' : 'none'};
    
    
    }
  
`

export const ActivityForm = (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearErrorAndSuccess())
    },[])

    const seasons = [
        "Primavera",
        "Verano",
        "Invierno",
        "Otoño",
        "Todo el año"
    ]
    const difficultys = [
        "Para toda la familia",
        "Principiante",
        "Intermedio",
        "Avanzado",
        "Profesional"
    ]
    const durations = [
        "Menos de una hora",
        "1 a 3 hs",
        "3 a 5 hs",
        "Todo el dia",
        "Fin de semana",
        "Una semana o mas"
    ]
    const {
        error,
        currentCountries,
        success
    } = useSelector(state => state)

    const [name, setName] = useState({value: '', valid: null});
    const [difficulty, setDifficulty] = useState({value: '', valid: null});
    const [duration, setDuration] = useState({value: '', valid: null});
    const [season, setSeason] = useState({value: '', valid: null});
    const [countries, setCountries] = useState({value: [], valid: null});
    const [isValid, setIsValid] = useState({value: null})

    const handleSubmit = ev => {
        ev.preventDefault()

        dispatch(clearErrorAndSuccess())

        if (countries.value.length > 0) {
            countries.valid = 'true'
        }

        if (
            name.valid === "true" &&
            difficulty.valid === "true" &&
            duration.valid === "true" &&
            season.valid === "true" &&
            countries.valid === "true"
        ){
            isValid.value = true
        }else{
            dispatch(setError('Debe completar los campos correctamente'))
        }

        console.log(name, difficulty, duration, season, countries)
        console.log(isValid.value)

        if (isValid.value){
            dispatch(createActivity({
                name,
                difficulty,
                duration,
                season,
                countries
            }))
        }


        if (!error) {
            setName({value: '', valid: null})
            setDifficulty({value: '', valid: null})
            setDuration({value: '', valid: null})
            setSeason({value: '', valid: null})
            setCountries({value: [], valid: null})

            const selects = [...document.querySelectorAll('select')]
            selects.forEach(elem => {
                elem.selectedIndex = 0
            })

            isValid.value = false
        }

    }

    return <StyledForm error={error} success={success}>

        <h2>Crear Nueva Actividad</h2>

        <form onSubmit={handleSubmit}>
            <Input
                name={'Nombre de la actividad'}
                type={'text'}
                state={name}
                setState={setName}
                placeholder={'Inserte el nombre de la actividad'}
                error={'El nombre de la actividad debe contener al menos 4 caracteres'}
                regex={name.value.length >= 4 ? 1 : 2}
                onChange={ev => {
                    setName({
                        ...name,
                        value: ev.target.value
                    })
                }}
            />
            <Select
                name={"Temporada"}
                options={seasons}
                state={season}
                setState={setSeason}
                placeholder={"Estacion en la que se realiza la actividad..."}
                error={'Campo obligatorio'}
                regex={seasons.find(ss => ss === season.value) ? 1 : 2}
                onChange={ev => {
                    setSeason({
                        ...season,
                        value: ev.target.children[ev.target.selectedIndex].value
                    })
                }}
            />
            <Select
                name={"Dificultad"}
                options={difficultys}
                state={difficulty}
                setState={setDifficulty}
                placeholder={'Seleccione una dificultad'}
                error={'Campo obligatorio'}
                regex={difficultys.find(dif => dif === difficulty.value) ? 1 : 2}
                onChange={ev => setDifficulty({
                    ...difficulty,
                    value: ev.target.children[ev.target.selectedIndex].value
                })}
            />
            <Select
                name={"Duracion de la actividad"}
                options={durations}
                state={duration}
                setState={setDuration}
                placeholder={"Cuanto dura la actividad"}
                error={"Campo obligatorio"}
                regex={durations.find(dur => dur === duration.value) ? 1 : 2}
                onChange={ev => setDuration({
                    ...duration,
                    value: ev.target.children[ev.target.selectedIndex].value
                })}
            />
            <Dropdown
                name={"En que pais se puede realizar ?"}
                state={countries}
                setState={setCountries}
                placeholder={"Buscar paises..."}
                error={"Debe seleccionar al menos un pais"}
                regex={countries.value.length > 0 ? 1 : 2}
                onChange={ev => {
                    dispatch(searchCountries(ev.target.value))
                    const countriesContainer = document.getElementsByClassName('countriesContainer')[0]
                    countriesContainer.innerHTML = ''
                    if (currentCountries.length > 0) {
                        currentCountries.slice(0, 5).map(country => {
                            const div = document.createElement('div')
                            div.innerText = `${country.name}, ${country.region}`



                            div.onclick = ev => {

                                if (!countries.value.includes(country.name)){

                                    setCountries({
                                        ...countries,
                                        value: [...countries.value, country.name]
                                    })

                                }
                                div.parentNode.innerText = ''
                                countriesContainer.parentNode.querySelector('input').value = ''
                            }

                            countriesContainer.appendChild(div)
                        })
                    } else {
                        const p = document.createElement('p')
                        p.innerText = "No results"
                        countriesContainer.appendChild(p)
                    }
                }
                }
            />
        </form>
        <p className={'error-api'}>{`Error!: ${error}`}</p>
        <p className={'success'}>{`${success}`}</p>
        <button onClick={handleSubmit} type={'submit'}>Enviar</button>
    </StyledForm>
}