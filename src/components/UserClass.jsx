import React from "react"

class UserClass extends React.Component {
      
    constructor(props){
        super(props);

        console.log("child constructor");

        this.state={
            //count:0,

            userInfo: {
                name:"Dummy",
                location:"default",
            }
            
        };
    }
     
     async componentDidMount() {
    // console.log(this.props.name + 'Child Component Did Mount');
    // * API call
    const data = await fetch(
      'https://api.github.com/users/satyamkumar1507'
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

    render() {
     
     // console.log("child render");
    // const {name} = this.props;
    //  const {count} = this.state;
     
     const { name, location } = this.state.userInfo;


        return (
            <div className="w-full h-full text-center">
            {/* <h1>Count: {count}</h1>
            <button
              onClick = {() => {
                this.setState({
                    count: this.state.count + 1,
                });
              }}
            >
              Count Increment
            </button> */}
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <h4>Contact:https://github.com/satyamkumar1507</h4>
        </div>
        )
    }
}

export default UserClass;

/* ****************************************************************
 *
 *
 * ----- Mounting CYCLE -----
 *   Constructor (dummy)
 *   Render (dummy)
 *       <HTML Dummy></HTML>
 *   Component Did Mount
 *       <API Call>
 *       <this.setState> - State variable is updated
 *
 * ----- UPDATE CYCLE -----
 *       render(API data)
 *       <HTML (new API data)>
 *   Component Did Update
 *   Component Will Unmount
 *
 *
 * Life Cycle Diagram Website Reference: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
 */