import { View, Modal, Platform } from 'react-native';
import { useState } from 'react';
import { Button, CustomView, Title } from '../../components';

export const ModalScreen = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <CustomView>
            <Title text="ModalScreen" safe />

            <Button
                text="Open Modal"
                onPress={() => setIsModalVisible(true)}
            />

            <Modal
                visible={isModalVisible}
                animationType="slide"
            >
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    }}
                >
                    <View style={{ paddingHorizontal: 10 }}>
                        <Title text="Modal Content" safe />
                    </View>
                    <View style={{ flex: 1 }} />
                    <Button
                        text="Close Modal"
                        onPress={() => setIsModalVisible(false)}
                        style={{
                            height: Platform.OS === 'android' ? 40 : 60,
                            borderRadius: 0,
                        }}
                    />
                </View>
            </Modal>
        </CustomView>
    );
};
