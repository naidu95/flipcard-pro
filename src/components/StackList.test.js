import React from 'react';
import {shallow} from 'enzyme';
import { StackList } from './StatckList';
import {stacks} from '../data/fixtures';

const props ={stacks};

describe("Stacklist",()=>{
    const stacklist=shallow(<StackList {...props} />);
    it("rendering the link",()=>{
        expect(stacklist.find('Link').length).toEqual(props.stacks.length);
    });
});