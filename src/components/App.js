import {QueryClient, QueryClientProvider} from 'react-query'
import {createContext, useState, useMemo} from "react";
import {ReactQueryDevtools} from 'react-query/devtools'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {HomePage} from "./feature/HomePage/HomePage";
import {CityPage} from "./feature/CityPage/CityPage";

import './App.scss';

const queryClient = new QueryClient()


export const CitiesContext = createContext({
    cities: {},
    setCities: () => {},
});


export function App() {
    const [cities, setCities] = useState([])
    const value = useMemo(
        () => ({ cities, setCities }),
        [cities]
    );

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <CitiesContext.Provider value={value}>
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
