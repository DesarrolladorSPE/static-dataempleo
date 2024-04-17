import { AuthWrapper } from '../../components/AuthWrapper';
import { DocumentInfoContainer } from '../../components/DocumentInfoContainer';

const DocumentScreen = () => {
    return(
        <AuthWrapper>  
            <DocumentInfoContainer/>
        </AuthWrapper>
    );
}

export { DocumentScreen };