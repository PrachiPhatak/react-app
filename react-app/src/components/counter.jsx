import React, {Component} from "react";


class Counter extends Component {
    render() {
        const {onIncrement, counter, onDelete} = this.props;
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => onIncrement(counter)} className="btn btn-sm bg-secondary text-white m-2">Increment</button>
                <button onClick={() => onDelete(counter.id)}
                        className="btn btn-sm bg-danger m-2">Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }
}

export default Counter;