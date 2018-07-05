import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Loading } from 'react-simple-chatbot';
const uuidv1 = require('uuid/v1');
//https://console.dialogflow.com/api-client/demo/embedded/22d31349-2a7f-4b3b-b553-695e14092236/demoQuery?q=1231212&sessionId=534464c0-04ab-fa5f-38f4-5cbd30a119f5

const TOKEN = '28ee1dc9d0194ba6ba9b424688bf27dd';

const baseUrl = "https://api.api.ai/v1/query?v=20150910";
const accessToken = `Bearer ${TOKEN}`; 

class RetailBotComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: '',
    };

    // this.triggetNext = this.triggetNext.bind(this);
  }

  componentWillMount() {
    const self = this;
    const { steps } = this.props;
    const search = steps.search.value;
    const data = {
      "query": search,
      "lang": "en",
      "sessionId": uuidv1() 
    };
    
    // const xhr = new XMLHttpRequest();

    // xhr.addEventListener('readystatechange', readyStateChange);

    
    axios({
      url: baseUrl,
      method: "POST",
      headers: { "Authorization": accessToken },
      data
    })
    .then (function (response) {
      console.log(response.data.result.fulfillment.messages[0].speech);
      self.stateChange(response.data.result.fulfillment.messages[0].speech);
    });
    // xhr.open('GET', queryUrl);
    // xhr.send();
  }

  stateChange = (bindings) => {
    const self = this;
    console.log(this.readyState);
    // if (this.readyState === 4) {
      // const data = JSON.parse(this.responseText);
      // const bindings = 'data.results.bindings';
      if (bindings) {
        self.setState({ loading: false, result: bindings }, () => {
          this.props.triggerNextStep({
            value: this.state.result,
            trigger: 'search'
          });
        });
      } else {
        self.setState({ loading: false, result: 'Not found.' }, () => {
          this.props.triggerNextStep({
            value: this.state.result,
            trigger: 'search'
          });
        });
      }
    // }
  }

  // triggetNext() {
  //   this.setState({ trigger: true }, () => {
      
  //   });
  // }

  render() {
    const { loading, result } = this.state;
    if (loading) {
      return <Loading />
    } else {
      return result;
    }
  }
}

RetailBotComponent.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

RetailBotComponent.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

export default RetailBotComponent;
