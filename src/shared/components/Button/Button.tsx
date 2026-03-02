// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 BUTTON - Button for the application
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    label: string;
    onClick?: () => void;
}

const Button: React.FC<Props> = ({ className, label, ...props }) => {
    return (
        <button className={twMerge('cursor-pointer bg-green-500 px-4 py-1', className)} {...props}>
            {label}
        </button>
    );
};

export default Button;
