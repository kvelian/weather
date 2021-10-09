import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'

import {SearchCities} from "./header/SearchCities";
import {Cities} from "./Cities/Cities";

import './App.css';

const queryClient = new QueryClient()

export function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <SearchCities/>
                <Cities/>
            </div>
            <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
    );
}
