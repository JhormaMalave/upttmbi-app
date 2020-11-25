import { subjects } from "../data/subjects";



const getSubjectById = ( id ) => {
    return (
        subjects.find((subject) => (subject.id === id))
    );
}

export { getSubjectById }