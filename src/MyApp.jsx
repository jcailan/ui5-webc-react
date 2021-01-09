import React from "react";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import "@ui5/webcomponents-icons/dist/add.js";

export function MyApp() {
	return (
		<div>
			<ShellBar
				logo={<img src="/logo192.png" alt="" />}
				profile={<Avatar image="/profile.jpeg" />}
				primaryTitle="My App"
			>
				<ShellBarItem icon="add" text="Add" />
			</ShellBar>
			<Switch>
				<Route path="/home" component={Home} />
				<Route path="/detail" component={Detail} />
				<Redirect from="/" to="/home" />
			</Switch>

		</div>
	);
};