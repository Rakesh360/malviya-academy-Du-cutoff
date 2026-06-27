/* ============================================================
   Malviya Academy — DU BA (Hons.) Expected Cutoff 2026
   script.js
   ============================================================ */

/* ── RAW DATA ── */
const RAW = [
  "Hindu College\tB.A. (Hons.) Political Science\t925-935\t897-907\t864-874\t873-883\t895-905\t837-847",
  "Lady Shri Ram College for Women (W)\tB.A. (Hons.) Psychology\t901-911\t808-818\t806-816\t755-765\t829-839\t726-736",
  "St. Stephen's College\tB.A. (Hons.) English\t901-911\t0\t794-804\t827-837\t0\t714-724",
  "Miranda House (W)\tB.A. (Hons.) Political Science\t900-910\t863-873\t812-822\t812-822\t852-862\t760-770",
  "St. Stephen's College\tB.A. (Hons.) History\t893-903\t0\t818-828\t865-875\t0\t828-838",
  "Lady Shri Ram College for Women (W)\tB.A. (Hons.) Political Science\t890-900\t833-843\t768-778\t782-792\t824-834\t660-670",
  "Hindu College\tB.A. (Hons.) History\t888-898\t860-870\t808-818\t845-855\t857-867\t688-698",
  "Kirori Mal College\tB.A. (Hons.) Political Science\t884-894\t841-851\t787-797\t811-821\t860-870\t747-757",
  "Shri Ram College of Commerce\tB.A. (Hons.) Economics\t883-893\t776-786\t697-707\t584-594\t798-808\t584-594",
  "St. Stephen's College\tB.A. (Hons.) Philosophy\t881-891\t0\t762-772\t711-721\t0\t639-649",
  "St. Stephen's College\tB.A. (Hons.) Economics\t879-889\t0\t700-710\t716-726\t0\t612-622",
  "Jesus & Mary College (W)\tB.A. (Hons.) Psychology\t873-883\t0\t0\t0\t0\t594-604",
  "Miranda House (W)\tB.A. (Hons.) History\t869-879\t823-833\t754-764\t771-781\t813-823\t666-676",
  "Ramjas College\tB.A. (Hons.) Political Science\t869-879\t826-836\t761-771\t777-787\t822-832\t707-717",
  "Hindu College\tB.A. (Hons.) Sociology\t866-876\t818-828\t752-762\t763-773\t797-807\t597-607",
  "Miranda House (W)\tB.A. (Hons.) Geography\t863-873\t814-824\t745-755\t750-760\t819-829\t397-407",
  "Hindu College\tB.A. (Hons.) Economics\t862-872\t750-760\t680-690\t580-590\t782-792\t560-570",
  "Hindu College\tB.A. (Hons.) English\t860-870\t802-812\t757-767\t759-769\t829-839\t612-622",
  "Indraprastha College for Women (W)\tB.A. (Hons.) Psychology\t852-862\t733-743\t717-727\t707-717\t765-775\t505-515",
  "Lady Shri Ram College for Women (W)\tB.A. (Hons.) Journalism\t851-861\t725-735\t693-703\t624-634\t747-757\t733-743",
  "Hansraj College\tB.A. (Hons.) History\t849-859\t806-816\t752-762\t753-763\t819-829\t595-605",
  "Sri Venketeswara College\tB.A. (Hons.) Political Science\t849-859\t810-820\t733-743\t727-737\t804-814\t704-714",
  "Daulat Ram College (W)\tB.A. (Hons.) Psychology\t848-858\t742-752\t719-729\t725-735\t750-760\t569-579",
  "Lady Shri Ram College for Women (W)\tB.A. (Hons.) Economics\t848-858\t687-697\t605-615\t485-495\t734-744\t451-461",
  "Kirori Mal College\tB.A. (Hons.) Geography\t842-852\t801-811\t738-748\t740-750\t803-813\t635-645",
  "Lady Shri Ram College for Women (W)\tB.A. (Hons.) History\t842-852\t783-793\t699-709\t712-722\t775-785\t351-361",
  "Hansraj College\tB.A. (Hons.) Economics\t839-849\t696-706\t617-627\t477-487\t744-754\t445-455",
  "Hindu College\tB.A. (Hons.) Philosophy\t839-849\t764-774\t688-698\t618-628\t756-766\t504-514",
  "Miranda House (W)\tB.A. (Hons.) English\t837-847\t740-750\t692-702\t656-666\t755-765\t421-431",
  "Gargi College (W)\tB.A. (Hons.) Applied Psychology\t835-845\t706-716\t652-662\t631-641\t698-708\t548-558",
  "Kamala Nehru College (W)\tB.A. (Hons.) Psychology\t833-843\t693-703\t676-686\t668-678\t676-686\t466-476",
  "Lady Shri Ram College for Women (W)\tB.A. (Hons.) English\t831-841\t701-711\t652-662\t653-663\t735-745\t372-382",
  "Sri Guru Tegh Bahadur Khalsa College\tB.A. (Hons.) Political Science\t829-839\t0\t0\t0\t0\t623-633",
  "Kirori Mal College\tB.A. (Hons.) History\t828-838\t782-792\t739-749\t728-738\t805-815\t576-586",
  "Hansraj College\tB.A. (Hons.) English\t825-835\t745-755\t690-700\t665-675\t752-762\t569-579",
  "Kirori Mal College\tB.A. (Hons.) Economics\t824-834\t665-675\t601-611\t430-440\t730-740\t278-288",
  "Lady Shri Ram College for Women (W)\tB.A. (Hons.) Sociology\t824-834\t732-742\t641-651\t646-656\t712-722\t538-548",
  "Miranda House (W)\tB.A. (Hons.) Economics\t824-834\t676-686\t590-600\t441-451\t709-719\t0",
  "Ramjas College\tB.A. (Hons.) History\t820-830\t772-782\t704-714\t722-732\t781-791\t518-528",
  "Daulat Ram College (W)\tB.A. (Hons.) Political Science\t817-827\t775-785\t684-694\t698-708\t778-788\t497-507",
  "Sri Venketeswara College\tB.A. (Hons.) Economics\t817-827\t645-655\t580-590\t404-414\t694-704\t0",
  "Miranda House (W)\tB.A. (Hons.) Sociology\t816-826\t746-756\t641-651\t656-666\t722-732\t398-408",
  "Kirori Mal College\tB.A. (Hons.) English\t815-825\t721-731\t668-678\t679-689\t738-748\t506-516",
  "Ramjas College\tB.A. (Hons.) Economics\t815-825\t650-660\t583-593\t415-425\t710-720\t247-257",
  "Aryabhatta College\tB.A. (Hons.) Psychology\t812-822\t646-656\t637-647\t592-602\t630-640\t533-543",
  "Jesus & Mary College (W)\tB.A. (Hons.) Political Science\t810-820\t0\t0\t0\t0\t530-540",
  "Sri Venketeswara College\tB.A. (Hons.) History\t805-815\t748-758\t678-688\t681-691\t770-780\t517-527",
  "Hansraj College\tB.A. (Hons.) Philosophy\t801-811\t707-717\t635-645\t577-587\t725-735\t452-462",
  "Indraprastha College for Women (W)\tB.A. (Hons.) Political Science\t800-810\t736-746\t653-663\t640-650\t740-750\t409-419",
  "Atma Ram Sanatan Dharma College\tB.A. (Hons.) Political Science\t798-808\t745-755\t680-690\t660-670\t756-766\t507-517",
  "Ramjas College\tB.A. (Hons.) English\t793-803\t695-705\t652-662\t630-640\t716-726\t447-457",
  "Sri Guru Tegh Bahadur Khalsa College\tB.A. (Hons.) Economics\t792-802\t0\t0\t0\t0\t0",
  "Jesus & Mary College (W)\tB.A. (Hons.) Economics\t789-799\t0\t0\t0\t0\t580-590",
  "Gargi College (W)\tB.A. (Hons.) Political Science\t788-798\t711-721\t633-643\t592-602\t710-720\t185-195",
  "Daulat Ram College (W)\tB.A. (Hons.) History\t787-797\t725-735\t632-642\t655-665\t705-715\t165-175",
  "Sri Venketeswara College\tB.A. (Hons.) English\t785-795\t682-692\t632-642\t593-603\t708-718\t442-452",
  "Indraprastha College for Women (W)\tB.A. (Hons.) Geography\t783-793\t710-720\t641-651\t629-639\t694-704\t310-320",
  "Keshav Mahavidyalaya\tB.A. (Hons.) Psychology\t783-793\t606-616\t586-596\t532-542\t612-622\t393-403",
  "Ramanujan College\tB.A. (Hons.) Applied Psychology\t781-791\t599-609\t564-574\t514-524\t543-553\t302-312",
  "Sri Venketeswara College\tB.A. (Hons.) Sociology\t778-788\t700-710\t605-615\t602-612\t694-704\t491-501",
  "Sri Guru Tegh Bahadur Khalsa College\tB.A. (Hons.) History\t776-786\t0\t0\t0\t0\t548-558",
  "Sri Guru Gobind Singh College of Commerce\tB.A. (Hons.) Economics\t775-785\t0\t0\t0\t0\t0",
  "Gargi College (W)\tB.A. (Hons.) Economics\t769-779\t551-561\t437-447\t146-156\t601-611\t0",
  "Atma Ram Sanatan Dharma College\tB.A. (Hons.) History\t767-777\t716-726\t646-656\t600-610\t707-717\t396-406",
  "Miranda House (W)\tB.A. (Hons.) Philosophy\t767-777\t657-667\t571-581\t548-558\t656-666\t0",
  "Indraprastha College for Women (W)\tB.A. (Hons.) History\t765-775\t702-712\t602-612\t605-615\t688-698\t183-193",
  "Daulat Ram College (W)\tB.A. (Hons.) Economics\t764-774\t583-593\t494-504\t252-262\t626-636\t0",
  "Atma Ram Sanatan Dharma College\tB.A. (Hons.) Economics\t763-773\t574-584\t479-489\t285-295\t619-629\t0",
  "Lady Shri Ram College for Women (W)\tB.A. (Hons.) Philosophy\t763-773\t639-649\t578-588\t536-546\t671-681\t0",
  "Delhi College of Arts and Commerce\tB.A. (Hons.) Political Science\t762-772\t703-713\t635-645\t644-654\t715-725\t400-410",
  "Zakir Husain Delhi College\tB.A. (Hons.) Psychology\t762-772\t608-618\t552-562\t577-587\t558-568\t319-329",
  "Shaheed Bhagat Singh College\tB.A. (Hons.) Economics\t761-771\t581-591\t514-524\t256-266\t640-650\t0",
  "Sri Guru Tegh Bahadur Khalsa College\tB.A. (Hons.) English\t761-771\t0\t0\t0\t0\t415-425",
  "Shaheed Bhagat Singh College\tB.A. (Hons.) Political Science\t760-770\t705-715\t635-645\t641-651\t708-718\t356-366",
  "Lakshmibai College (W)\tB.A. (Hons.) Psychology\t759-769\t577-587\t553-563\t482-492\t526-536\t346-356",
  "Indraprastha College for Women (W)\tB.A. (Hons.) Economics\t757-767\t563-573\t460-470\t77-87\t610-620\t0",
  "Indraprastha College for Women (W)\tB.A. (Hons.) English\t755-765\t638-648\t598-608\t564-574\t654-664\t255-265",
  "Shaheed Rajguru College of Applied Sciences for Women (W)\tB.A. (Hons.) Psychology\t754-764\t571-581\t571-581\t473-483\t538-548\t0",
  "Delhi College of Arts and Commerce\tB.A. (Hons.) Economics\t753-763\t564-574\t471-481\t305-315\t605-615\t0",
  "Daulat Ram College (W)\tB.A. (Hons.) English\t751-761\t650-660\t605-615\t582-592\t678-688\t170-180",
  "Shaheed Bhagat Singh College\tB.A. (Hons.) Geography\t751-761\t686-696\t614-624\t617-627\t692-702\t344-354",
  "Delhi College of Arts and Commerce\tB.A. (Hons.) Journalism\t748-758\t611-621\t565-575\t519-529\t664-674\t522-532",
  "Atma Ram Sanatan Dharma College\tB.A. (Hons.) English\t746-756\t644-654\t583-593\t567-577\t670-680\t334-344",
  "Gargi College (W)\tB.A. (Hons.) English\t746-756\t632-642\t574-584\t576-586\t640-650\t188-198",
  "Gargi College (W)\tB.A. (Hons.) History\t745-755\t678-688\t593-603\t573-583\t663-673\t0",
  "Jesus & Mary College (W)\tB.A. (Hons.) History\t745-755\t0\t0\t0\t0\t284-294",
  "Indraprastha College for Women (W)\tB.A. (Hons.) Sociology\t744-754\t660-670\t582-592\t574-584\t627-637\t338-348",
  "Maitreyi College (W)\tB.A. (Hons.) Political Science\t742-752\t665-675\t576-586\t549-559\t676-686\t308-318",
  "Mata Sundri College for Women (W)\tB.A. (Hons.) Psychology\t740-750\t0\t0\t0\t0\t477-487",
  "Jesus & Mary College (W)\tB.A. (Hons.) English\t737-747\t0\t0\t0\t0\t432-442",
  "Bharati College (W)\tB.A. (Hons.) Psychology\t736-746\t576-586\t545-555\t492-502\t528-538\t287-297",
  "Kamala Nehru College (W)\tB.A. (Hons.) Political Science\t736-746\t664-674\t571-581\t562-572\t646-656\t0",
  "Maitreyi College (W)\tB.A. (Hons.) Economics\t736-746\t504-514\t381-391\t0\t548-558\t0",
  "Motilal Nehru College\tB.A. (Hons.) Political Science\t736-746\t673-683\t607-617\t590-600\t649-659\t274-284",
  "Jesus & Mary College (W)\tB.A. (Hons.) Sociology\t733-743\t0\t0\t0\t0\t0",
  "College of Vocational Studies\tB.A. (Hons.) Economics\t732-742\t503-513\t386-396\t0\t563-573\t0",
  "Dr. Bhim Rao Ambedkar College\tB.A. (Hons.) Applied Psychology\t732-742\t548-558\t527-537\t436-446\t491-501\t282-292",
  "Sri Guru Gobind Singh College of Commerce\tB.A. (Hons.) Applied Psychology\t731-741\t0\t0\t0\t0\t0",
  "Ramjas College\tB.A. (Hons.) Sociology\t730-740\t639-649\t570-580\t582-592\t636-646\t327-337",
  "Sri Venketeswara College\tB.A. (Hons.) Geography\t729-739\t664-674\t589-599\t583-593\t645-655\t265-275",
  "Maitreyi College (W)\tB.A. (Hons.) History\t729-739\t630-640\t531-541\t532-542\t617-627\t245-255",
  "Delhi College of Arts and Commerce\tB.A. (Hons.) History\t728-738\t636-646\t555-565\t555-565\t634-644\t218-228",
  "Dyal Singh College\tB.A. (Hons.) Political Science\t727-737\t665-675\t579-589\t565-575\t648-658\t239-249",
  "Maharaja Agrasen College\tB.A. (Hons.) Applied Psychology\t727-737\t536-546\t479-489\t357-367\t520-530\t272-282",
  "Kamala Nehru College (W)\tB.A. (Hons.) Economics\t725-735\t465-475\t357-367\t0\t509-519\t0",
  "Motilal Nehru College\tB.A. (Hons.) History\t724-734\t640-650\t570-580\t560-570\t618-628\t301-311",
  "Atma Ram Sanatan Dharma College\tB.A. (Hons.) Geography\t724-734\t640-650\t561-571\t553-563\t623-633\t222-232",
  "Sri Venketeswara College\tB.A. (Hons.) Philosophy\t724-734\t593-603\t521-531\t463-473\t580-590\t225-235",
  "Gargi College (W)\tB.A. (Hons.) Applied Psychology\t722-732\t556-566\t0\t0\t570-580\t0",
  "Delhi College of Arts and Commerce\tB.A. (Hons.) Sociology\t720-730\t587-597\t503-513\t493-503\t568-578\t258-268",
  "Hansraj College\tB.A. (Hons.) Sociology\t719-729\t602-612\t526-536\t525-535\t591-601\t193-203",
  "Ramjas College\tB.A. (Hons.) Geography\t718-728\t655-665\t576-586\t567-577\t641-651\t217-227",
  "Shaheed Bhagat Singh College\tB.A. (Hons.) History\t717-727\t629-639\t556-566\t546-556\t613-623\t237-247",
  "Bharati College (W)\tB.A. (Hons.) Political Science\t716-726\t612-622\t527-537\t490-500\t586-596\t210-220",
  "Zakir Husain Delhi College\tB.A. (Hons.) Political Science\t714-724\t588-598\t517-527\t500-510\t547-557\t282-292",
  "Swami Shardhanand College\tB.A. (Hons.) Political Science\t714-724\t643-653\t565-575\t539-549\t636-646\t261-271",
  "Maharaja Agrasen College\tB.A. (Hons.) Political Science\t713-723\t639-649\t557-567\t521-531\t620-630\t249-259",
  "Ramanujan College\tB.A. (Hons.) Political Science\t713-723\t587-597\t501-511\t452-462\t535-545\t228-238",
  "Dyal Singh College\tB.A. (Hons.) Economics\t711-721\t475-485\t370-380\t0\t520-530\t0",
  "Lakshmibai College (W)\tB.A. (Hons.) Political Science\t710-720\t590-600\t490-500\t467-477\t538-548\t173-183",
  "Motilal Nehru College\tB.A. (Hons.) Economics\t709-719\t449-459\t335-345\t0\t498-508\t0",
  "Lakshmibai College (W)\tB.A. (Hons.) Economics\t705-715\t423-433\t313-323\t0\t456-466\t0",
  "Maitreyi College (W)\tB.A. (Hons.) Geography\t705-715\t550-560\t446-456\t388-398\t532-542\t225-235",
  "Shaheed Bhagat Singh College\tB.A. (Hons.) English\t705-715\t576-586\t533-543\t512-522\t576-586\t226-236",
  "Delhi College of Arts and Commerce\tB.A. (Hons.) English\t703-713\t583-593\t528-538\t509-519\t591-601\t228-238",
  "Bharati College (W)\tB.A. (Hons.) English\t702-712\t563-573\t528-538\t479-489\t554-564\t166-176",
  "Kamala Nehru College (W)\tB.A. (Hons.) History\t702-712\t570-580\t483-493\t462-472\t536-546\t148-158",
  "Atma Ram Sanatan Dharma College\tB.A. (Hons.) Sociology\t701-711\t545-555\t465-475\t415-425\t520-530\t166-176",
  "Keshav Mahavidyalaya\tB.A. (Hons.) Political Science\t701-711\t560-570\t492-502\t439-449\t520-530\t249-259",
  "Motilal Nehru College\tB.A. (Hons.) Geography\t700-710\t556-566\t447-457\t395-405\t527-537\t145-155",
  "Zakir Husain Delhi College\tB.A. (Hons.) Economics\t698-708\t409-419\t299-309\t0\t393-403\t0",
  "Dyal Singh College\tB.A. (Hons.) History\t697-707\t567-577\t479-489\t436-446\t561-571\t162-172",
  "Maharaja Agrasen College\tB.A. (Hons.) Economics\t695-705\t397-407\t285-295\t0\t420-430\t0",
  "Sri Guru Gobind Singh College of Commerce\tB.A. (Hons.) Political Science\t691-701\t0\t0\t0\t0\t0",
  "Gargi College (W)\tB.A. (Hons.) Geography\t690-700\t549-559\t440-450\t381-391\t535-545\t220-230",
  "Shyam Lal College\tB.A. (Hons.) Political Science\t689-699\t581-591\t495-505\t445-455\t561-571\t166-176",
  "Dyal Singh College\tB.A. (Hons.) Geography\t688-698\t547-557\t441-451\t373-383\t493-503\t122-132",
  "Bharati College (W)\tB.A. (Hons.) History\t686-696\t539-549\t444-454\t389-399\t501-511\t95-105",
  "Swami Shardhanand College\tB.A. (Hons.) History\t684-694\t543-553\t447-457\t395-405\t534-544\t145-155",
  "Ramanujan College\tB.A. (Hons.) History\t683-693\t515-525\t437-447\t375-385\t494-504\t151-161",
  "Ramanujan College\tB.A. (Hons.) Economics\t682-692\t334-344\t227-237\t0\t336-346\t0",
  "Maharaja Agrasen College\tB.A. (Hons.) History\t681-691\t520-530\t426-436\t344-354\t487-497\t117-127",
  "Zakir Husain Delhi College\tB.A. (Hons.) History\t679-689\t518-528\t420-430\t405-415\t449-459\t120-130",
  "Rajdhani College\tB.A. (Hons.) Political Science\t678-688\t577-587\t480-490\t430-440\t536-546\t125-135",
  "Shyam Lal College\tB.A. (Hons.) Economics\t677-687\t330-340\t215-225\t0\t335-345\t0",
  "Sri Aurobindo College (Day)\tB.A. (Hons.) Political Science\t676-686\t549-559\t455-465\t389-399\t519-529\t122-132",
  "Keshav Mahavidyalaya\tB.A. (Hons.) Economics\t675-685\t327-337\t231-241\t0\t348-358\t0",
  "Ramjas College\tB.A. (Hons.) Philosophy\t674-684\t527-537\t444-454\t402-412\t535-545\t192-202",
  "Delhi College of Arts and Commerce\tB.A. (Hons.) Geography\t673-683\t544-554\t438-448\t380-390\t511-521\t175-185",
  "Deshbandhu College\tB.A. (Hons.) Political Science\t672-682\t556-566\t455-465\t390-400\t517-527\t129-139",
  "Kamala Nehru College (W)\tB.A. (Hons.) Geography\t671-681\t495-505\t378-388\t330-340\t475-485\t156-166",
  "Rajdhani College\tB.A. (Hons.) Economics\t669-679\t321-331\t193-203\t0\t300-310\t0",
  "Atma Ram Sanatan Dharma College\tB.A. (Hons.) Philosophy\t667-677\t477-487\t400-410\t305-315\t474-484\t109-119",
  "Swami Shardhanand College\tB.A. (Hons.) Economics\t663-673\t318-328\t212-222\t0\t313-323\t0",
  "Keshav Mahavidyalaya\tB.A. (Hons.) History\t660-670\t495-505\t400-410\t336-346\t435-445\t111-121",
  "Rajdhani College\tB.A. (Hons.) History\t659-669\t509-519\t400-410\t336-346\t443-453\t92-102",
  "Bharati College (W)\tB.A. (Hons.) Economics\t657-667\t315-325\t195-205\t0\t276-286\t0",
  "Rajdhani College\tB.A. (Hons.) Geography\t656-666\t489-499\t373-383\t290-300\t411-421\t116-126",
  "Shyam Lal College\tB.A. (Hons.) History\t655-665\t469-479\t368-378\t298-308\t415-425\t74-84",
  "Lakshmibai College (W)\tB.A. (Hons.) History\t651-661\t476-486\t383-393\t330-340\t406-416\t73-83",
  "Hansraj College\tB.A. (Hons.) Political Science\t650-660\t553-563\t456-466\t419-429\t493-503\t125-135",
  "Deshbandhu College\tB.A. (Hons.) Economics\t650-660\t295-305\t183-193\t0\t269-279\t0",
  "Deshbandhu College\tB.A. (Hons.) History\t648-658\t459-469\t356-366\t290-300\t389-399\t83-93",
  "Rajdhani College\tB.A. (Hons.) English\t644-654\t501-511\t436-446\t401-411\t430-440\t122-132",
  "Swami Shardhanand College\tB.A. (Hons.) Geography\t643-653\t462-472\t347-357\t260-270\t370-380\t62-72",
  "Ramanujan College\tB.A. (Hons.) Geography\t641-651\t424-434\t310-320\t227-237\t338-348\t70-80",
  "Kamala Nehru College (W)\tB.A. (Hons.) English\t640-650\t476-486\t432-442\t379-389\t432-442\t76-86",
  "Lakshmibai College (W)\tB.A. (Hons.) English\t638-648\t475-485\t432-442\t367-377\t427-437\t74-84",
  "Shyam Lal College\tB.A. (Hons.) English\t637-647\t461-471\t407-417\t355-365\t421-431\t94-104",
  "Keshav Mahavidyalaya\tB.A. (Hons.) English\t636-646\t445-455\t394-404\t326-336\t389-399\t111-121",
  "Maharaja Agrasen College\tB.A. (Hons.) English\t633-643\t437-447\t385-395\t315-325\t377-387\t71-81",
  "Deshbandhu College\tB.A. (Hons.) English\t632-642\t429-439\t374-384\t298-308\t367-377\t65-75",
  "Rajdhani College\tB.A. (Hons.) Sociology\t630-640\t438-448\t340-350\t294-304\t349-359\t118-128",
  "Sri Aurobindo College (Day)\tB.A. (Hons.) Economics\t628-638\t269-279\t139-149\t0\t231-241\t0",
  "Shyam Lal College\tB.A. (Hons.) Sociology\t625-635\t415-425\t310-320\t266-276\t367-377\t60-70",
  "Ramanujan College\tB.A. (Hons.) English\t624-634\t393-403\t344-354\t272-282\t336-346\t72-82",
  "Sri Aurobindo College (Day)\tB.A. (Hons.) History\t623-633\t435-445\t332-342\t257-267\t342-352\t55-65",
  "Lakshmibai College (W)\tB.A. (Hons.) Geography\t621-631\t435-445\t313-323\t247-257\t339-349\t60-70",
  "Deshbandhu College\tB.A. (Hons.) Geography\t619-629\t416-426\t299-309\t222-232\t313-323\t52-62",
  "Swami Shardhanand College\tB.A. (Hons.) English\t618-628\t408-418\t349-359\t269-279\t332-342\t46-56",
  "Maharaja Agrasen College\tB.A. (Hons.) Sociology\t617-627\t384-394\t290-300\t226-236\t328-338\t68-78",
  "Keshav Mahavidyalaya\tB.A. (Hons.) Sociology\t616-626\t354-364\t278-288\t224-234\t295-305\t90-100",
  "Sri Aurobindo College (Day)\tB.A. (Hons.) English\t615-625\t392-402\t340-350\t262-272\t326-336\t52-62",
  "Keshav Mahavidyalaya\tB.A. (Hons.) Geography\t613-623\t390-400\t288-298\t213-223\t299-309\t56-66",
  "Shyam Lal College\tB.A. (Hons.) Geography\t612-622\t379-389\t268-278\t197-207\t298-308\t44-54",
  "Rajdhani College\tB.A. (Hons.) Philosophy\t609-619\t380-390\t287-297\t198-208\t283-293\t60-70",
  "Ramanujan College\tB.A. (Hons.) Sociology\t608-618\t335-345\t253-263\t199-209\t278-288\t68-78",
  "Swami Shardhanand College\tB.A. (Hons.) Sociology\t605-615\t341-351\t241-251\t185-195\t281-291\t47-57",
  "Sri Aurobindo College (Day)\tB.A. (Hons.) Sociology\t604-614\t311-321\t218-228\t162-172\t247-257\t52-62",
  "Deshbandhu College\tB.A. (Hons.) Sociology\t601-611\t321-331\t229-239\t163-173\t254-264\t36-46",
  "Maharaja Agrasen College\tB.A. (Hons.) Geography\t596-606\t345-355\t231-241\t163-173\t263-273\t44-54",
  "Ram Lal Anand College\tB.A. (Hons.) Political Science\t593-603\t449-459\t363-373\t296-306\t340-350\t87-97",
  "Swami Shardhanand College\tB.A. (Hons.) Philosophy\t593-603\t325-335\t225-235\t139-149\t251-261\t37-47",
  "Deshbandhu College\tB.A. (Hons.) Philosophy\t590-600\t308-318\t215-225\t137-147\t237-247\t30-40",
  "Ram Lal Anand College\tB.A. (Hons.) History\t587-597\t388-398\t298-308\t221-231\t298-308\t55-65",
  "Maharaja Agrasen College\tB.A. (Hons.) Philosophy\t584-594\t269-279\t193-203\t115-125\t210-220\t36-46",
  "Ram Lal Anand College\tB.A. (Hons.) Economics\t583-593\t258-268\t153-163\t0\t228-238\t0",
  "Rajdhani College\tB.A. (Hons.) Applied Psychology\t577-587\t306-316\t213-223\t140-150\t225-235\t0",
  "Ramanujan College\tB.A. (Hons.) Philosophy\t576-586\t267-277\t185-195\t107-117\t201-211\t38-48",
  "Ram Lal Anand College\tB.A. (Hons.) English\t575-585\t358-368\t300-310\t234-244\t288-298\t52-62",
  "Shyam Lal College\tB.A. (Hons.) Philosophy\t573-583\t253-263\t170-180\t99-109\t186-196\t34-44",
  "Sri Aurobindo College (Day)\tB.A. (Hons.) Geography\t572-582\t291-301\t175-185\t97-107\t199-209\t34-44",
  "Lakshmibai College (W)\tB.A. (Hons.) Sociology\t570-580\t330-340\t240-250\t192-202\t261-271\t30-40",
  "Keshav Mahavidyalaya\tB.A. (Hons.) Philosophy\t567-577\t211-221\t147-157\t87-97\t162-172\t32-42",
  "Ram Lal Anand College\tB.A. (Hons.) Sociology\t566-576\t289-299\t199-209\t140-150\t225-235\t30-40",
  "Swami Shardhanand College\tB.A. (Hons.) Applied Psychology\t561-571\t236-246\t181-191\t114-124\t198-208\t0",
  "Sri Aurobindo College (Day)\tB.A. (Hons.) Philosophy\t559-569\t212-222\t144-154\t74-84\t166-176\t28-38",
  "Ram Lal Anand College\tB.A. (Hons.) Geography\t558-568\t266-276\t165-175\t96-106\t198-208\t28-38",
  "Deshbandhu College\tB.A. (Hons.) Applied Psychology\t554-564\t188-198\t143-153\t74-84\t162-172\t0",
  "Maharaja Agrasen College\tB.A. (Hons.) Geography\t552-562\t244-254\t152-162\t79-89\t191-201\t30-40",
  "Sri Aurobindo College (Day)\tB.A. (Hons.) Applied Psychology\t547-557\t168-178\t120-130\t52-62\t152-162\t0",
  "Lakshmibai College (W)\tB.A. (Hons.) Philosophy\t544-554\t175-185\t118-128\t60-70\t135-145\t28-38",
  "Ram Lal Anand College\tB.A. (Hons.) Philosophy\t542-552\t163-173\t107-117\t38-48\t117-127\t28-38",
  "Ramanujan College\tB.A. (Hons.) Psychology\t535-545\t264-274\t252-262\t210-220\t268-278\t137-147",
  "Lakshmibai College (W)\tB.A. (Hons.) Applied Psychology\t534-544\t165-175\t112-122\t52-62\t134-144\t28-38",
  "Maharaja Agrasen College\tB.A. (Hons.) Psychology\t530-540\t237-247\t229-239\t172-182\t240-250\t111-121",
  "Swami Shardhanand College\tB.A. (Hons.) Psychology\t528-538\t196-206\t186-196\t130-140\t182-192\t50-60",
  "Dr. Bhim Rao Ambedkar College\tB.A. (Hons.) Political Science\t526-536\t351-361\t268-278\t191-201\t269-279\t84-94",
  "Rajdhani College\tB.A. (Hons.) Psychology\t519-529\t222-232\t208-218\t155-165\t196-206\t66-76",
  "Keshav Mahavidyalaya\tB.A. (Hons.) Applied Psychology\t517-527\t147-157\t124-134\t65-75\t135-145\t22-32",
  "Sri Aurobindo College (Day)\tB.A. (Hons.) Psychology\t516-526\t182-192\t171-181\t116-126\t164-174\t42-52",
  "Ram Lal Anand College\tB.A. (Hons.) Applied Psychology\t513-523\t138-148\t108-118\t41-51\t118-128\t0",
  "Ram Lal Anand College\tB.A. (Hons.) Psychology\t511-521\t183-193\t175-185\t121-131\t175-185\t38-48",
  "Deshbandhu College\tB.A. (Hons.) Psychology\t509-519\t173-183\t163-173\t104-114\t161-171\t28-38",
  "Swami Shardhanand College\tB.A. (Hons.) Applied Psychology\t505-515\t134-144\t109-119\t52-62\t121-131\t0",
  "Sri Aurobindo College (Evening)\tB.A. (Hons.) Political Science\t504-514\t349-359\t257-267\t185-195\t254-264\t68-78",
  "Lakshmibai College (W)\tB.A. (Hons.) Psychology\t502-512\t149-159\t130-140\t68-78\t114-124\t22-32",
  "Maharaja Agrasen College\tB.A. (Hons.) Psychology\t498-508\t163-173\t156-166\t97-107\t158-168\t36-46",
  "Deshbandhu College\tB.A. (Hons.) Political Science (Evening)\t497-507\t333-343\t245-255\t167-177\t235-245\t55-65",
  "Zakir Husain Delhi College\tB.A. (Hons.) Applied Psychology\t493-503\t172-182\t127-137\t77-87\t148-158\t0",
  "Zakir Husain Delhi College\tB.A. (Hons.) Arabic\t493-503\t329-339\t240-250\t0\t291-301\t0",
  "Indraprastha College for Women (W)\tB.A. (Hons.) Multi Media and Mass Communication\t490-500\t413-423\t363-373\t289-299\t432-442\t113-123",
  "Sri Guru Gobind Singh College of Commerce\tB.A. (Hons.) Business Economics\t481-491\t0\t0\t0\t0\t165-175",
  "Sri Guru Tegh Bahadur Khalsa College\tB.A. (Hons.) Business Economics\t471-481\t0\t0\t0\t0\t0",
  "Zakir Husain Delhi College\tB.A. (Hons.) Persian\t460-470\t299-309\t256-266\t170-180\t218-228\t0",
  "Gargi College (W)\tB.A. (Hons.) Business Economics\t449-459\t303-313\t241-251\t190-200\t331-341\t0",
  "Hindu College\tB.A. (Hons.) Sanskrit\t449-459\t88-98\t358-368\t135-145\t517-527\t251-261",
  "College of Vocational Studies\tB.A. (Hons.) Business Economics\t434-444\t290-300\t224-234\t202-212\t312-322\t0",
  "Zakir Husain Delhi College (Evening)\tB.A. (Hons.) Persian\t432-442\t277-287\t184-194\t0\t204-214\t0",
  "Sri Venketeswara College\tB.A. (Hons.) Hindi\t424-434\t339-349\t328-338\t230-240\t152-162\t248-258",
  "Kirori Mal College\tB.A. (Hons.) Urdu\t417-427\t218-228\t203-213\t295-305\t278-288\t0",
  "Aryabhatta College\tB.A. (Hons.) Business Economics\t415-425\t269-279\t198-208\t239-249\t293-303\t372-382",
  "Sri Guru Tegh Bahadur Khalsa College\tB.A. (Hons.) Hindi\t414-424\t0\t0\t0\t0\t144-154",
  "Atma Ram Sanatan Dharma College\tB.A. (Hons.) Hindi\t413-423\t325-335\t334-344\t150-160\t143-153\t0",
  "Dyal Singh College\tB.A. (Hons.) Punjabi\t410-420\t241-251\t167-177\t146-156\t61-71\t0",
  "Aryabhatta College\tB.A. (Hons.) Hindi\t409-419\t301-311\t282-292\t0\t135-145\t0",
  "Maharaja Agrasen College\tB.A. (Hons.) Business Economics\t405-415\t262-272\t191-201\t183-193\t280-290\t0",
  "Sri Guru Nanak Dev Khalsa College\tB.A. (Hons.) Hindi Patrakarita\t405-415\t0\t0\t0\t0\t332-342",
  "Sri Guru Nanak Dev Khalsa College\tB.A. (Hons.) Business Economics\t405-415\t0\t0\t0\t0\t0",
  "Miranda House (W)\tB.A. (Hons.) Bengali\t402-412\t267-277\t220-230\t0\t228-238\t0",
  "Sri Guru Nanak Dev Khalsa College\tB.A. (Hons.) Punjabi\t398-408\t0\t0\t0\t0\t0",
  "Dr. Bhim Rao Ambedkar College\tB.A. (Hons.) Hindi Patrakarita\t395-405\t263-273\t268-278\t210-220\t224-234\t0",
  "Shivaji College\tB.A. (Hons.) Business Economics\t395-405\t259-269\t170-180\t0\t272-282\t0",
  "Dr. Bhim Rao Ambedkar College\tB.A. (Hons.) Business Economics\t382-392\t244-254\t164-174\t0\t255-265\t0",
  "Daulat Ram College (W)\tB.A. (Hons.) Hindi\t381-391\t211-221\t263-273\t229-239\t220-230\t0",
  "Lakshmibai College (W)\tB.A. (Hons.) Business Economics\t378-388\t232-242\t151-161\t0\t250-260\t0",
  "Gargi College (W)\tB.A. (Hons.) Hindi\t368-378\t211-221\t243-253\t0\t170-180\t0",
  "Zakir Husain Delhi College\tB.A. (Hons.) Sanskrit\t364-374\t109-119\t140-150\t0\t175-185\t0",
  "Zakir Husain Delhi College (Evening)\tB.A. (Hons.) Sanskrit\t363-373\t182-192\t61-71\t0\t140-150\t0",
  "Mata Sundri College for Women (W)\tB.A. (Hons.) Punjabi\t360-370\t0\t0\t0\t0\t0",
  "Zakir Husain Delhi College (Evening)\tB.A. (Hons.) Hindi\t359-369\t229-239\t246-256\t0\t159-169\t0",
  "Satyawati College\tB.A. (Hons.) Urdu\t357-367\t60-70\t134-144\t107-117\t6-16\t0",
  "Zakir Husain Delhi College\tB.A. (Hons.) Hindi\t356-366\t188-198\t232-242\t0\t124-134\t303-313",
  "Indraprastha College for Women (W)\tB.A. (Hons.) Hindi\t354-364\t156-166\t220-230\t301-311\t135-145\t97-107",
  "Dyal Singh College\tB.A. (Hons.) Sanskrit\t351-361\t193-203\t65-75\t0\t195-205\t0",
  "P.G.D.A.V. College\tB.A. (Hons.) Sanskrit\t338-348\t171-181\t257-267\t0\t147-157\t0",
  "Motilal Nehru College\tB.A. (Hons.) Hindi\t328-338\t257-267\t242-252\t0\t245-255\t0",
  "Ramjas College\tB.A. (Hons.) Sanskrit\t327-337\t368-378\t240-250\t232-242\t350-360\t0",
  "Maharaja Agrasen College\tB.A. (Hons.) Hindi\t325-335\t86-96\t140-150\t0\t0\t0",
  "Aditi Mahavidyalaya (W)\tB.A. (Hons.) Hindi Patrakarita\t321-331\t114-124\t177-187\t313-323\t231-241\t155-165",
  "Shaheed Bhagat Singh College\tB.A. (Hons.) Hindi\t320-330\t205-215\t221-231\t0\t0\t0",
  "Jesus & Mary College (W)\tB.A. (Hons.) Hindi\t316-326\t0\t0\t0\t0\t0",
  "College of Vocational Studies\tB.A. (Hons.) Hindi\t314-324\t205-215\t245-255\t0\t0\t0",
  "Shivaji College\tB.A. (Hons.) Sanskrit\t311-321\t69-79\t149-159\t0\t145-155\t0",
  "Motilal Nehru College\tB.A. (Hons.) Sanskrit\t310-320\t190-200\t132-142\t0\t128-138\t0",
  "Satyawati College\tB.A. (Hons.) Sanskrit\t309-319\t46-56\t111-121\t0\t123-133\t0",
  "Satyawati College\tB.A. (Hons.) Hindi\t308-318\t130-140\t181-191\t218-228\t206-216\t0",
  "Sri Guru Nanak Dev Khalsa College\tB.A. (Hons.) Hindi\t306-316\t0\t0\t0\t0\t0",
  "Deshbandhu College\tB.A. (Hons.) Hindi\t305-315\t157-167\t212-222\t0\t274-284\t0",
  "Dyal Singh College\tB.A. (Hons.) Hindi\t302-312\t119-129\t178-188\t208-218\t215-225\t0",
  "P.G.D.A.V. College (Evening)\tB.A. (Hons.) Sanskrit\t301-311\t141-151\t127-137\t0\t0\t0",
  "Indraprastha College for Women (W)\tB.A. (Hons.) Sanskrit\t292-302\t174-184\t123-133\t0\t91-101\t0",
  "Zakir Husain Delhi College\tB.A. (Hons.) Bengali\t290-300\t268-278\t193-203\t145-155\t110-120\t0",
  "Dr. Bhim Rao Ambedkar College\tB.A. (Hons.) Hindi\t289-299\t46-56\t200-210\t0\t207-217\t0",
  "Ramanujan College\tB.A. (Hons.) Hindi\t283-293\t132-142\t120-130\t0\t260-270\t0",
  "Gargi College (W)\tB.A. (Hons.) Sanskrit\t280-290\t96-106\t155-165\t0\t144-154\t0",
  "Shyam Lal College\tB.A. (Hons.) Hindi\t278-288\t118-128\t97-107\t0\t0\t220-230",
  "Bhagini Nivedita College (W)\tB.A. (Hons.) Hindi\t276-286\t126-136\t81-91\t0\t184-194\t0",
  "Rajdhani College\tB.A. (Hons.) Hindi\t272-282\t81-91\t116-126\t227-237\t194-204\t240-250",
  "Shivaji College\tB.A. (Hons.) Hindi\t268-278\t116-126\t91-101\t0\t218-228\t0",
  "Maitreyi College (W)\tB.A. (Hons.) Hindi\t267-277\t127-137\t136-146\t0\t0\t0",
  "Maitreyi College (W)\tB.A. (Hons.) Sanskrit\t264-274\t122-132\t167-177\t0\t0\t0",
  "Motilal Nehru College (Evening)\tB.A. (Hons.) Hindi\t264-274\t120-130\t84-94\t152-162\t0\t0",
  "P.G.D.A.V. College\tB.A. (Hons.) Hindi\t264-274\t56-66\t71-81\t0\t218-228\t230-240",
  "Lady Shri Ram College for Women (W)\tB.A. (Hons.) Sanskrit\t250-260\t128-138\t164-174\t0\t283-293\t0",
  "Ram Lal Anand College\tB.A. (Hons.) Hindi\t246-256\t40-50\t62-72\t0\t127-137\t0",
  "Bharati College (W)\tB.A. (Hons.) Hindi\t240-250\t207-217\t142-152\t0\t119-129\t0",
  "Sri Aurobindo College (Day)\tB.A. (Hons.) Hindi\t240-250\t123-133\t43-53\t0\t156-166\t0",
  "Janki Devi Memorial College (W)\tB.A. (Hons.) Sanskrit\t239-249\t0\t0\t0\t0\t0",
  "Rajdhani College\tB.A. (Hons.) Sanskrit\t239-249\t108-118\t82-92\t0\t271-281\t229-239",
  "Miranda House (W)\tB.A. (Hons.) Sanskrit\t229-239\t165-175\t143-153\t0\t339-349\t0",
  "P.G.D.A.V. College (Evening)\tB.A. (Hons.) Hindi\t227-237\t143-153\t46-56\t0\t0\t0",
  "Zakir Husain Delhi College (Evening)\tB.A. (Hons.) Urdu\t226-236\t233-243\t115-125\t0\t152-162\t479-489",
  "Kamala Nehru College (W)\tB.A. (Hons.) Hindi\t225-235\t196-206\t134-144\t221-231\t0\t0",
  "Swami Shardhanand College\tB.A. (Hons.) Hindi\t222-232\t88-98\t69-79\t0\t0\t0",
  "Janki Devi Memorial College (W)\tB.A. (Hons.) Hindi\t210-220\t130-140\t43-53\t0\t0\t0",
  "Bharati College (W)\tB.A. (Hons.) Sanskrit\t198-208\t96-106\t97-107\t0\t111-121\t0",
  "Shyama Prasad Mukherji College For Women (W)\tB.A. (Hons.) Hindi\t198-208\t0\t160-170\t0\t0\t0",
  "Sri Venketeswara College\tB.A. (Hons.) Sanskrit\t197-207\t302-312\t169-179\t0\t273-283\t0",
  "Lakshmibai College (W)\tB.A. (Hons.) Hindi\t196-206\t150-160\t159-169\t0\t0\t0",
  "Satyawati College (Evening)\tB.A. (Hons.) Hindi\t195-205\t145-155\t108-118\t0\t0\t0",
  "Kalindi College (W)\tB.A. (Hons.) Hindi\t194-204\t177-187\t129-139\t0\t0\t0",
  "Vivekananda College (W)\tB.A. (Hons.) Sanskrit\t189-199\t51-61\t0\t0\t0\t0",
  "Kalindi College (W)\tB.A. (Hons.) Sanskrit\t187-197\t105-115\t0\t0\t0\t0",
  "Kamala Nehru College (W)\tB.A. (Hons.) Sanskrit\t186-196\t171-181\t165-175\t0\t126-136\t0",
  "Shyam Lal College (Evening)\tB.A. (Hons.) Hindi\t184-194\t77-87\t0\t0\t0\t0",
  "Vivekananda College (W)\tB.A. (Hons.) Hindi\t182-192\t101-111\t0\t0\t0\t0",
  "Mata Sundri College for Women (W)\tB.A. (Hons.) Sanskrit\t174-184\t0\t0\t0\t0\t0",
  "Sri Aurobindo College (Evening)\tB.A. (Hons.) Hindi\t172-182\t135-145\t0\t0\t0\t0",
  "Kirori Mal College\tB.A. (Hons.) Sanskrit\t171-181\t391-401\t323-333\t0\t364-374\t0",
  "Sri Guru Tegh Bahadur Khalsa College\tB.A. (Hons.) Punjabi\t158-168\t0\t0\t0\t0\t114-124",
  "Dyal Singh College\tB.A. (Hons.) Urdu\t155-165\t148-158\t207-217\t208-218\t164-174\t0",
  "Lakshmibai College (W)\tB.A. (Hons.) Sanskrit\t147-157\t0\t0\t0\t0\t0",
  "Hansraj College\tB.A. (Hons.) Sanskrit\t143-153\t406-416\t275-285\t241-251\t404-414\t0",
  "Shyama Prasad Mukherji College For Women (W)\tB.A. (Hons.) Sanskrit\t130-140\t107-117\t75-85\t0\t0\t0",
  "Sri Guru Gobind Singh College of Commerce\tB.A. (Hons.) Punjabi\t122-132\t0\t0\t0\t0\t0",
  "Daulat Ram College (W)\tB.A. (Hons.) Sanskrit\t115-125\t108-118\t192-202\t0\t133-143\t0",
  "Zakir Husain Delhi College\tB.A. (Hons.) Urdu\t80-90\t166-176\t67-77\t0\t80-90\t0",
  "Deshbandhu College\tB.A. (Hons.) Sanskrit\t78-88\t199-209\t72-82\t337-347\t80-90\t0",
  "Mata Sundri College for Women (W)\tB.A. (Hons.) Hindi\t34-44\t0\t0\t0\t0\t0"
];

/* ── CONFIG ── */
const CATS = ['UR', 'OBC', 'SC', 'ST', 'EWS', 'PwBD'];
const CAT_LABELS = { UR: 'General (UR)', OBC: 'OBC', SC: 'SC', ST: 'ST', EWS: 'EWS', PwBD: 'PwBD' };
const BANDS = [
  { label: '900 and above', min: 900, max: 1200, color: '#0d1f4e' },
  { label: '850 – 900',     min: 850, max: 899,  color: '#16306b' },
  { label: '800 – 850',     min: 800, max: 849,  color: '#1a3a7c' },
  { label: '750 – 800',     min: 750, max: 799,  color: '#1e4090' },
  { label: '700 – 750',     min: 700, max: 749,  color: '#2152aa' },
  { label: '650 – 700',     min: 650, max: 699,  color: '#3b5fc0' },
  { label: '600 – 650',     min: 600, max: 649,  color: '#4f6dd0' },
  { label: '550 – 600',     min: 550, max: 599,  color: '#5b51d8' },
  { label: '500 – 550',     min: 500, max: 549,  color: '#7c3aed' },
  { label: '450 – 500',     min: 450, max: 499,  color: '#9333ea' },
  { label: 'Below 450',     min: 0,   max: 449,  color: '#a21caf' }
];

/* ── STATE — declared FIRST before any function runs ── */
var activeBand  = null;
var activeScore = null;

/* ── PARSE HELPERS ── */
function parseScore(s) {
  if (!s || s.trim() === '0') return null;
  var parts = s.trim().split('-');
  if (parts.length < 2) return null;
  var lo = parseInt(parts[0], 10);
  var hi = parseInt(parts[1], 10);
  if (isNaN(lo) || isNaN(hi)) return null;
  return { lo: lo, hi: hi };
}

/* ── BUILD DATA ── */
var DATA = [];
for (var i = 0; i < RAW.length; i++) {
  var cols = RAW[i].split('\t');
  if (cols.length < 8) continue;
  var cn = cols[0].trim();
  DATA.push({
    college:      cn,
    collegeClean: cn.replace(/\s*\(W\)\s*/g, '').trim(),
    subject:      cols[1].trim().replace(/^B\.A\. \(Hons\.\)\s*/, ''),
    isWomen:      cn.indexOf('(W)') !== -1,
    scores: {
      UR:   parseScore(cols[2]),
      OBC:  parseScore(cols[3]),
      SC:   parseScore(cols[4]),
      ST:   parseScore(cols[5]),
      EWS:  parseScore(cols[6]),
      PwBD: parseScore(cols[7])
    }
  });
}

/* ── BUILD SUBJECT LIST ── */
var subjSet = {};
for (var d = 0; d < DATA.length; d++) { subjSet[DATA[d].subject] = true; }
var SUBJECTS = Object.keys(subjSet).sort();

/* ── POPULATE SUBJECT DROPDOWN ── */
function populateSubjects() {
  var sel = document.getElementById('subjFilter');
  for (var s = 0; s < SUBJECTS.length; s++) {
    var opt = document.createElement('option');
    opt.value = SUBJECTS[s];
    opt.textContent = SUBJECTS[s];
    sel.appendChild(opt);
  }
}

/* ── STATS ── */
function updateStats() {
  document.getElementById('statEntries').textContent  = DATA.length;
  var collegeSet = {};
  for (var i = 0; i < DATA.length; i++) { collegeSet[DATA[i].collegeClean] = true; }
  document.getElementById('statColleges').textContent = Object.keys(collegeSet).length;
  document.getElementById('statSubjects').textContent = SUBJECTS.length;
}

/* ── TABS ── */
function buildTabs() {
  var container = document.getElementById('bandTabs');
  for (var i = 0; i < BANDS.length; i++) {
    (function(idx) {
      var btn = document.createElement('button');
      btn.className   = 'tab';
      btn.textContent = BANDS[idx].label;
      btn.onclick = function() {
        activeBand = (activeBand === idx) ? null : idx;
        var tabs = document.querySelectorAll('#bandTabs .tab');
        for (var t = 0; t < tabs.length; t++) {
          tabs[t].classList.toggle('active', t === activeBand);
        }
        render();
      };
      container.appendChild(btn);
    })(i);
  }
}

/* ── SCORE CHECK ── */
function applyScore() {
  var val = parseFloat(document.getElementById('scoreInput').value);
  if (!val || isNaN(val)) {
    document.getElementById('scoreInput').focus();
    return;
  }
  var cat = document.getElementById('catFilter').value;
  activeScore = val;
  document.getElementById('noticeScore').textContent = val;
  document.getElementById('noticeCat').textContent   = CAT_LABELS[cat];
  document.getElementById('scoreNotice').classList.add('show');
  document.getElementById('clearBtnBar').classList.add('show');
  activeBand = null;
  var tabs = document.querySelectorAll('#bandTabs .tab');
  for (var t = 0; t < tabs.length; t++) { tabs[t].classList.remove('active'); }
  document.querySelector('main').scrollIntoView({ behavior: 'smooth', block: 'start' });
  render();
}

function clearScore() {
  activeScore = null;
  document.getElementById('scoreInput').value = '';
  document.getElementById('scoreNotice').classList.remove('show');
  document.getElementById('clearBtnBar').classList.remove('show');
  render();
}

function syncAndRender() {
  if (activeScore !== null) {
    var cat = document.getElementById('catFilter').value;
    document.getElementById('noticeCat').textContent = CAT_LABELS[cat];
  }
  render();
}

/* ── CHANCE ── */
function getChance(score, lo) {
  var diff = score - lo;
  if (diff >= 30)  return { label: 'Safe',          cls: 'ch-safe' };
  if (diff >= 0)   return { label: 'Close',         cls: 'ch-close' };
  if (diff >= -20) return { label: 'Stretch',       cls: 'ch-stretch' };
  return              { label: 'Out of Range',    cls: 'ch-out' };
}

/* ── RENDER ── */
function render() {
  var cat        = document.getElementById('catFilter').value;
  var search     = document.getElementById('searchInput').value.toLowerCase().trim();
  var subj       = document.getElementById('subjFilter').value;
  var showChance = activeScore !== null;

  /* filter rows */
  var filtered = [];
  for (var i = 0; i < DATA.length; i++) {
    var row = DATA[i];
    if (search && row.college.toLowerCase().indexOf(search) === -1 && row.subject.toLowerCase().indexOf(search) === -1) continue;
    if (subj && row.subject !== subj) continue;
    if (showChance) {
      var sc = row.scores[cat];
      if (!sc || (activeScore - sc.lo) < -20) continue;
    }
    filtered.push(row);
  }

  var container  = document.getElementById('results');
  container.innerHTML = '';

  var bandsToShow = (activeBand !== null) ? [BANDS[activeBand]] : BANDS;
  var total = 0;
  var otherCats = [];
  for (var c = 0; c < CATS.length; c++) { if (CATS[c] !== cat) otherCats.push(CATS[c]); }

  for (var b = 0; b < bandsToShow.length; b++) {
    var band = bandsToShow[b];
    var rows = [];
    for (var r = 0; r < filtered.length; r++) {
      var sc2 = filtered[r].scores[cat];
      if (sc2 && sc2.lo >= band.min && sc2.lo <= band.max) rows.push(filtered[r]);
    }
    if (!rows.length) continue;
    total += rows.length;

    /* sort descending by cutoff */
    rows.sort(function(a, b2) {
      return (b2.scores[cat] ? b2.scores[cat].lo : 0) - (a.scores[cat] ? a.scores[cat].lo : 0);
    });

    /* build rows HTML */
    var tbodyRows = '';
    for (var ri = 0; ri < rows.length; ri++) {
      var row2    = rows[ri];
      var rowSc   = row2.scores[cat];
      var wTag    = row2.isWomen ? '<span class="w-tag">W</span>' : '';
      var scoreStr = rowSc ? (rowSc.lo + '&ndash;' + rowSc.hi) : '&mdash;';

      var chanceCell = '';
      if (showChance && rowSc) {
        var ch = getChance(activeScore, rowSc.lo);
        chanceCell = '<td><span class="chance ' + ch.cls + '">' + ch.label + '</span></td>';
      }

      var otherCells = '';
      for (var oc = 0; oc < otherCats.length; oc++) {
        var os = row2.scores[otherCats[oc]];
        otherCells += os ? '<td class="td-other">' + os.lo + '&ndash;' + os.hi + '</td>'
                         : '<td class="td-other td-na">&mdash;</td>';
      }

      tbodyRows += '<tr>' +
        '<td class="td-num">'   + (ri + 1) + '</td>' +
        '<td class="td-clg">'   + row2.collegeClean + wTag + '</td>' +
        '<td class="td-subj">'  + row2.subject + '</td>' +
        '<td class="td-score">' + scoreStr + '</td>' +
        chanceCell +
        otherCells +
        '</tr>';
    }

    /* build other-cat headers */
    var otherHdrs = '';
    for (var oh = 0; oh < otherCats.length; oh++) { otherHdrs += '<th>' + otherCats[oh] + '</th>'; }

    var section = document.createElement('div');
    section.className = 'band-section';
    section.innerHTML =
      '<div class="band-hdr" style="border-left-color:' + band.color + '">' +
        '<div>' +
          '<div class="band-title">' + band.label + '</div>' +
          '<div class="band-sub">' + CAT_LABELS[cat] + ' category cutoff range</div>' +
        '</div>' +
        '<span class="band-count">' + rows.length + ' ' + (rows.length === 1 ? 'entry' : 'entries') + '</span>' +
      '</div>' +
      '<div class="tbl-wrap">' +
        '<table>' +
          '<thead><tr>' +
            '<th>#</th>' +
            '<th>College</th>' +
            '<th>Subject</th>' +
            '<th class="hl">' + CAT_LABELS[cat] + '</th>' +
            (showChance ? '<th class="hl">Chance</th>' : '') +
            otherHdrs +
          '</tr></thead>' +
          '<tbody>' + tbodyRows + '</tbody>' +
        '</table>' +
      '</div>';

    container.appendChild(section);
  }

  if (!total) {
    container.innerHTML =
      '<div class="empty">' +
        '<div class="empty-title">No results found</div>' +
        '<div class="empty-sub">Try adjusting your filters or clearing the score filter.</div>' +
      '</div>';
  }
}

/* ── EVENT LISTENERS ── */
document.getElementById('scoreInput').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') applyScore();
});

window.addEventListener('scroll', function() {
  var btn = document.getElementById('scrollTop');
  if (btn) btn.classList.toggle('show', window.scrollY > 500);
});

/* ── INIT — runs after all variables are declared ── */
populateSubjects();
updateStats();
buildTabs();
render();
