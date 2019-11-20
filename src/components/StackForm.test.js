import React from 'react';
import { shallow } from 'enzyme';
import { StackForm } from './StackForm';

describe('StackForm', () => {
    const stackform = shallow(<StackForm />);

    it('renders the  title', () => {
        expect(stackform.find('h2').text()).toEqual('Create a New Stack')
    });
    it('renders the  link title', () => {
        expect(stackform.find('Link h4').text()).toEqual('Home')
    });
    it('renders the  Form', () => {
        expect(stackform.find('Form').exists()).toBe(true);
    });
    it('renders the  Button to add a new card', () => {
        expect(stackform.find('Button').at(0).props().children).toEqual("Add Card");
    });
    it('renders the  another Button to add a new card', () => {
        expect(stackform.find('Button').at(1).props().children).toEqual("Save and add the stack");
    });
    describe("updating the title",()=>{
        beforeEach(() => {
            stackform.find('FormControl').simulate('change',{target:{value:"title changed"}});  
        });
        it('change the text using testing', () => {
            expect(stackform.state().title).toEqual("title changed");
        });
    })
    describe("Adding new title",()=>{
        beforeEach(() => {
            stackform.find('Button').at(0).simulate('change');  
        });
        it('change the text using testing', () => {
            
        });
    })
    
    
});