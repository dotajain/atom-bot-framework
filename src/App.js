import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';

import Logo from './Logo';
import RetailBotComponent from './RetailBotComponent';

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#1FB6FF',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
  width: '100%',
};

class App extends Component {
  render() {
    return (
      <main className="bd-masthead" role="main">
        <div className="d-flex justify-content-around align-items-center">
          <div className="text-center getting-text">
            
            <Logo />
            <h1>ATOM Insura</h1>
            <h2>Your Insurance Assitent</h2>
            <div className="text-left">
              <p>
                How <strong>Artificial Intelligence</strong> is transforming the <br/>
                insurance conversation using<br/> 
                <strong>ATOM Insura ChatBot</strong> for your Insurance. 
              </p>
            </div>
          </div>
          <div>
            <ThemeProvider theme={theme}>
              <ChatBot
                width="360px"
                hideHeader
                recognitionEnable              
                steps={[
                  {
                    id: '1',
                    message: 'Hello Brian!, I am Insura, How can I help you today?',
                    trigger: 'search',
                  },
                  {
                    id: 'search',
                    user: true,
                    trigger: '3',
                  },
                  {
                    id: '3',
                    component: <RetailBotComponent />,
                    asMessage: true,
                    waitAction: true,
                    trigger: 'search',
                  },
                ]}
              />
            </ThemeProvider>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
