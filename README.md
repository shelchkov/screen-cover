# Screen-Cover

![npm](https://img.shields.io/npm/v/screen-cover)
[![Build status](https://ci.appveyor.com/api/projects/status/jhdt00h4xm893hus/branch/master?svg=true)](https://ci.appveyor.com/project/shelchkov/screen-cover/branch/master)

## How to use

1. Wrap you app with ScreenCoverProvider;
2. Get showCover function from context and run it.

```javascript
<ScreenCoverProvider>
  <App />
</ScreenCoverProvider>
```

```javascript
const { showCover } = useScreenCover()
const handleClick = () => showCover(goToPageTwo, onEnd)
```

showCover receives onCover function (will be run once whole page is covered) and onEnd function (runs after animation is finished).

### Class components

Use HOC withScreenCover which will pass showCover to props.

## Customisations

You can pass config to ScreenCoverProvider:

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

All config properties are optional. You can also pass config to showCover to overwrite global config for selected call:

```javascript
const showGreenCover = () => showCover(goToPageThree, undefined, { backgroundColor: "aquamarine" })
```
