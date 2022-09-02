import './App.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {getState} from "./redux/actions";
import {Link, Route} from "react-router-dom";
import {Landing} from "./react/components/Landing";
import {Countries} from "./react/components/Countries";
import {CountryDetail} from "./react/components/CountryDetail";
import {Seeker} from "./react/elements/Seeker";
import {ActivityForm} from "./react/components/ActivityForm";
import {Header} from "./react/components/Header";
import {Container} from "./react/components/Container";

function App() {

    const dispatch = useDispatch()
    const apiurl = process.env.REACT_APP_API_URL

    useEffect(() => {
        document.title = 'COUNTRIES'
        dispatch(getState())
        console.log(apiurl)
    }, [])


    return (
        <Container>
            <Header/>
            <Route exact path={'/'} component={Landing}/>
            <Route exact path={'/countries'} component={Countries}/>
            <Route exact path={'/countries/:id'} component={CountryDetail}/>
            <Route exact path={'/activities'} component={ActivityForm}/>
        </Container>
    );
}

export default App;
