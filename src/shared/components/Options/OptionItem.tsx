// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';

/* ===================================================================== */
/*
🧩 OPTION ITEM - Option Item for options.
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
    className?: string;
    label: string;
    selected?: boolean;
    onClick?: () => void;
}

const OptionItem: React.FC<Props> = ({
    className,
    label,
    onClick = () => {},
    selected = false,
}) => {
    return (
        <div
            className={twMerge(
                'cursor-pointer px-3 py-1',
                selected ? 'bg-white' : 'border border-white',
                className
            )}
            onClick={onClick}
        >
            <p className={twMerge('', selected ? 'font-bold text-black' : 'text-white')}>{label}</p>
        </div>
    );
};

export default OptionItem;
