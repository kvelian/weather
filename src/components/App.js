import './App.css';

import {SearchCities} from "./header/SearchCities";
import {Cities} from "./body/Cities";

export function App() {
    return (
        <div className="App">
            <SearchCities/>
            <Cities />
        </div>
    );
}
