/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

import React from 'react';
import { withTheme } from '../../../cn';
import Icon from '../..';
import { IconProps } from '../../icon';

class IconBank4924 extends React.PureComponent<IconProps> {
    render() {
        return (
            <Icon
                { ...this.props }
                name="bank-4924"
            />
        );
    }
}

class ThemedIconBank4924 extends IconBank4924 {}
(ThemedIconBank4924 as any) = withTheme(IconBank4924);
export default ThemedIconBank4924;
