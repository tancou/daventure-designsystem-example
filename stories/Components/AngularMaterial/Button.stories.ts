import {Meta, Story} from '@storybook/angular/types-6-0';
import {MatButtonModule} from '@angular/material/button';

export default {
  title: 'Components/Angular Material/Button',
  component: MatButtonModule,
} as Meta;

const Template: Story<MatButtonModule> = (args: MatButtonModule) => ({
  props: args,
});

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Basic.args = {
  // primary: true,
  // label: 'Button',
};

// export const Primary = () => ({
//   props: {
//     label: 'Button',
//   },
// });
//
// Primary.storyName = 'I am the primary';
