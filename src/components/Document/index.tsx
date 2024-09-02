import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import { FormData } from '../Form';
import logo from '../../logo.png'

interface DocumentProps {
    formData: FormData;
    files: File[]
}

const CreatedDocument = (props: DocumentProps) => {

    const styles = StyleSheet.create({
        page: {
          flexDirection: 'row',
          backgroundColor: '#E4E4E4'
        },
        section: {
          margin: 10,
          padding: 10,
          flexGrow: 1
        }
      });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Image src={logo} />
                </View>
                <View style={styles.section}>
                    <Text>{props.formData.text}</Text>
                </View>
            </Page>
                {props.files.map((file) => (
                    <Page>
                        <Image src={file} />
                    </Page>
                ))}
        </Document>
    )
};

export default CreatedDocument;