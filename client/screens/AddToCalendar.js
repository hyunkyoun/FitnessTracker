import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';
import moment from 'moment';

const AddToCalendar = ({navigation}) => {

    const today = moment().format('ddd MMM D YYYY');

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 24 }}>
              <Text style={styles.subtitle}>{today}</Text>
              <View style={styles.placeholder}>
                <View style={styles.placeholderInset}>
                  


                </View>
              </View>
            </View>
        </SafeAreaView>
    );
}

export default AddToCalendar;

const styles = StyleSheet.create({

    subtitle: {
      fontSize: 17,
      fontWeight: '600',
      color: '#999999',
      marginBottom: 12,
    },

    /** Placeholder */
    placeholder: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      height: 400,
      marginTop: 0,
      padding: 0,
      backgroundColor: 'transparent',
    },
    placeholderInset: {
      borderWidth: 4,
      borderColor: '#e5e7eb',
      borderStyle: 'dashed',
      borderRadius: 9,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
  });
  