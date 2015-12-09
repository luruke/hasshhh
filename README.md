# Hasshhh
Generate numbers starting from a string as seed.

Please note, using the same seed the result will always be the same.

# Example
Generate an RGBa color

```
var foo = new Hasshhh('my l337 str1ng');

var color = {
  r: parseInt(foo.getInRange(0, 255)),
  g: parseInt(foo.getInRange(0, 255)),
  b: parseInt(foo.getInRange(0, 255)),
  a: Math.round(foo.getInRange(0, 1) * 100) / 100
};
```

`color` is `{ r: 221, g: 247, b: 129, a: 0.15 }`
