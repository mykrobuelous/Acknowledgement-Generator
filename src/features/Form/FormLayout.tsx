// 📦 LIBRARIES IMPORT
import { twMerge } from 'tailwind-merge';
import Input from '../../shared/components/Input/Input';
import OptionItem from '../../shared/components/Options/OptionItem';
import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import PDFform from './containers/PDFform';
import Button from '../../shared/components/Button/Button';

/* ===================================================================== */
/*
🧩 FORM LAYOUT - Layout for the form
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

export type ModeOfPaymentType = 'GCash' | 'Cash' | 'Check' | 'Bank Transfer';
export type PurposeType = 'Tithes' | 'Love Offering' | 'Donation';

const FormLayout: React.FC<Props> = ({ className }) => {
    const [modeOfPayment, setModeOfPayment] = useState<ModeOfPaymentType>('GCash');
    const [purpose, setPurpose] = useState<PurposeType>('Tithes');
    const [amount, setAmount] = useState<number>(0);
    const [recievedFrom, setRecievedFrom] = useState<string>('');
    const [receiptNo, setReceiptNo] = useState<string>('');
    const [dateIssued, setDateIssued] = useState<string>(new Date().toISOString().split('T')[0]);

    const onSubmit = async () => {
        const blob = await pdf(
            <PDFform
                data={{
                    recievedFrom,
                    amount,
                    modeOfPayment,
                    purpose,
                    receiptNo,
                    dateIssued,
                }}
            />
        ).toBlob();
        const url = URL.createObjectURL(blob);
        window.open(url); // or trigger download
    };

    return (
        <div className={twMerge('bg-card flex flex-col gap-2 rounded-lg p-4', className)}>
            <p className="text-2xl font-bold">Acknowledgement</p>
            <div className="flex flex-col gap-2">
                <Input
                    label="Date"
                    type="date"
                    value={dateIssued}
                    onChange={(e) => setDateIssued(e.target.value)}
                />
                <Input
                    label="Recieved From"
                    placeholder="Enter your recieved from"
                    value={recievedFrom}
                    onChange={(e) => setRecievedFrom(e.target.value)}
                />
                <Input
                    label="Amount"
                    placeholder="Enter Amount"
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                />
                <Input
                    label="Reciept Number"
                    placeholder="Enter your Reciept Number"
                    value={receiptNo}
                    onChange={(e) => setReceiptNo(e.target.value)}
                />
                <div className="flex flex-col">
                    <p>Mode of Payment</p>
                    <div className="flex gap-2">
                        <OptionItem
                            label="GCash"
                            selected={modeOfPayment === 'GCash'}
                            onClick={() => setModeOfPayment('GCash')}
                        />
                        <OptionItem
                            label="Cash"
                            selected={modeOfPayment === 'Cash'}
                            onClick={() => setModeOfPayment('Cash')}
                        />
                        <OptionItem
                            label="Check"
                            selected={modeOfPayment === 'Check'}
                            onClick={() => setModeOfPayment('Check')}
                        />
                        <OptionItem
                            label="Bank Transfer"
                            selected={modeOfPayment === 'Bank Transfer'}
                            onClick={() => setModeOfPayment('Bank Transfer')}
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <p>Purpose</p>
                    <div className="flex gap-2">
                        <OptionItem
                            label="Tithes"
                            selected={purpose === 'Tithes'}
                            onClick={() => setPurpose('Tithes')}
                        />
                        <OptionItem
                            label="Love Offering"
                            selected={purpose === 'Love Offering'}
                            onClick={() => setPurpose('Love Offering')}
                        />
                        <OptionItem
                            label="Donation"
                            selected={purpose === 'Donation'}
                            onClick={() => setPurpose('Donation')}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-end">
                <Button label="Generate" onClick={onSubmit} />
            </div>
        </div>
    );
};

export default FormLayout;
