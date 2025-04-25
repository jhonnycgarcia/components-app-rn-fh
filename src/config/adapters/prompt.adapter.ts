import prompt from 'react-native-prompt-android';

interface Options {
    title: string;
    subTitle?: string;
    buttons: PromptButton[];
    propType?: 'secure-text' | 'plain-text' | 'default';
    placeholder?: string;
    defaultValue?: string;
}

interface PromptButton {
    text: string;
    onPress: () => void;
    style?: 'cancel' | 'default' | 'destructive' | undefined;
}

export const showPrompt = ({
    title,
    subTitle,
    buttons,
    propType = 'plain-text',
    placeholder,
    defaultValue,
}: Options) => {
    return prompt(
        title,
        subTitle,
        buttons,
        {
            type: propType,
            cancelable: false,
            defaultValue: defaultValue,
            placeholder: placeholder,
        }
    );
};
