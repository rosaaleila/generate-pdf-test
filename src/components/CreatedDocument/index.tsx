import { Page, Text, View, Document, StyleSheet, Image, Font } from '@react-pdf/renderer';
import { FormData } from '../Form';
import JosefinSans from '../../fonts/JosefinSans.ttf';
import DocumentHeader from '../DocumentHeader';

interface DocumentProps {
    formData: FormData;
    files: File[];
}

const CreatedDocument = (props: DocumentProps) => {

    Font.register({ 
        family: "Josefin Sans",
        src: JosefinSans
    });

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'column',
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1,
        },
        text: {
            fontFamily: "Josefin Sans",
        },
        document: {
            width: '100%',
            height: '100%'
        }
    });

    return (
        <Document style={styles.document}>
            {props.formData.text.trim() && <Page size="A4" style={styles.page}>
                <DocumentHeader/>
                <View style={styles.section}>
                    <Text style={styles.text}>{props.formData.text}</Text>
                </View>
            </Page>}
            {props.files.map((file, index) => (
                <Page size="A4" style={styles.page} key={index}>
                    <DocumentHeader/>
                    <View>
                        <Image src={file} />
                    </View>
                </Page>
            ))}
        </Document>
    )
};

export default CreatedDocument;