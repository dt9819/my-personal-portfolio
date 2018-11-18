import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {activeTab: 0 };
	}

	toggleCategories() {
		if(this.state.activeTab === 0){
		return(
			<div><h1>This is React</h1></div>
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
					{this.toggleCategories()}
				</section>
			</div>
		);
	}
}

export default Projects;