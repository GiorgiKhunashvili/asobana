# Store listing — Asobana 1.0 (draft, 2026-10-23)

Everything App Store Connect and Google Play Console ask for, ready to paste.
Georgian copy was written by Claude and has **not** been reviewed by a native
speaker; read it once before publishing. Character counts were checked by script.

Screenshots and the Play feature graphic are generated into `artifacts/store/`
by `scripts/build-store-screenshots.cjs` (see [Screenshots](#screenshots)).
The privacy policy is live at <https://spilogames.ge/asobana/privacy/> (English:
<https://spilogames.ge/en/asobana/privacy/>). Its source is the separate
`spilo-games-website` project, deployed to Cloudflare with `wrangler deploy`.

## Owner decisions and blockers before submitting

| #   | Item                            | Why it matters                                                                                                                                         | Recommendation                                                                                                                                                                                      |
| --- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **Privacy policy URL**          | Required by both stores and AdMob. Apple also wants it reachable inside the app.                                                                       | Host `privacy-policy.html` (GitHub Pages, Netlify, own domain), then add a Settings row linking to it.                                                                                              |
| 2   | **Support URL + contact email** | App Store requires a support URL; Play shows a public contact email.                                                                                   | A simple page or the privacy page with a contact section. Fill the `CONTACT_EMAIL` placeholder in the policy.                                                                                       |
| 3   | **Word-list attribution**       | The bundled dictionary is Wiktionary-derived, CC BY-SA 4.0 (`content/dictionaries/README.md`). The app shows no attribution today.                     | Add a "წყაროები და ლიცენზიები" row in Settings (Wiktionary CC BY-SA 4.0, fonts SIL OFL 1.1).                                                                                                        |
| 4   | **iPad**                        | `supportsTablet: true` means Apple requires 13" iPad screenshots, and iPad support cannot be removed after the first public release. iPad is untested. | Set `supportsTablet: false` for 1.0 unless you want to test iPad now.                                                                                                                               |
| 5   | **Version**                     | `app.json` is `0.1.0`.                                                                                                                                 | Ship the public build as `1.0.0`.                                                                                                                                                                   |
| 6   | **Seller name**                 | App Store shows the seller "Dinein group, LLC", not Spilo Games.                                                                                       | Fix in Apple Developer account (legal entity) if you want Spilo Games shown. Copyright line below should match whoever owns the rights.                                                             |
| 7   | **Play target audience**        | Choosing ages under 13 puts the app under Google's Families policy, which needs child-directed ad settings in code.                                    | Select **13–15, 16–17, 18+** only, unless you want a kids-compliant version.                                                                                                                        |
| 8   | **App Store localization**      | App Store Connect has no Georgian localization.                                                                                                        | Put the Georgian text in the primary localization (English U.S.). Optionally add English (U.K.) with the English text. Verify in App Store Connect which localization the Georgia storefront shows. |

Status on 2026-10-26 (owner-approved in-app fixes):

- **1:** done. The owner chose spilogames.ge. Both privacy pages there were
  rewritten for Google AdMob (they had said the app had no ads and no internet
  use) and deployed; Settings → "კონფიდენციალურობის პოლიტიკა" opens
  <https://spilogames.ge/asobana/privacy/>.
- **2:** support URL <https://spilogames.ge/asobana/support/>, contact
  `support@spilogames.ge`. On 2026-10-26 the domain had **no MX records**, so
  that address cannot receive mail until the owner turns on Cloudflare Email
  Routing (a to-do in the website README). Fix before submitting.
- **3:** done. Settings → "წყაროები და ლიცენზიები" opens a licenses screen with
  the Wiktionary (CC BY-SA 4.0), EasyGeorgian frequency list (CC BY 4.0) and
  Noto Sans Georgian (OFL 1.1) credits; `tests/storeRelease.test.ts` guards them.
- **4:** done. `supportsTablet` is `false`; iPhone-only for 1.0.
- **5:** done. `app.json` is `1.0.0` (build numbers stay remote in EAS).
- **6:** resolved. Spilo Games is a studio brand of Dinein Group, LLC, not a
  separate company (owner, 2026-10-26). The App Store seller stays the legal
  entity; the copyright line names it; the spilogames.ge footers and both
  privacy pages name Dinein Group, LLC as responsible for the app and its data.
  On Google Play the developer name can still be "Spilo Games".
- **7–8** remain with the owner.
- **app-ads.txt:** live at <https://spilogames.ge/app-ads.txt> since 2026-10-26
  (`google.com, pub-8935292332039677, DIRECT, f08c47fec0942fa0`). AdMob checks
  it on the developer website listed in each store, so list
  `https://spilogames.ge/` there, then link the app in AdMob once it is live.

## Shared facts (verified in the code, revision 29)

- 500 levels in 100 stops, 5 levels per stop, five words per level, 3–6-letter words.
- Route: Georgia → Turkey → Bulgaria → Greece → Balkans → Italy → Malta → Tunisia
  → Spain → Portugal → Morocco → France → Switzerland → Germany → Austria (ends in Vienna).
- Every stop has its own illustration, a collectible postcard in the album and a short place fact.
- Bonus words: 3 coins each; one free letter hint per ten bonus words.
- Hints: letter (20 coins) and word (50 coins). Start balance 200, +20 per level.
- Ads: AdMob banner under the board; optional rewarded ads (+50 coins; ×2 level reward)
  only on a press. Non-personalized, rated G, no ATT prompt, Google UMP consent where required.
- No account, no server, no in-app purchases. Progress is stored on the device only.

## App Store Connect

| Field            | Limit | Text                                                                                                                                   | Count |
| ---------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| Name             | 30    | ასობანა: სიტყვების თამაში                                                                                                              | 25    |
| Subtitle         | 30    | ქართული კროსვორდი მოგზაურობით                                                                                                          | 29    |
| Promotional text | 170   | შეაერთე ასოები, შეავსე კროსვორდი და იმოგზაურე თბილისიდან ვენამდე: 500 დონე, 100 ადგილი და ახალი ბარათი ალბომისთვის ყოველი გაჩერებიდან. | 134   |
| Keywords         | 100   | სიტყვა,სიტყვები,ასოები,ანბანი,თავსატეხი,გამოცანა,ლოგიკა,ქართულად,საქართველო,kartuli,georgian,word                                      | 97    |

Keywords skip words already in the name and subtitle (Apple indexes those). If App
Store Connect counts the field differently, drop entries from the end.

- **Category:** Games; game subcategories **Word** and **Puzzle**.
- **Price:** Free. **In-app purchases:** none.
- **Availability:** all countries (Georgian speakers abroad).
- **Age rating:** answer None/No to every content question; no web access, no user content,
  no messaging. Expected **4+**.
- **Content rights:** Yes, the app contains third-party content (CC BY-SA word list,
  OFL fonts) and you have the rights to use it, provided attribution (blocker 3) is added.
- **Encryption:** already declared (`usesNonExemptEncryption: false`).
- **Sign-in required:** No.
- **Copyright:** `2026 Dinein Group, LLC` (the rights owner; see blocker 6).
- **Support URL:** `https://spilogames.ge/asobana/support/`.
  **Marketing URL:** `https://spilogames.ge/`.
  **Privacy Policy URL:** `https://spilogames.ge/asobana/privacy/`.

### Description (both stores, 4,000 max)

```
ასობანა ქართული სიტყვების თამაშია: ასოების წრეზე თითს გაასრიალებ, სიტყვას ააწყობ და კროსვორდს შეავსებ. ყოველი დონე მოგზაურობის ახალი ნაბიჯია — თბილისიდან და მცხეთიდან იწყებ, გაივლი თურქეთს, საბერძნეთს, იტალიას, ესპანეთს, მაროკოს, საფრანგეთსა და გერმანიას, და მოგზაურობას ვენაში დაასრულებ.

როგორ ვითამაშოთ
• თითით შეაერთე ასოები და ააწყე სიტყვა.
• სწორი სიტყვა კროსვორდში თავის ადგილს დაიკავებს.
• ყოველ დონეზე ხუთი სიტყვა უნდა იპოვო.
• თუ გაგიჭირდა, გამოიყენე ასოს ან სიტყვის მინიშნება.

რა გელოდება
• 500 დონე და 100 ადგილი, საქართველოდან ავსტრიამდე.
• ნაცნობი, ყოველდღიური ქართული სიტყვები — იშვიათი და ხელოვნური სიტყვების გარეშე.
• თანდათან მზარდი სირთულე: მოკლე სიტყვებით იწყებ და ხუთ- და ექვსასოიან სიტყვებზე გადადიხარ.
• ბონუს სიტყვები: იპოვე დამატებითი სიტყვები, დააგროვე მონეტები და მიიღე უფასო მინიშნებები.
• ყოველი ადგილიდან ახალი ბარათი შენს ალბომში, საინტერესო ფაქტით ამ ადგილის შესახებ.
• საკუთარი ილუსტრაცია ყოველი გაჩერებისთვის.
• მთლიანად ქართულ ენაზე.

თამაში უფასოა და შეიცავს რეკლამას: ბანერს თამაშის ეკრანის ქვემოთ. დამატებითი მონეტებისთვის ვიდეორეკლამის ნახვა სურვილისამებრაა და მხოლოდ შენი დაჭერით ჩაირთვება.

ასობანა — Spilo Games
```

English version (for an English localization, the reviewer, or a press kit):

```
Asobana is a Georgian word game: slide your finger across the letter wheel, build words and fill the crossword. Every level is a step on a journey — start in Tbilisi and Mtskheta, travel through Turkey, Greece, Italy, Spain, Morocco, France and Germany, and finish in Vienna.

How to play
• Connect letters to form a word.
• Correct words drop into their place in the crossword.
• Find five words on every level.
• Stuck? Use a letter or word hint.

What's inside
• 500 levels and 100 places, from Georgia to Austria.
• Familiar, everyday Georgian words — no rare or made-up filler.
• Difficulty that grows gradually: start with short words, move on to five- and six-letter ones.
• Bonus words: find extra words to earn coins and free hints.
• A new postcard for your album from every place, with a fun fact about it.
• An illustration for every stop.
• Entirely in Georgian.

The game is free and contains ads: a banner below the game board. Watching a video ad for extra coins is optional and only starts when you tap.

Asobana — Spilo Games
```

### What's New (1.0)

```
ასობანას პირველი გამოშვება: 500 დონე, 100 ადგილი და ბარათების ალბომი. კარგ მოგზაურობას გისურვებთ!
```

### App Review notes (English)

```
Asobana is a Georgian-language word puzzle. There is no login or account; all progress is stored on the device.

How to play: drag across the letters in the wheel to form words. Each level has five words to find. Hints cost coins.

Ads: an AdMob banner sits below the board. Optional rewarded video ads appear on the Coins screen, on hint buttons when coins are low, and as a "×2" button on the level-complete screen; they start only when the player taps them. Ads are non-personalized and rated G. We do not use App Tracking Transparency. Google's UMP consent form is shown where required, and Settings offers the privacy options again.

There are no in-app purchases.
```

### App Privacy (nutrition label) — draft

The Google Mobile Ads SDK and, from the first release after 2026-10-30, Sentry
collect data. Based on Google's
[iOS data disclosure guide](https://developers.google.com/admob/ios/privacy/data-disclosure)
(read 2026-10-23) and the reports captured from Release builds on 2026-10-30; as
the developer you are responsible for the final answers.

- **Data used to track you:** none (non-personalized ads only, no ATT prompt;
  declaring tracking would also require the ATT prompt).
- **Linked to you:** Google's guide (re-read 2026-10-26) does not answer
  Apple's "linked to the user's identity" question. It calls performance data
  "user-associated", crash logs "non-user related", and the device ID an
  advertising or app-bounded device identifier. Apple counts data tied to a
  device identifier as linked unless it is de-identified, so the answers
  submitted on 2026-10-26 mark identifier-tied data as linked:

| Data type                         | Purposes                           | Linked |
| --------------------------------- | ---------------------------------- | ------ |
| Coarse Location (from IP address) | Third-Party Advertising, Analytics | No     |
| Device ID                         | Third-Party Advertising, Analytics | Yes    |
| Product Interaction               | Third-Party Advertising, Analytics | Yes    |
| Advertising Data                  | Third-Party Advertising, Analytics | Yes    |
| Crash Data                        | Analytics, App Functionality       | No     |
| Performance Data                  | Third-Party Advertising, Analytics | Yes    |
| Other Diagnostic Data             | Analytics                          | No     |

**Change these three answers in App Store Connect before releasing Sentry.** The
table above is what was submitted on 2026-10-26. Sentry's native crash reports
carry an app-specific device ID, so they count as linked under the same reasoning:

| Data type             | Purposes                                              | Linked |
| --------------------- | ----------------------------------------------------- | ------ |
| Device ID             | Third-Party Advertising, Analytics, App Functionality | Yes    |
| Crash Data            | Analytics, App Functionality                          | Yes    |
| Other Diagnostic Data | Analytics, App Functionality                          | No     |

Sentry does not change the tracking answer: its reports are not used for
advertising or shared with data brokers.

## Google Play Console

| Field             | Limit | Text                                                             | Count |
| ----------------- | ----- | ---------------------------------------------------------------- | ----- |
| App name          | 30    | ასობანა: სიტყვების თამაში                                        | 25    |
| Short description | 80    | შეაერთე ასოები, შეავსე კროსვორდი და იმოგზაურე თბილისიდან ვენამდე | 64    |
| Full description  | 4,000 | Same Georgian description as above                               | —     |

- **Default language:** Georgian – ka-GE (Play supports it). Optional English (en-US) translation above.
- **App or game:** Game. **Category:** Word. **Tags:** Word, Crossword, Puzzle, Casual (pick in console).
- **Free**, **contains ads: Yes**. No in-app products.
- **App access:** all functionality available without special access.
- **Advertising ID:** Yes — used for advertising and analytics (the AdMob SDK declares `AD_ID`).
- **Target audience:** see blocker 7.
- **Content rating (IARC):** category Game; answer No to violence, sexuality, language,
  controlled substances, gambling, user interaction, location sharing and digital purchases.
  Expected PEGI 3 / ESRB Everyone.
- **Government, financial, health, news:** none.

### Data safety — draft

Based on Google's [Play data disclosure guide](https://developers.google.com/admob/android/privacy/play-data-disclosure)
(read 2026-10-23).

- Collects or shares required user data: **Yes**. Encrypted in transit: **Yes** (TLS).
- Way to request deletion: **No** — there are no accounts. Progress lives only on the
  device; Settings → reset progress, or uninstalling, erases it.

| Category → type                           | Collected | Shared | Required | Purposes                                              |
| ----------------------------------------- | --------- | ------ | -------- | ----------------------------------------------------- |
| Location → Approximate location           | Yes       | Yes    | Yes      | Advertising or marketing, Analytics, Fraud prevention |
| App activity → App interactions           | Yes       | Yes    | Yes      | Advertising or marketing, Analytics, Fraud prevention |
| App info and performance → Diagnostics    | Yes       | Yes    | Yes      | Advertising or marketing, Analytics, Fraud prevention |
| Device or other IDs → Device or other IDs | Yes       | Yes    | Yes      | Advertising or marketing, Analytics, Fraud prevention |

**Update these rows in Play Console before releasing Sentry.** Crash logs are new.
Sentry acts as a service provider, which Play does not count as sharing:

| Category → type                           | Collected | Shared | Required | Purposes                                                                 |
| ----------------------------------------- | --------- | ------ | -------- | ------------------------------------------------------------------------ |
| App info and performance → Crash logs     | Yes       | No     | Yes      | App functionality, Analytics                                             |
| App info and performance → Diagnostics    | Yes       | Yes    | Yes      | App functionality, Advertising or marketing, Analytics, Fraud prevention |
| Device or other IDs → Device or other IDs | Yes       | Yes    | Yes      | App functionality, Advertising or marketing, Analytics, Fraud prevention |

**Also update these rows before releasing Unity Ads on Android.** Unity's SDK ships
in that release even while its AdMob groups are off. Based on
[Unity's Google Play disclosure](https://docs.unity.com/en-us/grow/ads/privacy/google-data-safety)
(read 2026-10-30; Unity's page was last updated about a year earlier). The first
two rows are new:

| Category → type                           | Collected | Shared | Required | Purposes                                                                                       |
| ----------------------------------------- | --------- | ------ | -------- | ---------------------------------------------------------------------------------------------- |
| Personal info → User IDs                  | Yes       | Yes    | Yes      | App functionality                                                                              |
| Financial info → Purchase history         | Yes       | Yes    | Yes      | Advertising or marketing, Analytics                                                            |
| Location → Approximate location           | Yes       | Yes    | Yes      | App functionality, Advertising or marketing, Analytics, Fraud prevention, security, compliance |
| App activity → Page views and taps in app | Yes       | Yes    | Yes      | Advertising or marketing, Analytics                                                            |
| App info and performance → Diagnostics    | Yes       | Yes    | Yes      | App functionality, Advertising or marketing, Analytics, Fraud prevention, security, compliance |
| Device or other IDs → Device or other IDs | Yes       | Yes    | Yes      | App functionality, Advertising or marketing, Analytics, Fraud prevention, security, compliance |

Unity's page gives no purposes for page views and taps, so confirm that row when
filling in the form. It says it collects taps only inside the ad, not during
gameplay. Other app activity applies only with Acquire Optimization, which is off.

## Screenshots

Generated by `scripts/build-store-screenshots.cjs` from Release-build simulator captures
(iPhone 17 Pro Max, iOS 26.5) into `artifacts/store/` (not in git):

| Output                     | Size        | Store requirement                                                                                              |
| -------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| `ios-6.3/*.png`            | 1206 × 2622 | App Store "iPhone with Dynamic Island (medium display)" slot, the one App Store Connect required on 2026-10-26 |
| `ios-6.9/*.png`            | 1320 × 2868 | App Store 6.9" iPhone (rejected by that slot; kept for a large-display slot)                                   |
| `play-phone/*.png`         | 1080 × 1920 | Play phone screenshots (2–8; ≥1080 px and 9:16 for promotion)                                                  |
| `play-feature-graphic.png` | 1024 × 500  | Play feature graphic (required)                                                                                |
| `play-icon-512.png`        | 512 × 512   | Play hi-res icon (required)                                                                                    |

The device screen is cropped above the banner footer, so the demo "Test Ad" never
appears. iPad screenshots are not made (blocker 4).

The five shots, in upload order (captions are drawn by the script):

| File               | Screen                                 | Caption                          |
| ------------------ | -------------------------------------- | -------------------------------- |
| `01-board-kazbegi` | Level 18, Kazbegi, two words solved    | შეაერთე ასოები, / ააწყე სიტყვები |
| `02-journey`       | Journey path at Paris (stop 81)        | 100 ადგილი / თბილისიდან ვენამდე  |
| `03-board-paris`   | Level 405, Paris, two words solved     | 500 დონე / ნაცნობი სიტყვებით     |
| `04-victory`       | Level 405 complete with the Paris card | ყოველი ადგილიდან / ახალი ბარათი  |
| `05-album`         | Album, 80/100 postcards                | შეაგროვე / 100 ბარათი            |

To recapture (2026-10-23 method): build Release on a simulator
(`LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8 npx expo run:ios --configuration Release`), write a
mid-campaign `GameState` built with `reachLevel()` from `mobile/tests/helpers.ts` (with
`tutorialSeen: true` and a modest coin balance) into `game_snapshot` of the app's
`Documents/SQLite/asobana.db`, set the status bar with `xcrun simctl status_bar … override
--time 9:41`, open screens with Maestro `openLink` (`asobana://game/ka-405`,
`asobana:///`, `asobana://album`, `asobana://victory/ka-405`) and capture with
`xcrun simctl io … screenshot` into `artifacts/store/raw/`. Then run:

```bash
FONTCONFIG_FILE=/path/to/fonts.conf NODE_PATH=/path/to/node_modules node scripts/build-store-screenshots.cjs
```

`fonts.conf` must list `mobile/assets/fonts` as a `<dir>`; without it Pango falls back
to a thin system Georgian font. sharp is not a repo dependency.
