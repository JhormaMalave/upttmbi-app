import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Footer from '../components/department/Footer';
import SideBar from '../components/department/Sidebar';
import SectionScreen from '../screens/department/SectionsScreen';
import SubjectAddScreen from '../screens/department/subjects/SubjectAddScreen';
import SubjectScreen from '../screens/department/subjects/SubjectScreen';
import SubjectsScreen from '../screens/department/subjects/SubjectsScreen';

const DepartmentRouter = () => {
    return (
        <>      
            <SideBar />

            <div className="min-h-screen relative md:ml-64 bg-gray-200 flex flex-col justify-between">
                <main className="app-main">
                    <Switch>
                        <Route path="/subjects/new" component={ SubjectAddScreen } />
                        <Route path="/subjects/:subjectId" component={ SubjectScreen } />
                        <Route exact path="/subjects" component={ SubjectsScreen } />
                        <Route path="/sections" component={ SectionScreen } />
                    </Switch>
                </main>
                <Footer />
            </div>
        </>

    );
}

export default DepartmentRouter;