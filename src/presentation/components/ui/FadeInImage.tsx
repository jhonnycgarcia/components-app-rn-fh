import { useState } from 'react';
import { View, ImageStyle, StyleProp, Animated, ActivityIndicator } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';

interface Props {
    uri: string;
    style?: StyleProp<ImageStyle>;
}

export const FadeInImage = ({ uri, style }: Props) => {
    const { animatedOpacity, fadeIn } = useAnimation();
    const [isLoading, setIsLoading] = useState(true);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

            { isLoading && (
                <ActivityIndicator
                    style={{ position: 'absolute' }}
                    size={ 30 }
                    color="gray"
                />
            )}


            <Animated.Image
                source={{ uri }}
                onLoadEnd={() => {
                    fadeIn({ duration: 300 });
                    setIsLoading(false);
                }}
                style={[
                    style,
                    {
                        opacity: animatedOpacity,
                    },
                ]}
            />
        </View>
    );
};
