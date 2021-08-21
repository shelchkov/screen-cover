# Screen-Cover

## How to use

1. Wrap you app with ScreenCoverProvider;
2. Get showCover function from context and run it:

```javascript
const { showCover } = useScreenCover()
```

showCover receives 2 arguments: onCover function (will be run once whole page is covered) and onEnd function (runs after animation is finished):

```javascript
const handleClick = showCover(onCover, onEnd)
```
