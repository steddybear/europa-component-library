/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs/react';

import demoContentPrimary from '@ecl/eu-specs-button/demo/data--primary';
import demoContentSecondary from '@ecl/eu-specs-button/demo/data--secondary';
import demoContentCall from '@ecl/eu-specs-button/demo/data--call';
import demoContentGhost from '@ecl/eu-specs-button/demo/data--ghost';
import demoContentSearch from '@ecl/eu-specs-button/demo/data--search';

import svgSprite from '@ecl/eu-resources/dist/icons.svg';
import Button from '../Button';
import './index.scss';

const icons = {
  none: '',
  arrow: 'Icon_Corner-arrow-right',
  external: 'Icon_External',
};

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('primary', () => {
    const buttonIcon = {
      iconPath: svgSprite,
      icon: select('Icon (sample)', icons, ''),
      size: 'xs',
    };

    return (
      <Button
        variant="primary"
        label={text('Label', demoContentPrimary.label)}
        type="submit"
        icon={buttonIcon}
      />
    );
  })
  .add('secondary', () => {
    const buttonIcon = {
      iconPath: svgSprite,
      icon: select('Icon (sample)', icons, ''),
      size: 'xs',
    };

    return (
      <Button
        variant="secondary"
        label={text('Label', demoContentSecondary.label)}
        type="button"
        icon={buttonIcon}
      />
    );
  })
  .add('call to action', () => {
    const buttonIcon = {
      iconPath: svgSprite,
      icon: select('Icon (sample)', icons, ''),
      size: 'xs',
    };

    return (
      <Button
        variant="call"
        label={text('Label', demoContentCall.label)}
        type="submit"
        icon={buttonIcon}
      />
    );
  })
  .add('ghost', () => {
    const buttonIcon = {
      iconPath: svgSprite,
      icon: select('Icon (sample)', icons, ''),
      size: 'xs',
    };

    return (
      <Button
        variant="ghost"
        label={text('Label', demoContentGhost.label)}
        type="button"
        icon={buttonIcon}
      />
    );
  })
  .add('search', () => {
    const buttonIcon = {
      iconPath: svgSprite,
      icon: select('Icon (sample)', icons, ''),
      size: 'xs',
    };

    return (
      <Button
        variant="search"
        label={text('Label', demoContentSearch.label)}
        type="button"
        icon={buttonIcon}
      />
    );
  });