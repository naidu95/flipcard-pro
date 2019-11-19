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
            <Link to="stack_form"><p>Create a New Stack</p></Link>
        </div>
    )
}
}
export default App;