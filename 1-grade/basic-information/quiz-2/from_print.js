const quizData = [
    {"ex" : "個人を識別できる情報や、組み合わせて個人を特定できる情報", "word" : "個人情報"},
    {"ex" : "基本4情報", "word" : "氏名,住所,性別,生年月日"},
    {"ex" : "社会的差別につながるような、収集しないように求められている個人情報", "word" : "要配慮個人情報"},
    {"ex" : "個人情報を本人に無断で公開すると侵害する権利", "word" : "プライバシーの権利"},
    {"ex" : "プライバシー保護に関する、OECDによる国際的な取り決め(1980)", "word" : "プライバシーガイドライン"},
    {"ex" : "個人情報の取り扱いに関する法律", "word" : "個人情報保護法"},
    {"ex" : "個人情報保護法のうち、行政機関の個人情報保護の共通理念が記された部分", "word" : "「基本法」部分"},
    {"ex" : "個人情報保護法のうち、個人情報取扱事業者の義務などが記された部分", "word" : "「民間部門対象」部分"},
    {"ex" : "個人情報を含む集合物", "word" : "個人情報データーベース"},
    {"ex" : "個人情報データーベース等を利用する民間事業者", "word" : "個人情報取扱事業者"},
    {"ex" : "個人情報取扱事業者が6か月を超えて利用し、本人からの開示,修正に応じる義務のあるデータ", "word" : "保有個人データ"},
    {"ex" : "個人情報保護法の規定以上に、個人情報の保護に取り組む企業,団体を認証する民間の自主規制", "word" : "プライバシーマーク制度"},
    {"ex" : "個人情報が漏れること", "word" : "個人情報漏洩"},
    {"ex" : "個人情報流出防止のために、[ ]に個人情報を[ ]ことが大切", "word" : "必要以上, 公開しない"},
    {"ex" : "人間の[創造]的活動により生み出されるもの,事業活動に用いられる商品もの,役務を表示するもの,事業活動に有益な技術上,営業上の情報", "word" : "知的財産"},
    {"ex" : "知的財産の保護等を目的とした法律", "word" : "知的財産基本法"},
    {"ex" : "知的財産権のうち、出願,登録が必要な権利", "word" : "産業財産系"},
    {"ex" : "発明に関する、産業財産権", "word" : "特許権"},
    {"ex" : "知的財産権のうち、登録が不要な権利", "word" : "著作権"},
    {"ex" : "著作権の内，実用家,放送局などに認められる伝達者の権利", "word" : "著作隣接権"},
    {"ex" : "自分の肖像を他人に取られたり使われたりしない権利", "word" : "肖像権"},
    {"ex" : "タレントなどの有名人の顔や姿などの経済的利益の保護", "word" : "パブリシティ権"},
    {"ex" : "[思想]や[感情]が表現された[創造]物", "word" : "著作物"},
    {"ex" : "小説や映画化や吹き替え映画", "word" : "二次的著作物"},
    {"ex" : "著作権の狙い:[ ]の権利を守る,[ ]の発展に寄与", "word" : "著作者,文化"},
    {"ex" : "内国民待遇や[無方式]主義を定めている条約", "word" : "ベルヌ条約"},
    {"ex" : "(広義の)著作権を構成する2つの権利", "word" : "著作財産権(狭義の著作権),著作者人格権"},
    {"ex" : "著作者の[金銭]的な利益を守るための権利。[譲渡],[相続]が可能", "word" : "著作財産権"},
    {"ex" : "著作財産権の保護期間", "word" : "創作時から死後70年間"},
    {"ex" : "著作者の[人格]的,[精神]的な面を保護するための権利。譲渡,相続が不可", "word" : "著作者人格権"},
    {"ex" : "著作者人格権のうち、著作物の題名,内容を無断で変更,改変されない権利", "word" : "同一性保持権"},
    {"ex" : "認められてるもの:[ ]使用のための複製,[ ](32条),[ ]に関する複製", "word" : "私的,引用,学校教育"},
    {"ex" : "[ ]を外しての使用は著作者の許可が要る", "word" : "プロテクト"},
    {"ex" : "デジタルコンテンツの利用,複製を制御,制限する技術", "word" : "DRM(Digital Rights Management)"},

    {"ex" : "思想,感情を創作的に表現した、文芸,学術,美術,音楽の範囲に属すもの", "word" : "著作物"},
    {"ex" : "著作物ではないもの5つ", "word" : "[ありふれた]・[定石]的な表現,事実・データ,アイデア・着想,題名・名称,[工業品]・[実用品]のデザイン(,法律)"},

    {"ex" : "著作財産権のうち、勝手に[コピー]することを禁ずる権利", "word" : "複製権"},
    {"ex" : "著作権を英語で何というか", "word" : "copyright"},
    {"ex" : "著作財産権のうち、戯曲を公に上演したり,楽曲を公に演奏することを禁止できる権利", "word" : "上映権,演奏権"},
    {"ex" : "「公」の定義", "word" : "[不特定]または[多数]の人"},
    {"ex" : "著作財産権のうち、著作物を機器を用いて映し出すことを禁止できる権利", "word" : "上映権"},
    {"ex" : "無断で放送することを禁止できる権利", "word" : "公衆送信権"},
    {"ex" : "著作物を一般の人が見ることが出来れば、誰かが見る前でも[ ]となり、公衆送信となる", "word" : "送信可能化"},
    {"ex" : "著作財産権のうち、[朗読],読み聞かせを禁止できる権利", "word" : "口述権"},
    {"ex" : "著作財産権のうち、販売,配布を禁止できる権利", "word" : "譲渡権"},
    {"ex" : "著作財産権のうち、出版社が本を出版するときにあたる権利は?", "word" : "複製権,譲渡権"},
    {"ex" : "一度、正統な流通にのった商品は、再配布しても譲渡権の侵害ではないという例外規定を何というか", "word" : "ファーストセール理論"},
    {"ex" : "著作財産権のうち、レンタルビジネスに使うことを禁止できる権利", "word" : "貸与権"},
    {"ex" : "著作財産権のうち、翻訳を禁止できる権利", "word" : "翻訳権"},
    {"ex" : "著作財産権のうち、翻案を禁止できる権利", "word" : "翻案権"},
    {"ex" : "盗作(剽窃)など、人の作品を[真似]して似た作品を作ること", "word" : "翻案"},
    {"ex" : "1つの作品に複数の権利が乗っていることが多く、利用するときに[ ]が難しい", "word" : "権利処理"},
    {"ex" : "著作権侵害行為をやめさせること", "word" : "差止"},
    {"ex" : "(著作権侵害の)損害の補償", "word" : "損害賠償"},
    {"ex" : "譲渡などにより「著作者[ ]著作権者」となることがある", "word" : "≠"},
    {"ex" : "著作権侵害が成立する2つの条件", "word" : "依拠性,類似性"}
];