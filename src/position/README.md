##Position

 1. Page Flow
 2. Z index
 3. L/R/T/B positions


###Examples

####Page Flow

relative, absolute, fixed, sticky
```html
<div class="relative">
  <div class="absolute">
  </div>
</div>
```

```html
<nav class="sticky">
  <ul>
    ...
  </ul>
</nav>
```

```html
<div class="fixed bottom col-12">This is stuck the bottom full screen</div>
```

####Z Index

**Warning**: Z-index does not play well with absolute/fixed/sticky positions.
Look into using transforms for most coordinate-based position manipulation

```html
<div class="zn1">
  <p>This is a negative level. Good for background images</p>
</div>
<div>
  <p>This is the 0-level</p>
</div>
<div class="z1">
  <p>This is at the bottom, but above 0</p>
</div>
<div class="z101">
  <p>This is the next level</p>
</div>
<div class="z1001">
  <p>This is the highest level</p>
</div>
```
