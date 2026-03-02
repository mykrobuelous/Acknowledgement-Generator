// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 INPUT - Input for the application
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label: string;
}

const Input: React.FC<Props> = ({ className, label, ...props }) => {
    return (
        <div className={twMerge('flex flex-col', className)}>
            <p>{label}</p>
            <input {...props} className="rounded-sm border border-white px-2 py-1 outline-none" />
        </div>
    );
};

export default Input;
