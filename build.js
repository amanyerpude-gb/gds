const StyleDictionary = require("style-dictionary");
const { registerTransforms, transforms } = require("@tokens-studio/sd-transforms");

registerTransforms(StyleDictionary, {
    expand: { composition: true, typography: true, border: true, shadow: true },
    excludeParentKeys: true,
});

StyleDictionary.registerTransformGroup({
    name: 'ios/tokens-studio',
    transforms: [
        ...transforms,
        // transforms that are inside ios transformGroup usually
        'attribute/cti',
        'name/cti/pascal',
        'color/UIColor',
        'content/objC/literal',
        'asset/objC/literal',
        'size/remToPt',
        'font/objC/literal'
    ],
});

StyleDictionary.registerTransformGroup({
    name: 'android/tokens-studio',
    transforms: [
        ...transforms,
        // transforms that are inside android transformGroup usually
        'attribute/cti',
        'name/cti/snake',
        'color/hex8android',
        'size/remToSp',
        'size/remToDp'
    ],
});

const sd = StyleDictionary.extend("config.json");
sd.cleanAllPlatforms(); // optionally, cleanup files first..
sd.buildAllPlatforms();