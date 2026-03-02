// 📦 LIBRARIES IMPORT
import type { ModeOfPaymentType, PurposeType } from '../FormLayout';
import { Document, Image, Page, Text, View } from '@react-pdf/renderer';
import { formatCurrency, formatDate } from '../../../shared/utils/dateUtils';
import { pdfStyles } from './PDFformStyle';
import LogoImage from '../../../shared/assets/Feast Logo.jpg';
import SignatureImage from '../../../shared/assets/Signature.jfif';

/* ===================================================================== */
/*
🧩 PDF FORM - Sample the PDF Form for PDF Form.
📶 INPUTS
    - 
💾 DATA
    - 
📊 STATES
    - 
*/

interface Props {
    data: {
        recievedFrom: string;
        amount: number;
        modeOfPayment: ModeOfPaymentType;
        purpose: PurposeType;
        receiptNo: string;
        dateIssued: string;
    };
}

const PDFform: React.FC<Props> = ({ data }) => {
    const paymentModes: ModeOfPaymentType[] = ['GCash', 'Cash', 'Check', 'Bank Transfer'];
    return (
        <Document>
            <Page size="A4" style={pdfStyles.page}>
                {/* Header */}
                <View style={pdfStyles.headerCenter}>
                    {/* Replace src with your actual logo URL or base64 */}
                    {/* <Image style={pdfStyles.logo} src="YOUR_LOGO_URL_HERE" /> */}
                    <Image style={pdfStyles.logo} src={LogoImage} />
                    <Text style={pdfStyles.orgName}>
                        THE FEAST — LIGHT OF JESUS FAMILY PROVINCIAL, INC.
                    </Text>
                    <Text style={pdfStyles.addressText}>
                        God sends us many people in need of help,and we are sinceraly grateful
                    </Text>
                    <Text style={pdfStyles.addressText}>
                        that you have been chosen to give generously to our community.
                    </Text>
                    <Text style={pdfStyles.addressText}>
                        Thank you for being a blessing to our various ministries.
                    </Text>
                </View>

                <View style={pdfStyles.hr} />

                {/* Receipt Title */}
                <Text style={pdfStyles.receiptTitle}>OFFICIAL ACKNOWLEDGMENT RECEIPT</Text>

                <View style={pdfStyles.hr} />

                {/* Receipt No / Date */}
                <View style={pdfStyles.receiptMeta}>
                    <Text>
                        <Text style={pdfStyles.metaText}>Receipt No.: </Text>
                        <Text style={pdfStyles.metaValue}>{data.receiptNo}</Text>
                    </Text>
                    <Text>
                        <Text style={pdfStyles.metaText}>Date Issued: </Text>
                        <Text style={pdfStyles.metaValue}>{formatDate(data.dateIssued)}</Text>
                    </Text>
                </View>

                {/* Table */}
                <View style={pdfStyles.table}>
                    {/* Received From */}
                    <View style={pdfStyles.tableRow}>
                        <Text style={pdfStyles.labelCell}>Received From:</Text>
                        <Text style={pdfStyles.valueCell}>{data.recievedFrom}</Text>
                    </View>

                    {/* Amount */}
                    <View style={pdfStyles.tableRow}>
                        <Text style={pdfStyles.labelCell}>Amount Received:</Text>
                        <View style={pdfStyles.valueCell}>
                            <View style={pdfStyles.amountRow}>
                                <Text style={pdfStyles.amountCurrency}>
                                    {formatCurrency(data.amount)}
                                </Text>
                                <Text style={pdfStyles.amountValue}>
                                    {Number(data.amount).toLocaleString('en-PH', {
                                        minimumFractionDigits: 2,
                                    })}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Purpose */}
                    <View style={pdfStyles.tableRow}>
                        <Text style={pdfStyles.labelCell}>Purpose:</Text>
                        <Text style={pdfStyles.valueCell}>{data.purpose}</Text>
                    </View>

                    {/* Mode of Payment */}
                    <View style={pdfStyles.tableRowLast}>
                        <Text style={pdfStyles.labelCell}>Mode of Payment:</Text>
                        <View style={pdfStyles.valueCell}>
                            {paymentModes.map((mode) => (
                                <View key={mode} style={pdfStyles.checkboxRow}>
                                    <View
                                        style={
                                            data.modeOfPayment === mode
                                                ? pdfStyles.checkboxChecked
                                                : pdfStyles.checkbox
                                        }
                                    >
                                        {data.modeOfPayment === mode && (
                                            <Text style={pdfStyles.checkmark}></Text>
                                        )}
                                    </View>
                                    <Text>{mode}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                </View>

                {/* Footer Note */}
                <Text style={pdfStyles.footerNote}>
                    This receipt is issued to acknowledge the above contribution for religious and
                    {'\n'}ministry purposes.
                </Text>

                <View style={pdfStyles.hr} />

                {/* Signature */}
                <View style={pdfStyles.signatureSection}>
                    <Text style={pdfStyles.receivedBy}>Received By:</Text>
                    <Image style={pdfStyles.logo} src={SignatureImage} />
                    <Text style={pdfStyles.signerName}>GRACE GLORYMAE C. BEJEC</Text>
                    <View style={pdfStyles.signatureLine} />
                    <Text style={pdfStyles.authorizedText}>Finance Monday Head</Text>
                </View>

                {/* Quote */}
                <Text style={pdfStyles.quoteText}>"I thank God every time I think of you."</Text>
                <Text style={pdfStyles.verseText}>— Philippians 1:3 —</Text>
            </Page>
        </Document>
    );
};

export default PDFform;
