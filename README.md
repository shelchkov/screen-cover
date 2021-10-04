# Screen-Cover

![npm](https://img.shields.io/npm/v/screen-cover)
[![Build status](https://ci.appveyor.com/api/projects/status/jhdt00h4xm893hus/branch/master?svg=true)](https://ci.appveyor.com/project/shelchkov/screen-cover/branch/master)

## How to use

1. Wrap you app with ScreenCoverProvider;
2. Get showCover function from context and run it.

```javascript
const screenCoverConfig = {
  coverTime: 500,
  uncoverTime: 4000,
  backgroundColor: "red"
}

...

<ScreenCoverProvider config={screenCoverConfig}>
  <App />
</ScreenCoverProvider>
```

Config is optional.

```javascript
const { showCover } = useScreenCover()
const handleClick = () => showCover(goToPageTwo, onEnd)
```

showCover receives 2 arguments: onCover function (will be run once whole page is covered) and onEnd function (runs after animation is finished):

### Class components

Use HOC withScreenCover which will pass showCover to props:
