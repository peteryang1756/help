/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'Hello',
  tagline: 'Hello World',
  organizationName: 'endiliey',
  projectName: 'hello',
  baseUrl: '/',
  url: 'https://docusaurus.io',
  favicon: 'img/docusaurus.ico',
  plugins: [
    {
      module: '@docusaurus/plugin-content-docs',
      options: {
        path: '../docs',
        sidebarPath: require.resolve('./sidebars.json'),
      },
    },
    {
      module: '@docusaurus/plugin-content-pages',
    },
  ],
};