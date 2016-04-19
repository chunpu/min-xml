var XML = require('../')

var xmlStr = '<twob a="a" b="b"><b><c>c-text</c></b><b2><c>abc<![CDATA[cdata<>text]]></c></b2></twob>'

function main() {
	var xml = XML.parse(xmlStr)
	console.log(true === XML.isElement(xml))

	var twob = XML.find([xml], 'twob')
	console.log(true === XML.isElement(twob[0]))
	console.log(2 === XML.children(twob).length)
	console.log(xml === XML.parent(twob)[0])

	console.log('twob' === XML.name(twob))

	console.log('a' === XML.attr(twob, 'a'))
	console.log('b' === XML.attr(twob, 'b'))

	console.log(2 === XML.attrs(twob).length)
	console.log(2 === XML.attrs(twob).length)

	console.log(0 === XML.get(twob, 'c').length)
	console.log(1 === XML.get(twob, 'b').length)

	console.log(2 === XML.find(twob, 'c').length)
	console.log(1 === XML.find(twob, 'b2').length)

	console.log('c-text' === XML.text(XML.get(XML.get(twob, 'b'), 'c')))

	var b2c = XML.get(XML.get(twob, 'b2'), 'c')
	console.log('abccdata<>text' === XML.text(b2c))

	var xmlList = [XML.find(twob, 'b')[0], XML.find(twob, 'b2')[0]]
	console.log(2 === XML.children(xmlList).length)
	console.log(1 === XML.parent(xmlList).length)
}

main()

