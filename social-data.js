/* ==========================================================================
   社會人文王國：康軒三上社會（114 學年度版本：六大單元）
   關卡 id 5~10 對應六個單元，11 為總複習魔王；題目的 unit 欄位等於關卡 id
   ========================================================================== */

const SOCIAL_STAGES = [
    {
        id: 5, subject: 'social', unitIdx: 0,
        unitTitle: '第一單元：我的家庭',
        stageName: '溫馨家族村',
        badgeName: '家族之心徽章',
        badgeIcon: '🏠',
        clearRewardGold: 180,
        themeBg: 'from-orange-200 via-amber-100 to-rose-100',
        cardBorder: 'border-orange-600',
        tagColor: 'bg-orange-600',
        desc: '考點：家庭的組成與類型、親屬稱謂（伯叔姑舅姨、堂表親）、親人的往來與節日團聚。',
        monsters: [
            { id: 's1_1', name: '稱謂迷糊怪', role: '村莊前鋒', maxHp: 60 },
            { id: 's1_2', name: '忘記回家小幽靈', role: '精英守衛', maxHp: 90 },
            { id: 's1_3', name: '族譜守護龍', role: '單元 BOSS', maxHp: 120 }
        ]
    },
    {
        id: 6, subject: 'social', unitIdx: 1,
        unitTitle: '第二單元：家庭與倫理',
        stageName: '和樂家園城堡',
        badgeName: '孝悌之光徽章',
        badgeIcon: '💞',
        clearRewardGold: 180,
        themeBg: 'from-rose-200 via-pink-100 to-amber-100',
        cardBorder: 'border-rose-600',
        tagColor: 'bg-rose-600',
        desc: '考點：家庭的功能（照顧、教育、經濟、情感）、家務分工、孝順長輩、手足相處與家庭溝通。',
        monsters: [
            { id: 's2_1', name: '懶惰家事怪', role: '城堡前鋒', maxHp: 60 },
            { id: 's2_2', name: '頂嘴毛毛蟲', role: '精英守衛', maxHp: 90 },
            { id: 's2_3', name: '冷漠冰霜巨人', role: '單元 BOSS', maxHp: 120 }
        ]
    },
    {
        id: 7, subject: 'social', unitIdx: 2,
        unitTitle: '第三單元：自治與安全',
        stageName: '自治議會堡壘',
        badgeName: '守護議會徽章',
        badgeIcon: '🗳️',
        clearRewardGold: 180,
        themeBg: 'from-sky-200 via-cyan-100 to-emerald-100',
        cardBorder: 'border-sky-600',
        tagColor: 'bg-sky-600',
        desc: '考點：班會流程（提案、討論、表決）、選舉幹部、少數服從多數、校園安全與防災避難。',
        monsters: [
            { id: 's3_1', name: '亂插嘴喇叭怪', role: '堡壘前鋒', maxHp: 60 },
            { id: 's3_2', name: '走廊暴衝獸', role: '精英守衛', maxHp: 90 },
            { id: 's3_3', name: '危險角落魔王', role: '單元 BOSS', maxHp: 120 }
        ]
    },
    {
        id: 8, subject: 'social', unitIdx: 3,
        unitTitle: '第四單元：學習與成長',
        stageName: '智慧圖書迷宮',
        badgeName: '求知星光徽章',
        badgeIcon: '📚',
        clearRewardGold: 180,
        themeBg: 'from-violet-200 via-indigo-100 to-sky-100',
        cardBorder: 'border-violet-600',
        tagColor: 'bg-violet-600',
        desc: '考點：預習、複習、做筆記等學習方法，圖書館與網路等學習資源，多元的學習與時間安排。',
        monsters: [
            { id: 's4_1', name: '拖拖拉拉蝸牛', role: '迷宮前鋒', maxHp: 60 },
            { id: 's4_2', name: '假消息蝙蝠', role: '精英守衛', maxHp: 90 },
            { id: 's4_3', name: '遺忘書本巨魔', role: '單元 BOSS', maxHp: 120 }
        ]
    },
    {
        id: 9, subject: 'social', unitIdx: 4,
        unitTitle: '第五單元：和諧的相處',
        stageName: '友誼彩虹橋',
        badgeName: '彩虹友誼徽章',
        badgeIcon: '🌈',
        clearRewardGold: 180,
        themeBg: 'from-emerald-200 via-teal-100 to-yellow-100',
        cardBorder: 'border-emerald-600',
        tagColor: 'bg-emerald-600',
        desc: '考點：班級裡的人際關係、交朋友與化解衝突、拒絕霸凌、性別平等與尊重差異。',
        monsters: [
            { id: 's5_1', name: '取綽號小惡魔', role: '橋頭前鋒', maxHp: 60 },
            { id: 's5_2', name: '排擠黑霧怪', role: '精英守衛', maxHp: 90 },
            { id: 's5_3', name: '刻板印象石像', role: '單元 BOSS', maxHp: 120 }
        ]
    },
    {
        id: 10, subject: 'social', unitIdx: 5,
        unitTitle: '第六單元：學校與我',
        stageName: '校園小社會城',
        badgeName: '合作之星徽章',
        badgeIcon: '🏫',
        clearRewardGold: 180,
        themeBg: 'from-amber-200 via-lime-100 to-sky-100',
        cardBorder: 'border-amber-600',
        tagColor: 'bg-amber-600',
        desc: '考點：合作與良性競爭、運動家精神、學校各處室與服務人員、學校是個小社會。',
        monsters: [
            { id: 's6_1', name: '作弊狐狸', role: '城鎮前鋒', maxHp: 60 },
            { id: 's6_2', name: '各自為政三頭蛇', role: '精英守衛', maxHp: 90 },
            { id: 's6_3', name: '不守規矩大將軍', role: '單元 BOSS', maxHp: 120 }
        ]
    },
    {
        id: 11, subject: 'social', isBoss: true,
        unitTitle: '終極試煉：康軒三上社會總複習',
        stageName: '混亂議事神殿',
        badgeName: '社會傳說權杖',
        badgeIcon: '🏛️',
        clearRewardGold: 350,
        themeBg: 'from-amber-300 via-orange-200 to-rose-200',
        cardBorder: 'border-amber-500',
        tagColor: 'bg-red-600',
        desc: '隨機從六大單元抽取必考題目，打敗混亂大法官，守護社會人文王國！',
        monsters: [
            { id: 's7_1', name: '社會大魔王・混亂大法官', role: '終極大魔王', maxHp: 240 }
        ]
    }
];

const SOCIAL_MONSTER_SVGS = {
    s1: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow"><polygon points="60,14 104,52 16,52" fill="#f97316" stroke="#7c2d12" stroke-width="4" stroke-linejoin="round"/><rect x="24" y="50" width="72" height="56" rx="6" fill="#fed7aa" stroke="#7c2d12" stroke-width="4"/><circle cx="46" cy="72" r="6" fill="#431407"/><circle cx="74" cy="72" r="6" fill="#431407"/><path d="M44 92 Q60 84 76 92" fill="none" stroke="#7c2d12" stroke-width="4" stroke-linecap="round"/><text x="88" y="30" font-size="22" font-weight="900" fill="#7c2d12">?</text></svg>`,
    s2: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow"><path d="M60 104 C20 78 14 46 34 32 C48 22 60 34 60 42 C60 34 72 22 86 32 C106 46 100 78 60 104 Z" fill="#93c5fd" stroke="#1e3a8a" stroke-width="4"/><path d="M60 42 L54 60 L66 68 L58 88" fill="none" stroke="#1e3a8a" stroke-width="4" stroke-linecap="round"/><circle cx="42" cy="58" r="5" fill="#1e3a8a"/><circle cx="78" cy="58" r="5" fill="#1e3a8a"/></svg>`,
    s3: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow"><rect x="34" y="18" width="52" height="90" rx="12" fill="#334155" stroke="#0f172a" stroke-width="4"/><circle cx="60" cy="38" r="11" fill="#ef4444"/><circle cx="60" cy="63" r="11" fill="#facc15"/><circle cx="60" cy="88" r="11" fill="#22c55e"/><circle cx="56" cy="36" r="2.5" fill="#fff"/><circle cx="64" cy="36" r="2.5" fill="#fff"/><path d="M52 68 Q60 62 68 68" fill="none" stroke="#713f12" stroke-width="3"/></svg>`,
    s4: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow"><path d="M18 30 Q60 18 60 34 Q60 18 102 30 L102 96 Q60 84 60 100 Q60 84 18 96 Z" fill="#ede9fe" stroke="#4c1d95" stroke-width="4" stroke-linejoin="round"/><line x1="60" y1="34" x2="60" y2="100" stroke="#4c1d95" stroke-width="3"/><circle cx="40" cy="56" r="6" fill="#4c1d95"/><circle cx="80" cy="56" r="6" fill="#4c1d95"/><path d="M34 78 L46 74 M74 74 L86 78" stroke="#4c1d95" stroke-width="3.5" stroke-linecap="round"/></svg>`,
    s5: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow"><circle cx="60" cy="62" r="40" fill="#6b7280" stroke="#111827" stroke-width="4"/><path d="M26 44 L40 22 L50 42 M94 44 L80 22 L70 42" fill="#6b7280" stroke="#111827" stroke-width="4" stroke-linejoin="round"/><circle cx="46" cy="58" r="6" fill="#fde047"/><circle cx="74" cy="58" r="6" fill="#fde047"/><path d="M42 82 L52 76 L60 82 L68 76 L78 82" fill="none" stroke="#111827" stroke-width="4" stroke-linejoin="round"/></svg>`,
    s6: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow"><rect x="22" y="30" width="76" height="70" rx="8" fill="#fde68a" stroke="#78350f" stroke-width="4"/><polygon points="16,34 60,10 104,34" fill="#dc2626" stroke="#7f1d1d" stroke-width="4" stroke-linejoin="round"/><rect x="50" y="72" width="20" height="28" fill="#92400e" stroke="#451a03" stroke-width="3"/><circle cx="42" cy="54" r="6" fill="#451a03"/><circle cx="78" cy="54" r="6" fill="#451a03"/><circle cx="60" cy="24" r="6" fill="#fff" stroke="#7f1d1d" stroke-width="2"/></svg>`,
    s7: `<svg viewBox="0 0 120 120" class="w-full h-full drop-shadow"><circle cx="60" cy="62" r="46" fill="#7c2d12" stroke="#fde047" stroke-width="4"/><rect x="34" y="20" width="52" height="18" rx="4" fill="#1f2937" stroke="#fde047" stroke-width="3"/><rect x="54" y="8" width="12" height="14" fill="#1f2937" stroke="#fde047" stroke-width="3"/><circle cx="46" cy="60" r="7" fill="#f97316"/><circle cx="74" cy="60" r="7" fill="#f97316"/><path d="M40 84 Q60 72 80 84" fill="none" stroke="#fde047" stroke-width="4" stroke-linecap="round"/><path d="M90 96 L104 82 M98 90 L108 100" stroke="#fde047" stroke-width="4" stroke-linecap="round"/></svg>`
};

// 康軒三上社會題庫（unit 對應關卡 id 5~10）
const SOCIAL_QUESTION_BANK = [
    // ================= 第一單元：我的家庭 (unit: 5) =================
    {
        id: 's1_q1', unit: 5, topic: '親屬稱謂（父系）',
        q: '爸爸的「哥哥」，我們應該稱呼他什麼？',
        options: ['伯伯（伯父）', '叔叔', '舅舅', '姑丈'],
        ans: 0,
        exp: '爸爸的<span class="kw-highlight">哥哥</span>叫<span class="kw-highlight">伯伯（伯父）</span>，爸爸的<span class="kw-highlight">弟弟</span>叫<span class="kw-highlight">叔叔</span>；媽媽的兄弟才叫舅舅喔！'
    },
    {
        id: 's1_q2', unit: 5, topic: '親屬稱謂（父系）',
        q: '爸爸的「弟弟」的太太，我們應該稱呼她什麼？',
        options: ['嬸嬸', '伯母', '舅媽', '阿姨'],
        ans: 0,
        exp: '叔叔的太太叫<span class="kw-highlight">嬸嬸</span>；伯伯的太太叫<span class="kw-highlight">伯母</span>；舅舅的太太叫<span class="kw-highlight">舅媽</span>。'
    },
    {
        id: 's1_q3', unit: 5, topic: '親屬稱謂（父系）',
        q: '爸爸的「姊姊或妹妹」，我們應該稱呼她什麼？',
        options: ['姑姑', '阿姨', '嬸嬸', '舅媽'],
        ans: 0,
        exp: '爸爸的姊妹叫<span class="kw-highlight">姑姑</span>，姑姑的丈夫叫<span class="kw-highlight">姑丈</span>；媽媽的姊妹才叫阿姨喔！'
    },
    {
        id: 's1_q4', unit: 5, topic: '親屬稱謂（母系）',
        q: '媽媽的「爸爸」，我們應該稱呼他什麼？',
        options: ['外公（外祖父）', '爺爺（祖父）', '伯公', '舅公'],
        ans: 0,
        exp: '媽媽的爸爸媽媽是<span class="kw-highlight">外公、外婆</span>（外祖父、外祖母）；爸爸的爸爸媽媽是<span class="kw-highlight">爺爺、奶奶</span>（祖父、祖母）。'
    },
    {
        id: 's1_q5', unit: 5, topic: '親屬稱謂（母系）',
        q: '媽媽的「兄弟」，我們應該稱呼他什麼？',
        options: ['舅舅', '叔叔', '伯伯', '姑丈'],
        ans: 0,
        exp: '媽媽的兄弟叫<span class="kw-highlight">舅舅</span>，舅舅的太太叫<span class="kw-highlight">舅媽</span>。'
    },
    {
        id: 's1_q6', unit: 5, topic: '親屬稱謂（母系）',
        q: '媽媽的「姊妹」的丈夫，我們應該稱呼他什麼？',
        options: ['姨丈', '姑丈', '舅舅', '叔叔'],
        ans: 0,
        exp: '媽媽的姊妹叫<span class="kw-highlight">阿姨</span>，阿姨的丈夫叫<span class="kw-highlight">姨丈</span>；姑姑的丈夫才叫姑丈。'
    },
    {
        id: 's1_q7', unit: 5, topic: '堂親與表親',
        q: '「叔叔」的兒子比我大，我應該怎麼稱呼他？',
        options: ['堂哥', '表哥', '大哥', '姊夫'],
        ans: 0,
        exp: '<span class="kw-highlight">伯伯、叔叔</span>（爸爸的兄弟）的孩子是「<span class="kw-highlight">堂</span>」兄弟姊妹；姑姑、舅舅、阿姨的孩子則是「<span class="kw-highlight">表</span>」兄弟姊妹。'
    },
    {
        id: 's1_q8', unit: 5, topic: '堂親與表親',
        q: '「舅舅」的女兒比我小，我應該怎麼稱呼她？',
        options: ['表妹', '堂妹', '姪女', '妹妹'],
        ans: 0,
        exp: '舅舅、阿姨、姑姑的孩子都是「<span class="kw-highlight">表</span>」親，所以舅舅的女兒比我小就是<span class="kw-highlight">表妹</span>。'
    },
    {
        id: 's1_q9', unit: 5, topic: '家庭的類型',
        q: '小明家裡住著「爸爸、媽媽和小明兄妹」，這是哪一種家庭型態？',
        options: ['小家庭（核心家庭）', '三代同堂家庭', '隔代教養家庭', '單親家庭'],
        ans: 0,
        exp: '由<span class="kw-highlight">父母和未婚子女</span>組成的家庭，叫做<span class="kw-highlight">小家庭（核心家庭）</span>，是現在很常見的家庭型態。'
    },
    {
        id: 's1_q10', unit: 5, topic: '家庭的類型',
        q: '小華和「爺爺、奶奶、爸爸、媽媽」住在一起，這是哪一種家庭型態？',
        options: ['三代同堂家庭', '小家庭', '單親家庭', '隔代教養家庭'],
        ans: 0,
        exp: '祖父母、父母、孩子<span class="kw-highlight">三個世代</span>住在一起，叫做<span class="kw-highlight">三代同堂</span>家庭（也稱折衷家庭）。'
    },
    {
        id: 's1_q11', unit: 5, topic: '家庭的類型',
        q: '小美的爸爸媽媽在外地工作，她由「爺爺奶奶」照顧長大，這是哪一種家庭型態？',
        options: ['隔代教養家庭', '小家庭', '三代同堂家庭', '單親家庭'],
        ans: 0,
        exp: '由<span class="kw-highlight">祖父母照顧孫子女</span>、父母不在身邊的家庭，叫做<span class="kw-highlight">隔代教養家庭</span>。'
    },
    {
        id: 's1_q12', unit: 5, topic: '家庭的類型',
        q: '小安的媽媽來自越南，爸爸是臺灣人，這樣的家庭通常稱為什麼？',
        options: ['新住民家庭', '隔代教養家庭', '單親家庭', '三代同堂家庭'],
        ans: 0,
        exp: '父母其中一方來自其他國家的家庭，稱為<span class="kw-highlight">新住民家庭</span>，能讓孩子認識<span class="kw-highlight">多元文化</span>，我們要互相尊重喔！'
    },
    {
        id: 's1_q13', unit: 5, topic: '家庭成員的來源',
        q: '家庭成員可能透過哪些方式成為一家人？',
        options: ['血緣、婚姻、收養', '只有血緣一種', '只要住在同一棟大樓', '只要是同班同學'],
        ans: 0,
        exp: '家人可以因為<span class="kw-highlight">血緣</span>（如父母和子女）、<span class="kw-highlight">婚姻</span>（如夫妻）或<span class="kw-highlight">收養</span>而成為一家人，每一種家庭都值得被尊重！'
    },
    {
        id: 's1_q14', unit: 5, topic: '家庭的紀錄',
        q: '想知道家裡有哪些成員、彼此是什麼關係，可以查看政府核發的哪一種文件？',
        options: ['戶口名簿', '成績單', '健保卡', '圖書借閱證'],
        ans: 0,
        exp: '<span class="kw-highlight">戶口名簿</span>記錄了同一戶家庭成員的姓名、出生日期與彼此的關係（稱謂）等資料。'
    },
    {
        id: 's1_q15', unit: 5, topic: '家族的紀錄',
        q: '有些家族會用一本書記錄祖先和家族成員，一代一代傳下去，這叫做什麼？',
        options: ['族譜（家譜）', '日記', '聯絡簿', '字典'],
        ans: 0,
        exp: '<span class="kw-highlight">族譜（家譜）</span>記錄了家族的來源和每一代成員，讓我們了解自己的<span class="kw-highlight">家族歷史</span>。'
    },
    {
        id: 's1_q16', unit: 5, topic: '親人的往來（節日）',
        q: '下列哪一個節日，家人通常會一起「吃年夜飯、圍爐團聚」？',
        options: ['春節（農曆除夕）', '兒童節', '教師節', '植樹節'],
        ans: 0,
        exp: '<span class="kw-highlight">農曆除夕</span>晚上，全家人會一起<span class="kw-highlight">吃年夜飯（圍爐）</span>，分隔各地的親人也會回家團聚。'
    },
    {
        id: 's1_q17', unit: 5, topic: '親人的往來（節日）',
        q: '每年到了哪一個節日，家人會一起去「掃墓」，緬懷祖先？',
        options: ['清明節', '中秋節', '端午節', '元宵節'],
        ans: 0,
        exp: '<span class="kw-highlight">清明節</span>時家人會一起<span class="kw-highlight">掃墓祭祖</span>，表達對祖先的思念與感恩。中秋節則是賞月、團圓的節日。'
    },
    {
        id: 's1_q18', unit: 5, topic: '親人的往來',
        q: '住在遠方的外婆很想念我們，下列哪一種做法最能維繫親人之間的感情？',
        options: ['常常打電話或視訊問候，有空就回去探望', '等外婆主動聯絡再說', '一年都不聯絡也沒關係', '只在需要紅包時才去拜訪'],
        ans: 0,
        exp: '親人之間要常常<span class="kw-highlight">聯絡、問候、探望</span>，例如打電話、視訊、寫卡片，感情才會越來越好！'
    },

    // ================= 第二單元：家庭與倫理 (unit: 6) =================
    {
        id: 's2_q1', unit: 6, topic: '家庭的功能（養育照顧）',
        q: '小時候生病發燒，爸爸媽媽整夜照顧我、帶我去看醫生，這是家庭的哪一種功能？',
        options: ['保護與照顧的功能', '娛樂的功能', '賺錢的功能', '選舉的功能'],
        ans: 0,
        exp: '家人給我們<span class="kw-highlight">食物、住所，生病時照顧我們</span>，這是家庭最基本的「<span class="kw-highlight">保護與照顧（養育）</span>」功能。'
    },
    {
        id: 's2_q2', unit: 6, topic: '家庭的功能（教育）',
        q: '奶奶教我「吃飯前要先洗手、見到長輩要打招呼」，這是家庭的哪一種功能？',
        options: ['教育的功能', '經濟的功能', '娛樂的功能', '宗教的功能'],
        ans: 0,
        exp: '家人教導我們<span class="kw-highlight">生活習慣、禮貌和做人的道理</span>，這是家庭的「<span class="kw-highlight">教育</span>」功能。家庭是我們的第一個學校！'
    },
    {
        id: 's2_q3', unit: 6, topic: '家庭的功能（經濟）',
        q: '爸爸媽媽努力工作賺錢，讓全家有錢買食物、繳學費，這是家庭的哪一種功能？',
        options: ['經濟的功能', '教育的功能', '娛樂的功能', '情感的功能'],
        ans: 0,
        exp: '家人工作賺錢、提供生活所需的物品和費用，這是家庭的「<span class="kw-highlight">經濟</span>」功能。'
    },
    {
        id: 's2_q4', unit: 6, topic: '家庭的功能（情感）',
        q: '在學校受了委屈，回家後媽媽抱抱我、聽我說心事，讓我覺得很溫暖，這是家庭的哪一種功能？',
        options: ['情感（愛與關懷）的功能', '經濟的功能', '保護財產的功能', '交通的功能'],
        ans: 0,
        exp: '家人給我們<span class="kw-highlight">愛、關懷與支持</span>，讓我們感到安心溫暖，這是家庭的「<span class="kw-highlight">情感</span>」功能。'
    },
    {
        id: 's2_q5', unit: 6, topic: '家庭的功能（休閒）',
        q: '週末全家人一起去郊外野餐、騎腳踏車，這是家庭的哪一種功能？',
        options: ['休閒娛樂的功能', '經濟的功能', '教育的功能', '保護的功能'],
        ans: 0,
        exp: '家人一起出遊、玩桌遊、看電影，能放鬆心情、增進感情，這是家庭的「<span class="kw-highlight">休閒娛樂</span>」功能。'
    },
    {
        id: 's2_q6', unit: 6, topic: '家務分工',
        q: '關於「做家事」，下列哪一種想法最正確？',
        options: ['家是大家的，每個家人都應該分擔家事', '家事只是媽媽的工作', '小孩子只要讀書，不用做家事', '只有女生才需要做家事'],
        ans: 0,
        exp: '家是全家人共同的，每個人都應該依照能力<span class="kw-highlight">分擔家事</span>，家事<span class="kw-highlight">不分男女</span>，大家一起做會更輕鬆！'
    },
    {
        id: 's2_q7', unit: 6, topic: '家務分工',
        q: '三年級的小朋友，下列哪一件家事最適合自己來做？',
        options: ['整理自己的書包和房間、幫忙摺衣服', '自己開瓦斯爐炒菜', '爬到屋頂修理水塔', '開車去買菜'],
        ans: 0,
        exp: '要選擇<span class="kw-highlight">適合自己年齡、安全</span>的家事，例如整理房間、摺衣服、倒垃圾、擺碗筷；危險的工作要交給大人喔！'
    },
    {
        id: 's2_q8', unit: 6, topic: '家庭倫理（孝順）',
        q: '下列哪一個行為是「孝順長輩」的表現？',
        options: ['主動幫爺爺奶奶拿東西，耐心聽他們說話', '嫌爺爺講話太慢不理他', '對長輩大聲頂嘴', '長輩生病時不聞不問'],
        ans: 0,
        exp: '孝順就是<span class="kw-highlight">尊敬、關心、體貼</span>長輩，例如主動問候、幫忙、陪伴，並且聽從合理的教導。'
    },
    {
        id: 's2_q9', unit: 6, topic: '家庭倫理（手足）',
        q: '弟弟想玩我的玩具，下列哪一種做法最能表現「友愛手足」？',
        options: ['和弟弟一起輪流玩、互相分享', '大聲罵弟弟並把玩具藏起來', '推倒弟弟', '跟弟弟冷戰一個星期'],
        ans: 0,
        exp: '兄弟姊妹之間要<span class="kw-highlight">互相友愛、分享、禮讓</span>，哥哥姊姊照顧弟妹，弟妹也要尊重哥哥姊姊。'
    },
    {
        id: 's2_q10', unit: 6, topic: '家庭溝通',
        q: '小明想養小狗，但爸爸不同意，下列哪一種做法最好？',
        options: ['心平氣和地說出自己的想法，也聽聽爸爸的理由', '大哭大鬧直到爸爸答應', '偷偷把小狗帶回家', '從此不跟爸爸說話'],
        ans: 0,
        exp: '和家人意見不同時，要<span class="kw-highlight">冷靜溝通、說出想法、傾聽對方</span>，一起找出大家都能接受的方法。'
    },
    {
        id: 's2_q11', unit: 6, topic: '家庭會議',
        q: '全家人坐下來一起討論「暑假要去哪裡玩」，讓每個人都能發表意見，這種方式叫做什麼？',
        options: ['家庭會議', '班會', '運動會', '選舉'],
        ans: 0,
        exp: '<span class="kw-highlight">家庭會議</span>讓每位家人都能表達意見，再一起做決定，是很好的溝通方式！'
    },
    {
        id: 's2_q12', unit: 6, topic: '家庭規範',
        q: '家裡規定「晚上 9 點前要上床睡覺、看電視不超過 1 小時」，訂定這些家規的主要目的是什麼？',
        options: ['讓家人生活規律、彼此相處和諧', '故意處罰小孩', '讓家人互相吵架', '沒有任何目的'],
        ans: 0,
        exp: '<span class="kw-highlight">家庭規範（家規）</span>能讓大家養成好習慣、生活有秩序，家人相處也更和諧，每個人都要遵守喔！'
    },
    {
        id: 's2_q13', unit: 6, topic: '家庭倫理（禮貌）',
        q: '出門上學和回到家時，下列哪一個做法最有禮貌？',
        options: ['出門說「我出門了」，回家說「我回來了」', '一聲不吭直接出門', '回家後直接關進房間不理人', '用力甩門'],
        ans: 0,
        exp: '<span class="kw-highlight">出必告、反必面</span>：出門前告訴家人、回家後跟家人打招呼，讓家人安心，也是對家人的尊重。'
    },
    {
        id: 's2_q14', unit: 6, topic: '感恩家人',
        q: '母親節快到了，下列哪一個方式最能表達對媽媽的感謝？',
        options: ['親手做卡片、幫忙做家事，說聲「謝謝媽媽」', '要求媽媽買禮物給自己', '假裝沒有這個節日', '那天故意惹媽媽生氣'],
        ans: 0,
        exp: '表達感恩不一定要花錢，<span class="kw-highlight">親手做卡片、分擔家事、說出謝謝</span>，都是家人最喜歡的禮物！'
    },
    {
        id: 's2_q15', unit: 6, topic: '家庭的改變',
        q: '家裡多了一個剛出生的小妹妹，爸媽比較忙，我可以怎麼做？',
        options: ['體諒爸媽，主動幫忙照顧妹妹或做家事', '覺得爸媽不愛我而發脾氣', '把妹妹的東西藏起來', '什麼都不管'],
        ans: 0,
        exp: '家庭成員改變時，大家要<span class="kw-highlight">互相體諒、共同分擔</span>，用行動表達對家人的愛。'
    },
    {
        id: 's2_q16', unit: 6, topic: '家庭倫理',
        q: '「倫理」是指人與人相處時應該遵守的道理，下列哪一個是良好的「家庭倫理」？',
        options: ['父母慈愛、子女孝順、兄友弟恭', '誰力氣大就聽誰的', '每個人只顧自己就好', '長輩說話時一直插嘴'],
        ans: 0,
        exp: '良好的家庭倫理包括<span class="kw-highlight">父母慈愛、子女孝順、兄弟姊妹友愛</span>，大家互相尊重，家庭才會和樂。'
    },
    {
        id: 's2_q17', unit: 6, topic: '家人的相處',
        q: '奶奶年紀大了，走路比較慢，和奶奶一起出門時應該怎麼做？',
        options: ['放慢腳步陪奶奶走，主動扶著她', '自己先跑走', '一直催奶奶走快一點', '叫奶奶不要出門'],
        ans: 0,
        exp: '對待長輩要有<span class="kw-highlight">耐心和體貼</span>，配合長輩的速度、主動攙扶，這就是孝順的表現。'
    },

    // ================= 第三單元：自治與安全 (unit: 7) =================
    {
        id: 's3_q1', unit: 7, topic: '班級自治（班會）',
        q: '班會進行時，負責「主持會議、讓大家輪流發言」的人是誰？',
        options: ['主席', '記錄', '老師', '風紀股長'],
        ans: 0,
        exp: '<span class="kw-highlight">主席</span>負責主持會議、維持秩序、讓大家輪流發言；<span class="kw-highlight">記錄</span>負責把討論內容和結果寫下來。'
    },
    {
        id: 's3_q2', unit: 7, topic: '班級自治（班會）',
        q: '班會中負責把大家的討論內容和決議「寫下來」的人是誰？',
        options: ['記錄', '主席', '班長', '衛生股長'],
        ans: 0,
        exp: '<span class="kw-highlight">記錄</span>要把提案、討論內容和表決結果寫成<span class="kw-highlight">會議紀錄</span>，方便大家日後查看與執行。'
    },
    {
        id: 's3_q3', unit: 7, topic: '班會的流程',
        q: '在班會中，同學想提出「班級要舉辦同樂會」的想法讓大家討論，這個步驟叫做什麼？',
        options: ['提案', '表決', '散會', '頒獎'],
        ans: 0,
        exp: '班會討論的步驟：<span class="kw-highlight">提案</span>（提出想法）→ <span class="kw-highlight">討論</span>（說明理由、交換意見）→ <span class="kw-highlight">表決</span>（投票決定）。'
    },
    {
        id: 's3_q4', unit: 7, topic: '表決的原則',
        q: '班會表決後，大多數人同意、少數人不同意，最後應該怎麼做？',
        options: ['少數服從多數，多數也要尊重少數的意見', '不同意的人可以不遵守', '由班長一個人決定', '重新吵架直到大家都同意'],
        ans: 0,
        exp: '民主的表決原則：<span class="kw-highlight">少數服從多數</span>，同時<span class="kw-highlight">多數尊重少數</span>，決議通過後大家都要遵守。'
    },
    {
        id: 's3_q5', unit: 7, topic: '發言的禮貌',
        q: '在班會中想要發表意見時，正確的做法是什麼？',
        options: ['先舉手，經過主席同意後再發言', '直接大聲說出來', '別人說話時一直插嘴', '在台下跟同學偷偷聊天'],
        ans: 0,
        exp: '開會時要<span class="kw-highlight">先舉手、經主席同意再發言</span>，並且<span class="kw-highlight">專心聆聽</span>別人的意見，不可以插嘴或人身攻擊。'
    },
    {
        id: 's3_q6', unit: 7, topic: '選舉幹部',
        q: '選舉班級幹部時，我們應該投票給什麼樣的同學？',
        options: ['有能力又負責任、願意為大家服務的同學', '請我吃糖果的同學', '只投給自己最好的朋友', '隨便亂投'],
        ans: 0,
        exp: '選舉幹部要選<span class="kw-highlight">有能力、負責任、熱心服務</span>的人，不能因為交情或收到好處就投票，這樣才公平。'
    },
    {
        id: 's3_q7', unit: 7, topic: '班級幹部的職責',
        q: '負責督導同學「打掃環境、維持教室整潔」的是哪一位幹部？',
        options: ['衛生股長', '學藝股長', '康樂股長', '總務股長'],
        ans: 0,
        exp: '<span class="kw-highlight">衛生股長</span>負責打掃與整潔；<span class="kw-highlight">學藝股長</span>負責教室布置與學習活動；<span class="kw-highlight">康樂股長</span>負責班級活動與體育。'
    },
    {
        id: 's3_q8', unit: 7, topic: '班級自治的意義',
        q: '班上的事情由同學們一起討論、決定並分工執行，這種方式叫做什麼？',
        options: ['班級自治', '獨裁', '放任', '比賽'],
        ans: 0,
        exp: '<span class="kw-highlight">班級自治</span>就是同學們自己管理班級事務：一起開會討論、選出幹部、分工合作，培養民主素養！'
    },
    {
        id: 's3_q9', unit: 7, topic: '班級公約',
        q: '全班一起討論訂出「上課要專心、下課不在走廊奔跑」等大家都要遵守的約定，這叫做什麼？',
        options: ['班級公約', '家規', '族譜', '課表'],
        ans: 0,
        exp: '<span class="kw-highlight">班級公約</span>是全班一起討論訂定的規範，因為是大家共同決定的，所以每個人都要遵守。'
    },
    {
        id: 's3_q10', unit: 7, topic: '校園安全（地震）',
        q: '上課時突然發生地震，我們應該立刻怎麼做？',
        options: ['趴下、掩護、穩住，躲在桌子下保護頭部', '立刻衝出教室搭電梯', '站到窗戶旁邊看外面', '大聲尖叫到處亂跑'],
        ans: 0,
        exp: '地震時要記住「<span class="kw-highlight">趴下、掩護、穩住</span>」：躲到堅固的桌子下保護頭頸部，遠離窗戶，搖晃停止後再依老師指示疏散。'
    },
    {
        id: 's3_q11', unit: 7, topic: '校園安全（火災）',
        q: '學校發生火災要逃生時，下列哪一個做法是「錯誤」的？',
        options: ['搭電梯快速逃生', '低姿勢沿著牆邊往安全出口移動', '聽從老師指揮疏散', '不要回頭拿書包'],
        ans: 0,
        exp: '火災時<span class="kw-highlight">絕對不可以搭電梯</span>（可能停電受困），要壓低身體、往安全出口逃生，記住「<span class="kw-highlight">小火快逃，濃煙關門</span>」！'
    },
    {
        id: 's3_q12', unit: 7, topic: '緊急求救電話',
        q: '看到有人受傷很嚴重或發生火災，要打哪一支電話求救？',
        options: ['119', '110', '104', '165'],
        ans: 0,
        exp: '<span class="kw-highlight">119</span>是消防與救護車專線（火災、受傷急救）；<span class="kw-highlight">110</span>是報警專線（遇到壞人、交通事故等）。'
    },
    {
        id: 's3_q13', unit: 7, topic: '校園安全（陌生人）',
        q: '放學時，有陌生人說「你媽媽叫我來接你」，要帶你走，應該怎麼辦？',
        options: ['不跟陌生人走，立刻告訴老師或警衛', '馬上跟他走', '收下他給的糖果再說', '偷偷跟著他去看看'],
        ans: 0,
        exp: '遇到陌生人要求跟他走，<span class="kw-highlight">不要跟著走、不要接受食物</span>，馬上<span class="kw-highlight">告訴老師、警衛或家人</span>確認！'
    },
    {
        id: 's3_q14', unit: 7, topic: '校園安全地圖',
        q: '同學們在學校平面圖上標出「容易發生危險的地方」與「安全的地方」，這張圖叫做什麼？',
        options: ['校園安全地圖', '世界地圖', '捷運路線圖', '藏寶圖'],
        ans: 0,
        exp: '<span class="kw-highlight">校園安全地圖</span>可以提醒大家哪些地方（如偏僻角落、樓梯轉角）要特別小心，遇到危險時知道該去哪裡求助。'
    },
    {
        id: 's3_q15', unit: 7, topic: '校園安全（遊戲）',
        q: '下課在校園活動時，下列哪一個行為最安全？',
        options: ['使用遊戲器材時排隊輪流', '在走廊和樓梯奔跑追逐', '從溜滑梯的出口往上爬', '在樓梯扶手上溜下來'],
        ans: 0,
        exp: '校園安全守則：<span class="kw-highlight">走廊不奔跑、樓梯靠右走、遊戲器材排隊輪流</span>，才能避免受傷！'
    },
    {
        id: 's3_q16', unit: 7, topic: '校園安全（受傷處理）',
        q: '在學校跌倒擦傷流血了，應該去學校的哪個地方處理傷口？',
        options: ['健康中心', '圖書館', '總務處', '操場'],
        ans: 0,
        exp: '在學校受傷或身體不舒服時，要到<span class="kw-highlight">健康中心</span>找<span class="kw-highlight">護理師</span>幫忙處理喔！'
    },
    {
        id: 's3_q17', unit: 7, topic: '防災演練',
        q: '學校為什麼要定期舉行「防災避難演練」？',
        options: ['讓大家熟悉逃生路線，真的發生災害時能冷靜應變', '因為上課太無聊', '為了讓大家去操場玩', '演練一點用處都沒有'],
        ans: 0,
        exp: '平時多<span class="kw-highlight">演練</span>，熟悉<span class="kw-highlight">避難路線和集合地點</span>，遇到真正的災害才不會慌張，能保護自己的安全。'
    },

    // ================= 第四單元：學習與成長 (unit: 8) =================
    {
        id: 's4_q1', unit: 8, topic: '學習的方法（預習）',
        q: '上課前先把明天要教的課文讀過一遍，找出看不懂的地方，這種學習方法叫做什麼？',
        options: ['預習', '複習', '考試', '休息'],
        ans: 0,
        exp: '<span class="kw-highlight">預習</span>是上課前先讀過內容，上課時就能更專心聽懂不會的地方；<span class="kw-highlight">複習</span>則是上完課後再溫習。'
    },
    {
        id: 's4_q2', unit: 8, topic: '學習的方法（複習）',
        q: '放學回家後，把今天老師教的重點再讀一次、寫練習題，這種學習方法叫做什麼？',
        options: ['複習', '預習', '請假', '發呆'],
        ans: 0,
        exp: '<span class="kw-highlight">複習</span>能幫助我們把學過的東西記得更牢，養成「<span class="kw-highlight">今日事、今日畢</span>」的好習慣！'
    },
    {
        id: 's4_q3', unit: 8, topic: '學習的方法（筆記）',
        q: '上課時把老師說的重點用簡單的文字或圖畫記下來，這樣做有什麼好處？',
        options: ['幫助整理重點，方便之後複習', '可以不用專心聽課', '讓課本變得很亂', '沒有任何好處'],
        ans: 0,
        exp: '<span class="kw-highlight">做筆記</span>能幫助我們抓住重點、整理思緒，考試前複習也更方便，可以搭配畫重點、心智圖等方法。'
    },
    {
        id: 's4_q4', unit: 8, topic: '學習的態度（發問）',
        q: '上課時有聽不懂的地方，最好的做法是什麼？',
        options: ['舉手發問或下課請教老師', '假裝聽懂就好', '直接放棄不學了', '抄同學的答案'],
        ans: 0,
        exp: '<span class="kw-highlight">不懂就問</span>是很好的學習態度！可以舉手發問、下課問老師或同學，把問題弄清楚。'
    },
    {
        id: 's4_q5', unit: 8, topic: '學習資源（圖書館）',
        q: '在學校圖書館借書時，下列哪一個行為是正確的？',
        options: ['愛惜書本，並在期限內歸還', '在書上亂畫重點', '借了很久都不還', '在圖書館裡大聲聊天'],
        ans: 0,
        exp: '圖書館的書是大家共用的<span class="kw-highlight">學習資源</span>，要<span class="kw-highlight">愛惜書本、按時歸還、保持安靜</span>。'
    },
    {
        id: 's4_q6', unit: 8, topic: '學習資源（網路）',
        q: '用網路查資料寫報告時，應該注意什麼？',
        options: ['多比較幾個可靠的來源，確認資料是否正確', '看到第一筆資料就全部照抄', '網路上的資料一定都是對的', '把自己的地址電話貼到網路上'],
        ans: 0,
        exp: '網路上的資料<span class="kw-highlight">不一定正確</span>，要多查證幾個可靠來源，並且<span class="kw-highlight">保護個人資料</span>，不隨便公開姓名、地址、電話。'
    },
    {
        id: 's4_q7', unit: 8, topic: '學習資源',
        q: '下列哪一個地方「不是」適合學習的資源？',
        options: ['陌生人邀請的網咖包廂', '圖書館', '博物館', '科學教育館'],
        ans: 0,
        exp: '<span class="kw-highlight">圖書館、博物館、科教館、美術館</span>等都是很棒的學習資源；陌生人邀約的地方則可能有危險，不要前往。'
    },
    {
        id: 's4_q8', unit: 8, topic: '多元的學習',
        q: '小華參加學校的「直笛社」，小美參加「籃球社」，這說明了什麼？',
        options: ['每個人可以依照興趣進行多元的學習', '只有讀課本才算學習', '參加社團是浪費時間', '大家都必須學一模一樣的東西'],
        ans: 0,
        exp: '學習不只是讀課本！參加<span class="kw-highlight">社團、才藝、運動、戶外教學</span>都是<span class="kw-highlight">多元學習</span>，能發現自己的興趣和專長。'
    },
    {
        id: 's4_q9', unit: 8, topic: '多元的學習（專長）',
        q: '小明數學很好，小英很會畫畫，小傑跑步很快，關於這件事下列哪一個想法最正確？',
        options: ['每個人都有不同的專長，應該互相欣賞', '只有數學好的人才是聰明的', '畫畫好沒有用', '跑步快的人一定不會讀書'],
        ans: 0,
        exp: '每個人都有<span class="kw-highlight">不同的長處與專長</span>，我們要<span class="kw-highlight">欣賞別人</span>的優點，也發揮自己的特色！'
    },
    {
        id: 's4_q10', unit: 8, topic: '時間管理',
        q: '放學回家後同時有功課要寫、又想看卡通，下列哪一種安排最好？',
        options: ['先完成功課，再安排時間看卡通', '先看卡通看到睡覺', '功課隨便寫寫就好', '叫爸媽幫忙寫功課'],
        ans: 0,
        exp: '學會<span class="kw-highlight">時間管理</span>：先完成重要的事（功課），再安排休閒時間，可以把每天要做的事寫成<span class="kw-highlight">計畫表</span>喔！'
    },
    {
        id: 's4_q11', unit: 8, topic: '學習計畫',
        q: '小明訂了一份「每天閱讀 20 分鐘」的學習計畫，要怎麼做計畫才容易成功？',
        options: ['目標具體可行，並且每天確實執行、記錄', '訂一個一天讀 10 本書的目標', '想到才做，想不到就算了', '只訂計畫不用執行'],
        ans: 0,
        exp: '好的學習計畫要<span class="kw-highlight">目標明確、做得到</span>，並且<span class="kw-highlight">持續執行、檢查進度</span>，遇到困難再調整。'
    },
    {
        id: 's4_q12', unit: 8, topic: '戶外教學',
        q: '學校舉辦戶外教學到博物館參觀，下列哪一個行為是正確的？',
        options: ['遵守館內規定，不觸摸展品，認真聽導覽', '在展覽廳奔跑嬉鬧', '偷偷摸展示品', '離開隊伍自己亂逛'],
        ans: 0,
        exp: '<span class="kw-highlight">戶外教學</span>也是學習的一種，要<span class="kw-highlight">遵守規定、跟著隊伍、認真聆聽</span>，才能學到更多。'
    },
    {
        id: 's4_q13', unit: 8, topic: '學習與成長',
        q: '小美練習跳繩，一開始只能跳 10 下，每天練習後能跳 100 下了，這告訴我們什麼？',
        options: ['持續努力練習就會進步', '天生不會的事情永遠學不會', '練習沒有任何用處', '只要靠運氣就好'],
        ans: 0,
        exp: '<span class="kw-highlight">持之以恆、不斷練習</span>，就能一點一點進步，這就是成長！遇到困難不要輕易放棄喔。'
    },
    {
        id: 's4_q14', unit: 8, topic: '終身學習',
        q: '爺爺退休後去社區大學學電腦，這說明了什麼觀念？',
        options: ['活到老、學到老（終身學習）', '只有小孩需要學習', '老人家不能學新東西', '學習只能在小學進行'],
        ans: 0,
        exp: '學習沒有年齡限制，<span class="kw-highlight">活到老、學到老</span>就是「<span class="kw-highlight">終身學習</span>」的精神！'
    },
    {
        id: 's4_q15', unit: 8, topic: '學習的態度',
        q: '考試成績不理想時，下列哪一種態度最好？',
        options: ['找出錯誤的原因，訂正後再努力', '把考卷藏起來不讓家人看', '怪老師題目出太難', '從此不想再讀書'],
        ans: 0,
        exp: '面對失敗要<span class="kw-highlight">找出原因、訂正錯誤</span>，把錯題弄懂就是進步的機會（就像遊戲裡的錯題修練室）！'
    },
    {
        id: 's4_q16', unit: 8, topic: '請教他人',
        q: '想知道「以前的人怎麼過生活」，下列哪一個方法最能得到第一手的資料？',
        options: ['訪問家中的長輩', '隨便猜一猜', '問剛出生的小嬰兒', '看卡通'],
        ans: 0,
        exp: '<span class="kw-highlight">訪問長輩</span>也是一種學習方法！家人、社區耆老都有豐富的經驗，可以事先準備問題再去訪問。'
    },

    // ================= 第五單元：和諧的相處 (unit: 9) =================
    {
        id: 's5_q1', unit: 9, topic: '班級裡的人際關係',
        q: '新學期班上來了一位轉學生，下列哪一個做法最友善？',
        options: ['主動打招呼，邀請他一起玩', '故意不理他', '取笑他的口音', '跟同學說不要跟他玩'],
        ans: 0,
        exp: '<span class="kw-highlight">主動關心、打招呼、邀請參與</span>，能幫助新同學適應環境，也能交到新朋友！'
    },
    {
        id: 's5_q2', unit: 9, topic: '交朋友的方法',
        q: '下列哪一個是交到好朋友的好方法？',
        options: ['真誠待人、願意分享、互相幫助', '常常說別人壞話', '只跟成績好的人做朋友', '用東西收買同學'],
        ans: 0,
        exp: '交朋友要<span class="kw-highlight">真誠、友善、願意分享和幫助別人</span>，好朋友之間也要互相尊重。'
    },
    {
        id: 's5_q3', unit: 9, topic: '化解衝突',
        q: '和同學因為誤會而吵架，下列哪一種做法最能化解衝突？',
        options: ['先冷靜下來，再好好溝通說出彼此的感受', '動手推打對方', '找其他同學一起排擠他', '在網路上罵他'],
        ans: 0,
        exp: '發生衝突時要<span class="kw-highlight">先冷靜</span>，再用<span class="kw-highlight">溝通</span>說出感受和想法，必要時請老師協助，不可以用暴力解決。'
    },
    {
        id: 's5_q4', unit: 9, topic: '道歉與原諒',
        q: '不小心撞倒同學的水壺，水灑了一地，應該怎麼做？',
        options: ['立刻說對不起，並幫忙收拾', '假裝不是自己做的', '怪同學把水壺放錯地方', '笑一笑就走開'],
        ans: 0,
        exp: '做錯事要<span class="kw-highlight">勇於認錯、真心道歉</span>，並且<span class="kw-highlight">負責彌補</span>；對方道歉時，我們也要學會原諒。'
    },
    {
        id: 's5_q5', unit: 9, topic: '同理心',
        q: '「如果我是他，我會有什麼感覺？」這種站在別人立場想事情的能力叫做什麼？',
        options: ['同理心（換位思考）', '好勝心', '自私心', '好奇心'],
        ans: 0,
        exp: '<span class="kw-highlight">同理心</span>就是<span class="kw-highlight">換位思考</span>，想想別人的感受，就比較不會說出傷人的話，人際關係也會更好。'
    },
    {
        id: 's5_q6', unit: 9, topic: '拒絕霸凌',
        q: '下列哪一個行為屬於「霸凌」？',
        options: ['一直故意嘲笑、排擠或欺負某位同學', '和同學一起討論功課', '借橡皮擦給同學', '下課一起打球'],
        ans: 0,
        exp: '<span class="kw-highlight">故意且重複</span>地用言語、肢體、排擠或網路欺負別人，就是<span class="kw-highlight">霸凌</span>，這是不對的行為！'
    },
    {
        id: 's5_q7', unit: 9, topic: '拒絕霸凌',
        q: '看到同學被別人欺負，下列哪一種做法最恰當？',
        options: ['告訴老師或家長，請大人幫忙處理', '在旁邊一起起鬨', '拍影片傳到網路上', '假裝沒看到'],
        ans: 0,
        exp: '遇到霸凌不要當旁觀者或加害者，要<span class="kw-highlight">勇敢告訴老師、家長</span>，一起保護被欺負的同學。'
    },
    {
        id: 's5_q8', unit: 9, topic: '尊重他人',
        q: '幫同學取「難聽的綽號」並一直叫他，下列哪一個說法正確？',
        options: ['會傷害別人的感受，是不尊重的行為', '只是開玩笑沒關係', '大家都在叫所以沒問題', '可以讓同學更受歡迎'],
        ans: 0,
        exp: '取<span class="kw-highlight">難聽的綽號</span>會讓別人難過，是一種<span class="kw-highlight">言語傷害</span>，我們要尊重別人，叫對方喜歡的名字。'
    },
    {
        id: 's5_q9', unit: 9, topic: '性別平等',
        q: '關於興趣和工作，下列哪一個想法符合「性別平等」？',
        options: ['男生可以學跳舞，女生也可以踢足球', '男生不可以哭', '女生不適合當科學家', '只有女生需要做家事'],
        ans: 0,
        exp: '興趣、能力和工作<span class="kw-highlight">不應該被性別限制</span>！每個人都可以依照自己的興趣選擇，這就是<span class="kw-highlight">性別平等</span>。'
    },
    {
        id: 's5_q10', unit: 9, topic: '刻板印象',
        q: '「女生一定喜歡粉紅色，男生一定喜歡藍色」，這種把某一群人想成都一樣的想法叫做什麼？',
        options: ['刻板印象', '同理心', '尊重', '合作'],
        ans: 0,
        exp: '把某一群人都想成一樣，叫做<span class="kw-highlight">刻板印象</span>。其實每個人都不一樣，喜歡什麼顏色都可以！'
    },
    {
        id: 's5_q11', unit: 9, topic: '尊重差異',
        q: '班上有位同學需要坐輪椅，下列哪一個做法最恰當？',
        options: ['尊重他，在他需要時詢問並提供協助', '取笑他走路的方式', '不讓他參加班級活動', '一直盯著他看'],
        ans: 0,
        exp: '面對身心障礙的同學，要<span class="kw-highlight">尊重、接納</span>，需要幫忙時<span class="kw-highlight">先詢問對方意願</span>再協助，讓每個人都能參與。'
    },
    {
        id: 's5_q12', unit: 9, topic: '尊重多元文化',
        q: '同學分享他的家人在過「開齋節」或其他不同文化的節日，我們應該抱持什麼態度？',
        options: ['好奇學習、尊重不同的文化', '覺得很奇怪而取笑他', '叫他不要再說了', '認為只有自己的文化是對的'],
        ans: 0,
        exp: '每個文化都有自己的特色，我們要<span class="kw-highlight">尊重並欣賞多元文化</span>，也可以藉機認識不同的生活方式。'
    },
    {
        id: 's5_q13', unit: 9, topic: '尊重隱私',
        q: '同學的日記本放在桌上，下列哪一個做法是正確的？',
        options: ['不偷看，尊重別人的隱私', '偷偷翻開來看', '拿給其他同學一起看', '把內容寫在黑板上'],
        ans: 0,
        exp: '每個人都有<span class="kw-highlight">隱私權</span>，未經同意不可以偷看別人的日記、信件或手機。'
    },
    {
        id: 's5_q14', unit: 9, topic: '身體自主權',
        q: '有人想碰觸你的身體讓你覺得不舒服，應該怎麼做？',
        options: ['勇敢說「不要」，並馬上告訴信任的大人', '忍耐不說', '覺得是自己的錯', '答應保守秘密'],
        ans: 0,
        exp: '我們的身體只屬於自己，有<span class="kw-highlight">身體自主權</span>！感到不舒服要<span class="kw-highlight">勇敢拒絕、立刻離開並告訴信任的大人</span>。'
    },
    {
        id: 's5_q15', unit: 9, topic: '平等與尊重',
        q: '分組時，大家都不想跟小明同一組，因為他動作比較慢，下列哪一個想法最好？',
        options: ['每個人都有優點，可以一起合作互相幫忙', '動作慢的人就不能參加', '讓小明自己一組', '一直催促並責罵小明'],
        ans: 0,
        exp: '每個人都應該被<span class="kw-highlight">平等對待</span>，不排擠任何人；找出每個人的優點、<span class="kw-highlight">互相幫助</span>，團隊會更好！'
    },
    {
        id: 's5_q16', unit: 9, topic: '網路禮儀',
        q: '在網路群組聊天時，下列哪一個行為是正確的？',
        options: ['用友善的語氣說話，不散布別人的照片或謠言', '在群組裡罵同學', '把同學的醜照傳出去', '假冒別人的帳號發言'],
        ans: 0,
        exp: '網路上也要有<span class="kw-highlight">禮貌與尊重</span>，不可以罵人、造謠或亂傳別人的照片，否則可能變成<span class="kw-highlight">網路霸凌</span>。'
    },

    // ================= 第六單元：學校與我 (unit: 10) =================
    {
        id: 's6_q1', unit: 10, topic: '合作',
        q: '運動會的「大隊接力」比賽中，全班要獲得好成績，最重要的是什麼？',
        options: ['大家分工合作、互相加油，練好交接棒', '只靠跑最快的同學', '跑輸了就怪別人', '不用練習'],
        ans: 0,
        exp: '團體比賽需要<span class="kw-highlight">分工合作</span>：每個人盡力跑好自己那一棒、練好交接，再加上互相鼓勵，才能發揮團隊力量！'
    },
    {
        id: 's6_q2', unit: 10, topic: '良性競爭',
        q: '下列哪一種比賽態度是「良性競爭」？',
        options: ['遵守規則、盡力表現，輸了也祝福對方', '為了贏可以偷偷作弊', '輸了就生氣罵人', '故意絆倒對手'],
        ans: 0,
        exp: '<span class="kw-highlight">良性競爭</span>是在<span class="kw-highlight">公平、遵守規則</span>的情況下努力表現，從比賽中學習、讓自己進步。'
    },
    {
        id: 's6_q3', unit: 10, topic: '運動家精神',
        q: '「勝不驕、敗不餒」是什麼意思？',
        options: ['贏了不驕傲，輸了也不灰心', '贏了要大聲嘲笑對手', '輸了就再也不比賽', '比賽結果一點都不重要所以不用努力'],
        ans: 0,
        exp: '<span class="kw-highlight">運動家精神</span>：贏了不驕傲、懂得謙虛；輸了不灰心、繼續努力，並且尊重對手和裁判。'
    },
    {
        id: 's6_q4', unit: 10, topic: '合作與競爭',
        q: '分組報告時，有組員什麼事都不做，下列哪一種做法最好？',
        options: ['討論分工，讓每個人都負責一部分工作', '全部讓一個人做', '把他趕出小組', '大家一起都不做'],
        ans: 0,
        exp: '小組合作要<span class="kw-highlight">分工</span>，讓每個人依照專長負責一部分，並<span class="kw-highlight">互相支援</span>，才能完成任務。'
    },
    {
        id: 's6_q5', unit: 10, topic: '學校是個小社會',
        q: '為什麼說「學校是個小社會」？',
        options: ['學校裡有不同的人分工合作，也有大家要遵守的規範', '因為學校很小', '因為學校裡有很多商店', '因為學校只有學生'],
        ans: 0,
        exp: '學校裡有<span class="kw-highlight">校長、老師、職員、學生、志工</span>等不同角色<span class="kw-highlight">分工合作</span>，也有大家要遵守的規範，就像一個小型社會！'
    },
    {
        id: 's6_q6', unit: 10, topic: '學校的成員',
        q: '負責領導全校、規劃學校發展方向的人是誰？',
        options: ['校長', '警衛', '班長', '工友'],
        ans: 0,
        exp: '<span class="kw-highlight">校長</span>負責領導學校、規劃學校的發展，和各處室主任、老師一起讓學校運作順利。'
    },
    {
        id: 's6_q7', unit: 10, topic: '學校的處室（教務處）',
        q: '學校裡負責「課程安排、教科書、編班和考試」等教學事務的處室是哪一個？',
        options: ['教務處', '總務處', '健康中心', '警衛室'],
        ans: 0,
        exp: '<span class="kw-highlight">教務處</span>負責和「<span class="kw-highlight">教學</span>」有關的事情，例如課表、教科書、編班、成績和各種學習活動。'
    },
    {
        id: 's6_q8', unit: 10, topic: '學校的處室（學務處）',
        q: '學校裡負責「學生生活常規、品德教育，以及運動會等學生活動」的處室是哪一個？',
        options: ['學務處', '教務處', '總務處', '圖書館'],
        ans: 0,
        exp: '<span class="kw-highlight">學務處</span>負責學生的<span class="kw-highlight">生活教育與各項活動</span>，例如路隊、品德教育、運動會和校外教學。'
    },
    {
        id: 's6_q9', unit: 10, topic: '學校的處室（總務處）',
        q: '教室的電燈壞了、門窗需要修理，應該請哪一個處室協助？',
        options: ['總務處', '教務處', '輔導室', '學務處'],
        ans: 0,
        exp: '<span class="kw-highlight">總務處</span>負責學校的<span class="kw-highlight">設備、修繕、採購和校園環境</span>，東西壞了就可以請總務處幫忙。'
    },
    {
        id: 's6_q10', unit: 10, topic: '學校的處室（輔導室）',
        q: '心情不好、有煩惱想找人聊聊，學校的哪一個處室可以提供協助？',
        options: ['輔導室', '總務處', '警衛室', '廚房'],
        ans: 0,
        exp: '<span class="kw-highlight">輔導室</span>有輔導老師，可以聽我們說心事、幫助我們解決學習、人際或心情上的困擾。'
    },
    {
        id: 's6_q11', unit: 10, topic: '為我們服務的人',
        q: '每天早上在學校門口和路口指揮交通、保護學生過馬路的是誰？',
        options: ['導護志工（愛心爸爸媽媽）與導護老師', '校長室秘書', '圖書館員', '廚房阿姨'],
        ans: 0,
        exp: '<span class="kw-highlight">導護志工、導護老師</span>每天守護我們上下學的交通安全，我們要遵守指揮並記得說聲謝謝！'
    },
    {
        id: 's6_q12', unit: 10, topic: '為我們服務的人',
        q: '負責管理學校大門進出、維護校園安全的人員是誰？',
        options: ['警衛', '護理師', '營養師', '輔導老師'],
        ans: 0,
        exp: '<span class="kw-highlight">警衛</span>負責學校大門的進出管理和校園巡邏，守護大家的安全。'
    },
    {
        id: 's6_q13', unit: 10, topic: '為我們服務的人',
        q: '負責設計營養午餐菜單、讓大家吃得健康均衡的是誰？',
        options: ['營養師', '警衛', '校長', '風紀股長'],
        ans: 0,
        exp: '<span class="kw-highlight">營養師</span>設計午餐菜單，和廚工阿姨一起準備美味又營養的午餐，我們要珍惜食物、不挑食！'
    },
    {
        id: 's6_q14', unit: 10, topic: '感謝服務的人',
        q: '學校裡有許多人在為我們服務，下列哪一個行為最能表達感謝？',
        options: ['見面主動問好、說謝謝，並愛護校園環境', '把垃圾亂丟讓工友阿姨撿', '對警衛伯伯沒禮貌', '覺得這是他們應該做的'],
        ans: 0,
        exp: '感謝為我們服務的人，可以<span class="kw-highlight">主動問好、說謝謝</span>，並用行動<span class="kw-highlight">愛護校園、遵守規定</span>，減輕他們的辛苦。'
    },
    {
        id: 's6_q15', unit: 10, topic: '學校的規範',
        q: '學校訂定「校規」，就像社會中的什麼？',
        options: ['法律與規範', '電視節目', '遊樂園', '菜單'],
        ans: 0,
        exp: '社會有<span class="kw-highlight">法律</span>維持秩序，學校也有<span class="kw-highlight">校規</span>，大家遵守規範，學校生活才會安全又有秩序。'
    },
    {
        id: 's6_q16', unit: 10, topic: '校園環境',
        q: '想快速認識學校各個建築和處室的位置，最好的工具是什麼？',
        options: ['學校平面圖', '世界地圖', '月曆', '課本封面'],
        ans: 0,
        exp: '<span class="kw-highlight">學校平面圖</span>畫出了各棟建築、處室、操場的位置，搭配<span class="kw-highlight">方位（上北下南、左西右東）</span>就能找到想去的地方。'
    },
    {
        id: 's6_q17', unit: 10, topic: '地圖方位',
        q: '一般地圖上如果沒有特別標示方位，通常是怎麼表示方向的？',
        options: ['上北、下南、左西、右東', '上南、下北、左東、右西', '上東、下西、左南、右北', '方向可以隨便定'],
        ans: 0,
        exp: '一般地圖的方位是<span class="kw-highlight">上北、下南、左西、右東</span>，如果地圖上有<span class="kw-highlight">指北針</span>符號，就以指北針為準。'
    }
];

const SOCIAL_ENCYCLOPEDIA = [
    {
        tab: '🏠 一、我的家庭',
        html: `<div class="space-y-3">
            <div class="p-3.5 bg-orange-50 border-2 border-orange-500 rounded-xl">
                <h4 class="font-black text-orange-900 text-base mb-1.5">👨‍👩‍👧 1. 親屬稱謂大整理</h4>
                <ul class="list-disc list-inside space-y-1 text-orange-950 font-medium">
                    <li><b>爸爸那邊</b>：爸爸的爸媽＝<span class="kw-highlight">爺爺、奶奶</span>；爸爸的哥哥＝<span class="kw-highlight">伯伯</span>（太太：伯母）；爸爸的弟弟＝<span class="kw-highlight">叔叔</span>（太太：嬸嬸）；爸爸的姊妹＝<span class="kw-highlight">姑姑</span>（丈夫：姑丈）。</li>
                    <li><b>媽媽那邊</b>：媽媽的爸媽＝<span class="kw-highlight">外公、外婆</span>；媽媽的兄弟＝<span class="kw-highlight">舅舅</span>（太太：舅媽）；媽媽的姊妹＝<span class="kw-highlight">阿姨</span>（丈夫：姨丈）。</li>
                    <li><b>堂 vs 表</b>：伯伯、叔叔的孩子是<span class="kw-highlight">堂</span>兄弟姊妹；姑姑、舅舅、阿姨的孩子是<span class="kw-highlight">表</span>兄弟姊妹。</li>
                </ul>
            </div>
            <div class="p-3.5 bg-amber-50 border-2 border-amber-500 rounded-xl">
                <h4 class="font-black text-amber-900 text-base mb-1.5">🏡 2. 家庭的組成與類型</h4>
                <ul class="list-disc list-inside space-y-1 text-amber-950 font-medium">
                    <li><b>成為家人的方式</b>：<span class="kw-highlight">血緣、婚姻、收養</span>。</li>
                    <li><span class="kw-highlight">小家庭</span>（父母＋子女）、<span class="kw-highlight">三代同堂</span>（祖父母＋父母＋子女）、<span class="kw-highlight">單親家庭</span>、<span class="kw-highlight">隔代教養</span>（祖父母照顧孫子女）、<span class="kw-highlight">新住民家庭</span>。</li>
                    <li><b>家庭紀錄</b>：<span class="kw-highlight">戶口名簿</span>記錄家庭成員與關係；<span class="kw-highlight">族譜</span>記錄家族世代。</li>
                    <li><b>親人往來</b>：春節吃<span class="kw-highlight">年夜飯</span>團圓、清明節<span class="kw-highlight">掃墓</span>、常打電話視訊問候。</li>
                </ul>
            </div>
        </div>`
    },
    {
        tab: '💞 二、家庭與倫理',
        html: `<div class="space-y-3">
            <div class="p-3.5 bg-rose-50 border-2 border-rose-500 rounded-xl">
                <h4 class="font-black text-rose-900 text-base mb-1.5">🧺 1. 家庭的五大功能</h4>
                <ul class="list-disc list-inside space-y-1 text-rose-950 font-medium">
                    <li><span class="kw-highlight">保護照顧</span>（養育、生病照顧）、<span class="kw-highlight">教育</span>（教禮貌、生活習慣）、<span class="kw-highlight">經濟</span>（工作賺錢提供生活所需）、<span class="kw-highlight">情感</span>（愛與關懷）、<span class="kw-highlight">休閒娛樂</span>（全家出遊）。</li>
                    <li><b>家務分工</b>：家事<span class="kw-highlight">不分男女</span>，每個人依能力分擔，選擇安全、適合年齡的家事。</li>
                </ul>
            </div>
            <div class="p-3.5 bg-pink-50 border-2 border-pink-400 rounded-xl">
                <h4 class="font-black text-pink-900 text-base mb-1.5">🙏 2. 家庭倫理與溝通</h4>
                <ul class="list-disc list-inside space-y-1 text-pink-950 font-medium">
                    <li><span class="kw-highlight">父母慈愛、子女孝順、兄友弟恭</span>；出門說再見、回家打招呼（出必告、反必面）。</li>
                    <li>意見不同時要<span class="kw-highlight">冷靜溝通、傾聽對方</span>，可以召開<span class="kw-highlight">家庭會議</span>一起決定。</li>
                    <li>遵守<span class="kw-highlight">家規</span>，用卡片、幫忙做家事等方式表達<span class="kw-highlight">感恩</span>。</li>
                </ul>
            </div>
        </div>`
    },
    {
        tab: '🗳️ 三、自治與安全',
        html: `<div class="space-y-3">
            <div class="p-3.5 bg-sky-50 border-2 border-sky-500 rounded-xl">
                <h4 class="font-black text-sky-900 text-base mb-1.5">🗳️ 1. 班級自治與班會</h4>
                <ul class="list-disc list-inside space-y-1 text-sky-950 font-medium">
                    <li><span class="kw-highlight">主席</span>主持會議；<span class="kw-highlight">記錄</span>寫會議紀錄。</li>
                    <li>班會流程：<span class="kw-highlight">提案 ➔ 討論 ➔ 表決</span>；舉手經主席同意再發言。</li>
                    <li>表決原則：<span class="kw-highlight">少數服從多數、多數尊重少數</span>。</li>
                    <li>選幹部選<span class="kw-highlight">有能力、負責任</span>的人；衛生股長管整潔、學藝股長管布置學習、康樂股長管活動。</li>
                </ul>
            </div>
            <div class="p-3.5 bg-emerald-50 border-2 border-emerald-500 rounded-xl">
                <h4 class="font-black text-emerald-900 text-base mb-1.5">🚨 2. 校園安全與防災</h4>
                <ul class="list-disc list-inside space-y-1 text-emerald-950 font-medium">
                    <li>地震：「<span class="kw-highlight">趴下、掩護、穩住</span>」，遠離窗戶。</li>
                    <li>火災：<span class="kw-highlight">不搭電梯</span>、低姿勢逃生，「<span class="kw-highlight">小火快逃，濃煙關門</span>」。</li>
                    <li>求救電話：<span class="kw-highlight">119</span>（火災、救護）、<span class="kw-highlight">110</span>（報警）。</li>
                    <li>不跟陌生人走、走廊不奔跑；受傷到<span class="kw-highlight">健康中心</span>；用<span class="kw-highlight">校園安全地圖</span>標出危險角落。</li>
                </ul>
            </div>
        </div>`
    },
    {
        tab: '📚 四、學習與成長',
        html: `<div class="space-y-3">
            <div class="p-3.5 bg-violet-50 border-2 border-violet-500 rounded-xl">
                <h4 class="font-black text-violet-900 text-base mb-1.5">✏️ 1. 學習的方法</h4>
                <ul class="list-disc list-inside space-y-1 text-violet-950 font-medium">
                    <li><span class="kw-highlight">預習</span>（上課前先讀）➔ <span class="kw-highlight">專心上課、做筆記、發問</span> ➔ <span class="kw-highlight">複習</span>（回家再溫習）。</li>
                    <li><b>時間管理</b>：先做重要的事（功課），訂定<span class="kw-highlight">具體可行</span>的學習計畫並確實執行。</li>
                    <li>考不好要<span class="kw-highlight">找出原因、訂正錯誤</span>。</li>
                </ul>
            </div>
            <div class="p-3.5 bg-indigo-50 border-2 border-indigo-400 rounded-xl">
                <h4 class="font-black text-indigo-900 text-base mb-1.5">🌍 2. 學習資源與多元學習</h4>
                <ul class="list-disc list-inside space-y-1 text-indigo-950 font-medium">
                    <li><b>學習資源</b>：<span class="kw-highlight">圖書館</span>（愛惜書、按時還）、博物館、科教館、<span class="kw-highlight">網路</span>（多方查證、保護個資）、訪問長輩。</li>
                    <li><b>多元學習</b>：社團、才藝、運動、戶外教學；每個人<span class="kw-highlight">專長不同</span>，要互相欣賞。</li>
                    <li><span class="kw-highlight">終身學習</span>：活到老、學到老！</li>
                </ul>
            </div>
        </div>`
    },
    {
        tab: '🌈 五、和諧的相處',
        html: `<div class="space-y-3">
            <div class="p-3.5 bg-emerald-50 border-2 border-emerald-500 rounded-xl">
                <h4 class="font-black text-emerald-900 text-base mb-1.5">🤝 1. 班級裡的人際關係</h4>
                <ul class="list-disc list-inside space-y-1 text-emerald-950 font-medium">
                    <li>交朋友：<span class="kw-highlight">真誠、主動、分享、互助</span>。</li>
                    <li>衝突時：<span class="kw-highlight">先冷靜、再溝通</span>，做錯要道歉，也要學會原諒；用<span class="kw-highlight">同理心</span>換位思考。</li>
                    <li><b>霸凌</b>：故意且重複欺負別人（言語、肢體、排擠、網路）；看到要<span class="kw-highlight">告訴老師或家長</span>。</li>
                </ul>
            </div>
            <div class="p-3.5 bg-yellow-50 border-2 border-yellow-500 rounded-xl">
                <h4 class="font-black text-yellow-900 text-base mb-1.5">⚖️ 2. 平等與尊重</h4>
                <ul class="list-disc list-inside space-y-1 text-yellow-950 font-medium">
                    <li><span class="kw-highlight">性別平等</span>：興趣與工作不受性別限制；打破<span class="kw-highlight">刻板印象</span>。</li>
                    <li>尊重<span class="kw-highlight">身心障礙</span>同學、<span class="kw-highlight">多元文化</span>，不取難聽綽號。</li>
                    <li>尊重<span class="kw-highlight">隱私</span>（不偷看日記）與<span class="kw-highlight">身體自主權</span>（勇敢說不）；網路上也要有禮貌。</li>
                </ul>
            </div>
        </div>`
    },
    {
        tab: '🏫 六、學校與我',
        html: `<div class="space-y-3">
            <div class="p-3.5 bg-amber-50 border-2 border-amber-500 rounded-xl">
                <h4 class="font-black text-amber-900 text-base mb-1.5">🏃 1. 合作與競爭</h4>
                <ul class="list-disc list-inside space-y-1 text-amber-950 font-medium">
                    <li><span class="kw-highlight">分工合作</span>：每個人負責一部分、互相支援。</li>
                    <li><span class="kw-highlight">良性競爭</span>：遵守規則、公平比賽，不作弊。</li>
                    <li><span class="kw-highlight">運動家精神</span>：勝不驕、敗不餒，尊重對手與裁判。</li>
                </ul>
            </div>
            <div class="p-3.5 bg-lime-50 border-2 border-lime-500 rounded-xl">
                <h4 class="font-black text-lime-900 text-base mb-1.5">🏫 2. 學校是個小社會</h4>
                <ul class="list-disc list-inside space-y-1 text-lime-950 font-medium">
                    <li><span class="kw-highlight">教務處</span>：課程、教科書、編班；<span class="kw-highlight">學務處</span>：生活教育、學生活動；<span class="kw-highlight">總務處</span>：設備修繕；<span class="kw-highlight">輔導室</span>：心理輔導；<span class="kw-highlight">健康中心</span>：受傷生病。</li>
                    <li>為我們服務的人：校長、老師、警衛、護理師、營養師、廚工、導護志工……要記得<span class="kw-highlight">說謝謝</span>！</li>
                    <li><span class="kw-highlight">校規</span>就像社會的法律；看<span class="kw-highlight">學校平面圖</span>：上北下南、左西右東。</li>
                </ul>
            </div>
        </div>`
    }
];
