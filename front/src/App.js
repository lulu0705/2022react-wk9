import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages/Home';
import Product from './pages/Product';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { Provider } from "react-redux";
// import store from './redux/store';

const queryClient = new QueryClient()



function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/card/:cardId" element={<Product />} /> */}
        <Route path="cards/id/:cardId" element={<Product />} />
      </Routes>    
    </BrowserRouter>
    </QueryClientProvider>
    
  //   <QueryClientProvider client={queryClient}>
  //   <Provider store={store}>
  //     <BrowserRouter>
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="cards">
  //           <Route path="category/:categoryName" element={<Home />} />
  //           <Route path="id/:cardId" element={<Product />} />
  //         </Route>
  //       </Routes>
  //     </BrowserRouter>
  //   </Provider>
  // </QueryClientProvider>
  );
}

export default App;
