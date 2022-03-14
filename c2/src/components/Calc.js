import React, { Component } from 'react';
// import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";


class App extends Component {

	constructor(props) {
		super(props);
		this.ref = React.createRef();
		this.state = { name: '', weight: 0, height: 0, bmi: 0, message: '', optimalweight: '', time: new Date().toLocaleTimeString() };
		this.submitMe = this.submitMe.bind(this);
		this.heightchange = this.heightchange.bind(this);
		this.weightchange = this.weightchange.bind(this);
		this.change = this.change.bind(this);
		this.ticker = this.ticker.bind(this);
		this.blur = this.blur.bind(this);
		this.calculateBMI = this.calculateBMI.bind(this);
	}
	heightchange(e) {
		this.setState({ height: e.target.value });
		e.preventDefault();
	}

	blur(e) {
		this.calculateBMI();
	}
	weightchange(e) {
		this.setState({ weight: e.target.value });
		e.preventDefault();
	}

	calculateBMI() {

		var heightSquared = (this.state.height / 100 * this.state.height / 100);
		var bmi = this.state.weight / heightSquared;
		var low = Math.round(18.5 * heightSquared);
		var high = Math.round(24.99 * heightSquared);
		var message = "";
		if (bmi >= 18.5 && bmi <= 24.99) {
			message = "You are in a healthy weight range";
		}
		else if (bmi >= 25 && bmi <= 29.9) {
			message = "You are overweight";
		}
		else if (bmi >= 30) {
			message = "You are obese";
		}
		else if (bmi < 18.5) {
			message = "You are under weight";
		}
		this.setState({ message: message });
		this.setState({ optimalweight: "Your suggested weight range is between " + low + " - " + high });
		this.setState({ bmi: Math.round(bmi * 100) / 100 });

	}

	submitMe(e) {
		e.preventDefault();
		this.calculateBMI();
	}

	ticker() {
		this.setState({ time: new Date().toLocaleTimeString() })
	}

	componentDidMount() {
		setInterval(this.ticker, 60000);
	}

	change(e) {
		e.preventDefault();
		console.log(e.target);
		this.setState({ name: e.target.value });
	}

	render() {
		return (
			<div>
				<div>
					<h2 className="BMItext">BMI Calculator</h2>
				</div>
				<form onSubmit={this.submitMe}>
					<div className='float-container'>
						<div className="float-child">
							<div class="row">
								<div class="col-xs-6">
									<label className="label">
										Please enter your name
									</label>
								</div>
								<div class="col-xs-6">
									<input type="text" name="name" value={this.state.name} onBlur={this.blur} onChange={this.change} />
								</div>
							</div>



							<div>
								<label className="label">
									Enter your height in cm:
								</label>
								<input type="text" name="height" value={this.state.height} onBlur={this.blur} onChange={this.heightchange} />
							</div>

							<div>
								<label>
									Enter your weight in kg :
								</label>
								<input type="text" name="weight" value={this.state.weight} onChange={this.weightchange} />

							</div>

							<input type="submit" className="btn-success show" value="Submit" />
							<Pdf targetRef={this.ref} filename="BMI-details.pdf">
								{({ toPdf }) => <button className="btn btn-primary show" onClick={toPdf}>Generate Pdf</button>}
							</Pdf>
						</div>

						<div className='float-child'>
							
							<div ref={this.ref}>
								<div className="float h5">
									<label>{this.state.checked} <h4>Hello</h4> {this.state.name} How are you my friend? It's currently {this.state.time} Your BMI is {this.state.bmi} </label>
									<label>{this.state.message}</label>
									<label>{this.state.optimalweight}</label>
								</div>
							</div>
						</div>
					</div>
					

					{/* 						
						<label>{this.state.checked} Hello {this.state.name}, How are you my friend? It's currently  {this.state.time} where you are living. Your BMI is {this.state.bmi} </label>
						<label>{this.state.message}</label>
						<label>{this.state.optimalweight}</label> */}


				</form>

			</div>
		);
	}
}

export default App;
