import { moduleMetadata } from '@storybook/angular';
import {Meta, Story} from '@storybook/angular/types-6-0';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { SimpleLayoutComponent, SimpleLayoutModule } from "ngx-daventure/layout/simple-layout";

export default {
  title: 'Components/Daventure/Layout/SimpleLayout',
  component: SimpleLayoutComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        SimpleLayoutModule
      ]
    })
  ],
  args: {
    rounded: false,
  },
  argTypes: {
    rounded: {
      description: 'Whether the corners are rounded.',
      defaultValue: false
    },
  },
  parameters: {
    controls: { expanded: true }
  }
} as Meta;

export const Default: Story<SimpleLayoutComponent> = (args) => ({
  template: `
  <dav-simple-layout
    [rounded]="rounded"
    >The SimpleLayout component works !</dav-simple-layout>
  `,
  props: args
});
