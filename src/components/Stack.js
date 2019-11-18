import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Card from './Card';

class Stack extends Component {
    render(){
        console.log("stock props",this.props)
        const {title,cards}=this.props.stack;
        return(
            <div>
                <Link className="link-home" to='/'>
                    <h4>Home</h4>
                </Link>
                <h2>{title}</h2>
                <br />
                {
                    cards.map((card,key)=>{
                        return(
                           <Card key={key} card={card}/>
                        )
                    })
                }
            </div>
        )
    }
}
function mapStateToProps(state){
    return { stack: state.stack };
}
export default connect(mapStateToProps,null)(Stack);