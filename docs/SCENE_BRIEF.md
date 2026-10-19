# Georgian scene backgrounds for Asobana: image brief

Create 10 relaxing, painterly background illustrations of Georgian places, one per game chapter. They replace the plain blue background behind the crossword and letter wheel. The mood is calm, warm and quiet, like a postcard you would want to sit inside.

> **For Codex:** only generate the images (for example with an image-generation tool or the OpenAI Images API, if you have one) and save them as described under "Delivery". Do not change app code, theme or components. Claude integrates the images into the UI.
> **If no image tool is available,** paste the shared style block plus one scene into ChatGPT (image generation), Midjourney or similar, once per scene.

## Shared style (prepend to every scene prompt)

> Serene painterly digital illustration of a real place in Georgia (the country in the Caucasus), soft gradients, gentle atmospheric haze, warm golden-hour or dawn light, calm and relaxing mood, slightly stylized like a premium mobile puzzle game background, rich but soft colors, no harsh contrast, no text, no letters, no logos, no watermark, no borders, no UI elements, no people in the foreground, no modern cars or signage. Vertical portrait composition, 9:19.5 aspect ratio.

## Composition rules (important: the game UI sits on top)

The image is shown full screen on a phone in portrait. The game draws on top of it:

| Height of the image | What sits on top                                                     | What the image should have there                                                                                                                                                                     |
| ------------------- | -------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Top 0–10%           | Status bar, back button, level title, coin counter                   | Plain sky                                                                                                                                                                                            |
| 10–50%              | Crossword board (ivory tiles with gold edges)                        | **Calm sky only**: soft clouds, gentle gradient, no landmarks, no strong lines, no bright spots. Mid-tone, not near-white (dusk blue, lavender, soft teal or warm apricot), so ivory tiles stand out |
| 50–68%              | Gap above the wheel                                                  | The landmark and horizon: the most interesting detail goes here                                                                                                                                      |
| 68–100%             | Letter wheel (an opaque ivory disc about 66% of the width, centered) | Foreground scenery: hills, water, trees, roofs. It will be mostly hidden in the middle, so put visual interest at the left and right edges                                                           |

- Put the main landmark in the **left or right third**, rising to about 45–55% of the height (as the Eiffel Tower does in the reference), never in the center top.
- The horizon sits at about 60–65% of the height.
- Keep everything important inside the central 80% of the width. Tablets crop the sides and top.
- The images must feel like one set: same painting style, same softness, similar haze. The time of day varies.

## The 10 scenes

| File (chapter id)           | Scene prompt (after the shared style)                                                                                                                                                                                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `weather.png` (chapter 1)   | **Kazbegi at sunrise.** Gergeti Trinity Church, a small stone church on a green hilltop in the right third, with snow-capped Mount Kazbek softly hazy behind it. Mist in the valley below, peach and pale-gold sky fading to soft blue at the top.                                           |
| `animals.png` (chapter 2)   | **Tusheti morning.** Old stone defensive towers of Omalo on a grassy ridge in the left third, layered blue-green mountain ridges disappearing into mist, a distant flock of sheep as tiny pale dots on the slope, cool clear morning sky with thin clouds.                                   |
| `family.png` (chapter 3)    | **Old Tbilisi at golden hour.** Colorful carved wooden balconies of old houses in the lower left, the Narikala fortress walls on the hill at the right, the Mtkvari river below, brick domes of the Abanotubani sulfur baths, warm window lights starting to glow, apricot and lavender sky. |
| `body.png` (chapter 4)      | **Martvili Canyon.** An emerald-green river flowing between mossy limestone canyon walls on both sides, a small gentle waterfall, ferns and overhanging trees, soft light rays through leaves, teal-green and cream palette, the top of the image is open soft sky between the canyon edges. |
| `plants.png` (chapter 5)    | **Kakheti vineyards.** Rows of grapevines in the Alazani valley in the foreground, the terracotta roofs and old town walls of Sighnaghi on a hill in the left third, the long Caucasus range on the horizon, amber late-afternoon light, honey and dusty-rose sky.                           |
| `landscape.png` (chapter 6) | **Svaneti, Ushguli.** Medieval Svan stone towers clustered in the right third, an alpine meadow with wildflowers in front, the glacier of Shkhara mountain softly in the distance, crisp morning light, pale blue sky with soft clouds.                                                      |
| `food.png` (chapter 7)      | **Mtskheta.** Jvari Monastery on a clifftop in the left third, overlooking the meeting of the turquoise Aragvi river and the darker Mtkvari river below, cypress trees, warm late-morning haze, soft blue-gold sky.                                                                          |
| `home.png` (chapter 8)      | **Ananuri in autumn.** Ananuri fortress with its church and stone towers on the shore in the right third, the still turquoise water of the Zhinvali reservoir reflecting it, hills of orange and golden autumn forest, soft overcast light, misty lilac sky.                                 |
| `numbers.png` (chapter 9)   | **Vardzia at sunset.** The cave monastery carved into a tall golden cliff in the left third, the Mtkvari river winding below, small swallows in the air, warm rose-orange sunset sky fading to violet at the top.                                                                            |
| `music.png` (chapter 10)    | **Black Sea coast of Adjara at dusk.** A calm sea with gentle waves and a long shimmering sun reflection, green tea-plantation hills and a small white lighthouse in the right third, pink-violet and peach sky with soft clouds, very peaceful.                                             |

## Delivery

- **Size:** with the OpenAI Images API, use `1024x1536`. With other tools, use the tallest portrait size available (ideally 1290 × 2796). Never stretch.
- **Format:** PNG masters. Claude will compress them to app-sized files of about 300–500 KB each.
- **Location:** `artifacts/scenes/<chapter id>.png`, using the file names in the table above. `artifacts/` is git-ignored, so masters don't bloat the repo. Claude moves the compressed versions into the app.
- **Provenance:** add `artifacts/scenes/PROVENANCE.md` listing the tool and model, the date, and the exact prompt used for each image. Note whether the tool's terms allow commercial use in an App Store app. Do not use stock photos or other people's artwork as inputs.
- **Optional:** two or three variants of each scene, so the best one can be picked.

## Ready-to-use prompts (one request per image)

For the OpenAI Images API, ChatGPT, or any other image tool, send each block below as its own request. Settings for the API:

- `size`: `1024x1536` (the largest portrait size; phones crop the sides, and the prompts already allow for that)
- `quality`: `high`
- `n`: 2 or 3 variants per scene, so the best one can be picked
- Save the result as the file name shown, under `artifacts/scenes/`

### 1. `weather.png`

```text
Serene painterly digital illustration of Kazbegi at sunrise in Georgia, the country in the Caucasus. Calm, relaxing mood, soft gradients, gentle atmospheric haze, rich but soft colors, slightly stylized like a premium mobile puzzle game background. Portrait composition: the upper half of the image is calm open sky only (peach and pale gold fading to soft blue at the top), mid-tone rather than near-white, with soft clouds and no landmarks, strong lines or bright spots. The horizon sits about 60–65% of the way down. Gergeti Trinity Church, a small stone church on a green hilltop, stands slightly right of center, with snow-capped Mount Kazbek softly hazy behind it, rising to about halfway up the image. The bottom third is soft foreground scenery (misty valley and green slopes). Keep all important details within the central 70% of the width, because the outer edges will be cropped. No text, no letters, no logos, no watermark, no borders, no people in the foreground, no modern cars or signage.
```

### 2. `animals.png`

```text
Serene painterly digital illustration of Tusheti in the morning in Georgia, the country in the Caucasus. Calm, relaxing mood, soft gradients, gentle atmospheric haze, rich but soft colors, slightly stylized like a premium mobile puzzle game background. Portrait composition: the upper half of the image is calm open sky only (cool clear pale blue with thin clouds), mid-tone rather than near-white, with soft clouds and no landmarks, strong lines or bright spots. The horizon sits about 60–65% of the way down. Old stone defensive towers of Omalo stand on a grassy ridge slightly left of center, rising to about halfway up the image, with layered blue-green mountain ridges fading into mist. The bottom third is soft foreground scenery (grassy slopes with a distant flock of sheep as tiny pale dots). Keep all important details within the central 70% of the width, because the outer edges will be cropped. No text, no letters, no logos, no watermark, no borders, no people in the foreground, no modern cars or signage.
```

### 3. `family.png`

```text
Serene painterly digital illustration of the old town of Tbilisi at golden hour in Georgia, the country in the Caucasus. Calm, relaxing mood, soft gradients, gentle atmospheric haze, rich but soft colors, slightly stylized like a premium mobile puzzle game background. Portrait composition: the upper half of the image is calm open sky only (apricot fading to soft lavender), mid-tone rather than near-white, with soft clouds and no landmarks, strong lines or bright spots. The horizon sits about 60–65% of the way down. The Narikala fortress walls on a hill stand slightly right of center, rising to about halfway up the image, above the brick domes of the Abanotubani sulfur baths and the Mtkvari river. The bottom third is soft foreground scenery (colorful carved wooden balconies of old houses with warm window lights starting to glow). Keep all important details within the central 70% of the width, because the outer edges will be cropped. No text, no letters, no logos, no watermark, no borders, no people in the foreground, no modern cars or signage.
```

### 4. `body.png`

```text
Serene painterly digital illustration of Martvili Canyon in Georgia, the country in the Caucasus. Calm, relaxing mood, soft gradients, gentle atmospheric haze, rich but soft colors, slightly stylized like a premium mobile puzzle game background. Portrait composition: the upper half of the image is calm open sky only (soft cream and pale teal, open between the canyon edges), mid-tone rather than near-white, with soft clouds and no landmarks, strong lines or bright spots. The horizon sits about 60–65% of the way down. Mossy limestone canyon walls frame both sides, and a small gentle waterfall falls slightly left of center into the river. The bottom third is soft foreground scenery (an emerald-green river with ferns and soft light rays through overhanging leaves). Keep all important details within the central 70% of the width, because the outer edges will be cropped. No text, no letters, no logos, no watermark, no borders, no people in the foreground, no modern cars or signage.
```

### 5. `plants.png`

```text
Serene painterly digital illustration of Kakheti and the Alazani valley in late afternoon in Georgia, the country in the Caucasus. Calm, relaxing mood, soft gradients, gentle atmospheric haze, rich but soft colors, slightly stylized like a premium mobile puzzle game background. Portrait composition: the upper half of the image is calm open sky only (honey fading to dusty rose), mid-tone rather than near-white, with soft clouds and no landmarks, strong lines or bright spots. The horizon sits about 60–65% of the way down. The terracotta roofs and old town walls of Sighnaghi on a hill stand slightly left of center, rising to about halfway up the image, with the long Caucasus range on the horizon. The bottom third is soft foreground scenery (rows of grapevines in amber light). Keep all important details within the central 70% of the width, because the outer edges will be cropped. No text, no letters, no logos, no watermark, no borders, no people in the foreground, no modern cars or signage.
```

### 6. `landscape.png`

```text
Serene painterly digital illustration of Ushguli in Svaneti in the morning in Georgia, the country in the Caucasus. Calm, relaxing mood, soft gradients, gentle atmospheric haze, rich but soft colors, slightly stylized like a premium mobile puzzle game background. Portrait composition: the upper half of the image is calm open sky only (pale blue with soft white clouds), mid-tone rather than near-white, with soft clouds and no landmarks, strong lines or bright spots. The horizon sits about 60–65% of the way down. A cluster of medieval Svan stone towers stands slightly right of center, rising to about halfway up the image, with the glacier of Shkhara mountain softly in the distance. The bottom third is soft foreground scenery (an alpine meadow with wildflowers). Keep all important details within the central 70% of the width, because the outer edges will be cropped. No text, no letters, no logos, no watermark, no borders, no people in the foreground, no modern cars or signage.
```

### 7. `food.png`

```text
Serene painterly digital illustration of Mtskheta in the late morning in Georgia, the country in the Caucasus. Calm, relaxing mood, soft gradients, gentle atmospheric haze, rich but soft colors, slightly stylized like a premium mobile puzzle game background. Portrait composition: the upper half of the image is calm open sky only (soft blue with warm golden haze), mid-tone rather than near-white, with soft clouds and no landmarks, strong lines or bright spots. The horizon sits about 60–65% of the way down. Jvari Monastery on a clifftop stands slightly left of center, rising to about halfway up the image, overlooking the meeting of the turquoise Aragvi river and the darker Mtkvari river. The bottom third is soft foreground scenery (river banks and slender cypress trees). Keep all important details within the central 70% of the width, because the outer edges will be cropped. No text, no letters, no logos, no watermark, no borders, no people in the foreground, no modern cars or signage.
```

### 8. `home.png`

```text
Serene painterly digital illustration of Ananuri fortress in autumn in Georgia, the country in the Caucasus. Calm, relaxing mood, soft gradients, gentle atmospheric haze, rich but soft colors, slightly stylized like a premium mobile puzzle game background. Portrait composition: the upper half of the image is calm open sky only (misty lilac and soft grey-gold), mid-tone rather than near-white, with soft clouds and no landmarks, strong lines or bright spots. The horizon sits about 60–65% of the way down. Ananuri fortress, with its church and stone towers, stands on the shore slightly right of center, rising to about halfway up the image, reflected in still turquoise water. The bottom third is soft foreground scenery (the Zhinvali reservoir and hills of orange and golden autumn forest). Keep all important details within the central 70% of the width, because the outer edges will be cropped. No text, no letters, no logos, no watermark, no borders, no people in the foreground, no modern cars or signage.
```

### 9. `numbers.png`

```text
Serene painterly digital illustration of the Vardzia cave monastery at sunset in Georgia, the country in the Caucasus. Calm, relaxing mood, soft gradients, gentle atmospheric haze, rich but soft colors, slightly stylized like a premium mobile puzzle game background. Portrait composition: the upper half of the image is calm open sky only (warm rose-orange fading to violet at the top), mid-tone rather than near-white, with soft clouds and no landmarks, strong lines or bright spots. The horizon sits about 60–65% of the way down. The cave monastery carved into a tall golden cliff stands slightly left of center, rising to about halfway up the image, with small swallows in the air. The bottom third is soft foreground scenery (the Mtkvari river winding below the cliff). Keep all important details within the central 70% of the width, because the outer edges will be cropped. No text, no letters, no logos, no watermark, no borders, no people in the foreground, no modern cars or signage.
```

### 10. `music.png`

```text
Serene painterly digital illustration of the Black Sea coast of Adjara at dusk in Georgia, the country in the Caucasus. Calm, relaxing mood, soft gradients, gentle atmospheric haze, rich but soft colors, slightly stylized like a premium mobile puzzle game background. Portrait composition: the upper half of the image is calm open sky only (pink-violet and peach with soft clouds), mid-tone rather than near-white, with soft clouds and no landmarks, strong lines or bright spots. The horizon sits about 60–65% of the way down. A small white lighthouse on a green tea-plantation hill stands slightly right of center, rising to about halfway up the image, above a calm sea with a long shimmering sun reflection. The bottom third is soft foreground scenery (gentle waves and green coastal hills). Keep all important details within the central 70% of the width, because the outer edges will be cropped. No text, no letters, no logos, no watermark, no borders, no people in the foreground, no modern cars or signage.
```

## What Claude will do when the images arrive

- Map each chapter to its scene and show it full screen behind the game, with an image that covers the screen on every device.
- Add soft dark gradients behind the top bar, and a gentle vignette, so the title, coins and ivory tiles stay readable.
- Adjust the board and title colors where a scene needs more contrast.
- Optionally add a very slow cloud drift.
- Keep the current enamel background as the fallback.
- Compress the images for the offline bundle and check every chapter on iPhone and iPad simulators.

## Malta extension — 2026-10-18

For the owner-requested revision-21 expansion, Codex generated and integrated two
new destination backgrounds: Valletta and Mdina. This new request includes app
integration, beyond the original ten-scene handoff above. The matching master,
bundled-file paths, visual checks and exact prompts are in [MALTA_ARTWORK.md](MALTA_ARTWORK.md).

## Tunisia extension — 2026-10-18

The owner requested generation and integration of backgrounds for the revision-22
extension: Carthage, Sidi Bou Said and El Jem. Each has a portrait master and bundled
full-screen and postcard JPEGs. Exact prompts, saved paths and visual review are in
[TUNISIA_ARTWORK.md](TUNISIA_ARTWORK.md). Existing destination artwork is preserved.

## Spain extension — 2026-10-18

The owner requested six generated backgrounds for the 30-level revision-23 extension:
Barcelona's Sagrada Família, Valencia's City of Arts and Sciences, Madrid's Royal
Palace, Granada's Alhambra, Córdoba's Roman Bridge and Mosque–Cathedral, and Seville's
Plaza de España. Each has a quiet portrait background and a cropped postcard strip.
They follow the existing atmospheric painterly direction. See [SPAIN_ARTWORK.md](SPAIN_ARTWORK.md)
for exact prompts, asset paths, cropping choices and validation. All six accompanying
facts were source-checked and owner-approved; see [PLACE_FACTS.md](PLACE_FACTS.md).
