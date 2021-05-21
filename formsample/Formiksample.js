import React from 'react'
import { View, Text, TextInput, Button } from 'react-native';
import { Formik } from 'formik'


const Formiksample = () => {


    return (
        <View>
            <Formik
                initialValues={{ email: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default Formiksample