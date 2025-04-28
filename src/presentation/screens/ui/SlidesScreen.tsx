import { View, Text, ImageSourcePropType, useWindowDimensions, Image, NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { colors, globalStyles } from '../../../config/theme/theme';
import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components';
import { useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

interface Slide {
    title: string;
    desc: string;
    img: ImageSourcePropType;
}

const items: Slide[] = [
    {
      title: 'Titulo 1',
      desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
      img: require('../../assets/slide-1.png'),
    },
    {
      title: 'Titulo 2',
      desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
      img: require('../../assets/slide-2.png'),
    },
    {
      title: 'Titulo 3',
      desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
      img: require('../../assets/slide-3.png'),
    },
];

export const SlidesScreen = () => {

    const [currentSliceIndex, setCurrentSliceIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const navigation = useNavigation();

    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

        setCurrentSliceIndex(currentIndex > 0 ? currentIndex : 0);
    };

    const scrollToSlice = (index: number) => {
        if(!flatListRef.current) return;
        flatListRef.current.scrollToIndex({
            index,
            animated: true,
        });
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.background,
            }}
        >
            <FlatList
                ref={flatListRef}
                data={items}
                keyExtractor={(item) => item.title}

                renderItem={({ item }) => <SlideItem slide={item} />}
                horizontal
                pagingEnabled

                scrollEnabled={false}
                onScroll={onScroll}
            />

            {
                currentSliceIndex === items.length - 1 ? (
                    <Button
                        text='Finalizar'
                        onPress={() => navigation.goBack()}
                    />
                ):(
                    <Button
                        text='Iniciar'
                        style={{
                            position: 'absolute',
                            bottom: 60,
                            right: 30,
                            width: 100,
                        }}
                        onPress={() => scrollToSlice(currentSliceIndex + 1)}
                    />
                )
            }

        </View>
    );
};

interface SlideItemProps {
    slide: Slide;
}

const SlideItem = ({ slide }: SlideItemProps) => {
    const { width } = useWindowDimensions();
    const { title, desc, img } = slide;
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white',
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center',
                width: width,
            }}
        >
            <Image
                source={img}
                style={{
                    width: width * 0.7,
                    height: width * 0.7,
                    resizeMode: 'center',
                    alignSelf: 'center',
                }}
            />
            <Text
                style={[
                    globalStyles.title,
                    {
                        color: colors.primary,
                    },
                ]}
            >{title}</Text>
            <Text
                style={{
                    color: colors.text,
                    marginTop: 20,
                }}
            >{desc}</Text>
        </View>
    );
};
