import {QueryClient, QueryClientProvider} from 'react-query'
import {createContext, useState} from "react";
import {ReactQueryDevtools} from 'react-query/devtools'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {HomePage} from "./pages/HomePage/HomePage";
import {CityPage} from "./pages/CityPage/CityPage";

import './App.scss';

const queryClient = new QueryClient()


export const CitiesContext = createContext({
    cities: {},
    setCities: () => {},
});


export function App() {
    const [cities, setCities] = useState(["tomsk-tomsk-russia", "novosibirsk-novosibirsk-russia", "new-york-new-york-united-states-of-america", "paris-ile-de-france-france", "australind-western-australia-australia", "toronto-ontario-canada"])

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <CitiesContext.Provider value={{ cities, setCities }}>
                    <div className="App container__column">
                        <Switch>
                            <Route path="/city/:cityUrl">
                                <CityPage/>
                            </Route>
                            <Route path="/">
                                <HomePage/>
                            </Route>
                        </Switch>
                    </div>
                </CitiesContext.Provider>
            </Router>
            <ReactQueryDevtools initialIsOpen={true}/>
        </QueryClientProvider>
    );
}
