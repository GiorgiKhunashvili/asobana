# Extension capacity after revision 27

**Recommendation: add 10 levels to stay below 15% repetition, or 20 levels if 15.81% is acceptable.** These are demonstrated options from a bounded search, not a claim that larger low-repetition extensions are impossible. The game currently contains the approved 295 boards; these extra boards are experiments only.

The experiment preserves all 295 approved boards exactly and appends complete five-level stops. Repetition means required answer occurrences after first use divided by all required answer slots; bonuses do not count.

| Extra levels | Total levels | Distinct targets | Repeated slots | Repetition |     Change from current |
| -----------: | -----------: | ---------------: | -------------: | ---------: | ----------------------: |
|            0 |          295 |            1,281 |            194 |     13.15% |                       — |
|            5 |          300 |            1,295 |            205 |     13.67% | +0.51 percentage points |
|           10 |          305 |            1,305 |            220 |     14.43% | +1.27 percentage points |
|           15 |          310 |            1,315 |            235 |     15.16% | +2.01 percentage points |
|           20 |          315 |            1,326 |            249 |     15.81% | +2.66 percentage points |
|           25 |          320 |            1,336 |            264 |     16.50% | +3.35 percentage points |
|           30 |          325 |            1,346 |            279 |     17.17% | +4.02 percentage points |
|           35 |          330 |            1,356 |            294 |     17.82% | +4.67 percentage points |
|           40 |          335 |            1,366 |            309 |     18.45% | +5.30 percentage points |
|           45 |          340 |            1,376 |            324 |     19.06% | +5.91 percentage points |
|           50 |          345 |            1,386 |            339 |     19.65% | +6.50 percentage points |

## Why 716 unused words do not mean 143 easy extra boards

The unused pool contains **607 six-letter words, 95 five-letter words, 14 four-letter words and no three-letter words**. All boards still need five answers from one seven-tile wheel, readable crossings and chapter pacing. Long unused words frequently need previously used short partners. The measured 20-level extension uses 45 previously unused words across 100 new slots; the other 55 slots reuse older words at legal distances.

More individually approved short and medium-length words that pair with these unused long words are a promising next expansion target. Simply adding more six-letter entries does not guarantee better coverage.

## Search and validation

The original candidate pool held 202,449 valid boards. A focused search considered 25,642 unused-word pair-union wheels, found 121 with at least three unused formable words, and added 57 valid boards. The selector optimized novelty first and lower reuse counts second, retaining unique wheels, the 75-level gap, five answers, length progression and challenge/recovery pacing. It explored through 545 levels; only the first 345 are fully rebuilt and validated for this report.

Both unmodified production validators ran in a copied runtime whose journey manifest alone was extended with synthetic chapter labels. All 345 boards passed Python and TypeScript gates and were solved with the TypeScript game engine. The first 295 drafts are exactly identical to the approved revision-27 draft. The overall minimum repeat gap remains 75 levels. The reviewed-only loader rejects this generated extension draft. No experimental chapters or levels enter the active catalog.

The [machine-readable report](CAMPAIGN_EXTENSION_CAPACITY_V27.json) retains all measured checkpoints and the 50 appended recipes. Local reproduction artifacts are in `artifacts/journey-v27/`: `search-extension.py`, `extend.py`, `prepare-extension.py`, `extension.recipes.json`, `extension-draft.json` and `validate-extension.ts`. The dictionary and policy inputs match revision 27. Further optimization may find better combinations; whole-campaign reoptimization could change the tradeoff but would replace the exact draft just approved.

## Example appended boards

| Level | Required words                     | Previously unused words |
| ----: | ---------------------------------- | ----------------------- |
|   296 | შნო, ბოდიში, შინდი, იოდი, ოინი     | ბოდიში, შინდი           |
|   297 | სფერო, დოსიე, დრო, ფრე, ფერდი      | დოსიე, სფერო, ფერდი     |
|   298 | ფარდა, ფარი, ფასადი, სარი, საფარი  | საფარი, ფარდა, ფასადი   |
|   299 | მასალა, ამალა, ჭალა, მალა, ლამა    | ამალა, მასალა, ჭალა     |
|   300 | ტერფი, ფირი, შრიფტი, შიფერი, შრე   | ტერფი, შიფერი, შრიფტი   |
|   301 | ტყვე, ურყევი, უტყვი, ტური, ტყე     | ურყევი, უტყვი           |
|   302 | უბე, ბაგე, ბგერა, ბეღურა, გუბე     | ბეღურა, გუბე            |
|   303 | ცხვირი, ცხიმი, რიცხვი, ცივი, იხვი  | რიცხვი, ცხვირი          |
|   304 | ალოე, სკა, სკოლა, საელჩო, ჩელო     | საელჩო, ჩელო            |
|   305 | ნეფე, მეფე, მეუფე, მენიუ, ფენი     | მეუფე, მეფე             |
|   306 | ლოთი, კოალა, კალია, თოკი, კალთა    | კალთა, კოალა            |
|   307 | ჯიბრი, ჯანი, ბრინჯი, ბინა, ჯინი    | ბრინჯი, ჯიბრი           |
|   308 | აუტი, ტურა, ჟიური, ტირაჟი, ტარი    | ჟიური, ტირაჟი           |
|   309 | ხილი, ბმული, ხიბლი, ბუმი, მუხლი    | მუხლი, ხიბლი            |
|   310 | მოკლე, კოლეგა, მაკე, გემო, კომა    | კოლეგა, მოკლე           |
|   311 | ბილწი, კბილი, ტიკი, ტკბილი, ბიტი   | ბილწი, ტკბილი           |
|   312 | უღრანი, ღრუ, ღუზა, ზურნა, ურნა     | ზურნა, უღრანი           |
|   313 | ხაზინა, გაზი, გზა, ნაგაზი, ნახაზი  | ნაგაზი, ნახაზი, ხაზინა  |
|   314 | წნევა, ვენა, წვენი, ნავი, ყინვა    | ყინვა, წვენი            |
|   315 | ბალახი, ბალი, ხახა, ახალი, ბაია    | ბალახი, ხახა            |
|   316 | თვე, მითი, ქვეითი, ექიმი, თემი     | ექიმი, ქვეითი           |
|   317 | მაიორი, რომი, ქიმია, ქორი, ოქმი    | მაიორი, ქიმია           |
|   318 | ბადე, ბალეტი, დიეტა, დეტალი, დილა  | ბალეტი, დეტალი          |
|   319 | ლაბადა, ყბა, ალყა, დაბა, ბალადა    | ბალადა, ლაბადა          |
|   320 | ავად, ვადა, სადავო, ცოდვა, დავა    | სადავო, ცოდვა           |
|   321 | ტაბუ, საიტი, ბიუსტი, ბაიტი, ტბა    | ბაიტი, ბიუსტი           |
|   322 | ნიშა, ნაშთი, თამაში, თმა, შამანი   | თამაში, შამანი          |
|   323 | ვაგონი, გროვა, ორგანი, რანგი, გორა | ვაგონი, ორგანი          |
|   324 | ტონა, იოგა, ჰანგი, ტანგო, ტანი     | ტანგო, ჰანგი            |
|   325 | ანემია, მაჯა, ნამი, მენჯი, ჯემი    | ანემია, მენჯი           |
|   326 | ვალსი, ქვა, ქვისლი, ქლიავი, სილა   | ქვისლი, ქლიავი          |
|   327 | სუნამო, მონა, საძმო, ძუა, ძმა      | საძმო, სუნამო           |
|   328 | იდეა, დეიდა, დედანი, დასი, სადენი  | დედანი, სადენი          |
|   329 | ქურა, აქაური, ქირა, აქცია, რქა     | აქაური, აქცია           |
|   330 | ვერძი, რძე, ძერა, გვარი, ვერაგი    | ვერაგი, ვერძი           |
|   331 | ვაზნა, ზვავი, ნაზავი, ავზი, ვაზა   | ზვავი, ნაზავი           |
|   332 | ვალი, ვოკალი, ლოყა, კვალი, კილო    | ვოკალი, ლოყა            |
|   333 | მანია, მადა, მინა, ნადიმი, ამინდი  | ამინდი, ნადიმი          |
|   334 | აფხაზი, ბზა, ფხა, ფაზა, ხაბაზი     | აფხაზი, ხაბაზი          |
|   335 | სტარტი, რტო, ტიტა, ტოტი, ოსტატი    | ოსტატი, სტარტი          |
|   336 | საშიში, შაში, შიში, შოშია, სოია    | საშიში, შიში            |
|   337 | მარილი, მილი, პირი, ლაიმი, აპრილი  | აპრილი, მარილი          |
|   338 | სკვერი, ვაკე, სერია, ვერსია, კრავი | ვერსია, სკვერი          |
|   339 | დაფნა, პანდა, პაპა, დანა, დაფა     | პანდა, პაპა             |
|   340 | ნიკაპი, კარი, ნაპირი, რკინა, პიკი  | ნაპირი, ნიკაპი          |
|   341 | ავი, ძროხა, ხარი, ხროვა, არხი      | ძროხა, ხროვა            |
|   342 | ალპური, პური, უარი, ყლუპი, ლუპა    | ალპური, ყლუპი           |
|   343 | მეტრი, მტერი, მტრედი, კიდე, კრემი  | კრემი, მტრედი           |
|   344 | მზა, ზამში, პრიზმა, მარში, ზარი    | ზამში, პრიზმა           |
|   345 | თამამი, კამა, მთა, კამათი, მამა    | თამამი, კამათი          |
