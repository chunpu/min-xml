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
