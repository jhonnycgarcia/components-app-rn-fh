import { View, Text, FlatList } from 'react-native';
import { useState } from 'react';
import { CustomView, Title } from '../../components';
import { colors } from '../../../config/theme/theme';

export const InfiniteScrollScreen = () => {

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const loadMore = () => {
        const newArray = Array.from({ length: 5 }, (_, index) => numbers.length + index + 1);
        setTimeout(() => {
            setNumbers([...numbers, ...newArray]);
        }, 3000);
    };

    return (
        <CustomView>
            <Title text="InfiniteScrollScreen" safe />

            <FlatList
                data={numbers}
                renderItem={({ item }) => <Text style={{
                    height: 300,
                    backgroundColor: colors.primary,
                    color: 'white',
                    fontSize: 30,
                }}>{item}</Text>}
                onEndReached={loadMore}
                onEndReachedThreshold={0.6}
                keyExtractor={(item) => item.toString()}
            />
        </CustomView>
    );
};
