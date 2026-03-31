// 词汇数据库 - 已更新 Fan Events 类别
const thaiData = {
    greetings: [
        { thai: "สวัสดี", roman: "sà-wàt-dii", eng: "Hello", chn: "你好", ex: { thai: "สวัสดีครับ สบายดีไหม", eng: "Hello, how are you?", chn: "你好，你怎么样？" } },
        { thai: "ขอบคุณ", roman: "khàwp-khun", eng: "Thank you", chn: "谢谢", ex: { thai: "ขอบคุณมากครับ", eng: "Thank you very much.", chn: "非常感谢。" } },
        { thai: "ขอโทษ", roman: "khǎw-thôot", eng: "Sorry", chn: "对不起", ex: { thai: "ขอโทษที่มาช้า", eng: "Sorry for being late.", chn: "对不起，我迟到了。" } }
    ],
    travel: [
        { thai: "หิว", roman: "hǐu", eng: "Hungry", chn: "饿", ex: { thai: "ตอนนี้หิวข้าวมาก", eng: "Hungry for rice right now.", chn: "现在非常饿。" } },
        { thai: "เช็คบิล", roman: "chék bin", eng: "Check please", chn: "结账", ex: { thai: "เช็คบิลด้วยครับ", eng: "Check please.", chn: "结账。" } },
        { thai: "ตั๋ว", roman: "dtǔua", eng: "Ticket", chn: "票", ex: { thai: "ซื้อตั๋วที่ไหน", eng: "Where to buy a ticket?", chn: "在哪里买票？" } }
    ],
    friendship: [
        { thai: "แฟน", roman: "faaen", eng: "Partner", chn: "对象/粉丝", ex: { thai: "เขามีแฟนหรือยัง", eng: "Does he have a partner yet?", chn: "他有对象了吗？" } },
        { thai: "เพื่อนสนิท", roman: "phûuean sà-nìt", eng: "Best friend", chn: "死党", ex: { thai: "เราเป็นเพื่อนสนิทกัน", eng: "We are best friends.", chn: "我们是死党。" } },
        { thai: "หล่อ", roman: "lǎaw", eng: "Handsome", chn: "帅", ex: { thai: "ผู้ชายคนนั้นหล่อมาก", eng: "That guy is so handsome.", chn: "那个男生很帅。" } }
    ],
    social: [
        { thai: "ปังมาก", roman: "pang-mâak", eng: "Fabulous", chn: "绝了/火了", ex: { thai: "ชุดนี้ปังมากแม่", eng: "This outfit is fabulous!", chn: "这衣服绝了！" } },
        { thai: "นอยด์", roman: "naawy", eng: "Upset", chn: "郁闷", ex: { thai: "โดนบ่นจนนอยด์", eng: "Complained until upset.", chn: "被唠叨得很郁闷。" } },
        { thai: "แกง", roman: "gaeng", eng: "Prank", chn: "整蛊/坑人", ex: { thai: "โดนเพื่อนแกงอีกแล้ว", eng: "Got pranked by friends again.", chn: "又被朋友坑了。" } }
    ],
    fandom: [
        { thai: "เมน", roman: "meen", eng: "Bias", chn: "本命", ex: { thai: "คนนี้แหละเมนฉัน", eng: "This is my bias.", chn: "这位是我的本命。" } },
        { thai: "คัมแบ็ค", roman: "khwam-báek", eng: "Comeback", chn: "回归", ex: { thai: "วงนี้จะคัมแบ็ค", eng: "This group will comeback.", chn: "这个团要回归了。" } },
        { thai: "แท่งไฟ", roman: "thâeng-fai", eng: "Lightstick", chn: "应援棒", ex: { thai: "อย่าลืมแท่งไฟ", eng: "Don't forget the lightstick.", chn: "别忘了应援棒。" } }
    ],
    events: [
        { thai: "งานแจกลายเซ็น", roman: "ngaan jàek laai-sen", eng: "Fansign Event", chn: "签售会", ex: { thai: "พรุ่งนี้มีงานแจกลายเซ็น", eng: "There is a fansign event tomorrow.", chn: "明天有签售会。" } },
        { thai: "ถ่ายรูปคู่", roman: "thàay-rûup khûu", eng: "Couple photo (1:1)", chn: "双人合影", ex: { thai: "ได้โควต้าถ่ายรูปคู่ด้วย", eng: "I got a quota for a 1:1 photo.", chn: "我拿到了双人合影的名额。" } },
        { thai: "ถ่ายรูปกลุ่ม", roman: "thàay-rûup glùm", eng: "Group photo", chn: "集体合影", ex: { thai: "ถ่ายรูปกลุ่ม 5 คน", eng: "Group photo with 5 people.", chn: "五人一组集体合影。" } },
        { thai: "ลายเซ็น", roman: "laai-sen", eng: "Signature / Autograph", chn: "签名", ex: { thai: "ขอลายเซ็นตรงนี้ได้ไหม", eng: "Can I have a signature here?", chn: "可以在这里签名吗？" } },
        { thai: "กี่โมง", roman: "gìi moong", eng: "What time?", chn: "几点？", ex: { thai: "งานเริ่มกี่โมงครับ", eng: "What time does the event start?", chn: "活动几点开始？" } },
        { thai: "สถานที่", roman: "sà-thǎan-thîi", eng: "Location / Venue", chn: "地点", ex: { thai: "สถานที่จัดงานคือที่ไหน", eng: "Where is the venue?", chn: "举办地点在哪里？" } },
        { thai: "แผนที่", roman: "phǎen-thîi", eng: "Map", chn: "地图", ex: { thai: "ส่งแผนที่ให้หน่อย", eng: "Please send me the map.", chn: "请把地图发给我。" } },
        { thai: "บ้านแฟนคลับ", roman: "bâan faaen-khlàp", eng: "Fanbase / Fansite", chn: "后援会 / 站子", ex: { thai: "บ้านแฟนคลับไทยใจดีมาก", eng: "The Thai fanbase is very kind.", chn: "泰国后援会非常友善。" } },
        { thai: "แอดมิน", roman: "àet-min", eng: "Admin", chn: "管理员 / 站长", ex: { thai: "ติดต่อแอดมินบ้านได้เลย", eng: "You can contact the fan club admin.", chn: "可以直接联系站长。" } },
        { thai: "ของขวัญ", roman: "khǎawng-khwǎn", eng: "Gift", chn: "礼物", ex: { thai: "เตรียมของขวัญมาให้", eng: "I prepared a gift for you.", chn: "我给你准备了礼物。" } },
        { thai: "จดหมาย", roman: "jòt-mǎai", eng: "Letter", chn: "信 / 情书", ex: { thai: "ฝากจดหมายหน่อยนะ", eng: "Please pass this letter.", chn: "请帮我递一下信。" } },
        { thai: "อัลบั้ม", roman: "an-bâm", eng: "Album", chn: "专辑", ex: { thai: "เซ็นลงบนอัลบั้มนะครับ", eng: "Please sign on the album.", chn: "请签在专辑上。" } },
        { thai: "หน้าปก", roman: "nâa-bpòk", eng: "Cover", chn: "封面", ex: { thai: "เซ็นที่หน้าปกเลย", eng: "Sign right on the cover.", chn: "就签在封面上吧。" } },
        { thai: "เพลงโปรด", roman: "pleeng-pròot", eng: "Favorite song", chn: "最喜欢的歌", ex: { thai: "นี่คือเพลงโปรดของฉัน", eng: "This is my favorite song.", chn: "这是我最喜欢的歌。" } },
        { thai: "เนื้อเพลง", roman: "núuea-pleeng", eng: "Lyrics", chn: "歌词", ex: { thai: "เนื้อเพลงนี้ความหมายดี", eng: "The lyrics have a good meaning.", chn: "这首歌词寓意很好。" } },
        { thai: "ท่าเต้น", roman: "thâa-dtên", eng: "Dance move / Choreo", chn: "舞蹈动作", ex: { thai: "ชอบท่าเต้นเพลงใหม่มาก", eng: "I love the new song's choreo.", chn: "非常喜欢新歌的舞蹈。" } },
        { thai: "มองกล้อง", roman: "maawng glâawng", eng: "Look at the camera", chn: "看镜头", ex: { thai: "ช่วยมองกล้องหน่อยครับ", eng: "Please look at the camera.", chn: "请看镜头。" } },
        { thai: "ยิ้ม", roman: "yím", eng: "Smile", chn: "笑 / 微笑", ex: { thai: "ยิ้มสวยมากเลย", eng: "Your smile is so beautiful.", chn: "你的笑容太美了。" } },
        { thai: "มินิฮาร์ท", roman: "mí-ní-háat", eng: "Mini heart", chn: "比心", ex: { thai: "ขอท่ามินิฮาร์ทหน่อย", eng: "Can you do a mini heart?", chn: "可以比个心吗？" } },
        { thai: "ตื่นเต้น", roman: "dtùuen-dtên", eng: "Excited / Nervous", chn: "紧张 / 兴奋", ex: { thai: "เจอคุณแล้วตื่นเต้นมาก", eng: "I'm so nervous meeting you.", chn: "见到你我好紧张。" } },
        { thai: "มือสั่น", roman: "muue-sàn", eng: "Shaking hands", chn: "手抖", ex: { thai: "ดีใจจนมือสั่น", eng: "So happy my hands are shaking.", chn: "高兴得手都在抖。" } },
        { thai: "สบตา", roman: "sòp-dtaa", eng: "Make eye contact", chn: "对视", ex: { thai: "ไม่กล้าสบตาเลย", eng: "I don't dare to make eye contact.", chn: "我都不敢跟你对视。" } },
        { thai: "ตัวจริง", roman: "dtuua-jing", eng: "In person / Real self", chn: "真人", ex: { thai: "ตัวจริงหล่อกว่าในรูป", eng: "You're more handsome in person.", chn: "真人比照片还帅。" } },
        { thai: "เขียนชื่อ", roman: "khǐian chûue", eng: "Write name", chn: "写名字", ex: { thai: "ช่วยเขียนชื่อฉันด้วยนะ", eng: "Please write my name too.", chn: "请也写上我的名字。" } },
        { thai: "สู้ๆ", roman: "sûu-sûu", eng: "Keep fighting / Go for it", chn: "加油", ex: { thai: "เขียนคำว่าสู้ๆ ให้หน่อย", eng: "Please write 'Keep fighting'.", chn: "请写上‘加油’。" } },
        { thai: "มีความสุข", roman: "mii khwaam-sùk", eng: "Be happy", chn: "要幸福 / 快乐", ex: { thai: "ขอให้มีความสุขมากๆ", eng: "I wish you much happiness.", chn: "祝你非常幸福。" } },
        { thai: "สุขภาพแข็งแรง", roman: "sùk-khà-phâap khǎeng-raaeng", eng: "Stay healthy", chn: "身体健康", ex: { thai: "ขอให้สุขภาพแข็งแรงนะ", eng: "Please stay healthy.", chn: "祝你身体健康。" } },
        { thai: "โชคดี", roman: "chôok-dii", eng: "Good luck", chn: "好运", ex: { thai: "โชคดีกับการทำงาน", eng: "Good luck with your work.", chn: "祝你工作顺利。" } },
        { thai: "พักผ่อนเยอะๆ", roman: "phák-phàawn yó-yó", eng: "Get lots of rest", chn: "多休息", ex: { thai: "อย่าลืมพักผ่อนเยอะๆ นะ", eng: "Don't forget to rest a lot.", chn: "别忘了多休息呀。" } },
        { thai: "รักษาสุขภาพ", roman: "rák-sǎa sùk-khà-phâap", eng: "Take care of health", chn: "保重身体", ex: { thai: "รักษาสุขภาพด้วยนะครับ", eng: "Please take care of yourself.", chn: "请保重身体。" } },
        { thai: "ยินดีด้วย", roman: "yin-dii dûuay", eng: "Congratulations", chn: "恭喜", ex: { thai: "ยินดีด้วยกับรางวัลนะ", eng: "Congrats on the award.", chn: "恭喜获奖。" } },
        { thai: "เดินทางปลอดภัย", roman: "doen-thaang plàawt-phai", eng: "Safe travels", chn: "一路平安", ex: { thai: "เดินทางกลับปลอดภัยนะ", eng: "Have a safe trip back.", chn: "回去一路平安。" } },
        { thai: "เป็นกำลังใจให้", roman: "bpen gam-lang-jai hâi", eng: "Support you", chn: "为你加油 / 给你力量", ex: { thai: "จะเป็นกำลังใจให้เสมอ", eng: "I will always support you.", chn: "我会永远为你加油。" } },
        { thai: "ตั้งใจรอ", roman: "dtâng-jai raaw", eng: "Looking forward to", chn: "期待", ex: { thai: "ตั้งใจรอผลงานใหม่นะ", eng: "Looking forward to new work.", chn: "期待新作品。" } },
        { thai: "ภูมิใจ", roman: "phuumi-jai", eng: "Proud", chn: "自豪 / 骄傲", ex: { thai: "ฉันภูมิใจในตัวคุณมาก", eng: "I'm so proud of you.", chn: "我非常为你感到自豪。" } },
        { thai: "รักที่สุด", roman: "rák thîi-sùt", eng: "Love you the most", chn: "最爱你", ex: { thai: "รักคุณที่สุดในโลก", eng: "I love you most in the world.", chn: "世界上最爱你。" } },
        { thai: "คนเก่ง", roman: "khon gèng", eng: "Talented / Capable one", chn: "厉害的人 / 宝贝 (宠溺)", ex: { thai: "คนเก่งของฉัน", eng: "My talented one.", chn: "我的优秀宝贝。" } },
        { thai: "คิดถึงนะ", roman: "khít-thǔng ná", eng: "Miss you", chn: "想你哦", ex: { thai: "คิดถึงนะ เจอกันใหม่", eng: "Miss you, see you again.", chn: "想你哦，下次见。" } },
        { thai: "สวยที่สุด", roman: "sǔuai thîi-sùt", eng: "Most beautiful", chn: "最美", ex: { thai: "วันนี้คุณสวยที่สุดเลย", eng: "You are the most beautiful today.", chn: "你今天最美了。" } },
        { thai: "หล่อที่สุด", roman: "lǎaw thîi-sùt", eng: "Most handsome", chn: "最帅", ex: { thai: "หล่อที่สุดในใจฉัน", eng: "The most handsome in my heart.", chn: "我心中最帅的人。" } },
        { thai: "ขอบคุณ", roman: "khàwp-khun", eng: "Thank you", chn: "谢谢", ex: { thai: "ขอบคุณที่เหนื่อยเพื่อเรา", eng: "Thank you for working hard for us.", chn: "谢谢你为我们辛苦付出。" } },
        { thai: "สัญญานะ", roman: "sǎn-yaa ná", eng: "Promise?", chn: "约定哦", ex: { thai: "สัญญานะว่าจะมาเจอกันอีก", eng: "Promise that we'll meet again?", chn: "约定好下次再见哦？" } },
        { thai: "น่ารักเท่าโลก", roman: "nâa-rák thâo lôok", eng: "Cute as the world", chn: "超级无敌可爱", ex: { thai: "คุณน่ารักเท่าโลกเลย", eng: "You are as cute as the whole world.", chn: "你简直超级无敌可爱。" } },
        { thai: "กินเยอะๆ", roman: "gin yó-yó", eng: "Eat a lot", chn: "多吃点", ex: { thai: "อย่าลืมกินเยอะๆ นะ", eng: "Don't forget to eat a lot.", chn: "别忘了多吃点东西。" } },
        { thai: "ฝันดี", roman: "fǎn-dii", eng: "Good night / Sweet dreams", chn: "晚安 / 好梦", ex: { thai: "คืนนี้ฝันดีนะครับ", eng: "Sweet dreams tonight.", chn: "今晚好梦。" } },
        { thai: "เก่งที่สุด", roman: "gèng thîi-sùt", eng: "The best", chn: "最棒", ex: { thai: "คุณเก่งที่สุดในใจฉัน", eng: "You are the best in my heart.", chn: "你是我心中最棒的。" } },
        { thai: "ตลอดไป", roman: "dtà-làawt-bpai", eng: "Forever", chn: "永远", ex: { thai: "จะรักคุณตลอดไป", eng: "I will love you forever.", chn: "会永远爱你。" } },
        { thai: "ไว้เจอกัน", roman: "wái joer-gan", eng: "See you later", chn: "下次见", ex: { thai: "ไว้เจอกันใหม่นะ", eng: "Let's meet again later.", chn: "下次再见哦。" } },
        { thai: "เป็นห่วง", roman: "bpen hùuang", eng: "Care about / Worry", chn: "担心 / 挂念", ex: { thai: "เป็นห่วงนะ รักษาสุขภาพด้วย", eng: "I care about you, stay healthy.", chn: "很挂念你，保重身体。" } },
        { thai: "ดีใจที่ได้เจอ", roman: "dii-jai thîi dâi joer", eng: "Happy to meet you", chn: "很高兴见到你", ex: { thai: "ดีใจที่ได้เจอกันวันนี้", eng: "Happy to meet you today.", chn: "很高兴今天见到你。" } }
    ]
};
