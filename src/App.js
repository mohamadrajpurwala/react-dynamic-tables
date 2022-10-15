import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/header';
import Home from './pages/home';
import ManageType from './pages/manageTypes';
import NotFound from './pages/notFound';
import CategoryType from './pages/type';

function App() {
    
    return (
        <Router>
            <Header />
            <div className="container-fluid testimonial-group">
                <Routes>
                    <Route exact path="/" element={<Navigate to="/all" />} />
                    <Route path='/all' element={<Home />} />
                    <Route path='/manage-types' element={<ManageType />} />
                    <Route path="/type/:id" element={<CategoryType />} />
                    <Route path='*' exact={true} element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
