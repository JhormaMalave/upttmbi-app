import React from 'react';
import { useSelector } from 'react-redux';
import {
    Switch,
    Route
} from 'react-router-dom';
import Footer from '../components/department/Footer';
import SideBar from '../components/department/Sidebar';

// Department
import DepartmentScreen from '../screens/department/DepartmentScreen';
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
import TeacherScreen from '../screens/department/teachers/TeacherScreen';

// Periods routes
import PeriodScreen from '../screens/department/periods/PeriodScreen';
import PeriodsScreen from '../screens/department/periods/PeriodsScreen';

import Alert from '../components/Alert';

const DepartmentRouter = () => {
    const { alert } = useSelector(state => state.ui);

    return (
        <>      
            <SideBar />

            <div className="min-h-screen relative md:ml-64 bg-gray-200 flex flex-col justify-between">
                <main className="app-main">
                    { alert && <Alert {...alert} /> }
                    <Switch>
                        <Route exact path="/department/home" component={DepartmentScreen} />

                        <Route exact path="/department/subjects/new" component={ SubjectAddScreen } />
                        <Route exact path="/department/subjects/:subjectId" component={ SubjectScreen } />
                        <Route exact path="/department/subjects" component={ SubjectsScreen } />

                        <Route exact path="/department/sections/new" component={ SectionsAddScreen } />
                        <Route exact path="/department/sections/:sectionId" component={ SectionScreen } />
                        <Route exact path="/department/sections" component={ SectionsScreen } />

                        <Route exact path="/department/teachers/new" component={ SectionsAddScreen } />
                        <Route exact path="/department/teachers/:teacherId" component={ TeacherScreen } />
                        <Route exact path="/department/teachers" component={ TeachersScreen } />

                        <Route exact path="/department/periods/:periodId" component={ PeriodScreen } />
                        <Route exact path="/department/periods" component={ PeriodsScreen } />
                    </Switch>
                </main>
                <Footer />
            </div>
        </>

    );
}

export default DepartmentRouter;