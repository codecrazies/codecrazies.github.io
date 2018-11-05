var hotdog = {};

// Write function
hotdog.write = function(str,color) {
  if(color) {
    document.write("<font color=\"" + color + "\">" + str + "</font>")
  } else {
    document.write(str)
  }
}

// Wrap function
hotdog.wrap = function(inner) {
  document.write("<span>" + inner + "</span>")
}

// Str function
hotdog.str = function(str,color) {
  if(color) {
    return "<font color=\"" + color + "\">" + str + "</font>"
  } else {
    return str
  }
}

// Spawn function
hotdog.spawn = function(tag,attr,parent) {
  var t = document.createElement(tag)
  
  Object.keys(attr).forEach(function(at) {
    t.setAttribute(at,attr[at])
  });
  parent.appendChild(t)
}

// Syntax Highlighter
hotdog.sh = {}
hotdog.sh.comment = function(str) {
  return hotdog.str(str,"slategray")
}
hotdog.sh.char = function(str) {
  return hotdog.str(str,"#690")
}
hotdog.sh.puncuation = function(str) {
  return hotdog.str(str,"#999")
}
hotdog.sh.bool = function(str) {
  return hotdog.str(str,"#905")
}
hotdog.sh.operator = function(str) {
  return hotdog.str(str,"#9a6e3a")
}
hotdog.sh.keyword = function(str) {
  return hotdog.str(str,"#07a")
}
hotdog.sh.classname = function(str) {
  return hotdog.str(str,"#DD4A68")
}
hotdog.sh.variable = function(str) {
  return hotdog.str(str,"#e90")
}
