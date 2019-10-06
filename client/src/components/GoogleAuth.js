import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '315665693019-4jgb6jb55uotts0emvlcc2h9mflitsq8.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
      });
    });  
  }

  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;