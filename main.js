var hotdog = {}

hotdog.line = function(str) {
  document.write("<span>" + str + "</span>")
}

hotdog.str = function(str,color) {
  if (color) {
    return "<font color=\"" + color + "\">" + str + "</font>"
  } else {
    return str
  }
}

// Syntax Highlighter
function token_char(str) {
  return hotdog.str(str,"#690")
}

function token_com(str) {
  return hotdog.str(str,"slategray")
}

function token_punc(str) {
  return hotdog.str(str,"#999")
}

function token_bool(str) {
  return hotdog.str(str,"#905")
}

function token_oper(str) {
  return hotdog.str(str,"#9a6e3a")
}

function token_key(str) {
  return hotdog.str(str,"#07a")
}

function token_classn(str) {
  return hotdog.str(str,"#DD4A68")
}

function token_var(str) {
  return hotdog.str(str,"#e90")
}
