# Changelog

## Unreleased

* Changed
  * Set the hideRequired prop to be private
  * Set the isLabelHidden prop to be private

## 4.20.5 - (July 5, 2022)

* Changed
  * Minor dependency version bump

## 4.20.4 - (May 3, 2022)

* Changed
  * Minor dependency version bump

## 4.20.3 - (April 29, 2022)

* Changed
  * Minor dependency version bump

## 4.20.2 - (January 4, 2022)

* Changed
  * Minor dependency version bump

## 4.20.1 - (December 14, 2021)

* Changed
  * No longer assign tabIndex -1 to the error and help divs.
  * Migrate docs to terra-core-docs.

## 4.20.0 - (September 21, 2021)

* Changed
  * Updated styles to wrap long words.
  * Updated WDIO Screenshots due to webpack-config-terra sass upgrade.

## 4.19.0 - (August 25, 2021)

* Changed
  * Minor dependency version bump

## 4.18.0 - (June 22, 2021)

* Changed
  * Minor dependency version bump

## 4.17.0 - (April 13, 2021)

* Changed
  * Minor dependency version bump

## 4.16.0 - (April 6, 2021)

* Changed
  * Upgrade tests to terra-functional-testing and WebDriverIO v6
  * Removed unnecessary `wdio.conf.js` file
  * Updated Jest command

## 4.15.0 - (February 2, 2021)

* Changed
  * Minor dependency version bump

## 4.14.0 - (January 5, 2021)

* Fixed
 * Fixed broken links in documentation.

## 4.13.0 - (December 8, 2020)

* Changed
  * Update wdio tests to remove deprecated Terra.it helpers
  * Updated to be compatible with `react-intl` v2-v5

## 4.12.0 - (November 17, 2020)

* Changed
  * Minor dependency version bump

## 4.11.0 - (November 10, 2020)

* Changed
  * Updated `terra-dev-site` examples to use react hooks.

## 4.10.0 - (October 27, 2020)

* Changed
  * Minor dependency version bump


## 4.9.0 - (September 29, 2020)

* Fixed
  * Fixed voiceover issues in label-group.

## 4.8.0 - (August 6, 2020)

* Changed
  * Minor dependency version bump

## 4.7.0 - (August 4, 2020)

* Changed
  * Minor dependency version bump

## 4.6.0 - (July 29, 2020)

* Changed
  * Updated jest tests due to icon changes
  * Update changelog formatting

## 4.5.0 - (July 7, 2020)

* Changed
  * Minor dependency version bump

## 4.4.0 - (June 9, 2020)

* Changed
  * Updated jest due to icon theme context.
  * Minor file changes to comply with eslint rules
  * Update wdio test configuration to use root wdio config

## 4.3.0 - (May 19, 2020)

* Changed
  * Apply themes by context and directly include packaged themes.

## 4.2.0 - (April 28, 2020)

* Changed
  * Removed "View Component Source Code" from docs in favour of source code badge
* Added
  * Added clinical-lowlight-theme wdio screenshots

## 4.1.0 - (April 22, 2020)

* Changed
  * Updated documentation link in README

## 4.0.0 - (March 31, 2020)

* Breaking Change
  * `label` prop's type changed from node to string.

## 3.34.0 - (March 10, 2020)

* Changed
  * Minor dependency version bump

## 3.33.0 - (February 18, 2020)

* Added
  * Added clinical-lowlight-theme theming files

* Changed
  * Update docs to use mdx syntax.

## 3.32.0 - (January 28, 2020)

* Changed
  * Minor dependency version bump

## 3.31.0 - (January 7, 2020)

* Changed
  * Minor dependency version bump

## 3.30.0 - (December 3, 2019)

* Added
  * Added orion-fusion-theme and generated the respective reference wdio screenshots.

## 3.29.0 - (October 30, 2019)

* Fixed
  * Fixed lint warnings for multiple empty lines

## 3.28.0 - (October 15, 2019)

* Changed
  * Minor dependency version bump

## 3.27.0 - (October 14, 2019)

* Changed
  * Minor dependency version bump
  * Updated `isInvalid` prop description.

## 3.26.0 - (October 3, 2019)

* Changed
  * Minor dependency version bump

## 3.25.0 - (September 26, 2019)

* Added
  * `aria-live="assertive"` added to announce dynamic error messages

## 3.24.0 - (September 19, 2019)

* Changed
  * Removed `details` tag from doc-site.

* Added
  * Added en-CA translations.

## 3.23.0 - (September 6, 2019)

* Added
  * Props table markdown file import added to doc site page

* Changed
  * Added `outline: 0` to prevent focus outline when clicking on help or error text

## 3.22.0 - (September 3, 2019)

* Fixed
  * Fixed 'label hidden' accessibility error by using 'visually-hidden text styles' instead of 'display:none'.

## 3.21.0 - (August 21, 2019)

* Changed
  * Import for package version from package.json added to doc page
  * Switch from Object.assign to Object spread syntax.
  * Cleaned up imports in examples and test files

## 3.20.0 - (August 14, 2019)

* Changed
  * Components updated to use `FormattedMessage` to interface with `react-intl's` `intl` context.
  * updated package.json test scripts

* Fixed
  * Pass down `isInvalid` to children of Field

## 3.19.0 - (July 30, 2019)

* Changed
  * Minor dependency version bump

## 3.18.0 - (July 24, 2019)

* Changed
  * Minor dependency version bump

## 3.17.0 - (July 17, 2019)

* Changed
  * Minor dependency version bump

## 3.16.0 - (July 17, 2019)

* Changed
  * Minor dependency version bump

## 3.15.0 - (July 16, 2019)

* Added
  * Added documentation on required peerDependencies

## 3.14.0  - (July 11, 2019)

* Changed
  * Components updated to use `injectIntl` to interface with `react-intl's` `intl` context.
  * Update tests to use `Terra.describeViewports` for setting viewports and use `Terra.it.validatesElement`
  * Updated Docs around the requirement of terra-base and aggregate-translations.

## 3.13.0 - (June 28, 2019)

* Changed
  * Removed all inline styles from Dev-site components and implemented the same styles using external css.

## 3.12.0 - (June 18, 2019)

* Changed
  * Added functionality to pass required prop on form-field down to terra-form-input, terra-form-select, or terra-form-textarea when rendered as children in terra-form-field.

## 3.11.0 - (June 11, 2019)

* Removed
  * Removed node_modules from .npmignore

* Changed
  * Made required updates to consume terra-toolkit v5 and terra-dev-site v5

## 3.10.0 - (May 1, 2019)

* Changed
  * Minor dependency version bump

## 3.9.0 - (April 16, 2019)

* Changed
  * Minor dependency version bump
  * Updated missing htmlFor prop warning text to clarify what prop is causing the warning

## 3.8.0 - (April 9, 2019)

* Changed
  * Minor dependency version bump

## 3.7.0 - (April 2, 2019)

* Changed
  * Minor dependency version bump

## 3.6.0 - (March 26, 2019)

* Changed
  * Update react/react-dom peer-dependency to latest stable minor release

* Removed
  * Removed peer dependency on terra-base
  * Removed baseStyles import from terra-base

## 3.5.0 - (March 21, 2019)

* Added
  * Added logic to allow accessible mapping of error and help text messages when htmlFor prop is provided

* Changed
  * Update Jest tests to use terra-enzyme-intl

## 3.4.0 - (February 26, 2019)

* Changed
  * Minor dependency version bump

* Added
  * Added en-AU translations

## 3.3.0 - (February 12, 2019)

* Changed
  * Minor dependency version bump

## 3.2.0 - (February 5, 2019)

* Changed
  * Minor dependency version bump

## 3.1.0 - (January 26, 2019)

* Changed
  * Minor dependency version bump

## 3.0.0 - (January 22, 2019)

* Changed
  * Updated theme variables

## 2.34.0 - (January 22, 2019)

* Changed
  * Updated dependencies to fix major version bump issues

* Fixed
  * Added 'style' to prop-types validation

## 2.33.0 - (January 8, 2019)

* Changed
  * Minor dependency version bump

## 2.32.0 - (January 2, 2019)

* Changed
  * Minor dependency version bump

## 2.31.1 - (November 20, 2018)

* Changed
  * Patch dependency version bump

## 2.31.0 - (November 19, 2018)

* Changed
  * Minor dependency version bump

* Added
  * maxWidth prop added to Field component

## 2.30.0 - (November 13, 2018)

* Changed
  * Minor dependency version bump

## 2.29.0 - (November 9, 2018)

* Changed
  * Minor dependency version bump

## 2.28.0 - (October 24, 2018)

* Changed
  * Minor dependency version bump

## 2.27.0 - (October 16, 2018)

* Changed
  * Minor dependency version bump

## 2.26.0 - (October 8, 2018)

* Changed
  * Minor dependency version bump

## 2.25.0 - (September 25, 2018)

* Changed
  * Minor dependency version bump

## 2.24.0 - (September 25, 2018)

* Changed
  * Minor dependency version bump

## 2.25.1 - (September 6, 2018)

* Changed
  * Patch dependency version bump

## 2.25.0 - (September 5, 2018)

* Changed
  * Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2
  * Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2

## 2.24.0 - (September 4, 2018)

* Changed
  * Minor dependency version bump

## 2.23.0 - (August 29, 2018)

* Changed
  * Minor dependency version bump

## 2.22.0 - (August 8, 2018)

* Changed
  * Updated component internationalization error message

## 2.21.0 - (August 1, 2018)

* Changed
  * Minor dependency version bump

## 2.20.0 - (July 25, 2018)

* Added
  * Add sv and sv-SE translations

## 2.19.0 - (July 19, 2018)

* Changed
  * Add .module extension to SCSS file(s)

## 2.18.0 - (July 17, 2018)

* Changed
  * Minor dependency version bump
  * Formatting changes per eslint v4 update
  * Required props no longer set a default prop

## 2.17.0 - (July 10, 2018)

* Changed
  * Minor dependency version bump

## 2.16.0 - (June 28, 2018)

* Changed
  * Minor dependency version bump

* Added
  * Added change log to the documentation on terra-dev-site

## 2.15.0 - (June 22, 2018)

* Changed
  * Moved terra-base from dependency to peerDependency

## 2.14.0 - (June 12, 2018)

* Changed
  * Updated "test:jest" script to work on windows.
  * Changed nightwatch to webdriverIO tests
  * Remove Base wrapper from test examples. Terra-dev-site wraps all test examples in Base.

## 2.13.0 - (May 30, 2018)

* Changed
  * Updated structure to match terra-dev-site 1.0 and moved doc examples internal.

## 2.12.0 - (May 25, 2018)

* Changed
  * Minor dependency version bump

## 2.11.0 - (May 23, 2018)

* Changed
  * Minor dependency version bump

## 2.10.0 - (May 16, 2018)

* Changed
  * Minor dependency version bump

## 2.9.0 - (May 9, 2018)

* Changed
  * Minor dependency version bump

## 2.8.0 - (May 2, 2018)

* Changed
  * Minor dependency version bump

## 2.7.0 - (April 20, 2018)

* Changed
  * Updated doc for error prop type

## 2.6.0 - (April 20, 2018)

* Changed
  * Minor dependency version bump

## 2.5.0 - (April 15, 2018)

* Changed
  * Minor dependency version bump

## 2.4.0 - (April 5, 2018)

* Changed
  * Minor dependency version bump

## 2.3.0 - (March 30, 2018)

* Changed
  * Minor dependency version bump

## 2.2.0 - (March 6, 2018)

* Removed
  * Removed props-table script from package.json

## 2.1.0 - (February 26, 2018)

* Changed
  * Minor dependency version bump

## 2.0.1 - (February 13, 2018)

* Changed
  * Updated peerDependencies

## 2.0.0 - (February 12, 2018)

* Changed
  * Updated to use React 16

## 1.4.0 - (February 1, 2018)

* Changed
  * Minor dependency version bump

## 1.3.0 - (January 18, 2018)

* Changed
  * Minor dependency version bump

## 1.2.0 - (January 5, 2018)

* Changed
  * Minor dependency version bump

## 1.1.0 - (November 28, 2017)

* Changed
  * Minor dependency version bump

## 1.0.0 - (November 16, 2017)

Initial stable release
