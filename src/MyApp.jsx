import React from "react";
import { Avatar, ShellBar, ShellBarItem } from "@ui5/webcomponents-react";
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
		</div>
	);
};