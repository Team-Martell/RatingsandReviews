import transformClassProperties from 'babel-plugin-syntax-dynamic-import';
import Image from './Image.jsx';
import Jest from 'jest';
import React from 'react';
import {render, cleanup} from 'react-testing-library';
import {setupServer} from 'msw/node';
import {rest} from 'msw';

test('expect Image to be inserted into the dom', () => {
  var sampleDom = () => {
    return (<div class='dom'></div>);
  };
  var domInstance = sampleDom();
  ReactDOM.render(Image('https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png'), domInstance);
  expect(domInstance.innerText).toNotBe('');
});