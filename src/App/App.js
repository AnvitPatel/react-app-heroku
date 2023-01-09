import React, { Component } from "react";

import GlobalStyle, { AppContainer } from "./app.style";
import Routes from "./routes";

class App extends Component {
 render(){
     return( 
        <AppContainer >
        <GlobalStyle />
        
        <Routes  />
      </AppContainer>
     )
     
 }
}
export default App;
