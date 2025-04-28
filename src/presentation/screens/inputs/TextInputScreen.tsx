import { useContext, useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, View } from 'react-native';

import { Card, CustomView, Title } from '../../components';
import { globalStyles } from '../../../config/theme/theme';
import { ThemeContext } from '../../context/ThemeContext';

export const TextInputScreen = () => {
    const { colors } = useContext(ThemeContext);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
    });
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <ScrollView>
                <CustomView margin>
                    <Title text="TextInputScreen" safe />
                    <Card>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Ingrese su nombre completo"
                            autoCapitalize={'words'}
                            autoCorrect={false}
                            onChangeText={(value) => console.log(value)}
                            placeholderTextColor={colors.text}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Ingrese su email"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={(value) => setForm({ ...form, email: value })}
                            placeholderTextColor={colors.text}
                        />
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Ingrese su teléfono"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType="phone-pad"
                            onChangeText={(value) => setForm({ ...form, phone: value })}
                            placeholderTextColor={colors.text}
                        />
                    </Card>
                    <View style={{ height: 10 }} />
                    <Card>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                        <Text style={{ color: colors.text }}>{JSON.stringify(form, null, 2)}</Text>
                    </Card>
                    <View style={{ height: 10 }} />
                    <Card>
                        <TextInput
                            style={globalStyles.input}
                            placeholder="Ingrese su email"
                            autoCapitalize={'none'}
                            autoCorrect={false}
                            keyboardType="email-address"
                            onChangeText={(value) => setForm({ ...form, email: value })}
                            placeholderTextColor={colors.text}
                        />
                    </Card>
                </CustomView>
                <View style={{ height: 50 }} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
