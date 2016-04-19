var _ = require('min-util')
var parser = require('min-parse')
// https://www.w3.org/TR/REC-xml/

//document element(node)

// start one node method
// never check type in one

var one = {}

one.children = function(node) {
	return node.children
}

one.parent = function(node) {
	return node.parentNode
}

one.attr = function(node, name) {
	return node.getAttribute(name)
}

one.attrs = function(node) {
	// [{name: 'name', value: 'value'}, {...}]
	return node.attributes
}

one.text = function(node) { // same as value
	return node.textContent
}

one.get = function(node, name) { // search direct son node
	var children = one.children(node)
	_.filter(children, function(node) {
		return name == one.name(node)
	})
}

one.find = function(node, name) { // search nested tag
	return node.getElementsByTagName(name)
}

one.name = function(node) {
	return node.tagName
}

// end one

// --------------

// node list method

function merge(arr) {
	return _.union.apply(null, arr)
}

exports.isElement = function(node) {
	if (node) {
		if (node.getElementsByTagName) {
			return true
		}
	}
	return false
}

exports.parse = parser.xml

exports.init = function(nodeList) {
	if (exports.isElement(nodeList)) {
		return [nodeList]
	}
	return nodeList
}

exports.parent = function(nodeList) {
	return _.map(nodeList, function(node) {
		return one.parent(node)
	})
}

// use first node
_.each('name attr attrs'.split(' '), function(key) {
	exports[key] = function() {
		var args = arguments
		var nodeList = _.first(args)
		var node = _.first(nodeList)
		if (node) {
			args[0] = node
			return one[key].apply(one, args)
		}
	}
})

// merge node
_.each('get children find'.split(' '), function(key) {
	exports[key] = function() {
		var args = arguments
		var nodeList = _.first(args)
		return merge(_.map(nodeList, function(node) {
			var arr = _.slice(args)
			arr[0] = node
			return one[key].apply(one, arr)
		}))	
	}
})

exports.text = function(nodeList) {
	return _.map(nodeList, function(node) {
		return one.text(node)
	}).join('')
}

