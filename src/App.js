import React, {Component} from 'react';
import './App.css';
import Intro from './components/intro/Intro';
import Contact from './components/contact-me/Contact';
import Blog from './components/Blog/Blog';
import Users from './components/Users/Users';

class App extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Intro/>
                    <Contact/>
                    <Blog/>
                    <Users/>
                </div>
            </div>
        );
    }
}

export default App;
