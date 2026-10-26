/* ==========================================================================
   星願召喚（抽卡）：品質階級、機率、召喚限定的裝備／造型／寵物
   造型由下方的 SVG 樣板函式組合，換顏色就能做出新的道具
   ========================================================================== */

// rate 為單抽機率（%），refund 為強化滿級後重複抽到時退還的星鑽
const RARITIES = [
    { id: 'N', name: '普通', rate: 40, refund: 1, badge: 'bg-stone-400 text-white', glow: '#a8a29e', text: 'text-stone-600' },
    { id: 'R', name: '稀有', rate: 32, refund: 2, badge: 'bg-emerald-500 text-white', glow: '#10b981', text: 'text-emerald-700' },
    { id: 'SR', name: '精良', rate: 18, refund: 5, badge: 'bg-sky-500 text-white', glow: '#0ea5e9', text: 'text-sky-700' },
    { id: 'SSR', name: '史詩', rate: 7, refund: 10, badge: 'bg-purple-600 text-white', glow: '#9333ea', text: 'text-purple-700' },
    { id: 'UR', name: '傳奇', rate: 2.5, refund: 30, badge: 'bg-orange-500 text-white', glow: '#f97316', text: 'text-orange-700' },
    { id: 'SP', name: '神聖', rate: 0.5, refund: 60, badge: 'bg-gradient-to-r from-pink-500 via-amber-400 to-cyan-500 text-white', glow: '#ec4899', text: 'text-pink-700' }
];

const GACHA_COST_SINGLE = 10;
const GACHA_COST_TEN = 90;
const GACHA_PITY = 100;          // 累積 100 抽沒出傳奇以上，第 100 抽必出
const ITEM_MAX_LEVEL = 5;        // 重複抽到可強化到 +5，每級加成 +10%

// 第一、二版就有的道具品質
const EXISTING_ITEM_RARITY = {
    adventurer: 'N', elf_ranger: 'N', star_mage: 'R', gold_paladin: 'R', cyber_doctor: 'SR', ocean_diver: 'SR', thunder_ninja: 'SSR', galaxy_emperor: 'UR',
    wood_staff: 'N', magnet_hammer: 'R', solar_sword: 'R', alchemy_wand: 'SR', wind_bow: 'SR', thunder_spear: 'SSR', galaxy_scepter: 'UR',
    fox_stardust: 'R', mini_magnet: 'R', cloud_sprite: 'SR', leaf_turtle: 'SR', owl_sage: 'SSR', baby_dragon: 'UR'
};

/* ---------- 武器樣板（畫在勇者 120×120 畫布右側） ---------- */
const sparkle = (x, y, c = '#fef08a') => `<polygon points="${x},${y - 6} ${x + 2},${y - 2} ${x + 6},${y} ${x + 2},${y + 2} ${x},${y + 6} ${x - 2},${y + 2} ${x - 6},${y} ${x - 2},${y - 2}" fill="${c}"/>`;
const W = {
    sword: (blade, guard, hilt, gem, aura = '') => `<g transform="translate(80, 34)">${aura}<polygon points="16,0 24,40 16,46 8,40" fill="${blade}" stroke="#334155" stroke-width="2.5"/><line x1="16" y1="8" x2="16" y2="38" stroke="#fff" stroke-opacity="0.6" stroke-width="2"/><rect x="2" y="40" width="28" height="6" rx="3" fill="${guard}" stroke="#334155" stroke-width="2"/><line x1="16" y1="46" x2="13" y2="62" stroke="${hilt}" stroke-width="5" stroke-linecap="round"/><circle cx="16" cy="43" r="3" fill="${gem}"/></g>`,
    staff: (shaft, orb, glow, aura = '') => `<g transform="translate(80, 38)">${aura}<line x1="16" y1="14" x2="6" y2="62" stroke="${shaft}" stroke-width="5" stroke-linecap="round"/><circle cx="17" cy="12" r="11" fill="${glow}" opacity="0.45"/><circle cx="17" cy="12" r="7" fill="${orb}" stroke="#1e293b" stroke-width="2.5"/></g>`,
    bow: (wood, string, tip, aura = '') => `<g transform="translate(80, 38)">${aura}<path d="M10 2 Q34 30 10 58" fill="none" stroke="${wood}" stroke-width="5" stroke-linecap="round"/><line x1="10" y1="2" x2="10" y2="58" stroke="${string}" stroke-width="2"/><line x1="2" y1="30" x2="30" y2="30" stroke="#78350f" stroke-width="3"/><polygon points="32,30 25,26 25,34" fill="${tip}"/></g>`,
    spear: (shaft, tip, ribbon, aura = '') => `<g transform="translate(80, 30)">${aura}<line x1="18" y1="14" x2="6" y2="68" stroke="${shaft}" stroke-width="5" stroke-linecap="round"/><polygon points="18,0 25,16 18,22 11,16" fill="${tip}" stroke="#1e293b" stroke-width="2.5"/><path d="M14 22 Q6 26 10 32" fill="none" stroke="${ribbon}" stroke-width="3"/></g>`,
    hammer: (head, shaft, band, aura = '') => `<g transform="translate(78, 44)">${aura}<line x1="16" y1="16" x2="6" y2="56" stroke="${shaft}" stroke-width="6" stroke-linecap="round"/><rect x="2" y="2" width="28" height="16" rx="4" fill="${head}" stroke="#1e293b" stroke-width="2.5"/><rect x="13" y="2" width="6" height="16" fill="${band}"/></g>`,
    tome: (cover, page, gem, aura = '') => `<g transform="translate(84, 58)">${aura}<rect x="0" y="0" width="24" height="30" rx="3" fill="${cover}" stroke="#1e293b" stroke-width="2.5"/><rect x="4" y="3" width="17" height="24" rx="1" fill="${page}"/><circle cx="12" cy="15" r="5" fill="${gem}" stroke="#1e293b" stroke-width="1.5"/></g>`,
    spoon: (bowl, handle) => `<g transform="translate(82, 44)"><ellipse cx="16" cy="10" rx="9" ry="11" fill="${bowl}" stroke="#334155" stroke-width="2.5"/><line x1="14" y1="20" x2="8" y2="58" stroke="${handle}" stroke-width="5" stroke-linecap="round"/></g>`
};

/* ---------- 造型樣板：帽子／頭飾 + 衣服 ---------- */
const H = {
    wizard: (c, trim, star) => `<path d="M20 52 L60 10 L100 52 Z" fill="${c}" stroke="#1e1b4b" stroke-width="4"/><ellipse cx="60" cy="52" rx="40" ry="8" fill="${trim}" stroke="#1e1b4b" stroke-width="3.5"/>${sparkle(60, 30, star)}`,
    crown: (c, gem) => `<polygon points="36,50 40,24 50,38 60,18 70,38 80,24 84,50" fill="${c}" stroke="#78350f" stroke-width="3.5" stroke-linejoin="round"/><circle cx="60" cy="40" r="4.5" fill="${gem}"/>`,
    helmet: (c, plume) => `<path d="M30 54 Q30 22 60 22 Q90 22 90 54 Z" fill="${c}" stroke="#1e293b" stroke-width="4"/><rect x="34" y="46" width="52" height="8" rx="3" fill="#475569"/><path d="M60 22 Q74 4 88 14" fill="none" stroke="${plume}" stroke-width="7" stroke-linecap="round"/>`,
    hood: (c, inner) => `<path d="M24 60 Q24 18 60 16 Q96 18 96 60 Q86 40 60 40 Q34 40 24 60 Z" fill="${c}" stroke="#1e293b" stroke-width="4"/><path d="M34 52 Q60 36 86 52" fill="none" stroke="${inner}" stroke-width="3"/>`,
    cap: (c, brim) => `<path d="M32 50 Q60 22 88 50 Z" fill="${c}" stroke="#1e293b" stroke-width="4"/><path d="M60 50 L98 54" stroke="${brim}" stroke-width="7" stroke-linecap="round"/>`,
    ears: (c, inner) => `<polygon points="34,50 38,18 56,40" fill="${c}" stroke="#1e293b" stroke-width="4" stroke-linejoin="round"/><polygon points="86,50 82,18 64,40" fill="${c}" stroke="#1e293b" stroke-width="4" stroke-linejoin="round"/><polygon points="40,42 41,28 50,38" fill="${inner}"/><polygon points="80,42 79,28 70,38" fill="${inner}"/>`,
    halo: (c, wing) => `<ellipse cx="60" cy="30" rx="22" ry="6" fill="none" stroke="${c}" stroke-width="5"/><path d="M22 70 Q4 50 14 34 Q26 50 36 58 Z" fill="${wing}" stroke="#94a3b8" stroke-width="2.5"/><path d="M98 70 Q116 50 106 34 Q94 50 84 58 Z" fill="${wing}" stroke="#94a3b8" stroke-width="2.5"/>`,
    horn: (c, mane) => `<path d="M40 48 Q60 34 80 48" fill="${mane}" stroke="#1e293b" stroke-width="3.5"/><polygon points="60,6 66,40 54,40" fill="${c}" stroke="#78350f" stroke-width="3"/><line x1="57" y1="20" x2="64" y2="22" stroke="#fff" stroke-width="2"/><line x1="56" y1="30" x2="65" y2="32" stroke="#fff" stroke-width="2"/>`
};
const B = {
    robe: (c, trim) => `<path d="M34 90 Q60 104 86 90 L92 112 L28 112 Z" fill="${c}" stroke="#1e293b" stroke-width="4"/><path d="M60 92 L60 112" stroke="${trim}" stroke-width="4"/><circle cx="60" cy="98" r="5" fill="${trim}"/>`,
    armor: (c, plate) => `<path d="M28 92 L92 92 L96 112 L24 112 Z" fill="${c}" stroke="#1e293b" stroke-width="4"/><rect x="42" y="90" width="36" height="22" rx="4" fill="${plate}" stroke="#1e293b" stroke-width="3"/><path d="M60 93 L60 109 M50 101 L70 101" stroke="#fff" stroke-width="3"/>`,
    cape: (c, c2) => `<path d="M26 92 Q60 106 94 92 L98 112 L22 112 Z" fill="${c}" stroke="#1e293b" stroke-width="4"/><path d="M40 96 Q60 108 80 96 L82 112 L38 112 Z" fill="${c2}"/>`,
    apron: (c, c2) => `<path d="M34 90 Q60 104 86 90 L92 112 L28 112 Z" fill="${c}" stroke="#1e293b" stroke-width="4"/><rect x="46" y="94" width="28" height="18" rx="3" fill="${c2}" stroke="#1e293b" stroke-width="2.5"/>`
};

/* ---------- 寵物樣板（80×80） ---------- */
const P = {
    cat: (c, belly, eye = '#1f2937') => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><polygon points="18,30 22,8 36,24" fill="${c}" stroke="#1e293b" stroke-width="3"/><polygon points="62,30 58,8 44,24" fill="${c}" stroke="#1e293b" stroke-width="3"/><circle cx="40" cy="44" r="24" fill="${c}" stroke="#1e293b" stroke-width="3.5"/><ellipse cx="40" cy="54" rx="12" ry="9" fill="${belly}"/><circle cx="31" cy="40" r="3.5" fill="${eye}"/><circle cx="49" cy="40" r="3.5" fill="${eye}"/><path d="M36 48 Q40 52 44 48" fill="none" stroke="#1e293b" stroke-width="2.5"/></svg>`,
    dog: (c, ear, belly) => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><ellipse cx="18" cy="34" rx="8" ry="15" fill="${ear}" stroke="#1e293b" stroke-width="3"/><ellipse cx="62" cy="34" rx="8" ry="15" fill="${ear}" stroke="#1e293b" stroke-width="3"/><circle cx="40" cy="42" r="23" fill="${c}" stroke="#1e293b" stroke-width="3.5"/><ellipse cx="40" cy="52" rx="11" ry="8" fill="${belly}"/><circle cx="31" cy="38" r="3.5" fill="#1f2937"/><circle cx="49" cy="38" r="3.5" fill="#1f2937"/><circle cx="40" cy="48" r="4" fill="#1f2937"/></svg>`,
    bunny: (c, inner) => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><ellipse cx="30" cy="16" rx="6" ry="16" fill="${c}" stroke="#1e293b" stroke-width="3"/><ellipse cx="50" cy="16" rx="6" ry="16" fill="${c}" stroke="#1e293b" stroke-width="3"/><ellipse cx="30" cy="16" rx="2.5" ry="10" fill="${inner}"/><ellipse cx="50" cy="16" rx="2.5" ry="10" fill="${inner}"/><circle cx="40" cy="48" r="22" fill="${c}" stroke="#1e293b" stroke-width="3.5"/><circle cx="32" cy="45" r="3" fill="#1f2937"/><circle cx="48" cy="45" r="3" fill="#1f2937"/><circle cx="40" cy="52" r="3" fill="#f472b6"/></svg>`,
    slime: (c, shine) => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><path d="M12 64 Q8 34 40 18 Q72 34 68 64 Z" fill="${c}" stroke="#1e293b" stroke-width="3.5"/><ellipse cx="28" cy="36" rx="5" ry="8" fill="${shine}" opacity="0.8"/><circle cx="32" cy="48" r="3.5" fill="#1f2937"/><circle cx="50" cy="48" r="3.5" fill="#1f2937"/><path d="M36 56 Q41 60 46 56" fill="none" stroke="#1e293b" stroke-width="2.5"/></svg>`,
    bird: (c, beak, wing) => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><circle cx="40" cy="44" r="24" fill="${c}" stroke="#1e293b" stroke-width="3.5"/><path d="M16 46 Q6 36 18 30 Q22 40 26 44 Z" fill="${wing}" stroke="#1e293b" stroke-width="2.5"/><path d="M64 46 Q74 36 62 30 Q58 40 54 44 Z" fill="${wing}" stroke="#1e293b" stroke-width="2.5"/><polygon points="34,48 46,48 40,56" fill="${beak}" stroke="#1e293b" stroke-width="2"/><circle cx="32" cy="40" r="3.5" fill="#1f2937"/><circle cx="48" cy="40" r="3.5" fill="#1f2937"/></svg>`,
    penguin: (c, belly) => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><ellipse cx="40" cy="44" rx="22" ry="27" fill="${c}" stroke="#1e293b" stroke-width="3.5"/><ellipse cx="40" cy="50" rx="14" ry="18" fill="${belly}"/><circle cx="33" cy="34" r="3" fill="#fff"/><circle cx="47" cy="34" r="3" fill="#fff"/><circle cx="33" cy="34" r="1.5" fill="#1f2937"/><circle cx="47" cy="34" r="1.5" fill="#1f2937"/><polygon points="36,40 44,40 40,46" fill="#f59e0b"/></svg>`,
    panda: () => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><circle cx="20" cy="22" r="8" fill="#1f2937"/><circle cx="60" cy="22" r="8" fill="#1f2937"/><circle cx="40" cy="44" r="24" fill="#fff" stroke="#1e293b" stroke-width="3.5"/><ellipse cx="31" cy="42" rx="6" ry="7" fill="#1f2937"/><ellipse cx="49" cy="42" rx="6" ry="7" fill="#1f2937"/><circle cx="32" cy="41" r="2" fill="#fff"/><circle cx="50" cy="41" r="2" fill="#fff"/><ellipse cx="40" cy="53" rx="4" ry="3" fill="#1f2937"/></svg>`,
    ghost: (c, cheek) => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><path d="M16 70 L16 38 Q16 14 40 14 Q64 14 64 38 L64 70 L56 62 L48 70 L40 62 L32 70 L24 62 Z" fill="${c}" stroke="#1e293b" stroke-width="3.5"/><circle cx="32" cy="38" r="4" fill="#1f2937"/><circle cx="48" cy="38" r="4" fill="#1f2937"/><circle cx="26" cy="46" r="3.5" fill="${cheek}"/><circle cx="54" cy="46" r="3.5" fill="${cheek}"/></svg>`,
    snail: (shell, body) => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><path d="M8 62 Q40 70 72 62 L70 56 Q40 60 12 56 Z" fill="${body}" stroke="#1e293b" stroke-width="3"/><circle cx="42" cy="40" r="20" fill="${shell}" stroke="#1e293b" stroke-width="3.5"/><path d="M42 40 m-12 0 a12 12 0 1 1 12 12 a8 8 0 1 1 -8 -8" fill="none" stroke="#1e293b" stroke-width="2.5"/><line x1="16" y1="56" x2="12" y2="40" stroke="#1e293b" stroke-width="2.5"/><circle cx="12" cy="38" r="3" fill="#1e293b"/></svg>`,
    dragon: (c, wing, horn) => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><path d="M14 40 Q4 26 18 22 Q20 34 26 36 Z" fill="${wing}" stroke="#1e293b" stroke-width="2.5"/><path d="M66 40 Q76 26 62 22 Q60 34 54 36 Z" fill="${wing}" stroke="#1e293b" stroke-width="2.5"/><circle cx="40" cy="46" r="22" fill="${c}" stroke="#1e293b" stroke-width="3.5"/><polygon points="30,26 34,12 38,26" fill="${horn}" stroke="#1e293b" stroke-width="2"/><polygon points="42,26 46,12 50,26" fill="${horn}" stroke="#1e293b" stroke-width="2"/><circle cx="32" cy="42" r="3.5" fill="#1f2937"/><circle cx="48" cy="42" r="3.5" fill="#1f2937"/><ellipse cx="40" cy="55" rx="10" ry="6" fill="#fff" opacity="0.6"/></svg>`,
    fox: (c, tail) => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><path d="M60 60 Q78 54 74 34 Q70 50 58 52 Z" fill="${tail}" stroke="#1e293b" stroke-width="2.5"/><path d="M66 66 Q80 70 78 50 Q72 62 62 60 Z" fill="${tail}" stroke="#1e293b" stroke-width="2.5"/><polygon points="15,35 22,10 38,28" fill="${c}" stroke="#1e293b" stroke-width="3"/><polygon points="65,35 58,10 42,28" fill="${c}" stroke="#1e293b" stroke-width="3"/><circle cx="40" cy="45" r="22" fill="${c}" stroke="#1e293b" stroke-width="3.5"/><path d="M22 48 Q40 64 58 48 Q52 66 40 66 Q28 66 22 48 Z" fill="#fff7ed"/><circle cx="32" cy="43" r="3.5" fill="#1f2937"/><circle cx="48" cy="43" r="3.5" fill="#1f2937"/></svg>`,
    phoenix: () => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><path d="M10 50 Q2 24 24 30 Q18 40 26 46 Z" fill="#f97316" stroke="#7c2d12" stroke-width="2.5"/><path d="M70 50 Q78 24 56 30 Q62 40 54 46 Z" fill="#f97316" stroke="#7c2d12" stroke-width="2.5"/><path d="M40 8 Q46 18 40 24 Q34 18 40 8 Z" fill="#fde047"/><circle cx="40" cy="44" r="20" fill="#ef4444" stroke="#7c2d12" stroke-width="3.5"/><path d="M30 66 Q40 78 50 66 L46 60 L40 70 L34 60 Z" fill="#fbbf24" stroke="#7c2d12" stroke-width="2"/><circle cx="33" cy="40" r="3" fill="#1f2937"/><circle cx="47" cy="40" r="3" fill="#1f2937"/><polygon points="36,46 44,46 40,52" fill="#fde047" stroke="#7c2d12" stroke-width="1.5"/></svg>`,
    unicorn: () => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><path d="M18 30 Q8 46 16 60 Q22 44 26 36 Z" fill="#f472b6"/><path d="M22 26 Q12 36 18 48" fill="none" stroke="#38bdf8" stroke-width="5" stroke-linecap="round"/><polygon points="40,2 45,24 35,24" fill="#fde047" stroke="#a16207" stroke-width="2"/><circle cx="42" cy="44" r="22" fill="#fff" stroke="#6b7280" stroke-width="3.5"/><circle cx="34" cy="40" r="3.5" fill="#1f2937"/><circle cx="52" cy="40" r="3.5" fill="#1f2937"/><circle cx="30" cy="48" r="3" fill="#f9a8d4"/><circle cx="56" cy="48" r="3" fill="#f9a8d4"/><path d="M38 52 Q43 56 48 52" fill="none" stroke="#6b7280" stroke-width="2.5"/></svg>`,
    qilin: () => `<svg viewBox="0 0 80 80" class="w-full h-full drop-shadow"><path d="M14 40 Q6 28 16 22 L24 34 Z" fill="#facc15" stroke="#1e293b" stroke-width="2.5"/><path d="M66 40 Q74 28 64 22 L56 34 Z" fill="#facc15" stroke="#1e293b" stroke-width="2.5"/><circle cx="40" cy="46" r="22" fill="#38bdf8" stroke="#1e293b" stroke-width="3.5"/><path d="M32 24 L28 10 L36 20 M48 24 L52 10 L44 20" stroke="#fde047" stroke-width="4" stroke-linecap="round" fill="none"/><circle cx="32" cy="42" r="3.5" fill="#1f2937"/><circle cx="48" cy="42" r="3.5" fill="#1f2937"/><path d="M30 56 L36 52 L40 58 L44 52 L50 56" fill="none" stroke="#fde047" stroke-width="3"/></svg>`
};

// 召喚限定的新武器（atkBonus 為攻擊力加成）
const GACHA_WEAPONS = [
    { id: 'g_wood_sword', rarity: 'N', name: '練習用木劍', desc: '劍道社的入門木劍，輕巧好揮。', atkBonus: 4, svg: W.sword('#d6a75c', '#92400e', '#78350f', '#fde68a') },
    { id: 'g_broom_staff', rarity: 'N', name: '竹掃把魔杖', desc: '打掃時也能施法的掃把杖！', atkBonus: 5, svg: W.staff('#a16207', '#84cc16', '#bef264') },
    { id: 'g_stir_spoon', rarity: 'N', name: '鍊金攪拌勺', desc: '廚房實驗必備，攪拌加速溶解！', atkBonus: 6, svg: W.spoon('#e2e8f0', '#94a3b8') },
    { id: 'g_bronze_sword', rarity: 'R', name: '青銅短劍', desc: '古代工匠打造的青銅劍。', atkBonus: 12, svg: W.sword('#d97706', '#78350f', '#451a03', '#22c55e') },
    { id: 'g_leaf_staff', rarity: 'R', name: '嫩葉精靈杖', desc: '杖頭冒出新芽，充滿光合作用的力量。', atkBonus: 13, svg: W.staff('#65a30d', '#22c55e', '#86efac') },
    { id: 'g_hunter_bow', rarity: 'R', name: '獵人木弓', desc: '森林獵人愛用的堅固木弓。', atkBonus: 14, svg: W.bow('#92400e', '#e2e8f0', '#64748b') },
    { id: 'g_ice_sword', rarity: 'SR', name: '寒冰長劍', desc: '劍身結滿冰晶，揮動時寒氣逼人。', atkBonus: 24, svg: W.sword('#bae6fd', '#0284c7', '#1e3a8a', '#e0f2fe') },
    { id: 'g_lava_hammer', rarity: 'SR', name: '岩漿戰錘', desc: '火山熔岩鍛造的灼熱戰錘。', atkBonus: 26, svg: W.hammer('#dc2626', '#451a03', '#f97316') },
    { id: 'g_tide_spear', rarity: 'SR', name: '海潮三叉戟', desc: '能召喚海浪的海神長槍。', atkBonus: 25, svg: W.spear('#0e7490', '#22d3ee', '#a5f3fc') },
    { id: 'g_ancient_tome', rarity: 'SR', name: '古老自然魔法書', desc: '記載著自然界所有秘密的書。', atkBonus: 22, svg: W.tome('#7c2d12', '#fef3c7', '#22c55e') },
    { id: 'g_thunder_sword', rarity: 'SSR', name: '雷霆聖劍', desc: '劍尖纏繞雷電，一擊震撼大地！', atkBonus: 40, svg: W.sword('#fde047', '#1e3a8a', '#1e293b', '#38bdf8', sparkle(4, 10, '#38bdf8')) },
    { id: 'g_moon_bow', rarity: 'SSR', name: '月光精靈弓', desc: '以月光為弦的精靈族神弓。', atkBonus: 42, svg: W.bow('#c4b5fd', '#fef9c3', '#a78bfa', sparkle(30, 6, '#fef9c3')) },
    { id: 'g_stardust_staff', rarity: 'SSR', name: '星塵賢者杖', desc: '杖頭封印著一顆小星星。', atkBonus: 44, svg: W.staff('#312e81', '#fde047', '#a78bfa', sparkle(30, 2)) },
    { id: 'g_phoenix_sword', rarity: 'UR', name: '鳳凰烈焰劍', desc: '不死鳥羽毛鍛造，烈焰永不熄滅！', atkBonus: 65, svg: W.sword('#f97316', '#b91c1c', '#7f1d1d', '#fde047', sparkle(2, 8, '#fb923c') + sparkle(30, 20, '#fde047')) },
    { id: 'g_worldtree_staff', rarity: 'UR', name: '世界樹之杖', desc: '從世界樹折下的神聖枝條。', atkBonus: 68, svg: W.staff('#14532d', '#4ade80', '#bbf7d0', sparkle(32, 0, '#bbf7d0') + sparkle(2, 4, '#4ade80')) },
    { id: 'g_sky_bow', rarity: 'UR', name: '天穹神弓', desc: '射出的箭能劃破天際的神器。', atkBonus: 66, svg: W.bow('#0ea5e9', '#fef08a', '#fbbf24', sparkle(32, 10) + sparkle(4, 50, '#7dd3fc')) },
    { id: 'g_genesis_sword', rarity: 'SP', name: '創世光輝聖劍', desc: '傳說中創造世界的光之劍，閃耀七彩光芒！', atkBonus: 100, svg: W.sword('#fef9c3', '#f472b6', '#7c3aed', '#22d3ee', sparkle(0, 6, '#f472b6') + sparkle(32, 4, '#22d3ee') + sparkle(30, 30, '#fde047')) },
    { id: 'g_chaos_scepter', rarity: 'SP', name: '混沌星河權杖', desc: '杖中旋轉著整條銀河的終極權杖！', atkBonus: 105, svg: W.staff('#1e1b4b', '#c084fc', '#f0abfc', sparkle(32, 2, '#f0abfc') + sparkle(2, 10, '#67e8f9') + sparkle(28, 26, '#fde047')) }
];

// 召喚限定的新造型（atkBonus 攻擊、hpBonus 生命上限）
const GACHA_OUTFITS = [
    { id: 'g_sport', rarity: 'N', name: '活力運動服', desc: '體育課最舒服的運動服裝。', atkBonus: 2, hpBonus: 10, bgCircle: '#dbeafe', strokeCircle: '#1d4ed8', hatSvg: H.cap('#2563eb', '#1e3a8a'), bodySvg: B.robe('#3b82f6', '#fff') },
    { id: 'g_chef', rarity: 'N', name: '小小廚師裝', desc: '廚房裡的科學實驗家！', atkBonus: 3, hpBonus: 10, bgCircle: '#fff7ed', strokeCircle: '#9a3412', hatSvg: `<path d="M38 50 L38 34 Q30 22 44 20 Q50 8 62 14 Q76 8 80 22 Q90 26 82 34 L82 50 Z" fill="#fff" stroke="#1e293b" stroke-width="4"/>`, bodySvg: B.apron('#fff', '#f97316') },
    { id: 'g_explorer', rarity: 'R', name: '森林探險家', desc: '戴著探險帽觀察植物的小博士。', atkBonus: 8, hpBonus: 20, bgCircle: '#ecfccb', strokeCircle: '#3f6212', hatSvg: H.cap('#a3a35b', '#65a30d'), bodySvg: B.robe('#84cc16', '#3f6212') },
    { id: 'g_snow', rarity: 'R', name: '雪國毛帽裝', desc: '毛茸茸的冬季裝，再冷都不怕。', atkBonus: 8, hpBonus: 30, bgCircle: '#f1f5f9', strokeCircle: '#334155', hatSvg: H.hood('#ef4444', '#fff'), bodySvg: B.cape('#dc2626', '#fef2f2') },
    { id: 'g_pirate', rarity: 'SR', name: '海盜船長裝', desc: '帥氣的船長帽與紅外套，揚帆出航！', atkBonus: 18, hpBonus: 30, bgCircle: '#fef3c7', strokeCircle: '#78350f', hatSvg: `<path d="M24 50 Q60 14 96 50 Q60 40 24 50 Z" fill="#1f2937" stroke="#0f172a" stroke-width="4"/><circle cx="60" cy="36" r="5" fill="#fff"/>`, bodySvg: B.armor('#b91c1c', '#fbbf24') },
    { id: 'g_panda', rarity: 'SR', name: '熊貓連帽裝', desc: '可愛又溫暖的熊貓布偶裝。', atkBonus: 16, hpBonus: 50, bgCircle: '#f8fafc', strokeCircle: '#1f2937', hatSvg: H.ears('#1f2937', '#f8fafc'), bodySvg: B.cape('#f8fafc', '#1f2937') },
    { id: 'g_samurai', rarity: 'SSR', name: '櫻花武士鎧', desc: '飄著櫻花瓣的武士戰甲。', atkBonus: 28, hpBonus: 60, bgCircle: '#fce7f3', strokeCircle: '#9d174d', hatSvg: H.helmet('#9d174d', '#f9a8d4'), bodySvg: B.armor('#be185d', '#fbcfe8') },
    { id: 'g_nightcat', rarity: 'SSR', name: '暗夜貓耳斗篷', desc: '神秘的盜賊斗篷，行動無聲無息。', atkBonus: 30, hpBonus: 40, bgCircle: '#ede9fe', strokeCircle: '#4c1d95', hatSvg: H.ears('#4c1d95', '#c4b5fd'), bodySvg: B.cape('#312e81', '#7c3aed') },
    { id: 'g_dragon_knight', rarity: 'UR', name: '龍騎士重鎧', desc: '以龍鱗打造，堅不可摧的重鎧。', atkBonus: 45, hpBonus: 120, bgCircle: '#dcfce7', strokeCircle: '#14532d', hatSvg: H.helmet('#15803d', '#facc15'), bodySvg: B.armor('#166534', '#facc15') },
    { id: 'g_angel', rarity: 'UR', name: '天使光翼禮服', desc: '背後展開潔白光翼的神聖禮服。', atkBonus: 48, hpBonus: 80, bgCircle: '#fefce8', strokeCircle: '#a16207', hatSvg: H.halo('#fde047', '#ffffff'), bodySvg: B.robe('#fefce8', '#fbbf24') },
    { id: 'g_star_god', rarity: 'SP', name: '星神創世戰甲', desc: '傳說中星辰之神穿戴的戰甲，閃耀宇宙光輝！', atkBonus: 70, hpBonus: 200, bgCircle: '#1e1b4b', strokeCircle: '#fde047', hatSvg: H.crown('#fde047', '#22d3ee') + sparkle(30, 30) + sparkle(92, 36, '#f472b6'), bodySvg: B.armor('#312e81', '#f472b6') },
    { id: 'g_unicorn_dress', rarity: 'SP', name: '彩虹獨角獸禮服', desc: '頭戴獨角、披著彩虹鬃毛的夢幻禮服！', atkBonus: 65, hpBonus: 220, bgCircle: '#fdf4ff', strokeCircle: '#c026d3', hatSvg: H.horn('#fde047', '#f472b6') + sparkle(28, 30, '#38bdf8'), bodySvg: B.cape('#f0abfc', '#38bdf8') }
];

// 召喚限定的新寵物（goldBonus 金幣、mpBonus 魔力、atkBonus 攻擊）
const GACHA_PETS = [
    { id: 'g_snail', rarity: 'N', name: '慢吞吞小蝸牛', desc: '雖然很慢，但會一直陪著你。', goldBonus: 3, svg: P.snail('#d97706', '#fde68a') },
    { id: 'g_chick', rarity: 'N', name: '嘰嘰小黃雞', desc: '毛茸茸的小雞，最愛跟在身後。', goldBonus: 3, mpBonus: 2, svg: P.bird('#fde047', '#f97316', '#facc15') },
    { id: 'g_green_slime', rarity: 'N', name: '綠色史萊姆', desc: '軟Q彈跳的史萊姆。', goldBonus: 4, mpBonus: 2, svg: P.slime('#4ade80', '#fff') },
    { id: 'g_orange_cat', rarity: 'R', name: '橘子貓', desc: '圓滾滾的橘貓，很會撒嬌。', goldBonus: 8, svg: P.cat('#fb923c', '#fff7ed') },
    { id: 'g_shiba', rarity: 'R', name: '小柴犬', desc: '忠心的柴犬，會幫你助陣攻擊！', goldBonus: 8, atkBonus: 3, svg: P.dog('#f59e0b', '#b45309', '#fffbeb') },
    { id: 'g_bunny', rarity: 'R', name: '跳跳兔', desc: '蹦蹦跳跳帶來好心情，補充魔力。', goldBonus: 5, mpBonus: 6, svg: P.bunny('#fff', '#fbcfe8') },
    { id: 'g_parrot', rarity: 'R', name: '學舌小鸚鵡', desc: '會幫你複誦重點的聰明鸚鵡。', goldBonus: 6, mpBonus: 4, svg: P.bird('#22c55e', '#facc15', '#ef4444') },
    { id: 'g_penguin', rarity: 'SR', name: '企鵝寶寶', desc: '搖搖擺擺的南極小可愛。', goldBonus: 12, mpBonus: 6, svg: P.penguin('#1e293b', '#fff') },
    { id: 'g_panda_cub', rarity: 'SR', name: '熊貓仔', desc: '力氣不小的熊貓寶寶，會一起出拳！', goldBonus: 12, atkBonus: 6, svg: P.panda() },
    { id: 'g_slime_king', rarity: 'SR', name: '藍色史萊姆王', desc: '史萊姆界的國王，魔力滿滿。', goldBonus: 10, mpBonus: 10, svg: P.slime('#38bdf8', '#e0f2fe') },
    { id: 'g_ice_dragon', rarity: 'SSR', name: '冰晶小龍', desc: '會噴出冰霧的小龍，攻守兼備。', goldBonus: 20, mpBonus: 10, atkBonus: 10, svg: P.dragon('#7dd3fc', '#e0f2fe', '#fff') },
    { id: 'g_ghost', rarity: 'SSR', name: '害羞小幽靈', desc: '只在你身邊出現的友善幽靈。', goldBonus: 15, mpBonus: 15, svg: P.ghost('#f8fafc', '#fda4af') },
    { id: 'g_ninetail', rarity: 'UR', name: '九尾靈狐', desc: '擁有九條尾巴的神獸，智慧無邊。', goldBonus: 30, mpBonus: 15, atkBonus: 15, svg: P.fox('#fef3c7', '#f9a8d4') },
    { id: 'g_qilin', rarity: 'UR', name: '雷電麒麟', desc: '傳說中帶來好運的神獸。', goldBonus: 28, mpBonus: 12, atkBonus: 20, svg: P.qilin() },
    { id: 'g_phoenix', rarity: 'SP', name: '不死鳥', desc: '浴火重生的神鳥，力量無可匹敵！', goldBonus: 40, mpBonus: 20, atkBonus: 25, svg: P.phoenix() },
    { id: 'g_unicorn', rarity: 'SP', name: '彩虹獨角獸', desc: '踏著彩虹而來的夢幻神獸！', goldBonus: 45, mpBonus: 25, atkBonus: 20, svg: P.unicorn() }
];
