import React, { Component } from 'react';

class ComponentA extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "Reactjs"
        };
        console.log("componentA constructor"); 
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log("ComponentA getDerivedStateFromProps");
        // Return null if no state update is needed
        return null;
    }
    changeState = ()=>{ 
        this.setState({ subject: "Reactjs is a javascript library" }) 
    }

    //!updating methods
    shouldComponentUpdate(nextptops,nextState){
        //Do not cause side effects
        console.log("componentA shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("ComponentA getSnapShortBeforeUpdate");
        return null;
    }
    componentDidCatch(prevProps,prevState){
        //can cause side effects and use http methods
        //this method will get invoke as componrnt re-render
        console.log("ComponentA componentDidUpdate");
    }
    
    render() {
        console.log("componentA render");
        return (
            <>
                <h1>ComponentA</h1>
                {/*<ComponentB/>*/}
                <button onClick={this.changeState}>Change state</button>
            </>
        );
    }
}

export default ComponentA;
