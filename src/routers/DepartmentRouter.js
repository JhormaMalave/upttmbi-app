import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';
import Footer from '../components/department/Footer';
import SideBar from '../components/department/Sidebar';

// Sections routes
import SectionsScreen from '../screens/department/sections/SectionsScreen';
import SectionsAddScreen from '../screens/department/sections/SectionsAddScreen';
import SectionScreen from '../screens/department/sections/SectionScreen';
// Subjects routes
import SubjectAddScreen from '../screens/department/subjects/SubjectAddScreen';
import SubjectScreen from '../screens/department/subjects/SubjectScreen';
import SubjectsScreen from '../screens/department/subjects/SubjectsScreen';
// Teachers routes
import TeachersScreen from '../screens/department/teachers/TeachersScreen';

const DepartmentRouter = () => {
    return (
        <>      
            <SideBar />

            <div className="min-h-screen relative md:ml-64 bg-gray-200 flex flex-col justify-between">
                <main className="app-main">
                    <Switch>
                        <Route exact path="/department/subjects/new" component={ SubjectAddScreen } />
                        <Route exact path="/department/subjects/:subjectId" component={ SubjectScreen } />
                        <Route exact path="/department/subjects" component={ SubjectsScreen } />

                        <Route exact path="/department/sections/new" component={ SectionsAddScreen } />
                        <Route exact path="/department/sections/:sectionId" component={ SectionScreen } />
                        <Route exact path="/department/sections" component={ SectionsScreen } />

                        <Route exact path="/department/teachers/new" component={ SectionsAddScreen } />
                        <Route exact path="/department/teachers/:sectionId" component={ SectionScreen } />
                        <Route exact path="/department/teachers" component={ TeachersScreen } />
                    </Switch>
                </main>
                <Footer />
            </div>
        </>

    );
}

export default DepartmentRouter;