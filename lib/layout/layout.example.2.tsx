import * as React from 'react';
import {Layout} from './layout';
import Header from './header';
import Content from './content';
import Footer from './footer';
import Aside from './aside';

const LayoutExample2: React.FunctionComponent = () => {
  return (
    <div>
      <Layout style={{height: 500, width: 500}} className="hi">
        <Header className="x">header</Header>
        <Layout>
          <Aside className="z">aside</Aside>
          <Content className="y">content</Content>
        </Layout>
        <Footer className="x">footer</Footer>
      </Layout>
    </div>
  );
};

export default LayoutExample2;