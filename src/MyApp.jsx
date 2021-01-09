import React, { useState } from "react";
import {
	Avatar,
	Card,
	Text,
	ShellBar,
	ShellBarItem,
	List,
	StandardListItem,
	ValueState,
	ProgressIndicator,
	Title,
	TitleLevel,
	FlexBox,
	FlexBoxJustifyContent,
	FlexBoxWrap,
	FlexBoxDirection,
	AnalyticalTable,
	Icon
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import '@ui5/webcomponents-icons/dist/line-chart.js';
import '@ui5/webcomponents-icons/dist/horizontal-bar-chart.js';

export function MyApp() {
	const [toggleCharts, setToggleCharts] = useState("lineChart");
	const [loading, setLoading] = useState(false);

	const handleHeaderClick = () => {
		if (toggleCharts === "lineChart") {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				setToggleCharts("barChart");
			}, 2000);
		} else {
			setLoading(true);
			setTimeout(() => {
				setLoading(false);
				setToggleCharts("lineChart");
			}, 2000);
		}
	};

	const contentTitle = toggleCharts === 'lineChart' ? 'Line Chart' : 'Bar Chart';
	const switchToChart = toggleCharts === 'lineChart' ? 'Bar Chart' : 'Line Chart';

	const dataset = [
		{
			month: "January",
			data: 65
		},
		{
			month: "February",
			data: 59
		},
		{
			month: "March",
			data: 80
		},
		{
			month: "April",
			data: 81
		},
		{
			month: "May",
			data: 56
		},
		{
			month: "June",
			data: 55
		},
		{
			month: "July",
			data: 40
		}
	];

	return (
		<div>
			<Card
				avatar={<Icon name={toggleCharts === "lineChart" ? "line-chart" : "horizontal-bar-chart"} />}
				heading="Stock Price"
				subheading={`Click here to switch to ${switchToChart}`}
				style={{ width: "300px" }} headerInteractive
				onHeaderClick={handleHeaderClick}>
				<Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
				{toggleCharts === "lineChart" ? (
					<LineChart
						dimensions={[{ accessor: "month" }]}
						measures={[{ accessor: "data", label: "Stock Price" }]}
						dataset={dataset}
						loading={loading}
					/>
				) : (
						<BarChart
							dimensions={[{ accessor: "month" }]}
							measures={[{ accessor: "data" }]}
							dataset={dataset}
							loading={loading}
						/>
					)}
			</Card>
		</div>
	);
};