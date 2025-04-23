import { View, StyleSheet, Pressable, Text, Animated } from 'react-native';
import { colors } from '../../../config/theme/theme';
import { useRef } from 'react';

export const Animation101Screen = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        Animated.timing(animatedOpacity, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => console.log('Animation finished'));
    };
    const fadeOut = () => {
        Animated.timing(animatedOpacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start(() => console.log('Animation finished'));
    };
    return (
        <View style={styles.container}>
            <Animated.View style={[
                styles.purpleBox,
                { opacity: animatedOpacity }
            ]} />
            <Pressable
                onPress={fadeIn}
                style={{ marginTop: 10 }}
            >
                <Text>FadeIn</Text>
            </Pressable>
            <Pressable
                onPress={fadeOut}
                style={{ marginTop: 10 }}
            >
                <Text>FadeOut</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    purpleBox: {
        width: 150,
        height: 150,
        backgroundColor: colors.primary,
    },
});
