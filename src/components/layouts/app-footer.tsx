import React, { Component } from 'react';
import packageJson from '../../../package.json';

export class AppFooter extends Component<any, any> {

	render() {
		return (
			<footer className="app-footer">
				<ul className="app-footer__content">
					<li className="app-footer__version"><a href="https://github.com/joshdelgado/npc-generator" rel="nofollow">v{packageJson.version}</a></li>
					<li className="app-footer__credit">Created by <a href="https://www.joshdelgado.com" rel="nofollow">Josh Delgado</a></li>
				</ul>
			</footer>
		);
	}
}