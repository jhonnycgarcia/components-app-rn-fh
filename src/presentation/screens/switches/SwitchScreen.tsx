import { useState } from 'react';
import { Card, CustomSwitch, CustomView, Separator } from '../../components';

export const SwitchScreen = () => {
    const [state, setState] = useState({
        isActive: true,
        isHungry: false,
        isHappy: true,
    });

    const toggleSwitch = (key: keyof typeof state) => {
        setState({ ...state, [key]: !state[key] });
    };

    return (
        <CustomView style={{ marginTop: 100, paddingHorizontal: 10 }}>
            <Card>
                <CustomSwitch
                    isOn={state.isActive}
                    text="Activo"
                    onChange={() => toggleSwitch('isActive')}
                />
                <Separator />
                <CustomSwitch
                    isOn={state.isHungry}
                    text="Hambriento"
                    onChange={() => toggleSwitch('isHungry')}
                />
                <Separator />
                <CustomSwitch
                    isOn={state.isHappy}
                    text="Feliz"
                    onChange={() => toggleSwitch('isHappy')}
                />
            </Card>
        </CustomView>
    );
};
