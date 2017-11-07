import React from 'react';

export default class Navigation extends React.Component {
	render() {
		return (
			<nav className="top-bar animate-dropdown">
				<div className="container">
					<div className="col s6 no-margin home-faq">
						<ul>
							<li>
								<a className="sideNavToggle">
									<i className="fa fa-list sideNavToggle"></i>
								</a>
							</li>

							<li>
								<a href="/FAQ">FAQ</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}