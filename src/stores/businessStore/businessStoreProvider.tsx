import {createContext, JSX, useContext} from 'react';
import BusinessStore from "./businessStore";
import {ApolloClient, InMemoryCache} from "@apollo/client";

const BusinessStoreContext = createContext<BusinessStore>(new BusinessStore(new ApolloClient<any>({cache: new InMemoryCache()})));

interface BusinessStoreProviderProps {
    children: JSX.Element;
    store: BusinessStore;
}
export const BusinessStoreProvider = ({ children, store}: BusinessStoreProviderProps) =>
     <BusinessStoreContext.Provider value={store}>{children}</BusinessStoreContext.Provider>


export const useBusinessStore = (): BusinessStore => {
    const store = useContext(BusinessStoreContext);
    if (!store) throw new Error('Use App stores within provider!');
    return store;
};