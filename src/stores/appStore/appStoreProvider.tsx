import {createContext, JSX, useContext} from 'react';
import AppStore from "./appStore";

const AppStoreContext = createContext<AppStore>(new AppStore());

interface AppStoreProviderProps {
    children: JSX.Element;
    store: AppStore;
}
export const AppStoreProvider = ({ children, store}: AppStoreProviderProps) =>
    <AppStoreContext.Provider value={store}>{children}</AppStoreContext.Provider>


export const useAppStore = (): AppStore => {
    const store = useContext(AppStoreContext);
    if (!store) throw new Error('Use App stores within provider!');
    return store;
};