import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css'
import 'antd/dist/antd.css'
import {Layout} from "antd";
import {Footer} from "antd/es/layout/layout";
import {ContentIn} from "./Componente/Layout/ContentIn";
import {Route, Routes} from "react-router-dom";
import { FormModel } from './Componente/Layout/FormModel';
import {Login} from "./Componente/Layout/Login";
import {useLoginStore, useRootStore} from ".";
import {HeaderIn} from "./Componente/Layout/HeaderIn";


import {Home} from "./Componente/Layout/Home";
import {ROUTES} from "./Routes/Routes";

function App() {

    const loginS = useLoginStore();

    useEffect(() => {
        loginS.setInitialStorageContents()
    }, [])
    const roottoStore = useRootStore()
    useEffect(() => {
        roottoStore.setInitialStorageValue()
        roottoStore.setDatainLocalStorage()
        roottoStore.getDatafromLocalStorage()
        // roottoStore.removemyLocalStorage()
    }, [])
  return (
      <Layout>
          <HeaderIn/>
          <div>
          <Routes>
              <Route path={ ROUTES[0].path } element={ <Home /> } />
              <Route path={ ROUTES[1].path } element={ <ContentIn/> } />
              <Route path={ ROUTES[2].path } element={ <Login/> } />
          </Routes>
          </div>
        <Footer style={{ textAlign: 'center' }}>Talpa Cristian</Footer>
      </Layout>
  );
}

export default App;
