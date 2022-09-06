import React, { Component } from 'react';

export class PreFooter extends Component<any, any> {

	state = {
		alertClicked: false,
		clickedWallet: null
	}

	private btcAddress: string = 'bc1q9c4tj9jut566unzys3nn96v28yulr3g0xyau6s';
	private ethAddress: string = '0xbcB7bdb58cB4A8a7D2A16bc5517f60C284c7cF75';

	alertCopy = (walletName: string, stringCopied: string) => {
		navigator.clipboard.writeText(stringCopied);
		this.setState({ alertClicked: true, clickedWallet: walletName });
		setTimeout(() => {
			this.setState({ alertClicked: false, clickedWallet: null });
		}, 5000);
	}

	render() {
		return (
			<div className="pre-footer">
				<div className="pre-footer__content">
					<ul>
						<li className="pre-footer__wallets">
							<p>Find this useful? Buy me a drink! <span>(please and thank you)</span></p>
							<img className="pre-footer__qr-code" src={`${process.env.PUBLIC_URL}/img/btc-wallet.png`} alt="Bitcoin Wallet Address" title={this.btcAddress} onClick={() => { this.alertCopy('Bitcoin', this.btcAddress) }} />
							<img className="pre-footer__qr-code" src={`${process.env.PUBLIC_URL}/img/eth-wallet.png`} alt="Ethereum Wallet Address" title={this.ethAddress} onClick={() => { this.alertCopy('Ethereum', this.ethAddress) }} />
							{this.state.alertClicked ? <p>{this.state.clickedWallet} Address Copied!</p> : <span>Click or tap to copy</span>}
						</li>
						<li className="pre-footer__cta">Check out my <a href="https://www.youtube.com/thejunkdrawershow">D&D Campaign</a> <span>🤙</span></li>
					</ul>
				</div>
			</div>
		);
	}
}