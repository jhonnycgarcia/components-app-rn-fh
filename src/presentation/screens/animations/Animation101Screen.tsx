import { View, StyleSheet, Pressable, Text, Animated, Easing } from 'react-native';
import { useContext } from 'react';
import { useAnimation } from '../../hooks/useAnimation';
import { ThemeContext } from '../../context/ThemeContext';
import { Button, CustomView } from '../../components';

export const Animation101Screen = () => {
    const { colors } = useContext(ThemeContext);
    const {
        animatedOpacity,
        animatedTop,
        fadeIn,
        fadeOut,
        startMovingTopPosition,
    } = useAnimation();

    return (
        <CustomView margin style={styles.container}>
            <Animated.View style={[
                styles.purpleBox,
                {
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: animatedTop,
                    }],
                    backgroundColor: colors.primary,
                },
            ]} />
            <Button
                text="FadeIn"
                onPress={() => {
                    fadeIn({});
                    startMovingTopPosition({
                        initialPosition: -100,
                        easing: Easing.elastic(2),
                        duration: 750,
                    });
                }}
                style={{ marginTop: 10 }}
            />
            <Button
                text="FadeOut"
                onPress={() => fadeOut({})}
                style={{ marginTop: 10 }}
            />
        </CustomView>
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
        // backgroundColor: colors.primary,
    },
});
