import * as React from 'react';
import {Layout} from './layout';
import Header from './header';
import Aside from './aside';
import Content from './content';
import Footer from './footer';

const LayoutExample3: React.FunctionComponent = () => {
  return (
    <div>
      <Layout style={{height: 500, width: 500}} className="hi">
        <Header className="x">header</Header>
        <Layout>
          <Content className="y">content</Content>
          <Aside className="z">aside</Aside>
        </Layout>
        <Footer className="x">footer</Footer>
      </Layout>
    </div>
  );
};

export default LayoutExample3;