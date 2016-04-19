var XML = require('../')

var xmlStr = '<twob a="a" b="b"><b><c>c-text</c></b><b2><c>abc<![CDATA[cdata<>text]]></c></b2></twob>'

function main() {
	var xml = XML.parse(xmlStr)
	console.log(true === XML.isElement(xml))
	var twob = XML.find([xml], 'twob')
	console.log(true === XML.isElement(twob[0]))
	console.log(2 === XML.children(twob).length)
	console.log('twob' === XML.name(twob))
}

main()

