import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css'
import 'antd/dist/antd.css'
import {Layout} from "antd";
import {Footer} from "antd/es/layout/layout";
import {ContentIn} from "./Componente/Layout/ContentIn";
import HeaderIn from "./Componente/Layout/HeaderIn";
import { FormModel } from './Componente/Layout/FormModel';
import {useRootStore} from "./index";

function App() {
    const roottoStore =useRootStore()
    useEffect(()=>{
        roottoStore.setInitialStorageValue()
        roottoStore.setDatainLocalStorage()
        roottoStore.getDatafromLocalStorage()
        // roottoStore.removemyLocalStorage()
    },[])
  return (
      <Layout>

          <HeaderIn/>
          <div style={{ padding: '80px 10px 10px 10px'
          }}/>
          <FormModel/>
          <div style={{ padding: '80px 50px 50px 50px'
          }}/>
          <ContentIn />
        <Footer style={{ textAlign: 'center' }}>Talpa Cristian</Footer>
      </Layout>
  );
}

export default App;
