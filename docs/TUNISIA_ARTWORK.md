# Tunisia destination artwork — revision 22

Generated on 2026-10-18 with the built-in `image_gen.imagegen` tool, one request per
destination, following the imagegen skill. The tool did not report a model version;
none is inferred. No CLI/API fallback or third-party reference images were used.
These are generated travel illustrations, not documentary photographs or exact
architectural reconstructions. Applicable account/tool terms govern usage; no
exclusive-rights claim is made.

## Saved assets

All files are in the project. The PNG masters are preserved under the ignored
`artifacts/scenes/` directory; the six JPEGs are bundled app assets. Originals also
remain in the tool's generated-images directory.

| Destination   | Levels  | Master                                                           | Background                                                     | Card strip                                                               | Sky     | Accent  |
| ------------- | ------- | ---------------------------------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------ | ------- | ------- |
| Carthage      | 251–255 | [51-carthage.png](../artifacts/scenes/51-carthage.png)           | [carthage.jpg](../mobile/assets/scenes/carthage.jpg)           | [carthage-band.jpg](../mobile/assets/scenes/carthage-band.jpg)           | #999DC2 | #6A573C |
| Sidi Bou Said | 256–260 | [52-sidi-bou-said.png](../artifacts/scenes/52-sidi-bou-said.png) | [sidi-bou-said.jpg](../mobile/assets/scenes/sidi-bou-said.jpg) | [sidi-bou-said-band.jpg](../mobile/assets/scenes/sidi-bou-said-band.jpg) | #86ADD7 | #215C8F |
| El Jem        | 261–265 | [53-el-jem.png](../artifacts/scenes/53-el-jem.png)               | [el-jem.jpg](../mobile/assets/scenes/el-jem.jpg)               | [el-jem-band.jpg](../mobile/assets/scenes/el-jem-band.jpg)               | #A5A0B7 | #846038 |

## Export and visual review

Each portrait is 1024×1536. `scripts/build-scenes.py` creates quality-80 JPEG
backgrounds and quality-78 card crops without modifying existing assets. Crops
use 46–72% of height for Carthage, 59–85% for Sidi Bou Said, and 54–80% for El Jem.
The strip dimensions are 1024×399 or 1024×400 due to integer rounding.

Full portraits and 350×112 card previews were visually inspected. Carthage shows
coastal ruins and columns; its narrow card focuses on the ruins and sea and cuts
the tall foreground column. Sidi Bou Said shows white walls, blue doors and
bougainvillea. El Jem shows a surviving amphitheatre in an inland setting; its crop
was adjusted upward to preserve the top arches in the card. There is no text,
watermark or UI baked into the images. The portraits leave broad sky areas for
puzzle overlays. These checks are static asset review, not native-device testing.

The assets are registered in `mobile/src/theme/scenes.ts`; Tunisia and its three
stops are registered in `mobile/src/theme/journey.ts`. Captions and explicitly
owner-approved facts are in `mobile/src/content/destinations.ts`; sources and
approval are recorded in [PLACE_FACTS.md](PLACE_FACTS.md).

## Bundle validation

`npx expo export --platform ios` passed on 2026-10-18 with all six Tunisia assets
listed in the output. Full application checks also passed (258 tests in 33 suites).
The export log is `artifacts/journey-v22/ios-export.log`. No native-device test or
TestFlight upload was performed.

## Exact generation prompts

### carthage

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft photographic architectural detail with atmospheric brushwork, luminous Mediterranean haze, rich but restrained colors. Composition: upper 55–58 percent quiet softly graded middle-tone sky with faint clouds, landmark concentrated below this, important features within central 80 percent. Horizon near 60 percent. Calm background readable behind game tiles. No lettering, no labels, no watermark, no UI, no people or cars, no signs. Subject: Carthage, Tunisia today, coastal archaeological ruins with weathered sandstone columns and low ancient stone foundations beside the blue Mediterranean. Recognizable open-air coastal ruins, not a fictional reconstructed temple. Warm late-afternoon ochre stone, muted turquoise water, lavender-blue sky; several slender surviving columns anchor the lower half. An inviting quiet view across ruins toward the sea.
```

### sidi-bou-said

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft photographic architectural detail with atmospheric brushwork, luminous Mediterranean haze, rich but restrained colors. Composition: upper 55–58 percent quiet softly graded middle-tone sky with faint clouds, landmark concentrated below this, important features within central 80 percent. Horizon near 60 percent. Calm background readable behind game tiles. No lettering, no labels, no watermark, no UI, no people or cars, no signs. Subject: Sidi Bou Said, Tunisia, a whitewashed hillside village overlooking deep blue Mediterranean water. White cubic houses, vivid cobalt-blue wooden doors and window shutters, a modest curved lane and a small touch of pink bougainvillea. Architecture begins below the broad quiet sky; keep some sea visible beyond the white roofs. Warm sunlight and soft shadows, elegant coastal atmosphere. No invented monumental landmarks.
```

### el-jem

```text
Use case: stylized-concept. Asset type: premium mobile Georgian crossword journey background. Create a serene painterly travel illustration, portrait 1024x1536, 2:3. Soft photographic architectural detail with atmospheric brushwork, luminous Mediterranean haze, rich but restrained colors. Composition: upper 55–58 percent quiet softly graded middle-tone sky with faint clouds, landmark concentrated below this, important features within central 80 percent. Horizon near 60 percent. Calm background readable behind game tiles. No lettering, no labels, no watermark, no UI, no people or cars, no signs. Subject: El Jem, Tunisia, the surviving ancient Roman amphitheatre seen from outside at a slight angle: massive oval honey-gold stone walls with three tiers of arched openings and authentic broken edges. Show most of its recognizable broad facade across the lower third, surrounded by quiet sandy ground and distant low inland town. This is inland: no sea, no river. Golden late afternoon light, soft dusty mauve-blue sky, calm monumental scale.
```
