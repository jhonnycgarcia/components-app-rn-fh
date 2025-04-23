import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../config/theme/theme';
import Icon from '@react-native-vector-icons/ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
  name: string;
  icon: string;
  component: string;
  isFirst?: boolean;
  isLast?: boolean;
}

export const MenuItem = ({ name, icon, component, isFirst = false, isLast = false }: Props) => {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      onPress={() => navigation.navigate(component)}
    >
      <View
        style={{
          ...styles.container,
          backgroundColor: colors.background,
          ...(isFirst && { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10 }),
          ...(isLast && { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, paddingBottom: 10 }),
        }}
      >
        <Icon
          name={icon as any}
          size={25}
          style={{ marginRight: 10 }}
          color={colors.primary}
        />
        <Text style={{ color: colors.text }}>{name}</Text>
        <Icon
          name="chevron-forward-outline"
          size={25}
          color={colors.primary}
          style={{ marginLeft: 'auto' }}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
