import { ThemeProvider } from '@ui5/webcomponents-react';
import React from 'react';
import { HashRouter } from "react-router-dom";
import { MyApp } from "./MyApp";

function App() {
	return (
		<HashRouter>
			<ThemeProvider>
				<MyApp />
			</ThemeProvider>
		</HashRouter>
	);
}

export default App;
