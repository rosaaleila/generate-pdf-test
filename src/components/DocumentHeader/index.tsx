import { View, Image, StyleSheet } from '@react-pdf/renderer';
import logo from '../../logo.png'

const DocumentHeader = () => {
  const styles = StyleSheet.create({
    headerLogo: {
        width: 80, 
        height: 50,
    },
    header: {
        alignItems: 'center',
        marginBottom: 12,
        marginTop: 12,
        borderBottom: 2,
        borderBottomColor: '#94c11f'
    },
  });

  return (
    <View style={styles.header}>
        <Image src={logo} style={styles.headerLogo} />
    </View>
  );
};

export default DocumentHeader;