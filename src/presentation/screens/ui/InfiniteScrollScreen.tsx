import { View, Text, FlatList, Image, ActivityIndicator } from 'react-native';
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
        <View style={{ backgroundColor: 'black' }}>
            <FlatList
                data={numbers}
                renderItem={({ item }) => <ListItem item={item} />}
                onEndReached={loadMore}
                onEndReachedThreshold={0.6}
                keyExtractor={(item) => item.toString()}
                ListFooterComponent={() => (
                    <View style={{ height: 100, justifyContent: 'center', alignItems: 'center' }}>
                        <ActivityIndicator
                            size={ 40 }
                            color={ colors.primary }
                        />
                    </View>
                )}
            />
        </View>
    );
};


interface ListItemProps {
    item: number;
}

const ListItem = ({ item }: ListItemProps) => {
    return (
        // <Text style={{
        //     height: 300,
        //     backgroundColor: colors.primary,
        //     color: 'white',
        //     fontSize: 30,
        // }}>{item}</Text>
        <Image
            source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
            style={{ width: '100%', height: 400 }}
        />
    );
};
