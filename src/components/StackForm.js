import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Form,FormGroup,FormControl,Button} from'react-bootstrap';
import {  addStack } from '../actions'
import { connect } from 'react-redux';

export class StackForm extends Component{
    constructor(){
        super();
        this.state={
            title:'',
            cards:[]
        }
    }
    addCard(){
        const{ cards }=this.state;
        cards.push({id:cards.length,prompt:'',answer:''});
        this.setState({ cards });
    }
    addStack(){
        console.log("stack",this.state);
        this.props.addStack(this.state);
    }
    updateCardPart(event,index,part) {
        const { cards } = this.state;
        cards[index][part] = event.target.value;
        this.setState({ cards });
    }
    render(){
        const {cards}=this.state;
        return(
            <div>
                <Link className="link-home" to='/'><h4>Home</h4></Link>
                <h2>Create a New Stack</h2>
                <br/>
                <Form inline>
                    <FormGroup>
                        <h3>Title:</h3>
                        {" "}
                        <FormControl onChange={event=> this.setState({title:event.target.value})}/>
                    </FormGroup>
                    {
                        cards.map((card,index)=>{
                            return(
                                <div key={index}>
                                    <FormGroup className="new-inline">
                                        <h4>Promt:</h4>
                                        {" "}
                                        <FormControl onChange={event=>this.updateCardPart(event,index,"prompt")} />
                                        {' '}
                                        <h4>Answer:</h4>
                                        <FormControl onChange={event=>this.updateCardPart(event,index,"answer")} />
                                        {" "}
                                    </FormGroup>
                                </div>
                            )
                        })
                    }
                </Form>
                <br/>
                <Button onClick={()=>this.addCard()}>Add Card</Button>{" "}
                <Button onClick={()=>this.addStack()}>Save and add the stack</Button>
            </div>
        )
    }
}
export default connect(null,{addStack})(StackForm);