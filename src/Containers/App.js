import React, { Component } from "react";
import './App.css'
import CardsList from "../Components/CardsList/CardsList";
import { robots } from "../robots";
import CardSearch from "../Components/CardSearch/CardSearch";
import Scroll from "../Components/Scroll";
import axios from 'axios'

class App extends Component {
    state = {
        robots: [],
        searchfield: ''
    }
    // USING axios TO GET API DATA
    async componentDidMount() {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
       console.log(res.data);
       this.setState({robots : res.data})
      
     }

    // USING FETCH TO GET API DATA
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    //        return response.json();
    //     }).then(users => {
    //         this.setState({robots : users})
    //     })
       
    // }


    onSearchChange = (e) => {
        this.setState({
            searchfield: e.target.value
        })
    }
    render() {
        const {robots,searchfield} = this.state;
        const filterRobots = this.state.robots.filter( robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
            }
        )
        return !robots.length?
             <h1>Loading Data...</h1>
        :
            (
                <div className="p-3">
                    <div className="stickyBar">
                    <h1 className="text-center p-2">Robo Friends</h1>
                    <CardSearch searchChange= {this.onSearchChange}/>

                    </div>
                   <Scroll>
                        <CardsList robots={filterRobots}/>
                    </Scroll>
                </div>
            )
    }
}
export default App;