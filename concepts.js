/* ==========================================================================
   單元觀念架構：依 114 學年度康軒三上課程計畫的「活動／課次」整理
   每一題都對應一個觀念（新題目寫在 concept 欄位，舊題目由 QUESTION_CONCEPT_MAP 對照）
   unit 與關卡 id 相同：自然 0~3、社會 5~10
   ========================================================================== */
const CONCEPTS = [
    // ---------- 自然 第一單元：多采多姿的植物 ----------
    { id: 'p_living', unit: 0, act: '活動一 植物是什麼', name: '生物與非生物', summary: '會生長、需要養分和水、能繁殖的是生物（動物、植物）；石頭、水、空氣、陽光是非生物。' },
    { id: 'p_parts', unit: 0, act: '活動一 植物是什麼', name: '植物的身體部位', summary: '大部分開花植物可分成根、莖、葉、花、果實、種子六個部位；蕨類等植物不會開花。' },
    { id: 'p_leaf', unit: 0, act: '活動二 植物如何獲取陽光和水', name: '葉的構造、葉脈與功能', summary: '葉由葉片、葉柄、葉脈組成；網狀脈常配軸根、平行脈常配鬚根；葉子利用陽光製造養分。' },
    { id: 'p_phyllotaxy', unit: 0, act: '活動二 植物如何獲取陽光和水', name: '葉序（葉的排列方式）', summary: '互生（一節一片）、對生（一節兩片相對）、輪生（一節三片以上）、叢生；排列能讓葉子少互相遮光。' },
    { id: 'p_stem', unit: 0, act: '活動二 植物如何獲取陽光和水', name: '莖的種類與功能', summary: '木本莖堅硬、草本莖柔軟、藤本莖要攀爬；莖能支撐身體、輸送水分，攀爬是為了照到更多陽光。' },
    { id: 'p_root', unit: 0, act: '活動二 植物如何獲取陽光和水', name: '根的種類與功能', summary: '軸根有明顯主根、鬚根粗細相近；根能固定植物、吸收水分，有些根會儲存養分（蘿蔔、地瓜）。' },
    { id: 'p_flower', unit: 0, act: '活動三 花、果實和種子有什麼功能', name: '花的構造與功能', summary: '花由外到內：花萼、花瓣、雄蕊、雌蕊；授粉後雌蕊下方發育成果實；不同季節開不同的花。' },
    { id: 'p_fruit', unit: 0, act: '活動三 花、果實和種子有什麼功能', name: '果實、種子與傳播', summary: '果實保護並幫助傳播種子：風力（蒲公英）、水力（椰子）、動物（鬼針草、鳥吃果實）、彈力（酢漿草）。' },
    { id: 'p_life', unit: 0, act: '活動三 花、果實和種子有什麼功能', name: '植物的一生與生活', summary: '種子→發芽→長根莖葉→開花→結果；發芽需要水、空氣、適當溫度；我們吃植物不同部位，要愛護植物。' },
    // ---------- 自然 第二單元：生活中的力 ----------
    { id: 'f_effect', unit: 1, act: '活動一 力的現象有哪些', name: '力的作用效果', summary: '力會讓物體形狀改變（有的能恢復、有的不能）或運動狀態改變（開始動、停下、變快變慢、轉向）。' },
    { id: 'f_elements', unit: 1, act: '活動一 力的現象有哪些', name: '力的大小、方向與作用點', summary: '力可用箭頭表示：長短是大小、指向是方向、起點是作用點；力越大，改變越明顯。' },
    { id: 'f_magnet_attract', unit: 1, act: '活動二 磁力有什麼特性', name: '磁鐵能吸引的物品', summary: '磁鐵會吸引含鐵（鈷、鎳）的物品，不吸鋁、銅、塑膠、木頭；隔著紙、塑膠、玻璃、水也能吸。' },
    { id: 'f_magnet_pole', unit: 1, act: '活動二 磁力有什麼特性', name: '磁極與指北針', summary: '磁鐵有 N、S 兩極，同極相斥、異極相吸；斷開後每段都有兩極；指北針的 N 極指北。' },
    { id: 'f_magnet_strength', unit: 1, act: '活動二 磁力有什麼特性', name: '磁力的強弱', summary: '兩端磁極磁力最強、中間最弱；距離越近磁力越強；可用吸起迴紋針的數量比較磁力。' },
    { id: 'f_types', unit: 1, act: '活動三 還有什麼不一樣的力', name: '接觸力與非接觸力', summary: '推、拉、踢、彈力要接觸才有作用；磁力、地球引力（重力）不用接觸也能作用。' },
    { id: 'f_buoyancy', unit: 1, act: '活動三 還有什麼不一樣的力', name: '浮力與水的推力', summary: '水中物體受到向上的浮力；改變形狀（黏土捏成船）會改變浮力；流動的水能推動物品、傳送動力。' },
    { id: 'f_magnet_use', unit: 1, act: '活動三 還有什麼不一樣的力', name: '磁鐵的應用與保存', summary: '冰箱門、磁扣、防盜扣、回收分類都用到磁鐵；鐵製品會被磁化；磁鐵怕摔、怕熱、別靠近磁卡。' },
    // ---------- 自然 第三單元：奇妙的空氣 ----------
    { id: 'a_exist', unit: 2, act: '活動一 空氣在哪裡', name: '空氣無所不在', summary: '空氣無色、無味、看不見，但到處都有；可用塑膠袋、氣泡、扇子的風來證明空氣存在。' },
    { id: 'a_space', unit: 2, act: '活動一 空氣在哪裡', name: '空氣占有空間、有重量', summary: '杯底紙巾不濕證明空氣占有空間；空氣沒有固定形狀；吹飽的氣球比較重，證明空氣有重量。' },
    { id: 'a_wind', unit: 2, act: '活動二 空氣還有什麼特性', name: '風的形成、風向與風力', summary: '空氣流動形成風；風向是「風吹來的方向」（北風往南吹）；旗子飄越高、風車轉越快表示風越大。' },
    { id: 'a_compress', unit: 2, act: '活動二 空氣還有什麼特性', name: '空氣可以被壓縮', summary: '空氣可被壓縮、放手會彈回（有彈性），水幾乎不能壓縮；壓縮空氣和流動空氣能傳送動力。' },
    { id: 'a_use', unit: 2, act: '活動三 乾淨空氣重要嗎', name: '空氣的用途與應用', summary: '生物呼吸、燃燒都需要空氣；輪胎、游泳圈、吸盤、氣球車都是空氣特性的應用。' },
    { id: 'a_clean', unit: 2, act: '活動三 乾淨空氣重要嗎', name: '空氣汙染與空氣品質', summary: '廢氣、燃燒垃圾會汙染空氣、影響健康；空氣品質指標紅、紫色要減少外出；多搭大眾運輸、種樹。' },
    // ---------- 自然 第四單元：廚房裡的科學 ----------
    { id: 'k_identify', unit: 3, act: '活動一 如何辨認廚房中的材料', name: '用感官安全辨認材料', summary: '用眼看、手摸、搧聞法觀察顆粒和氣味；未知材料絕對不能隨便嚐或猛聞；可用放大鏡。' },
    { id: 'k_dissolve', unit: 3, act: '活動一 如何辨認廚房中的材料', name: '溶解現象的判斷', summary: '溶解：看不見顆粒、均勻透明（可以有顏色）、沒有沉澱；溶解不是消失。麵粉、太白粉不易溶解。' },
    { id: 'k_speed', unit: 3, act: '活動一 如何辨認廚房中的材料', name: '加快溶解的方法', summary: '攪拌、提高水溫、把顆粒弄小，都能讓物質溶解得更快。' },
    { id: 'k_amount', unit: 3, act: '活動一 如何辨認廚房中的材料', name: '溶解量有限與公平實驗', summary: '定量的水溶解量有限，加水或提高水溫可溶更多；實驗只改變一個條件；量匙刮平、量筒視線平視。' },
    { id: 'k_separate', unit: 3, act: '活動一 如何辨認廚房中的材料', name: '利用溶解分離物質', summary: '可溶與不可溶的混合物：加水攪拌→過濾留下不溶物→把溶液晒乾（蒸發）取回溶解的物質。' },
    { id: 'k_acidbase', unit: 3, act: '活動二 怎麼辨認水溶液的酸鹼', name: '酸鹼與紫高麗菜汁', summary: '水溶液分酸、中、鹼；感官無法準確判斷；紫高麗菜汁遇酸變紅、遇鹼變藍綠、中性不變色。' },
    { id: 'k_fizz', unit: 3, act: '活動二 怎麼辨認水溶液的酸鹼', name: '小蘇打與酸的冒泡反應', summary: '小蘇打遇到酸性物質（白醋、檸檬酸）加水後會產生二氧化碳氣泡；發粉讓麵糊膨脹也是這個原理。' },
    { id: 'k_clean', unit: 3, act: '活動三 如何利用材料特性辨認材料', name: '材料特性與清潔', summary: '水無法清潔所有物質：油汙用肥皂、洗碗精；檸檬酸除水垢、小蘇打除茶垢；清潔劑不可混用、不可入口。' },

    // ---------- 社會 第一單元：我的家庭 ----------
    { id: 'h_type', unit: 5, act: '第1課 家庭的組成', name: '家庭的組成與類型', summary: '家人因血緣、婚姻、收養而組成；小家庭、三代同堂、單親、隔代教養、新住民家庭，每種家庭都值得尊重。' },
    { id: 'h_record', unit: 5, act: '第1課 家庭的組成', name: '姓名與家庭紀錄', summary: '姓名有長輩的期望；戶口名簿記錄家人與稱謂；族譜記錄家族世代；可訪問長輩、看老照片了解家族。' },
    { id: 'h_title', unit: 5, act: '第2課 親人的往來', name: '親屬稱謂', summary: '爸爸的兄弟是伯伯、叔叔，姊妹是姑姑；媽媽的兄弟是舅舅，姊妹是阿姨；伯叔的孩子是堂親，其他是表親。' },
    { id: 'h_contact', unit: 5, act: '第2課 親人的往來', name: '親人的往來與節日', summary: '春節團圓、清明掃墓、端午吃粽子、中秋賞月；婚喪喜慶互相往來；常打電話、視訊、探望維繫感情。' },
    // ---------- 社會 第二單元：家庭與倫理 ----------
    { id: 'e_function', unit: 6, act: '第1課 家庭的功能', name: '家庭的功能', summary: '保護照顧（養育）、教育、經濟、情感（愛與關懷）、休閒娛樂。' },
    { id: 'e_chores', unit: 6, act: '第1課 家庭的功能', name: '家務分工', summary: '家是大家的，家事要依能力和時間分工；家事不分男女；做家事能學會生活技能、體會家人辛苦。' },
    { id: 'e_ethic', unit: 6, act: '第2課 家庭的倫理', name: '家庭倫理與禮貌', summary: '父母慈愛、子女孝順、兄友弟恭、長幼有序；出必告反必面；用行動感謝家人。' },
    { id: 'e_communicate', unit: 6, act: '第2課 家庭的倫理', name: '家庭溝通與規範', summary: '意見不同時冷靜溝通、傾聽；家庭會議一起決定；家規由家人一起訂定、共同遵守；家人改變時互相體諒。' },
    // ---------- 社會 第三單元：自治與安全 ----------
    { id: 's_meeting', unit: 7, act: '第1課 班級的自治活動', name: '班會與議事規則', summary: '主席主持、記錄寫紀錄；提案→討論→表決；舉手經同意再發言；少數服從多數、多數尊重少數。' },
    { id: 's_election', unit: 7, act: '第1課 班級的自治活動', name: '選舉與班級幹部', summary: '選有能力、負責任的人；自己決定、不受利誘；當選要盡責，落選要尊重結果；各股長有不同職責。' },
    { id: 's_rules', unit: 7, act: '第1課 班級的自治活動', name: '班級公約與自治', summary: '班級公約由全班討論訂定、合理可行、大家遵守；不合適可經班會修改；自治讓我們學會負責與民主。' },
    { id: 's_safety', unit: 7, act: '第2課 校園安全', name: '校園生活安全', summary: '走廊不奔跑、樓梯靠右、遊戲器材排隊；不跟陌生人走；受傷到健康中心；用校園安全地圖找出危險角落。' },
    { id: 's_disaster', unit: 7, act: '第2課 校園安全', name: '防災與緊急應變', summary: '地震「趴下、掩護、穩住」；火災不搭電梯、小火快逃濃煙關門；119 火災救護、110 報警；平時演練。' },
    // ---------- 社會 第四單元：學習與成長 ----------
    { id: 'l_method', unit: 8, act: '第1課 學習的方法', name: '學習的方法與態度', summary: '預習、專心聽講、做筆記、發問、複習；錯題要找原因並訂正。' },
    { id: 'l_plan', unit: 8, act: '第1課 學習的方法', name: '時間管理與學習計畫', summary: '先做重要又緊急的事；計畫要具體可行、確實執行並檢查調整；不拖延。' },
    { id: 'l_resource', unit: 8, act: '第1課 學習的方法', name: '學習資源', summary: '圖書館（愛惜書本、按時歸還）、博物館、社區資源、訪問長輩；網路資料要查證並保護個資。' },
    { id: 'l_diverse', unit: 8, act: '第2課 多元的學習', name: '多元學習與成長', summary: '社團、才藝、戶外教學都是學習；每個人專長不同要互相欣賞；持續練習會進步；終身學習。' },
    // ---------- 社會 第五單元：和諧的相處 ----------
    { id: 'r_friend', unit: 9, act: '第1課 班級裡的人際關係', name: '交朋友與人際關係', summary: '主動友善、真誠分享、守信用、互相幫助；朋友要求做錯事時要勇敢拒絕。' },
    { id: 'r_conflict', unit: 9, act: '第1課 班級裡的人際關係', name: '化解衝突與同理心', summary: '先冷靜再溝通、說出感受；勇於道歉也學會原諒；用同理心換位思考；解決不了請老師協助。' },
    { id: 'r_bully', unit: 9, act: '第1課 班級裡的人際關係', name: '拒絕霸凌與網路禮儀', summary: '故意且重複的欺負（言語、肢體、關係、網路）就是霸凌；看到或遇到要告訴老師家長；網路上也要尊重。' },
    { id: 'r_gender', unit: 9, act: '第2課 平等與尊重', name: '性別平等與刻板印象', summary: '興趣、能力、工作、情緒表達都不該被性別限制；打破「男生一定…女生一定…」的刻板印象。' },
    { id: 'r_respect', unit: 9, act: '第2課 平等與尊重', name: '尊重差異與自己', summary: '尊重身心障礙、多元文化、口音與宗教；不取難聽綽號；尊重隱私；身體自主權要勇敢說不。' },
    // ---------- 社會 第六單元：學校與我 ----------
    { id: 'c_cooperate', unit: 10, act: '第1課 合作與競爭', name: '分工合作', summary: '合作能集思廣益、完成困難任務；分工要各盡其責、互相支援；意見不同就討論出最好的方法。' },
    { id: 'c_compete', unit: 10, act: '第1課 合作與競爭', name: '良性競爭與運動家精神', summary: '遵守規則、公平比賽、不作弊；勝不驕敗不餒、尊重對手；競爭能激勵進步。' },
    { id: 'c_staff', unit: 10, act: '第2課 學校是個小社會', name: '學校的成員與處室', summary: '校長領導學校；教務處管教學、學務處管生活與活動、總務處管設備、輔導室管心理輔導、健康中心管健康。' },
    { id: 'c_society', unit: 10, act: '第2課 學校是個小社會', name: '學校是個小社會', summary: '學校有不同角色分工、有校規要遵守，就像小社會；愛護公物、感謝服務的人；平面圖上北下南左西右東。' }
];

// 舊題目（第一、二版）與觀念的對照
const QUESTION_CONCEPT_MAP = {
    // 自然：植物
    u1_q1: 'p_root', u1_q2: 'p_root', u1_q3: 'p_leaf', u1_q4: 'p_stem', u1_q5: 'p_stem', u1_q6: 'p_phyllotaxy', u1_q7: 'p_flower', u1_q8: 'p_flower', u1_q9: 'p_fruit',
    u1_q10: 'p_root', u1_q11: 'p_root', u1_q12: 'p_root', u1_q13: 'p_stem', u1_q14: 'p_stem', u1_q15: 'p_stem', u1_q16: 'p_life', u1_q17: 'p_leaf', u1_q18: 'p_leaf', u1_q19: 'p_leaf',
    u1_q20: 'p_phyllotaxy', u1_q21: 'p_phyllotaxy', u1_q22: 'p_flower', u1_q23: 'p_flower', u1_q24: 'p_fruit', u1_q25: 'p_fruit', u1_q26: 'p_fruit', u1_q27: 'p_fruit', u1_q28: 'p_life', u1_q29: 'p_life',
    u1_q30: 'p_living', u1_q31: 'p_parts', u1_q32: 'p_stem', u1_q33: 'p_stem', u1_q34: 'p_root', u1_q35: 'p_flower', u1_q36: 'p_fruit', u1_q37: 'p_fruit', u1_q38: 'p_life', u1_q39: 'p_life',
    // 自然：力
    u2_q1: 'f_effect', u2_q2: 'f_types', u2_q3: 'f_magnet_attract', u2_q4: 'f_magnet_pole', u2_q5: 'f_magnet_pole', u2_q6: 'f_magnet_attract', u2_q7: 'f_buoyancy', u2_q8: 'f_magnet_pole',
    u2_q9: 'f_effect', u2_q10: 'f_effect', u2_q11: 'f_elements', u2_q12: 'f_types', u2_q13: 'f_types', u2_q14: 'f_magnet_attract', u2_q15: 'f_magnet_attract', u2_q16: 'f_magnet_pole', u2_q17: 'f_magnet_pole',
    u2_q18: 'f_magnet_pole', u2_q19: 'f_magnet_strength', u2_q20: 'f_magnet_strength', u2_q21: 'f_magnet_use', u2_q22: 'f_magnet_pole', u2_q23: 'f_magnet_use', u2_q24: 'f_magnet_use', u2_q25: 'f_magnet_pole',
    u2_q26: 'f_elements', u2_q27: 'f_elements', u2_q28: 'f_effect', u2_q29: 'f_buoyancy', u2_q30: 'f_buoyancy', u2_q31: 'f_buoyancy', u2_q32: 'f_magnet_use', u2_q33: 'f_elements', u2_q34: 'f_elements', u2_q35: 'f_types',
    // 自然：空氣
    u3_q1: 'a_exist', u3_q2: 'a_space', u3_q3: 'a_compress', u3_q4: 'a_compress', u3_q5: 'a_wind', u3_q6: 'a_wind', u3_q7: 'a_wind', u3_q8: 'a_use',
    u3_q9: 'a_space', u3_q10: 'a_space', u3_q11: 'a_space', u3_q12: 'a_space', u3_q13: 'a_space', u3_q14: 'a_exist', u3_q15: 'a_compress', u3_q16: 'a_exist', u3_q17: 'a_wind',
    u3_q18: 'a_wind', u3_q19: 'a_wind', u3_q20: 'a_wind', u3_q21: 'a_wind', u3_q22: 'a_wind', u3_q23: 'a_use', u3_q24: 'a_use', u3_q25: 'a_exist', u3_q26: 'a_wind',
    u3_q27: 'a_wind', u3_q28: 'a_use', u3_q29: 'a_clean', u3_q30: 'a_clean', u3_q31: 'a_clean', u3_q32: 'a_use', u3_q33: 'a_compress', u3_q34: 'a_compress',
    // 自然：廚房
    u4_q1: 'k_dissolve', u4_q2: 'k_dissolve', u4_q3: 'k_speed', u4_q4: 'k_amount', u4_q5: 'k_fizz', u4_q6: 'k_acidbase', u4_q7: 'k_identify', u4_q8: 'k_identify',
    u4_q9: 'k_dissolve', u4_q10: 'k_speed', u4_q11: 'k_speed', u4_q12: 'k_speed', u4_q13: 'k_amount', u4_q14: 'k_dissolve', u4_q15: 'k_amount', u4_q16: 'k_amount', u4_q17: 'k_amount',
    u4_q18: 'k_fizz', u4_q19: 'k_acidbase', u4_q20: 'k_acidbase', u4_q21: 'k_acidbase', u4_q22: 'k_separate', u4_q23: 'k_dissolve', u4_q24: 'k_dissolve', u4_q25: 'k_acidbase',
    u4_q26: 'k_acidbase', u4_q27: 'k_separate', u4_q28: 'k_amount', u4_q29: 'k_clean', u4_q30: 'k_clean', u4_q31: 'k_identify', u4_q32: 'k_identify', u4_q33: 'k_dissolve', u4_q34: 'k_acidbase',
    // 社會：我的家庭
    s1_q1: 'h_title', s1_q2: 'h_title', s1_q3: 'h_title', s1_q4: 'h_title', s1_q5: 'h_title', s1_q6: 'h_title', s1_q7: 'h_title', s1_q8: 'h_title',
    s1_q9: 'h_type', s1_q10: 'h_type', s1_q11: 'h_type', s1_q12: 'h_type', s1_q13: 'h_type', s1_q14: 'h_record', s1_q15: 'h_record', s1_q16: 'h_contact', s1_q17: 'h_contact', s1_q18: 'h_contact',
    // 社會：家庭與倫理
    s2_q1: 'e_function', s2_q2: 'e_function', s2_q3: 'e_function', s2_q4: 'e_function', s2_q5: 'e_function', s2_q6: 'e_chores', s2_q7: 'e_chores', s2_q8: 'e_ethic', s2_q9: 'e_ethic',
    s2_q10: 'e_communicate', s2_q11: 'e_communicate', s2_q12: 'e_communicate', s2_q13: 'e_ethic', s2_q14: 'e_ethic', s2_q15: 'e_communicate', s2_q16: 'e_ethic', s2_q17: 'e_ethic',
    // 社會：自治與安全
    s3_q1: 's_meeting', s3_q2: 's_meeting', s3_q3: 's_meeting', s3_q4: 's_meeting', s3_q5: 's_meeting', s3_q6: 's_election', s3_q7: 's_election', s3_q8: 's_rules', s3_q9: 's_rules',
    s3_q10: 's_disaster', s3_q11: 's_disaster', s3_q12: 's_disaster', s3_q13: 's_safety', s3_q14: 's_safety', s3_q15: 's_safety', s3_q16: 's_safety', s3_q17: 's_disaster',
    // 社會：學習與成長
    s4_q1: 'l_method', s4_q2: 'l_method', s4_q3: 'l_method', s4_q4: 'l_method', s4_q5: 'l_resource', s4_q6: 'l_resource', s4_q7: 'l_resource', s4_q8: 'l_diverse',
    s4_q9: 'l_diverse', s4_q10: 'l_plan', s4_q11: 'l_plan', s4_q12: 'l_resource', s4_q13: 'l_diverse', s4_q14: 'l_diverse', s4_q15: 'l_method', s4_q16: 'l_resource',
    // 社會：和諧的相處
    s5_q1: 'r_friend', s5_q2: 'r_friend', s5_q3: 'r_conflict', s5_q4: 'r_conflict', s5_q5: 'r_conflict', s5_q6: 'r_bully', s5_q7: 'r_bully', s5_q8: 'r_bully',
    s5_q9: 'r_gender', s5_q10: 'r_gender', s5_q11: 'r_respect', s5_q12: 'r_respect', s5_q13: 'r_respect', s5_q14: 'r_respect', s5_q15: 'r_respect', s5_q16: 'r_bully',
    // 社會：學校與我
    s6_q1: 'c_cooperate', s6_q2: 'c_compete', s6_q3: 'c_compete', s6_q4: 'c_cooperate', s6_q5: 'c_society', s6_q6: 'c_staff', s6_q7: 'c_staff', s6_q8: 'c_staff', s6_q9: 'c_staff',
    s6_q10: 'c_staff', s6_q11: 'c_staff', s6_q12: 'c_staff', s6_q13: 'c_staff', s6_q14: 'c_society', s6_q15: 'c_society', s6_q16: 'c_society', s6_q17: 'c_society'
};
