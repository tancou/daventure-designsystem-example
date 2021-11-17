import { setCompodocJson } from "@storybook/addon-docs/angular";
import { withCssResources } from '@storybook/addon-cssresources';

import indigoPink from '@angular/material/prebuilt-themes/indigo-pink.css'
import deeppurpleAmber from '@angular/material/prebuilt-themes/deeppurple-amber.css'
import pinkBluegrey from '@angular/material/prebuilt-themes/pink-bluegrey.css'
import purpleGreen from '@angular/material/prebuilt-themes/purple-green.css'

import docJson from "../documentation.json";
setCompodocJson(docJson);

export const decorators = [
  withCssResources
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  cssresources: [
    {
      id: `indigo-pink.css`,
      code: `<style>${indigoPink}</style>`,
      picked: true,
      hideCode: true,
    },
    {
      id: `deeppurple-amber.css`,
      code: `<style>${deeppurpleAmber}</style>`,
      picked: false,
      hideCode: true,
    },
    {
      id: `pink-bluegrey.css`,
      code: `<style>${pinkBluegrey}</style>`,
      picked: false,
      hideCode: true,
    },
    {
      id: `purple-green.css`,
      code: `<style>${purpleGreen}</style>`,
      picked: false,
      hideCode: true,
    },
  ],
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
}
