import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 2},
            {id: 3, value: 3},
            {id: 4, value: 0},

        ]
    };

    handleReset = () =>{
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
            <div>
                <button onClick={this.handleReset} className="btn btn-lg">Reset</button>
                {
                    this.state.counters.map(counter =>
                        <Counter
                            key={counter.id}
                            onIncrement={this.handleIncrement}
                            onDelete={this.handleDelete}
                            counter={counter}/>
                    )
                }
            </div>
        );
    }

}

export default Counters;