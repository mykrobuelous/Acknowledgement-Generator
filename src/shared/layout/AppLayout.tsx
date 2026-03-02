// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import FormLayout from '../../features/Form/FormLayout';

/* ===================================================================== */
/*
🧩 APP LAYOUT - Main Layout of the application
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
    className?: string;
}

const AppLayout: React.FC<Props> = ({ className }) => {
    return (
        <div className={twMerge('flex-center', className)}>
            <FormLayout />
        </div>
    );
};

export default AppLayout;
