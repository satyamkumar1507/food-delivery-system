import {Component} from "react";
import UserClass from "./UserClass";


class About extends Component {
  constructor(props) {
    super(props);
      console.log('Parent Constructor');
  }

  componentDidMount() {
     console.log('Parent Component Did Mount');
  }

  render() {
      console.log('Parent Render');
    return (
      <div>
        {/* <h1>About Class Component</h1>
        <h2>This is About Page</h2> */}
        <UserClass name={'satyam singh'} location={'roorkee'} />
        {/* <UserClass name={'Second'} location={'Badvel class'} /> */}
        {/* <UserClass name={'Third'} location={'Badvel class'} /> */}
      </div>
    );
  }
}

// * RENDER CYCLE OF CLASS BASED COMPONENTS WHEN THE CLASS HAS TWO CHLIDREN

/* 
*  - Parent Constructor()              -- Render Phase
*  - Parent Render()

*    - First Child Constructor()
*    - First Child Render()
*                                      -- Render Phase
*    - Second Child Constructor()
*    - Second Child Render()

*     <DOM UPDATED - IN SINGLE BATCH> -> Optimizes the Performance of App  -- Commit Phase
*    - First Child ComponentDidMount()
*    - Second Child ComponentDidMount()

*  - Parent ComponentDidMount()=
*/



// function About() {
//     return(
//         <div className="w-full h-full text-center">
//            <h1>About</h1>
//            <h2>This is a about page</h2>
//            <User/>

//            <UserClass name={"satyam singh"}/>
//         </div>
//     )
// }

export default About;