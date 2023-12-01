import React from 'react';
import './App.css';
import Dashboard from "../components/dashboard";
import {ApolloProvider} from "@apollo/client";
import NewClient from "../api/asgard/client";
import BusinessStore from "../stores/businessStore/businessStore";
import {BusinessStoreProvider} from "../stores/businessStore/businessStoreProvider";
import "src/styles/dashboard/index.css";
import Sidebar from "../components/sidebar";
import {asgardTokenMock} from "../mocks";

export default App;

function App() {
    const apolloClient = NewClient(asgardTokenMock)
    const businessStore = new BusinessStore(apolloClient)

    return (
      <ApolloProvider client={apolloClient}>
          <BusinessStoreProvider store={businessStore}>
              <>
                  <Sidebar/>
                  <Dashboard className={"dashboard"}/>
              </>
          </BusinessStoreProvider>
      </ApolloProvider>
    );
}
