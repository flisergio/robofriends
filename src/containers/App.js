import React, { Component } from 'react';
import { Fragment } from 'react';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
// import { render } from '@testing-library/react';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        };
    }

    componentDidMount() {
        fetch("http://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }); // !!
    }

    render() {
        const { robots, searchfield } = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });

        return 
            (
                <>
                    <div className="tc">
                        <h1 className="f2">RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={filteredRobots} />
                            </ErrorBoundary>
                        </Scroll>
                    </div>
                </>
            ); 
    }
}

export default App;