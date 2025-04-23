import { View } from 'react-native';
import { globalStyles } from '../../../config/theme/theme';
import { ScrollView } from 'react-native-gesture-handler';
import { MenuItem, Title } from '../../components';

const animationMenuItems = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const menuItems = [
  {
    name: 'Pull to refresh',
    icon: 'refresh-outline',
    component: 'PullToRefreshScreen',
  },
  {
    name: 'Section List',
    icon: 'list-outline',
    component: 'CustomSectionListScreen',
  },
  {
    name: 'Modal',
    icon: 'copy-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'download-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slides',
    icon: 'flower-outline',
    component: 'SlidesScreen',
  },
  {
    name: 'Themes',
    icon: 'flask-outline',
    component: 'ChangeThemeScreen',
  },
];

const uiMenuItems = [
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'TextInputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
];

export const HomeScreen = () => {
  return (
    <View style={[globalStyles.mainContainer]}>
      <View style={globalStyles.globalMargin}>
        <ScrollView>
          <Title text="HomeScreen" safe />
          {
            animationMenuItems.map(({ name, component, icon }, index) => (
              <MenuItem
                key={component}
                name={name}
                icon={icon}
                component={component}
                isFirst={index === 0}
                isLast={index === menuItems.length - 1}
              />
            ))
          }
          <View style={{ marginTop: 30 }} />
          {
            menuItems.map(({ name, component, icon }, index) => (
              <MenuItem
                key={component}
                name={name}
                icon={icon}
                component={component}
                isFirst={index === 0}
                isLast={index === menuItems.length - 1}
              />
            ))
          }
          <View style={{ marginTop: 30 }} />
          {
            uiMenuItems.map(({ name, component, icon }, index) => (
              <MenuItem
                key={component}
                name={name}
                icon={icon}
                component={component}
                isFirst={index === 0}
                isLast={index === menuItems.length - 1}
              />
            ))
          }
        </ScrollView>
      </View>
    </View>
  );
};
