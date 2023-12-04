import { useParams } from "react-router-dom";

const CreateProjectStep = () => {
    const { createProjectStep } = useParams();

    return (
        <div>
            <h2>todo Step {createProjectStep}</h2>
        </div>
    );
}

export default CreateProjectStep;
