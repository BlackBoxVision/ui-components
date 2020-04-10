import React from 'react';
import {storiesOf} from '@storybook/react';
import {ThemeProvider} from '@material-ui/core/styles';

import {useDarkMode} from '../src/hooks/useDarkMode';
import {ThemeSwitch} from '../src';

storiesOf('ThemeSwitch', module).add('Demo', () => {
    const [theme] = useDarkMode();
    return (
        <ThemeProvider theme={theme}>
            Hi! This is a theme story
            <ThemeSwitch/>
        </ThemeProvider>
    );
});
