min-xml
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/min-xml.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-xml
[downloads-image]: http://img.shields.io/npm/dm/min-xml.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-xml
[david-image]: http://img.shields.io/david/chunpu/min-xml.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/min-xml


simple xml api

Installation
---

```sh
npm i min-xml
```

API
---

### xml list api

below always accept xml list as first argument, because xml children is always an array

- `XML.name(xmlList)` return first xml name
- `XML.attr(xmlList, 'name')` return first xml attr value in name
- `XML.attrs(xmlList)` return first xml attributes, in `[{name: 'name', value: 'value'}]`

- `XML.get(xmlList, 'name')` search direct children by name
- `XML.find(xmlList, 'name')` search nested children by name
- `XML.children(xmlList)` return children of all xmlList
- `XML.parent(xmlList)` return parent of all xmlList

- `XML.text(xmlList)` return value in all xml list, and join them by ''


### other xml api

- `XML.parse(str)` parse xml string
- `XML.init(xmlList)` return xmlList, if get xml, still return xmlList
- `XML.isElement(xml)` return true if xml is xml

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/min-xml.svg?style=flat-square
[license-url]: #
