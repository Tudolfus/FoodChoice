import React from 'react';
import Input from './ui/Input';

import '../styles/index.scss';

interface IState {
	test: string;
}

class App extends React.Component<{}, IState> {

	constructor(props: Readonly<{}>) {
		super(props);

		this.state = {test: ''}
	}

	onChange = (value: any) => {
		this.setState({test: value});
	}

	render() {
		const { test } = this.state;

		return (
			<div>
				<Input onChange={this.onChange}></Input>
				<h1>FodBoy!</h1>
				<h2>{test}</h2>
			</div>
		);
	}
}

export default App;