import React from 'react';
import styled from 'styled-components';

const Score = styled.span`
    color: ${props => props.isRed ? 'red' : 'inherit'}
`;

export class GameClass extends React.Component {
    state = { points: 0 }

    increase = () => { 
        this.setState({ points: this.state.points + 5 }) 
    }

    decrease = () => { 
        this.setState({ points: this.state.points - 5 }) 
    }

    componentDidUpdate() {
        if (this.state.points >= 50) {
            alert(`Gratulacje wygrałeś w grę ${this.props.name}!`)
        }
    }

    render() {
        return (
            <>
                <h1>Witamy w grze {this.props.name}!</h1>
                <h2>Twoja liczna punktów to: <Score isRed={this.state.points < 0}>{this.state.points}</Score></h2>
                <div>
                    <button onClick={this.decrease}>-</button>
                    <button onClick={this.increase}>+</button>
                </div>
            </>
        )
    }
}