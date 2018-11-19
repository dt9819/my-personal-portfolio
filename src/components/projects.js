import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton} from 'react-mdl';
class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {activeTab: 0 };
	}

	toggleCategories() {
		if(this.state.activeTab === 0){
		return(
			<div className="projects-grid">
				{/*Project 1*/}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center/cover'}}>React Project #1</CardTitle>
					<CardText>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>Codepen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>

				{/*Project 2*/}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center/cover'}}>React Project #1</CardTitle>
					<CardText>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>Codepen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>

				{/*Project 3*/}
				<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
					<CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center/cover'}}>React Project #1</CardTitle>
					<CardText>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
					</CardText>
					<CardActions border>
						<Button colored>Github</Button>
						<Button colored>Codepen</Button>
						<Button colored>Live Demo</Button>
					</CardActions>
					<CardMenu style={{color: '#fff'}}>
						<IconButton name="share" />
					</CardMenu>
				</Card>
			</div>
		);
	  } else if(this.state.activeTab ===1){
	  	return(
	  		<div><h1>This is Php & MySql</h1></div>
	  	);
	  } else if(this.state.activeTab ===2){
	  	return(
	  		<div><h1>This is Node.js</h1></div>
	  	);
	  } else if(this.state.activeTab ===3){
	  	return(
	  		<div><h1>This is MongoDB</h1></div>
	  	);
	}
}

	render(){
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
					<Tab>React.js</Tab>
					<Tab>PhP & MySql</Tab>
					<Tab>Node.js</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>

				<section>
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
				</section>
			</div>
		);
	}
}

export default Projects;