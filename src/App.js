import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Grid, Paper, Slider } from "@material-ui/core"
import { green } from "@material-ui/core/colors"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2, 1),
		textAlign: "center",
		color: theme.palette.text.secondary,
		height: 300,
	},
}))

export default function App() {
	const classes = useStyles()
	const [color, setColor] = useState({ red: 255, green: 255, blue: 255 })

	const handleChangeRed = (event, newValue) => {
		const newColor = color
		setColor({ ...newColor, red: newValue })
	}
	const handleChangeGreen = (event, newValue) => {
		const newColor = color
		setColor({ ...newColor, green: newValue })
	}
	const handleChangeBlue = (event, newValue) => {
		const newColor = color
		setColor({ ...newColor, blue: newValue })
	}
	return (
		<div className={classes.root}>
			<Container maxWidth='sm'>
				<Grid container>
					<Grid item xs={3}></Grid>
					<Grid item xs={6}>
						<Paper
							elevation={2}
							className={classes.paper}
							style={{
								backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
							}}>
							<Slider
								id='red'
								min={0}
								max={255}
								value={color.red}
								onChange={handleChangeRed}
								valueLabelDisplay='auto'
								orientation='vertical'
							/>
							<Slider
								id='green'
								min={0}
								max={255}
								value={color.green}
								onChange={handleChangeGreen}
								valueLabelDisplay='auto'
								orientation='vertical'
							/>
							<Slider
								id='blue'
								min={0}
								max={255}
								value={color.blue}
								onChange={handleChangeBlue}
								valueLabelDisplay='auto'
								orientation='vertical'
							/>
						</Paper>
					</Grid>
					<Grid item xs={3}></Grid>
				</Grid>
			</Container>
		</div>
	)
}
