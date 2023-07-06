import React from 'react';
import { AppPluginMeta, PluginConfigPageProps } from '@grafana/data';
import { FieldSet } from '@grafana/ui';
import { AppInfo, TestIds } from '../../constants';
import { AppSettings } from '../../types';

/**
 * Page Properties
 */
interface Props extends PluginConfigPageProps<AppPluginMeta<AppSettings>> {}

/**
 * Config component
 */
export const Config: React.FC<Props> = () => {
  return (
    <FieldSet data-testid={TestIds.config.root}>
      <h2>{AppInfo.name}</h2>
      <p>
        The Sprintometer UI App includes Docker image and App plugin.
      </p>
    </FieldSet>
  );
};
