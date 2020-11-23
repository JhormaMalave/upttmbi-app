import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Footer from '../components/department/Footer';
import Navbar from '../components/department/Navbar';
import SideBar from '../components/department/Sidebar';
import SectionScreen from '../screens/department/SectionsScreen';
import SubjectsScreen from '../screens/department/SubjectsScreen';

import '../styles/themes/department.css';

const DepartmentRouter = () => {
    return (
        <>      
            <SideBar />

            <div className="app">
                <Navbar />
                <main className="app-main">
                    <Switch>
                        <Route path="/subjects" component={ SubjectsScreen } />
                        <Route path="/sections" component={ SectionScreen } />
                    </Switch>
                </main>
                <Footer />
            </div>
        </>

    );
}

export default DepartmentRouter;