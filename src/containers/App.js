import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux'
import withClass from '../hoc/withClass'

class App extends PureComponent {
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
			showPersons: false,
			toggleClicked: 0
		}
	}

	componentWillMount() {
		console.log('[App.js] inside componentWillMount')
	}

	componentDidMount() {
		console.log('[App.js] inside componentDidMount')

	}

    // shouldComponentUpdate (nextProps, nextState) {
    //     console.log('[App.js] inside shouldComponentUpdate', nextProps, nextState)
    //     return nextState.persons !== this.state.persons ||
    //     nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('[App.js] inside omponentWillUpdate', nextProps, nextState)

    }

    conponentDidUpdate() {
        console.log('[App.js] inside componentDidUpdate')
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
		this.setState( (prevState, props) => {
			return {
				showPersons: !doesShow,
				toggleClicked: prevState.toggleClicked + 1
			}
		})
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
			<Aux>
				<button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
				<Cockpit
					appTitle={this.props.title}
					showPersons={this.state.showPersons}
					persons={this.state.persons}
					clicked={this.togglePersonsHandler}/>
				{persons}
			</Aux>
		)
	}
}

export default withClass(App, classes.App);
