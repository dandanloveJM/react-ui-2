import * as React from 'react';
import Layout from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

export default function () {
  return (
    <div>
      <h1>第一个例子</h1>
      <Layout style={{height: 500}}>
        <Header>header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>

      <h1>第二个例子</h1>
      <Layout style={{height: 500}}>
        <Header>header</Header>
        <Layout>
          <Aside>Aside</Aside>
          <Content>content</Content>
        </Layout>
        <Footer>footer</Footer>
      </Layout>

      <h1>第三个例子</h1>
      <Layout style={{height: 500}}>
        <Header>header</Header>
        <Layout>
          <Content>content</Content>
          <Aside>Aside</Aside>

        </Layout>
        <Footer>footer</Footer>
      </Layout>


      <h1>第四个例子</h1>
      <Layout style={{height: 500}}>
        <Aside>Aside</Aside>
        <Layout>
          <Header>header</Header>
          <Content>content</Content>
          <Footer>footer</Footer>
        </Layout>
      </Layout>
    </div>


  );
};

