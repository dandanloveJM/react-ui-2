import * as React from 'react';
import {Layout} from './layout';
import Header from './header';
import Content from './content';
import Aside from './aside';
import Footer from './footer';

const LayoutExample4: React.FunctionComponent = () => {
  return (
    <div>
      <Layout style={{height: 500, width: 500}} className="hi">
        <Aside className="z">aside</Aside>
        <Layout>
          <Header className="x">header</Header>
          <Content className="y">content</Content>
          <Footer className="x">footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutExample4;