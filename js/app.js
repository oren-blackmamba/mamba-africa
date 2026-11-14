(function(){
var NODES={};
function N(id,he,en,c,r,lo,la,o){var n={he:he,en:en,c:c,r:r,lo:lo,la:la};if(o)for(var k in o)n[k]=o[k];NODES[id]=n}
/* east + south */
N('juba','Juba','Juba','South Sudan','east',31.58,4.85,{d:1});
N('kampala','Kampala','Kampala','Uganda','east',32.58,0.35,{m:1});
N('nairobi','Nairobi','Nairobi','Kenya','east',36.82,-1.29,{m:1});
N('goma','Goma','Goma','DR Congo (DRC)','east',29.22,-1.68,{d:1});
N('kigali','Kigali','Kigali','Rwanda','east',30.06,-1.95,{m:1});
N('bujumbura','Bujumbura','Bujumbura','Burundi','east',29.36,-3.38,{m:1});
N('arusha','Arusha','Arusha','Tanzania','east',36.68,-3.37,{m:1});
N('mombasa','Mombasa','Mombasa','Kenya','east',39.67,-4.04,{m:1});
N('dar','Dar es Salaam','Dar es Salaam','Tanzania','east',39.28,-6.8,{m:1});
N('mbeya','Mbeya','Mbeya','Tanzania','east',33.45,-8.9);
N('lilongwe','Lilongwe','Lilongwe','Malawi','east',33.79,-13.96,{m:1});
N('lusaka','Lusaka','Lusaka','Zambia','east',28.29,-15.39,{m:1});
N('livingstone','Livingstone','Livingstone','Zambia','east',26.15,-17.5);
N('victoriafalls','Victoria Falls','Victoria Falls','Zimbabwe','east',25.55,-18.15);
N('addis','Addis Ababa','Addis Ababa','Ethiopia','east',38.75,9.03,{m:1});
N('moyale','Moyale','Moyale','Kenya','east',39.05,3.52);
N('kisumu','Kisumu','Kisumu','Kenya','east',34.77,-0.09);
N('mwanza','Mwanza','Mwanza','Tanzania','east',32.9,-2.52,{m:1});
N('bukoba','Bukoba','Bukoba','Tanzania','east',31.81,-1.33);
N('moshi','Moshi','Moshi','Tanzania','east',37.34,-3.35);
N('tanga','Tanga','Tanga','Tanzania','east',39.1,-5.07);
N('musanze','Musanze','Musanze','Rwanda','east',29.85,-1.6);
N('kisoro','Kisoro','Kisoro','Uganda','east',29.5,-1.12);
N('kabale','Kabale','Kabale','Uganda','east',30.25,-1.2);
N('huye','Huye','Huye','Rwanda','east',29.74,-2.6);
N('rusizi','Rusizi','Rusizi','Rwanda','east',29.1,-2.38);
N('bukavu','Bukavu','Bukavu','DR Congo (DRC)','east',28.7,-2.7,{d:1});
N('blantyre','Blantyre','Blantyre','Malawi','east',35.0,-15.79);
N('tete','Tete','Tete','Mozambique','east',33.57,-16.16);
N('beira','Beira','Beira','Mozambique','east',34.84,-19.84);
N('maputo','Maputo','Maputo','Mozambique','east',32.57,-25.97,{m:1});
N('harare','Harare','Harare','Zimbabwe','east',31.05,-17.83,{m:1});
N('bulawayo','Bulawayo','Bulawayo','Zimbabwe','east',28.58,-20.15);
N('mutare','Mutare','Mutare','Zimbabwe','east',32.67,-18.97);
N('johannesburg','Johannesburg','Johannesburg','South Africa','east',28.05,-26.2,{m:1});
N('gaborone','Gaborone','Gaborone','Botswana','east',25.9,-24.65);
N('francistown','Francistown','Francistown','Botswana','east',27.51,-21.17);
N('capetown','Cape Town','Cape Town','South Africa','east',18.42,-33.92,{m:1});
N('windhoek','Windhoek','Windhoek','Namibia','east',17.08,-22.56,{m:1});
N('katima','Katima Mulilo','Katima Mulilo','Namibia','east',24.0,-17.45);
N('kasane','Kasane','Kasane','Botswana','east',25.0,-17.75);
N('ndola','Ndola','Ndola','Zambia','east',28.64,-12.97);
N('lubumbashi','Lubumbashi','Lubumbashi','DR Congo (DRC)','east',27.48,-11.66,{d:1});
N('mtwara','Mtwara','Mtwara','Tanzania','east',40.18,-10.27);
N('pemba','Pemba','Pemba','Mozambique','east',40.52,-12.97);
N('casablanca','Casablanca','Casablanca','Morocco','west',-7.59,33.57,{m:1});
N('marrakech','Marrakech','Marrakech','Morocco','west',-8.0,31.63);
N('agadir','Agadir','Agadir','Morocco','west',-9.6,30.43);
N('dakhla','Dakhla','Dakhla','Morocco (Western Sahara)','west',-15.96,23.68);
N('nouadhibou','Nouadhibou','Nouadhibou','Mauritania','west',-17.03,20.93);
N('cairo','Cairo','Cairo','Egypt','east',31.24,30.04,{m:1});
N('aswan','Aswan','Aswan','Egypt','east',32.9,24.09);
N('wadihalfa','Wadi Halfa','Wadi Halfa','Sudan','east',31.33,21.8,{d:1});
N('diredawa','Dire Dawa','Dire Dawa','Ethiopia','east',41.87,9.6);
N('djibouti','Djibouti','Djibouti','Djibouti','east',43.15,11.59,{m:1});
N('chipata','Chipata','Chipata','Zambia','east',32.64,-13.64);
N('maseru','Maseru','Maseru','Lesotho','east',27.48,-29.31);
N('mbabane','Mbabane','Mbabane','Eswatini','east',31.13,-26.31);
N('oshakati','Oshakati','Oshakati','Namibia','east',15.7,-17.79);
N('ondjiva','Ondjiva','Ondjiva','Angola','east',15.74,-17.07);
N('bamako','Bamako','Bamako','Mali','west',-8.0,12.65,{m:1,d:1});
N('ouagadougou','Ouagadougou','Ouagadougou','Burkina Faso','west',-1.52,12.37,{m:1,d:1});
N('niamey','Niamey','Niamey','Niger','west',2.11,13.51,{m:1,d:1});
N('bobo','Bobo-Dioulasso','Bobo-Dioulasso','Burkina Faso','west',-4.3,11.18,{d:1});
N('korhogo','Korhogo','Korhogo','Ivory Coast','west',-5.63,9.46);
N('kano','Kano','Kano','Nigeria','west',8.52,12.0,{d:1});
N('abuja','Abuja','Abuja','Nigeria','west',7.49,9.06,{m:1});
N('yaounde','Yaoundé','Yaoundé','Cameroon','west',11.52,3.87,{m:1});
N('libreville','Libreville','Libreville','Gabon','west',9.45,0.39,{m:1});
N('ndjamena','N\u2019Djamena','N\u2019Djamena','Chad','west',15.05,12.13,{m:1,d:1});
N('maroua','Maroua','Maroua','Cameroon','west',14.32,10.6,{d:1});
N('pointenoire','Pointe-Noire','Pointe-Noire','Congo-Brazzaville','west',11.86,-4.78);
N('matadi','Matadi','Matadi','DR Congo (DRC)','west',13.45,-5.82);
N('luanda','Luanda','Luanda','Angola','west',13.23,-8.84,{m:1});
N('lubango','Lubango','Lubango','Angola','east',13.49,-14.92);
N('walvis','Walvis Bay','Walvis Bay','Namibia','east',14.5,-22.96);
N('rundu','Rundu','Rundu','Namibia','east',19.77,-17.92);
N('maun','Maun','Maun','Botswana','east',23.42,-19.99);
N('bloemfontein','Bloemfontein','Bloemfontein','South Africa','east',26.2,-29.12);
N('durban','Durban','Durban','South Africa','east',31.02,-29.86,{m:1});
N('rabat','Rabat','Rabat','Morocco','west',-6.84,34.02);
N('tangier','Tangier','Tangier','Morocco','west',-5.8,35.76);
N('fes','Fes','Fes','Morocco','west',-5.0,34.03);
N('alexandria','Alexandria','Alexandria','Egypt','east',29.92,31.2);
N('luxor','Luxor','Luxor','Egypt','east',32.64,25.7);
N('hargeisa','Hargeisa','Hargeisa','Somaliland','east',44.06,9.56);
N('dodoma','Dodoma','Dodoma','Tanzania','east',35.74,-6.17);
N('morogoro','Morogoro','Morogoro','Tanzania','east',37.67,-6.82);
N('iringa','Iringa','Iringa','Tanzania','east',35.7,-7.77);
N('kigoma','Kigoma','Kigoma','Tanzania','east',29.63,-4.88);
N('mzuzu','Mzuzu','Mzuzu','Malawi','east',34.02,-11.46);
N('chimoio','Chimoio','Chimoio','Mozambique','east',33.48,-19.12);
N('quelimane','Quelimane','Quelimane','Mozambique','east',36.89,-17.88);
N('nampula','Nampula','Nampula','Mozambique','east',39.27,-15.12);
N('inhambane','Inhambane','Inhambane','Mozambique','east',35.38,-23.87);
N('kitwe','Kitwe','Kitwe','Zambia','east',28.2,-12.8);
N('jinja','Jinja','Jinja','Uganda','east',33.2,0.43);
N('mbale','Mbale','Mbale','Uganda','east',34.18,1.08);
N('gulu','Gulu','Gulu','Uganda','east',32.3,2.77);
N('mbarara','Mbarara','Mbarara','Uganda','east',30.66,-0.61);
N('fortportal','Fort Portal','Fort Portal','Uganda','east',30.27,0.67);
N('eldoret','Eldoret','Eldoret','Kenya','east',35.27,0.51);
N('kasese','Kasese','Kasese','Uganda','east',30.08,0.18);
N('beni','Beni','Beni','DR Congo (DRC)','east',29.47,0.5,{d:1});
N('kinshasa','Kinshasa','Kinshasa','DR Congo (DRC)','west',15.36,-4.36,{m:1});
N('brazzaville','Brazzaville','Brazzaville','Congo-Brazzaville','west',15.17,-4.2,{m:1});
/* west */
N('dakar','Dakar','Dakar','Senegal','west',-17.44,14.69,{m:1});
N('banjul','Banjul','Banjul','The Gambia','west',-16.58,13.45,{m:1});
N('abidjan','Abidjan','Abidjan','Ivory Coast','west',-4.02,5.36,{m:1});
N('kumasi','Kumasi','Kumasi','Ghana','west',-1.62,6.69,{m:1});
N('accra','Accra','Accra','Ghana','west',-0.19,5.6,{m:1});
N('lome','Lomé','Lomé','Togo','west',1.22,6.13,{m:1});
N('cotonou','Cotonou','Cotonou','Benin','west',2.42,6.37,{m:1});
N('lagos','Lagos','Lagos','Nigeria','west',3.38,6.52,{m:1});
N('saintlouis','Saint-Louis','Saint-Louis','Senegal','west',-16.5,16.03);
N('nouakchott','Nouakchott','Nouakchott','Mauritania','west',-15.98,18.08,{m:1});
N('tambacounda','Tambacounda','Tambacounda','Senegal','west',-13.67,13.77);
N('ziguinchor','Ziguinchor','Ziguinchor','Senegal','west',-16.27,12.58);
N('bissau','Bissau','Bissau','Guinea-Bissau','west',-15.6,11.86,{m:1});
N('conakry','Conakry','Conakry','Guinea','west',-13.71,9.64,{m:1});
N('freetown','Freetown','Freetown','Sierra Leone','west',-13.23,8.48,{m:1});
N('monrovia','Monrovia','Monrovia','Liberia','west',-10.8,6.3,{m:1});
N('tamale','Tamale','Tamale','Ghana','west',-0.84,9.4);
N('portonovo','Porto-Novo','Porto-Novo','Benin','west',3.0,6.95);
N('calabar','Calabar','Calabar','Nigeria','west',8.33,4.95);
N('douala','Douala','Douala','Cameroon','west',9.7,4.05,{d:1});

function mapq(code,city){return 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(code+' '+city)}

var LEGS=[
{id:'nai-kam',a:'nairobi',b:'kampala',border:{name:'Busia / Malaba',pair:'Kenya ⇄ Uganda'},h:[12,14],price:'$18–30',flag:'ok',
 cos:['Modern Coast','Easy Coach','Mash Poa','Dreamline','Trinity','Simba Coach'],
 fromA:[{n:'Modern Coast, Cross Lane (central Nairobi)',code:'PR9H+65'},{n:'Mash, corner of Duruma Rd and Accra Rd',code:'PR9G+5X'},{n:'Dreamline, central Nairobi',code:'PR9G+6X'},{n:'Easy Coach, central Nairobi',code:'PR6H+CC'}],
 toB:[{n:'Modern Coast, De Winton St (central Kampala)',code:'8H8Q+2P'},{n:'Easy Coach, De Winton St (central Kampala)',code:'8H8R+JQ'},{n:'Dreamline, De Winton St (central Kampala)',code:'8H8Q+4V'},{n:'Mash, De Winton St (near the National Theatre)',code:'8H8Q+3R'}],
 steps:['Buy your ticket the day before at the company office or in the app. Most international buses leave in the evening (Modern Coast, for example, at 19:00 or 20:00) and reach the border in the morning.','The bus goes via Kisumu to Busia, or via Eldoret to Malaba. Both crossings work.','At the border you get off with all your bags. You get an exit stamp on one side, enter on the other, and the bus waits or you rejoin it there.','From the border to Kampala is about 5 hours.'],
 tips:['One bus goes all the way, with no change. The trip takes 12-14 hours.','In both countries traffic drives on the left.','Modern Coast is considered one of the biggest, but a license suspension and accidents on the route have been reported. Compare companies and read recent reviews.','Change money in Kampala, not at the border. The border rate is bad.'],
 visa:'EATV (100$) or Uganda e-visa (50$) + Kenya eTA (30$)'},
{id:'kam-kig',a:'kampala',b:'kigali',border:{name:'Gatuna / Katuna',pair:'Uganda ⇄ Rwanda'},h:[8,10],price:'$12–20',flag:'ok',
 cos:['Volcano Express','Trinity Express','Jaguar Executive','Horizon','Mash'],
 fromA:[{n:'Jaguar Bus Terminal, Kampala',code:'Jaguar Bus Terminal'},{n:'Trinity Bus Terminal',code:'Trinity Bus Terminal'}],
 toB:[{n:'Nyabugogo station, Kigali (main bus station)',code:'Nyabugogo Bus Station'}],
 steps:['Buy your ticket the day before. The route has day and night departures. The Jaguar night bus left at 20:00 and cost about 70,000 Ugandan shillings (about 20$) in 2023.','The border is called Katuna on the Ugandan side and Gatuna on the Rwandan side. You get off with your things, exit Uganda and enter Rwanda.','Some buses use the Kagitumba crossing in north-east Rwanda. Ask the driver.'],
 tips:['Rwanda is one hour behind Uganda. Move your watch.','Plastic bags are banned in Rwanda. Do not bring them in.','The Gatuna crossing was closed for a long period in the past. Check that it is open before you buy a ticket.','Ask for a seat at the front of the bus. That way it is easy to get off first at the border.'],
 visa:'EATV or Rwanda visa (50$) + Uganda visa. EATV is valid for both sides'},
{id:'nai-aru',a:'nairobi',b:'arusha',border:{name:'Namanga One-Stop',pair:'Kenya ⇄ Tanzania'},h:[5,6],price:'$20–35',flag:'ok',
 cos:['Riverside Shuttle','Impala Shuttle','All Africa Shuttle','East Africa Shuttles'],
 fromA:[{n:'Riverside office, Nairobi',code:'Riverside Shuttle Nairobi'},{n:'Impala office, Nairobi (departs 08:00)',code:'Impala Shuttle Nairobi'},{n:'Pickup at JKIA airport (about 08:30)',code:'JKIA Nairobi'}],
 toB:[{n:'Riverside, Sokoine Rd, Arusha',code:'Riverside Shuttle Sokoine Rd Arusha'},{n:'Impala, corner of Simeon and Vijana Rd, near Impala Square',code:'Impala Shuttle Arusha'}],
 steps:['The shuttle leaves in the morning. About 2.5 hours to Namanga, including a short stop at a souvenir shop and restaurant.','At Namanga both sides are under one roof (One-Stop Border Post). You get off with all your bags and complete exit from Kenya and entry to Tanzania.','About 2 more hours to Arusha.'],
 tips:['This is a tourist shuttle, not a local bus. Comfortable and reliable.','At the border, sellers will push souvenirs. You can politely decline.','One traveler reported that the price at a local ticket counter was less than half of the online booking price. Worth checking both.','Get the Tanzania visa in advance.'],
 visa:'Tanzania: separate e-visa (50$). EATV is not valid. Kenya: eTA (30$)'},
{id:'nai-mom',a:'nairobi',b:'mombasa',border:null,h:[8,10],price:'Verify on site',flag:'verify',
 cos:['Modern Coast','Mash','Tahmeed Express'],
 fromA:[{n:'Modern Coast, Cross Lane (central Nairobi)',code:'PR9H+65'}],
 toB:[{n:'Modern Coast offices, Mombasa',code:'Modern Coast Mombasa'}],
 steps:['Domestic section within Kenya, no border. You can book through the company app or by phone, and receive confirmation by SMS.','Modern Coast runs the most common route between Nairobi and Mombasa.'],
 tips:['Book a seat the day before, especially on weekends and holidays.'],visa:''},
{id:'mom-dar',a:'mombasa',b:'dar',border:{name:'Lunga Lunga / Horohoro',pair:'Kenya ⇄ Tanzania'},h:[12,14],price:'Up to $20',flag:'verify',
 cos:['Modern Coast','Tahmeed Express'],
 fromA:[{n:'Modern Coast or Tahmeed offices, Mombasa',code:'Modern Coast Mombasa'}],
 toB:[{n:'Dar es Salaam, company offices',code:'Dar es Salaam bus terminal'}],
 steps:['Buses leave early in the morning. The Lunga Lunga crossing is less than 2 hours from Mombasa.','The last Tahmeed bus leaves at 07:30.','At the border you get off with all your bags. Exit Kenya and enter Tanzania.'],
 tips:['A yellow fever certificate is required from all nationalities at this crossing.','Pay online (M-Pesa or card) on the company websites. If you do not have M-Pesa, buy at the office.','In Tanzania the visa is electronic and separate.'],
 visa:'Tanzania: e-visa (50$) + Kenya eTA (30$)'},
{id:'kig-buj',a:'kigali',b:'bujumbura',border:{name:'Nemba / Gasenyi',pair:'Rwanda ⇄ Burundi'},h:[5,7],price:'Verify on site',flag:'verify',
 cos:['Volcano Express'],
 fromA:[{n:'Nyabugogo station, Kigali',code:'Nyabugogo Bus Station'}],
 toB:[{n:'Main bus station, Bujumbura',code:'Bujumbura bus station'}],
 steps:['There are Volcano Express buses that cross to Burundi.','In the past, because of the political situation, direct services were suspended and passengers crossed on foot and continued by local bus. This may still be the case on some days.'],
 tips:['Burundi is not included in EATV and requires a separate visa.','Check the security situation and whether the direct service is running before you go to the station.'],
 visa:'Burundi: separate visa. Check the official website'},
{id:'kig-gom',a:'kigali',b:'goma',danger:true,border:{name:'Grande Barrière (Rubavu / Goma)',pair:'Rwanda ⇄ Congo'},h:[4,5],price:'Verify on site',flag:'verify',
 cos:['Buses from Nyabugogo to Rubavu (Gisenyi)'],
 fromA:[{n:'Nyabugogo station, Kigali (bus to Rubavu)',code:'Nyabugogo Bus Station'}],
 toB:[{n:'Grande Barrière crossing, Goma',code:'Grande Barriere Goma'}],
 steps:['You travel from Kigali to Rubavu, and from there cross the Grande Barrière on foot.','As of September 2025 the crossing hours were 06:00-24:00.'],
 tips:['Goma has been under M23 control since January 2025. The airport is closed and access is through Rwanda.','Many countries warn against travel to the area. It is unclear whether and how foreigners can enter.','We have no information about bus companies on the Congolese side.'],
 visa:'Congo: visa required. Check, and the area is marked as dangerous'},
{id:'kam-jub',a:'kampala',b:'juba',danger:true,border:{name:'Elegu / Nimule',pair:'Uganda ⇄ South Sudan'},h:[12,18],price:'Verify on site',flag:'verify',
 cos:['Eco Bus','Friendship Coach','Gateway Bus Services','Juba Express','Baby Coach'],
 fromA:[{n:'Company offices in Kampala',code:'Friendship Coach Kampala'}],
 toB:[{n:'Juba bus terminal (moved about 10 km from the center)',code:'Juba bus terminal'}],
 steps:['There are direct buses from Kampala to Juba, via Elegu on the Ugandan side and Nimule on the South Sudanese side.','Following the move of the terminal in Juba, Ugandan companies have sometimes stopped direct trips and dropped passengers at Elegu or Nimule.'],
 tips:['There have been attacks on buses on the Juba-Nimule road, and in summer 2026 passengers were reported stranded in Nimule.','South Sudan is at risk level 4 in US travel advisories.'],
 visa:'South Sudan: visa required. The area is marked as dangerous'},
{id:'kig-dar',a:'kigali',b:'dar',border:{name:'Rusumo Falls',pair:'Rwanda ⇄ Tanzania'},h:[24,30],price:'Verify on site (reported about $45)',flag:'verify',
 cos:['Trinity Express'],
 fromA:[{n:'Nyabugogo station, Kigali (departs around 04:00)',code:'Nyabugogo Bus Station'}],
 toB:[{n:'Ubungo, Dar es Salaam',code:'Ubungo Bus Terminal'}],
 steps:['A traveler report describes a bus that leaves around 04:00, reaches Rusumo around 07:00, and finishes the next morning.','The bus turns off at Singida and goes via Dodoma. It does not pass through Arusha. To get to Arusha, change at Singida.','Alternative: minibus from Kigali to Rusumo, cross the border, and take a local bus on the Tanzanian side.'],
 tips:['The information about the direct route is relatively old and other sources claim there is no direct route. Check with Trinity before planning around it.','Many go around via Kampala and Nairobi. It is longer, and safer because the routes are regular.'],
 visa:'Tanzania: e-visa (50$) in advance'},
{id:'aru-dar',a:'arusha',b:'dar',border:null,h:[9,10],price:'~$20',flag:'verify',
 cos:['BM Coach'],
 fromA:[{n:'Arusha bus station, Makongoro Rd',code:'Arusha Bus Stand Makongoro Rd'}],
 toB:[{n:'Ubungo Intl Bus Terminal, Dar es Salaam',code:'Ubungo Bus Terminal'}],
 steps:['Domestic section within Tanzania, no border.','There are many departures per day. Arrive at the station early in the morning.'],
 tips:['Book a seat in advance in high season.'],visa:''},
{id:'dar-mbe',a:'dar',b:'mbeya',border:null,h:[12,15],price:'$21–22',flag:'verify',
 cos:['New Force','Luwinzo'],
 fromA:[{n:'Magufuli Bus Terminal, Dar es Salaam',code:'Magufuli Bus Terminal Dar es Salaam'}],
 toB:[{n:'Mbeya bus station',code:'Mbeya bus stand'}],
 steps:['Domestic section within Tanzania. Buses about every four hours, some leave in the early hours (about 02:00).','Alternative: TAZARA train between Dar es Salaam and Mbeya, twice a week, about 21-24 hours.'],
 tips:['Do not get confused: Tunduma is the border with Zambia, not with Malawi.'],visa:''},
{id:'dar-lus',a:'dar',b:'lusaka',border:{name:'Tunduma / Nakonde',pair:'Tanzania ⇄ Zambia'},h:[31,35],price:'Verify on site',flag:'ok',
 cos:['Shalom Bus','Taqwa Bus','Royal Coach'],
 fromA:[{n:'Magufuli Bus Terminal, Dar es Salaam',code:'Magufuli Bus Terminal Dar es Salaam'}],
 toB:[{n:'Intercity Bus Terminus, Lusaka',code:'Intercity Bus Terminus Lusaka'}],
 steps:['The bus continues past the border with no change at Nakonde.','At the border you get off and go through inspection. Exit Tanzania, fill in the Zambia entry forms, and a visa if needed.'],
 tips:['The border is open 24 hours. Crossing alone at night is not recommended.','Alternative: TAZARA train from Dar es Salaam to Kapiri Mposhi near Lusaka, twice a week, about 46-50 hours.','Company quality varies, compare before you buy.'],
 visa:'Zambia: visa on arrival for most nationalities, or e-visa. Tanzania: e-visa in advance'},
{id:'mbe-lus',a:'mbeya',b:'lusaka',border:{name:'Tunduma / Nakonde',pair:'Tanzania ⇄ Zambia'},h:[15,17],price:'Verify on site',flag:'verify',
 cos:['Mbeya-Tunduma shuttle','Shalom Bus','Taqwa Bus','Royal Coach'],
 fromA:[{n:'Mbeya bus station',code:'Mbeya bus stand'}],
 toB:[{n:'Intercity Bus Terminus, Lusaka',code:'Intercity Bus Terminus Lusaka'}],
 steps:['Shuttle or dala-dala from Mbeya to Tunduma (about 1.5 hours), cross on foot, and a bus from Nakonde to Lusaka.','You can also board the direct Dar es Salaam-Lusaka bus on the way, if there is room.'],
 tips:['From Tunduma to Nakonde is the same border as the Dar es Salaam route.','In Tanzania the visa is electronic and separate.'],
 visa:'Zambia: visa on arrival or e-visa. Tanzania: e-visa in advance'},
{id:'mbe-lil',a:'mbeya',b:'lilongwe',border:{name:'Songwe / Kasumulu',pair:'Tanzania ⇄ Malawi'},h:[12,15],price:'Verify on site',flag:'verify',
 cos:['Local shuttle/dala-dala','Local buses on the Malawi side'],
 fromA:[{n:'Mbeya, shuttle to the border (about 100 km south)',code:'Mbeya Tanzania'}],
 toB:[{n:'Karonga, then a bus to Lilongwe',code:'Karonga Malawi'}],
 steps:['There is no direct route. From Mbeya you go to the Songwe border, about 100 km south.','The border crossing is about a 5-10 minute walk over the Songwe river bridge.','On the Malawi side take a bus to Karonga (about 1 hour), and from there a bus to Lilongwe. All together about 12-15 hours.'],
 tips:['Prices vary. Bargain for the shuttle to the border before you get in.','It is recommended to reach the border in the morning so you are not stuck in Karonga at night.'],
 visa:'Malawi: check the official website'},
{id:'lil-lus',a:'lilongwe',b:'lusaka',border:{name:'Mchinji / Mwami',pair:'Malawi ⇄ Zambia'},h:[10,12],price:'Verify on site',flag:'ok',
 cos:['KOBS (direct bus)','Jonda Bus (Chipata-Lusaka)','Matola (local minibus)'],
 fromA:[{n:'Lilongwe bus station',code:'Lilongwe bus station'}],
 toB:[{n:'Intercity Bus Terminus, Lusaka',code:'Intercity Bus Terminus Lusaka'}],
 steps:['There is a direct KOBS bus, about 10-11 hours including the border.','Alternative in sections: Matola (minibus) from Lilongwe to Mchinji, under $10, between 1.5 and 4 hours. From there a shared taxi to Chipata (under an hour, leaves when full), and from Chipata a bus to Lusaka about 6 hours. Jonda leaves at 05:00.','In Chipata you can stay the night before the morning bus.'],
 tips:['Buy a ticket the day before.','Money changers at the border give a bad rate. Ask the immigration officer what the rate is.','Zambia requires a visa, and the passport must be valid for six months.'],
 visa:'Zambia: visa on arrival or e-visa. Malawi: check'},
{id:'lus-liv',a:'lusaka',b:'livingstone',border:null,h:[6,7],price:'$4–7',flag:'verify',
 cos:['Lusaka-Livingstone companies (verify at the station)'],
 fromA:[{n:'Intercity Bus Terminus, Lusaka',code:'Intercity Bus Terminus Lusaka'}],
 toB:[{n:'Livingstone bus station',code:'Livingstone bus station'}],
 steps:['Domestic section within Zambia, about 485 km. The road was recently renovated and the buses are described as being in good condition.'],
 tips:['Company names have not been verified. Ask at the station which company is most convenient.'],visa:''},
{id:'liv-vfa',a:'livingstone',b:'victoriafalls',border:{name:'Victoria Falls Bridge',pair:'Zambia ⇄ Zimbabwe'},h:[1,2],price:'Verify on site',flag:'verify',
 cos:['Taxis and shuttles between the towns'],
 fromA:[{n:'Livingstone, town center',code:'Livingstone Zambia'}],
 toB:[{n:'Victoria Falls, town center',code:'Victoria Falls town Zimbabwe'}],
 steps:['The towns are close to each other, and the border is at the Victoria Falls Bridge. You cross by taxi or on foot.','Exit Zambia and enter Zimbabwe.'],
 tips:['We have not verified the visa fees and the current procedure. Check before you go.'],
 visa:'Zimbabwe: check (there is a joint KAZA visa for Zambia and Zimbabwe)'},
{id:'dak-ban',a:'dakar',b:'banjul',border:{name:'Karang / Amdallai',pair:'Senegal ⇄ The Gambia'},h:[5,7],price:'$16–25',flag:'ok',
 cos:['Dakar Dem Dikk + GTSC','Shared taxis (sept-place)'],
 fromA:[{n:'Dem Dikk, Parcelles Assainies terminal (Dakar)',code:'Parcelles Assainies Terminus Dakar'},{n:'Gare des Pompiers (shared taxis to Karang)',code:'Gare routière des Pompiers Dakar'}],
 toB:[{n:'GTSC, Kanifing',code:'GTSC Kanifing Bus Station'},{n:'Barra–Banjul ferry (35 min)',code:'Barra Ferry Terminal'}],
 steps:['The direct Dem Dikk and GTSC service left at 07:00 on Monday, Wednesday and Friday from Dakar, and on Sunday, Tuesday and Thursday from Banjul (2017 timetable, verify on site).','At Karang all passengers get off and cross on foot. You can also cross from shared taxis from Pompiers that go all the way to the border, then take a short taxi.','Those arriving on the north side reach Barra, then take the ferry to Banjul.'],
 tips:['Karang is the common crossing. There is also a crossing at Farafenni for a different route.','In 2021 there were clashes between Senegalese drivers and Gambian buses at Karang. A direct bus may be stopped.','A yellow fever certificate is required.'],
 visa:'Senegal and The Gambia: check the official website for your passport'},
{id:'acc-kum',a:'accra',b:'kumasi',border:null,h:[4,5],price:'Verify on site',flag:'verify',
 cos:['STC','VIP','OA Travel & Tours'],
 fromA:[{n:'STC, Tudu station (Accra)',code:'STC Tudu Bus Station Accra'}],
 toB:[{n:'STC and VIP stations in Kumasi',code:'STC Kumasi'}],
 steps:['Domestic route within Ghana, no border. Regular daily services.'],
 tips:['Kumasi is the heart of the Ashanti region and is not far from the northern border with the Upper West, where a yellow fever outbreak was reported.'],visa:''},
{id:'acc-abi',a:'accra',b:'abidjan',border:{name:'Elubo / Noé',pair:'Ghana ⇄ Ivory Coast'},h:[10,14],price:'Verify on site',flag:'verify',
 cos:['Direct buses (company names: verify at the station)'],
 fromA:[{n:'Accra, international bus stations',code:'STC Tudu Bus Station Accra'}],
 toB:[{n:'Adjamé, Abidjan (bus hub)',code:'Gare routière Adjame Abidjan'}],
 steps:['There are direct buses between Accra and Abidjan, and shared taxis that are more frequent but pricier and slower.','The border (Elubo on the Ghana side, Noé on the Ivorian side) closes at night, so plan to arrive during the day.'],
 tips:['Ivory Coast requires a visa and a yellow fever certificate.','There have been closures at the Noé crossing in the past. Check that the crossing is open.'],
 visa:'Ivory Coast: visa required. Check the official website'},
{id:'acc-lom',a:'accra',b:'lome',border:{name:'Aflao / Kodjoviakopé',pair:'Ghana ⇄ Togo'},h:[4,5],price:'$15–21',flag:'ok',
 cos:['STC','VIP Jeoun','OA Travel','Imperial Express'],
 fromA:[{n:'STC, Tudu station (Accra)',code:'STC Tudu Bus Station Accra'}],
 toB:[{n:'Gare de Lomé / Circle station',code:'Gare Lomé Togo'}],
 steps:['STC goes to Aflao. This is the busiest crossing in Togo.','Get off and cross on foot. After the border take a moto-taxi into Lomé.','Continue as needed by bus, taxi or moto-taxi.'],
 tips:['In Togo you pay in CFA francs and in Ghana in cedis. Change only a little money at the border.','Lomé is right next to the border, no long onward trip needed.','A yellow fever outbreak was reported in Ghana, see the safety section.'],
 visa:'Togo: e-visa in advance. Ghana: check'},
{id:'lom-cot',a:'lome',b:'cotonou',border:{name:'Hillacondji / Sanvee-Condji',pair:'Togo ⇄ Benin'},h:[3,4],price:'~$15–50',flag:'verify',
 cos:['Shared taxis','Private taxi'],
 fromA:[{n:'Shared taxi station in Lomé',code:'Gare routière Lomé'}],
 toB:[{n:'Taxi station in Cotonou',code:'Gare Cotonou Benin'}],
 steps:['The border is about 21 km from Lomé and about 97 km from Cotonou.','A common crossing and one of the easiest. Get off, get an exit stamp from Togo and an entry stamp for Benin.'],
 tips:['A traveler reported about $50 for a private taxi from Cotonou to Lomé (old report). A shared taxi is much cheaper.','Benin requires an e-visa in advance, printed, and a yellow fever certificate.'],
 visa:'Benin: e-visa (evisa.gouv.bj), print it, and yellow fever'},
{id:'cot-lag',a:'cotonou',b:'lagos',border:{name:'Seme / Krake',pair:'Benin ⇄ Nigeria'},h:[5,7],price:'Verify on site',flag:'verify',
 cos:['Buses and shared taxis'],
 fromA:[{n:'Bus station in Cotonou',code:'Cotonou bus station'}],
 toB:[{n:'Maza Maza, Lagos',code:'Maza Maza Lagos'}],
 steps:['The trip from Cotonou to Lagos takes about 5–6 hours including the border.','At Seme you exit Benin and enter Nigeria with a passport check and stamp.'],
 tips:['There will be several checkpoints on the way. Keep a copy of your passport and visa.','Do not ask anyone offering help at the border to handle the paperwork. It is better to do it yourself.','Nigeria requires a visa in advance.'],
 visa:'Nigeria: separate visa. Check the official website'}
];

function mk(id,a,b,bd,pair,h,price,flag,cos,steps,tips,visa,x){
 x=x||{};var A=NODES[a],B=NODES[b];
 var l={id:id,a:a,b:b,border:bd?{name:bd,pair:pair}:null,h:h,price:price,flag:flag,cos:cos,
  fromA:x.fa||[{n:'Bus station or pickup point in'+A.he+' (verify on site)',code:'bus station'}],
  toB:x.tb||[{n:'Bus station or drop-off point in'+B.he+' (verify on site)',code:'bus station'}],
  steps:steps,tips:tips,visa:visa||''};
 if(x.danger)l.danger=true;LEGS.push(l);
}
var GEN=['Company names are not verified. Ask at the station or guesthouse which line runs today.'];
/* ---------- east ---------- */
mk('nai-kis','nairobi','kisumu',null,'',[6,8],'Verify on site','verify',['Easy Coach (verify)'],['Domestic route in Kenya via Nakuru and Kericho, about 350 km.','Departures in the morning or evening from company stations in central Nairobi.'],['Kisumu is a gateway to Lake Victoria: from there you continue to Busia (Uganda) or Isebania (Tanzania).'],'');
mk('kis-kam','kisumu','kampala','Busia','Kenya ⇄ Uganda',[6,8],'Verify on site','verify',['Bus or matatu to Busia, then a Ugandan bus (verify)'],['Travel from Kisumu to Busia (about 2 hours), cross on foot, and on the Ugandan side take a bus to Kampala (about 4 hours).'],['The Busia crossing is well known and busy. Change money in Kampala, not at the border.'],'EATV or Ugandan visa + Kenya eTA');
mk('nai-moy','nairobi','moyale',null,'',[12,18],'~3,500 KES (reported)','verify',['Moyale Star'],['A long route in northern Kenya. 5–6 checkpoints were reported on the way, and arrival at night in Eastleigh in the opposite direction (stay on the bus).'],['An area with tribal tensions and night closures at Moyale. Check the security situation before traveling.','Buy tickets only at the company office. Fake tickets have been reported.'],'Kenya: online visa only, no visa on arrival');
mk('moy-add','moyale','addis','Moyale (KE) / Moyale (ET)','Kenya ⇄ Ethiopia',[12,13],'~6,000 birr (reported)','verify',['ODAA','Abyssinia'],['The border opens around 08:00. Cross, get stamped, and board a bus on the Ethiopian side.','The road passes through Yabelo, Bule Hora, Dilla and Hawassa.','Staged alternative (old report): Addis–Arba Minch (Selam), then to Konso and Moyale.'],['The gate opens at 08:00. Do not plan to arrive in the evening.','Check the security situation and regional closures.'],'Ethiopia: e-visa. Check');
mk('nai-add','nairobi','addis','Moyale (KE) / Moyale (ET)','Kenya ⇄ Ethiopia',[27,30],'~7,500 KES','verify',['Abyssinia Luxury Coach'],['One bus leaves Nairobi every day at 16:00, passes through Moyale the next morning and reaches Addis Ababa.','The bus waits at the border, but all passengers get off for stamps.'],['Known issues: many checkpoints, night routes.','Buy tickets at the company office only.'],'Ethiopia: e-visa. Kenya: online');
mk('nai-mwa','nairobi','mwanza','Isebania / Sirari','Kenya ⇄ Tanzania',[14,18],'Verify on site','verify',GEN,['Usually done in two stages: Nairobi–Kisii–Isebania, then a Tanzanian bus from Sirari to Mwanza.','The border is described in reports as easy to cross.'],['The Tanzania visa must be ready in advance.'],'Tanzania: e-visa (50$)');
mk('kam-buk','kampala','bukoba','Mutukula','Uganda ⇄ Tanzania',[7,9],'Verify on site','verify',['Jaguar Bus'],['The bus leaves very early in the morning. About 6 hours to Bukoba, and you can continue to Mwanza.'],['The report is old (2016). Check that the line is still running.'],'Tanzania: e-visa (50$)');
mk('buk-mwa','bukoba','mwanza',null,'',[8,10],'Verify on site','verify',GEN,['Domestic route in Tanzania. You can also take a Lake Victoria ferry, depending on season and schedule.'],['Check at the station which line runs today.'],'');
mk('mwa-dar','mwanza','dar',null,'',[14,18],'Verify on site','verify',['Shabiby (verify)','Abood (verify)'],['Long domestic route in Tanzania, via Dodoma.'],['Part of the route is also covered by train. Check.'],'');
mk('aru-mos','arusha','moshi',null,'',[1,2],'Cheap','verify',['Minibuses and shuttles'],['About 80 km. They leave when full.'],['Moshi is a starting point for Kilimanjaro.'],'');
mk('mos-mom','moshi','mombasa','Taveta / Holili','Tanzania ⇄ Kenya',[7,9],'Verify on site','verify',GEN,['You travel via the Holili border on the Tanzanian side and Taveta on the Kenyan side, then Voi and Mombasa.'],['Check whether there is a direct service, otherwise travel in stages.'],'Tanzania: e-visa. Kenya: eTA');
mk('mom-tan','mombasa','tanga','Lunga Lunga / Horohoro','Kenya ⇄ Tanzania',[4,5],'Verify on site','verify',GEN,['Same border as the Mombasa–Dar es Salaam line, but you get off in Tanga.'],['A yellow fever certificate is required from everyone at this border.'],'Tanzania: e-visa (50$)');
mk('tan-dar','tanga','dar',null,'',[5,6],'Verify on site','verify',GEN,['Domestic route in Tanzania, on the coastal road.'],[],'');
mk('kig-mus','kigali','musanze',null,'',[2,2.5],'Verify on site','verify',['Volcano Express','RITCO'],['Domestic route in Rwanda to the gorilla park.'],['Departures from Nyabugogo.'],'',{fa:[{n:'Nyabugogo station, Kigali',code:'Nyabugogo Bus Station'}]});
mk('mus-kis','musanze','kisoro','Cyanika','Rwanda ⇄ Uganda',[2,3],'Verify on site','verify',['Moto-taxi and local minibus'],['From Musanze to the Cyanika crossing is about 25 km, cross on foot, and from there about 12 km to Kisoro.'],['A quiet crossing used by travelers on the way to the gorillas.'],'EATV or a visa for each country');
mk('kis-kab','kisoro','kabale',null,'',[2,3],'Verify on site','verify',['Minibuses (verify)'],['Mountain road, about 80 km.'],[],'');
mk('kab-kig','kabale','kigali','Gatuna / Katuna','Uganda ⇄ Rwanda',[3.5,4.5],'Verify on site','verify',['Volcano Express','Trinity Express'],['Same border as the Kampala–Kigali line, but you board in Kabale.'],['Rwanda time is one hour behind.'],'EATV',{tb:[{n:'Nyabugogo station, Kigali',code:'Nyabugogo Bus Station'}]});
mk('kam-kab','kampala','kabale',null,'',[6,8],'Verify on site','verify',['Link Bus (verify)','Gaaga Bus (verify)'],['Domestic route in Uganda, via Mbarara.'],[],'');
mk('kig-huy','kigali','huye',null,'',[2.5,3],'Verify on site','verify',['Volcano Express','RITCO'],['Domestic route in Rwanda.'],[],'',{fa:[{n:'Nyabugogo station, Kigali',code:'Nyabugogo Bus Station'}]});
mk('huy-buj','huye','bujumbura','Akanyaru Haut / Kanyaru','Rwanda ⇄ Burundi',[4,6],'Verify on site','verify',['Minibus to the border and a local bus on the Burundi side'],['From Huye it is about 30 km to the border, cross on foot, and from there about 130 km to Bujumbura.'],['Burundi requires a separate visa.'],'Burundi: separate visa');
mk('kig-rus','kigali','rusizi',null,'',[5,8],'~600 RWF (2019 report)','verify',['Minibus (Alpha)'],['2019 report: minibus from Kigali to Rusizi, about 8 hours in practice.'],['The information is old. Check at the station.'],'',{fa:[{n:'Nyabugogo station, Kigali',code:'Nyabugogo Bus Station'}]});
mk('rus-buk','rusizi','bukavu','Rusizi I / Ruzizi','Rwanda ⇄ Congo',[1,2],'Verify on site','verify',['Crossing the bridge on foot'],['Cross the bridge on foot, and from there to Bukavu.'],['2019 report: Congolese visa $100 in cash, new notes. The information is old and eastern Congo is marked as dangerous.'],'Congo: visa. Dangerous area',{danger:true});
mk('lil-blz','lilongwe','blantyre',null,'',[4,5.5],'Verify on site','verify',['Shire Bus Line (verify)','Axa (verify)'],['Domestic route in Malawi.'],[],'');
mk('blz-tet','blantyre','tete','Mwanza / Zobué','Malawi ⇄ Mozambique',[6,9],'Verify on site','verify',['Local buses and pickups'],['Travel from Mwanza to the border, cross, and on the Mozambican side continue to Tete.'],['Mozambique requires a visa. Check.'],'Mozambique: visa');
mk('lil-tet','lilongwe','tete','Mwanza / Zobué','Malawi ⇄ Mozambique',[7,10],'Verify on site','verify',['Local buses and pickups'],['Via Dedza or Blantyre to the border, and from there Tete.'],['It is best to reach the border in the morning.'],'Mozambique: visa');
mk('tet-har','tete','harare','Nyamapanda / Cuchamano','Mozambique ⇄ Zimbabwe',[8,10],'Verify on site','verify',['International buses (verify)'],['The border is about 300 km from Tete.'],['The Zimbabwe visa is checked before crossing.'],'Zimbabwe: check');
mk('tet-bei','tete','beira',null,'',[8,10],'Verify on site','verify',GEN,['Domestic route in Mozambique.'],[],'');
mk('bei-mut','beira','mutare','Machipanda / Forbes','Mozambique ⇄ Zimbabwe',[7,9],'Verify on site','verify',GEN,['The border between Machipanda and Forbes.'],[],'Zimbabwe: check');
mk('mut-har','mutare','harare',null,'',[3,4],'Verify on site','verify',['ZUPCO (verify)'],['Domestic route in Zimbabwe.'],[],'');
mk('har-bul','harare','bulawayo',null,'',[6,8],'Verify on site','verify',['Pioneer Coaches','Greyhound Zimbabwe'],['Domestic route in Zimbabwe.'],['There is no central station in Harare. Each company has its own office.'],'');
mk('bul-vfa','bulawayo','victoriafalls',null,'',[6,8],'Verify on site','verify',GEN,['Domestic route in Zimbabwe.'],[],'');
mk('har-lus','harare','lusaka','Chirundu','Zimbabwe ⇄ Zambia',[10,13],'Verify on site','verify',['International buses (verify)'],['The border is at the Chirundu bridge, a one-stop crossing.'],[],'Zambia: visa on arrival or eVisa');
mk('har-jhb','harare','johannesburg','Beitbridge','Zimbabwe ⇄ South Africa',[14,17],'$30–50','ok',['Intercape','Greyhound','Citiliner','Pioneer Coaches','Intercity'],['All companies cross at Beitbridge and reach Park Station in Johannesburg.','In Harare there are several offices. Pioneer Coaches on Dagenham Street, Willowvale. Greyhound on Robert Mugabe Street.'],['The border is busy. Allow several hours.'],'South Africa: check by passport',{fa:[{n:'Pioneer Coaches, 114 Dagenham Rd, Willowvale',code:'114 Dagenham Rd Willowvale Harare'},{n:'Greyhound, Robert Mugabe Rd',code:'Greyhound Robert Mugabe Rd Harare'}],tb:[{n:'Park Station, Johannesburg',code:'Park Station Johannesburg'}]});
mk('bul-jhb','bulawayo','johannesburg','Beitbridge','Zimbabwe ⇄ South Africa',[12,14],'Verify on site','verify',['Intercape','Greyhound'],['Same border as the line from Harare.'],[],'',{tb:[{n:'Park Station, Johannesburg',code:'Park Station Johannesburg'}]});
mk('jhb-map','johannesburg','maputo','Lebombo / Ressano Garcia','South Africa ⇄ Mozambique',[6,9],'ZAR 350–700','ok',['Greyhound','Intercape','Portuguese Express'],['Travel to the border, get off with all your luggage, cross, and continue to Maputo.'],['The border is busy during holidays.'],'Mozambique: visa',{fa:[{n:'OR Tambo Bus Terminal',code:'OR Tambo International Airport bus terminal'},{n:'Park Station, Johannesburg',code:'Park Station Johannesburg'}],tb:[{n:'Terminal Rodoviário (Junta), Baixa',code:'Terminal Rodoviario Junta Maputo'}]});
mk('jhb-gab','johannesburg','gaborone','Groblersbrug / Martins Drift','South Africa ⇄ Botswana',[5,7],'Verify on site','verify',['Intercape (verify)','Greyhound (verify)'],['A line between Johannesburg and Gaborone.'],[],'Botswana: check',{tb:[{n:'Gaborone bus station',code:'Gaborone bus station'}]});
mk('gab-fra','gaborone','francistown',null,'',[5,6],'Verify on site','verify',GEN,['Domestic route in Botswana.'],[],'');
mk('fra-bul','francistown','bulawayo','Ramokgwebana / Plumtree','Botswana ⇄ Zimbabwe',[3,4],'Verify on site','verify',GEN,['The Plumtree border on the Zimbabwe side.'],[],'Zimbabwe: check');
mk('cpt-jhb','capetown','johannesburg',null,'',[18,20],'Verify on site','verify',['Greyhound','Intercape','Translux (verify)'],['Domestic line across the country.'],['Leaves in the afternoon and arrives the next day.'],'');
mk('cpt-win','capetown','windhoek','Vioolsdrif / Noordoewer','South Africa ⇄ Namibia',[20,22],'Verify on site','verify',['Intercape (verify)'],['Night line between Cape Town and Windhoek.'],['Namibia: check the visa.'],'Namibia: check');
mk('liv-kas','livingstone','kasane','Kazungula Bridge (one-stop)','Zambia ⇄ Botswana',[1.5,2.5],'Verify on site','ok',['UBZ (4 times a week)','Power Tools (Livingstone–Kazungula)','Shared taxis'],['Shared taxi to Kazungula, cross the bridge (one-stop crossing) and take a taxi to Kasane.'],['In Kasane there are ATMs and people who change money at Choppies.'],'Botswana: check');
mk('liv-kat','livingstone','katima','Sesheke / Wenela','Zambia ⇄ Namibia',[3,4],'Verify on site','verify',['UBZ'],['The border between Sesheke and Wenela.'],[],'Namibia: check');
mk('kas-vfa','kasane','victoriafalls','Kazungula Road','Botswana ⇄ Zimbabwe',[1.5,2],'Verify on site','verify',['Tourist shuttles (verify)'],['About 80 km.'],[],'Zimbabwe: check');
mk('kat-win','katima','windhoek',null,'',[12,14],'Verify on site','verify',['UBZ'],['Domestic route in Namibia.'],[],'');
mk('lus-ndo','lusaka','ndola',null,'',[4,5],'Verify on site','verify',['Power Tools','Mazhandu Family Bus (verify)'],['Domestic route in Zambia.'],[],'');
mk('ndo-lub','ndola','lubumbashi','Kasumbalesa','Zambia ⇄ Congo',[4,6],'Verify on site','verify',['Minibuses (no verified line)'],['Busy crossing with many trucks.'],['The DRC is marked as dangerous overall.'],'Congo: visa. Dangerous area',{danger:true});
mk('dar-mtw','dar','mtwara',null,'',[10,12],'Verify on site','verify',GEN,['Internal section in Tanzania.'],[],'');
mk('mtw-pem','mtwara','pemba','Mtambaswala / Negomano (Unity Bridge)','Tanzania ⇄ Mozambique',[10,16],'Verify on site','verify',['Local transport only'],['Challenging route. Little information, not checked.'],['Not recommended without preparation and without confirmation.'],'Mozambique: visa');
mk('map-bei','maputo','beira',null,'',[16,20],'Verify on site','verify',GEN,['Long internal section in Mozambique.'],[],'');
/* ---------- west ---------- */
mk('dak-stl','dakar','saintlouis',null,'',[4,5],'Verify on site','verify',['Shared taxis (sept-place)','Minibuses'],['Depart from the station in Dakar.'],[],'',{fa:[{n:'Gare routière des Pompiers, Dakar',code:'Gare routière des Pompiers Dakar'}],tb:[{n:'Saint-Louis taxi station',code:'Gare routière Saint-Louis Senegal'}]});
mk('stl-nkc','saintlouis','nouakchott','Rosso (or Diama)','Senegal ⇄ Mauritania',[6,9],'~5,000 CFA per boat (reported)','verify',['Shared taxis and minibuses'],['Sept-place from Saint-Louis to Rosso, about 3 hours.','Cross the river by pirogue (the ferry does not always run), 5,000 CFA as reported.','From the border walk about 800 m, then a minibus to Nouakchott, about 3 hours, leaves when full.'],['Bridge under construction at Rosso. The Diama crossing is an alternative.','Mauritania: check the visa.'],'Mauritania: verify');
mk('dak-tam','dakar','tambacounda',null,'',[7,9],'Verify on site','verify',['Shared taxis and buses'],['Internal section in Senegal.'],[],'',{fa:[{n:'Gare routière des Baux Maraîchers, Dakar',code:'Gare routière des Baux Maraichers Dakar'}]});
mk('tam-zig','tambacounda','ziguinchor',null,'',[8,10],'Verify on site','verify',GEN,['Via Kolda, in the Casamance region.'],[],'');
mk('ban-zig','banjul','ziguinchor','Seleti / Séléty','The Gambia ⇄ Senegal',[4,6],'Verify on site','verify',['Shared taxis'],['Cross through southern The Gambia and enter the Casamance region.'],[],'Senegal: verify');
mk('dak-zig','dakar','ziguinchor','Keur Ayib + Seleti','Senegal ⇄ The Gambia',[9,12],'Verify on site','verify',['Shared taxis'],['The basic overland route passes through The Gambia, with two border crossings.','Alternative: non-bus ferry from Dakar to Ziguinchor.'],['The route bypasses Banjul.'],'Senegal and The Gambia: verify');
mk('zig-bis','ziguinchor','bissau','São Domingos / Mpack','Senegal ⇄ Guinea-Bissau',[3.5,4.5],'~20,000 CFA for the visa','verify',['Shared taxis and minibuses'],['About 145 km. The border is about 20 km from Ziguinchor, with police checks at São Domingos.','The Guinea-Bissau consulate in Ziguinchor issues a visa within 24 hours.'],['Visa about 30 euros (about 20,000 CFA).'],'Guinea-Bissau: visa, obtained at the consulate in Ziguinchor');
mk('con-fre','conakry','freetown','Pamelap / Gbalamuya','Guinea ⇄ Sierra Leone',[6,8],'Verify on site','verify',['Shared taxis and minibuses'],['The Pamelap border is on the Guinean side, Gbalamuya on the Sierra Leonean side.'],['An e-visa for Sierra Leone is recommended.'],'Sierra Leone: eVisa');
mk('fre-mon','freetown','monrovia','Bo Waterside / Jendema','Sierra Leone ⇄ Liberia',[16,24],'Verify on site','verify',['Private car or local transport'],['Via Bo and Bo Waterside, including a hand-pulled ferry and dirt roads.'],['Not passable in the rainy season.'],'Liberia: verify');
mk('mon-abi','monrovia','abidjan','Ganta / Danané (Loguatuo)','Liberia ⇄ Ivory Coast',[18,24],'~10,000 CFA from Danane','verify',['SDS (Société Diomande Service)'],['SDS departs on Tuesdays, Thursdays and Saturdays, and has operated since February 2024.','Continue through Danane to Abidjan.'],['Check whether the line is running.'],'Ivory Coast: visa');
mk('acc-tam','accra','tamale',null,'',[8,10],'Verify on site','verify',['STC','VIP (verify on site)'],['Internal section in Ghana.'],['Upper West region: yellow fever outbreak, see safety.'],'',{fa:[{n:'STC, Tudu station (Accra)',code:'STC Tudu Bus Station Accra'}]});
mk('kum-tam','kumasi','tamale',null,'',[5,6],'Verify on site','verify',['STC','VIP (verify on site)'],['Internal section in Ghana.'],[],'');
mk('cot-pno','cotonou','portonovo',null,'',[0.7,1.2],'Cheap','verify',['Moto-taxi and minibus'],['Short section in Benin.'],[],'');
mk('pno-lag','portonovo','lagos','Seme / Krake','Benin ⇄ Nigeria',[3,5],'Verify on site','verify',GEN,['Same border as the line from Cotonou.'],['Nigeria requires a visa in advance.'],'Nigeria: visa');
mk('lag-cal','lagos','calabar',null,'',[12,16],'Verify on site','verify',['ABC Transport (verify on site)','GIGM (verify on site)'],['Long route in southern Nigeria.'],[],'');
mk('cal-dou','calabar','douala','Ekok / Mamfe','Nigeria ⇄ Cameroon',[12,24],'Verify on site','verify',['Local transport'],['Old traveler reports (2010–2016).'],['There is insecurity in the Anglophone region of Cameroon. Not recommended.'],'Cameroon: visa. Dangerous area',{danger:true});

var VISAS=[
 ['Kenya','eTA or EATV','30$ / 100$','The EATV is issued in the first country of entry','ok'],
 ['Uganda','E-visa or EATV','50$ / 100$','The EATV is not renewable','ok'],
 ['Rwanda','Visa (on entry or online) or EATV','50$ / 100$','The EATV is available at Irembo or at missions','ok'],
 ['Tanzania','Separate e-visa','50$','The EATV is not valid. Zanzibar also requires insurance','ok'],
 ['Zambia','Visa on arrival for most nationalities, or eVisa','Verify','Passport valid for 6 months','ok'],
 ['Benin','E-visa','Government portal','Print it. Yellow fever certificate required','ok'],
 ['Togo','E-visa','Verify','Also check vaccinations','verify'],
 ['Burundi','Visa','Verify','Not included in the EATV','verify'],
 ['Malawi','Verify','Verify','Check on the official website','verify'],
 ['Zimbabwe','Verify (KAZA visa)','Verify','Check before crossing the bridge','verify'],
 ['DR Congo (DRC)','Visa','Verify','Dangerous area, see safety','verify'],
 ['South Sudan','Visa','Verify','Dangerous area, see safety','verify'],
 ['Senegal','Verify','Verify','Verify according to your passport','verify'],
 ['The Gambia','Verify','Verify','Verify according to your passport','verify'],
 ['Ghana','Verify','Verify','Yellow fever outbreak, check','verify'],
 ['Ivory Coast','Visa','Verify','Yellow fever certificate required','verify'],
 ['Nigeria','Visa','Verify','Also check restricted areas','verify'],
 ['Ethiopia','E-visa','Verify','Check on the official website','verify'],
 ['Mozambique','Visa','Verify','Check on the official website','verify'],
 ['Botswana','Verify','Verify','Verify according to your passport','verify'],
 ['Namibia','Verify','Verify','Verify according to your passport','verify'],
 ['South Africa','Verify','Verify','Verify according to your passport','verify'],
 ['Mauritania','Verify','Verify','Check before departure','verify'],
 ['Guinea-Bissau','Visa (consulate in Ziguinchor)','About 30 euros','About 24 hours at the consulate (reported)','verify'],
 ['Guinea','Verify','Verify','Verify','verify'],
 ['Sierra Leone','E-visa recommended','Verify','Check on the official website','verify'],
 ['Liberia','Verify','Verify','Verify','verify'],
 ['Cameroon','Visa','Verify','Dangerous area, see safety','verify']
];
var VMAP={};VISAS.forEach(function(v){VMAP[v[0]]=v});
var TIPS=[
 ['Get off with everything','At the land border all passengers get off with all their bags, even if the bus is just passing through. Do not leave valuables on the seat.'],
 ['Passport and printouts in your pocket','Printed e-visa, yellow fever certificate, insurance, and copies. Keep them where you can reach them without opening your bag.'],
 ['Buy the ticket the day before','Go to the company office the day before. They give you a name and also confirm your seat. This also checks that the line is running.'],
 ['Small cash in clean notes','Carry some local cash and US dollars in new notes, because some offices refuse old ones. Change money in town and not at the border.'],
 ['Night or day','Night buses save a night of lodging and reach the border in the morning. When possible, prefer crossing the border during the day. Some borders close at night.'],
 ['Arrive before dark','Plan to reach your destination before dark. Late after the border it is hard to find lodging and transport.'],
 ['Clock and side of the road','There is a one-hour time difference between Uganda and Rwanda. Traffic drives on the left in Kenya, Uganda, Tanzania, Zambia and Malawi, and on the right in Rwanda.'],
 ['Recent reviews','Before choosing a company, read reviews from the last few months. The Easy Coach and Modern Coast apps allow booking and seat selection.']
];

var state={atB:null,keep:false,pop:null,mode:'trip',region:'east',trip:['nairobi'],from:'nairobi',to:'kigali',danger:true,view:'fit'};
var $=function(s){return document.querySelector(s)};
var DEF={east:['nairobi','kigali'],west:['accra','lagos']};

mk('kam-kas','kampala','kasese',null,'',[6,8],'Verify on site','verify',['Local passenger lines (verify on site)'],['Internal line in Uganda, via Masaka and Fort Portal.'],['Ask at the main station in Kampala about a line to Kasese.'],'');
mk('kas-ben','kasese','beni','Mpondwe / Kasindi','Uganda ⇄ DR Congo',[3,5],'Verify on site','verify',['Local transport (verify on site)'],['From Mpondwe cross on foot to Kasindi on the Congolese side, and from there transport to Beni.'],['The Beni area is subject to ADF activity and insecurity. Check current travel warnings before any planning.'],'Congo: visa required. Check, and the area is marked as dangerous',{danger:true});
mk('kis-gom','kisoro','goma','Bunagana','Uganda ⇄ DR Congo',[3,5],'Verify on site','verify',['Local transport (verify on site)'],['The Bunagana crossing has been under M23 control since 2022 and opens and closes intermittently.'],['Do not rely on this crossing without checking its status in real time.'],'DR Congo: visa required. The area is marked dangerous',{danger:true});
mk('kin-bra','kinshasa','brazzaville','Beach Ngobila / Beach Brazzaville','DR Congo (DRC) ⇄ Congo-Brazzaville',[0.5,1.5],'Verify on site','verify',['Passenger ferry (verify on site)'],['Cross the Congo River by ferry between the two capitals. Check times and payment at the time of travel.'],['A visa is required for both countries before crossing. Expect checks and stamps on both sides.'],'Both countries: visa required. Verify');
function addCos(x,y,list){var l=null;LEGS.forEach(function(q){if((q.a===x&&q.b===y)||(q.a===y&&q.b===x))l=q});if(!l)return;list.forEach(function(c){var n=c.split(' (')[0].toLowerCase();if(!l.cos.some(function(o){return o.toLowerCase().indexOf(n)>-1}))l.cos.push(c)})}
addCos('kampala','kigali',['Volcano Express (verify on site)','Jaguar Executive Coaches (verify on site)','Bebeto Coach (verify on site)']);
addCos('nairobi','kampala',['Mash Poa (verify on site)','Tahmeed Coach (verify on site)']);
addCos('kabale','kigali',['Gaagaa Coach (verify on site)','Horizon Uganda (verify on site)','Baby Coach (verify on site)','Kampala Coach (verify on site)','Simba Coach (verify on site)']);
addCos('kampala','kabale',['Gaagaa Coach (verify on site)','Horizon Uganda (verify on site)','Baby Coach (verify on site)','Kampala Coach (verify on site)','Simba Coach (verify on site)']);
addCos('huye','bujumbura',['Volcano Express (verify on site)','Yahoo Car Express (verify on site)','Belvedere (verify on site)']);
addCos('bulawayo','johannesburg',['Intercape (verify)']);
addCos('harare','johannesburg',['Intercape (verify)','Eagle Liner (verify on site)','Cross Border Xpress (verify on site)']);
addCos('harare','bulawayo',['City Link Coaches (verify on site)','Eagle Liner (verify on site)','Extracity (verify on site)']);
addCos('johannesburg','maputo',['Intercape (verify)']);
addCos('johannesburg','gaborone',['Intercape (verify)']);
addCos('capetown','windhoek',['Intercape (verify)']);
addCos('capetown','johannesburg',['Intercape (verify)','Greyhound (verify)']);
addCos('nairobi','dar',['Tahmeed Coach (verify on site)']);
addCos('mombasa','dar',['Tahmeed Coach (verify on site)']);
function nl(id,a,b,bn,pair,hh,cos,step,tip,visa,o){mk(id,a,b,bn,pair,hh,'Verify on site','verify',cos,[step],[tip],visa||'',o)}
nl('cas-mar','casablanca','marrakech',null,'',[3,4],['CTM (verify on site)','Supratours (verify on site)'],'Common internal line in Morocco, also by train.','Can be combined with an ONCF train to Casablanca.');
nl('mar-aga','marrakech','agadir',null,'',[3.5,4.5],['CTM (verify on site)','Supratours (verify on site)'],'Internal line in Morocco.','Supratours connects to the train.');
nl('aga-dak','agadir','dakhla',null,'',[18,22],['CTM (verify on site)','Supratours (verify on site)'],'Long night line south along the coast.','Take water and food. The road has police checkpoints.');
nl('dak-nou','dakhla','nouadhibou','Guerguerat','Morocco ⇄ Mauritania',[6,12],[],'From Dakhla take a shared taxi to Guerguerat, cross the buffer strip (no-mans-land) into Mauritania, and from there a transfer to Nouadhibou.','There are no paved roads in the buffer strip. Agree prices in advance and change only a little money at the border.','Mauritania: visa required (reportedly available at the border, verify in advance)');
nl('nou-nkc','nouadhibou','nouakchott',null,'',[7,10],[],'Shared taxi or minibus between the two cities.','Leave in the morning and check the road conditions.');
nl('cai-asw','cairo','aswan',null,'',[12,14],['Go Bus (verify on site)','Upper Egypt Bus (verify on site)'],'Long night line to southern Egypt, also by train.','Buy in advance. Strong air conditioning at night, bring a sweater.');
nl('asw-wdh','aswan','wadihalfa','Qustul / Ashkeet','Egypt ⇄ Sudan',[16,24],[],'Weekly ferry on Lake Nasser between Aswan and Wadi Halfa. The security situation in Sudan is difficult.','Dangerous area: war in Sudan. Do not plan a crossing without checking current travel warnings.','Sudan: visa required. The area is marked dangerous',{danger:true});
nl('add-dir','addis','diredawa',null,'',[8,10],['Selam Bus (verify on site)','Sky Bus (verify on site)'],'Internal bus line eastward, also by train.','The line is approximate: confirm at the station in central Addis Ababa.');
nl('dir-dji','diredawa','djibouti','Dewele / Galafi','Ethiopia ⇄ Djibouti',[7,10],[],'From Dire Dawa buses and minibuses go to the border and to Djibouti.','Check the Djibouti visa in advance. Goods traffic congests the road.','Djibouti: visa required (e-visa). Verify');
nl('lus-chi','lusaka','chipata',null,'',[8,10],['Mazhandu Family Bus (verify)'],'Line eastward to the border city with Malawi.','The line is the main route from Lusaka to Malawi.');
nl('chi-lil','chipata','lilongwe','Mwami / Mchinji','Zambia ⇄ Malawi',[3,5],[],'From Chipata a transfer to the Mwami border, cross on foot, and from Mchinji a bus or minibus to Lilongwe.','Change a little money before the border. Leave in the morning.','Malawi: visa for Israelis required in advance. Verify');
nl('dar-mbe','dar','mbeya',null,'',[10,13],['Kilimanjaro Express (verify on site)','Shabiby (verify)'],'Long internal line in Tanzania to the south.','Night buses. The TAZARA train is also possible.');
nl('mbe-lil','mbeya','lilongwe','Songwe / Mwandenga','Tanzania ⇄ Malawi',[8,11],[],'From Mbeya a transfer to the border and from there to Karonga and Lilongwe, usually in several sections.','The line is not direct. Plan to change twice.','Tanzania and Malawi: visa required. Verify');
nl('mbe-lus','mbeya','lusaka','Tunduma / Nakonde','Tanzania ⇄ Zambia',[18,24],[],'From Mbeya to Tunduma, cross to Nakonde and from there a bus to Lusaka. The TAZARA train also runs on this route.','Border crossing busy with trucks. Pack patience.','Zambia: visa required for Israelis. Verify');
nl('jhb-mas','johannesburg','maseru','Maseru Bridge','South Africa ⇄ Lesotho',[6,8],[],'From Johannesburg a bus or minibus to Georgia and Maseru.','Change a little rand, the rand is accepted in Lesotho.','Lesotho: visa exempt for most. Verify');
nl('jhb-mba','johannesburg','mbabane','Oshoek / Ngwenya','South Africa ⇄ Eswatini',[6,8],['Greyhound (verify)'],'Passenger line between Johannesburg and Mbabane.','Take your passport, there is a transit check.','Eswatini: visa-free for most. Check');
nl('win-osh','windhoek','oshakati',null,'',[7,8],['Intercape (verify)'],'Line north to the Ovambo region.','After Oshakati you can continue to the Angola border.');
nl('osh-ond','oshakati','ondjiva','Oshikango / Santa Clara','Namibia ⇄ Angola',[3,5],[],'From Oshakati take a shuttle to Oshikango, cross, and continue to Ondjiva.','Angola: visa in advance as well.','Angola: visa required in advance. Check');
nl('dak-ban','dakar','banjul','Karang / Amdalai','Senegal ⇄ The Gambia',[6,9],[],'From Dakar by minibus or shared taxi to Banjul, crossing at the Karang border.','Check the Barra–Banjul ferry if traveling via the north.','');
nl('abi-acc','abidjan','accra','Noé / Elubo','Ivory Coast ⇄ Ghana',[10,14],[],'From Abidjan to the Noe/Elubo border and on to Accra, usually in several segments.','Leave in the morning. Check vaccination requirements before crossing.','Ghana and Ivory Coast: visa required. Check');
nl('con-tam','conakry','tambacounda','Koundara / Kolda','Guinea ⇄ Senegal',[16,24],[],'Long line north via Labe and Koundara to Senegal. The route is challenging and irregular.','The road is damaged in the rainy season. Plan extra days.','Guinea: visa required. Check');
addCos('accra','lome',['ABC Transport']);
addCos('lome','cotonou',['ABC Transport']);
addCos('cotonou','lagos',['ABC Transport']);
addCos('portonovo','lagos',['ABC Transport']);
addCos('lusaka','livingstone',['Mazhandu Family Bus','Shalom Bus']);
addCos('bulawayo','victoriafalls',['Extra City']);
nl('har-vfa','harare','victoriafalls',null,'',[8,10],['Extra City'],'Internal bus line in Zimbabwe, morning and evening departures. Terminal in Victoria Falls: Chinotimba.','Call ahead to confirm the schedule: +263 775 205 200.');
nl("cas-rab","casablanca","rabat",null,"",[1,1.5],["CTM", "Supratours"],"Frequent, fast route, also by train.","Departs from the central station; no need to book in advance.",'',undefined);
nl("rab-tan","rabat","tangier",null,"",[3,4],["CTM", "Supratours"],"Fast route north, also a high-speed train.","From Tangier, continue by ferry to Spain.",'',undefined);
nl("fes-rab","fes","rabat",null,"",[3,4],["CTM", "Supratours"],"Local route between the two cities.","There is also an ONCF train.",'',undefined);
nl("cai-alx","cairo","alexandria",null,"",[2.5,3.5],["Go Bus", "Super Jet"],"Frequent route in the western desert of the Delta.","Booking ahead is recommended in season.",'',undefined);
nl("cai-lux","cairo","luxor",null,"",[9,11],["Go Bus", "Upper Egypt Bus"],"Long night route to southern Egypt.","Strong air conditioning, bring a sweater.",'',undefined);
nl("lux-asw","luxor","aswan",null,"",[3,4],["Go Bus", "Upper Egypt Bus"],"Short route along the Nile.","Check restrictions on tourist travel by road.",'',undefined);
nl("dir-har","diredawa","hargeisa","Tog Wajaale","Ethiopia ⇄ Somaliland",[9,12],[],"From Dire Dawa by bus to Jijiga, then on to the Tog Wajaale border and Hargeisa.","Somaliland is a de facto independent entity; separate visa.",'',undefined);
nl("nai-eld","nairobi","eldoret",null,"",[5,6],["Modern Coast", "Easy Coach"],"Local route in Kenya toward the Uganda border.","Leave in the morning.",'',undefined);
nl("eld-mba","eldoret","mbale","Malaba","Kenya ⇄ Uganda",[3,4],["Easy Coach"],"From Eldoret to Malaba, cross into Uganda and continue to Mbale.","Busy border crossing, try to arrive early.",'',undefined);
nl("mba-jin","mbale","jinja",null,"",[2.5,3.5],[],"Local route in Uganda.","You can also connect via Kampala.",'',undefined);
nl("jin-kam","jinja","kampala",null,"",[1.5,2.5],[],"Frequent route connecting Jinja and Kampala.","Heavy traffic on the approach to Kampala.",'',undefined);
nl("kam-gul","kampala","gulu",null,"",[5,6],[],"Route north to the city of Gulu.","From there, continue to South Sudan.",'',undefined);
nl("kam-mbr","kampala","mbarara",null,"",[4,5],[],"Route west in Uganda.","After Mbarara you can continue to Kabale.",'',undefined);
nl("mbr-kab","mbarara","kabale",null,"",[3,4],[],"Route south to the Rwanda border.","The road is mountainous and cold, bring a warm layer.",'',undefined);
nl("kam-fpo","kampala","fortportal",null,"",[5,6],[],"Route west to the parks area.","From there you can continue to Kasese.",'',undefined);
nl("dar-mor","dar","morogoro",null,"",[3,4],["Shabiby", "Abood"],"Local route in Tanzania.","Main stations: Ubungo and Msamvu.",'',undefined);
nl("mor-dod","morogoro","dodoma",null,"",[3,4],["Shabiby", "Abood"],"Local route.","Frequent route.",'',undefined);
nl("dod-aru","dodoma","arusha",null,"",[7,9],["Shabiby"],"Central-north route.","Night buses are less comfortable.",'',undefined);
nl("dod-iri","dodoma","iringa",null,"",[4,5],["Shabiby"],"Route south.","From here, continue to Mbeya.",'',undefined);
nl("iri-mbe","iringa","mbeya",null,"",[5,6],[],"Mbeya route.","The road goes through mountains.",'',undefined);
nl("mwa-kig","mwanza","kigoma",null,"",[12,16],[],"Long, difficult route in western Tanzania.","Roads in the rainy season.",'',undefined);
nl("kgm-buj","kigoma","bujumbura","Manyovu / Gatumba","Tanzania ⇄ Burundi",[6,8],[],"From Kigoma to the border and Bujumbura, usually in several legs.","Burundi: visa in advance.",'',undefined);
nl("lil-mzu","lilongwe","mzuzu",null,"",[5,6],[],"Route north in Malawi.","Relatively good road.",'',undefined);
nl("mzu-mbe","mzuzu","mbeya","Songwe / Kasumulu","Malawi ⇄ Tanzania",[8,10],[],"From Mzuzu to Karonga, cross at the border and continue to Mbeya.","Not direct: plan for transfers.",'',undefined);
nl("bei-chi","beira","chimoio",null,"",[4,5],[],"Route on the N6 road west.","Chapas and buses.",'',undefined);
nl("chi-mut","chimoio","mutare","Machipanda / Forbes","Mozambique ⇄ Zimbabwe",[3,4],[],"From Chimoio to Machipanda, cross into Zimbabwe and continue to Mutare, in several legs (no direct bus).","Mozambique visa: best arranged in advance.",'',undefined);
nl("bei-que","beira","quelimane",null,"",[8,10],[],"Route north along the coast.","Long journey, leave early.",'',undefined);
nl("que-nam","quelimane","nampula",null,"",[8,10],[],"Route north.","Check the road conditions.",'',undefined);
nl("nam-pem","nampula","pemba",null,"",[6,8],[],"Route to the far east.","Check the security situation in the north (Cabo Delgado).",'',undefined);
nl("map-inh","maputo","inhambane",null,"",[6,7],[],"Route on the N1 road north.","There are also minibuses.",'',undefined);
nl("map-mba","maputo","mbabane","Namaacha / Lomahasha","Mozambique ⇄ Eswatini",[4,6],[],"From Maputo to the Namaacha border and Mbabane.","Check the border opening hours.",'',undefined);
nl("jhb-dur","johannesburg","durban",null,"",[7,8],["Greyhound", "Intercape"],"Frequent, central route.","Departs from Park Station.",'',undefined);
nl("jhb-blo","johannesburg","bloemfontein",null,"",[4,5],["Greyhound", "Intercape"],"Route south.","Frequent route.",'',undefined);
nl("blo-cpt","bloemfontein","capetown",null,"",[10,12],["Greyhound", "Intercape"],"Long route west.","Night buses.",'',undefined);
nl("blo-mas","bloemfontein","maseru","Maseru Bridge","South Africa ⇄ Lesotho",[3,4],[],"From Bloemfontein to Maseru.","Passport without visa, usually.",'',undefined);
nl("dur-map","durban","maputo","Kosi Bay / Ponta do Ouro","South Africa ⇄ Mozambique",[10,12],[],"From Durban to the Kosi Bay border and Maputo, usually in several legs.","Mozambique visa in advance.",'',undefined);
nl("win-wal","windhoek","walvis",null,"",[4,5],["Intercape", "Town Hopper"],"Route west to the coast.","Frequent route.",'',undefined);
nl("win-run","windhoek","rundu",null,"",[10,12],["Intercape"],"Northeast route along the Kwango.","From there, continue to Katima.",'',undefined);
nl("run-kat","rundu","katima",null,"",[7,8],[],"Route east in the Caprivi.","Parks area, elephants may be on the road.",'',undefined);
nl("fra-kas","francistown","kasane",null,"",[6,7],[],"Northwest route.","The road crosses wildlife areas.",'',undefined);
nl("fra-mau","francistown","maun",null,"",[6,7],[],"Route west.","There are also routes to Chobe Park.",'',undefined);
nl("mau-win","maun","windhoek","Mamuno / Buitepos","Botswana ⇄ Namibia",[12,15],[],"From Maun to Ghanzi, cross at the Mamuno border and on to Windhoek, in several legs.","Check the fuel supply situation.",'',undefined);
nl("ndo-kit","ndola","kitwe",null,"",[1,1.5],[],"Short route in the Copperbelt area.","Frequent route.",'',undefined);
nl("kit-lub","kitwe","lubumbashi","Kasumbalesa","Zambia ⇄ DR Congo (DRC)",[3,5],[],"From Kitwe to Kasumbalesa and Lubumbashi.","Congolese visa: in advance.",'',undefined);
nl("kin-mat","kinshasa","matadi",null,"",[4,5],[],"Route west to the port of Matadi.","Check the road conditions.",'',undefined);
nl("mat-lua","matadi","luanda","Luvo / Noqui","DR Congo (DRC) ⇄ Angola",[10,14],[],"From Matadi to the border and Luanda, in several legs.","Angola: a visa is usually required in advance.",'',undefined);
nl("lua-lub","luanda","lubango",null,"",[12,16],[],"Route south along the coast.","Night buses.",'',undefined);
nl("lub-ond","lubango","ondjiva",null,"",[4,6],[],"Route south.","From there to the border with Namibia.",'',undefined);
nl("bra-pnr","brazzaville","pointenoire",null,"",[8,10],[],"Route south to the coast, also by train.","The road is improving.",'',undefined);
nl("yao-dou","yaounde","douala",null,"",[3,4],["General Express", "Garanti Express", "Touristique Express"],"Frequent route between the two big cities.","Booking in advance is recommended.",'',undefined);
nl("yao-lib","yaounde","libreville","Kye-Ossi / Eboro","Cameroon ⇄ Gabon",[10,14],[],"From Yaounde to the Kye-Ossi border and Libreville, usually in several legs.","Gabon visa in advance.",'',undefined);
nl("yao-mar","yaounde","maroua",null,"",[14,18],[],"Long route north, also by train to Ngaoundere.","Northern Cameroon area: travel warnings.",'',undefined);
nl("mar-ndj","maroua","ndjamena","Kousseri","Cameroon ⇄ Chad",[3,5],[],"From Maroua to Kousseri, cross to N Djamena.","Dangerous area: check warnings beforehand.",'',{danger:1});
nl("abu-lag","abuja","lagos",null,"",[9,12],["ABC Transport", "God Is Good Motors"],"Long route between the capital and the big city.","Booking in advance is recommended.",'',undefined);
nl("abu-kan","abuja","kano",null,"",[5,6],[],"Route north.","Area with security warnings.",'',{danger:1});
nl("kan-nia","kano","niamey","Jibiya / Maradi","Nigeria ⇄ Niger",[14,18],[],"From Kano to the border and Niamey, usually in several legs.","Risks: check warnings beforehand.",'',{danger:1});
nl("nia-oua","niamey","ouagadougou","Makalondi / Kantchari","Niger ⇄ Burkina Faso",[8,10],[],"From Niamey to the border and Ouagadougou.","Check the security situation.",'',{danger:1});
nl("cot-nia","cotonou","niamey","Malanville / Gaya","Benin ⇄ Niger",[14,18],[],"From Cotonou to northern Benin and Niamey, usually in several legs.","Check the border situation.",'',{danger:1});
nl("lom-oua","lome","ouagadougou","Cinkansé","Togo ⇄ Burkina Faso",[12,16],[],"From Lome to the Cinkanse border and Ouagadougou.","Security dangers in the north.",'',undefined);
nl("tam-oua","tamale","ouagadougou","Paga / Dakola","Ghana ⇄ Burkina Faso",[8,10],["STC"],"From Tamale to Paga, cross into Burkina Faso and on to Ouagadougou.","Burkina Faso visa: in advance.",'',{danger:1});
nl("oua-bob","ouagadougou","bobo",null,"",[4,5],[],"Route west.","Frequent route.",'',{danger:1});
nl("bob-bam","bobo","bamako","Koloko / Faramana","Burkina Faso ⇄ Mali",[8,10],[],"From Bobo to the border and Bamako.","Mali: serious travel warnings.",'',{danger:1});
nl("bam-dak","bamako","dakar","Kidira / Diboli","Mali ⇄ Senegal",[18,24],[],"From Bamako to Kayes and Dakar on a long route.","Dangerous area.",'',{danger:1});
nl("bam-kor","bamako","korhogo","Zégoua / Pogo","Mali ⇄ Ivory Coast",[10,12],[],"From Bamako to Sikasso, cross at Zegoua to Korhogo.","Mali: warnings.",'',{danger:1});
nl("kor-abi","korhogo","abidjan",null,"",[8,10],[],"Route south.","Frequent route.",'',undefined);
nl("bra-yao","brazzaville","yaounde","Ntam / Ouesso","Republic of the Congo ⇄ Cameroon",[36,48],[],"From Brazzaville north via Ouesso to the Cameroon border and Yaounde, a hard route in several legs.","Plan for several days; in the rainy season the road may be blocked.","",undefined);
var G={};LEGS.forEach(function(l){(G[l.a]=G[l.a]||[]).push({to:l.b,leg:l});(G[l.b]=G[l.b]||[]).push({to:l.a,leg:l})});
function edgesOf(k){return (G[k]||[]).filter(function(e){return state.danger||!e.leg.danger})}
function legBetween(x,y){for(var i=0;i<LEGS.length;i++){var l=LEGS[i];if((l.a===x&&l.b===y)||(l.a===y&&l.b===x))return l}return null}
function mid(l){return (l.h[0]+l.h[1])/2}

function path(a,b){
 var d={},prev={},done={};Object.keys(NODES).forEach(function(k){d[k]=1e9});d[a]=0;
 while(true){
  var u=null;Object.keys(d).forEach(function(k){if(!done[k]&&d[k]<1e9&&(u===null||d[k]<d[u]))u=k});
  if(u===null||u===b)break;done[u]=1;
  edgesOf(u).forEach(function(e){var w=mid(e.leg);if(d[u]+w<d[e.to]){d[e.to]=d[u]+w;prev[e.to]=[u,e.leg]}});
 }
 if(d[b]>=1e9)return null;
 var seq=[b],c=b;while(c!==a){c=prev[c][0];seq.unshift(c)}
 return seq;
}

function stations(list,city){
 return '<ul>'+list.map(function(s){return '<li>'+s.n+' <a href="'+mapq(s.code,city)+'" target="_blank" rel="noopener">Map</a></li>'}).join('')+'</ul>';
}
function stampHTML(l){return l.border?'<div class="stamp"><i>🚩 Border</i><b><bdi>'+l.border.name+'</bdi></b><span>'+l.border.pair+'</span></div>':'<span class="nostamp">No border</span>'}
function chipsHTML(l){
 return '<div class="chips"><span class="chip">'+l.h[0]+'–'+l.h[1]+' hours</span><span class="chip">'+l.price+'</span>'
  +(l.danger?'<span class="tag danger">Dangerous area</span>':'')
  +'</div>';
}
function cosHTML(l){return '<div><div class="sub">Companies</div><div class="cos">'+l.cos.map(function(c){return '<span class="co"><bdi>'+c+'</bdi></span>'}).join('')+'</div></div>'}
function detail(l,fromK){
 var rev=fromK!==l.a,A=NODES[fromK],B=NODES[rev?l.a:l.b];
 var from=rev?l.toB:l.fromA,to=rev?l.fromA:l.toB;
 var h='<div class="dbody"><div class="stations"><div><div class="sub">Departing from '+A.he+'</div>'+stations(from,A.en)+'</div><div><div class="sub">Arriving at '+B.he+'</div>'+stations(to,B.en)+'</div></div>';
 h+='<div class="steps"><div><div class="sub">Steps</div><ol>'+l.steps.map(function(s){return '<li>'+s+'</li>'}).join('')+'</ol></div><div><div class="sub">Tips</div><ul>'+l.tips.map(function(s){return '<li>'+s+'</li>'}).join('')+'</ul></div></div>';
 if(l.visa)h+='<div class="visa"><b>VISA</b> &nbsp;'+l.visa+'</div>';
 return h+'</div>';
}
function onward(k,exclude){
 return edgesOf(k).filter(function(e){return exclude.indexOf(e.to)<0});
}
function nextLine(k,exclude){
 var o=onward(k,exclude);
 if(!o.length)return '<p class="next">No onward route from there in the database. Continue by flight or on a line that is not included.</p>';
 var b=o.filter(function(e){return e.leg.border}),d=o.filter(function(e){return !e.leg.border});
 var parts=b.map(function(e){return '<b>'+NODES[e.to].he+'</b> <i>Border · '+e.leg.border.name.split(' / ')[0]+'</i>'}).concat(d.map(function(e){return NODES[e.to].he}));
 return '<p class="next">From there you can continue to: '+parts.join(' · ')+'</p>';
}

/* map */
var LAND_D="M10193 2423l3 1l5 0l1 -1l3 -3l3 0l2 3l-4 1l-1 1l1 1l3 1l4 0l0 2l1 2l2 1l2 0l4 0l5 -1l4 -1l5 -1l14 1l5 3l10 0l9 2l4 -1l9 -1l1 1l-1 7l0 2l3 1l2 -1l3 -2l6 -2l7 0l6 -4l2 -1l-1 3l-1 5l-1 3l-1 3l-4 1l-6 0l-11 0l-10 1l-21 2l-20 1l-3 0l0 -4l0 -2l-2 -1l-6 -2l-6 -2l-23 -3l-6 -1l-9 0l-3 0l-2 -1l-2 -2l-1 -6l2 -6l1 -1l1 2l3 0l2 -2l0 -2l1 -3l1 1l2 4l3 1zM10171 2252l3 5l2 2l6 2l3 1l9 4l11 0l1 2l2 3l2 2l1 2l-2 2l2 6l3 6l4 3l5 1l5 0l2 1l-1 5l-2 2l-2 0l-1 0l-2 -1l-1 -1l-3 0l-2 -2l-5 -3l-1 -2l0 -2l-3 -2l-2 -4l-2 -1l-1 -2l0 -1l-8 0l-6 0l-5 -2l-2 -6l-3 -1l-3 -2l-2 -2l-5 -4l-5 -3l-6 -2l-6 -2l-4 2l-3 0l-1 -1l6 -3l8 -4l6 -2l3 0l5 4zM10723 2420l-26 15l-2 5l2 3l3 4l1 1l2 3l-6 0l-6 1l-3 -1l-3 0l-9 9l-5 2l-6 2l-6 1l-3 0l-3 1l-2 2l0 2l-1 2l-3 -1l-1 -3l-3 -1l-5 1l-3 0l-10 -3l-3 -1l-1 -3l-5 -9l-1 -6l5 1l4 -2l4 -3l5 -1l3 0l3 1l5 -1l2 -5l1 -6l9 2l9 1l8 0l7 -1l23 -6l7 -3l4 -1l7 -3l7 -2l-5 3zM9157 2211l5 1l5 -1l3 0l3 1l0 3l-2 4l-4 3l-2 4l-3 5l-4 2l-4 2l-9 -3l-5 -1l-1 -1l-2 -6l-2 -1l-3 -1l-3 1l-4 3l-2 -3l-3 0l-1 -2l0 -2l20 -12l6 -2l13 -4l2 1l-2 2l0 1l2 0l0 2l-2 1l-1 3zM11477 4822l2 5l3 5l8 12l4 5l3 5l1 9l6 16l5 23l1 24l2 11l4 10l6 10l2 12l-4 12l-5 12l-2 2l-3 3l-1 0l-4 -3l-4 -5l-5 -11l-1 -6l-2 -1l-6 0l-4 4l-1 2l1 7l2 6l1 5l0 8l1 2l2 2l2 5l1 11l-1 6l-4 5l0 3l1 3l-1 1l-5 3l-2 2l-3 5l-5 10l0 5l3 17l-1 11l-6 22l-3 10l-5 13l-7 16l-7 21l-6 21l-5 12l-5 13l-7 22l-5 22l-9 25l-12 28l-2 3l-2 14l-3 13l-3 12l-7 20l-1 6l-1 6l-7 12l-2 5l-2 5l-1 6l-2 6l-5 11l-7 10l-5 3l-10 6l-6 0l-12 1l-11 3l-12 5l-11 6l-5 3l-5 2l-15 1l-4 -2l-15 -10l-6 -2l-11 -1l-4 -1l-3 -2l-4 -5l-9 -5l-2 -1l-2 -3l0 -4l-3 -4l-2 -7l-2 -5l-9 -9l0 -3l-1 -10l0 -6l-1 -12l1 -6l3 -5l-1 -5l-3 -6l-1 -6l-3 -5l-8 -10l-2 -4l-2 -5l-3 -16l0 -5l0 -11l2 -6l2 -4l0 -4l2 -2l2 -2l1 -3l3 -14l4 -3l6 -2l5 -4l3 -5l3 -11l7 -10l3 -6l6 -8l5 -12l2 -5l1 -6l2 -12l1 -6l-1 -7l-3 -6l-7 -11l0 -2l0 -9l0 -6l-3 -6l-4 -6l-3 -11l-2 -17l1 -7l-1 -5l-3 -6l2 -9l22 -35l1 -4l-1 -10l0 -7l1 -2l2 -1l4 -1l17 -1l3 -1l4 -3l6 -6l3 -2l3 1l1 3l2 1l7 -3l3 0l3 1l1 -3l1 -3l1 -2l2 -1l9 -1l6 -1l8 -2l2 0l6 8l2 1l2 0l2 -1l-5 -4l-1 -3l1 -2l2 -6l5 -4l10 -7l10 -8l3 0l3 1l2 9l-1 2l2 0l2 -1l2 -4l0 -3l-2 -3l0 -2l0 -3l5 -5l4 -5l2 -6l2 -3l4 -3l1 1l1 2l1 3l-1 3l-2 2l-1 4l3 0l2 0l4 -7l3 -6l3 -3l3 -2l5 0l4 2l-7 -7l-2 -8l9 -16l0 -3l1 -1l1 -1l-5 -5l-1 -3l1 -3l2 -4l2 -2l3 -1l2 1l5 4l4 1l4 -4l3 -5l5 -4l6 -2l9 -8l6 -16l0 -5l-1 -6l-2 -6l-4 -6l1 -2l5 1l2 -1l5 -6l8 -12l3 0l3 2l0 3l2 3l6 5l3 5zM11655 2260l0 2l-3 -7l-1 -8l2 -2l2 0l-2 3l2 12zM9485 2200l-1 4l-3 28l-2 5l-1 5l-4 1l-5 -1l-6 -3l-3 0l-3 1l-2 -1l-2 -1l-2 10l-3 4l-4 2l-4 1l-4 -1l-4 0l-2 -2l-2 -3l-4 -5l-3 -4l0 -5l-1 -9l1 -2l1 -2l1 -4l0 -4l1 -1l2 1l1 -1l0 -1l0 -4l-2 -3l-5 -1l0 -3l0 -1zM9779 2289l-4 6l-1 2l-12 14l-2 3l0 3l-2 3l-1 3l-2 4l0 4l1 2l1 2l3 1l1 2l-2 2l3 3l2 2l1 2l0 2l-6 4l-2 2l-1 3l-1 3l1 2l0 3l-6 -1l-6 -1l-5 0l-8 -2l-3 -1l-3 -1l-7 -9l-5 -3l-6 -3l-6 0l-6 0l-5 -2l-11 -6l-11 -4l-5 -3l-2 -3l-2 -1l-7 -1l-6 -4l-2 0l-6 1l-3 -1l-3 -1l-6 -4l-3 -5l-1 -2l2 -6l3 -6l3 -1l3 -1l2 -2l2 -2l6 6l2 1l3 0l4 -2l1 -3l5 -3l6 0l4 1l1 3l3 0l3 1l9 5l3 1l2 0l8 -2l5 -1l12 1l7 -1l4 0l7 -2l5 -4l3 0l2 -1l7 1l7 0l3 0l2 -3l3 -1l3 1l8 -4l3 0l4 2l-3 2zM11900 2200l0 717l-3 -2l-7 2l-3 -3l-20 -4l-4 -6l-3 -6l0 -6l-5 -11l-1 -15l-2 -6l-3 -5l-3 -5l-5 -4l-5 -2l-18 -4l-4 1l-8 2l-9 5l-14 3l-4 2l-3 5l-5 4l-6 -1l-7 3l-13 8l-7 3l-6 0l-6 -4l-14 -6l-8 -2l-13 2l-6 -1l-10 -7l-2 -4l-6 -3l-18 -7l-14 -9l-3 -4l-2 -5l-6 -6l-14 -5l-9 -5l-9 -1l-9 0l-3 -1l-4 -3l-12 -11l0 -4l-8 -11l-1 -4l-2 -10l-2 -3l-8 -5l-1 -2l2 -4l0 -3l-4 -3l-6 -1l-2 -4l1 -6l0 -4l-6 -6l-8 -7l-8 -10l-3 -2l-2 -6l-2 -8l-5 0l-21 9l-6 -6l-19 -8l-2 -2l-1 -2l2 -1l3 0l4 1l3 -2l-1 -3l-4 -1l-7 0l2 2l-6 3l-1 4l0 4l1 6l-3 3l-1 1l-8 1l-4 2l-3 1l-4 1l-5 -1l-11 -4l-3 0l-5 1l0 2l0 2l1 5l4 6l3 5l0 2l-2 0l-3 -1l-4 -1l-7 7l-5 3l0 1l6 2l5 0l3 -1l3 1l1 4l1 3l4 12l4 4l4 7l2 3l0 3l3 5l3 5l1 4l5 11l8 9l1 3l2 5l-2 2l0 2l5 5l9 4l4 1l4 1l-3 3l5 7l6 6l7 1l9 10l13 7l9 8l-1 0l-3 -1l-3 -1l-1 1l0 4l1 4l5 3l3 3l2 5l-3 10l-1 0l-2 -1l-2 0l-1 0l2 8l2 6l3 4l3 7l2 3l9 7l2 6l3 11l5 6l3 5l4 4l2 -3l0 -2l-3 -15l-1 -11l0 -2l2 -3l4 -6l1 -5l5 -13l5 -5l8 -4l6 7l8 6l2 6l-3 5l-2 8l2 3l0 4l2 5l2 7l0 4l-1 5l-2 3l-6 12l-1 1l-7 2l4 2l4 -1l0 2l-2 3l-4 7l5 1l4 1l3 1l1 0l2 -3l1 2l2 2l4 0l1 0l2 9l2 3l3 2l11 0l6 -1l14 -6l6 -2l19 1l15 2l24 1l5 0l12 -5l8 -4l5 -1l3 -4l2 -5l2 -4l2 -1l2 -3l2 -5l4 -4l18 -12l10 -10l1 -3l6 -5l4 -5l21 -15l4 -6l3 -7l4 -7l2 -1l1 0l4 -1l2 -4l2 -2l2 0l0 2l0 6l0 5l-2 15l-3 2l-1 3l0 2l3 4l1 28l0 2l5 13l8 13l7 6l7 9l10 9l5 3l19 6l11 2l9 1l0 165l-3 5l-4 5l-1 6l-2 8l-3 8l-1 6l0 4l2 8l0 9l1 6l2 6l-4 2l-3 1l-13 1l-12 2l-11 4l-7 3l-8 9l-5 21l-9 9l-5 1l-14 1l-19 3l-7 2l-11 13l-1 4l2 3l1 3l-1 3l-5 8l-6 6l-14 4l-6 -2l-5 -2l-9 0l-16 2l-5 4l-9 3l-9 5l-15 2l-11 4l-25 8l-7 4l-6 5l-4 6l-3 11l2 10l0 5l-7 4l-6 2l-6 4l-5 1l-3 3l-4 2l-14 6l-15 4l-25 5l-9 6l-9 3l-13 2l-18 5l-9 4l-13 7l-3 2l-2 5l-4 5l-7 7l-6 3l-3 1l-8 2l-8 0l-14 -2l-4 1l-3 3l-11 5l-12 10l-8 3l-13 3l-10 4l-6 1l-8 1l-15 0l-14 1l-13 3l-6 5l-7 9l-12 3l-2 3l-4 6l-7 2l-7 1l-7 -3l-13 8l-5 1l-7 0l-6 2l-4 -1l-4 -3l-10 -3l-8 2l0 -7l-12 -21l2 -19l0 -3l-2 -8l-7 -8l0 -9l-3 -7l-2 -7l1 -2l0 -2l-4 -11l-1 -2l0 -2l1 -2l0 -2l-2 -3l-2 -7l-10 -5l2 -4l2 1l2 2l1 -3l0 -3l-4 -14l6 -19l-2 -17l-1 -4l-2 -5l-1 -5l-1 -4l-3 -3l-4 -3l-1 -5l-3 -4l-5 -4l-2 -7l-2 -9l-12 -11l-15 -11l-5 -6l-8 -13l-3 -10l-11 -11l0 -4l-2 -6l-2 -5l-1 -5l-10 -21l-4 -3l-2 -4l-1 -4l-1 -2l-7 -3l-7 -9l-20 -13l-10 -2l-8 -4l-5 -7l-6 -11l-11 -12l-9 -17l3 -6l-1 -4l-2 -7l-4 -6l-2 -5l2 -8l1 -8l1 -5l2 -5l-2 -10l-3 -5l0 -4l-3 -1l-3 -4l3 0l-5 -5l-2 -3l-2 -8l-3 -5l-8 -13l-4 -8l-9 -10l-9 -7l-6 -3l-3 -3l-5 0l-5 -5l-4 0l-5 -1l-5 -8l-5 -8l-8 -10l2 -3l2 -4l-1 -6l-1 -4l-3 -7l-12 -17l-3 -3l-5 -3l-3 -7l-1 -7l-8 -3l-13 -25l-8 -8l-3 -6l-9 -10l-5 -9l-9 -9l-8 -15l-12 -15l-5 -2l-13 -1l-5 -2l-5 4l0 -4l3 -6l5 -12l1 -11l8 -32l1 -6l0 -4l-4 4l-2 2l-6 8l-6 26l-9 20l-1 13l-1 4l-4 7l-5 6l-9 -3l-14 -11l-8 -11l-9 -6l-9 -9l-2 -7l0 -4l-4 -10l-2 -5l-10 -10l-3 -6l-3 -3l-2 -3l-4 -14l-4 -9l-4 3l0 3l-4 6l-2 5l2 5l8 8l2 3l2 7l0 9l1 4l6 7l3 4l1 3l2 4l6 6l9 12l9 7l6 4l2 4l1 10l0 5l5 8l2 5l5 4l2 4l3 7l3 20l5 4l13 27l12 16l6 13l9 15l17 33l10 11l4 5l7 5l8 6l-7 -1l-2 1l-3 1l-1 4l-1 3l1 17l2 8l7 17l5 5l2 3l4 2l15 6l10 11l21 15l1 4l0 1l1 12l2 9l8 13l7 7l2 4l0 1l0 2l-2 -2l-3 -1l-1 6l1 4l1 8l2 9l-2 8l1 14l3 16l-1 11l6 24l6 14l3 3l3 2l7 1l9 7l8 8l2 3l4 5l3 -1l1 -1l3 3l12 7l1 4l16 29l6 17l5 18l4 26l4 14l6 7l4 12l4 1l3 3l4 12l3 5l2 -4l0 -2l-2 -4l2 -5l2 -3l6 4l3 3l1 6l1 3l6 7l5 2l7 1l5 1l5 3l8 7l19 6l15 19l9 13l29 20l5 9l3 9l6 0l11 10l3 8l8 3l2 -5l4 4l2 6l1 2l8 10l3 5l3 9l-2 4l-2 4l-3 2l-12 8l-12 4l-8 9l-6 -1l1 4l2 0l4 -1l6 -2l7 -1l6 0l6 1l4 3l10 8l10 15l11 13l15 11l6 4l5 2l28 0l20 -10l18 -8l6 -2l10 2l12 1l10 2l5 0l21 -9l13 -9l8 -4l4 0l12 3l15 -1l21 -7l7 -2l5 0l11 3l2 0l6 -1l16 -3l13 -6l24 -3l17 -10l3 -5l6 -6l8 -2l20 7l3 0l-1 5l-1 4l-4 8l-3 8l2 13l1 21l-1 3l-1 3l0 3l-2 0l-1 2l1 0l6 -2l0 -2l1 -2l5 3l4 1l0 3l0 2l-6 -1l-3 -2l-8 3l-5 2l-2 4l-1 17l-2 10l-1 15l-7 9l-2 7l-10 13l-6 11l-2 6l-9 15l-12 12l-5 15l-4 10l-5 8l-12 16l-5 10l-7 19l-3 11l-20 34l-20 27l-13 23l-23 27l-32 34l-42 40l-11 9l-45 25l-29 20l-15 15l-16 12l-13 12l-37 40l-4 4l-4 3l-5 7l-3 2l-9 12l-6 6l-6 6l-3 4l-2 5l-2 2l-5 11l-5 8l-5 6l-8 8l-6 4l-8 2l-2 0l-3 -1l-1 2l-1 3l-2 -1l-1 -1l0 6l1 3l-1 4l-4 3l0 3l-9 7l-12 1l-6 3l-3 3l-2 7l1 10l-4 8l0 4l-6 4l-3 5l-2 5l-2 2l-2 10l-3 7l-1 2l0 2l-3 3l-1 3l-1 2l-7 16l-6 7l-5 -1l-3 3l0 2l-1 4l-4 10l0 4l-2 5l-1 4l-4 14l-3 5l-5 13l-1 10l3 6l1 7l5 6l4 2l3 3l5 6l3 7l10 3l3 7l-1 5l-4 4l-4 7l-4 9l0 13l3 -2l4 4l1 10l-5 11l-1 6l-1 4l4 14l5 7l0 2l-1 2l9 13l-1 11l4 8l1 7l3 6l0 4l-3 4l7 1l4 4l2 3l5 0l3 2l4 2l8 6l3 3l1 1l0 1l3 5l5 5l-3 3l-4 2l6 4l-4 4l-1 4l1 1l1 2l-2 6l-4 4l-1 4l3 6l-1 10l3 9l0 5l2 3l-2 6l0 10l1 4l-2 5l3 1l2 6l0 6l-1 3l-6 4l0 2l0 2l6 0l1 4l-1 3l1 5l-1 4l1 4l-2 4l1 4l0 4l2 11l0 14l0 2l2 2l4 1l0 4l-4 5l0 3l0 4l4 -6l3 0l2 2l0 4l0 1l0 4l1 4l0 4l-3 2l-4 4l-1 5l1 2l-3 1l-1 2l2 4l-1 3l-4 11l-12 14l-6 5l-5 6l0 2l0 2l-6 8l-6 2l-4 2l3 7l-4 1l-7 6l-19 11l-3 2l-5 7l-6 1l-4 2l-6 1l-2 -1l-3 1l-1 1l-13 5l-12 3l-3 2l-2 2l-10 4l-16 9l-14 8l-10 8l-2 2l-3 3l-1 4l-1 2l-7 9l-11 11l-2 3l-4 6l-1 3l-4 2l-3 -4l-1 7l-3 1l-3 -2l-7 4l-6 4l-10 8l-15 17l-21 16l-3 0l-1 0l-7 -6l-4 0l4 3l2 3l-1 5l0 9l-2 15l0 4l3 4l6 5l5 7l7 20l0 10l7 13l1 5l2 14l0 11l0 7l3 3l1 -3l0 -4l1 -7l2 -3l2 0l0 4l2 2l0 3l0 4l-2 14l0 6l4 9l-4 11l-6 26l0 5l1 2l3 1l1 -4l2 0l1 2l-2 12l-3 6l-9 13l-5 5l-8 6l-20 8l-38 12l-16 6l-9 4l-19 12l-8 7l-4 9l-3 4l-4 5l3 5l3 3l3 2l2 2l2 1l3 -7l1 -2l2 0l-1 9l-3 29l0 1l-2 11l-7 18l-2 8l-6 30l-8 15l-5 6l-13 11l-3 2l-3 2l-6 1l-22 22l-8 11l-8 15l-7 9l-11 18l-9 14l-10 12l-15 18l-7 5l-5 2l-13 11l-18 16l-13 15l-21 16l-11 7l-18 15l-5 2l-20 13l-14 8l-23 9l-10 3l-21 -2l-10 1l-7 5l-1 9l-3 1l-5 -1l-16 -3l-8 1l-5 4l-4 5l-11 1l-21 -6l-24 -3l-6 -1l-11 4l-5 1l-17 -1l-9 -3l-9 0l-7 3l-9 0l-23 16l-11 0l-10 1l-6 0l-9 -2l-3 0l-6 1l-5 3l-13 1l-4 2l-21 14l-5 0l-4 -1l-10 0l-12 -8l-5 1l1 -2l1 -4l-3 -3l-2 -1l-4 0l-3 -4l-7 0l-3 1l-4 0l0 -3l0 -2l0 -4l-1 -4l-2 -1l-3 0l-5 0l-3 0l-2 2l-2 2l0 9l-3 -2l-2 -6l-1 -5l1 -7l5 -3l0 -4l-1 -4l-7 -10l-2 -5l-5 -3l-4 -8l-4 -2l-2 -6l-4 -4l-1 -7l2 -3l3 -3l4 4l4 -2l7 -4l3 -8l0 -12l0 -7l-5 -19l-3 -4l-11 -14l-13 -18l-17 -29l-8 -17l-11 -35l-11 -20l-13 -18l-2 -1l-5 -4l-17 -15l-5 -4l-9 -10l-19 -29l-3 -5l-3 -14l-4 -11l-1 -6l2 -3l-1 -5l-2 -4l-7 -5l-1 -18l-5 -12l1 -9l-2 -9l0 -6l1 -10l-4 -13l-7 -12l-6 -17l-1 -8l1 -20l-1 -8l0 -10l-3 -10l-1 -6l2 -4l1 1l2 1l1 -6l0 -5l-3 -13l-7 -12l-17 -22l-5 -8l-2 -6l-19 -28l-9 -20l-6 -17l-6 -8l-29 -55l-7 -8l-11 -11l-3 -3l-4 -10l-9 -14l-2 -12l-1 -15l1 -10l2 -19l2 -9l0 -10l-1 -26l-1 -3l-1 -4l4 -4l3 -2l3 -4l3 -6l3 -14l10 -30l5 -30l6 -14l3 -16l17 -21l4 -12l9 -6l13 -7l9 -12l4 -8l5 -15l0 -17l3 -21l0 -7l-5 -8l-1 -6l-4 -6l-5 -5l-2 -8l-8 -13l-3 -9l-3 -6l-1 -7l-2 -9l-4 -8l-4 -9l0 -2l2 -4l3 -1l-1 2l-2 2l1 1l15 -16l1 -3l-1 -3l0 -5l1 -4l-14 -30l-12 -27l-2 -14l-15 -18l-6 -12l-3 -9l-3 -3l1 -1l4 -1l9 -2l11 -2l11 -5l3 -2l-3 -1l-7 1l-3 1l-6 4l-8 2l-3 0l-2 -1l-5 -4l-4 -5l-1 -2l-1 -1l-2 -5l1 -5l1 -4l-1 -7l-3 -6l-4 -8l-1 -2l-1 -1l-2 -1l-3 -5l-4 -5l-1 -3l-1 -1l0 -6l-6 -6l-13 -12l-2 -3l-12 -11l-4 -5l-5 -8l-5 -5l-10 -8l-3 -6l-12 -13l-17 -14l-12 -11l-2 -3l2 1l12 5l2 0l1 -2l-5 -2l-5 -3l-5 -1l-4 0l-3 -3l-1 -3l-1 -3l-2 -4l-7 -7l-2 -2l-3 -4l2 0l7 3l1 -1l-1 -2l-7 -4l-4 0l-1 -2l1 -3l-5 -10l-5 -7l-1 -4l14 17l2 0l2 0l6 -2l-1 -2l-3 -3l-2 2l-4 0l-1 -1l-1 -2l3 -8l-1 1l-1 1l-2 1l-3 0l-7 -4l-6 -11l-2 -3l-1 -4l-2 -1l-7 -16l3 1l3 4l6 -1l3 -2l2 0l2 -1l3 -2l8 -11l2 -15l-1 -9l-1 -8l3 -3l1 2l0 3l2 2l2 2l6 1l8 3l3 2l1 -4l9 -4l-3 -1l-8 1l-12 -5l-4 -3l-3 -6l-4 -4l0 -3l9 -2l2 0l1 3l2 2l1 -1l0 -3l0 -7l-2 -11l1 -2l0 -1l-5 -3l-3 0l-3 -1l3 -8l3 -7l4 -5l3 -1l0 -3l4 -8l4 -7l-1 -7l1 -12l1 -12l2 -10l1 -9l3 -8l-1 -8l-2 -3l-10 -12l4 -4l-6 0l-1 -4l-3 -5l2 -1l1 -3l6 1l0 -1l-5 -4l0 -2l2 -3l-1 -1l-3 3l-3 0l-1 -2l-2 0l1 3l-2 3l-2 1l-3 0l-2 -1l-1 -2l-2 -1l-7 -2l-6 -3l-1 -7l-2 -3l-1 -3l-1 -4l1 -6l-1 -1l-2 0l-3 0l-2 0l-3 -3l-2 -2l1 6l-1 2l-4 0l-2 -3l0 -1l1 -8l-1 0l-1 2l-4 -1l-2 -4l-3 0l-4 -5l-1 1l4 12l-1 5l-14 0l-11 2l-8 0l-4 -2l-2 -5l0 1l-1 2l-2 2l-9 1l-4 -4l-3 -3l-3 -2l0 2l4 3l0 5l-7 6l-5 0l-3 -2l-1 -4l-1 -6l-2 -4l-1 0l1 3l1 3l0 7l3 4l-5 2l-2 0l-4 0l-1 -2l-1 -4l-1 -1l-1 7l-3 0l-2 0l-8 2l-2 0l0 -2l1 -2l-1 -3l-2 3l-1 4l-1 1l-5 -1l-5 -2l-4 -2l-5 -4l-11 -9l-1 -5l-3 -5l-3 -5l-3 -9l1 -1l3 1l1 -2l-5 -1l-1 -1l0 -3l0 -4l4 -1l3 -1l2 -2l0 -3l-8 4l-7 -4l-2 -3l1 -2l4 0l5 0l3 -2l-2 0l-3 0l-2 -1l0 -3l-1 0l-1 3l-5 2l-3 -2l-1 -4l0 -2l-3 -2l-9 -11l-11 -10l-11 -6l-15 -4l-32 1l-1 -1l2 -2l2 -1l11 -5l-2 -1l-11 3l-4 1l-4 6l-28 1l-4 0l-21 3l-23 3l-10 2l-15 4l-7 3l-4 1l-3 3l-2 5l-3 4l-9 3l-4 0l-21 0l-19 10l-11 3l-7 5l-9 4l-7 5l-13 2l-22 7l-7 3l-7 5l-11 6l-4 0l-9 -6l-7 -2l-16 -5l-12 -1l-6 -2l-2 0l-6 -2l1 -1l7 1l3 -1l0 -1l-2 0l-5 -2l0 -7l-2 -1l-2 1l-4 9l-1 1l-27 -4l-5 -4l-7 0l-12 0l-10 1l-2 2l24 -1l3 0l1 2l-31 2l-12 2l-3 0l-3 -3l-13 -1l-3 1l-1 2l5 0l8 0l2 1l-25 3l-18 3l-7 3l-24 10l-15 4l-4 2l-7 5l-9 3l-9 5l-6 1l-6 0l-17 -7l-13 -5l-44 -23l-12 -9l-14 -14l-31 -28l-7 -4l-9 -3l-5 -2l-4 -3l-3 -7l-8 -5l-15 -6l-10 -11l-2 -2l-10 -7l-9 -5l-21 -8l-7 -2l0 -3l2 -5l-4 -6l2 -5l-2 0l-2 3l-7 -1l-4 -4l-4 -1l-1 -2l-2 -10l-2 -4l-3 -3l-6 -1l-3 -6l-4 -4l1 -3l3 0l2 2l4 1l4 -5l4 -3l1 -3l0 -1l-3 2l-6 0l-2 2l-3 0l-2 -6l0 -3l1 -4l7 -1l0 -1l-5 -1l-6 -4l-1 -3l0 -2l2 -5l-2 -2l-5 -5l0 -2l-2 -3l-6 -6l-7 0l2 -5l0 -7l-2 -4l1 -3l-2 0l-2 3l-3 -1l-7 -4l-3 -4l-1 -4l0 -1l-2 1l-5 0l-12 -6l-10 -16l0 -3l2 -6l-1 -1l-4 4l-1 -3l-3 -6l-1 -4l-3 -1l-2 0l-2 1l-3 7l-2 0l-1 -2l0 -5l-3 -4l2 -6l-2 0l-4 5l-2 0l0 -6l-2 0l-3 0l-4 -3l0 -2l0 -4l3 -2l-1 -1l-2 0l-2 0l-2 0l3 -5l8 -4l5 0l4 -1l-2 -3l-5 -1l-5 0l-2 3l-3 0l-4 -5l0 -3l2 -3l2 -2l10 0l4 -1l2 -1l1 -1l0 -1l-2 -1l-3 3l-13 -1l-4 1l-7 5l-8 3l-6 -1l2 -7l-1 -1l-2 -1l-9 2l-7 -3l-2 -4l0 -4l3 -3l1 -2l-4 0l-6 2l-14 -8l-1 -2l-2 -4l1 -2l4 -2l6 -2l4 1l1 0l1 -1l-1 -1l-4 -2l-3 -3l-2 2l-2 3l-1 1l-2 1l-1 -2l-1 -2l1 -2l0 -9l0 -5l0 -4l-1 -4l-2 -10l4 -4l4 -3l2 2l1 4l2 3l7 2l7 -2l5 1l0 -2l1 -3l9 -1l9 -1l9 -2l7 0l3 0l-1 -1l-6 -1l-14 2l-15 1l-11 5l-4 -1l-4 -5l-2 -6l-1 -5l-3 -5l-5 -3l-1 -3l1 -3l5 -2l1 -2l-2 0l-4 2l-3 0l0 -5l-4 -5l-5 -10l-5 -4l-4 -8l-5 -3l-4 -1l-4 0l-1 3l-5 -5l6 -2l14 -6l15 -19l14 -22l1 -5l0 -22l3 -9l1 -7l6 -16l7 -14l6 -17l3 -17l-1 -17l-2 -15l-4 -10l-3 -14l-4 -8l-9 -6l-2 -4l2 -2l5 -1l4 -5l-7 2l8 -15l2 -11l0 -7l2 -4l-7 -10l-4 -12l-3 -2l-2 0l-1 2l-1 3l-3 -2l-5 -8l-8 -14l-2 -2l-3 2l-1 2l-2 12l-3 -3l5 -26l4 -26l6 -13l6 -6l8 -3l8 -13l3 -12l5 -5l2 -5l-2 -3l4 -6l6 -10l3 -7l7 -9l1 -3l-1 -2l-3 2l-3 4l-3 2l1 -3l3 -5l6 -6l10 -6l19 -20l8 -3l7 -9l2 -8l1 -17l2 -9l5 -7l5 -13l4 -6l2 -12l3 -5l5 -2l8 -6l10 -3l13 -8l6 -5l4 -7l5 -13l7 -15l4 -11l7 -5l5 -8l7 -3l17 -1l24 -6l21 -9l6 -4l7 -7l11 -10l20 -11l10 -6l14 -16l10 -13l7 -8l6 -8l4 -7l2 -13l-2 -4l-6 -8l-4 -2l-1 -4l2 -6l0 -11l2 -18l6 -15l17 -18l3 -8l1 -12l1 -5l20 -17l12 -13l4 -4l11 -6l37 -13l21 -10l12 -6l7 -9l20 -32l20 -45l2 -5l9 -2l6 0l5 -2l6 -4l6 2l-3 2l0 6l4 6l8 8l13 9l11 4l15 2l17 -4l10 0l4 -2l5 3l10 0l10 -1l7 -4l4 -4l1 2l0 2l2 2l2 5l2 3l5 -1l5 1l11 0l10 1l10 1l5 -1l12 -4l10 -6l7 -3l7 -7l6 -4l8 -4l25 -10l3 0l9 2l7 -1l4 -3l6 -8l8 -5l10 -5l14 -5l9 -4l14 -4l36 -2l18 -2l13 0l12 -7l7 -2l27 -1l13 -5l49 0l6 2l6 3l10 6l5 2l6 -2l15 -6l17 -3l9 -4l4 -5l8 -2l5 4l17 4l11 -1l5 -1l-2 -7l12 2l8 3l10 6l6 1l10 -2l23 -2l12 -3l12 -8l4 -2l27 -7l4 1l4 1l-1 2l-2 2l2 4l4 -2l-1 -2l0 -2l5 0l5 0l6 3l-1 8l8 9l-2 4l6 2l5 -3l3 -4l9 -3l10 -6l5 -1l1 6l2 4l-3 2l-5 5l-8 12l-8 4l-6 5l-2 3l0 4l1 7l4 8l6 4l4 1l11 7l0 4l2 5l0 6l4 5l-8 10l-5 8l-8 10l-8 7l-17 10l-4 3l-3 3l-1 4l0 4l6 11l7 6l8 3l13 -1l-1 4l1 4l5 0l4 -1l3 -4l6 3l4 9l5 4l0 1l-1 0l-2 2l2 0l5 2l3 -1l5 2l8 3l8 1l23 12l7 2l17 1l19 -5l7 -1l13 5l5 1l10 0l16 4l4 2l9 6l5 2l33 6l4 4l5 8l0 9l3 7l4 9l5 6l5 6l7 3l14 5l17 2l16 0l29 7l23 8l6 3l12 4l25 18l13 6l9 2l9 -1l14 -7l7 -3l15 -16l5 -8l2 -6l-1 -6l-2 -5l-4 -6l-3 -7l-2 -13l3 -9l3 -5l4 -6l13 -11l12 -7l22 -10l13 0l5 -1l11 -7l4 0l6 2l17 -1l8 2l9 4l12 3l8 3l8 3l2 9l0 2l-1 3l9 6l26 3l5 2l7 4l4 2l18 0l10 -1l10 2l4 1l3 4l5 8l2 3l3 6l8 1l26 -5l28 5l15 2l24 5l15 8l4 1l11 0l6 5l28 2l14 6l9 4l5 1l4 0l6 -1l7 -3l9 -5l16 -10l6 -2l4 0l5 0l2 -3l3 -2l1 -2l3 -3l8 -1l18 -4l-2 2l-16 5l7 1l7 -2l8 -1l2 -2l1 -5l1 0l6 1l16 6l4 0l12 -3l2 -1l4 2l9 8l-3 0l-9 -7l-1 3l-5 6l6 3l5 1l3 3l2 3l5 -1l4 -4l-2 -2l-1 -3l2 0l3 2l11 8l3 2l4 -1l9 -2l2 0l11 -2l2 2l2 2l9 -3l14 0l12 -2l14 -6l1 -1l9 -8l5 -5l0 -1l10 -15l6 -15l6 -21l4 -10l4 -7l1 -6l3 -4l2 -5l2 -7l5 -5l9 -19l5 -8l1 -10l8 -10l6 -3l3 -2l0 -4l-4 -12l-1 -4l1 -6l2 -8l-1 -4l0 -3l-1 -3l-7 -8l4 -13l3 -4l3 -4l-4 -8l-3 -7l3 -5l8 -6l7 -7l0 -4l0 -3l-2 -3l-5 -2l-7 3l-5 3l-3 1l-4 2l-2 3l-4 3l-7 1l-11 -3l-12 -4l-6 -4l-6 -1l-5 2l-15 9l-14 13l-3 2l-13 6l-9 2l-4 -1l-17 3l-9 0l-6 3l-13 -3l-8 -4l-5 -4l-7 -9l-6 -5l-12 -4l-21 -9l-6 -1l-14 -1l-16 -1l-3 3l-1 14l-3 3l-1 7l-2 3l-3 1l-4 -2l-3 -1l-8 2l-15 5l-5 0l-17 -5l-6 -3l-4 -4l-1 -6l-3 -4l0 -2l-1 -3l-3 -1l-4 2l-4 0l-5 -1l-12 -5l-9 -1l-5 7l-4 2l-5 0l0 -2l3 -4l-14 1l-7 3l-6 0l-4 -2l0 -1l5 -1l4 -1l15 -1l3 -2l4 -4l7 -4l1 -1l-5 0l-24 1l-16 -1l-1 2l-3 0l0 -5l2 -2l3 0l9 -2l-1 -4l-6 -3l-1 -2l-4 0l-4 -2l-1 -6l-3 -5l-4 -3l1 -1l7 -2l2 -8l-1 -5l-4 0l-11 -4l-3 0l-4 -4l-6 -3l-3 1l-2 2l-3 -1l-5 -3l-4 -1l-3 -2l3 -4l4 0l0 -4l-2 -6l0 -3l3 -1l4 0l3 4l1 4l0 3l2 3l2 1l1 -3l1 -1l3 2l4 0l12 -2l2 -2l-9 1l-3 -2l-3 -4l-2 -3l-1 -2l-1 -3l1 -1l6 -2l6 -5l-3 -2l-2 -1l-3 1l-2 -2l-1 -3l3 -2l0 -3l-7 -7l-2 -2l2 -2l5 -4l5 -5l-1 -2l-4 0l-17 2l-6 2l-12 1l-1 -3l0 -2l3 -5l-1 -11l2 -5l3 -1l-113 0l-2 2l-3 -2l-14 0l4 2l-1 1l-2 1l-11 -3l-1 -1l-37 0l10 10l4 9l3 3l6 3l7 7l2 4l2 5l-5 4l-3 0l-2 -2l2 -4l0 -2l-8 -4l-4 2l-4 2l2 4l3 3l1 4l5 0l-6 5l-7 2l-6 0l-4 0l-1 2l3 0l2 1l5 2l12 3l6 4l6 0l5 7l11 2l5 6l8 2l6 2l2 3l1 4l1 9l1 7l0 2l0 3l-2 2l-2 0l-5 -5l-7 -5l-8 -7l-2 -1l-2 0l-4 2l-11 2l-6 2l-2 1l0 1l2 1l3 3l0 4l3 5l3 1l4 0l3 1l0 2l3 2l2 2l-1 1l-11 3l-3 2l-2 0l-3 -1l0 -4l-4 -2l-4 -2l-4 -1l-4 -2l-3 2l2 7l5 6l7 13l3 8l1 4l-2 7l4 5l2 5l-3 -1l-2 -1l-4 -2l-7 -8l-3 -5l-3 -1l-5 1l-7 11l1 6l-4 -2l-2 -2l0 -6l0 -3l-7 -9l-4 -1l-1 -3l-3 -3l-3 0l-3 2l-1 4l0 5l-2 3l-8 -6l-8 -11l0 -6l6 -5l-1 -4l-6 -8l-7 -5l-5 -2l-2 -5l-4 -2l-3 -2l-1 -2l1 -1l8 -5l5 -9l3 0l4 2l6 -1l4 -5l4 -2l7 0l14 7l16 3l8 4l4 3l2 1l4 0l0 -2l-1 -3l3 -1l8 0l2 -1l1 -2l-1 -2l-3 -1l-3 0l-2 -1l-3 1l-5 -2l-3 -1l-1 -1l-9 -3l-8 -5l-2 3l-3 1l-5 0l-13 -3l-8 3l-4 0l-4 0l-4 1l-4 1l-5 -4l-1 -4l-1 0l-1 3l-1 2l-6 2l-3 -2l-3 -6l-3 -8l-6 -6l-5 -1l-1 -4l1 -2l6 -1l9 3l2 -1l2 -1l-1 -3l-1 -2l-3 -1l-1 1l-6 -1l-7 2l-3 -2l-1 -1l-6 -4l-6 -6l-8 -3l-5 -11l-5 -5l-5 -3l0 -5l-2 -4l-4 -6l-72 0l-1 1l-1 4l-3 4l-6 -2l-7 -4l-2 -3l-72 0l-4 7l0 6l4 5l11 3l9 5l6 5l0 12l3 7l-4 4l-7 -1l-10 3l-7 4l-3 4l1 11l-2 5l-13 8l-7 8l-2 3l-2 4l-17 0l-4 -5l0 -7l3 -4l6 -2l4 -9l-1 -7l2 -3l3 -2l4 -1l7 -1l0 -9l-5 -4l-1 -6l-3 -11l-8 -13l-5 -12l-3 -6l-1 -1l-783 0l-5 6l-12 18l0 5l6 18l3 5l5 3l10 4l2 3l-3 3l-10 6l-16 7l-7 6l-1 6l-5 2l-2 8l-3 6l-1 1l-3 5l0 2l5 4l-3 2l-2 1l-6 0l-19 1l-16 9l-8 7l-7 15l-9 8l-3 2l-6 -4l-8 -1l-7 2l-3 3l-6 1l-6 -1l-12 -1l-6 0l-9 3l-7 -2l-12 -1l-27 2l-4 1l-3 4l-9 6l-13 0l-12 4l-2 2l-5 7l-2 5l-1 0l-1 -1l-2 0l-1 4l-5 2l-3 1l-9 -3l-8 -5l-4 0l-6 -8l-3 -4l-2 -5l0 -2l0 -2l-6 -2l-2 -4l5 -6l3 -3l2 -1l-5 1l-4 3l-5 -6l-19 -12l1 -2l0 -2l-3 3l-3 1l-10 0l-11 1l-5 1l-17 8l-5 0l-10 -4l-17 -1l-6 -1l-7 2l-5 0l-5 3l-3 -1l4 -6l5 -14l0 -8l1 -7l-1 -7l-3 -4l4 -11l-1 -6l-3 -7l11 1l-4 -3l-3 -2l-3 0l-3 0l-9 3l-4 1l-2 0l1 -5l-3 -6l4 -1l4 -1l4 -2l2 -3l-1 -5l3 -5l7 -4l-3 1l-5 2l-7 9l-2 5l-6 1l-5 1l-2 0l-4 -2l0 -3l0 -3l2 -5l1 -8l3 -6l0 -2l-1 -3l3 -3l3 -1l6 -6l7 -14l5 -9zM11473 2200l-2 8l-5 12l0 5l2 5l0 3l-2 1l-3 2l-3 10l-2 3l-2 1l-1 -1l0 -3l-4 -3l-3 3l-2 6l-3 6l0 1l0 19l1 2l1 13l1 6l2 6l3 6l3 6l5 3l10 4l4 1l13 1l13 2l7 2l3 1l2 2l6 10l10 6l19 10l10 4l32 6l22 0l59 -12l19 -4l8 0l-5 3l-7 1l4 2l7 0l3 0l3 -1l0 -3l0 -3l-3 -11l-2 -8l-1 -4l-3 -13l-1 -12l0 -6l2 -12l0 -6l-1 -6l1 -5l1 -6l0 -6l-1 -4l-2 -4l-5 -4l0 -3l-1 -3l-4 0l-4 -3l-3 -1l-7 -2l-4 0l-3 1l-2 3l-2 -4l0 -5l6 -8l3 2l5 1l5 0l5 0l-1 -3l-2 -2l-3 -1l-1 -4l0 -5l1 -3l-1 -2l-3 -1l-6 0l-7 -1l-8 0l-1 4l4 6l-4 -3l-3 -4l-3 -4zM9716 2399l-3 0l-3 -1l-1 -1l4 -1l2 1l1 1l0 1zM9603 2362l-3 1l-3 -2l0 -2l0 -1l4 1l1 2l1 1zM11130 3435l-2 1l0 -2l0 -4l2 -2l1 4l0 1l-1 2zM11004 3396l1 5l-4 -2l-1 -1l2 -2l0 -1l2 1zM10845 2931l-1 0l-4 -4l-2 -2l-2 -2l-9 -3l-2 -2l2 -2l1 2l1 1l8 3l9 7l2 0l-3 2zM10830 2914l-1 1l-2 -2l0 -4l2 -2l0 3l1 3l0 1zM11688 3568l3 1l5 -2l13 0l16 5l-3 2l-1 2l-7 2l-8 4l-20 2l-6 -1l-5 -4l-9 -6l3 -3l1 -2l1 -1l6 -3l5 1l6 3zM11667 2987l-4 0l-3 -2l7 -2l2 -1l2 -3l1 2l-2 4l-1 1l-2 1zM11631 2986l-1 0l-1 -3l0 -1l3 -1l1 2l-2 3zM11809 2854l-4 6l-7 5l-3 -2l-3 0l-5 2l-3 1l-7 3l-6 2l-4 0l-1 -1l-1 -2l0 -1l2 1l10 -4l11 -5l1 -2l-2 -4l1 0l7 1l9 -3l7 -1l3 2l-5 2zM11696 2991l0 2l-5 -1l-1 1l-4 0l-4 -1l2 -3l8 -2l3 2l1 2zM11099 3364l4 1l-1 -2l-1 -1l2 -2l5 5l0 5l0 1l-2 -1l-1 -1l0 -1l-1 -2l-6 1l-3 -1l-5 -5l-1 -3l2 -1l2 -2l1 -2l-1 -3l3 0l1 3l1 7l0 1l-1 2l2 1zM11007 3415l2 3l2 0l1 -1l1 -2l7 4l0 2l-5 0l-5 -1l-5 0l-6 -1l-2 -4l4 2l2 0l1 -1l-3 -3l-4 0l0 -2l2 -1l1 -1l-2 -4l4 1l3 2l2 2l0 5zM11138 3515l-3 1l2 -4l2 0l1 0l-2 3zM11530 2906l-1 4l-2 -2l-4 -6l1 -5l-1 -6l1 -2l4 -1l1 0l-1 2l3 4l0 6l-1 6zM11139 3501l0 2l-1 -1l-3 -2l3 -3l2 2l-1 2zM11414 2719l-3 1l-2 -1l-2 -2l-3 -7l2 -2l0 -2l1 -1l1 -3l1 -1l2 2l6 8l0 3l0 1l-3 4zM10392 2404l-4 1l-1 -1l-1 -2l2 -5l-2 -4l0 -2l3 -2l2 -3l5 -3l13 -4l3 -1l-1 4l-4 7l-4 4l1 4l-6 1l-6 6zM10359 2427l-2 3l-2 -3l1 -3l-2 -4l4 -6l0 -3l3 -2l-1 5l-2 5l2 3l2 4l-3 1zM10393 2372l-1 1l-3 -2l0 -1l3 -2l1 0l0 1l0 2l0 1zM10351 2352l-5 1l1 -4l-2 -3l3 1l3 2l1 1l0 1l-1 1zM10347 2364l-1 0l2 -3l5 -3l8 -3l2 0l5 2l-8 3l-3 1l-5 0l-5 3zM10277 2352l-4 2l-3 -3l-2 -5l8 -6l2 1l1 1l0 6l-2 4zM10264 2347l-4 3l-3 0l-2 -2l2 -3l5 -2l2 0l0 3l0 1zM10274 2380l-2 3l-3 -1l1 -1l1 -1l0 -2l-1 -1l0 -1l3 2l1 2zM10269 2366l-1 1l-4 -3l-1 -2l2 -2l5 4l-1 2zM10341 2309l6 2l2 0l3 0l1 3l-4 1l-7 3l-3 -1l-3 -2l-5 -1l-2 0l3 -3l5 -1l4 -1zM10302 2324l-3 0l1 -2l4 -4l7 0l5 -2l2 0l-3 3l-5 3l-8 2zM10293 2360l-4 1l-2 -1l3 0l2 -1l1 -1l4 -2l3 -3l3 2l-4 1l-6 4zM10323 2371l-4 1l-2 2l-3 -1l0 -3l3 1l2 -1l-1 -2l3 1l2 2zM10218 2321l-4 3l0 -4l2 -4l3 0l1 2l-2 3zM10222 2333l-3 1l1 -3l-1 -2l1 -1l2 -2l0 2l2 2l-2 3zM10227 2362l0 3l0 1l-11 1l1 -3l1 -1l3 1l1 0l1 -1l4 -1zM10247 2325l0 6l-1 -1l-1 0l0 -2l0 -3l2 0zM10250 2312l-2 3l-4 -4l-4 -2l-2 -3l-2 -1l-1 -3l3 -1l2 0l3 3l5 1l0 2l1 3l1 2zM10263 2320l-2 3l-3 0l-5 -4l-2 -1l-1 -2l2 0l3 2l6 0l2 2zM10236 2354l-1 0l-1 -2l-1 -2l1 -1l2 0l2 4l-2 1zM10305 2289l-5 3l-5 -4l-1 -1l4 -2l2 -3l-2 -3l-5 -4l-1 -4l9 -1l4 3l3 0l-1 3l0 1l1 8l-3 1l0 2l0 1zM10321 2234l-1 2l7 5l2 4l1 3l-1 0l-2 -1l-3 -1l1 2l2 2l-4 1l-3 0l-12 -2l-3 -3l7 -4l2 -2l-5 0l-5 5l-9 -2l-2 -2l-1 -1l4 -4l5 0l3 -1l4 -2l0 -2l9 0l4 3zM10189 2244l-2 2l-4 -1l-3 -5l9 4zM10194 2242l-2 1l2 -4l5 -2l-2 3l-3 2zM10234 2260l-6 1l-1 0l1 -2l0 -1l-5 -2l1 -4l0 -1l4 2l1 3l5 4zM10272 2201l-2 2l-1 2l-1 5l-3 0l-2 -1l0 -2l-1 -2l-1 0l-1 3l-1 1l-3 0l-3 -2l0 -2l0 -4l0 -1l9 0l2 2l3 -1l1 -1l4 0l0 1zM8194 3647l-4 1l-2 -3l0 -1l2 -1l1 0l2 -1l2 -2l1 0l1 0l0 4l-1 2l-2 1zM8181 3215l-3 5l-1 -2l-1 -4l3 -4l1 -3l3 0l-2 8zM8140 2557l7 2l7 -1l7 3l4 1l-3 2l-4 4l-9 -1l-8 -3l-2 -2l-1 -2l2 -3zM8205 3646l0 1l-3 0l1 -1l-1 -1l1 -4l0 -1l1 2l1 1l0 3zM8183 2781l-4 11l-4 5l-2 1l-6 2l-7 -7l-3 -8l-2 -2l3 -2l4 0l10 -1l2 -1l10 -7l10 -1l0 3l-11 7zM8314 2754l-3 4l-4 -1l2 -8l2 -2l7 -3l5 -1l2 -4l2 -1l2 2l-2 2l-1 8l-4 2l-8 2zM8290 2792l-7 5l-7 -1l-1 -1l7 -1l6 -5l4 -9l7 -11l1 -4l2 -2l4 0l1 0l2 2l0 6l-2 9l-3 7l-14 5zM8374 3828l-1 2l-3 -4l-18 -5l5 -2l12 -1l4 2l1 1l1 2l-1 5zM8230 2793l0 3l1 4l0 6l-3 3l-6 4l-5 -1l-2 -1l-5 -5l0 -6l4 -3l2 -5l11 1l1 -1l1 0l1 1zM8214 3639l0 2l-2 0l-1 -1l1 -3l2 -2l2 0l1 1l0 1l-1 1l-2 1zM8222 3623l0 1l-3 -1l4 -4l3 -1l0 4l-2 0l-2 1zM8141 2799l-2 0l-3 -1l-2 -4l2 -3l1 -1l2 0l4 2l2 2l0 2l-4 3zM8205 3627l-2 1l-3 0l-1 -2l0 -2l3 -4l2 1l1 6zM8201 3606l-3 6l-3 -1l-2 -3l-1 -2l7 0l2 0zM8106 2810l-5 8l-6 -3l-2 -1l-1 -2l6 0l6 -4l2 2zM8108 2775l-1 1l-1 -4l-6 -10l4 -4l6 0l3 3l1 3l-1 2l0 3l-1 3l-4 3zM11224 4804l2 7l0 5l-1 2l-2 -1l-4 -4l-8 -4l4 -1l2 1l2 -1l1 -2l1 -1l2 -1l1 0zM11189 4815l4 3l-10 -1l-1 -3l0 -2l3 1l4 2zM11259 4849l-3 0l-2 -1l0 -3l0 -3l1 -3l-3 -4l3 -2l2 2l1 1l3 2l-1 3l0 1l-1 4l0 3zM11173 4795l-1 1l-4 -3l-3 -1l-4 -4l2 -16l1 -2l1 -1l2 -1l3 2l-1 11l3 7l3 5l-2 2zM10986 4599l-3 1l-1 -1l-2 -2l3 -2l3 -3l6 -6l3 -3l0 -1l0 4l-4 9l-3 1l-2 3zM11050 4308l-2 0l1 -2l5 -4l3 1l0 1l-1 1l-6 3zM10975 4509l4 10l-1 2l-3 2l-1 0l-2 -2l-1 -4l-2 1l-3 -4l-4 0l-3 -5l1 -5l0 -7l3 -4l3 -7l2 5l0 7l4 8l2 2l1 1zM11883 5224l-7 2l-7 -1l-3 -3l0 -1l2 -1l0 -3l1 -6l2 -2l3 -2l2 -4l3 -3l4 -1l4 6l3 6l-1 5l-3 2l-1 4l-2 2zM11790 5267l-7 1l-5 0l-10 -4l-3 -3l-3 -8l1 -3l3 -5l6 -2l8 1l3 1l4 6l5 6l-1 7l-1 3zM11417 4868l0 2l-6 -1l-1 -6l3 0l1 -3l2 0l2 5l-1 3zM11497 5045l-6 9l2 -7l6 -11l2 -1l-4 10zM8715 5000l-4 0l0 -2l4 -3l2 1l0 3l-2 1zM10993 4445l1 3l-1 2l0 8l0 5l-3 7l-3 2l-2 -1l-1 -1l-2 -2l3 -12l-1 -10l5 1l4 -2zM11777 4435l0 4l-2 -1l-1 -3l-3 -2l-2 -3l4 -2l4 7zM9437 4012l1 0l7 0l3 3l-1 4l-7 11l-2 5l-3 4l-2 0l-9 -2l-2 -2l0 -2l1 -4l0 -2l4 0l2 -1l2 -5l1 -4l2 -4l3 -1zM9333 4194l-5 4l-2 -1l-1 -3l-2 -5l1 -3l2 -3l5 -3l3 0l3 4l0 4l-4 6zM9371 4122l-2 1l-2 -1l0 -2l2 -4l2 -1l1 1l1 1l0 1l-2 4zM9365 3979l-5 2l-3 -1l4 -6l3 1l2 1l-1 3zM9564 2462l-8 4l2 -3l5 -4l1 1l0 2zM9548 2514l-1 0l-3 2l-1 0l-4 -2l-1 0l-2 -1l1 -6l0 -1l9 -1l5 4l1 1l0 1l-2 2l-2 1zM9424 2247l-3 5l-3 -4l0 -3l0 -1l4 1l2 2zM9215 2208l-1 1l-16 -6l-5 -1l-1 -1l0 -1l21 0l3 4l0 1l-1 3zM9080 2266l-1 1l-4 -1l-5 0l0 -2l1 -1l1 -1l3 2l5 1l0 1zM9072 2254l-2 3l-7 -1l-2 -1l2 -4l2 0l0 -3l2 -2l11 -2l3 2l0 2l-6 5l-3 1zM9728 2407l-1 2l-5 0l-4 -3l0 -5l4 1l5 4l1 1zM10031 2281l0 6l4 1l4 5l0 3l-1 0l-8 -2l-2 1l-2 0l-1 -3l0 -1l-1 -2l-1 -1l-3 3l-2 0l0 -2l3 -6l1 -1l2 2l2 -1l1 -3l1 -3l0 -1l3 5zM10044 2310l6 5l-4 -2l-5 4l-6 -4l-3 -4l-1 -2l4 -3l3 3l4 1l2 2zM10034 2270l-2 0l-1 0l-2 0l-1 1l0 -4l2 -5l2 -3l3 -1l1 2l0 8l-2 2zM10038 2284l-3 0l-3 -5l-1 -3l1 0l2 0l1 1l0 2l1 1l1 2l1 2zM10004 2228l1 3l-6 -2l-5 -2l-4 -6l-8 -7l0 -2l3 -2l7 -1l3 1l1 1l1 2l-4 2l-1 2l3 2l0 1l1 5l2 1l3 2l3 0zM10177 2304l-1 1l-3 0l-1 -1l-1 -1l1 0l1 -2l1 -1l2 1l1 0l0 3zM10153 2391l-1 2l-5 -2l-1 -2l-1 -5l2 -2l1 -1l2 3l5 4l-2 3zM7900 5025l4000 1l0 -1l-4000 0zM10270 2329l-5 0l1 -3l1 -1l6 1l0 2l-3 1zM10226 2344l-2 1l-3 -2l1 -2l2 -2l2 1l1 2l-1 2zM8282 4599l-2 0l0 -1l-1 -1l1 -2l1 -1l1 0l2 2l1 1l-1 1l-2 1zM11723 2978l0 1l-2 0l-3 -1l-1 -2l2 -1l1 0l1 1l2 2z",BORD_D="M10263 5090l-8 -8l-5 -4l-3 -1l-10 -1l-23 -2l-3 0l-9 2l-12 2l-10 2l-11 2l-10 -8l-11 -10l-12 -10l-9 -9l-4 -4l-8 -7l-5 -3l-3 -1l-5 -17l-3 -15l0 -12l0 -16l0 -16l0 -16l0 -16l0 -16l0 -16l0 -16l0 -16l0 -8l12 0l12 0l14 0l15 0l15 0l15 0l10 0l3 0l3 -1l0 -1l-4 -8l0 -3l1 -5l2 -5l3 -6l0 -3l-2 -12l0 -7l1 -6l0 -7l0 -4l0 -3l2 -3l0 -4l1 -2l0 -1l-1 -3l0 -7l-2 -9l-1 -6l2 0l4 1l2 3l1 3l2 0l7 3l2 3l2 6l-1 3l-2 3l2 2l4 1l3 0l7 -4l3 -1l4 -1l4 -1l10 -2l5 -1l3 -1l2 0l2 1l-1 4l-1 4l2 8l1 3l4 3l2 1l3 3l5 -1l12 4l3 2l5 2l4 0l12 1l4 1l9 2l6 0l5 -1l4 -1l2 -1l0 -1l2 -4l2 -8l1 -2l3 -1l3 -1l2 1l2 9l9 8l3 7l3 6l2 1l3 2l6 1l5 0l10 4l9 4l6 2l3 2l2 3l1 2l2 6l2 5l3 1l3 0l3 3l2 3l4 7l3 5l1 4l4 3l5 2l4 0l3 -1l6 -3l5 -3l4 -1l2 1l2 2l0 4l1 2l3 2l3 -1l1 -2l0 -1l0 -11l0 -8l0 -9l0 -10l0 -9l0 -7l0 -7l-3 0l-2 2l-7 0l-3 1l0 2l0 3l0 3l-1 2l-3 1l-4 -2l-7 -1l-7 -2l-4 -4l-7 -7l-4 -3l-9 -8l-2 -1l-3 -3l-2 -6l-2 -4l-1 -3l-1 -4l2 -6l4 -13l2 -8l1 -7l5 -7l0 -5l-2 -8l1 -4l0 -11l0 -9l0 -4l-1 -8l-3 -9l-7 -11l0 -3l4 -3l7 -4l3 -3l4 -4l2 -2l4 -6l2 -4l1 -5l-2 -6l4 -1l12 -2l13 -2l14 -2l15 -2l13 -2l13 -2l8 -1l2 3l2 6l4 5l3 4l4 2l2 1l14 -1l4 3l5 3l1 4l3 3l3 2l1 1l2 -1l4 0l3 1l2 1l0 4l1 2l5 0l4 1l5 2l5 1l6 1l2 3l6 3l8 2l5 3l3 1l0 2l1 2l2 2l0 3l1 2l2 1l2 0l1 -2l2 0l3 1l1 3l2 4l2 3l3 2l-1 5l-1 4l4 4l5 4l1 2l1 6l1 2l3 4l2 4l0 2l-10 9l-3 1l-3 1l-2 2l-2 2l1 1l1 3l2 5l2 4l-2 4l-4 8l-1 1l-1 6l2 2l1 2l1 4l0 5l0 4l-2 12l4 9l2 2l6 0l1 0l-2 3l-2 3l-2 1l-8 4l-11 4l-2 3l-2 5l2 3l1 2l-1 4l0 5l0 4l-1 3l-1 2l-2 5l-2 5l-2 2l-3 3l-4 2l5 3l1 1l0 2l-1 1l-1 1l3 2l2 1l3 3l2 5l1 1l1 1l1 0l1 0l3 -3l2 -1l3 4l-11 3l-5 2l-16 5l-14 5l-4 1l-7 2l-4 2l-13 4l-5 2l-4 2l-11 3l-9 3l-11 3l-12 3l-7 2l-5 2l-10 4l-1 2l0 2l2 6l2 5l3 3l1 8l1 7M11140 3381l9 -6l3 -2l1 -2l2 -4l3 -1l1 -5l0 -2l-2 -1l-1 -5l0 -6l1 -3l1 -4l3 -2l1 -1l-3 -3l1 -2l5 -5l2 -1l4 -2l3 0l3 1l3 1l3 3l3 3l4 1l3 -1l3 2l2 -1l2 -1l4 0l4 -2l10 -1l9 1l10 -2l10 0l10 1l3 0l2 1l8 4l7 1l13 1l14 1l11 1l11 -1l8 0l2 0l3 2l5 7l5 6l8 1l6 -3l6 -3l3 -3l4 -10l3 -6l6 -8l5 -6l7 -8l4 -5l8 -9l7 -3l14 -7l13 -7l9 -4l8 -2l12 -2l15 -2l15 -2l16 -2l17 -2l12 -2l16 -2l13 -2l11 -1l12 -2l2 5l2 5l2 5l3 5l2 5l2 5l2 5l3 5l2 5l2 5l2 5l2 5l3 5l2 5l2 5l2 5l2 5l4 2l2 4l3 7l3 6l3 7l3 7M11819 2951l-1 0l-2 2l-3 4l-3 1l-2 2l-3 3l-2 0l-3 -3l-1 -3l0 -1l1 0l1 -1l-1 -3l-2 0l-2 -1l-2 1l-3 2l-1 3l0 4l0 5l0 2l-1 3l-1 4l1 4l1 2l0 2l-2 5l2 1l6 0l2 4l2 2l-1 2l-4 1l-6 1l-4 0l-8 1l-4 3l2 2l1 1l1 3l-2 5l-2 4l-2 6l-3 7l-5 9l-3 8l0 6l0 4l-1 7l-3 4l-1 0l-4 -1l-1 0l-4 0l-6 -1l-7 -1l-9 -1l-11 -1l-10 -1l-11 -2l-12 -1l-10 -2l-10 -1l-9 -1l-8 -1l-6 -1l-4 0l-1 0l-4 -1l-3 -2l-2 -4l-3 -3l-3 -3l-3 -3l-2 -4l-3 -3l-3 -3l-3 -4l-2 -3l-3 -3l-3 -3l-3 -4l-2 -3l-3 -3l-3 -3l-3 -4l-1 -2l-1 -2l-1 -7l0 -1M11804 2897l2 0l2 1l1 5l-1 5l0 5l-1 2l2 3l3 1l2 0l1 -2M11814 2938l0 -2l0 -1l-2 0l-1 2l-1 2l2 1l2 -2M11899 2309l-5 -2l-8 -2l-10 -1l-5 -1l-3 -2l-1 0l0 -3l0 -2l-2 -3l-2 -2l-3 -2l-6 0l-9 0l-6 -1l-6 -1l-6 1l-5 0l-4 1l-2 1l-1 5l-1 1l-3 0l-3 0l-5 0l-11 -1l-13 0l-10 2l-8 4l-7 4l-9 6l-3 3l-5 11l-2 1l-3 2l-3 0l-6 2l-8 2l-5 1l-14 0M11220 2200l8 6l9 7l1 2l1 1l2 1l-2 0l-3 -1l-7 -4l-3 1l-3 4l-3 12l-3 1l-5 0l-6 0l-4 0l-1 1l1 1l1 2l1 3l0 2l2 2l3 2l0 2l0 2l-1 2l-1 1l2 3l3 4l2 1l-1 7l1 3l1 4l-1 7l1 2l1 0l3 1l2 0l2 1l-1 1l-3 3l0 2l-1 4l-2 2l-3 3l-2 4l0 3l0 1l6 0l3 3l8 4l1 1l-2 3l0 1l1 2l1 2l0 3l0 3l1 1l6 3l4 4l0 1l-2 2l0 3l0 1l-1 -1l-3 -1l-4 0l-2 1l-3 2l-5 3l-4 2l-2 2l-2 0l-1 -2l-1 -2l0 -7l0 -3l-2 -1l-2 -1l-3 -1l-2 0l-4 3l-5 2l-8 0l-6 -1l-2 0l-11 -4l-2 0l-4 -1l-4 -1l-8 2l-4 -1l-4 -2l-2 1l-5 5l-9 7l-5 1l-2 -6l-3 -3l-1 0l-2 -1l-2 1l-5 4l-9 2l-7 2l-11 2l-9 0l-4 1l-8 -1l-7 -1l-7 0l-6 0l-12 5l-22 9l-17 4l-9 2l-7 1l-13 0l-10 -1l-7 0l-4 -1l-5 -3l-7 -4l-3 -1l-4 -1l-5 0l-15 5l-4 2l-5 1l-10 3l-4 2l-6 0l-7 -1l-6 0l-4 -2l-2 -3l-8 -2l-6 0l-2 1l-1 4l-3 10l0 2l5 10l0 1l-4 1l-4 0l-3 1l-2 1l-2 9l-4 1l-3 2l-2 5l-2 0l-8 -3l-3 -1M9575 2541l0 1l-2 10l0 3l0 6l0 7l4 6l0 2l-2 3l-7 4l-10 4l-8 4l-9 5l-2 3l-5 2l-4 3l0 2l-3 4l-3 3l-9 2l-1 1l-4 5l-2 2l-2 4l3 10l3 11l1 5l0 4l-2 4l-5 6l-3 4l-6 8l-2 2l-5 2l-8 3l-6 3l-3 -12l-3 -10l-2 -9l-4 -14l-3 -13l-3 -12l-3 -11l-3 -12l-1 -1l-9 -6l-8 -5l-8 -5l-9 -6l-2 -8l-5 -11l-4 -7l-2 -1l-10 -5l-6 -3l-1 -1l-2 -5l-4 -9l-4 -9l-2 -6l0 -7l1 -5l2 -2l9 -7l5 -7l6 -3l4 -3l4 -2l4 -4l2 -5l1 -4l1 -8l2 -5l4 -6l-2 -5l-2 -5l0 -9l0 -4l-2 -3l-2 -4l0 -3l2 -10l1 -6l3 -9l-1 -3l-2 -2l-5 -2l0 -1l2 -1l6 -5l4 -6l3 -1l5 -3l0 -2l-1 -3M9059 3896l0 -3l-2 -1l-3 -1l-2 -1l-2 -3l-1 -3l-3 0l-5 -3l-4 -4l-2 -3l1 -1l-1 -2l-1 -1l-4 -7l-3 -3l-1 -3l1 -1l-1 -3l1 -2l2 -1l1 -2l0 -3l1 -6l1 -7l-2 -1l-3 -1l-2 -2l0 -3l0 -2l5 -9l-1 -21l1 -4l2 -2l2 -2l0 -3l-3 -6l-7 -5l-3 -4l-2 -3l0 -2l4 -3l1 -2l1 -2l-2 -4l0 -7l2 -5l1 -7l0 -2l-4 -4l-2 -1l-1 1l-5 2l-1 1l-1 -1l0 -1l1 -2l0 -2l1 -2l2 0l1 -1l-3 -1l-1 -1l0 -1l1 -1l2 0l1 -6l0 -2l1 -4l0 -16l1 -1l0 -2l-2 0l-6 -5l-4 -3l-3 -3l-2 -2l-5 -4l-1 -2l-1 -2l2 -4l2 -5l1 -6l0 -2l-4 -3l12 3l16 3l1 1l0 1l2 0l5 -1l13 -1l-1 6l-3 6l-2 2l-1 17l1 1l1 0l8 6l11 7l8 5l0 2l0 10l0 10l2 5l0 5l2 4l7 7l2 4l0 14l0 11l1 14l0 13l0 15l0 18l0 18l-4 0l2 6l0 5l1 2l-1 3l1 4l2 1l5 8l2 6l-8 2l0 2M10537 4610l-1 -5l-3 -6l-5 -10l-4 -8l-4 -8l-1 -6l-3 -7l-5 -8l-3 -3l-3 -3l-7 -6l-8 -5l-5 -4l-5 -11l-3 -4l-2 -7l-1 -8l0 -3l6 -9l0 -3l0 -3l-3 -8l-2 -5l-1 -4l-3 -7l-4 -10l-1 -4l0 -3l2 -9l2 -8l0 -3l16 1l3 -2l8 -6l10 -11l2 -4l4 -8l5 -3l1 -2l1 -4l1 -4l6 -4l5 -4l-1 -2l-1 -1l1 -1l3 -2l5 -1l2 -4l0 -4l-1 -3l0 -2l-1 -2l-3 0l-6 -2l-4 -1l-3 -1l-1 -1l-1 -3l1 -3l1 0l1 -3l-2 -2l-1 -1l1 -1l5 -10l1 -1l2 0l3 -1l3 -1l2 1l2 -1l1 -1l2 -4l1 -6l-1 -5l-2 -4l-1 -6l1 -7l0 -7l-3 -5l-2 -3l-4 -2l-7 -8l-2 -3l1 -3l1 -1M10695 4250l-5 0l-9 0l-9 0l-9 0l-9 0l-9 0l-9 0l-9 0l-8 0l-9 0l-9 0l-9 0l-9 0l-9 0l-9 0l-9 0l-8 0l-6 0l-1 0l-4 0l-3 3l-4 1l-4 -1l-1 0l-2 0l-2 0l-3 1l-2 2l-2 3l-4 4l-3 3l-2 2l-5 4l-4 1l-1 0l-1 0l-2 -5l-1 -1l-11 2l-1 0l0 -1l-1 -12l0 -7l2 -5l0 -5l0 -4l2 -8l0 -5l2 -16l1 -3l1 -8l1 -2l2 -1l2 -5l3 -8l3 -4l-1 -9l1 -6l0 -1l5 -2l7 -6l3 -6l4 -4l8 -3l23 -22l11 -12l5 -6l0 -2l1 -3l-2 -3l-2 -2l-1 -1l-2 -1l-3 0l-2 -2l-2 -2l-2 -2l-7 0l-5 -3l0 -3l3 -8l3 -8l1 -3l-1 -2l-1 -1l-2 -2l-1 -2l1 -6l2 -6l2 -3l2 -3l0 -3l-3 -1l1 -3l3 -5l6 -4l6 -3l3 0l7 2l6 3l3 0l4 -1l9 -5l2 1l2 4l3 5l5 2l3 2l2 0l1 0l2 -4l2 -3l5 -2l10 -3l7 0l3 -1l5 -1l8 -4l8 5l8 1l8 0l3 -1l1 -2l9 -8l12 -12l8 17l2 0l0 2l-1 1l5 4l7 2l2 2l0 3l-2 9l0 3l2 10l4 2l4 10l6 4l1 1l2 5l2 5l1 1l1 1l2 5l-1 3l2 10l2 8l1 10l0 4l0 3l-1 4l-1 2l-2 2l-2 4l-2 3l-2 2l1 5l0 2l-1 0l-3 1l-4 2l-2 1l-3 3l-3 3l-3 9l-6 6l-1 3l-6 4l-2 5l-2 6l-2 4l-5 6l-1 10l0 19l-1 22l0 8l4 0l4 2l4 2l10 6l11 6l11 6l10 6l11 6l11 6l10 6l11 6l10 6l11 6l11 6l10 6l11 6l11 6l11 5l10 6l5 3l1 2l1 5l0 3l0 3l-3 5l-1 3l0 2l1 1l2 0l3 1l0 1l2 4l2 2l4 3l8 5l8 6l7 6l8 5l8 6l8 5l7 6l8 5l4 3l1 1M11023 4723l-6 5l-9 6l-9 7l-8 5l-6 2l-7 1l-6 3l-6 4l-7 2l-10 0l-9 3l-10 6l-5 4l-9 -5l-7 -2l-8 0l-5 1l-2 1l-1 3l-1 5l-6 5l-9 5l-8 2l-8 -2l-5 -2l-3 -2l-4 -2l-5 1l-5 1l-5 4l-8 2l-11 -1l-5 -1l-1 -4l-5 -3l-8 -4l-7 0l-4 4l-3 2l-4 1l-3 0l-2 -1l-2 0l-12 0l-11 0l0 -2l-1 -4l-3 -3l-1 -2l-3 -1l-1 0l-1 -2l-2 -3l-2 -3l-2 -3l-2 -2l0 -2l0 -2l3 -6l0 -4l0 -4l-1 -5l-3 -5l1 -1l-1 -4l-1 -2l1 -3l-1 -4l-2 -8l0 -2l-2 -5l-8 -9l0 -1l-12 -10l-4 -2l-2 2l0 1l0 3l0 2l-1 1l-3 0l-1 -1l-5 -2l-3 -1l-9 0l-3 1l-2 -1l-4 -4l-6 -1l-5 0l-7 -5l-2 0l-1 0M11118 2345l-1 2l-5 5l-8 7l-5 4l-10 7l-6 2l-12 2l-3 3l-3 4l-2 5l0 4l-1 6l3 7l3 7l0 4l0 4l-3 4l-3 7l-1 7l-1 13l0 11l0 2l-5 7l-6 10l-2 2l-13 2l-13 7l-15 8l-13 6l-15 8l-15 7l-10 5l-14 7l-13 7l-13 7l-10 5l-15 8l-9 5l-13 7l-12 7l-13 7l-17 -2l-5 -1l-5 -4l-3 -2l-8 -2l-5 -6l-3 -3l-6 -1l1 -2l3 -4l3 -4l-2 -3l0 -2l-1 -2l2 -3l-1 -3l-1 -3l-1 -1l0 -3l1 -2l0 -3l3 -1l0 -2l2 -2l3 -1l1 -1l-1 -1l-2 -1l-2 -2l1 -4l1 -1l2 -1l4 -3l2 0l3 0l4 0l3 1l1 -1l0 -1l-4 -2l0 -1l1 -2l3 -3l3 -2l2 0l4 -4l2 -4l-4 -11l-2 -1l-4 -2l-3 0l0 -1l3 -2l3 -3l-3 -2l-4 -1l-2 2l-6 1l-8 0M10564 5320l-4 -3l-6 -2l-8 0l-10 0l-13 1l-13 -1l-15 -6l-12 -2l-14 3l-1 0l-2 -2l-4 -4l-7 -1l-1 -1l-2 -1l-1 -2l0 -2l1 -6l-1 -1l-2 -1l-3 -1l-9 -3l-10 -2l-18 -3l-7 -1l-1 -1l-2 -3l-4 -7l-3 -5l-7 -7l-2 -3l1 -6l0 -5l1 -4l0 -4l0 -4l0 -3l-1 -2l-3 -1l-7 0l-10 0l0 -5l-1 -7l-2 -5l-2 -2l-4 -2l-9 -4l-12 -4l-10 -8l-12 -9l-4 -1l-4 -9l-6 -14l0 -5l-1 -2l-6 -7l-2 -4l-1 -4l-10 -10l-3 -4l-3 -6l-3 -5l-2 -2l-3 -3l-2 -4l-1 -2l1 -4l1 -2l10 2l5 0l4 -1l5 2l6 5l7 1l7 -3l10 0l12 5l10 1l12 -4l11 -12l10 -10l10 -13l6 -10l9 -8l11 -7l12 -5l18 -6l4 -6l1 -6l0 -8l1 -5l2 -3l3 -2l4 -2l11 -6l10 -4l13 -3l13 0l12 0l8 0l0 8l0 9l2 1l10 0l15 1l15 0l9 7l4 1l9 2l13 10l15 1l11 4l9 3l5 5l3 1l5 0l2 1l0 3l-3 5l0 8l5 11l0 9l-1 16l0 16l0 6l1 4l1 2l0 2l-3 7l-2 7l0 2l-1 2l-1 2l-7 3l-1 2l0 4l1 3l2 1l3 2l1 2l0 3l0 4l-3 7l3 9l3 5l4 7l1 4l0 3l0 2l-6 12l-5 7l-5 8l-8 5l-1 2l-1 3l0 5l0 6l-6 10l4 8l-1 1l-3 1l-8 9l-9 9l-7 7l-7 7l-8 9l-7 7l-8 5l1 3l0 1l2 7l4 10l2 10l4 13l0 7l0 3l3 4l4 6l1 3l1 3l4 5l3 7l2 10l3 4l0 3l1 4l0 9l0 10l0 12l0 9l0 5l0 14l-3 7l0 5l1 4l2 1l4 2l0 5l0 5l-1 3l0 3l2 5l1 4l1 16l-2 -1l-3 0l-1 0l-2 7l-1 11l1 6l-11 1l-14 -1l-9 -3l-11 -6l-6 -10l-3 -6l-4 -1l0 -1l-1 -7l0 -8l1 -2l7 -10l5 -6l2 -6l6 -7l7 -4l2 -1l2 0l11 6l12 6l2 -1l1 0M10542 4026l-1 -3l-1 -2l-2 -2l-3 -1l-3 0l-3 1l-1 -2l0 -3l-1 -3l-2 -3l-4 -2l-11 -5l-9 -10l-4 -4l-3 -3l-5 -8l-5 -5l-6 -3l-5 1l-4 6l-8 5l-3 1l-5 -3l-6 -2l-11 -1l-4 2l-6 4l-5 3l-3 0l-2 -1l-4 0l-2 -1l-6 -3l-3 -3l-2 -3l-3 -1l-4 -2l-3 -2l-1 -3l-2 -4l-3 -3l-8 -6l-3 -4l-2 -3l-3 -4l-4 -6l-1 -7l-1 -6l0 -3l-2 -3l-2 -2l-3 -3l-7 -4l-7 -4l-4 -3l-6 -1l-4 -2l-4 -6l-1 -5l-3 -3l-2 -3l-1 -3l3 -9l-4 -3l-5 -4l-5 -5l-2 -4l-8 -5l-16 -8l-9 -6l-5 -4l-4 -5l-1 -2l3 -4l0 -4l-2 -4l-10 -8l-7 -9l-6 -3l-14 -2l-4 -1l-4 -2l-5 -3l-1 -5l2 -7l-1 -3l-3 0l1 -2l3 -3l4 -3l12 -3l0 -2l1 -4l0 -3l4 -6l1 -2l0 -6l1 -2l1 -2l3 -3l1 -2l1 -5l-1 -8l2 -3l7 -7l2 -4l1 -3l0 -3l0 -3l2 -3l2 -1l6 0l3 0l26 -5l3 1l1 3l0 5l1 2l1 1l4 3l3 4l1 1l5 3l19 22l5 2l5 -1l10 -5l6 -1l36 2l4 -1l6 11l2 3l40 0l0 -3l0 -4l5 -4l2 -3l1 0l6 -4l6 -2l12 -2l4 -4l2 -4l0 -7l2 -1l3 -2l13 -6l2 -2l24 15l13 12l1 0l0 1l1 -1l1 0l1 -1l6 0l11 -1l3 -1l22 -21l5 -7l2 -1l3 -5l3 -8l1 -1l23 -20l1 -1l0 -2l-3 -6l-1 -4l0 -5l0 -8l0 -5l0 -1l0 -1l-13 -14l33 -1l0 -1l0 -1l-1 -2l0 -2l0 -1l0 -1l0 -1l0 -1l24 0l0 4l-3 10l0 6l-1 6l0 1l-1 1l0 1l-1 1l0 1l5 37l-1 1l0 1l-1 2l0 1l-1 1l1 0l11 4l1 0l0 1l4 4l22 18l0 1l3 5l0 1l0 2l0 1l-1 3l1 1l0 1l0 2l0 1l-3 6l-1 5l-1 3l1 3l0 1l0 1l1 0l9 0l0 2l0 10l1 9l0 14l0 4l0 5l-1 2l-3 2l-3 3l-9 0l-7 0l-5 0l-6 0l-7 0l-2 2l-4 7l-5 11l-2 4l-1 3l1 2l3 2l7 3l9 2l6 1l4 0l3 1l12 9l4 3l2 4l0 3l2 4l7 7l4 4l10 5l4 6l4 3l3 3l2 5l5 13l3 7l3 6l1 9l3 4l2 5l4 5l5 3l0 1l-9 9l-10 11l-12 11l-13 13l-10 10l-10 10M10207 3767l-5 -2l-6 -1l-12 -1l-5 -1l-2 -3l1 -6l-2 -2l-2 -1l-1 -2l0 -4l7 -7l1 -4l1 -14l1 -5l-1 -5l-5 -10l-4 -8l-7 -10l-3 -4l-15 -15l-1 -2l-4 -6l2 -5l2 -9l0 -3l-1 -4l-4 -3l-3 0l-1 -2l-3 -2l-3 -2l-2 -3l-2 -5l1 -15l-1 -3l-3 0l-1 -1l0 -4l-2 -9l-2 -7l1 -4l-3 -6l-6 -2l-6 0l-6 1l-4 0l-2 -1l-2 -2l-1 -2l1 -4l3 -7l5 -6l8 -5l2 -2l1 -3l1 -4l-1 -4l-1 -3l-2 -4l-3 -6l0 -3l1 -3l3 -3l4 -3l1 -1l3 -1l2 -2l6 -3l2 -2l-1 -2l-1 -2l-3 -2l0 -3l-1 -5l-1 -3l-1 -3l2 -1l2 -3l4 -1l5 -1l2 -2l0 -3l0 -4l2 -2l2 -5l2 -2l3 -3l4 -3l1 -4l1 -4l-2 -11l3 -4l5 -4l7 0l11 -1l7 -1l5 0l12 2l1 -1l1 0l0 -3l0 -7l0 -23l0 -22l0 -22l0 -23l0 -22l0 -22l0 -22l0 -23l0 -6l0 -6l0 -7l0 -6l12 0l13 0l12 0l12 0l1 0l0 -25l0 -25l0 -25l0 -25l19 0l19 0l19 0l19 0l20 0l19 0l19 0l19 0l19 0l19 0l19 0l19 0l19 0l19 0l20 0l19 0l6 0l2 0l5 -9l2 -1l3 0l1 3l-1 3l-1 4l9 0l16 0l17 0l16 0l17 0l16 0l17 0l16 0l16 0l17 0l16 0l17 0l16 0l16 0l17 0l16 0l16 0M10930 3300l-4 3l-5 6l-1 2l-1 1l0 2l-2 2l-3 2l-1 1l0 2l-2 1l-2 0l-2 1l-2 1l-4 -1l-4 1l-1 1l-3 1l-3 1l-1 0l-3 2l-3 3l-4 1l-2 1l-1 2l-3 9l-3 2l-3 0l-5 0l-4 1l-5 -1l-2 0l-1 2l-1 8l0 3l-2 4l-3 5l1 8l1 8l-5 13l0 2l-5 10l-2 4l-6 18l-2 6l-5 5l1 10l2 10l1 10l1 14l-4 14l0 7l-2 11l-3 5l-2 3l-1 3l-3 6l-3 9l-1 9l0 6l-1 2l-1 2l-6 1l-8 1l-4 1l-3 2l-4 4l-7 12l-4 7l-6 10l-7 7l-2 4l-1 6l-3 10l-2 7l0 6l-2 10l1 5l-3 2l-3 3l-2 1l-5 -3l-4 -3l-1 -1l-4 2l-3 3l-5 6l-3 7l2 13l0 3l-1 4l-6 10l-1 3l-2 7l-2 10l0 3M8630 2341l-3 -12l-2 -5l0 -3l3 -7l3 -3l4 -6l6 -5l5 -1l3 -1l2 -4l1 -3l-1 -1l-6 1l-12 -14l0 -2l2 -3l1 -4l0 -4l3 -3l5 -2l4 -4l2 -4l0 -4l-2 -2l-7 -2l-6 -10l-2 -6l-1 -1l-4 -3l-4 -5l-1 -1l4 -1l17 0l4 -1l0 -1l3 -4l3 -7M10606 5542l4 0l8 1l6 0l5 0l10 0l5 0M9822 5631l2 -2l7 -5l3 -1l2 1l2 -1l1 -3l1 -3l1 -4l1 -2l2 -5l3 -3l6 -1l4 2l2 3l1 3l2 2l4 -1l2 3l1 4l0 3l-2 2l0 2l3 3l1 3l1 4l9 2l4 1l7 1l7 2l6 3l11 0l14 -1l12 0l9 3l7 1l4 -2l2 -3l0 -3l2 -2l4 -1l4 -3l3 -4l7 -4l10 -3l5 1l0 -7l0 -23l0 -22l0 -22l0 -22l0 -23l0 -22l0 -22l0 -21l2 1l16 11l5 6l2 4l6 14l5 12l5 9l0 4l1 4l0 2l0 2l-3 5l-3 4l-4 5l0 7l1 8l2 4l3 1l7 -2l4 1l5 2l20 -1l2 0l7 1l3 -1l2 -2l2 -5l3 -1l4 -1l5 -1l4 -3l6 -10l12 -8l4 -2l3 -2l2 -3l4 -11l4 -9l1 -4l3 -7l4 -4l3 -3l2 0l5 -2l5 -1l6 2l7 2l8 5l7 5l4 3l4 1l6 1l5 0l7 5l3 0l8 2l9 2l7 0l6 -3l5 0l6 0l6 -1l5 -1l4 -3l3 -3l4 -8l2 -7l4 -8l4 -10l1 -8l2 -2l6 -2l5 -1l13 -3l3 -2l2 -3l6 -6l7 -5l4 -3l6 -24l1 -3l5 -6l3 -3l2 0l3 -2l4 -3l4 -2l5 -1l3 -2l2 -3l2 -2l4 0l2 -1l0 -3l3 -2l4 -1l2 -2l0 -3l4 -5l10 -9l8 -5l8 -1l8 -2l7 -3l5 -4l4 -6l5 -3l12 -1M10437 5705l8 -3l4 -2l2 -2l4 -2l1 -6l1 -5l3 -2l2 -2l3 -3l2 -6l2 -6l1 -2l-1 -3l-2 -3l-2 -4l-2 0l-4 -2l-6 -4l-5 -4l-5 -5l-2 -1l-5 -4l-2 -2l-1 -2l-2 -1l-2 1l-5 1l-12 4l-8 4l-6 5l-6 1l-5 2l-4 5l-4 5l-3 5l-1 2l-2 1l-2 3l-3 5l-3 3l-5 2l-5 2l-2 1l0 2l2 5l2 4l3 5l2 4l4 4l2 3l0 4l0 2l1 2l1 0l2 1l3 1l0 1l2 2l2 2l4 4l5 3l7 1l6 1l2 0l2 -3l1 -3l1 -3l2 -2l7 -10l4 -4l2 0l3 -1l4 0l3 0l5 -1M11077 4285l0 -4l-1 -2l-5 -7l-8 -11l-7 -9l-7 -8l0 -8l0 -21l0 -42l0 -42l-1 -42l0 -21l0 -9l1 -1l8 -8l10 -10l14 -20l7 -10l6 -9l2 -3l5 -5l10 -3l7 -1l22 -4l3 -1l2 -2l2 -4l4 -6l5 -4l11 -6l10 -4l2 -1l12 -3l3 -1l6 0l1 -1l17 1l14 1l14 1l1 -1l10 -10l15 -17l10 -10l15 -17l11 -12l13 -13l13 -12l15 -14l9 -9l15 -14l14 -14l12 -12l7 -11l8 -11l7 -12l10 -14l9 -14l7 -11l0 -5l0 -12l0 -9l0 -23l0 -14l0 -13l0 -14M11399 3800l-17 0l-17 0l-16 0l-3 -1l-14 -5l-17 -6l-22 -7l-15 -5l-17 -6l-16 -5l-13 -4l-17 -6l-14 -4l-2 -1l-8 -8l-10 -9l-2 0l-5 -2l-4 -5l-5 -6l-4 -9l-2 -5l-6 -2l-2 -5l-5 -6l-4 -3l-1 -3l-2 -5l-3 -7l-3 -3l0 -2l0 -1l5 -8l2 -3l3 -3l2 -3l1 -2l6 -10l6 -8l4 -7M8335 3748l3 -1l3 0l2 1l3 -1l3 -2l1 -2l2 -6l6 -2l4 -4l4 -5l1 -4l2 -2l1 -2l0 -2l2 -1l2 -4l1 -4l4 -2l7 -2l7 3l11 -2l0 -4l11 0l11 0l10 0l4 1l1 3l3 4l4 3l4 6l5 7l5 7l3 3l1 2l0 1l-2 3l-2 4l1 1l1 1l5 1l1 4l0 6l2 5l3 4l0 1l-6 7l-3 6l-1 2l-1 1l2 1l1 0l3 0l2 0l3 -2l5 -6l2 -1l4 1l0 1l-2 7l-2 7l-1 1l-7 2l-3 2l-2 9l-1 7l-3 1l-9 10l-6 4l-4 3l-4 4l-5 4l-6 7l-4 7l-2 3M8173 3408l2 -4l1 -9l2 -5l2 -1l2 -4l3 -8l3 -4l4 0l2 0l2 1l6 1l10 1l7 -1l5 -3l7 -1l8 0l5 -1l0 -2l2 -1l1 1l2 0l1 -2l2 0l2 1l7 1l12 -1l12 4l11 8l5 5l1 3l1 3l4 3l2 0l3 -2l2 1l2 2l3 0l3 -1l3 0l0 1l1 1l1 0l3 2l3 4l2 6l2 8l3 4l3 1l2 1l0 2l1 1l2 1l2 0l4 2l3 6l0 3l0 1l0 1l2 1l2 2l2 2l4 3l6 2l4 3l3 5l5 3l1 1l5 8l-1 3l-1 6l2 4l3 3l3 2l2 4l0 6l0 5l2 2l1 3l0 3l-1 2l-3 2l-1 5l5 6l3 4l0 2l1 2l2 2l2 0l1 -2l1 -2l4 1l2 1l3 4l1 2l1 4l2 4l3 3l0 1l3 3l-2 5l0 3l-1 8l0 3l0 1l3 3l0 4l-4 -1l-6 0l-11 2l-4 -1l-8 0l-6 1l-7 3l-5 -1l-3 -2l-4 0l-4 -1l-5 -2l-4 -1l-4 -3l-2 -1l-2 1l-1 1l-2 1l-2 0l-1 -3l1 -2l0 -2l-1 -1l-3 0l-4 0l-8 -1l-1 0l-16 -1l-17 0l-14 0l-18 0l-13 0l-12 0l-9 5l-10 4l-13 3l-15 -1l-5 1l-5 2l-4 2l-5 1l-7 -1l-3 0M8162 3547l3 -3l3 -2l10 0l11 0l9 0l10 0l1 -8l3 -1l5 -1l9 -1l10 -1l2 -1l1 -3l1 -3l2 -1l3 1l4 1l4 2l4 2l3 1l6 3l12 5l10 1l11 -3l9 -2l1 -3l-2 -4l-6 -3l-8 0l-3 1l-4 1l-2 1l-4 -1l-5 -3l-4 -3l-4 -1l-5 -1l-9 -6l-4 -1l-4 -1l-8 2l-8 3l-5 7l-7 0l-17 -1l-15 0l-13 1M10748 2732l10 2l9 1l13 2l13 2l8 2l2 -1l11 -8l10 -7l6 -8l5 -9l3 -1l8 -2l14 -2l14 -3l0 -1l4 -6l4 -9l1 -1l10 -5l6 -3l-8 -8l-8 -8l-9 -9l-7 -7l-12 -11l-7 -7l13 -3l14 -3l14 -4l17 -4l13 -3l20 -5l9 -3l2 0l7 -6l11 1l17 3l16 2l17 3l6 2l16 9l11 5l13 7l15 7l11 6l14 7l10 8l14 10l15 11l12 9l17 12l17 12l16 11l13 9l16 12l2 0l16 2l23 1l22 2l21 2l9 -2l9 1l13 2l8 1l15 1l4 8l2 5l1 6l4 4l11 0l8 0l11 0l9 0M11540 2961l3 5l3 4l2 1l3 1l4 0l4 -1l4 -1M11759 3065l4 5l3 5l4 7l5 6l4 7l3 5l-2 5l-1 6l-2 5l-2 6l-2 5l-2 6l-2 5l-1 6l-2 5l-2 6l-2 5l-2 6l-2 5l-1 6l-2 5l-2 6l-2 6l-2 6l-6 2l-8 3l-9 3l-8 3l-9 2l-9 3l-8 3l-9 3l-8 3l-9 3l-9 3l-8 3l-9 2l-8 3l-9 3l-8 3l-9 3l-7 2M10528 4320l-1 0l-3 -1l-4 -3l-6 1l-2 0l-3 2l-2 2l-1 0l-1 0l-6 -4l-3 0l0 10l-1 6l-2 3l-4 2l-4 2l-2 0l-10 0l-4 0l-2 0l-2 -6l-5 -3l-5 -1l-2 0l-2 3l0 3l-5 -2l-1 -2l0 -4l-2 -6l1 -2l2 -1l3 -3l6 -4l2 -2l0 -3l0 -8l-1 -6l1 -2l3 -5l3 -5l5 -5l2 -1l3 -2l4 -3l2 -1M9135 3881l0 -2l2 -9l1 -3l1 -3l-1 -3l-1 -4l-1 -6l1 -2l1 -2l0 -4l0 -13l0 -1l1 -1l0 -2l-1 -3l-2 -4l0 -5l-1 -5l-1 -3l1 -9l1 -11l-1 -5l1 -3l1 -9l0 -8l2 -13l6 -1l7 -1l4 -5l1 -7l0 -7l1 -2l3 -3l5 -5l0 -6l2 -2l2 -1l4 -1l4 -2l2 -5l2 -8l-3 -5l0 -2l1 -3l2 -2l2 -1l4 0l1 0l0 -1l3 -8l-1 -3l-3 -5l-1 -5l0 -6l-1 -5l-1 -2l-2 -2l-1 -1l-8 -11l1 -5l3 -7l2 -3l3 -2l0 -1l-1 -2l-1 -1l0 -3l0 -2l1 -3l0 -4l0 -7l0 -10l0 -6l7 -5l8 -8l5 -8l2 -6l3 -20l3 -1l2 -1l9 -7l7 -3l5 -2l8 -1l5 1l9 0l7 -1l6 -4l3 -1l4 -1l17 6l17 5l3 -1l3 1l4 3l7 6l3 4l2 2l9 13l4 3l3 2l3 0l3 0l2 -1l4 -3l5 -2l4 1l21 -12l3 0l6 1l7 1l18 12l14 8l11 2l12 2l21 0l16 -16l5 -3l7 -4l2 0l13 -2l24 -3l23 1l4 1l10 2l14 5l7 5l10 1l7 -1l3 -5l7 -6l5 -3l6 -3l8 -5l8 -2l6 -5l5 -1l9 0l8 11l9 11l6 9l5 23l1 5l0 2l0 2l1 3l4 1l7 1l5 2l3 4l0 1l2 2l0 3l0 6l-1 8l-2 5l1 6l0 3l-1 2l-3 3l-5 2l-10 7l-3 1l-4 0l-4 1l-4 4l-10 13l-8 14l-3 11l-3 10l-7 7l-2 4l0 2l0 5l-1 9l-1 4l-1 1l-8 3l-5 3l-2 6l-1 6l-2 8l-1 7l-1 3l-2 4l-4 4l-4 2l-9 1l-4 9l-4 7l0 3l-4 14l-7 11l0 3l0 3l-8 10l-3 3l-2 3l2 4l3 3l0 1l-4 3l-6 5l-4 4l-1 1l0 8l-2 2l-2 3l-4 3l-4 3l-4 2l-4 0l-3 -1l-1 -2l-2 -10l-2 -2l-2 -2l-6 -5l-5 -5l-7 -4l-1 0l-1 1l-2 5l-2 2l-3 1l-6 0l-5 -1l-1 -1l-1 -2l-1 -2l-5 4l-8 6l-3 1l-2 1l-3 6l-3 5l-4 3l-4 3l-3 2l-3 3l-7 7l-9 9l-3 4l-3 7l-2 7l-2 9l-3 13l-4 8l-4 6l-3 4l-1 4M9180 3615l-3 -4l-4 -4l-5 -1l-3 -2l-2 -4l-6 -6l-13 -12l-2 -1l-2 0l-4 1l-2 2l-2 1l-2 0l-7 2l-5 2l0 2l3 9l-2 5l-2 -2l-7 -10l-6 -7l0 -1l-1 -3l0 -1l2 -1l5 -1l1 0l0 -2l0 -4l-3 -5l-3 -3l-1 -1l-3 0l-3 1l-6 4l-2 0l-6 0l-6 -1l-3 -2l-10 -8l-10 -8l-5 -1l-1 -1l0 -6l0 -8l0 -2l5 1l5 1l1 -2l-4 -3l-5 -2l-2 -5l-2 -1l-2 -2l-3 0l-3 -2l-2 -1l-3 0l-3 -1l-5 -7l-4 -7l-3 -5l-1 -3l1 -5l-1 -2l-5 -6l-5 -5l1 -8l1 -6l0 -4l1 -3l0 -2l3 -1l8 0l14 1l11 -1l1 0l8 -7l9 -8l13 0l15 -1l11 0l17 -1l14 0l15 -1l1 -3l0 -1l2 0l11 1l11 2l1 -6l9 -8l6 -2l1 -1l2 -3l1 -4l0 -3l2 -2l2 -5l2 -8l5 -8l3 -11l1 -11l0 -8l2 -2l0 -14l0 -15l0 -13l0 -15l-1 -14l0 -14l0 -13l0 -9l11 -2l12 -2l16 -4l18 -3l19 -4l5 -2l14 -13l7 -5l13 -12l11 -8l12 -11l14 -12l11 -9l17 -10l26 -15l26 -15l26 -16l26 -15l26 -15l26 -15l25 -16l26 -15l27 6l24 5l25 6l6 3l13 11l17 14l1 0l17 -8l21 -11l5 29l5 25l0 16l0 4l2 3l4 2l15 23l-3 4l2 7l4 3l13 14l2 3l-1 2l-9 16l-1 4l-2 20l-1 15l-2 19l-2 24l-2 20l-2 27l-2 25l-13 13l-24 25l-19 20l-9 13l-19 26l-8 17l-6 8l-4 4l3 12l5 22M10263 5090l-2 -1l-15 2l-6 2l-14 10l-2 -2l-3 -2l-3 0l-6 2l-6 3l-6 4l-5 3l-2 2l-8 8l-3 1l-2 1l-1 0l-1 -4l-5 -7l-8 -11l-2 -1l-2 0l-6 1l-17 2l-15 3l-22 4l-24 3l-15 2l-13 1l0 10l0 20l0 21l0 20l0 21l0 20l0 20l0 21l0 20l0 9l0 2l-8 0l-17 0l-14 0l-11 0l0 12l0 14l0 15l0 14l0 14l0 15l0 14l0 14l0 15l0 11l0 1M9587 5063l8 -2l6 -3l5 0l5 3l5 0l2 -1l9 1l6 -3l6 -3l4 -2l5 -2l7 -3l4 1l5 0l6 1l4 2l4 5l7 5l5 2l5 4l2 1l2 1l2 0l10 0l10 -1l10 0l19 0l19 0l19 0l19 1l19 0l20 0l19 0l19 0l8 0l13 0l15 0l1 0l2 1l1 1l5 6l7 7l5 3l7 2l6 1l5 -1l10 1l13 2l14 1l14 -1l10 1l5 4l6 2l6 1l8 -1l11 -2l8 0l4 2l3 0l15 -3l12 -2l18 -3l15 -3l22 -4l16 -3M10660 4901l2 1l7 13l6 7l7 6l1 0l2 -2l3 0l10 -2l5 0l2 -2l5 -1l7 -1l2 1l6 9l1 7l2 9l0 5l0 6l-1 8l-5 9l-1 4l-3 7l-4 4l-2 2l0 3l2 3l5 4l1 3l0 3l0 3l1 2l1 2l4 2l5 6l7 6l9 10l4 3l3 1l2 3l-1 4l-3 2l1 3l2 2l1 0l4 1l4 -1l0 -1l0 -15l-3 -8l-2 -3l-1 -1l1 -3l3 -6l3 -7l1 -2l2 -2l12 -2l6 -1l2 -2l1 -5l2 -14l0 -13l-1 -8l2 -11l3 -7l-2 -2l-1 -9l-8 -11l-10 -13l-5 -7l-7 -8l-11 -13l-6 -4l-2 -2l-10 -2l-2 -2l-3 -4l-1 -7l0 -6l-1 -9l-2 -13l-1 -3l-2 -10l-3 -9l0 -3l1 -2l4 -7l3 -5l2 -2l2 -8l1 -3l2 -2l8 0l7 0M10732 4801l-1 -2l-1 0l-2 0l-1 2l2 2l2 0l1 -2M10736 4806l1 -2l1 -1l0 -1l-1 -1l-1 -1l-2 0l-1 2l0 3l1 1l2 0M8889 2445l1 4l3 2l11 7l6 4l0 2l-2 3l0 3l1 2l4 3l0 2l-1 1l-2 4l5 9l0 10l-1 6l0 4l1 3l3 8l-2 12l3 7l4 5l1 10l4 5l4 4l3 1l6 4l3 2l3 5l-5 3l-4 3l-1 3l2 6l0 3l-3 1l-10 -1l-8 0l-9 0l-13 -1l-8 0l-10 -1l-4 1l-10 1l-7 1l-1 1l-3 1l-1 4l-1 4l-2 2l-21 7l-8 1l-5 -1l-3 1l-3 1l-1 2l-1 3l1 2l2 4l1 4l-2 3l0 2l-1 3l1 2l2 0l2 1l3 1l3 3l0 3l-2 2l-2 1l-8 1l-6 0l-8 6l-9 5l-11 4l-4 1l-8 2l-9 5l-5 7l-6 8l-6 5l-7 5l-8 2l-9 3l-11 1l-8 1l-3 0l-7 1l-3 -1l-3 0l-1 1l0 1l-1 3l0 3l-2 3l-2 1l-2 1l-6 -1l-5 -1l-12 -1l-2 0l-1 0l-4 2l-5 4l-4 4l-3 1l-7 1l-3 2l-13 8l-3 2l-13 8l-4 3l-3 2l-8 6l-5 2l-1 2l0 3l0 8l0 7l0 10l0 11l0 12l-7 0l0 2l2 4l0 4l0 2l-1 3l0 3l1 2l1 3l0 2l-2 2l-5 1l-5 0l-4 0l-6 0l-4 0l-4 0l-3 1l-3 1l-5 3l-5 4l-3 3l-4 1l-4 0l-4 -2l-3 -2l-1 1l-3 1l-3 1l-4 0l-5 -2l-6 -3l-3 -2l-6 0l-5 -1l-4 0l-4 0l-6 2l-6 2l-5 1l-7 2l2 4l2 3l0 3l-1 2l-3 3l-4 3l-2 3l-2 3l-1 2l-3 3l-2 4l-1 3l-1 3l-2 1l-6 0l-4 1l-3 1l-2 2l-1 4l0 2l-1 2l-2 5l-1 5l-2 6l-2 5l-2 8l-2 7l-2 8l-2 4l-2 2l-3 4l-3 1l-4 3l-3 2l-6 3l-5 3l-1 1l-3 2l-3 3l-3 5l-2 4l-4 6l-2 4l-2 2l-4 2l-4 1l-5 2l-4 2l-6 2l-3 2l-3 3l-2 4l-2 5l-2 5l-1 4l-3 12l-1 7l-1 4l-2 6l0 8l0 7l-2 4l0 3l-3 4l-2 2l-3 4l-3 2l-1 2l-3 2l-3 4l-3 3l1 2l0 3l-1 4l-2 4l-4 5l-4 2l-7 1l-9 0l-7 -1l-8 0l-8 0l-7 -2l-8 0l-6 0l-8 1l-19 0l-8 1l-11 2l-2 0M8566 2817l0 8l0 11l0 8l0 10l0 10l0 11l0 11l0 8l0 6l-10 0l-10 0l-9 0l-9 0l-10 0l-9 0l-9 0l-9 0l-10 0l-9 0l-9 0l-10 0l-9 0l-9 0l-10 0l-9 0l-9 0l-8 0l0 6l0 7l0 7l0 7l0 6l0 7l0 7l0 7l0 7l0 6l0 7l0 7l0 7l0 7l0 7l0 6l0 7l0 6l0 6l-3 1l-7 3l-8 3l-9 1l-3 1l-6 4l-8 6l-7 4l-4 6l-2 3l0 3l0 4l3 6l0 3l1 6l0 6l1 7l0 6l0 7l1 7l0 7l1 6l0 6l-7 0l-12 0l-11 0l-12 0l-11 0l-12 0l-11 0l-12 0l-11 0l-11 0l-12 0l-12 0l-11 0l-11 0l-12 1l-11 0l-12 0l-6 0l-2 9l-2 7l-1 5l1 5M8566 2836l9 5l10 6l9 5l9 6l10 5l9 6l10 5l9 6l10 5l9 6l9 5l10 6l9 6l10 5l9 6l9 5l8 5l12 7l12 7l11 7l-18 0l-23 0l-16 0l-16 0l-16 0l2 12l1 12l1 13l2 12l1 12l2 13l1 12l2 13l1 12l1 13l2 12l1 12l2 13l1 12l2 13l1 12l1 13l2 12l1 12l2 13l1 12l1 13l2 12l1 13l2 12l1 13l2 12l1 12l2 13l1 12l1 13l2 12l1 12l2 13l6 6l7 8l-2 11l-3 14l-3 14l-10 0l-10 0l-11 0l-10 0l-10 0l-10 0l-10 0l-11 0l-10 0l-10 0l-10 0l-10 0l-11 0l-10 0l-10 0l-10 0l-10 0l-10 0l-6 0l-2 -1l-1 -8l-1 1l-2 2l-1 2l0 3l0 3l-7 1l-9 2l-9 1l-9 0l-4 -1l-3 -1l-8 -1l-4 0l-4 0l-6 1l-2 1l-4 6l-4 6l-2 0l-3 -3l-8 -7l-10 -9l-5 -4l-2 -1l-5 3l-4 3l-4 5l-2 4l-1 5l-1 6l-2 6l-3 6l-4 4l-3 2l-1 1l-9 -3M8759 2950l15 10l14 9l16 11l17 10l16 11l17 11l16 10l16 11l17 11l16 10l16 11l17 11l16 11l16 10l17 11l16 11l17 10l16 11l7 5l1 2l1 4l-1 4l0 4l2 3l5 2l16 8l1 2l0 3l2 4l4 2l4 2l4 1l15 2l3 2l6 7l4 1l9 2l7 2l3 0l7 2l7 3l3 4l0 3l0 8l1 4l2 3l0 2l-2 2l-1 1l-1 3l-2 2l-2 3l1 3l3 1l4 3l3 2l2 0l2 0l2 -1l12 -2l12 -2l15 -3M9011 3454l-11 -3l-12 -4l-8 2l-2 0l-1 -2l-4 -1l-6 1l-5 1l-7 5l-6 5l-1 1l-8 3l-15 7l-8 5l-2 1l-3 1l-6 0l-5 1l-4 13l-3 2l-17 -6l-3 1l-3 2l-10 7l-5 6l-2 9l0 2l0 3l-2 2l-2 0l-2 0l-8 -2l-2 1l-2 4l1 9l-2 6l-5 2l-3 2l-3 1l-3 -1l-14 -9l-4 -1l-6 1l-5 4l-2 2l-3 3l-3 4l0 3l3 4l2 5l0 4l-13 6l1 2l2 3l0 4l0 8l-3 3l-3 3l-2 3l-2 2l-4 2l-5 2l-8 2l-7 2l-3 1l-3 2l-3 4l-1 3l0 4l2 3l1 2l1 3l-2 7l-2 9l-2 3l-4 3l-4 2l1 5l1 8l-1 7l0 4l-1 4l-1 3l-2 -1l-7 0l-7 3l-3 1l0 3l-2 1l-2 2l-3 2l-4 0l-4 -2l-2 -1l0 -1l1 -2l1 -2l0 -2l-1 -4l-1 -4l1 -2l-2 -6l-5 1l-2 1l-1 0l-1 2l2 3l-1 1l-3 0l-4 -1l-5 -4l-1 1l0 3l-1 3l2 6l-2 3l-3 -1l-4 0l-3 1l-2 0l-2 2l-1 2l2 3l0 1l-1 1l-2 1l-1 0l-3 -3l-4 -1l-9 -2l-1 -4l-2 0l-2 -2l-2 -3l-2 0l-1 1l-5 0l-4 4l-4 5l-3 3l-4 1l-2 0l1 -3l0 -3l-1 -2l-12 -6l-1 -2l-2 -7l-1 -6l0 -4l1 -4l-1 -2l-1 -3l-3 -1l-4 -1l-4 2l-2 1l-2 -1l-1 0l0 -2l5 -7l2 -3l3 -2l2 -1l1 -2l0 -1l0 -1l-3 -2l-5 -3l-3 0l-2 -2l-3 -5l-1 -1l-2 0l-2 -2l0 -6l0 -6l-5 -9l-2 -6l-2 -6l-2 -3l-4 -2l-5 -2l-4 0l-3 0l-2 1l0 1l3 4l0 2l0 2l-1 1l-2 0l-4 2l-5 2l-4 2l-3 5l-2 1l-3 -1l-9 -4l-8 -3l-6 -2l-3 1l-2 1l-4 2l-6 8l-2 2l-1 1l-2 1l-1 0l-2 -1l-3 -6l-4 -6l-3 -2l-3 0l-3 1l-3 4l-4 4l-3 1l-2 -1l-6 -4l-4 -3l0 -2l1 -2l2 -4l1 -3l2 -1M10258 2617l-2 2l-3 3l-2 2l-5 5l-3 4l0 7l1 7l2 7l3 7l-1 5l-2 6l-2 5l-8 10l-1 3l1 3l4 13l0 4l3 12l3 9l3 8l0 2l0 11l0 11l0 12l0 11l0 11l0 11l0 11l0 12l0 11l0 11l0 11l0 12l0 11l0 11l0 11l0 12l0 11l0 11l0 11l0 11l0 12l0 11l0 11l0 11l0 12l0 11l0 11l0 11l0 12l0 11l0 11l0 11M10199 3225l-24 -12l-24 -11l-24 -12l-24 -12l-24 -12l-24 -12l-24 -12l-24 -11l-24 -12l-24 -12l-23 -12l-24 -12l-24 -12l-24 -11l-24 -12l-24 -12l-17 -8l-18 8l-14 6l-18 8M9598 3024l-4 -9l-6 -10l-7 -12l-4 -8l-2 -1l-20 -6l-21 -6l-12 4l-2 0l-4 -3l-3 -3l-2 -4l-5 -6l-5 -13l0 -10l-1 -4l-11 -14l-10 -13l-7 -9l-1 -4l1 -5l3 -5l9 -5l9 -6l1 -4l1 -10l-3 -4l-2 -6l-2 -9l-1 -6l4 -11l5 -11l-3 -13l-2 -26l1 -20l-1 -8l-1 -3l-3 -9l-3 -10l-2 -4l-5 -8l-7 -10l-4 -6l5 -3l5 -2M8486 3776l2 0l5 -2l2 1l1 2l1 1l13 -4l1 -1l1 0l1 4l1 0l1 -1l1 0l1 0l1 2l1 2l3 1l2 2l0 4l1 4l1 1l1 3l0 2l0 2l1 3l0 3l0 2l2 3l2 5l0 3l-1 3l-2 3l-2 4l0 1l1 1l2 0l2 0l5 1l2 2l2 3l2 1l1 2l3 0l4 -2l1 -1l1 1l2 0l2 -3l2 -4l3 -3l1 -2l0 -2l1 -3l1 -3l2 -1l3 0l1 0l1 3l2 2l2 1l1 1l1 1l2 5l5 17l0 5l-1 3l0 3l-1 3l-3 5l-10 10l1 1l2 1l2 0l2 0l3 2l3 3l3 2l4 1l3 1l4 -1l4 1l5 2l1 5l1 3l2 2l0 3l3 3l5 1l6 3l2 0l1 -1l0 1l2 9l1 5l-1 2l0 2l0 8l-3 4l-1 5l-1 2l-2 1l0 4l-1 4l-1 5l1 12l0 10l2 1M10793 2528l-1 1l-3 2l-2 2l-6 3l-1 2l-1 -2l-2 1l-2 7l-4 2l-6 0l-4 -1l-6 1M11327 2745l8 -8l3 -4l7 -10l4 -7l3 -7l3 -6l1 -1l1 -2l4 -2l6 -2l9 -1l6 0l2 0l4 1l11 5M10763 3925l0 2l0 2l1 2l2 1l3 -1l2 -2l2 0l14 4l2 3l0 4l1 2l-1 3l-1 8l0 7l4 5l4 4l3 6l2 2l3 0l10 1l14 0l13 0l1 1l3 0l13 8l11 7l10 7l9 6l9 6l7 5l7 1l12 1l7 0l8 2l10 2l8 1l5 1l14 1l2 0l6 -6l6 -9l3 -5l9 -4l15 -7l10 -5l12 -5l6 5l7 6l3 3l3 2l4 1l5 0l3 0l5 -1l13 -1l7 0M10939 2531l3 11l4 11l3 11l4 11l-4 1l3 9l5 -2l5 -1l3 6l-8 6M10749 2722l2 -11l2 -6l0 -4l4 -8l0 -3l0 -9l0 -2l2 -5l3 -8l3 -6l1 -3l3 -6l3 -8l-2 -4l0 -1l1 -4l2 -8l0 -4l2 -6l3 -4l-1 -11l0 -6l2 -7l-1 -8l1 -11l0 -1l1 -1l0 -1l7 -2l2 -1M10778 2580l-4 0l-4 -3l-1 -2l-1 0l-3 -1l-5 -1l-7 4l-2 6l-1 3l-2 6l1 4l0 4l1 4l-1 3l-1 1l0 1l1 0l4 -1l3 1l4 2l0 1l-2 1l-6 3l-4 4l-2 3l-2 7l0 2l1 0l10 0l9 -3l6 -3l3 0M10745 2726l-2 -4l-3 -13l-3 -8l-4 -11l-7 -12l0 -3l-1 -5l-5 -11l-4 -9l-4 -10l5 -5l0 -3l9 -8l0 -1l-2 -2M10712 2640l-1 -5l-1 -1M11238 2343l2 4l4 13l2 2l3 1l2 2l1 2l0 3l0 4l1 2l1 2l2 2l2 0l2 0l2 2l6 15l0 2l2 1l4 0l4 1l4 3l4 4l3 1l8 -1l11 1l6 2l-1 2l-4 1l-7 2l-2 4l-1 4l0 2l2 3l5 5l0 2l1 2l1 2l-1 4l-5 2l-6 3l-12 11l-1 3l0 6l-1 2l-4 0l-3 0l0 2l-2 3l-1 3l4 7l1 3l-1 3l-4 6l-2 3l0 1l4 2l10 12l3 4l4 -1l2 0l1 1l1 1l0 2l-1 2l5 1l2 3l6 10l0 2l-3 5l0 3l1 2l1 1l9 1l4 1l9 4l11 8l9 6l8 5l8 -1l3 1l2 2l2 4l5 9l4 4l6 7l5 7l-3 10l-4 10l0 13l0 7l8 0l9 0l0 9l0 8l0 10l2 0l4 2l2 3l2 2l3 0l3 2l2 3l1 2l-1 1l1 3l2 3l2 2l3 2M11241 2217l1 2l8 10l4 3l2 2l1 3l2 2l4 1l4 3l3 2l4 5l5 1l17 4l10 1l2 1l8 -3l8 1l4 0l11 -9l4 -3l6 -2l4 -4l6 -4l8 -4l7 -4l5 -2l10 -5l6 -2l5 0l8 6l6 6l2 2l-3 2l-6 2l-1 2l-1 2l0 2l1 1l8 4l1 2l0 2l-1 1l-2 1l-5 1l-4 1l-2 1l-1 2l0 1l1 2l9 5l1 2l2 2l2 1l4 1l2 1l9 8l2 1l10 -2l1 0M8314 3566l-1 4l3 6l0 4l-1 4l-1 2l-2 1l-5 0l-1 1l-3 1l0 2l2 2l2 2l2 2l4 2l0 3l1 6l-1 5l-11 4l-8 0l-7 0l-3 1l-7 4l-7 2l-4 1l-2 1l-3 4l-8 16l-3 4l-2 3M8600 3692l-1 2l-3 3l-3 2l-1 2l1 5l0 10l0 9l3 3l3 2l3 0l3 -1l0 6l-1 6l4 1l2 2l1 2l-6 3l-2 2l-1 5l0 5l9 3l3 4l1 4l1 8l-1 1l-2 0l-2 -2l-2 -2l-2 0l-5 -1l-4 -1l-6 0l-2 1l-2 1l0 3l-1 7l2 2l4 2l2 1l3 -1l1 2l1 3l-2 3l-2 2l-2 6l0 2l0 3l-4 8l-2 2l-6 -2l-3 0l-3 2M10000 2215l1 0l2 0l3 2l4 0l2 -1l2 -1l0 -2l1 -2l0 -1l3 0l1 0l0 -2l-2 -3l-2 -3l0 -1l2 -1M8844 3946l2 -2M8849 3943l4 1l2 -1l4 -1l1 -1l1 -4l0 -3l1 -2l0 -4l-2 -8l-1 -1l-7 -1l-1 -2l-1 -2l-1 -4l-2 -6l-2 -8l-5 -13l-1 -5l-1 -5l0 -5l1 -3l0 -2l-1 -3l4 -7l6 -8l1 -3l2 -2l0 -3l1 -10l3 -11l2 -5l1 -2l2 -4l1 -2l6 -4l2 -1l1 -2l-1 -2l0 -1l2 -1l2 -1l2 -1l-3 -15l-2 -14l0 -1l-1 -2l-1 -6l-3 -3l-2 -1l0 -3l3 -6l0 -3l-1 -1l0 -3l1 -4l-1 -2l0 -3l-3 -6l-1 -4l2 -3l-1 -5l-1 -9l0 -6l1 -2l-1 -2l-2 -2l0 -2l2 -2l-1 -2l-2 -1l-2 -2l-2 -5l1 -6l3 -13l0 -1l4 0l0 1l13 0l13 -1l17 0l15 0l1 0l2 -1l15 1l10 -1l4 1l3 1l6 -1l4 1l3 3l1 0l1 -2l3 -1l2 -1l2 -3l1 -2l2 1l3 0l1 -2l1 -2l11 2M9480 4148l2 0l2 -2l1 0l3 0l2 3l0 1l3 1l2 1l2 0l2 -2l2 0l8 0l7 0l13 0l14 0l13 0l11 0l0 -6l0 -9l0 -11l0 -11l0 -10l-1 -11l1 -4l1 -1l-1 -2l11 0l19 1l8 0l3 0l10 -1l8 1l4 1l3 0l10 1l14 -1l4 0l3 2l1 3l-1 3l-3 9l-2 7l-1 7l1 5l2 4l1 5l-1 3l-2 1l2 2l3 0l5 -1l7 -3l10 -3l7 -2l10 1l6 1l3 3l3 10l2 1l2 5l3 5l0 3l0 1l-2 3l-3 4l-1 3l-2 2l-2 1l-8 1l-1 1l-2 5l-4 3l-1 4l-2 4l1 6l-1 9l-1 5l2 2l9 2l1 1l2 3l3 3l8 2l3 3l3 3l0 2l-2 9l-2 9l1 6l1 7l1 9l-1 5l-2 4l0 2l1 4l-2 8l-1 2l-4 2l-1 2l-1 4l-2 5l-2 2l0 2l2 2l0 3l-4 3l-2 2l-4 2l-6 -2l-1 -2l1 -2l0 -2l-2 -3l-3 -6l-2 -1l-2 2l-4 5l-8 6l-5 0l-10 -2l-8 -2l-4 -7l-3 -6l-3 -6l-4 -4l-5 -2l-1 0l-7 4l-1 1l0 4l0 2l1 2l1 2l0 2l-1 4l-1 5l-19 4l-3 -2l-2 -2l-3 1l-9 2l-3 -2l-3 -1l-1 1l0 2l1 10l0 4l-2 5l-1 3l5 1l2 1l2 3l2 2l0 2l-3 2l-1 3l2 3l3 2l5 3l3 2l-1 2l-2 3l-1 3l-1 3l0 2l2 2l0 2l-2 2l-3 0l-2 0l-3 -1l-7 -8l-2 0l-11 6l-2 3l-2 3l-4 8M10826 3487l1 0l7 -2l7 -1l6 2l4 0l2 0l2 -3l2 -3l2 -2l4 -1l5 4l7 11l2 1l2 0l3 -9l3 -7l6 -12l3 -8l3 2l3 4l3 2l4 1l2 0l2 2l8 8l3 3l3 0l16 -3l9 -5l1 -2l3 0l3 2l1 2l2 3l4 0l8 -2l5 -1l3 1l5 1l3 0l7 3l8 -1l4 0l4 1l7 5l8 6l12 4l3 1l6 7l9 12l12 12l13 9l7 7l5 8l5 7l4 3l5 2l4 6l4 4l4 6l-5 7l-7 9l-7 11l-3 3l-6 7l-1 2l-2 5l0 8l1 12l1 10l4 1l4 1l5 -1l5 -2l7 0l8 -2l5 -2l5 0l4 2l2 2l3 0l4 0M11156 3565l-6 2l-6 2l-1 0l-2 3l-3 7l-3 2l-2 0l-9 -7l-2 0l-1 1l-2 2M9490 4085l1 0l0 1l1 2l1 1l6 3l16 0l10 0l15 0l15 0l11 0M10700 2447l-2 0l-3 -1l-2 -1l-1 2l-2 1l-2 0l-2 0l-2 1l-3 0l-5 -1l-2 2l-1 0l0 -5l-2 -2l-2 -1l-3 0l-4 0l-2 -1l-6 2l-5 1l-3 2l-2 0l-5 -2l-3 -1l0 -2M8724 3679l3 3l4 2l6 0l4 1l4 3l3 6l2 4l2 5l4 4l3 1l5 4l5 2l5 0l2 2l4 2l3 0l4 -5l4 -2l11 -4l4 -2l5 -1l10 0l10 1l5 1l3 -1l3 3l3 4l3 2l3 2l2 3l2 4l1 2l3 4l3 0l2 -2l1 -1M10198 4744l-2 1l-1 2l0 2l-3 2l-7 -1l-7 -1l-5 -1l-3 1l-12 5l-4 0l-13 0l-8 -1l-5 0l-4 1l-4 4l-4 2l-2 0l-1 -2l-2 -2l0 -5l-2 -6l1 -3l4 -3l1 -4l-1 -7l0 -5l1 -3l-1 -7l-4 -11l-6 -9l-7 -7l-4 -6l-2 -7l0 -15l3 -13l1 -10l0 -18l-5 -11l-1 -13l3 -13l0 -9l-2 -5l-1 0l-2 -1l-11 0l-16 -1l-14 0l-16 0l-2 -2l-1 -3l0 -3l3 -9l0 -1l-6 0l-14 1l-10 2l-6 0l-11 3l-7 5l-2 7l0 6l0 4l-3 4l-3 5l0 2l-1 13l-10 2l-10 0l-2 0l-12 -3l-5 0l-4 1l-7 2l-7 1l-8 4l-2 0l-4 -2l-7 1l-7 1l-3 0l-2 -1l-6 -10l-9 -13l-4 -8l-2 -2l-3 -3l-4 -5l-1 -5l0 -5l-2 -6l-5 -8l-4 -8l-2 -7l0 -7l1 -5l-1 -4l-3 -2l-2 -3l-1 -2l-2 -3l-5 -3l-6 -2l-13 0l-17 0l-15 0l-17 1l-16 0l-5 0l-13 1l-11 -1l-3 -1l-7 0l-11 0l-6 0l-13 0l-2 0l-2 1l-6 -1l-6 0M9611 4488l2 -1l6 -1l5 0l1 -1l1 -14l0 -14l-2 -1l-1 -1l0 -1l2 -2l4 -2l1 -1l4 -4l7 -8l6 -2l6 -2l1 -1l0 -2l3 0l1 1l1 2l2 2l4 3l4 3l2 1l3 -2l4 -2l5 -2l1 -2l1 -3l0 -4l1 -4l1 -1l2 0l4 1l1 1l3 0l2 -1l3 -2l5 -1l4 -2l5 -3l2 0l2 3l2 3l0 1l-2 3l-2 4l2 5l1 5l-1 3l2 1l1 0l2 0l3 0l4 1l3 0l4 -2l7 -7l9 -12l8 -8l7 -3l4 -3l2 -5l4 -2l8 -3l6 -2l5 -9l8 -15l3 -13l1 -8l-1 -29l0 -9l1 -5l3 -4l8 -7l5 -6l4 -7l8 -16l3 -5l2 -3l5 -4l6 -4l9 -3l13 -11l11 -12l-2 -13l3 -11l5 -15l2 -15l-2 -16l1 -13l6 -15l2 -6l1 -9l0 -15l7 -20l6 -12l8 -13l2 -8l4 -11l0 -9l-1 -10l2 -14l-1 -8l-3 -7l2 -4l5 -2l6 -7l12 -19l13 -9l9 -2l9 0l6 2l3 2l7 5l11 5l9 8l4 7l4 4l4 1l8 0l8 1l8 4l6 2l1 -1l5 0l9 4l7 -2l11 1l26 6l1 -1l1 0l2 -2l6 -12l5 -8l2 -2l5 -4l7 -1l6 0l5 2l5 2l5 0l5 -2l8 -4l8 -2l8 -2l11 -5l5 -2l6 -1l16 4l11 -2l4 1l9 -3l2 -2l6 -10l6 -3l10 2l5 1l18 4l23 5l6 0l3 1l2 -1l8 -5l3 -1l2 0l14 5M10451 4336l0 2l0 2l2 3l5 5l3 5l0 4l0 7l-1 4l1 6l0 10l0 8l0 4l6 9l2 10l1 7M9665 4092l12 0l12 0l13 0l12 0l10 0l5 -2l4 3l3 1l2 2l6 0l1 1l0 2l5 0l3 1l2 0l3 -2l2 1l4 2l3 2l4 -1l9 0l7 2l7 5l5 3l4 4l2 -1l1 -1l1 0l0 -4l-3 -6l-1 -5l1 -4l2 -3l3 -2l0 -3l4 -7l3 -7l4 -8l3 -7l0 -3l0 -5l1 -5l0 -3l1 -2l2 -9l1 -4l3 -2l3 -2l4 0l12 -1l11 -2l4 -1l7 -3l3 0l2 1l13 4l4 1l1 0l2 0l3 0l4 0l1 0l3 3l2 0l2 -2l4 -2l8 -2l1 1l3 4l3 2M9654 4432l-2 -1l-3 -3l-5 -6l-2 -1l-2 1l-4 1l-4 4l-7 2l-6 2l0 2l-2 3l-2 2l-5 1l-2 3l-4 6l-3 2M10143 3654l-2 0l-5 -2l-5 -1l-6 -1l-7 2l-6 3l-2 2l-2 2l-3 0l-3 0l-1 2l-3 2l-9 5l-2 2l-2 1l0 2l1 4l0 5l-2 4l-2 2l-3 1l-3 1l-1 1l-5 9l-2 2l-5 -1l-13 13l-1 4l-4 6l-6 6l-6 3l0 1l-1 1l-4 1l-11 8l-13 -1l-6 3l-6 2l-9 1l-2 0l-11 0l-13 0l-5 1l-4 3l-4 3l0 1l0 1l9 6l2 3l-2 3l-1 0l0 1l-2 2l-5 7l-8 8l-4 2l-1 2l-2 5l-2 1l-5 0l-11 1l-15 2l-9 0l-6 0l-7 4l-3 0l-2 1l-8 3l-6 6l-2 1l-10 2l-3 4l-2 0l-6 -5l-4 -4l-1 -5l-1 -1l-1 0l-3 2l-3 2l-1 5l-9 3l-9 2l-3 4l-6 1l-7 0l-6 -2l-5 0l3 -4l1 -3l0 -4l0 -2l-4 -2l-2 -2l-5 -11l-4 -12l-7 -12l-8 -7l-5 -5l-2 -1l-2 -1l-2 -1l-10 -8l-10 -9l-3 -4l-5 -6l-6 -7l-3 -2l-1 -6l4 -4l4 -6l5 -4l7 0l11 1l12 1l12 -1l3 -1l3 0l6 1l11 0l6 -2l-6 -4l-7 -7l-6 -7l-4 -6l-3 -8l-4 -11l-2 -13l1 -7l1 -5l3 -9l-2 -5l0 -4l0 -6l-1 -3l-4 -10l-1 -2l-4 -6l-2 -12l-4 -8l-7 -4l-4 -4l-1 -8l-3 -2l-11 -3l-9 0M9809 4087l-2 -5l-2 -6l0 -6l0 -2l-1 -2l-1 -5l1 -3l-1 -3l-3 -4l-2 -2l-2 -3l-1 -1l-3 0l-3 -1l-5 -5l-5 -5l-6 -7l-5 -5l-6 -7l-6 -6l-3 -6l-1 -4l1 0l3 0l1 -1l0 -1l-3 -5l-1 -6l-2 -4l-6 -6l-7 -4l-2 -2l-1 -3l-2 -20l-1 -6l-2 -2l-1 -2l-1 -1l0 -4l1 -3l0 -1l2 -3l0 -18l-1 -1l-1 -2l-2 0l-2 0l-2 -3l-1 -3l0 -2l2 -2l2 -2l2 -2l7 -3l2 -1l1 -2l1 -2l4 -10l6 -9l3 -2l2 -6l4 -8l1 -4l1 -3l2 -3l7 -5l5 -8M9119 3605l-1 3l-4 7l-2 4l-13 10l-6 -1l-13 2l-2 -2l-3 -1l-4 1l-1 1l0 1l-2 1l-2 4l-2 1l-2 1l-3 0l-2 0l0 2l0 2l-2 1l-1 2l0 2l-1 1l-2 0l-2 -1l-1 3l-2 1l-1 0M11238 2215l5 -1l9 -2l2 1l2 2l1 2l1 4l1 0l4 -1l1 2l4 2l5 1l8 -3l3 0l4 0l1 1l1 3l-1 3l-1 2l2 1l6 4l3 2l-1 3l4 8l2 3l2 4M11324 2255l0 -5l0 -3l0 -3l-4 -2l0 -2l1 0l3 0l4 0l1 -1l-4 -4l-3 -2l-3 -2l-1 -1l0 -1l1 -1l5 -2l0 -2l0 -2l-8 -3l-6 1l-5 -3l-4 -3l-4 -3l-4 -1l-3 -4l-7 -4l-4 -1l1 -1";
var ASP=481/370,FULL={x:750,y:230,w:481,h:370};
var REG={east:{x:886,y:351,w:310},west:{x:790,y:318,w:240},all:{x:750,y:230,w:481}};
function X(lo){return (lo+180)*5}function Y(la){return (84-la)*5}
var vb={x:886,y:351,w:310,h:310/ASP},dragMoved=false;
function svgEl(){return document.querySelector('#mapslot svg')}
Element.prototype.scrollIntoView=function(){};
var manual=false,noAuto=false;
function syncAsp(){var s=svgEl();if(s){var r=s.getBoundingClientRect();if(r.width>50&&r.height>50)ASP=r.width/r.height}}
function nearestKeys(c,ks,n){var A=NODES[c];return ks.slice().sort(function(p,q){var P=NODES[p],Q=NODES[q];return Math.hypot(P.lo-A.lo,P.la-A.la)-Math.hypot(Q.lo-A.lo,Q.la-A.la)}).slice(0,n)}
var vbT=0;
function tweenVB(to){var from={x:vb.x,y:vb.y},t0=performance.now(),D=450,id=++vbT;
 var f=function(t){if(id!==vbT)return;var u=Math.min(1,(t-t0)/D),e=1-Math.pow(1-u,3);setVB({x:from.x+(to.x-from.x)*e,y:from.y+(to.y-from.y)*e,w:to.w});if(u<1)requestAnimationFrame(f)};requestAnimationFrame(f)}
function keepPack(x,y){var m=.2,ok=x>vb.x+vb.w*m&&x<vb.x+vb.w*(1-m)&&y>vb.y+vb.h*m&&y<vb.y+vb.h*(1-m);if(!ok)tweenVB({x:x-vb.w/2,y:y-vb.h/2,w:vb.w})}
function setVB(n){
 syncAsp();
 var w=Math.max(26,Math.min(FULL.w,FULL.h*ASP,n.w)),h=w/ASP;
 var x=Math.max(FULL.x,Math.min(FULL.x+FULL.w-w,n.x)),y=Math.max(FULL.y,Math.min(FULL.y+FULL.h-h,n.y));
 vb={x:x,y:y,w:w,h:h};var s=svgEl();if(s){s.setAttribute('viewBox',x+' '+y+' '+w+' '+h);scaleMap(s)}
}
function scaleMap(s){
 var px=s.getBoundingClientRect().width||600,k=vb.w/px;
 s.style.setProperty('--k',k);s.style.touchAction='none';s.classList.toggle('wide',vb.w>170);s.classList.toggle('full',vb.w>330);s.classList.toggle('mid',false);
 s.querySelectorAll('.node').forEach(function(n){n.setAttribute('r',(n.classList.contains('here')?2.5:(n.dataset.rel==='1'?6.5:4.5))*k)});
 s.querySelectorAll('.mark').forEach(function(m){var far=!m.classList.contains('nx')&&!m.classList.contains('ct');m.style.display=(far&&vb.w>170)?'none':'';m.setAttribute('transform','translate('+m.dataset.x+' '+m.dataset.y+') scale('+(k*(+m.dataset.s))+')')});
 s.querySelectorAll('.pack').forEach(function(g){g.setAttribute('transform','translate('+g.dataset.x+' '+g.dataset.y+') scale('+(k*0.9)+')')});
 declutter(s,k);
 s.querySelectorAll('.cng').forEach(function(g){var t=g.querySelector('.cn'),b=g.querySelector('.cnb'),on=vb.w<=330;t.style.display=on?'':'none';if(b){b.setAttribute('y',(+b.dataset.y)+10*k);b.style.display=(on&&(vb.w<=210||g.dataset.cur==='1'))?'':'none'}});
 declutter(s,k);
 s.querySelectorAll('.cng').forEach(function(g){var t=g.querySelector('.cn'),b=g.querySelector('.cnb'),on=vb.w<=330;t.style.display=on?'':'none';if(b){b.setAttribute('y',(+b.dataset.y)+10*k);b.style.display=(on&&(vb.w<=210||g.dataset.cur==='1'))?'':'none'}});
 s.querySelectorAll('.lbl').forEach(function(t){
  var cx=+t.dataset.x,cy=+t.dataset.y,p=t.dataset.p||'b';
  var show=true;
  t.style.display=show?'':'none';
  if(p==='r'){t.setAttribute('x',cx+11*k);t.setAttribute('y',cy+4*k);t.setAttribute('text-anchor','start')}
  else if(p==='l'){t.setAttribute('x',cx-11*k);t.setAttribute('y',cy+4*k);t.setAttribute('text-anchor','end')}
  else if(p==='t'){t.setAttribute('x',cx);t.setAttribute('y',cy-11*k);t.setAttribute('text-anchor','middle')}
  else{t.setAttribute('x',cx);t.setAttribute('y',cy+19*k);t.setAttribute('text-anchor','middle')}
 });
}
function declutter(s,k){
 var R=[],W=s.getBoundingClientRect().width||600,H=s.getBoundingClientRect().height||W*370/481;
 var px=function(x){return (x-vb.x)/k},py=function(y){return (y-vb.y)/k};
 var hit=function(a){for(var i=0;i<R.length;i++){var q=R[i];if(!(a.r<q.l||a.l>q.r||a.b<q.t||a.t>q.b))return true}return false};
 var rect=function(x,y,o,w){var bx=x+o[0],by=y+o[1];var l=o[2]==='start'?bx:o[2]==='end'?bx-w:bx-w/2;return {l:l,r:l+w,t:by-13,b:by+17}};
 s.querySelectorAll('.node').forEach(function(c){var x=px(+c.getAttribute('cx')),y=py(+c.getAttribute('cy'));R.push({l:x-9,r:x+9,t:y-9,b:y+9})});
 s.querySelectorAll('.mark').forEach(function(m){var x=px(+m.dataset.x),y=py(+m.dataset.y);R.push({l:x-9,r:x+19,t:y-34,b:y+8})});
 var pk=s.querySelector('.pack');if(pk){var x=px(+pk.dataset.x),y=py(+pk.dataset.y);R.push({l:x-26,r:x+26,t:y-76,b:y+10})}
 var OFFC=[[0,27,'middle'],[14,-2,'start'],[-14,-2,'end'],[0,-28,'middle'],[14,18,'start'],[-14,18,'end'],[14,-20,'start'],[-14,-20,'end'],[0,45,'middle'],[0,-46,'middle']];
 var OFFB=[[22,0,'start'],[-14,0,'end'],[0,28,'middle'],[0,-50,'middle'],[22,-24,'start'],[22,30,'start'],[-14,-24,'end'],[-14,30,'end'],[0,54,'middle'],[40,0,'start'],[-32,0,'end']];
 var items=[];
 s.querySelectorAll('.lbl').forEach(function(t){if(t.style.display==='none')return;items.push({t:t,c:1,pr:t.dataset.f==='1'?0:t.dataset.m==='1'?2:4})});
 var bl=[],pkx=pk?+pk.dataset.x:0,pky=pk?+pk.dataset.y:0;
 s.querySelectorAll('.blbl').forEach(function(t){bl.push(t)});
 bl.sort(function(a,b){return Math.hypot(a.dataset.x-pkx,a.dataset.y-pky)-Math.hypot(b.dataset.x-pkx,b.dataset.y-pky)});
 bl.forEach(function(t,i){items.push({t:t,c:0,pr:t.dataset.f==='1'?1:3})});
 items.sort(function(a,b){return a.pr-b.pr});
 items.forEach(function(it){
  var t=it.t,ts=t.querySelectorAll('tspan'),cx=+t.dataset.x,cy=+t.dataset.y,x=px(cx),y=py(cy),best=null;
  var w=Math.max(ts[0].textContent.length*(it.c?8:7),ts[1].textContent.length*(it.c?5.9:6.6))+6,OFF=it.c?OFFC:OFFB;
  for(var i=0;i<OFF.length&&!best;i++){var bx=rect(x,y,OFF[i],w);if(bx.l<2||bx.r>W-2||bx.t<2||bx.b>H-2)continue;if(!hit(bx))best=[OFF[i],bx]}
  if(!best){t.style.display='none';return}
  R.push(best[1]);t.style.display='';var o=best[0],nx=cx+o[0]*k;
  t.setAttribute('x',nx);t.setAttribute('y',cy+o[1]*k);t.setAttribute('text-anchor',o[2]);
  ts.forEach(function(q){q.setAttribute('x',nx)});
 });
}
function setView(name){var r=REG[name]||REG.all;setVB({x:r.x,y:r.y,w:r.w})}
function fitSpread(keys){
 fitKeys(keys,9);syncAsp();var s=svgEl(),W=s?s.getBoundingClientRect().width:900,pts=keys.map(function(k){return [X(NODES[k].lo),Y(NODES[k].la)]}),dm=1e9;
 for(var i=0;i<pts.length;i++)for(var j=i+1;j<pts.length;j++){var d=Math.hypot(pts[i][0]-pts[j][0],pts[i][1]-pts[j][1]);if(d>0.8&&d<dm)dm=d}
 if(dm<1e8){var need=Math.max(9,W*dm/200);if(need<vb.w){var cx=vb.x+vb.w/2,cy=vb.y+vb.h/2,hh=need/ASP;setVB({x:cx-need/2,y:cy-hh/2,w:need})}}
}
function fitKeys(keys,minW){
 var x0=1e9,x1=-1e9,y0=1e9,y1=-1e9;
 keys.forEach(function(k){var n=NODES[k],x=X(n.lo),y=Y(n.la);x0=Math.min(x0,x);x1=Math.max(x1,x);y0=Math.min(y0,y);y1=Math.max(y1,y)});
 var w=Math.max(minW||60,(x1-x0)*1.45+14,((y1-y0)*1.45+14)*ASP);
 setVB({x:(x0+x1)/2-w/2,y:(y0+y1)/2-w/ASP/2,w:w});
}
function zoomAt(f,cx,cy){
 manual=true;
 var w=vb.w*f;setVB({x:cx-(cx-vb.x)*(w/vb.w),y:cy-(cy-vb.y)*(w/vb.w),w:w});
}
function toMap(s,ex,ey){var p=s.createSVGPoint();p.x=ex;p.y=ey;var m=s.getScreenCTM();if(!m)return {x:vb.x+vb.w/2,y:vb.y+vb.h/2};return p.matrixTransform(m.inverse())}
var BL={'kas-ben':[30.08,0.06],'kis-gom':[29.64,-1.28],'nai-kam':[34.09,0.46],'kis-kam':[34.09,0.46],'kam-kig':[29.98,-1.34],'kab-kig':[29.98,-1.34],'nai-aru':[36.79,-2.54],'mom-dar':[39.14,-4.66],'mom-tan':[39.14,-4.66],'kig-buj':[30.13,-2.35],'kig-gom':[29.25,-1.69],'kam-jub':[32.05,3.58],'kig-dar':[30.78,-2.38],'dar-lus':[32.77,-9.33],'mbe-lus':[32.77,-9.33],'mbe-lil':[33.93,-9.5],'lil-lus':[32.95,-13.75],'liv-vfa':[25.86,-17.93],'dak-ban':[-16.75,13.49],'acc-abi':[-2.77,5.25],'acc-lom':[1.19,6.12],'lom-cot':[1.65,6.29],'cot-lag':[2.72,6.43],'pno-lag':[2.72,6.43],'moy-add':[39.05,3.52],'nai-add':[39.05,3.52],'nai-mwa':[34.48,-1.18],'kam-buk':[31.4,-1.0],'mos-mom':[37.68,-3.4],'mus-kis':[29.7,-1.33],'rus-buk':[28.9,-2.47],'blz-tet':[34.52,-15.62],'lil-tet':[34.52,-15.62],'tet-har':[32.9,-16.95],'bei-mut':[32.85,-18.98],'har-lus':[28.85,-16.03],'har-jhb':[30.0,-22.22],'bul-jhb':[30.0,-22.22],'jhb-map':[32.0,-25.44],'fra-bul':[27.8,-20.48],'cpt-win':[17.7,-28.77],'liv-kas':[25.27,-17.79],'liv-kat':[24.3,-17.47],'ndo-lub':[27.8,-12.25],'stl-nkc':[-15.8,16.5],'zig-bis':[-16.2,12.45]};
LEGS.forEach(function(l){if(l.border&&BL[l.id])l.bl=BL[l.id]});
function bpt(l){var A=NODES[l.a],B=NODES[l.b];if(l.bl)return [X(l.bl[0]),Y(l.bl[1])];return [(X(A.lo)+X(B.lo))/2,(Y(A.la)+Y(B.la))/2]}
var LAKES=[[[31.8,-0.4],[32.9,0.2],[34.0,-0.2],[34.2,-1.2],[33.7,-2.4],[32.9,-2.7],[32.0,-2.4],[31.7,-1.4]],[[29.1,-3.4],[29.6,-4.9],[30.1,-6.3],[30.5,-8.0],[31.2,-8.6],[31.1,-7.5],[30.6,-6.0],[30.0,-4.5],[29.5,-3.4]],[[34.2,-9.5],[34.6,-11.0],[34.9,-12.6],[35.3,-14.0],[34.8,-14.1],[34.4,-12.0],[34.0,-10.0]],[[35.9,4.6],[36.4,4.3],[36.1,3.0],[35.9,3.6]]];
var CN=[['Rwanda',29.95,-1.75],['Burundi',29.95,-3.45],['The Gambia',-15.3,13.6],['Guinea-Bissau',-15.0,12.2],['Sierra Leone',-11.9,8.6],['Liberia',-9.4,6.4],['Kenya',37.8,0.6],['Uganda',32.6,1.8],['Tanzania',34.6,-6.2],['Congo',23.5,-3],['Ethiopia',39.5,7.5],['South Sudan',30,7.5],['Zambia',26.5,-14],['Malawi',34.2,-12.6],['Mozambique',36.2,-16.5],['Zimbabwe',29.8,-19.2],['Botswana',23.5,-22],['Namibia',17.5,-20],['South Africa',24,-29.5],['Angola',17,-12],['Mauritania',-10,19.5],['Senegal',-14.8,14.9],['Guinea',-11.5,10.7],['Ivory Coast',-5.5,7.5],['Ghana',-1.2,7.8],['Togo',1.1,8.2],['Benin',2.3,9.3],['Nigeria',8.2,9],['Cameroon',12.5,5.8],['Mali',-3,17,1],['Niger',9,17,1],['Burkina Faso',-1.8,12.2,1],['Chad',18.5,15,1],['Sudan',30,15,1]];
var HB={'Guerguerat':'Guerguerat','Qustul':'Qustul','Dewele':'Dewele','Mwami':'Mwami','Songwe':'Songwe','Tunduma':'Tunduma','Maseru Bridge':'Maseru Bridge','Oshoek':'Oshoek','Oshikango':'Oshikango','Karang':'Karang','Noé':'Noé','Koundara':'Koundara','Mpondwe':'Mpondwe','Bunagana':'Bunagana','Beach Ngobila':'Beach Ngobila','Busia':'Busia','Namanga One-Stop':'Namanga One-Stop','Lunga Lunga':'Lunga Lunga','Nemba':'Nemba','Grande Barrière':'Grande Barrière','Elegu':'Elegu','Rusumo Falls':'Rusumo Falls','Tunduma':'Tunduma','Songwe':'Songwe','Mchinji':'Mchinji','Victoria Falls Bridge':'Victoria Falls Bridge','Gatuna':'Gatuna','Karang':'Karang','Aflao':'Aflao','Hillacondji':'Hillacondji','Seme':'Seme','Elubo':'Elubo','Moyale':'Moyale','Isebania':'Isebania','Mutukula':'Mutukula','Taveta':'Taveta','Cyanika':'Cyanika','Akanyaru Haut':'Akanyaru Haut','Rusizi I':'Rusizi I','Mwanza':'Mwanza','Nyamapanda':'Nyamapanda','Machipanda':'Machipanda','Chirundu':'Chirundu','Beitbridge':'Beitbridge','Lebombo':'Lebombo','Groblersbrug':'Groblersbrug','Ramokgwebana':'Ramokgwebana','Vioolsdrif':'Vioolsdrif','Kazungula Bridge':'Kazungula Bridge','Sesheke':'Sesheke','Kazungula Road':'Kazungula Road','Kasumbalesa':'Kasumbalesa','Mtambaswala':'Mtambaswala','Seleti':'Seleti','Keur Ayib + Seleti':'Keur Ayib + Seleti','São Domingos':'São Domingos','Pamelap':'Pamelap','Bo Waterside':'Bo Waterside','Ganta':'Ganta','Ekok':'Ekok','Rosso':'Rosso'};
function bshort(l){return l.border.name.split(' / ')[0].split(' (')[0]}
function bline2(l){var n=bshort(l);return n+(HB[n]?' · '+HB[n]:'')}
function shortC(c){return c.replace(' (DRC)','')}
var CBC={};
function cbList(nm){
 if(CBC[nm])return CBC[nm];var out=[],seen={};
 LEGS.forEach(function(l){if(!l.border||l.danger)return;var ps=l.border.pair.split(' ⇄ ');var i=ps.indexOf(nm);if(i<0)return;
  var o=ps[1-i],n=l.border.name.split(' / ')[0].split(' (')[0],k=n+o;if(seen[k])return;seen[k]=1;out.push({n:n,o:o,id:l.id})});
 return CBC[nm]=out;
}
function packFig(){return '<g class="fig"><polygon points="-5.5,-15 -0.3,-15 0.3,-4 2.8,0.5 -7.8,0.5 -4.8,-4" fill="#3F5F92"/><polygon points="0.3,-15 5.5,-15 4.8,-4 7.8,0.5 -2.8,0.5 -0.3,-4" fill="#35527F"/><ellipse cx="-2.6" cy="1" rx="5" ry="1.8" fill="#6B3E1E"/><ellipse cx="5" cy="1" rx="5" ry="1.8" fill="#6B3E1E"/><rect x="-18" y="-40" width="13" height="25" rx="5" fill="#7C8A2E"/><rect x="-16" y="-26" width="9" height="8" rx="2.5" fill="#5F6C20"/><rect x="-18.5" y="-45" width="14" height="6" rx="3" fill="#D9622B"/><path d="M-14 -45v6M-9.5 -45v6" stroke="#E3A32B" stroke-width="1.4"/><circle cx="-11.5" cy="-31" r="2.7" fill="#F3E2BC" stroke="#3A2112" stroke-width=".7"/><path d="M-11.5 -33.6v5.2M-11.5 -31l-1.9 1.9M-11.5 -31l1.9 1.9" stroke="#3A2112" stroke-width=".7" fill="none"/><rect x="-6.5" y="-34" width="13" height="21" rx="5" fill="#E3A32B"/><path d="M-6.4 -27h12.8M-6.4 -22h12.8" stroke="#D9622B" stroke-width="2.2"/><path d="M-5 -33q3 8 1 18" stroke="#3A2112" stroke-width="1.5" fill="none"/><path d="M4.5 -31l7 8" stroke="#F2C29B" stroke-width="3.6" stroke-linecap="round"/><path d="M11.6 -46l1.6 47" stroke="#7A5232" stroke-width="1.8" stroke-linecap="round"/><circle cx="11.5" cy="-23" r="2.1" fill="#F2C29B"/><path d="M-6.6 -39q-1-9 6.6-9 7.6 0 6.6 9-.8 4-2.2 5l.3-6q-4.4-3-10.4 0l.3 6q-1.4-1-2.8-5z" fill="#6B3E1E"/><circle cx="0" cy="-40" r="5.6" fill="#F2C29B"/><path d="M-6.6 -39q-1-9 6.6-9 7.6 0 6.6 9-.8 4-2.2 5l.3-6q-4.4-3-10.4 0l.3 6q-1.4-1-2.8-5z" fill="#6B3E1E"/><rect x="-6.4" y="-43.4" width="12.8" height="2.4" rx="1.2" fill="#D9232B"/><rect x="-4.7" y="-40.2" width="3.8" height="2.6" rx="1.2" fill="#1b1b1b"/><rect x="0.9" y="-40.2" width="3.8" height="2.6" rx="1.2" fill="#1b1b1b"/><path d="M-.9 -39.2h1.8" stroke="#1b1b1b" stroke-width=".7"/><path d="M-2 -36.3q2 1.9 4 0" stroke="#7A3B1E" stroke-width=".9" fill="none" stroke-linecap="round"/><circle cx="5.4" cy="-43.8" r="1.5" fill="#fff"/><circle cx="5.4" cy="-43.8" r=".6" fill="#F2C14E"/></g>'}
function packIcon(sz){return '<svg width="'+sz+'" height="'+Math.round(sz*1.12)+'" viewBox="-20 -52 40 56" aria-hidden="true">'+packFig()+'</svg>'}
function svgHTML(o){
 var s='<svg viewBox="'+vb.x+' '+vb.y+' '+vb.w+' '+vb.h+'" direction="ltr" role="group" aria-label="Map of Africa with bus lines">';
 s+='<rect class="sea" x="'+FULL.x+'" y="'+FULL.y+'" width="'+FULL.w+'" height="'+FULL.h+'"/>';
 var g='';
 for(var lo=-30;lo<=60;lo+=10)g+='M'+X(lo)+' '+FULL.y+'V'+(FULL.y+FULL.h);
 for(var la=-30;la<=30;la+=10)g+='M'+FULL.x+' '+Y(la)+'H'+(FULL.x+FULL.w);
 s+='<path class="grat" d="'+g+'"/>';
 var st=[[0,1],[.155,2],[.268,3],[.366,4],[.479,5],[.62,6],[.761,7],[.859,8],[1,9]];
 s+='<defs><linearGradient id="lg" gradientUnits="userSpaceOnUse" x1="0" y1="'+(Y(36)*10)+'" x2="0" y2="'+(Y(-35)*10)+'">'+st.map(function(q){return '<stop offset="'+q[0]+'" style="stop-color:var(--g'+q[1]+')"/>'}).join('')+'</linearGradient></defs>';
 s+='<g transform="scale(0.1)"><path class="land" d="'+LAND_D+'"/><path class="bord" d="'+BORD_D+'"/></g>';
 LAKES.forEach(function(L){s+='<polygon class="lake" points="'+L.map(function(p){return X(p[0])+','+Y(p[1])}).join(' ')+'"/>'});
 CN.forEach(function(c){
  var nm=c[0],ls=c[3]?[]:cbList(nm),cur=o.country&&shortC(o.country)===nm,x=X(c[1]),y=Y(c[2]);
  s+='<g class="cng" data-cur="'+(cur?1:0)+'"><text class="cn'+(c[3]?' off':'')+(ls.length?' clk':'')+'" data-cn="'+(ls.length?nm:'')+'" x="'+x+'" y="'+y+'">'+nm+(ls.length?' ('+ls.length+')':'')+'</text>';
  if(0){var sh=ls.slice(0,7);s+='<text class="cnb" data-cn="'+nm+'" data-y="'+y+'" x="'+x+'" y="'+y+'">'+sh.map(function(q,i){return '<tspan x="'+x+'" dy="'+(i?'1.15em':'0')+'">'+q.n+' → '+q.o+'</tspan>'}).join('')+(ls.length>7?'<tspan x="'+x+'" dy="1.15em">+'+(ls.length-7)+' more</tspan>':'')+'</text>'}
  s+='</g>';
 });
 var hide=function(k){return NODES[k].d&&!state.danger};
 var ok=function(l){return !((l.danger&&!state.danger)||hide(l.a)||hide(l.b))};
 var ctry=function(l){return o.country&&(NODES[l.a].c===o.country||NODES[l.b].c===o.country)};
 LEGS.forEach(function(l){
  if(!ok(l))return;
  var A=NODES[l.a],B=NODES[l.b];
  var c='edge'+(l.border?' b':'')+(l.danger?' x':'');
  if(o.on&&o.on[l.id])c+=' on';else if(o.nextIds&&o.nextIds[l.id])c+=' next';
  var pts=X(A.lo)+','+Y(A.la)+' ';if(l.border){var p=bpt(l);pts+=p[0]+','+p[1]+' '}pts+=X(B.lo)+','+Y(B.la);
  s+='<polyline class="'+c+'" points="'+pts+'"/>';
 });
 var lb='',fl='',mi=0;
 LEGS.forEach(function(l){
  if(!l.border||!ok(l))return;
  var p=bpt(l),nx=o.nextIds&&o.nextIds[l.id],ct=ctry(l);
  fl+='<g class="mark'+(nx?' nx':(ct?' ct':''))+'" data-leg="'+l.id+'" data-x="'+p[0]+'" data-y="'+p[1]+'" data-s="'+(nx?1.0:ct?.85:.5)+'" tabindex="0" role="button" aria-label="Border crossing '+l.border.name+'"><circle class="hit" cx="0" cy="-12" r="14"/><path class="pole" d="M0 0V-30"/><path class="fl wave" d="M1 -30C7 -33 12 -27 19 -30V-18C12 -15 7 -21 1 -18Z"/><circle class="bs" r="3.2"/></g>';
  lb+='<text class="blbl" data-leg="'+l.id+'" data-x="'+p[0]+'" data-y="'+p[1]+'" data-m="0" data-f="'+(nx?1:0)+'"><tspan class="bl1" x="'+p[0]+'" dy="0">'+bTitle(l)+'</tspan><tspan class="bl2" x="'+p[0]+'" dy="1.2em">'+l.border.pair+'</tspan></text>';
 });
 Object.keys(NODES).forEach(function(k){
  var n=NODES[k];if(hide(k))return;
  var foc=o.here===k||(o.nodes&&o.nodes[k])||(o.opts&&o.opts[k]);
  var cls='node'+(o.here===k?' here':(o.nodes&&o.nodes[k]?' on':''))+(o.opts&&o.opts[k]?' opt':'');
  s+='<circle class="'+cls+'" data-k="'+k+'" data-mj="'+(n.m?1:0)+'" data-rel="'+((o.here===k||(o.nodes&&o.nodes[k])||(o.opts&&o.opts[k]))?1:0)+'" tabindex="0" role="button" aria-label="'+n.he+'" cx="'+X(n.lo)+'" cy="'+Y(n.la)+'" r="6"/>';
  s+='<text class="lbl'+(o.focus&&!foc?' dim':'')+'" data-k="'+k+'" data-x="'+X(n.lo)+'" data-y="'+Y(n.la)+'" data-m="'+(n.m?1:0)+'" data-f="'+(foc?1:0)+'"><tspan class="c1" x="'+X(n.lo)+'" dy="0">'+n.he+'</tspan><tspan class="c2" x="'+X(n.lo)+'" dy="1.15em">'+n.c+'</tspan></text>';
 });
 s+=lb+fl;
 var pk=o.pack||o.here;
 if(pk){var pn=NODES[pk],px=o.packAt?o.packAt[0]:X(pn.lo),py=o.packAt?o.packAt[1]:Y(pn.la);s+='<g class="pack" data-x="'+px+'" data-y="'+py+'" tabindex="0" role="button" aria-label="Your backpacker. Drag to another city"><circle class="bcn" r="9"/><circle class="bcn b2" r="9"/><circle class="core" r="3.6"/><ellipse class="pulse" rx="12" ry="4"/><ellipse class="shadow" rx="11" ry="3.4"/>'+packFig()+'<rect x="-18" y="-54" width="36" height="58" fill="transparent"/></g>'}
 return s+'</svg>';
}
var lastPack=null;
var RV={north:[915,262,300],west:[890,372,200],east:[1085,420,190],south:[1040,540,210],all:[990,415,481]};
var RN={north:'casablanca',west:'accra',east:'nairobi',south:'johannesburg'};
function goRegion(r){var v=RV[r];if(!v)return;
 if(RN[r]){state.region=NODES[RN[r]].r;if(state.mode!=='trip'){state.mode='trip'}goTo(RN[r])}
 syncAsp();manual=true;var w=v[2],hh=w/ASP;setVB({x:v[0]-w/2,y:v[1]-hh/2,w:w});
 var m=$('#odmsg');if(m)m.textContent=r==='north'?'North Africa still has few lines: Morocco–Mauritania and Egypt.':'';}
document.addEventListener('click',function(e){var b=e.target.closest&&e.target.closest('[data-reg]');if(b)goRegion(b.getAttribute('data-reg'))});
function goToCountry(c){var best=null;Object.keys(NODES).forEach(function(k){var n=NODES[k];if(shortC(n.c)!==c)return;if(n.d&&!state.danger)return;if(!best||(n.m&&!NODES[best].m))best=k});if(best)goTo(best)}
function animatePack(){
 var s=svgEl();if(!s)return;var g=s.querySelector('.pack');if(!g)return;
 var nx=+g.dataset.x,ny=+g.dataset.y;
 if(lastPack&&(Math.abs(lastPack.x-nx)>.5||Math.abs(lastPack.y-ny)>.5)){
  var x0=lastPack.x,y0=lastPack.y,t0=performance.now(),D=700,ks=function(){return vb.w/(s.getBoundingClientRect().width||600)};
  var put=function(x,y,k){g.setAttribute('transform','translate('+x+' '+y+') scale('+(k*0.9)+')')};
  put(x0,y0,ks());
  var stepf=function(t){var u=Math.min(1,(t-t0)/D),e=1-Math.pow(1-u,3),k=ks();put(x0+(nx-x0)*e,y0+(ny-y0)*e-Math.sin(u*Math.PI)*26*k,k);if(u<1&&g.isConnected)requestAnimationFrame(stepf);else{g.classList.add('arrive');setTimeout(function(){g.classList.remove('arrive')},1800)}};
  requestAnimationFrame(stepf);
 }
 lastPack={x:nx,y:ny};
}
function bTitle(l){var n=bshort(l);return 'Border '+n}
function legById(id){return LEGS.filter(function(x){return x.id===id})[0]}
function visibleLeg(l){return !((l.danger&&!state.danger)||(NODES[l.a].d&&!state.danger)||(NODES[l.b].d&&!state.danger))}
function legsOfCountry(c){return LEGS.filter(function(l){return l.border&&visibleLeg(l)&&(NODES[l.a].c===c||NODES[l.b].c===c)})}
function crossTo(l,c){
 var ca=NODES[l.a].c,cb=NODES[l.b].c;
 if(ca===c&&cb!==c)return cb;if(cb===c&&ca!==c)return ca;
 var ps=l.border.pair.split(' ⇄ ');return ps.filter(function(p){return c.indexOf(p)<0})[0]||ps[1];
}
function goTo(k){manual=true;
 var cur=state.trip[state.trip.length-1];state.atB=null;state.mode='trip';state.region=NODES[k].r;state.view='fit';
 if(k!==cur){var adj=onward(cur,[]).some(function(e){return e.to===k});if(adj)state.trip.push(k);else state.trip=[k]}
 state.pop={kind:'arrNode',k:k};state.keep=true;render();revealInfo();
}

function dropOn(k){manual=true;
 if(state.mode!=='trip'){state.from=k;state.region=NODES[k].r;render();return}
 goTo(k);
}
function dropOnBorder(id){manual=true;
 var l=legById(id),cur=state.trip[state.trip.length-1];state.mode='trip';
 if(l.a!==cur&&l.b!==cur){var p=bpt(l),da=Math.hypot(X(NODES[l.a].lo)-p[0],Y(NODES[l.a].la)-p[1]),db=Math.hypot(X(NODES[l.b].lo)-p[0],Y(NODES[l.b].la)-p[1]);var n=da<=db?l.a:l.b;state.trip=[n];state.region=NODES[n].r}
 state.atB=id;state.view='fit';state.pop={kind:'arrBorder',id:id};state.keep=true;render();revealInfo();
}
function legRow(l,c,btns){
 var A=NODES[l.a],B=NODES[l.b];
 return '<div class="arow"><div><b>'+bTitle(l)+'</b> <span class="pairs">'+l.border.pair+'</span><div class="small">'+A.he+' ⇄ '+B.he+' · '+l.cos.slice(0,2).join(', ')+' · '+l.h[0]+'–'+l.h[1]+' hours · '+l.price+'</div></div><div class="acts">'+btns+'</div></div>';
}
function busCard(l,fk,acts){
 var rev=fk!==l.a,A=NODES[fk],B=NODES[rev?l.a:l.b],fl=rev?l.toB:l.fromA,tl=rev?l.fromA:l.toB;
 return '<div class="bcard2 tk'+(l.border?' bd':'')+'">'
  +'<section class="tks"><h5><span class="em">🧭</span>Route</h5><div class="tl"><div class="tp g"><span class="dot"></span><div><small>Departing from </small><b><bdi>'+A.he+'</bdi></b> <span class="cty">'+A.c+'</span></div></div>'
  +'<div class="tb">'+(l.border?'<span class="rbn">🚧 Border <bdi>'+bshort(l)+'</bdi></span>':'<span class="rbn same">Same country, no border</span>')+'</div>'
  +'<div class="tp r"><span class="dot"></span><div><small>Arriving at </small><b><bdi>'+B.he+'</bdi></b> <span class="cty">'+B.c+'</span></div></div></div>'+chipsHTML(l)+'</section>'
  +'<section class="tks"><h5><span class="em">⏰</span>When to leave</h5>'+tripInfo(l,true)+'</section>'
  +'<section class="tks"><h5><span class="em">🚌</span>Who to travel with and from where</h5>'+coCards(l,fl,tl,A,B)+'</section>'
  +(acts?'<div class="actions">'+acts+'</div>':'')+'</div>';
}
function hav(a,b){var R=6371,r=Math.PI/180,dl=(b.la-a.la)*r,dn=(b.lo-a.lo)*r,x=Math.sin(dl/2)*Math.sin(dl/2)+Math.cos(a.la*r)*Math.cos(b.la*r)*Math.sin(dn/2)*Math.sin(dn/2);return 2*R*Math.asin(Math.sqrt(x))}
function fmtT(t){var d=Math.floor(t/24),m=Math.round((t-d*24)*60/5)*5,hh=Math.floor(m/60)%24,mm=m%60;return (hh<10?'0':'')+hh+':'+(mm<10?'0':'')+mm+(d>0?(d===1?' next day':' after '+d+' days'):'')}
var CUR={'Kenya':'Kenyan shilling (KES)','Uganda':'Ugandan shilling (UGX)','Rwanda':'Rwandan franc (RWF)','Tanzania':'Tanzanian shilling (TZS)','Burundi':'Burundian franc (BIF)','Congo':'Congolese franc (CDF), US dollar widely used','Zambia':'Zambian kwacha (ZMW)','Malawi':'Malawian kwacha (MWK)','Mozambique':'Metical (MZN)','Zimbabwe':'US dollar / ZiG','South Africa':'Rand (ZAR)','Botswana':'Pula (BWP)','Namibia':'Namibian dollar (NAD)','Ghana':'Cedi (GHS)','Togo':'CFA franc (XOF)','Benin':'CFA franc (XOF)','Nigeria':'Naira (NGN)','Senegal':'CFA franc (XOF)','The Gambia':'Dalasi (GMD)','Ethiopia':'Birr (ETB)','South Sudan':'South Sudanese pound (SSP), US dollar widely used'};

Object.assign(HB,{'Ntam':'Ntam',"Tog Wajaale":"Tog Wajaale", "Malaba":"Malaba", "Manyovu":"Manyovu", "Songwe":"Songwe", "Machipanda":"Machipanda", "Namaacha":"Namaacha", "Kosi Bay":"Kosi Bay", "Mamuno":"Mamuno", "Kasumbalesa":"Kasumbalesa", "Luvo":"Luvo", "Kye-Ossi":"Kye-Ossi", "Kousseri":"Kousseri", "Jibiya":"Jibiya", "Makalondi":"Makalondi", "Malanville":"Malanville", "Cinkansé":"Cinkansé", "Paga":"Paga", "Koloko":"Koloko", "Kidira":"Kidira", "Zégoua":"Zégoua"});
CN.push(['Gabon',11.8,-0.8],['Somaliland',46,9.5],['Morocco',-6.5,32],['Egypt',30,26.5]);
Object.assign(CUR,{'Morocco':'Dirham (MAD)','Egypt':'Egyptian pound (EGP)','Cameroon':'CFA franc (XAF)','Gabon':'CFA franc (XAF)','Angola':'Kwanza (AOA)','Lesotho':'Loti (LSL), rand accepted','Eswatini':'Lilangeni (SZL), rand accepted','Mali':'CFA franc (XOF)','Burkina Faso':'CFA franc (XOF)','Niger':'CFA franc (XOF)','Ivory Coast':'CFA franc (XOF)','Somaliland':'Somaliland shilling'});
function curOf(n){var c=NODES[n].c;for(var k in CUR)if(c.indexOf(k)>-1)return CUR[k];return null}
function extraInfo(l){
 var ca=curOf(l.a),cb=curOf(l.b),h='';
 h+='<div class="asec"><h4>Before you go</h4><ul class="xl">';
 if(l.border){
  h+='<li>📘 Passport valid for at least 6 months and with blank pages.</li><li>💉 Carry a vaccination booklet (yellow fever). Some countries require it at border crossings, check in advance.</li><li>💵 Keep US dollars in cash, in new and small notes, for visa fees and for exchange at the border.</li>';
  if(ca&&cb&&ca!==cb)h+='<li>💱 Currency: '+ca+' ⇄ '+cb+'. Change a little at the border, and the rest in town.</li>';
  h+='<li>🛄 Take your bag off the bus at every checkpoint, and keep valuables on you.</li>';
 }else{
  if(cb)h+='<li>💱 Currency: '+cb+'.</li>';
 }
 h+='<li>🎫 Buy your ticket a day ahead at the company office, and get a receipt with a seat number.</li><li>⏰ Arrive at the station 30–45 minutes before departure. Many buses leave when full.</li><li>🔌 Charge your phone, download an offline map and copy your passport documents.</li></ul></div>';
 return h;
}
function tripInfo(l,compact){
 var dist=Math.round(hav(NODES[l.a],NODES[l.b])*1.28/10)*10,m=(l.h[0]+l.h[1])/2,sp=Math.round(dist/m),
 dw=m>=10?'Common departures: evening and night (18:00–21:00) and early morning (05:00–07:00)':m>=5?'Common departures: early morning (05:00–08:00)':'Departures throughout the day, when the bus fills up';
 var deps=m>=10?[6,19]:[6,9,13],rows=deps.map(function(d){return '<tr><td><bdi>'+fmtT(d)+'</bdi></td><td><bdi>'+fmtT(d+l.h[0])+' – '+fmtT(d+l.h[1])+'</bdi></td></tr>'}).join('');
 if(compact)return '<div class="tinfo c"><div>📏 ~'+dist+' km</div>'+deps.map(function(d){return '<div>🕒 Departs <bdi>'+fmtT(d)+'</bdi> → Estimated arrival <bdi>'+fmtT(d+l.h[0])+' – '+fmtT(d+l.h[1])+'</bdi></div>'}).join('')+'</div>';
 return '<div class="asec tinfo"><h4>Trip info</h4><div class="tgrid"><div><small>Road distance (estimate)</small><b>~'+dist+' km</b></div><div><small>Travel time</small><b>'+l.h[0]+'–'+l.h[1]+' hours</b></div><div><small>Average speed</small><b>~'+sp+' km/h</b></div>'
  +(l.border?'<div><small>Border wait</small><b>Usually 1–3 hours</b></div>':'')+'</div>'
  +'<p class="tnote">'+dw+'. Common pattern, not an official schedule: verify at the station.</p>'
  +'<table class="ttab"><thead><tr><th>If departing at </th><th>Estimated arrival</th></tr></thead><tbody>'+rows+'</tbody></table>'
  +'<p class="tnote">The estimate includes stops and the border. Traffic, roads and market days may add time.</p>'+extraInfo(l)+'</div>';
}
function legExtra(l){
 var h=tripInfo(l,false)+'<div class="asec"><h4>'+(l.border?'Border steps':'The road')+'</h4><ol style="margin:0;padding-inline-start:20px;display:grid;gap:5px;font-size:15px">'+l.steps.map(function(s){return '<li>'+s+'</li>'}).join('')+'</ol></div>';
 if(l.visa)h+='<div class="visa"><b>VISA</b> &nbsp;'+l.visa+'</div>';
 if(l.tips.length)h+='<details class="more"><summary>Tips</summary><ul style="margin:8px 0 0;padding-inline-start:18px;font-size:14px">'+l.tips.map(function(s){return '<li>'+s+'</li>'}).join('')+'</ul></details>';
 return h;
}
function defaultPop(){
 if(state.mode!=='trip')return null;
 return state.atB?{kind:'arrBorder',id:state.atB}:{kind:'arrNode',k:state.trip[state.trip.length-1]};
}
function openCountry(c){state.pop={kind:'country',c:c};renderPop();revealInfo()}
function revealInfo(){return;
 var p=document.getElementById('pop');if(!p||!p.getBoundingClientRect)return;
 var r=p.getBoundingClientRect();
 if(r.top>window.innerHeight*.75||r.bottom<0)window.scrollBy({top:r.top-window.innerHeight*.3,behavior:'smooth'});
}
function renderArrival(p){
 var pp=state.pop,h='',reach={};
 var borderRows=function(c,skipId,skipNode){
  var ls=legsOfCountry(c).filter(function(l){return l.id!==skipId&&!(skipNode&&(l.a===skipNode||l.b===skipNode))});
  ls.forEach(function(l){reach[crossTo(l,c)]=1});
  if(!ls.length)return '<div class="small" style="color:var(--muted)">No more borders in the database.</div>';
  return ls.map(function(l){return legRow(l,c,'<button class="btn sm" data-pl="'+l.id+'">Details</button><button class="btn sm primary" data-tb="'+l.id+'">🎒 Take me there</button>')}).join('');
 };
 var back='<button class="btn mapback" id="tomap">↑ Back to map</button>';
 if(pp.kind==='arrNode'){
  var k=pp.k,n=NODES[k],es=edgesOf(k).slice().sort(function(a,b){return (b.leg.border?1:0)-(a.leg.border?1:0)||mid(a.leg)-mid(b.leg)});
  es.forEach(function(e){if(e.leg.border)reach[crossTo(e.leg,n.c)]=1});
  h+='<div class="pophd"><div><div class="lab">You are here</div><h3>🎒 <bdi>'+n.he+'</bdi> <small style="font-family:var(--f-body);font-size:15px;color:var(--muted)">'+n.c+'</small></h3></div>'+back+'</div>';
  h+='<div class="asec"><h4>Buses departing from '+n.he+' ('+es.length+')</h4>'+(es.length?es.map(function(e){
   return busCard(e.leg,k,'<button class="btn sm" data-pl="'+e.leg.id+'">Steps and tips</button>'+(e.leg.border?'<button class="btn sm" data-tb="'+e.leg.id+'">🎒 To the border</button>':'')+'<button class="btn sm primary" data-go2="'+e.to+'">Continue to '+NODES[e.to].he+' ←</button>')}).join(''):'<div class="gap">No onward route from here in the database. You need a flight or a line that is not included.</div>')+'</div>';
  h+='<div class="asec"><h4>More borders from '+n.c+'</h4>'+borderRows(n.c,null,k)+'</div>';
 }else if(pp.kind==='arrBorder'){
  var l=legById(pp.id),ca=NODES[l.a].c,cb=NODES[l.b].c,cs=ca===cb?[ca]:[ca,cb],cur=state.trip[state.trip.length-1],fk=(l.a===cur||l.b===cur)?cur:l.a;
  h+='<div class="pophd"><div><div class="lab">You are at the border</div><h3>🚩 '+bTitle(l)+'</h3><div style="color:var(--red);font-weight:800;font-size:17px">'+l.border.pair+'</div></div>'+back+'</div>';
  h+='<div class="bigs"><button class="btn primary" data-go2="'+l.a+'">Cross and continue to '+NODES[l.a].he+'<br><small>'+ca+'</small></button><button class="btn primary" data-go2="'+l.b+'">Cross and continue to '+NODES[l.b].he+'<br><small>'+cb+'</small></button></div>';
  h+=busCard(l,fk,'')+legExtra(l);
  cs.forEach(function(c){h+='<div class="asec"><h4>Other borders from '+c+'</h4>'+borderRows(c,l.id,null)+'</div>'});
  cs.forEach(function(c){delete reach[c]});
 }else{
  var c=pp.c,ls=LEGS.filter(function(l){return l.border&&visibleLeg(l)&&l.border.pair.split(' ⇄ ').indexOf(c)>=0});
  ls.forEach(function(l){reach[l.border.pair.split(' ⇄ ').filter(function(x){return x!==c})[0]]=1});
  h+='<div class="pophd"><div><div class="lab">Country</div><h3>🌍 '+c+'</h3></div>'+back+'</div>';
  h+='<div class="asec"><h4>All borders of '+c+' ('+ls.length+')</h4>'+ls.map(function(l){return legRow(l,c,'<button class="btn sm" data-pl="'+l.id+'">Details</button><button class="btn sm primary" data-tb="'+l.id+'">🎒 Take me there</button>')}).join('')+'</div>';
 }
 var rc=Object.keys(reach);
 h+='<div class="asec"><h4>Countries you can reach ('+rc.length+')</h4><div class="cchips">'+(rc.map(function(c){return '<button class="cc" data-cty="'+c+'">'+c+' ←</button>'}).join('')||'—')+'</div></div>';
 p.innerHTML=h;p.hidden=false;
 $('#tomap').addEventListener('click',function(){window.scrollTo({top:document.querySelector('.mapbox').getBoundingClientRect().top+window.scrollY-8,behavior:'smooth'})});
 p.querySelectorAll('[data-pl]').forEach(function(b){b.addEventListener('click',function(){openPop(b.dataset.pl)})});
 p.querySelectorAll('[data-tb]').forEach(function(b){b.addEventListener('click',function(){dropOnBorder(b.dataset.tb)})});
 p.querySelectorAll('[data-cty]').forEach(function(b){b.addEventListener('click',function(){goToCountry(b.dataset.cty)})});
 p.querySelectorAll('[data-go2]').forEach(function(b){b.addEventListener('click',function(){goTo(b.dataset.go2)})});
}
/* popup */
function stBit(x,nm,fallbackCity,en,gen){
 if(!x)return '<b>'+nm+'</b> <span class="sts">· '+fallbackCity+', street unknown (verify)</span> <a class="mp" href="'+mapq(nm+' bus station',en)+'" target="_blank" rel="noopener" title="Search on map">📍 Map</a>';
 var i=x.n.indexOf(','),nmx=i>-1?x.n.slice(0,i).trim():x.n,st=i>-1?x.n.slice(i+1).trim():'';
 return '<b>'+nmx+'</b> <span class="sts">'+(st?'· '+st:'')+'</span> <a class="mp" href="'+mapq(x.code,en)+'" target="_blank" rel="noopener" title="Open in map">📍 Map</a>';
}
function coCards(l,fl,tl,A,B){
 var usedF={},usedT={};
 var cards=l.cos.map(function(c){var nm=c.split(' (')[0],key=nm.split(' ')[0].toLowerCase(),
  f=fl.filter(function(x){return x.n.toLowerCase().indexOf(key)>-1}),t=tl.filter(function(x){return x.n.toLowerCase().indexOf(key)>-1});
  f.forEach(function(x){usedF[x.n]=1});t.forEach(function(x){usedT[x.n]=1});
  var gf=!f.length&&fl.length>0,gt=!t.length&&tl.length>0;
  var keys=l.cos.map(function(q){return q.split(' (')[0].split(' ')[0].toLowerCase()}),own=function(x){return keys.some(function(k){return x.n.toLowerCase().indexOf(k)>-1})},cf=fl.filter(function(x){return !own(x)}),ct=tl.filter(function(x){return !own(x)});
  if(gf&&cf.length){f=[cf[0]];usedF[cf[0].n]=1}else gf=false;if(gt&&ct.length){t=[ct[0]];usedT[ct[0].n]=1}else gt=false;
  var n=Math.max(1,f.length,t.length),rows='';
  for(var i=0;i<n;i++)rows+='<div class="cl"><span class="ci">🟢</span><div><small>Board in '+A.he+', '+A.c+'</small>'+stBit(f[i]||(i?null:f[0]),nm,A.he,A.en,gf)+'</div></div><div class="cl"><span class="ci">🔴</span><div><small>Get off in '+B.he+', '+B.c+'</small>'+stBit(t[i]||(i?null:t[0]),nm,B.he,B.en,gt)+'</div></div>';
  return '<div class="cocard"><div class="cohead"><span class="cobus">🚌</span><b><bdi>'+nm+'</bdi></b>'+(/verif/i.test(c)?'<span class="cov">Verify</span>':'')+'</div>'+rows+'</div>'}).join('');
 var rf=fl.filter(function(x){return !usedF[x.n]}),rt=tl.filter(function(x){return !usedT[x.n]});
 var gen=(rf.length||rt.length)?'<div class="cocard gen"><div class="cohead"><span class="cobus">📍</span><b>More stops on the line</b></div>'+(rf.length?'<div class="cl"><span class="ci">🟢</span><div><small>More stops in '+A.he+', '+A.c+'</small>'+rf.map(function(x){return stBit(x,'',A.he,A.en)}).join('<br>')+'</div></div>':'')+(rt.length?'<div class="cl"><span class="ci">🔴</span><div><small>More stops in '+B.he+', '+B.c+'</small>'+rt.map(function(x){return stBit(x,'',B.he,B.en)}).join('<br>')+'</div></div>':'')+'</div>':'';
 return '<div class="cocards">'+cards+gen+'</div>';
}
function coStations(l,list,city,en){
 var used={},rows=l.cos.map(function(c){var nm=c.split(' (')[0],key=nm.split(' ')[0].toLowerCase(),found=list.filter(function(x){return x.n.toLowerCase().indexOf(key)>-1});
  found.forEach(function(x){used[x.n]=1});
  if(found.length)return found.map(function(x){return '<li><b>'+nm+'</b> · '+(function(t){t=t.replace(/^.*?,\s*/,'');return t.toLowerCase()===nm.toLowerCase()?'Company station':t})(x.n)+' <a href="'+mapq(x.code,en)+'" target="_blank" rel="noopener">Map</a></li>'}).join('');
  return '<li><b>'+nm+'</b> · Company office/station in '+city+' (verify on site) <a href="'+mapq(nm+' bus',en)+'" target="_blank" rel="noopener">Map</a></li>'}).join('');
 var rest=list.filter(function(x){return !used[x.n]}).map(function(x){return '<li>'+x.n+' <a href="'+mapq(x.code,en)+'" target="_blank" rel="noopener">Map</a></li>'}).join('');
 return '<ul class="st">'+rows+rest+'</ul>';
}
function stList(list,city){return '<ul class="st">'+list.map(function(x){return '<li>'+x.n+' <a href="'+mapq(x.code,city)+'" target="_blank" rel="noopener">Map</a></li>'}).join('')+'</ul>'}
function openPop(id){
 var l=LEGS.filter(function(x){return x.id===id})[0];if(!l)return;
 var from=l.a;
 if(state.mode==='trip'){var cur=state.trip[state.trip.length-1];
  if(l.a===cur||l.b===cur)from=cur;else if(NODES[l.b].c===NODES[cur].c)from=l.b;else if(NODES[l.a].c===NODES[cur].c)from=l.a}
 state.pop={kind:'leg',id:id,from:from};renderPop();revealInfo();
}
function renderPop(){
 var p=$('#pop');if(!p)return;
 if(!state.pop){p.hidden=true;p.innerHTML='';return}
 if(state.pop.kind==='arrNode'||state.pop.kind==='arrBorder'){renderArrival(p);return}
 var l=legById(state.pop.id),fk=state.pop.from,rev=fk!==l.a,A=NODES[fk];
 var cur=state.mode==='trip'?state.trip[state.trip.length-1]:null;
 var h='<div class="pophd"><div><div class="lab">'+(l.border?'Border crossing · '+l.border.pair:'Internal segment, no border')+'</div><h3>Line details</h3></div><button class="btn" id="popx">Back ←</button></div>';
 h+=busCard(l,fk,'')+legExtra(l);
 if(l.border&&state.mode==='trip')h+='<div class="actions"><button class="btn" id="popbd">🎒 Move the backpacker to this border</button></div>';
 if(cur&&(l.a===cur||l.b===cur))h+='<div class="actions"><button class="btn primary" id="pophop">Continue to '+NODES[cur===l.a?l.b:l.a].he+' ←</button></div>';
 else if(cur)h+='<div class="actions"><button class="btn primary" id="poproute">Route from '+NODES[cur].he+' to '+A.he+' ←</button></div>';
 p.innerHTML=h;p.hidden=false;
 $('#popx').addEventListener('click',function(){state.pop=defaultPop();renderPop()});
 var bd=$('#popbd');if(bd)bd.addEventListener('click',function(){dropOnBorder(l.id)});
 var b1=$('#pophop');if(b1)b1.addEventListener('click',function(){hop(cur===l.a?l.b:l.a)});
 var b2=$('#poproute');if(b2)b2.addEventListener('click',function(){state.mode='p2p';state.from=cur;state.to=fk;state.view='fit';render()});
}
function drawMap(o){
 $('#mapslot').innerHTML=svgHTML(o||{})
  +'<div class="legend"><span><i></i>City</span><span>🚩 Border crossing</span><span>🎒 You</span></div>'
  +'<div class="regnav" role="group" aria-label="Navigate to regions"><button class="btn" data-reg="north">⬆ North</button><button class="btn" data-reg="west">⬅ West</button><button class="btn" data-reg="east">East ➡</button><button class="btn" data-reg="south">⬇ South</button><button class="btn" data-reg="all">🌍 All Africa</button></div><div class="mapctl"><button class="btn" data-z="in" aria-label="Zoom in">+</button><button class="btn" data-z="out" aria-label="Zoom out">−</button><button class="btn" data-z="reg">Region</button><button class="btn" data-z="all">All</button></div><span class="readout" id="rd">Drag the backpacker to a city or border · scroll wheel to zoom</span>'
  +'<div class="mapcap">Map of Africa with real continents and country borders. The backpacker is you: drag it to a city or a border (purple circle with the names of the two countries). On every arrival, all the information appears below the map: buses, prices, times, stations and borders to continue. Clicking a country name opens all of its borders. Positions of crowded cities are shifted slightly so they are visible. Clicking a city selects it.</div>';
 wireMap();animatePack();
}
function wireMap(){
 var s=svgEl();if(!s)return;scaleMap(s);var drag=null;
 s.addEventListener('pointerdown',function(e){if(e.button>0)return;dragMoved=false;drag={x:e.clientX,y:e.clientY,v:{x:vb.x,y:vb.y,w:vb.w},moved:false,id:e.pointerId}});
 s.addEventListener('pointermove',function(e){
  if(drag){
   var dx=e.clientX-drag.x,dy=e.clientY-drag.y;
   if(!drag.moved){if(Math.hypot(dx,dy)<6)return;if(e.pointerType==='touch'&&vb.w>=FULL.w-.5){drag=null;return}drag.moved=true;s.classList.add('drag');try{s.setPointerCapture(drag.id)}catch(_){}}
   var k=drag.v.w/s.getBoundingClientRect().width;manual=true;setVB({x:drag.v.x-dx*k,y:drag.v.y-dy*k,w:drag.v.w});return;
  }
  var t=e.target,rd=$('#rd');if(!rd)return;
  var kk=t.getAttribute&&t.getAttribute('data-k');
  if(kk&&NODES[kk]){rd.textContent=NODES[kk].he+' · '+NODES[kk].c;return}
  var p=toMap(s,e.clientX,e.clientY);var la=84-p.y/5,lo=p.x/5-180;rd.textContent=Math.abs(la).toFixed(1)+'°'+(la<0?'S':'N')+', '+Math.abs(lo).toFixed(1)+'°'+(lo<0?'W':'E');
 });
 var up=function(){if(drag&&drag.moved)dragMoved=true;drag=null;s.classList.remove('drag')};
 s.addEventListener('pointerup',up);s.addEventListener('pointercancel',up);
 var ptrs={},pinch=null;
 s.addEventListener('pointerdown',function(e){ptrs[e.pointerId]={x:e.clientX,y:e.clientY};var ks=Object.keys(ptrs);if(ks.length===2){drag=null;s.classList.remove('drag');var a=ptrs[ks[0]],b=ptrs[ks[1]];pinch={d:Math.hypot(a.x-b.x,a.y-b.y)}}});
 s.addEventListener('pointermove',function(e){if(ptrs[e.pointerId])ptrs[e.pointerId]={x:e.clientX,y:e.clientY};if(!pinch)return;var ks=Object.keys(ptrs);if(ks.length!==2)return;var a=ptrs[ks[0]],b=ptrs[ks[1]],d=Math.hypot(a.x-b.x,a.y-b.y);if(d>0&&pinch.d>0){var m=toMap(s,(a.x+b.x)/2,(a.y+b.y)/2);zoomAt(Math.max(.5,Math.min(2,pinch.d/d)),m.x,m.y);pinch.d=d;dragMoved=true}});
 var pe=function(e){delete ptrs[e.pointerId];if(Object.keys(ptrs).length<2)pinch=null};
 s.addEventListener('pointerup',pe);s.addEventListener('pointercancel',pe);
 s.addEventListener('dblclick',function(e){var p=toMap(s,e.clientX,e.clientY);zoomAt(.6,p.x,p.y)});
 s.addEventListener('wheel',function(e){e.preventDefault();var p=toMap(s,e.clientX,e.clientY);zoomAt(Math.max(.7,Math.min(1.4,Math.exp(e.deltaY*.0012))),p.x,p.y)},{passive:false});
var pk=s.querySelector('.pack');
 if(pk)pk.addEventListener('pointerdown',function(e){
  e.stopPropagation();e.preventDefault();pk.classList.add('lift');try{pk.setPointerCapture(e.pointerId)}catch(_){}
  var near=function(p,k){var best=null,bd=40*k;
   s.querySelectorAll('.node').forEach(function(c){var x=+c.getAttribute('cx'),y=+c.getAttribute('cy'),d=Math.hypot(x-p.x,y-p.y);if(d<bd){bd=d;best={key:c.getAttribute('data-k'),kind:'n',x:x,y:y,el:c}}});
   s.querySelectorAll('.mark').forEach(function(c){var x=+c.dataset.x,y=+c.dataset.y,d=Math.hypot(x-p.x,y-p.y-12*k);if(d<bd){bd=d;best={key:c.getAttribute('data-leg'),kind:'b',x:x,y:y,el:c}}});
   return best};
  var lastSnap=null;
  var mv=function(ev){
   var r=s.getBoundingClientRect(),fx=(ev.clientX-r.left)/r.width,fy=(ev.clientY-r.top)/r.height,sx=0,sy=0,e=.07;
   if(fx<e)sx=-1;else if(fx>1-e)sx=1;if(fy<e)sy=-1;else if(fy>1-e)sy=1;
   if(sx||sy){manual=true;setVB({x:vb.x+sx*vb.w*.012,y:vb.y+sy*vb.w*.012,w:vb.w})}
   var p=toMap(s,ev.clientX,ev.clientY),k=vb.w/r.width,t=near(p,k);
   if(lastSnap&&(!t||t.el!==lastSnap))lastSnap.classList.remove('snap');
   if(t){t.el.classList.add('snap');lastSnap=t.el;pk.classList.add('snapping');p={x:t.x,y:t.y}}else{lastSnap=null;pk.classList.remove('snapping')}
   pk.setAttribute('transform','translate('+p.x+' '+(t?p.y:p.y)+') scale('+(k*0.9)+')')};
  var fin=function(ev){
   pk.removeEventListener('pointermove',mv);pk.removeEventListener('pointerup',fin);pk.removeEventListener('pointercancel',fin);pk.classList.remove('lift','snapping');
   var p=toMap(s,ev.clientX,ev.clientY),k=vb.w/s.getBoundingClientRect().width,t=near(p,k);
   if(lastSnap)lastSnap.classList.remove('snap');
   if(t){lastPack={x:t.x,y:t.y};noAuto=true;try{if(t.kind==='b')dropOnBorder(t.key);else dropOn(t.key)}finally{noAuto=false}}
   else{lastPack={x:p.x,y:p.y};scaleMap(s)}
  };
  pk.addEventListener('pointermove',mv);pk.addEventListener('pointerup',fin);pk.addEventListener('pointercancel',fin);mv(e);
 });
 document.querySelectorAll('#mapslot [data-z]').forEach(function(b){b.addEventListener('click',function(){
  var z=b.dataset.z,cx=vb.x+vb.w/2,cy=vb.y+vb.h/2;
  if(z==='in')zoomAt(.7,cx,cy);else if(z==='out')zoomAt(1.4,cx,cy);else if(z==='all'){manual=false;setView('all')}else{manual=false;setView(state.region)}
 })});
}

/* controls */
function cityOptions(){
 return Object.keys(NODES).filter(function(k){return NODES[k].r===state.region&&(state.danger||!NODES[k].d)})
  .map(function(k){return '<option value="'+k+'">'+NODES[k].he+' · '+NODES[k].c+'</option>'}).join('');
}
function resolvePlace(txt){
 txt=(txt||'').trim().toLowerCase();if(!txt)return null;
 var ks=Object.keys(NODES).filter(function(k){return state.danger||!NODES[k].d});
 var nm=function(k){return (NODES[k].he+' · '+NODES[k].c).toLowerCase()};
 var f=ks.filter(function(k){return nm(k)===txt||NODES[k].he.toLowerCase()===txt||NODES[k].en.toLowerCase()===txt});
 if(f.length)return f[0];
 var cs=ks.filter(function(k){return shortC(NODES[k].c).toLowerCase()===txt||NODES[k].c.toLowerCase()===txt});
 if(cs.length){var m=cs.filter(function(k){return NODES[k].m});return (m[0]||cs[0])}
 f=ks.filter(function(k){return NODES[k].he.toLowerCase().indexOf(txt)>-1||NODES[k].en.toLowerCase().indexOf(txt)>-1});
 if(f.length)return f[0];
 cs=ks.filter(function(k){return NODES[k].c.toLowerCase().indexOf(txt)>-1});
 if(cs.length){var m2=cs.filter(function(k){return NODES[k].m});return (m2[0]||cs[0])}
 return null;
}
function placeLabel(k){return NODES[k].he+' · '+NODES[k].c}
function selOpts(sel,blank){
 var by={};Object.keys(NODES).filter(function(k){return state.danger||!NODES[k].d}).forEach(function(k){var c=shortC(NODES[k].c);(by[c]=by[c]||[]).push(k)});
 return (blank?'<option value="">— Choose destination —</option>':'')+Object.keys(by).sort().map(function(c){return '<optgroup label="'+c+'">'+by[c].map(function(k){return '<option value="'+k+'"'+(k===sel?' selected':'')+'>'+NODES[k].he+'</option>'}).join('')+'</optgroup>'}).join('');
}
function cleanVerify(root){
 if(!root||root._cl)return;root._cl=true;
 try{
  var w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT),ns=[],n;while(n=w.nextNode())if(/verif|street unknown/i.test(n.nodeValue))ns.push(n);
  ns.forEach(function(t){var v=t.nodeValue.replace(/[^.]*(?:not (?:been )?verified|no verified)[^.]*\.?/gi,'').replace(/\s*[·,]?\s*street unknown/gi,'').replace(/\s*\([^()]*verif[^()]*\)/gi,'').replace(/\s*[:,·]?\s*verify(?: (?:on site|at the station|in advance|before (?:you )?travel(?:ing)?|that the company departs from))?/gi,'');t.nodeValue=v;
   var el=t.parentElement;if(el&&!v.trim()&&/(chip|tag|cov|co)\b/.test(el.className||'')&&el.children.length===0)el.style.display='none'});
 }catch(e){}
 root._cl=false;
}
['pop','side'].forEach(function(id){var el=document.getElementById(id);if(!el)return;var t=null;new MutationObserver(function(){clearTimeout(t);t=setTimeout(function(){cleanVerify(el)},0)}).observe(el,{childList:true,subtree:true})});
function renderCtl(){
 var fk=state.mode==='trip'?state.trip[0]:state.from,tk=state.mode==='trip'?'':state.to;
 $('#ctl').innerHTML='<div class="od"><label class="odf"><span>🟢 From</span><select id="fromI">'+selOpts(fk,false)+'</select></label>'
  +'<button class="swap" id="swap" aria-label="Swap direction" title="Swap direction">⇄</button>'
  +'<label class="odf"><span>🔴 To</span><select id="toI">'+selOpts(tk,true)+'</select></label>'
  +'<button class="btn" id="undo" title="Step back">↩</button><button class="btn" id="reset" title="Start over">⟲</button></div><div class="odmsg" id="odmsg" role="status"></div>';
 var go=function(){
  var f=$('#fromI').value,t=$('#toI').value;
  manual=false;state.atB=null;state.region=NODES[f].r;state.view='fit';
  if(t&&t!==f){state.mode='p2p';state.from=f;state.to=t}else{state.mode='trip';state.trip=[f]}
  render();
 };
 $('#fromI').addEventListener('change',go);$('#toI').addEventListener('change',go);
 $('#swap').addEventListener('click',function(){var a=$('#fromI').value;$('#fromI').value=$('#toI').value||a;if($('#toI').value||true){$('#toI').value=a}go()});
 $('#undo').addEventListener('click',function(){if(state.mode==='trip'&&state.trip.length>1){state.trip.pop();render()}});
 $('#reset').addEventListener('click',function(){state.atB=null;state.mode='trip';state.trip=[fk];state.view='fit';manual=false;render()});
}

/* trip mode */
function tripStats(seq){
 var hrs=0,br=0,cs=[];
 for(var i=0;i<seq.length-1;i++){var l=legBetween(seq[i],seq[i+1]);hrs+=mid(l);if(l.border)br++}
 seq.forEach(function(k){var c=NODES[k].c;if(cs.indexOf(c)<0)cs.push(c)});
 return {hrs:hrs,br:br,cs:cs};
}
function statsHTML(s,legs){
 return '<div class="stats"><div class="stat"><span>LEGS</span><strong>'+legs+'</strong></div><div class="stat"><span>BORDERS</span><strong>'+s.br+'</strong></div><div class="stat"><span>HOURS</span><strong>~'+Math.round(s.hrs)+'</strong></div><div class="stat"><span>COUNTRIES</span><strong>'+s.cs.length+'</strong></div></div>';
}
function trailHTML(seq,curIdx){
 var h='<ol class="trail">';
 seq.forEach(function(k,i){
  h+='<li class="tcity'+(i===curIdx?' cur':'')+'"><span class="dot"></span><h3>'+NODES[k].he+'</h3><small>'+NODES[k].c+'</small></li>';
  if(i<seq.length-1){
   var l=legBetween(k,seq[i+1]);
   h+='<li class="trow"><div class="rail'+(l.border?'':' dom')+'"></div><div class="tleg"><div class="tlegtop">'+stampHTML(l)+chipsHTML(l)+'</div>'+cosHTML(l)+'<details class="more"><summary>Stations, steps and tips</summary>'+detail(l,k)+'</details></div></li>';
  }
 });
 return h+'</ol>';
}
function optHTML(e,from){
 var l=e.leg,B=NODES[e.to];
 return '<article class="opt'+(l.border?' border':'')+(l.danger?' dg':'')+'"><div class="opthead"><h4>'+B.he+' <small>'+B.c+'</small></h4>'+stampHTML(l)+'</div>'+chipsHTML(l)+cosHTML(l)+nextLine(e.to,state.trip.concat([e.to]))
  +'<div class="actions"><button class="btn" data-how="'+l.id+'">How to get there? Stations and steps</button><button class="btn primary" data-hop="'+e.to+'">Continue to '+B.he+' ←</button></div></article>';
}
function renderTrip(){
 var seq=state.trip,cur=seq[seq.length-1],here=NODES[cur];
 var s=tripStats(seq),side='';
 var all=G[cur]||[],hid=all.filter(function(e){return e.leg.danger&&!state.danger&&seq.indexOf(e.to)<0}).length;
 var o=onward(cur,seq);
 var on={},nodes={},nextIds={},opts={};
 for(var i=0;i<seq.length-1;i++){on[legBetween(seq[i],seq[i+1]).id]=1}
 seq.forEach(function(k){nodes[k]=1});
 o.forEach(function(e){nextIds[e.leg.id]=1;opts[e.to]=1});
 if(manual){var cn0=NODES[cur],pp=state.atB?bpt(legById(state.atB)):[X(cn0.lo),Y(cn0.la)];keepPack(pp[0],pp[1]);var okeys=Object.keys(opts),inside=okeys.filter(function(q){var n=NODES[q],x=X(n.lo),y=Y(n.la);return x>vb.x&&x<vb.x+vb.w&&y>vb.y&&y<vb.y+vb.h}).length;var ppu=(svgEl().getBoundingClientRect().width||900)/vb.w,near=okeys.reduce(function(m,q){var n=NODES[q];return Math.min(m,Math.hypot(X(n.lo)-pp[0],Y(n.la)-pp[1])*ppu)},1e9);if(false)fitSpread([cur].concat(nearestKeys(cur,okeys,5)))}else if(state.view==='fit')fitSpread([cur].concat(seq.slice(-2),nearestKeys(cur,Object.keys(opts),5)));else setView(state.region);
 drawMap({on:on,nodes:nodes,nextIds:nextIds,opts:opts,here:cur,focus:true,country:here.c,packAt:state.atB?bpt(legById(state.atB)):null});

 side+='<div class="here-card"><div class="lab">YOU ARE HERE</div><div class="herecard">'+packIcon(44)+'<div><h2>'+here.he+'</h2><p class="sm">'+here.c+(VMAP[here.c]?' · Entry: '+VMAP[here.c][1]:'')+'</p></div></div></div>';
 side+=reachHTML(cur);
 if(false)side+='<p class="hiddenn">'+hid+' more lines from here are hidden because they are marked as dangerous. You can show them with the checkbox above.</p>';
 $('#side').innerHTML=side;
 $('#side').querySelectorAll('[data-go]').forEach(function(b){b.addEventListener('click',function(){state.mode='p2p';state.from=cur;state.to=b.dataset.go;render();$('#board').scrollIntoView({behavior:'smooth'})})});
 $('#side').querySelectorAll('[data-how]').forEach(function(b){b.addEventListener('click',function(){openPop(b.dataset.how);var p=$('#pop');if(p&&p.scrollIntoView)p.scrollIntoView({behavior:'smooth',block:'nearest'})})});
 $('#side').querySelectorAll('[data-hop]').forEach(function(b){b.addEventListener('click',function(){hop(b.dataset.hop)})});
}
function reachHTML(k){
 var dist={},q=[k],list=[];dist[k]=0;
 while(q.length){var u=q.shift();edgesOf(u).forEach(function(e){if(dist[e.to]===undefined){dist[e.to]=dist[u]+1;q.push(e.to);list.push(e.to)}})}
 if(!list.length)return '';
 var cs={};list.forEach(function(t){cs[NODES[t].c]=1});
 var by={};list.forEach(function(t){(by[dist[t]]=by[dist[t]]||[]).push(t)});
 var h='<details class="more"><summary>All destinations you can reach from '+NODES[k].he+' ('+list.length+' cities, '+Object.keys(cs).length+' countries)</summary><div class="reach">';
 Object.keys(by).forEach(function(d){h+='<div class="hp">'+d+' '+(d==='1'?'leg':'legs')+'</div>'+by[d].map(function(t){return '<button data-go="'+t+'">'+NODES[t].he+' · '+NODES[t].c+'</button>'}).join('')});
 return h+'</div></details>';
}
function hop(k){manual=true;state.atB=null;state.trip.push(k);state.view='fit';render();var c=document.querySelector('.here-card');if(c)c.scrollIntoView({behavior:'smooth',block:'start'})}

/* point to point */
function renderP2P(){
 var f=state.from,t=state.to,side='';
 if(f===t){setView(state.region);drawMap({});$('#side').innerHTML='<div class="gap">Choose two different cities.</div>';return}
 var seq=path(f,t);
 if(!seq){
  setView(state.region);drawMap({});
  $('#side').innerHTML='<div class="gap"><b>There is no continuous overland line between the two cities in the database.</b><br>Try other cities in the same region, or also show dangerous lines if relevant. There is no overland line in the database between East and West Africa.</div>';
  return;
 }
 var s=tripStats(seq),on={},nodes={};
 for(var i=0;i<seq.length-1;i++)on[legBetween(seq[i],seq[i+1]).id]=1;
 seq.forEach(function(k){nodes[k]=1});
 fitKeys(seq,140);drawMap({on:on,nextIds:on,nodes:nodes,here:t,pack:f,focus:true});
 side+=statsHTML(s,seq.length-1);
 side+='<div class="alert warn"><b>Visas on the route:</b><span>'+s.cs.map(function(c){var v=VMAP[c];return c+(v?' ('+v[1]+')':'')}).join(' · ')+'</span></div>';

 for(var q=0;q<seq.length-1;q++){var lg=legBetween(seq[q],seq[q+1]);side+=busCard(lg,seq[q],'');}
 var o=onward(t,seq);
 side+='<div class="sec-h"><h3>And after '+NODES[t].he+'?</h3></div>';
 if(o.length){
  side+='<div class="opts">'+o.map(function(e){
   var l=e.leg;return '<article class="opt'+(l.border?' border':'')+'"><div class="opthead"><h4>'+NODES[e.to].he+' <small>'+NODES[e.to].c+'</small></h4>'+stampHTML(l)+'</div>'+chipsHTML(l)+'</article>'}).join('')+'</div>'
   +'<div class="actions"><button class="btn primary" id="cont">Continue building a trip from '+NODES[t].he+' ←</button></div>';
 }else side+='<div class="gap">No onward route from here in the database.</div>';
 $('#side').innerHTML=side;
 var c=$('#cont');if(c)c.addEventListener('click',function(){state.trip=seq.slice();setMode('trip')});
}

function render(){
 try{if(typeof wxUpdate==='function')setTimeout(wxUpdate,0)}catch(e){}
 if(state.keep)state.keep=false;else state.pop=null;
 if(!state.pop)state.pop=defaultPop();
 renderPop();
 renderCtl();
 var ap=$('#app');if(ap)ap.classList.toggle('p2p',state.mode==='p2p');
 if(state.mode==='trip')renderTrip();else renderP2P();
 $('#m-trip').setAttribute('aria-selected',state.mode==='trip');$('#m-p2p').setAttribute('aria-selected',state.mode==='p2p');
 $('#r-east').setAttribute('aria-selected',state.region==='east');$('#r-west').setAttribute('aria-selected',state.region==='west');
 try{updateRouteBar()}catch(e){}
}
function setMode(m){state.atB=null;state.mode=m;if(m==='p2p'){var t=state.trip;if(t.length>1){state.from=t[0];state.to=t[t.length-1]}}render()}
function setRegion(r){manual=false;state.atB=null;state.region=r;state.view='region';state.trip=[DEF[r][0]];state.from=DEF[r][0];state.to=DEF[r][1];render()}
document.querySelectorAll('[data-m]').forEach(function(b){b.addEventListener('click',function(){setMode(b.dataset.m)})});
document.querySelectorAll('[data-r]').forEach(function(b){b.addEventListener('click',function(){setRegion(b.dataset.r)})});
$('#dng').addEventListener('change',function(e){
 state.danger=e.target.checked;
 if(!state.danger){state.trip=state.trip.filter(function(k){return !NODES[k].d});if(!state.trip.length)state.trip=[DEF[state.region][0]];
  if(NODES[state.from].d)state.from=DEF[state.region][0];if(NODES[state.to].d)state.to=DEF[state.region][1]}
 render();
});
$('#mapslot').addEventListener('click',function(e){
 if(dragMoved){dragMoved=false;return}
 var tl=e.target.closest&&e.target.closest('[data-leg]'),lg=tl&&tl.getAttribute('data-leg');if(lg){dropOnBorder(lg);return}
 var cn=e.target.getAttribute&&e.target.getAttribute('data-cn');if(cn){goToCountry(cn);return}
 var k=e.target.getAttribute&&e.target.getAttribute('data-k');if(!k)return;pick(k);
});
$('#mapslot').addEventListener('keydown',function(e){
 if(e.key!=='Enter'&&e.key!==' ')return;var tl=e.target.closest&&e.target.closest('[data-leg]'),lg=tl&&tl.getAttribute('data-leg');if(lg){e.preventDefault();dropOnBorder(lg);return}var k=e.target.getAttribute&&e.target.getAttribute('data-k');if(!k)return;e.preventDefault();pick(k);
});
function pick(k){manual=true;
 if(state.mode==='trip'){goTo(k)
 }else{state.to=k;state.view='fit';render()}
}

(function(){var cs={};LEGS.forEach(function(l){if(l.border)l.border.pair.split(' ⇄ ').forEach(function(c){cs[c]=1})});
 var nb=LEGS.filter(function(l){return l.border}).length,cc={};Object.keys(NODES).forEach(function(k){cc[NODES[k].c]=1});
 $('#netstat').innerHTML='<span class="chip">'+nb+' border crossings</span><span class="chip">'+LEGS.length+' bus lines</span><span class="chip">'+Object.keys(NODES).length+' cities</span><span class="chip">'+Object.keys(cc).length+' countries</span>'})();
$('#heropack').innerHTML=packIcon(150);
(function(){var jc={};Object.keys(NODES).forEach(function(k){if(!NODES[k].d)jc[shortC(NODES[k].c)]=1});
 var sel=document.createElement('select');sel.id='jump';sel.setAttribute('aria-label','Jump to country');
 sel.innerHTML='<option value="">🧭 Jump to country…</option>'+Object.keys(jc).sort().map(function(c){return '<option>'+c+'</option>'}).join('');
 sel.addEventListener('change',function(){if(sel.value){goToCountry(sel.value);sel.value=''}});
 var ctl=$('#ctl');ctl.parentNode.insertBefore(sel,ctl.nextSibling)})();


/* inline steps & tips with close */
document.addEventListener('click',function(ev){var b=ev.target.closest&&ev.target.closest('.tk button[data-pl]');if(!b)return;
 ev.stopImmediatePropagation();ev.preventDefault();
 var tk=b.closest('.tk'),ex=tk.querySelector('.stips');if(ex){ex.remove();b.setAttribute('aria-expanded','false');return}
 var l=LEGS.filter(function(x){return x.id===b.dataset.pl})[0];if(!l)return;
 var d=document.createElement('div');d.className='stips';d.setAttribute('role','region');d.setAttribute('aria-label','Steps and tips');
 d.innerHTML='<button type="button" class="sx" aria-label="Close steps and tips">✕ Close</button><h6>Steps</h6><ol>'+l.steps.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ol><h6>Tips</h6><ul>'+l.tips.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>';
 d.querySelector('.sx').addEventListener('click',function(){d.remove();b.setAttribute('aria-expanded','false');b.focus()});
 var ac=tk.querySelector('.actions');ac.parentNode.insertBefore(d,ac);b.setAttribute('aria-expanded','true');
},true);
/* weather */
var WXC={0:'Clear sky ☀️',1:'Mostly clear 🌤',2:'Partly cloudy ⛅',3:'Cloudy ☁️',45:'Fog 🌫',48:'Fog 🌫',51:'Drizzle 🌦',53:'Drizzle 🌦',55:'Drizzle 🌦',61:'Light rain 🌧',63:'Rain 🌧',65:'Heavy rain 🌧',80:'Showers 🌦',81:'Showers 🌧',82:'Heavy showers ⛈',95:'Thunderstorm ⛈',96:'Thunderstorm ⛈',99:'Thunderstorm ⛈'};
var wxKey=null;
function wxHere(){return state.mode==='trip'?state.trip[state.trip.length-1]:state.from}
function wxUpdate(){var k=wxHere(),n=NODES[k];if(!n||!$('#wx'))return;
 if(wxKey===k)return;wxKey=k;
 $('#wxt').textContent=n.he+':';$('#wxs').textContent='';$('#wxb').textContent='Loading…';
 try{var ctl=window.AbortController?new AbortController():null,tm=setTimeout(function(){ctl&&ctl.abort()},8000);
  fetch('https://api.open-meteo.com/v1/forecast?latitude='+n.la+'&longitude='+n.lo+'&current=temperature_2m,weather_code&daily=precipitation_probability_max,temperature_2m_max,temperature_2m_min&forecast_days=3&timezone=auto',ctl?{signal:ctl.signal}:{})
  .then(function(r){if(!r.ok)throw 0;return r.json()}).then(function(d){clearTimeout(tm);if(wxKey!==k)return;
   var c=d.current,y=d.daily;$('#wxb').textContent=Math.round(c.temperature_2m)+'°C · '+(WXC[c.weather_code]||'');
   $('#wxs').textContent='Tomorrow: '+Math.round(y.temperature_2m_min[1])+'–'+Math.round(y.temperature_2m_max[1])+'° · chance of rain '+y.precipitation_probability_max[1]+'%'})
  .catch(function(){if(wxKey===k)$('#wxb').textContent='Weather not available right now'})}catch(e){$('#wxb').textContent='Weather not available right now'}}
render();
/* ===== route save / share ===== */
function routeSeq(){var s=state.mode==='trip'?state.trip.slice():(state.from!==state.to?path(state.from,state.to):null);return s&&s.length>1?s:null}
function cleanCo(c){return c.replace(/\s*\((?:verify|verified)[^)]*\)/gi,'').trim()}
function legDetail(l,fk,idx){
 var tmp=document.createElement('div');tmp.style.cssText='position:fixed;left:-9999px;top:0;width:600px;direction:ltr';
 tmp.innerHTML=busCard(l,fk,'');
 tmp.querySelectorAll('.actions,button,.stips,.mp').forEach(function(e){e.remove()});
 cleanVerify(tmp);
 var extra='';
 if(l.steps&&l.steps.length)extra+='<section class="tks"><h5>Steps</h5><ol>'+l.steps.map(function(x){return '<li>'+escH(x)+'</li>'}).join('')+'</ol></section>';
 if(l.tips&&l.tips.length)extra+='<section class="tks"><h5>Tips</h5><ul>'+l.tips.map(function(x){return '<li>'+escH(x)+'</li>'}).join('')+'</ul></section>';
 var ex=document.createElement('div');ex.innerHTML=extra;cleanVerify(ex);
 tmp.firstElementChild.appendChild(ex);
 document.body.appendChild(tmp);
 var secs=[].slice.call(tmp.querySelectorAll('.tks')).map(function(x){return x.innerText.replace(/[ \t]+\n/g,'\n').replace(/\n{2,}/g,'\n').trim()}).filter(function(x){return x.replace(/\s/g,'')&&x!==''});
 var html=tmp.firstElementChild.innerHTML;
 tmp.remove();
 var A=NODES[fk],B=NODES[fk===l.a?l.b:l.a];
 return {html:html,text:secs.join('\n\n'),title:A.he+' → '+B.he};
}
function routeData(seq){
 var legs=[],hrs=0,br=0;
 for(var i=0;i<seq.length-1;i++){
  var l=legBetween(seq[i],seq[i+1]);if(!l)continue;hrs+=mid(l);if(l.border)br++;
  legs.push(legDetail(l,seq[i],i));
 }
 return {legs:legs,hrs:Math.round(hrs),br:br,title:NODES[seq[0]].he+' → '+NODES[seq[seq.length-1]].he};
}
function routeText(d){
 var t='🚌 Mamba Africa: '+d.title+'\n'+d.legs.length+' legs · '+d.br+' borders · about '+d.hrs+' hours of travel\n';
 d.legs.forEach(function(l,i){t+='\n\n━━━━━━━━━━━━━━\nLeg '+(i+1)+': '+l.title+'\n━━━━━━━━━━━━━━\n'+l.text+'\n'});
 return t+'\nThe information is an estimate only. Always verify at the station.';
}
function escH(x){return String(x).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function routeHTML(d){
 var css='body{margin:0;background:#1A2410;color:#E6F4C8;font:17px/1.6 system-ui,Arial,sans-serif;padding:14px;max-width:760px;margin-inline:auto}h1{color:#FFB000;font-size:26px;margin:0 0 4px}.sum{color:#9BFF8A;margin-bottom:18px}.leg{margin:0 0 70px;padding-bottom:40px;border-bottom:6px double #FFB000}.leg:last-of-type{border-bottom:0}.lh{margin:0 0 14px;color:#fff;font-size:24px;background:#12160B;border-inline-start:8px solid #FFB000;padding:8px 12px}.lh span{color:#FFB000;margin-inline-end:8px}.bcard2{border:3px solid #6B7A3A;background:#0B120A;padding:12px;margin:0}.tp small{display:block}.tp b{display:block}.tks{padding:10px 4px;border-top:2px dashed #6B7A3A}.tks:first-child{border-top:0}h5{margin:0 0 8px;color:#FFB000;font-size:19px}.tp b{font-size:22px;color:#fff}.tp small,.cty{color:#9BFF8A}.tp{margin:6px 0}.rbn{color:#FF9A7A;font-weight:700}.chip{display:inline-block;border:1px dashed #9BFF8A;padding:0 8px;margin:2px}.cocard{border-inline-start:3px solid #FFB000;padding:2px 10px;margin:12px 0}.cohead b{color:#FFB000;font-size:18px}.cl{margin:6px 0}.cl small{display:block;color:#9BFF8A}.tinfo.c>div{border-bottom:1px dashed rgba(155,255,138,.4);padding:4px 0}.dot,.ci{display:inline-block}a{color:#9BFF8A}.f{color:#aaa;font-size:14px;margin-top:20px}';
 var h='<!doctype html><html lang="en" dir="ltr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+escH(d.title)+' | Mamba Africa</title><style>'+css+'</style></head><body><h1>🚌 '+escH(d.title)+'</h1><div class="sum">'+d.legs.length+' legs · '+d.br+' borders · about '+d.hrs+' hours of travel</div>';
 d.legs.forEach(function(l,i){h+='<section class="leg"><h2 class="lh"><span>Leg '+(i+1)+'</span> '+escH(l.title)+'</h2>'+l.html+'</section>'});
 return h+'<div class="f">Saved from the Mamba Africa website. The information is an estimate only, always verify at the station. This file works offline.</div></body></html>';
}
function fileSave(name,blob){
 return (window.claude&&claude.use?claude.use('downloads'):Promise.resolve(null)).then(function(dl){
  if(dl&&dl.save)return blob.arrayBuffer().then(function(buf){return dl.save({filename:name,data:new Uint8Array(buf)})});
  var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();
 });
}
function rbMsg(t){var m=document.getElementById('rbmsg');if(m){m.textContent=t;clearTimeout(rbMsg.t);rbMsg.t=setTimeout(function(){m.textContent=''},4000)}}
function slug(d){return 'mamba-'+d.title.replace(/[^\w]+/g,'-').slice(0,40)}
function updateRouteBar(){
 var bar=document.getElementById('routebar');if(!bar)return;var seq=routeSeq();
 if(!seq){bar.hidden=true;return}
 bar.hidden=false;
 if(!bar.dataset.ready){bar.dataset.ready='1';
  bar.innerHTML='<span class="rbt">Your route</span><button class="btn sm" id="rbsave">📥 Save for offline</button><button class="btn sm" id="rbshare">📤 Share</button><span id="rbmsg" role="status" aria-live="polite"></span>';
  document.getElementById('rbsave').addEventListener('click',function(){var s=routeSeq();if(!s)return;var d=routeData(s);
   fileSave(slug(d)+'.html',new Blob([routeHTML(d)],{type:'text/html'})).then(function(){rbMsg('Saved. Open the file on your phone, even without internet.')},function(){rbMsg('Saving was cancelled or is not supported here.')})});
  document.getElementById('rbshare').addEventListener('click',function(){var s=routeSeq();if(!s)return;var t=routeText(routeData(s));
   if(navigator.share){navigator.share({text:t}).catch(function(){})}
   else if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){rbMsg('Text copied. Paste it into WhatsApp.')},function(){rbMsg('Could not copy.')})}
   else rbMsg('Sharing is not supported in this browser.')});
 }
}


(function(){var e=document.getElementById('dosclk');if(!e)return;var D=['SUN','MON','TUE','WED','THU','FRI','SAT'];function z(n){return (n<10?'0':'')+n}
function t(){var d=new Date();e.textContent=(window.innerWidth<560?'':D[d.getDay()]+' '+z(d.getDate())+'-'+z(d.getMonth()+1)+'-'+d.getFullYear()+' ')+z(d.getHours())+':'+z(d.getMinutes())}t();setInterval(t,30000)})();

})();

/* ===== Accessibility and final initialization ===== */

(function(){var R=document.documentElement,fab=document.getElementById('a11yfab'),pn=document.getElementById('a11ypanel'),K='gvul-a11y',st={};
function sv(){try{localStorage.setItem(K,JSON.stringify(st))}catch(e){}}
function ap(){['big','bigger','contrast','gray','links','font','still'].forEach(function(k){R.classList.toggle('a11y-'+k,!!st[k]);var b=pn.querySelector('[data-a="'+k+'"]');if(b)b.setAttribute('aria-pressed',!!st[k])})}
try{st=JSON.parse(localStorage.getItem(K)||'{}')||{}}catch(e){st={}}ap();
function op(o){pn.hidden=!o;fab.setAttribute('aria-expanded',o);if(o)pn.querySelector('button').focus();else fab.focus()}
fab.onclick=function(){op(pn.hidden)};document.getElementById('a11yclose').onclick=function(){op(false)};
var sb=document.getElementById('a11ystmt');if(sb)sb.onclick=function(){op(true);var h=document.getElementById('a11yst');if(h){h.setAttribute('tabindex','-1');h.focus();h.scrollIntoView()}};
pn.addEventListener('keydown',function(e){if(e.key==='Escape')op(false)});
pn.querySelectorAll('[data-a]').forEach(function(b){b.onclick=function(){var k=b.dataset.a;st[k]=!st[k];if(k==='big'&&st[k])st.bigger=false;if(k==='bigger'&&st[k])st.big=false;ap();sv()}});
document.getElementById('a11yreset').onclick=function(){st={};ap();sv()};
if(window.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches&&st.still===undefined){st.still=true;ap()}
})();
