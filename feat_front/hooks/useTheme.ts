import { useColorScheme } from 'react-native';
import { StyleSheet } from 'react-native';

export const useTheme = () => {
    const colorScheme = useColorScheme();

    const themeTextStyle = colorScheme === 'light' ? styles.lightThemeText : styles.darkThemeText;
    const themeContainerStyle = colorScheme === 'light' ? styles.lightContainer : styles.darkContainer;
    const themeBorderColor = colorScheme === 'light' ? '#000000' : '#b3b3b3';
    const themeBackgroundColorBtn = colorScheme === 'light' ? styles.lightBgColorBtn : styles.darkBgColorBtn ;
    const themeButtonTextColor = colorScheme === 'light' ? styles.lightButtonTextColor : styles.darkButtonTextColor;

    return {
        colorScheme,
        themeTextStyle,
        themeContainerStyle,
        themeBorderColor,
        themeBackgroundColorBtn,
        themeButtonTextColor
    };
};

const styles = StyleSheet.create({
    lightContainer: {
        backgroundColor: '#f4f2ee',
    },
    darkContainer: {
        backgroundColor: '#0d0d0d',
    },
    lightThemeText: {
        color: '#242c40',
    },
    darkThemeText: {
        color: '#f4f2ee',
    },
    lightBgColorBtn: {
        backgroundColor: "black"
    },
    darkBgColorBtn: {
        backgroundColor: "white"
    },
    lightButtonTextColor: {
        color: 'white',
    },
    darkButtonTextColor: {
        color: 'black',
    }
});