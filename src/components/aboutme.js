import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class About extends Component {
	render(){
		return(
			<div>
				<Grid className="about-grid">
					<Cell col={12}>
						<p>Hey there! I am Deepak Tyagi. I am 22yrs old, young computer science engineering gradute and an alumni of inderprastha engineering college.
							I have done some of the real world projects for real customers, so my webapps involve e-commerce site, personal portfolio's, organization sites etc.
							<br/><br/>
							The technologies i have worked upon are Php & MySql, Javascript, React.js, Node.js
						</p>

						<Grid className="about-card">
							<Cell col={6}>
								<h4 style={{backgroundColor: 'grey', color: '#fff', padding: '1em'}}>My Qualities:</h4>
								<p>- write less and clean code</p>
								<p>- take full responsibility of the work given to me</p>
								<p>- like to build relationship with my customer</p>
								<p>- use my brain to make things look better and user-friendly</p>
								<p>- i look at every element in the website very minutely for user experience.</p>
							</Cell>
							<Cell col={6}>
								<h4 style={{backgroundColor: 'grey', color: '#fff', padding: '1em'}}>My Offered Services:</h4>
								<p>- Front end designs</p>
								<p>- Backend handling & management</p>
								<p>- Buisness logic</p>
								<p>- multivendor e-commerce website</p>
								<p>- webapps design & development</p>
								<p>- mobile friendly designs</p>
								<p>- make smart applications</p>
								<p>- give ideas about how can we make better product.</p> 
								<p>- marketing strategies</p> 
							</Cell>
						</Grid>
						<p><strong>You can visit my portfolio down below to know more about me:</strong>
							<a href="https://dt9819.github.io/deepaktyagi/"> Visit my portfolio</a></p>
						<p><strong>My Github Repository Link:</strong> <a href="https://github.com/dt9819"> Visit my GitHub</a></p>
						<p><strong>My Blog:</strong> <a href="https://engineerslyf.blogspot.com"> Visit my Blog</a></p>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default About;