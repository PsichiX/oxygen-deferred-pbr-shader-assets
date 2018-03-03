# Oxygen Game Engine Deferred PBR Shader Assets

## Install
```bash
npm install --save oxygen-deferred-pbr-shader-assets
```

## Usage
**webpack.config.js** - *config.plugins* section:
```javascript
new PackWebpackPlugin([
  { input: [
    'static/assets',
    // include assets into generated assets.pack
    '<oxygen-deferred-pbr-shader-assets>/assets'
  ] }
])
```
