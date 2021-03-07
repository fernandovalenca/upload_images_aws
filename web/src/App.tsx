import React, { FunctionComponent } from 'react';

import GlobalStyle from './styles/global';
import { Container, Content } from './styles';

import Upload from './components/Upload';
import FileList from './components/FileList';

import { FileProvider} from './context/files';

const App: FunctionComponent = () => {
  return (
  <FileProvider>
    <GlobalStyle />
    <Container>
      <Content>
        <Upload />
        <FileList />
      </Content>
    </Container>
  </FileProvider>
  )
};

export default App;