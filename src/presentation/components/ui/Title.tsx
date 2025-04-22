import { Text } from 'react-native';
import { colors, globalStyles } from '../../../config/theme/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
    text: string;
    safe?: boolean;
    white?: boolean;
}

export const Title = ({ text, safe = false, white = false }: Props) => { 
    const { top } = useSafeAreaInsets();
    return (
        <Text
            style={{
                ...globalStyles.title,
                color: white ? 'white' : colors.text,
                marginTop: safe ? top : 0,
                marginBottom: 10,
            }}
        >{text}</Text>
    );
};
