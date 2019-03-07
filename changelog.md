# Changelog

All notable changes to lusa-pkg-email-templates will be documented in this file. 

## [3.2.1] - 2019-01-28 (CHG1372885)

 ### Changed
- Updated the `jenkins.yml`
  - include `checkmarx_warn_severity`, `snyk_fail_severity`, and `slack_channel`
- Updated the `package.json`
  - increment the version


## [3.1.0] 15 August 2018

### Process Changes
* [add **default**, **Veeva Approved**, and **Consumer** email template types](https://lillyusa.atlassian.net/browse/PPD-120)
	* notes
		* to use the shorthand, add "veeva" or "consumer" at the end of the build command
		* `npm run build pp-in-us-0001 branded-1 lilly,healthlink,ska,vae veeva`
		* `npm run build pp-in-us-0001 branded-1 lilly consumer`
	* files affected:
		* lib/build-options/ask-user.js
	* developed: true
	* confirmed: true
* [confirm **to, from, date** fields are parsed to data.json](https://lillyusa.atlassian.net/browse/PPD-115)
	* files afffected:
		* lib/finalize-html/parse-data.js
	* developed: true
	* confirmed: true
* [confirm build tool builds on windows machine](https://lillyusa.atlassian.net/browse/PPD-101)
	* developed: true
	* confirmed: true

### Critical Content Updates
* [update lilly footer to include "Do Not Reply" at the top](https://lillyusa.atlassian.net/browse/PPD-114)
	* files affected:
		* lib/configure-handlebars/variationEmails/lilly.hbs
	* developed: true
	* confirmed: true
* [remove "do not reply..." from AISE/VAE footer](https://lillyusa.atlassian.net/browse/PPD-123)
	* files affected:
		* lib/configure-handlebars/variationEmails/partials/aise.hbs
	* confirmed: true
* bold "do not reply" on lilly/healthlink/ska emails

### Non-Critical Content Updates

#### Consumer-Specific Updates
* [add consumer branded header](https://lillyusa.atlassian.net/browse/PPD-116)
	* files affected:
		* lib/configure-handlebars/templateContent/partials/cards/header-branded.json.hbs
	* notes
		* no changes applied - new audience statement unclear
	* developed: true
	* confirmed: true
* [add consumer "topics covered" default content](https://lillyusa.atlassian.net/browse/PPD-117)
* [add consumer "questions about brand" default content](https://lillyusa.atlassian.net/browse/PPD-118)
	* files affected:
		* lib/configure-handlebars/templateContent/partials/cards/content-card.json.hbs
	* developed: true
	* confirmed: true
* [add consumer audience statement default content](https://lillyusa.atlassian.net/browse/PPD-119)
	* files affected:
		* lib/configure-handlebars/templateContent/partials/cards/audience-statement.json.hbs
	* developed: true
	* confirmed: true

#### Veeva-Approve Specific Updates
* [remove 'to view in browser' from audience statement](https://lillyusa.atlassian.net/browse/PPD-121)
	* files affected:
		* lib/configure-handlebars/templateContent/partials/cards/audience-statement.json.hbs
		* (new file) lib/configure-handlebars/templateContent/isVAE.js
	* developed: true
	* confirmed: true
















	
* [rename all AISE assets to VAE assets](https://lillyusa.atlassian.net/browse/PPD-122)
	* files affected:
		* lib/configure-handlebars/variationEmails/partials/aise.hbs
		* lib/build-optoins/ask-user.js
		* lib/build-options/get-options-from-command.js
		* lib/build-options/get-options-from-template.js
		* lib/build-options/index.js
	* developed: true
	* confirmed: true
* [remove "do not reply..." from AISE/VAE footer](https://lillyusa.atlassian.net/browse/PPD-123)
	* (referenced above as critical update)
* [add non-default from address to VAE emails - Rep@lilly.com](https://lillyusa.atlassian.net/browse/PPD-124)
	* files affected:
		* lib/configure-handlebars/templateContent/partials/cards/data.json.hbs
	* confirmed: true
* [optimize VAE emails](https://lillyusa.atlassian.net/browse/PPD-125)
	* files affected:
		* (unknown)
	* confirmed: true





## [3.0.7] 19 June 2018
 * no major changes - only backend patch fix for windows failure

## [v3.0.6] 27 June 2018

* MAJOR UNIT TESTS AND REFACTORING

## [v3.0.5] 12 June 2018

### Changed

* src/handlebars/layout.hbs - put app media queries comment back in

## [v3.0.4] 07 June 2018

### Changed

* Superscript styling
	* notes: 
		* removed all sup styles, default to normal
		* removed MSO style exception in layout.hbs
	* confirmed: true

* image not loading in mobile view for iamge card
	* changed files:
		* lib/inliner.js
		* src/handlebars/partials/cards/image-card.html
	* notes: 
		* add closing comment in image-card
	* confirmed: true
	
* remove extra space above/below image links
	* files: 
		* lib/inliner.js
		* src/handlebars/partials/cards/image-card.html
		* (added) src/handlebars/helpers/hasSize.js
	* notes: 
		* left closing comment in MSO exception in inliner
		* added 'hasSize' helper to catch '0' and 'undefined' padding-top/bottom
	* confirmed: true

## [v3.0.3] 05 June 2018

### Changed
* build process removes comments properly now
* removed image exceptions for MSO in footer
* corrected alert footer content

### Added
* Alert HCP footer

## [3.0.2] 31 May 2018

### Added
* footers
	* variations object
* copies images from src to dist
* branded header 'large' attribute


### Changed
* Cards
	* audience-statement
		* if link is removed, top line will not be build
	* unbranded-header
		* make context-specific (hbs)
	* branded-header
		* simplify json structure
		* make context-specific (hbs)
	* image-card, element/image
		* add background class accessibility to card

### Removed
* image element partial
	* apply image-card instead
* 

### Build Process Changes
* refactor all lib/...js files to async/await
* refactor index.js to simplify build script
* refactor footers to 1) build base email, then 2) build with footer variations (simultaneously)

## [2.4.1] 25 April 2018

### Added
- 'disclaimer' and 'subtext' class (&lt;p&gt;)
- **branded header**
	- large size variations
- **lilly footer**
	- boehringer option
		- "lilly": { "boehringer":"&lt;true/false&gt;"}
- footers
	- AISE footer
	- "center" option for element	



## [2.4.0] 16 April 2018
### Critical Changes

- ALL FOOTERS
	- "1-800-LillyRx (1-800-545-5979)" is now bold
	- added space between &copy; and "Lilly USA" in disclaimer
	- opt out links now point to generic opt out 'center'
		- healthlink https://lhloo.myregistrationp.com/
		- lilly & aise https://lsc.myregistrationp.com/
		- ska https://lskaoo.myregistrationp.com/
	- 3rd party link(s) is(are) now underlined

- SKA footer
	- company name in first paraphraph => "SKA&A, an IQVIA company"
	- address changed to
		SK&amp;A, an IQVIA company
        2601 Main Street
		Suite 650
		Irvine, CA 92614

- HEALTHLINK FOOTER
	- address changed to
		HealthLink Dimensions, LLC
		6 Concourse Pkwy
		Suite 1000
		Atlanta, GA 30328

- Lilly footer
	- "If you do not wish to receive future emails from" => "If you do not want to receive future emails from"

### Added
- an option for no footer: "none":"true/false" attribute in footers
- humulin colors

### Changed
- fixed button center issue in outlook
- fixed ISI header style behavior in outlook
- fixed the "collapse" class for content-card
```
	{
			"content-card": {
				"class":"collapse",
				"content": [...]
		}
	}
```
- branded header large attributes are now accessible
	- "logo-large":"6", "links-large":"6"
- ALL DEFAULT ISI CONTENT
	- changed all headers from h1/h2 => h3
		- improves behavior in outlook 2013+


##  [2.3.2] - 2018-03-23
### Added
- A new field "displayName" to package.json file for the cirrus catalog

## [2.3.0] 20 March 2018
### Critical Changes
- ALL FOOTERS
	- "Eli Lilly & Company" => "Eli Lilly and Company"
- ALL STYLES
	- remove iphone special formatting on links and phone numbers


## [2.2.7] 19 March 2018
### Changed

### Added
- taltz ISI

## [2.2.6] 9 Feb 2018

### Changed
- Forteo ISI
	- include more space between bullet points
- Image HREF attribute
	- add href tag (optional still)

## [2.2.0] 26 Feb 2018

## Content Changes
- audience statement
	 - "health care" => "healthcare"
 - footers
 	- "Lilly-Rx" => "LillyRx"
 	- "SK&A a ..." => "SK&A, a ..."
 	- "&copy; Lilly USA, LLC" => "&copy;Lilly USA LLC"

#### Added
- Default ISI Content


## [2.1.4] 24 Feb 2018

### Added
- copy content.json => data.json in dist folder


### Changed
- update content.global.json.hbs to latest build tool version
- added variable-content


### Removed
- console log success on default ISI helper





## [2.1.3] 23 Feb 2018

### Added
- Cyramza ISI default content
- Forteo ISI WITH 4-24-DISCLAIMERS

### Changed
- set default forteo ISI to include disclaimers


## [2.1.2] 23 Feb 2018

### Changed
- forteo ISI updated content
- <nobr> => <span class="nobreak" or class="no-wrap">
- include href attribute in image as well as image-card





## [2.1.0]

### Breaking Changes
#### ISI
- additional padding added to ISI header
- margin-top increased on content headers

### Added
- $isi-header-color: colors the H1-H6 tags within the ISI, excluding the container header
- isi-card-forteo.json.hbs: record for content in forteo isi
- isi-card-forteo.hbs
- isi-card.default: renders pre-existing forteo footer, with zero flexibility
- helpers
	- isValidIsiOption.js
	- returnIsiName.js
- htmlElement shorthand

### Changed
- image and image-card fixed-width default value set to 568 to fill width 100%
- isi styles
	- header margin-top and margin-bottom
	- h1-h6 margin-top => 24px
- footers.brand is now preformatted html
- global styles
	- padding-top in content containers => 32px/24px
	
### Removed















## [2.0.4] 21-Feb-2018

### Breaking Changes
- button.inverted-padding updated to not affect button height
- remove horizontal padding from footers
- set vertical padding in content containers to default (24px, 16px)

### Changed
- default styles.scss
	- add background-color SASS variables to default styles.scss
	- add commented out colors

### Added
- settings.scss
	- $btn-padding-inverted
- image and image-card
	- add fixed-width and fixed-width-mobile


## [2.0.3] 2018-2-14

### Changed
- *Email Styles*
	- padding-bottom in containers from 10px => 24px
- build process
	- fix stylesheetBuilder.js to fix promise sync call
- file structure
	- move src/sass/partials/* => src/sass
	- rename src/sass/components => src/sass/elements
	- rename src/sass/elements/columns-card => two-column-card.scss
	- rename src/sass/elements/references-block => references-card.scss
	- rename unbranded-header.scss => header-unbranded.scss
- update sass styles to import new folder structure

### Added
- changelog.md
- *Styles*
	- .no-margin-top
	- .no-margin
	- .no-margin-bottom

### Removed
- *build process*
	- debug inkyBuilder to log skipped variations
- *Files*
	- src/handlebars
		- helpers
			- returnBodyCopyHTML.js
			- returnHasContent.js
			- returnImageGridLargeValue.js
			- returnLillyOptOutURL.js
			- returnNoPaddingClass.js
			- returnNoProtocolURL.js
			- returnOptOutHREF.js
			- returnSelectedConfigObject.js
			- returnSelectedFooterJSON.js
			- selectedFooter.js
		- layouts
			- index.html
		- partials/footers
			- emd-alert.hbs
	- src/sass
		- foundation/*
		- header.scss
		- responsive_image.scss
	- KNOWN_ISSUES.md
	- package-lock.json






## [2.0.2] 2018-2-13

### Added
- build processes
	- remove dist folder before new build/rebuild/dev
	- remove temp folder after build/rebuild
	- remove temp folder before dev/build/rebuild

### Changed
- *content structure*
	- element structure (h1-h6, image, button, etc) => "tagname":{...}

## [2.0.0] 2018-01-16

### Added
- npm build process
	- utilities
		- fileExplorer
		- printer
		- questionMaster
	- htmlBuilder
	- inkyBuilder
	- inliner
	- optionsBuilder
	- optionsValidator
	- stylesheetBuilder
	- templateBuilder
- partial cards
	- image (element)
	- image-card
	- button (element)

### Changed
- panini configuration to point to content/ instead of src/handlebars/default-config/
- move sass files to sass folder
- content.json element structure to include tag name in main json object
- rename partials to content-cards
	- reponsive-image => image-card
	- image element => image or img
	- image-grid => two-column-card
	- isi-with-black-box => isi-card
	- references-block => references-card
- update sass cards



### Removed
- build process gulpfiles
- test scripts
- sass/foundation files
- original content-blocks
	- responsive-image
	- dynamic-content-block
	- footer-basic
	- footer-emd-alert
	- header
	- hero-copy-block
	- hero-multi-column-block
	- her
	- image-grid
	- trulicity-content-block

