var Hasshhh = function(str) {
  if (typeof str !== 'string' || !str.length)
    return;

  this.seed = this.stringHash(str);
};

Hasshhh.prototype.getFloat = function() {
  return (Math.sin(this.seed++) * 10000) % 1
};

Hasshhh.prototype.getInRange = function(min, max) {
  return this.normalize(this.getFloat(), -1, 1, min, max);
};

Hasshhh.prototype.normalize = function(x, istart, istop, ostart, ostop) {
  return ostart + (ostop - ostart) * ((x - istart) / (istop - istart));
};

Hasshhh.prototype.stringHash = function(str) {
  var str = str.toString();
  var hash;

  for (var i = 0; i < str.length; i++) {
    hash = (((hash << 5) - hash) + str.charCodeAt(i)) & 0xFFFFFFFF;
  }

  return hash;
};

module.exports = Hasshhh;
