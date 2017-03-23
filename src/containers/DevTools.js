import React from 'react';
import {createDevTools} from 'redux-devtools';

import DockMonitor from 'redux-devtools-dock-monitor';
import FilterableLogMonitor from 'redux-devtools-filterable-log-monitor';

const DevTools = createDevTools(
    <DockMonitor defaultIsVisible={false}
                 toggleVisibilityKey="alt-r"
                 changePositionKey="ctrl-alt-r"
                 changeMonitorKey="ctrl-m"
                 defaultSize={0.22}>
        <FilterableLogMonitor/>
    </DockMonitor>
);

export default DevTools;
