simple-css-tooltips
===================

Simple CSS Tooltips are … simple CSS only tooltips.

Single line tooltip:
```
<img src="path/to/foo.png" data-tt="Tooltip text" />
```

Contents of ```@data-tt``` preserve newlines, like ```pre```, and can be used to
produce multiline tooltips.

If you need to position the tooltip somewhere other than below (south of) the
element, use one of the classes ```.tt-e```, ```.tt-w```, ```.tt-n``` which 
correspond to east, west and north of the element respectively.

<a href="http://earnubs.github.io/simple-css-tooltips/">Simple Tooltips demo</a>.
