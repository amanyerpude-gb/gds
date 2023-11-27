const StyleDictionary = require("style-dictionary");
const { registerTransforms } = require("@tokens-studio/sd-transforms");

registerTransforms(StyleDictionary, {
    excludeParentKeys: true,
});

const sd = StyleDictionary.extend("config.json");
sd.cleanAllPlatforms(); // optionally, cleanup files first..
sd.buildAllPlatforms();