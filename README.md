# React Image File Resizer
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Build Status](https://travis-ci.org/onurzorluer/react-image-file-resizer.svg?branch=master)](https://travis-ci.org/onurzorluer/react-image-file-resizer.svg?branch=master)

`react-image-file-resizer` is a react module that can rescaled local images.

- You can change image's width, height, format, rotation and quality.
- It returns of new image's base64 URI or Blob. The URI can be used as the source of an `<Image>` component.

## Setup

Install the package:
```
npm i react-image-file-resizer
```
or
```
yarn add react-image-file-resizer
```

## Usage

```javascript
import Resizer from 'react-image-file-resizer';

Resizer.imageFileResizer(
    file, //is the file of the new image that can now be uploaded...
    maxWidth, // is the maxWidth of the  new image
    maxHeight, // is the maxHeight of the  new image
    compressFormat, // is the compressFormat of the  new image
    quality, // is the quality of the new image
    rotation, // is the degree of clockwise rotation to apply to the image. 
    responseUriFunc,  // is the callBack function of the new image URI
    outputType,  // is the output type of the new image
    minWidth, // is the minWidth of the  new image
    minHeight, // is the minHeight of the  new image
    );
```

## Example

```javascript
import React, { Component } from 'react';
import Resizer from 'react-image-file-resizer';

class App extends Component {
    constructor(props) {
        super(props);
        this.fileChangedHandler = this.fileChangedHandler.bind(this);
    }

    fileChangedHandler(event) {
        var fileInput = false
        if(event.target.files[0]) {
            fileInput = true
        }
        if(fileInput) {
            Resizer.imageFileResizer(
                event.target.files[0],
                300,
                300,
                'JPEG',
                100,
                0,
                uri => {
                    console.log(uri)
                },
                'base64',
                200,
                200,
            );
        }
    }

    render() {
        return (
            <div className="App">
                <input type="file" onChange={this.fileChangedHandler}/>
            </div>
        );
    }
}

export default App;
```

Option | Description | Type | Required
------ | ----------- | ---- | --------
`file` | Path of image file | `object` | Yes
`maxWidth` | New image max width (ratio is preserved) | `number` | Yes
`maxHeight` | New image max height (ratio is preserved) | `number` | Yes
`compressFormat` | Can be either JPEG, PNG or WEBP. | `string` | Yes
`quality` | A number between 0 and 100. Used for the JPEG compression.(if no compress is needed, just set it to 100) | `number` | Yes
`rotation` | Degree of clockwise rotation to apply to the image. Rotation is limited to multiples of 90 degrees.(if no rotation is needed, just set it to 0) (0, 90, 180, 270, 360) | `number` | Yes
`responseUriFunc` | Callback function of URI. Returns URI of resized image's base64 format. ex: `uri => {console.log(uri)});` | `function` | Yes
`outputType` | Can be either base64 or blob.(Default type is base64) | `string` | No
`minWidth` | New image min width (ratio is preserved, defaults to null) | `number` | No
`minHeight` | New image min height (ratio is preserved, defaults to null) | `number` | No

## License

[MIT](https://opensource.org/licenses/mit-license.html)

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/all-contributors/all-contributors#emoji-key)):
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/AhmadMaleki"><img src="https://avatars2.githubusercontent.com/u/26637638?v=4" width="100px;" alt=""/><br /><sub><b>Ahmad Maleki</b></sub></a><br /><a href="https://github.com/Onur Zorluer/react-image-file-resizer/commits?author=AhmadMaleki" title="Code">💻</a> <a href="#maintenance-AhmadMaleki" title="Maintenance">🚧</a></td>
    <td align="center"><a href="http://www.vysnovsky.sk/"><img src="https://avatars1.githubusercontent.com/u/5657185?v=4" width="100px;" alt=""/><br /><sub><b>Martin Vyšňovský</b></sub></a><br /><a href="https://github.com/Onur Zorluer/react-image-file-resizer/commits?author=martinvysnovsky" title="Code">💻</a> <a href="#maintenance-martinvysnovsky" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/nadunc"><img src="https://avatars2.githubusercontent.com/u/22863180?v=4" width="100px;" alt=""/><br /><sub><b>Nadun Chamikara</b></sub></a><br /><a href="https://github.com/Onur Zorluer/react-image-file-resizer/commits?author=nadunc" title="Code">💻</a> <a href="#maintenance-nadunc" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://shubhamzanwar.github.io/"><img src="https://avatars0.githubusercontent.com/u/15626155?v=4" width="100px;" alt=""/><br /><sub><b>Shubham Zanwar</b></sub></a><br /><a href="https://github.com/Onur Zorluer/react-image-file-resizer/commits?author=shubhamzanwar" title="Documentation">📖</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/onderonur/"><img src="https://avatars0.githubusercontent.com/u/50423574?v=4" width="100px;" alt=""/><br /><sub><b>Onur Önder</b></sub></a><br /><a href="https://github.com/Onur Zorluer/react-image-file-resizer/commits?author=onderonur" title="Code">💻</a> <a href="#maintenance-onderonur" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Support

Any support is deeply appreciated. Buy me a coffee! 

You can send BTC to the following address: `1J64fmsnLjMoFYmfGC9yVTfjvqpnBx7qhC`
