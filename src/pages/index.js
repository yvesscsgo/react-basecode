import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NotFound from './notFound/';
import Header from '../components/header/';
import Footer from '../components/footer/';

const Pages = {
	/*
		Add each page component here, as is
		Example:
		
		Page,
		Page2,
		Page3
	*/
}

const links = Object.keys(Pages);

class Site extends Component {
	render() {
		return(
			<Fragment>
				<Header />
				<Router>
					<Switch>
						{
							links.map((link, i) => {
								return(
									<Route 
										path={"/" + lowerizeFirstLetter(link)} 
										component={Pages[link]} 
										key={i}
									/>
								);
							})
						}
						<Route component={NotFound} />
	 				</Switch>
 				</Router>
				<Footer />
			</Fragment>
		);
	}
}

function lowerizeFirstLetter(string) 
{
    return string.charAt(0).toLowerCase() + string.slice(1);
}

export default Site;