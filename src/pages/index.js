import React from "react"
import { Layout } from 'antd';

import 'antd/dist/antd.css';

import Image from "../components/image"

const { Content } = Layout;

const IndexPage = () => (
  <Layout>
    <Content style={{ height: `100vh` }}>
      <div style={{ maxWidth: `300px`, height: `100vh`, margin: `auto`, marginTop: `200px` }}>
        <Image />
        <div style={{ marginTop: `20px`, textAlign: `center`, color: `#fe9b25`, fontWeight: `700` }}> <p> Coming soon!</p></div>
      </div>
    </Content>
  </Layout>
)

export default IndexPage
