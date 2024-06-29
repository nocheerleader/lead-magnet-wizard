import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateApp from './CreateApp';
import FormBuilder from './FormBuilder';
import LeadMagnet from './LeadMagnet';
import Library from './Library';
import PreviewShare from './PreviewShare';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CreateApp />} /> {/* Ensure a root route is defined */}
          <Route path="/CreateApp" element={<CreateApp />} />
          <Route path="/FormBuilder" element={<FormBuilder />} />
          <Route path="/LeadMagnet" element={<LeadMagnet />} />
          <Route path="/Library" element={<Library />} />
          <Route path="/PreviewShare" element={<PreviewShare />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
