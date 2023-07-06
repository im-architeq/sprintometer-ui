import React from 'react';
import { PluginPage, PluginPageProps } from '@grafana/runtime';
import { TestIds } from '../../constants';
import {Environment } from '../Plugins';

/**
 * Properties
 */
interface Props extends PluginPageProps {}

/**
 * Development
 */
export const Development: React.FC<Props> = () => {
  return (
    <PluginPage>
      <div data-testid={TestIds.development.root}>
        <Environment />
      </div>
    </PluginPage>
  );
};
