import React, {Component} from "react";
import Counters from "./counters";
import Navbar from "./navbar";

class App extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 2},
            {id: 3, value: 3},
            {id: 4, value: 0},

        ]
    };
    handleReset = () => {
        const counters = this.state.counters.map(c => c.value = 0)
        this.setState(counters);
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;

        this.setState({counters});
    };

    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(counter => counter.id !== counterId);
        this.setState({counters});
    };

    render() {
        return (
            <React.Fragment>
                <Navbar totalCounters ={this.state.counters.filter(c => c.value !==0).length }/>
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete}
                        onReset={this.handleReset}/>
                </main>
            </React.Fragment>
        );
    }

}

export default App;