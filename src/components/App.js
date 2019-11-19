import React,{Component} from 'react';
import StackList from './Statcklist';
import { Link } from 'react-router-dom';

class App extends Component{
render(){
    return(
        <div>
           <h2>FlashCardPro</h2>
           <hr/>
                <StackList />
            <hr/>
            <Link to="stack_form"><h2>Create a New Stack</h2></Link>
        </div>
    )
}
}
export default App;