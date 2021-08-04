import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    document : {
        width : '100%'
    },
    page: {
        width : '100%'
    },
    topBorder : {
        width : '100%',
        height : '20px',
        display : 'block',
        backgroundColor : '#112e59'
    },
    main : {
        display : 'flex',
        flexDirection : 'column',
        padding : '20px',
        width : '100%'
    },
    header : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        width : '100%',
        marginBottom : '20px'
    },
    details : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
    },
    customer_details : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between',
        marginVertical : '20px'
    },
    contact : {
        display : 'flex',
        flexDirection : 'column',
        fontSize : '10px'
    },
    company_name : {
        fontSize : '20px',
        fontWeight : '700',
    },
    invoice : {
        display : 'flex',
        flexDirection : 'column',
        fontSize : '10px'
    },
    bill_details : {
        fontSize : '12px', 
        color : 'white', 
        backgroundColor : '#112e59', 
        fontWeight : '700', 
        marginVertical : '10px', 
        textAlign : 'center',
        padding : '5px 5px'
    }
  });

const Biller = () => {
    const calendar = new Date();
    return(
        <Document is='custom' style={styles.document}>
        <Page is='custom' size="A4" style={styles.page}>
            <View is='custom' style={styles.topBorder}>
            </View>
            <View is='custom' style={styles.main}>
                <View is='custom' style={styles.header}>
                    <View is='custom'>
                        <Text is='custom' style={styles.company_name}>Patharia Jewellers</Text>
                    </View>
                    <View is='custom'>
                        <Text is='custom' style={{fontSize : '30px', fontWeight : '500'}}>INVOICE</Text>
                    </View>
                </View>
                <View is='custom' style={styles.details}>
                    <View is='custom' style={styles.contact}>
                        <Text is='custom'>45/2, Jutte Wali Gali, Aminabad</Text>
                        <Text is='custom'>Lucknow, Uttar Pradesh</Text>
                        <Text is='custom'>+91 9415104923</Text>
                        <Text is='custom'>pathariajewellers@gmail.com</Text>
                        <Text is='custom'>www.pathariajewellers.com</Text>
                    </View>
                    <View is='custom' style={styles.invoice}>
                        <Text is='custom'>Date : {`${calendar.getDate()} / ${calendar.getMonth()}/ ${calendar.getFullYear()} `} </Text>
                        <Text is='custom'>Time : {`${calendar.getHours()} : ${calendar.getMinutes()} : ${calendar.getSeconds()} `} </Text>
                        <Text is='custom'>Invoice Number : 23434</Text>
                        <Text is='custom'>Due Date : {`${calendar.getDate()} / ${calendar.getMonth() + 1}/ ${calendar.getFullYear()} `} </Text>
                    </View>
                </View>
                <View is='custom' style={styles.customer_details}>
                    <View is='custom' style={styles.contact}>
                        <Text is='custom' style={styles.bill_details}>BILL TO</Text>
                        <Text is='custom'>Name : Suyash Rastogi</Text>
                        <Text is='custom'>Phone : +91 8299688077</Text>
                        <Text is='custom'>PAN : EEGPR8234K</Text>
                        <Text is='custom'>Email : suyash.rastogi01@gmail.com</Text>
                    </View>
                    <View is='custom' style={styles.contact}>
                        <Text is='custom' style={styles.bill_details}>SHIP TO</Text>
                        <Text is='custom'>Name : Suyash Rastogi</Text>
                        <Text is='custom'>Phone : +91 8299688077</Text>
                        <Text is='custom'>PAN : EEGPR8234K</Text>
                        <Text is='custom'>Email : suyash.rastogi01@gmail.com</Text>
                    </View>
                </View>
                <View is='custom'>
                    
                </View>
            </View>
        </Page>
    </Document>
    )
}
export default Biller;