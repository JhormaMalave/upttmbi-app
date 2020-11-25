import React, { useState } from 'react';
import Header from '../../../components/department/subjects/Header';
import Subjects from '../../../components/department/subjects/Subjects';

const SubjectsScreen = () => {

    const [traject, setTraject] = useState(1);

    return (
        <>
            <Header setTraject={setTraject} />
            <Subjects traject={traject}  />
        </>
    );
}

export default SubjectsScreen;