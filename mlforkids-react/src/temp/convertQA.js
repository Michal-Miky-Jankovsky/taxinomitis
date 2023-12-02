const origJson = {

    "PROJECTS": {
        "TITLE": "Otázky k projektu",
        "Q4": "Které modely strojového učení jsou trénovány na vašem počítači a které v cloudu?",
        "Q4-A-1": "<strong>textové</strong> projekty lze trénovat pouze v cloudu.",
        "Q4-A-2": "projekty s <strong>čísly</strong> lze školit pouze v cloudu.",
        "Q4-A-3": "<strong>zvukové</strong> projekty lze trénovat pouze na počítači.",
        "Q4-A-4": "projekty <strong>obrázků</strong> lze trénovat pouze na počítači."
    },
    "SCRATCH": {
        "TITLE": "Problémy se Scratchem",
        "Q1": "Nevím, jak zprovoznit Scratch 2",
        "Q1-A-1": "Starší verze programu Scratch, Scratch 2, potřebuje ke své práci Adobe Flash, takže musíte používat operační systém a webový prohlížeč, který umí pracovat s Flashem.",
        "Q1-A-2": "Pokud si nejste jisti, jak povolit Flash, můžete <a href='https://github.com/IBM/taxinomitis-docs/raw/master/docs/pdf/machinelearningforkids-scratchx.pdf'>si stáhnout dokument s několika tipy pro zprovoznění aplikace Scratch</a>. Nebo můžete místo toho použít novou verzi programu Scratch, Scratch 3.",
        "Q2": "Nabídky \"Načíst projekt\" a \"Uložit projekt\" v aplikaci Scratch nefungují",
        "Q2-A-1": "Pokud používáte Safari v systému macOS a nabídky Scratch \"Soubor -&gt; Načíst projekt\" a \"Soubor -&gt; Uložit projekt\" nefungují, je možné, že pracujete v nouzovém režimu.",
        "Q2-A-2": "Postup pro kontrolu a opravu naleznete <a href='https://github.com/IBM/taxinomitis-docs/raw/master/docs/pdf/safari-scratch-safemode.pdf'>zde</a>.",
        "Q3": "Bloky klasifikátoru strojového učení v aplikaci Scratch 2 přestaly fungovat",
        "Q3-A-1": "Občas se může stát, že bloky Scratch pro váš model strojového učení ztratí spojení se serverem. V takovém případě přestanou vracet výsledky.",
        "Q3-A-2": "Zda se tak stalo, můžete zkontrolovat pomocí barevné kontrolky stavu v paletě \"Další bloky\".",
        "Q3-A-3": "Pokud je stavová kontrolka vedle bloků strojového učení Scratch červená, obvykle to znamená, že je něco špatně. Může se jednat o dočasný problém. Zkuste projekt uložit (pomocí \"Soubor\" -&gt; \"Uložit projekt\") a poté obnovte stránku prohlížeče. Pokud se po opětovném načtení stránky stavová kontrolka rozsvítí zeleně, můžete svůj projekt načíst (pomocí 'File' -&gt; 'Load Project') a pokračovat tam, kde jste skončili.",
        "Q3-A-4": "Pokud je stavová kontrolka po opětovném načtení stránky stále červená, je pravděpodobně něco v nepořádku s modelem strojového učení. Zkuste přejít na stránku \"Učení a testování\" projektu, kde lze nalézt všechna chybová hlášení o vašem modelu.",
        "Q3-A-5": "Pokud je stavová kontrolka vedle bloků strojového učení Scratch zelená, měly by bloky fungovat. Pokud od nich nedostáváte očekávané odpovědi, zkuste přejít na stránku \"Learn &amp; Test\" a zkontrolovat, jaké výsledky váš model vrací.",
        "Q5": "Mohu použít jakoukoli verzi Scratche?",
        "Q5-A-1": "Musíte používat verze programu Scratch, které poskytuje stránka Machine Learning for Kids. Spustíte je kliknutím na tlačítka Scratch nebo \"Scratch 3\" na stránce projektu.",
        "Q6": "Scratch 3 ukládá projekty pouze do složky \"Downloads\"",
        "Q6-A-1": "Když ve Scratchi 3 kliknete na \"Soubor\" -&gt; \"Uložit do počítače\", projekt Scratch se uloží do počítače.",
        "Q6-A-2": "Někteří učitelé hlásili problém, že se to ukládalo do složky Stažené soubory na počítači, kde studenti nemají ve Windows přístup do složky Stažené soubory. Výsledkem bylo, že studenti neměli přístup ke svým uloženým projektům.",
        "Q6-A-3": "Pokud máte tento problém, je třeba v nastavení webového prohlížeče vyhledat nastavení typu \"Před stažením se zeptat, kam uložit každý soubor\". Pokud toto nastavení povolíte, studenti si budou moci vybrat, kam se jejich projekty uloží."
    },
    "TRAININGUI": {
        "TITLE": "Problémy s uživatelským rozhraním při školení",
        "Q1": "Přetahování obrázků do školicích kbelíků (pro projekty obrázků) nefunguje",
        "Q1-A-1": "Pokud používáte prohlížeč Internet Explorer, přetahování obrázků do školicích kbelíků nefunguje.",
        "Q1-A-2": "Omlouváme se za to. Pokud můžete použít jiný prohlížeč, například Firefox nebo Chrome, udělejte to, prosím. V opačném případě můžete kliknout na tlačítko \"www\" a místo toho vložit adresu URL tréninkových obrázků."
    },
    "MODELS": {
        "TITLE": "Chyby při trénování modelů strojového učení",
        "Q1": "\"Žádné pověření Watsona nebylo vytvořeno\"",
        "Q1-A-1": "Modely strojového učení v nástroji jsou vytvářeny pomocí rozhraní API IBM Watson.",
        "Q1-A-2": "Pokud máte účet \"nespravované\" třídy, bude muset učitel nebo vedoucí skupiny zadat přihlašovací údaje k rozhraní Watson API od IBM Cloud, aby tato funkce fungovala. Pokyny krok za krokem, jak to mohou udělat, najdete v dokumentu \"Začínáme\" v horní části této stránky.",
        "Q2": "\"Pověření Watsona používané vaší třídou bylo zamítnuto\"",
        "Q2-A-1": "Modely strojového učení v nástroji jsou vytvářeny pomocí rozhraní API IBM Watson.",
        "Q2-A-2": "Pokud máte účet \"nespravované\" třídy, pak vám učitel nebo vedoucí skupiny poskytl přihlašovací údaje k rozhraní Watson API od IBM Cloud, aby tato funkce fungovala (jak je popsáno v dokumentu \"Začínáme\" v horní části této stránky).",
        "Q2-A-3": "Poskytnuté pověření však v současné době nefunguje. Nejpravděpodobnějším důvodem je, že pověření byla od doby jejich původního poskytnutí ze služby IBM Cloud odstraněna. Pokud tomu tak není, musí se učitel nebo vedoucí skupiny, který pověření Watson poskytl, vrátit na ovládací panel IBM Cloud a zkontrolovat stav služby Watson Assistant nebo Visual Recognition, kterou vytvořil.",
        "Q3": "\"Klíče API aplikace Watson Assistant již nejsou k dispozici\"",
        "Q3-A-1": "Modely strojového učení v nástroji jsou vytvářeny pomocí rozhraní API IBM Watson.",
        "Q3-A-2": "Pověření Watson Assistant vytvořená učiteli mají omezený počet modelů strojového učení, které lze použít k jejich vytvoření. To se zobrazuje v uživatelském rozhraní služby IBM Cloud, kde byla pověření vytvořena a kde se nazývají \"dovednosti\".",
        "Q3-A-3": "Pokud je tento limit překročen, pokusy o trénování nových modelů strojového učení selžou a zobrazí se tato zpráva:",
        "Q3-A-4": "Vaše třída již vytvořila maximální povolený počet modelů. Informujte prosím učitele nebo vedoucího skupiny, že jejich \"klíče Watson Assistant API již nemají k dispozici žádné další dovednosti\".",
        "Q3-A-5": "Pokud student, který má úspěšně vycvičený model, svůj model odstraní, uvolní tím dovednost pro použití jiným studentem.",
        "Q3-A-6": "Jedním ze způsobů, jak se této chybě v budoucnu vyhnout, je menší počet žáků ve třídě. Pokud je ve třídě méně studentů, než je počet dovedností podporovaných pověřením Watson Assistant, nedojde k překročení limitů.",
        "Q3-A-7": "Dalším způsobem, jak se této chybě vyhnout, je přidat do třídy další klíče API služby Watson Assistant nebo použít \"plán\" instance služby Watson Assistant s vyššími limity.",
        "Q5": "\"Společnost Watson ... v současné době omezuje rychlost svého klíče API.\"",
        "Q5-A-1": "Modely strojového učení v nástroji jsou vytvářeny pomocí rozhraní API IBM Watson.",
        "Q5-A-2": "Pokud máte účet \"nespravované\" třídy, bude muset učitel nebo vedoucí skupiny zadat přihlašovací údaje k rozhraní Watson API od IBM Cloud, aby tato funkce fungovala.",
        "Q5-A-3": "Pokud jsou vytvořeny bezplatné účty, bude platit omezení rychlosti žádostí o nové modely strojového učení. Při běžném používání to nebude mít na třídu žádný vliv. Pokud se však studentům zobrazí chyba \"nejsou k dispozici žádné další dovednosti\" nebo \"nejsou k dispozici žádné další klasifikátory\" (jak je popsáno výše), ale pak budou pokračovat v klikání na tlačítko \"Trénovat nový model strojového učení\" několikrát za sekundu po dobu několika minut, pak se omezení rychlosti uplatní.",
        "Q5-A-4": "V takovém případě se studentům zobrazí tato zpráva:",
        "Q5-A-5": "Vaše třída zadává příliš mnoho požadavků na vytvoření modelů strojového učení příliš rychlým tempem. Prosím, zastavte to a informujte učitele nebo vedoucího skupiny, že \"služba Watson Assistant v současné době omezuje rychlost svého klíče API\"",
        "Q5-A-6": "Omezení rychlosti není uplatňováno stránkou Machine Learning for Kids ani není pod její kontrolou. Obvykle je dočasné a nejlépe ho vyřešíte krátkým vyčkáním.",
        "Q5-A-7": "Pokud studenti kliknou na tlačítko \"Trénovat nový model strojového učení\" a zobrazí se chyby \"nejsou k dispozici žádné další dovednosti\" nebo \"nejsou k dispozici žádné další klasifikátory\" (jak je popsáno výše), měli by si uvědomit, že opakovaným kliknutím na tlačítko se problém nevyřeší a ve skutečnosti se situace pro zbytek třídy ještě zhorší.",
        "Q6": "Už dlouho čekám na model k tréninku!",
        "Q6-A-1": "Zkuste stránku obnovit.",
        "Q6-A-2": "Stránka by měla kontrolovat stav modelu strojového učení každých 30 sekund, ale velmi občas kontrolu zastaví, takže se může stát, že budete čekat na model, až bude skutečně připraven.",
        "Q6-A-3": "Pokud to trvá déle než několik minut, vyplatí se to zkontrolovat obnovením/znovunačtením stránky.",
        "Q6-A-4": "Pokud je to déle než deset minut, možná by stálo za to zvážit restartování (klikněte na tlačítko Zrušit a poté znovu klikněte na tlačítko pro trénování nového modelu strojového učení).",
        "Q7": "\"Vaše třída sdílí klíče API Watson ... v současné době nejsou žádné k dispozici.\"",
        "Q7-A-1": "Modely strojového učení v nástroji jsou vytvářeny pomocí rozhraní API IBM Watson.",
        "Q7-A-2": "Pokud máte účet \"spravované\" třídy, znamená to, že vaše třída sdílí tyto klíče s mnoha dalšími školami. ",
        "Q7-A-3": "Obvykle je jich dostatek pro všechny školy, ale pokud je velmi vytížený a všechny dostupné klíče API jsou právě používány, pokusy o trénování nových modelů strojového učení selžou a zobrazí se tato zpráva:",
        "Q7-A-4": "Vaše třída sdílí \"klíče API\" Watson Assistant / Visual Recognition s mnoha dalšími školami a v současné době bohužel nejsou k dispozici žádné. Informujte prosím svého učitele nebo vedoucího skupiny, že budete muset svůj model strojového učení vycvičit později",
        "Q7-A-5": "Pokud student, který má úspěšně vycvičený model, svůj model odstraní, uvolní tím dovednost pro použití jiným studentem.",
        "Q7-A-6": "Nejlepší je zkusit to znovu později, až ostatní studenti své modely strojového učení odstraní a klíče API budou opět k dispozici. Do té doby budou vaše tréninková data stále v bezpečí.",
        "Q7-A-7": "Dalším způsobem, jak se této chybě vyhnout, je vytvořit pro třídu \"nespravovaný\" účet, kdy si učitel vytvoří vlastní \"klíče API\" Watson, které mohou být určeny pouze pro použití jeho třídou."
    },
    "TEACHERUI": {
        "TITLE": "Problémy s uživatelským rozhraním učitele / správce",
        "Q2": "Chybějící účet studenta v seznamu na stránce učitele",
        "Q2-A-1": "Správa uživatelů pro službu Machine Learning for Kids je implementována pomocí služby třetí strany <a href=\"https://auth0.com/\">Auth0</a>.",
        "Q2-A-2": "Občas se může stát, že seznam studentů, který vrátí služba Auth0, je poněkud zastaralý a neodráží studenty, kteří byli nedávno vytvořeni (nebo podobně zobrazuje studenty, kteří byli nedávno odstraněni).",
        "Q2-A-3": "V těchto případech byli studenti obvykle úspěšně vytvořeni (nebo odstraněni), pouze zobrazený seznam studentů neodráží poslední aktualizace.",
        "Q2-A-4": "Auth0 obvykle takové incidenty hlásí na své stavové stránce jako <a href='https://status.auth0.com/incidents/0sk1d3hjlw0m'>zpoždění indexace uživatelů</a> nebo <a href='https://status.auth0.com/incidents/t8995b9jggx5'>problémy s rozhraním API pro vyhledávání</a>.",
        "Q2-A-5": "V těchto případech je nejlepší počkat, až se indexace Auth0 dožene.",
        "Q4": "Proč jsou modely strojového učení automaticky mazány?",
        "Q4-A-1": "Tuto funkci si školy vyžádaly již při prvním vývoji aplikace Machine Learning for Kids. Vyplynulo to ze skutečnosti, že existuje limit, kolik modelů strojového učení může mít třída v daném okamžiku k dispozici, a že je potřeba tento limit snadno spravovat.",
        "Q4-A-2": "Místo toho, aby děti musely po hodině uklízet a mazat své modely (aby další třída mohla modely vytvářet), může nástroj po skončení hodiny automaticky uklízet a mazat modely. To usnadňuje spuštění další lekce a následné lekce bez nutnosti ručního úklidu mezi nimi.",
        "Q4-A-3": "Časový limit před odstraněním modelů je konfigurovatelný. Ve škole, kde výuka trvá 1 nebo 2 hodiny, může být rozumné mazat modely po dvou hodinách. Pro týdenní kroužek kódování by mohlo být vhodnější šest dní, aby bylo zajištěno, že modely budou vymazány před každým novým kroužkem.",
        "Q4-A-4": "Chcete-li určit časový limit pro svou třídu, navštivte <a href='https://machinelearningforkids.co.uk/#!/teacher/restrictions'>část Omezení na stránce učitele</a>.",
        "Q4-A-6": "<em>Poznámka: Automaticky se odstraní pouze modely strojového učení, nikoliv trénovací data, která byla použita k jejich vytvoření. Pokud je tedy model pro projekt, na kterém student stále pracuje, automaticky odstraněn, může vždy znovu kliknout na tlačítko \"Trénink\" a model vytvořit znovu.</em>"
    },
    "ACCOUNTISSUES": {
        "TITLE": "Problémy s účtem",
        "Q1": "Jaký je rozdíl mezi vytvářením účtů nebo použitím funkce \"Vyzkoušet hned\"?",
        "Q1-A-1": "Použití možnosti \"Vyzkoušet hned\" znamená, že se nemusíte přihlašovat ani si vytvářet účet. Studenti si nemusí pamatovat žádná hesla a učitelé nemusí poskytovat osobní údaje. Učitelům to také šetří čas potřebný ke správě studentských účtů.",
        "Q1-A-2": "Vytvoření účtu však umožňuje další funkce. Studenti si mohou uložit svou práci a vrátit se k ní v pozdější hodině. Mohou pracovat na projektu společně s ostatními studenty ve třídě. Mohou se přihlásit z domova a ukázat rodině, co vytvořili.",
        "Q1-A-3": "Níže je uveden přehled rozdílů:",
        "CREATE_ACCOUNT": "Vytvoření účtu",
        "TRAINMODELS": "Trénujte modely strojového učení k rozpoznávání...",
        "PRETRAINED_MODELS": "Použití předtrénovaných modelů strojového učení",
        "TENSORFLOW_MODELS": "Použití hostovaných modelů TensorFlow",
        "SCRATCH_ONLY": "(použít pouze z aplikace Scratch)",
        "USE": "Používejte modely strojového učení z...",
        "CREATE_PROJECTS": "Vytvářet projekty",
        "ONE_PROJECT": " 1 projekt ",
        "MULTIPLE_PROJECTS": " Více projektů ",
        "SAVE_PROJECTS": "Ukládání a načítání projektů",
        "WORK_ON_PROJECTS": "Práce na projektech strojového učení...",
        "FEW_HOURS": " na několik hodin ",
        "UNTIL_DELETION": " dokud je neodstraníte ",
        "ONE_COMPUTER": " z jednoho počítače ",
        "ONLINE": " kdekoli online ",
        "BY_YOURSELF": " sami ",
        "WITH_CLASSMATES": "se spolužáky",
        "Q2": "Vytvořil jsem si třídní účet, ale přihlášení učitele nefunguje",
        "Q2-A-1": "Než se budete moci přihlásit, musíte ověřit svou e-mailovou adresu.",
        "Q2-A-2": "Po vytvoření účtu třídy vám bude na zadanou e-mailovou adresu zaslán e-mail s odkazem, na který je třeba kliknout. Pokud na tento odkaz kliknete, vaše e-mailová adresa bude ověřena a účet třídy bude aktivován. Nyní byste se měli být schopni přihlásit.",
        "Q2-A-3": "Pokud jste ověřovací e-mail ještě neviděli, ujistěte se, že se nedostal do složky se spamem.",
        "Q2-A-4": "Pokud ji stále nemůžete najít, dejte <a href='https://groups.google.com/d/forum/mlforkids'>mi vědět</a> a já se vám pokusím pomoci.",
        "Q3": "Odstraňování účtů",
        "Q3-A-1": "Studentské účty",
        "Q3-A-2": "Studenti nemohou mazat své vlastní účty.",
        "Q3-A-3": "Učitel může kdykoli smazat studentský účet tak, že navštíví stránku \"Učitel\" a klikne na tlačítko \"Smazat studentský účet\" vedle studentského účtu, který chce smazat.",
        "Q3-A-4": "Tím se odstraní všechny informace uložené o tomto studentovi a všechny jeho projekty a modely strojového učení.",
        "Q3-A-5": "Nelze to vrátit zpět.",
        "Q3-A-6": "Účty učitelů",
        "Q3-A-7": "Odstraněním účtu učitele dojde ke smazání celé třídy a všech žákovských účtů v ní. Nelze jej vrátit zpět.",
        "Q3-A-8": "To lze provést kliknutím na tlačítko \"Odstranit třídu\" v části Rozšířené možnosti na <a href='https://machinelearningforkids.co.uk/teacher'>stránce učitele</a>",
        "Q4": "Jaké informace se o uživatelích ukládají?",
        "Q4-A-1": "Účty učitelů",
        "Q4-A-2": "Uživatelské jméno a e-mailovou adresu, které zadáte při vytváření účtu, ukládám, abych s vámi mohl být v kontaktu.",
        "Q4-A-3": "Studentské účty",
        "Q4-A-4": "Ukládám uživatelská jména studentských účtů, abych jim mohl umožnit přihlášení. Nemám žádné e-mailové adresy ani kontaktní údaje studentů. Nemám žádné další osobní údaje o studentech.",
        "Q4-A-5": "<a href='https://github.com/IBM/taxinomitis-docs/raw/master/docs/pdf/machinelearningforkids-schools.pdf'>Doporučuji</a> také <a href='https://github.com/IBM/taxinomitis-docs/raw/master/docs/pdf/machinelearningforkids-schools.pdf'>, aby studenti dostali obecná uživatelská jména</a> (např. student1), aby nebyli identifikovatelní mimo školu nebo kódovací skupinu.",
        "Q4-A-6": "Obecné informace uložené o všech účtech",
        "Q4-A-7": "Správa uživatelů pro službu Machine Learning for Kids je implementována pomocí služby třetí strany <a href='https://auth0.com/'>Auth0</a>. Ta ukládá IP adresu, ze které jste se naposledy přihlásili do služby Machine Learning for Kids, a typ použitého prohlížeče. Nikdy jsem nenašel důvod, proč to používat, ale je to uloženo, kdybych to chtěl hledat.",
        "Q4-A-8": "Chyby, které se vyskytnou ve webovém prohlížeči, jsou zachyceny pomocí služby třetí strany <a href='https://sentry.io/'>Sentry</a>. Pokud se něco pokazí, zachytí informace o chybě, včetně vašeho uživatelského jména, IP adresy, typu používaného prohlížeče a technického popisu toho, co se pokazilo.",
        "Q4-A-9": "Používám službu <a href='https://www.google.com/analytics/'>Google Analytics</a>, abych věděl, kolik uživatelů denně navštíví stránku Machine Learning for Kids. Přestože zachycuje informace, jako je zeměpisná poloha a typ prohlížeče, zobrazují se mi vždy pouze v anonymizované souhrnné podobě.",
        "Q5": "Co se děje se školicími daty vytvořenými studenty?",
        "Q5-A-1": "Krokem ve všech projektech strojového učení, které studenti vytvářejí pomocí této stránky, je vytvoření nebo shromáždění trénovacích příkladů. U textových projektů to může znamenat zadávání krátkých textových pasáží. U obrazových projektů to může znamenat kreslení obrázků na plátno na obrazovce nebo fotografování pomocí webové kamery. U projektů týkajících se čísel to znamená psaní sad čísel.",
        "Q5-A-2": "Všechny tyto tréninkové příklady jsou uloženy v <a href='https://www.ibm.com/cloud/databases-for-postgresql'>databázi PostgreSQL hostované v IBM Cloud</a> v Dallasu ve Spojených státech. Jako správce databáze mám přístup ke všem těmto výukovým příkladům pro všechny studentské projekty, nepoužívám je však k jiným účelům než k tomu, abych studentům umožnil přístup k jejich vlastním projektům a práci na nich. Výcviková data nezveřejňuji (ani veřejně, ani jednotlivcům či třetím stranám), ani je jinak nesdílím, s dvěma výjimkami, kdy je předávám rozhraní IBM Watson API popsaným níže.",
        "Q5-A-3": "Modely strojového učení pro textové projekty se vytvářejí pomocí cloudové služby <a href='https://www.ibm.com/cloud/watson-assistant/'>IBM Watson Assistant</a>, což znamená, že když studenti trénují model, kopie zadaných trénovacích příkladů se <a href='https://cloud.ibm.com/apidocs/assistant#create-workspace'>odešle do IBM Watson</a>. (Umístění této cloudové služby si učitelé zvolí při <a href='https://machinelearningforkids.co.uk/apikeys-guide'>vytváření klíčů API</a>.) IBM Watson tyto tréninkové příklady nepoužívá k žádným jiným účelům. Je to proto, že služba Machine Learning for Kids <a href='https://cloud.ibm.com/apidocs/assistant#data-collection'>žádá o výjimku pro</a> tréninkové příklady studentů, které společnost IBM používá ke zlepšení služby, jak je <a href='https://cloud.ibm.com/docs/services/watson?topic=watson-gs-logging-overview'>popsáno v dokumentaci služby Watson</a>.",
        "Q5-A-4": "Modely strojového učení pro projekty týkající se obrázků se vytvářejí pomocí cloudové služby <a href='https://www.ibm.com/watson/services/visual-recognition/'>IBM Visual Recognition</a>, což znamená, že když studenti trénují model, kopie jejich tréninkových obrázků se <a href='https://cloud.ibm.com/apidocs/visual-recognition#create-a-classifier'>nahraje do IBM Watson</a>. (Umístění této cloudové služby si učitelé zvolí při <a href='https://machinelearningforkids.co.uk/apikeys-guide'>vytváření klíčů API</a>.) IBM Watson tyto tréninkové příklady nepoužívá k žádným jiným účelům. Je to proto, že služba Machine Learning for Kids <a href='https://cloud.ibm.com/apidocs/visual-recognition#data-collection'>žádá o výjimku pro</a> použití tréninkových příkladů studentů společností IBM ke zlepšení služby, jak je <a href='https://cloud.ibm.com/docs/services/watson?topic=watson-gs-logging-overview'>popsáno v dokumentaci služby Watson</a>.",
        "Q5-A-5": "Společnost IBM Watson poskytuje některé <a href='https://cloud.ibm.com/docs/services/assistant?topic=assistant-information-security#information-security-gdpr-wa'>obecné pokyny pro sdílení tréninkových dat se svými službami</a>, které se vztahují i na tréninková data vytvořená a shromážděná v aplikaci Machine Learning for Kids. Konkrétně by studenti měli být upozorněni na to, aby v příkladech, které shromažďují, neuváděli informace umožňující osobní identifikaci."
    }
}

const topics = Object.values(origJson);

const newFormatTopics = topics.map((topic) => {
    const newTopic = {
        h2: '',
        questionsAndAnswers: [],
    };

    const questionsMap = new Map();
    const questionsAndAnswersMap = new Map();
    Object.entries(topic).forEach(([key, value]) => {
        if (key === 'TITLE') {
            newTopic['h2'] = value;
            return;
        }

        const parts = key.split('-');
        if (parts.length === 1) {
            questionsMap.set(key, value);
            questionsAndAnswersMap.set(key, []);
            return;
        }

        const map = questionsAndAnswersMap.get(parts[0]);
        questionsAndAnswersMap.set(
            parts[0], [...map, value]);
    });

    questionsMap.forEach((value, key) => {
        newTopic.questionsAndAnswers.push({
            question: value,
            answers: questionsAndAnswersMap.get(key),
        });
    });

    return newTopic;

});

debugger;
