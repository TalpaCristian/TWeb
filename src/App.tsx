import React from 'react';
import logo from './logo.svg';
import './App.css'
import 'antd/dist/antd.css'
import {Layout} from "antd";
import {Footer} from "antd/es/layout/layout";
import ContentIn from "./Componente/Layout/ContentIn";
import HeaderIn from "./Componente/Layout/HeaderIn";

function App() {
  return (
      <Layout>

          <HeaderIn/>
          <div style={{ padding: '150px 50px 50px 50px'
          }}/>
          <ContentIn />
        <Footer style={{ textAlign: 'center' }}>Talpa Cristian</Footer>
      </Layout>
  );
}

export default App;
