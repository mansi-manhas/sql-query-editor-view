import React, { useEffect, useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

import TableData from "./components/TableData";
import SideNavList from "./components/SideNavList";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import { AppWrapper, SideNav, Box, ToggleButton, ButtonWrapper, SvgWrapper } from "./styled.style";
import executeQuery from './assets/executeQuery.svg';

const App = () => {
  const [showTable, setShowTable] = useState(false);
  const [query, setQuery] = useState("");
  const [input, setInput] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
 
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (showTable) {
      setIsLoading(false);
    }
  }, [showTable]);

  useEffect(() => {
      setIsLoading(false);
  }, []);

  const handleDataFetch = (isFetched) => {
    if (isFetched) { 
      setIsLoading(false); 
    }
  }

  const handleInputChange = (newInput) => {
    setShowTable(true);
    setQuery(newInput);
  }

  const OpenNav = () => (
    <SideNav customWidth="240px">
      <ToggleButton onClick={() => setIsNavOpen(false)}> {"Collapse"} </ToggleButton>
      <SideNavList returnInput={handleInputChange} />
    </SideNav>
  );

  const CloseNav = () => (
    <SideNav customWidth="80px" customMarginLeft="0">
      <ToggleButton onClick={() => setIsNavOpen(true)}> {"Expand"} </ToggleButton>
    </SideNav>
  );

  return (
    <Box>
      <Header />
      {isNavOpen ? <OpenNav /> : <CloseNav />}
      <AppWrapper isNavOpen={isNavOpen}>
          <AceEditor
            id="ace-editor-input"
            mode="mysql"
            theme="github"
            name="mysql-editor"
            width="80vw"
            onChange={(data) => setInput(data)}
            editorProps={{ $blockScrolling: true }}
          />
          <div>
            <ButtonWrapper
              id="execute-query"
              onClick={() => {
                setIsLoading(true);
                setShowTable(true);
                if (!query) {
                  setIsLoading(true);
                } else {
                  setIsLoading(false);
                }
                if (!input) {
                  setIsLoading(false);
                }
                setQuery(input);
              }}
            >
              <SvgWrapper><img style={{marginBottom: "-4px"}} width={16} height={16} src={executeQuery} alt="" /> Run Query </SvgWrapper>
            </ButtonWrapper>
          </div>
          <div>
            {showTable && query && (
              <TableData query={query} dataFetched={handleDataFetch} />
            )}
          </div>
      </AppWrapper>
      {isLoading && <Spinner />}
    </Box>
  );
};

export default App;
