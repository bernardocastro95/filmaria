import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Header'
import Movie from './Pages/Movie'
import Saved from './Pages/Saved'
import Error from './Pages/Error'
const Routes = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filme/:id" component={Movie}/>
                <Route path="/favoritos" component={Saved}/>
                <Route path="*" component={Error}/>
            </Switch>
        </BrowserRouter>
    )
    
}

export default Routes;