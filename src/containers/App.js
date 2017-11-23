import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
	constructor(props) {
		super(props)
		console.log('[App.js] inside constructor', props)
		this.state = {
			persons: [
				{ id: 'asdf', name: 'Max', age: 28 },
				{ id: 'qwe', name: 'Manu', age: 29 },
				{ id: 'fasw', name: 'Steph', age: 26 }
			],
			otherState: 'Something else',
			showPersons: false
		}
	}

	componentWillMount() {
		console.log('[App.js] inside componentWillMount')
	}

	componentDidMount() {
		console.log('[App.js] inside componentDidMount')

	}

	// state = {
	// 	persons: [
	// 		{ id: 'asdf', name: 'Max', age: 28 },
	// 		{ id: 'qwe', name: 'Manu', age: 29 },
	// 		{ id: 'fasw', name: 'Steph', age: 26 }
	// 	],
	// 	otherState: 'Something else',
	// 	showPersons: false
	// }

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons]
		persons.splice(personIndex, 1)
		this.setState({persons})
	}

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id
		})

		const person = {...this.state.persons[personIndex]}
		person.name = event.target.value
		const persons = [...this.state.persons]
		persons[personIndex] = person

		this.setState({persons})
	}

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow})
	}

	render() {
		console.log('[App.js] inside render')
		let persons = null

		if (this.state.showPersons) {
			persons = <Persons
							persons={this.state.persons}
							clicked={this.deletePersonHandler}
							changed={this.nameChangedHandler} />
		}

		return (
			<div className={classes.App}>
				<Cockpit
					appTitle={this.props.title}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}/>
				{persons}
			</div>
		);
	}
}

export default App;
