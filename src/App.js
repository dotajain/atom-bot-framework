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
            <h2>Your Insurance Assistant</h2>
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
              {
                // <ChatBot
                //   width="360px"
                //   hideHeader
                //   recognitionEnable              
                //   steps={[
                //     {
                //       id: '1',
                //       message: 'Hello Brian!, I am Insura, How can I help you today?',
                //       trigger: 'search',
                //     },
                //     {
                //       id: 'search',
                //       user: true,
                //       trigger: '3',
                //     },
                //     {
                //       id: '3',
                //       component: <RetailBotComponent />,
                //       asMessage: true,
                //       waitAction: true,
                //       trigger: 'search',
                //     },
                //   ]}
                // />
            }
              <ChatBot
                width="360px"
                hideHeader
                recognitionEnable              
                steps={[
                  {
                    id: '1',
                    message: 'Hello Brian!, I am Insura, How can I help you today?',
                    trigger: '2',
                  },
                  {
                    id: '2',
                    user: true,
                    trigger: '3',
                  },
                  {
                    id: '3',
                    message: 'Sure. I can help you with that. I see that you have 2 auto policies linked to your account. For which policy do you need the information.',
                    trigger: '4',
                  },
                  {
                    id: '4',
                    options: [
                      { value: '67632971804', label: '67632971804', trigger: '5' },
                      { value: '86652473895', label: '86652473895', trigger: '5' },
                    ],
                  },
                  {
                    id: '5',
                    message: 'Thank you. Let me check',
                    trigger: '6',
                  },
                  {
                    id: '6',
                    user: true,
                    trigger: '7',
                  },
                  {
                    id: '7',
                    message: 'Thanks for waiting, your policy number 67632971804 is enforced stage.',
                    trigger: '8',
                  },
                  {
                    id: '8',
                    message: 'Is there anything else you would like to know about this policy?',
                    trigger: '9',
                  },
                  {
                    id: '9',
                    user: true,
                    trigger: '10',
                  },
                  {
                    id: '10',
                    message: 'Premium due amount for policy 67632971804 is $6724.12',
                    trigger: '11',
                  },
                  {
                    id: '11',
                    user: true,
                    trigger: '12',
                  },
                  {
                    id: '12',
                    message: 'Due date for policy 67632971804 is July 15, 2018',
                    trigger: '13',
                  },
                  {
                    id: '13',
                    message: 'Is there anything else I can help you with?',
                    trigger: '14',
                  },
                  {
                    id: '14',
                    options: [
                      { value: 'yes', label: 'Yes', trigger: '15' },
                      { value: 'no', label: 'No', trigger: '15' },
                    ],
                  },
                  {
                    id: '15',
                    message: 'Thanks for contacting me, I will be glad to help you next time. Have a great day.',
                    end: true,
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
