# Fifty-level extension with 2,075 approved words

The isolated draft successfully adds **50 levels**, for **345 total**, at **18.03% overall repetition**. Current revision 27 is 13.15%; the earlier 50-level trial without the 78 additions was 19.65%.

The 250 added answer slots introduce **133 distinct words**: **59** from the 78 new approvals and **74** from the previously unused revision-27 pool. The other **117 slots** repeat earlier answers. The minimum repeat distance is **75 levels**.

Repetition is the number of required answer occurrences beyond first use divided by total required answer slots. It is a campaign-wide measure; it does not mean adjacent boards repeat these percentages.

| Added levels | Total levels | Distinct words | Repeated slots | Overall repetition |
| -----------: | -----------: | -------------: | -------------: | -----------------: |
|            0 |          295 |           1281 |            194 |             13.15% |
|            5 |          300 |           1297 |            203 |             13.53% |
|           10 |          305 |           1313 |            212 |             13.90% |
|           15 |          310 |           1329 |            221 |             14.26% |
|           20 |          315 |           1343 |            232 |             14.73% |
|           25 |          320 |           1358 |            242 |             15.12% |
|           30 |          325 |           1369 |            256 |             15.75% |
|           35 |          330 |           1379 |            271 |             16.42% |
|           40 |          335 |           1390 |            285 |             17.01% |
|           45 |          340 |           1400 |            300 |             17.65% |
|           50 |          345 |           1414 |            311 |             18.03% |

## Validation and scope

All 345 boards passed the unchanged Python and TypeScript content gates in a copied runtime and were solved with the TypeScript game engine. The production reviewed-only loader correctly rejects the unpromoted draft. All existing gates remain, including the 75-level gap, unique wheels, answer lengths, six-letter pacing, challenge/recovery progression, valid crossings and phone layout.

The first 295 required-word boards are preserved exactly; the draft expands their eligible bonus recognition. All production content JSON files and the active catalog are byte-identical to the pre-trial snapshot. The 24 latest approvals are recorded in targeted batch 02, bringing pending additions to 78. Unselected candidates remain unapproved.

This is a bounded search, not a maximum-capacity or optimality proof. The ten extra stops have synthetic draft labels; route, artwork and release integration remain separate work. Active play still has 295 levels.

[Machine-readable report and exact recipes](CAMPAIGN_EXTENSION_TRIAL_2075.json). Reproduction artifacts are in `artifacts/extension-trial-2075/`: `approved.json`, `allowed.json`, `search.py`, `extend.py`, `global-select.py`, `prepare-runtime.py`, `rebuild.py`, `extension.recipes.json`, `extension-draft.json`, and `validate-extension.ts`.

## Appended boards

| Level | Answers                            | First appearances in campaign  |
| ----: | ---------------------------------- | ------------------------------ |
|   296 | ხარკი, ხრამი, კეხი, მხარე, მეხი    | მეხი, ხარკი, ხრამი             |
|   297 | ალაო, კოდალა, სკა, სკოლა, კოალა    | ალაო, კოალა, კოდალა            |
|   298 | რეისი, დილერი, სეირი, ლიდერი, იერი | დილერი, იერი, ლიდერი, სეირი    |
|   299 | სათნო, პონი, საპონი, სპა, პასი     | პასი, სათნო, საპონი            |
|   300 | ცალი, ჭინკა, ანცი, კლანჭი, კანჭი   | ანცი, კლანჭი, ჭინკა            |
|   301 | ატომი, ლოყა, მატყლი, ყმა, ლომი     | ლოყა, მატყლი, ყმა              |
|   302 | ხარბი, ხაში, ბირჟა, შარჟი, შარი    | შარი, შარჟი, ხარბი             |
|   303 | ნაკეცი, ნება, ცნება, ბეცი, კეცი    | ბეცი, ნაკეცი, ცნება            |
|   304 | ტბორი, ირიბი, ტორი, რტო, ორბი      | ირიბი, ორბი, ტბორი, ტორი       |
|   305 | ალიბი, ქალი, ქლიბი, ჩლიქი, ბალი    | ალიბი, ქლიბი, ჩლიქი            |
|   306 | ხინჯი, დინჯი, ჯინი, ხილი, ლხინი    | დინჯი, ლხინი, ხინჯი            |
|   307 | ლოტო, ნოტიო, ტილო, ოზონი, ტოლი     | ლოტო, ნოტიო, ოზონი             |
|   308 | ტერფი, შრე, შრიფტი, შტერი, შიფერი  | ტერფი, შიფერი, შრიფტი, შტერი   |
|   309 | ქატო, ქოში, შტატი, ტაშტი, ტიტა     | ტაშტი, ქატო, ქოში              |
|   310 | მასალა, ამალა, ჭალა, მალა, ლამა    | ამალა, მასალა, ჭალა            |
|   311 | სფერო, დოსიე, დრო, ფრე, ფერდი      | დოსიე, სფერო, ფერდი            |
|   312 | ნავი, წნევა, წვენი, ყანწი, ყინვა   | ყანწი, ყინვა, წვენი            |
|   313 | ფარდა, ფარი, ფასადი, სარი, საფარი  | საფარი, ფარდა, ფასადი          |
|   314 | ექიმი, ჯიქი, ქაჯი, ჯამი, ქიმია     | ექიმი, ქიმია                   |
|   315 | წვერი, ვიწრო, წერო, ოხერი, წევრი   | ვიწრო, ოხერი, წერო             |
|   316 | შაჰი, შეფი, რაში, ფერია, ფარში     | რაში, ფარში, ფერია, შაჰი, შეფი |
|   317 | ნეფე, მეფე, მეუფე, მენიუ, ფენი     | მეუფე, მეფე                    |
|   318 | ბადე, ბალეტი, დიეტა, დეტალი, დილა  | ბალეტი, დეტალი                 |
|   319 | ავად, ვადა, სადავო, სადა, ცოდვა    | სადა, სადავო, ცოდვა            |
|   320 | მარაო, ტომარა, ძარა, ამაო, აორტა   | აორტა, ტომარა, ძარა            |
|   321 | ხაზინა, გაზი, გზა, ნაგაზი, ნახაზი  | ნაგაზი, ნახაზი, ხაზინა         |
|   322 | ცხვირი, ცხიმი, რიცხვი, ცივი, იხვი  | რიცხვი, ცხვირი                 |
|   323 | ლაიმი, ლიმფა, ფილმი, მარილი, ფირი  | ლიმფა, მარილი                  |
|   324 | ზედა, ზღუდე, მზე, მედუზა, მუზა     | ზღუდე, მედუზა                  |
|   325 | ღერი, მერანი, ღრმა, ნაღმი, ნამი    | მერანი, ნაღმი                  |
|   326 | ტაბუ, კუბო, ხბო, ხოტბა, კოხტა      | კოხტა, ხოტბა                   |
|   327 | ჟანგი, გიჟი, ჟინი, ნიავი, ვაჟი     | გიჟი, ჟინი                     |
|   328 | ზვინი, აივანი, ზიანი, ვაზნა, ვაზა  | აივანი, ზვინი                  |
|   329 | უღრანი, ღრუ, ღუზა, ზურნა, ურნა     | ზურნა, უღრანი                  |
|   330 | ბილწი, კბილი, ტიკი, ტკბილი, ბიტი   | ბილწი, ტკბილი                  |
|   331 | ფეხი, ეშხი, თეფში, თვე, შხეფი      | თეფში, შხეფი                   |
|   332 | უტყვი, ულევი, ყელი, ტყვე, ეტლი     | ულევი, უტყვი                   |
|   333 | მორიგე, მორი, მორგი, გემო, მძორი   | მორიგე, მძორი                  |
|   334 | ვენახი, მინა, მხნე, ხევი, მავნე    | ვენახი, მავნე, მხნე            |
|   335 | უბე, ბაგე, ბგერა, ბეღურა, გუბე     | ბეღურა, გუბე                   |
|   336 | ნუში, გიდი, შინდი, დგუში, გუნდი    | დგუში, შინდი                   |
|   337 | მუჭა, ბიჭუნა, მუჭი, უნაბი, ბინა    | ბიჭუნა, მუჭი                   |
|   338 | ჯანი, მიჯნა, მენჯი, ანემია, ჯემი   | ანემია, მენჯი                  |
|   339 | ტკიპა, ოპტიკა, კოპი, აპკი, ჭოტი    | ოპტიკა, ჭოტი                   |
|   340 | აუტი, ტურა, ჟიური, ტირაჟი, ტარი    | ჟიური, ტირაჟი                  |
|   341 | იდეალი, ლედი, ტილი, დელტა, ელდა    | დელტა, იდეალი, ტილი            |
|   342 | კერპი, კრემი, პიურე, კუპე, ურემი   | კერპი, კრემი                   |
|   343 | სკვერი, ვაკე, სერია, ვერსია, კრავი | ვერსია, სკვერი                 |
|   344 | აისი, საშიში, შაში, შიში, დაისი    | აისი, დაისი, საშიში, შიში      |
|   345 | თარსი, აბრა, რასა, ბარათი, ბაია    | აბრა, ბარათი, თარსი            |
