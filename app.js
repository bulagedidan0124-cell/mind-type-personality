const questions = [
  { d:'EI', label:'精力来源', q:'经历了一周高强度的脑力与事务工作后，你更倾向于通过哪种方式恢复精力？', a:'约朋友见面、参加活动，或去有人的地方，和外界互动来恢复', b:'独处，待在安静的环境里，完全不受打扰' },
  { d:'SN', label:'信息获取', q:'学习一项新技能或新工具时，你习惯从哪里入手？', a:'具体的实操步骤、案例演示和明确的指南', b:'底层原理、整体框架，以及它还能用在哪些地方' },
  { d:'TF', label:'决策方式', q:'面临必须二选一的艰难决策时，你最终更倚重的是？', a:'逻辑是否闭环、规则是否一致、利弊是否说得通', b:'是否符合自己的价值观，以及对相关的人感受与关系的影响' },
  { d:'JP', label:'生活方式', q:'开始一项重要任务或项目前，你更希望怎样推进？', a:'目标、范围和步骤都先大致明确，列清了再开始', b:'先动手，保留探索空间，边做边看再调整' },
  { d:'EI', label:'精力来源', q:'在团队讨论遇到卡点时，你更典型的思考习惯是？', a:'边说边梳理，通过和别人即时交流把头绪谈清楚', b:'先安静想清楚、把想法成型，再开口表达' },
  { d:'SN', label:'信息获取', q:'面对一处风景或一件物品时，你更容易注意到什么？', a:'它的细节特征，比如色彩、质感、尺寸和具体样子', b:'它引发的联想、意境，或背后可能的意味' },
  { d:'TF', label:'决策方式', q:'朋友向你倾诉工作或生活里的困扰时，你的第一自然反应是？', a:'帮对方分析问题出在哪，并试着梳理出可行的办法', b:'先给予共情和支持，确认并接住对方此刻的感受' },
  { d:'JP', label:'生活方式', q:'周末或假期，怎样安排更让你觉得舒服？', a:'提前有比较明确的计划，大致知道要做什么', b:'保持留白，根据当天的状态和心情随性安排' },
  { d:'EI', label:'精力来源', q:'在一个大多是陌生人的社交或交流场合中，你通常会怎样？', a:'比较自然地主动开聊，并在互动里逐渐兴奋起来', b:'先处在观察状态，和少数人深聊，待久了容易觉得电量耗尽' },
  { d:'SN', label:'信息获取', q:'向别人描述一件事情时，你的表达更偏向？', a:'按时间线和事实细节娓娓道来，尽量实事求是', b:'先讲核心结论和大局，再用比喻或关联把意思串起来' },
  { d:'TF', label:'决策方式', q:'团队出现分歧时，你更想先保住什么？', a:'一致的规则、标准和事情本身的对错', b:'成员之间的关系、感受，以及大家还愿意一起做' },
  { d:'JP', label:'生活方式', q:'面对一项截止日期还在两周后的任务，你更典型的节奏是？', a:'拆成阶段，尽早推进并提前收尾，不想临时抱佛脚', b:'临近截止前更有状态，在紧迫感里集中爆发' },
  { d:'EI', label:'精力来源', q:'遇到复杂问题或强烈情绪时，你通常的第一反应是？', a:'想找信任的人倾诉或讨论，说出来才更清楚', b:'先自己消化，没理清前不太愿意把未完成的思绪展给别人' },
  { d:'SN', label:'信息获取', q:'做判断时，你更信任哪一种信息作为依据？', a:'过往经验验证过的、能观察到的事实和数据', b:'规律上的洞察、对走向的预判，以及内心的直觉' },
  { d:'TF', label:'决策方式', q:'给别人提出意见时，你通常更在意什么？', a:'表达得准确、直接，把问题说清楚', b:'对方是否容易接受，尽量不伤到对方的自尊和动机' },
  { d:'JP', label:'生活方式', q:'当事情的发展偏离了原计划时，你通常会怎样？', a:'容易觉得被打乱，会尽快调整并重新定一个方案', b:'能比较轻松地接着走，把它当成新的变化来应对' },
  { d:'EI', label:'精力来源', q:'长时间待在人群里、不断交流之后，你通常感觉怎样？', a:'被互动激活了，人在一起时更有精神', b:'需要独处把电量补回来，哪怕刚才相处得并不差' },
  { d:'SN', label:'信息获取', q:'为一项长远计划定方向时，你更关注什么？', a:'现有的资源、现实可行性，以及眼下切实能走的一步', b:'未来的可能性、长远图景，以及它可能把事情带到哪里' },
  { d:'TF', label:'决策方式', q:'当规则和某人的特殊困难冲突时，你更可能怎样？', a:'尽量坚守规则的公平和一致，避免因为某个人就开特例', b:'考虑具体情境和人情，适当留一点弹性' },
  { d:'JP', label:'生活方式', q:'你的工作台面、桌面或文件夹通常是怎样的？', a:'分类清楚、秩序分明，用完习惯归位', b:'相对随性，看着可能散乱，但自己知道东西在哪' },
  { d:'EI', label:'精力来源', q:'一件事可以自己完成、也可以找人一起做时，你更自然的选择是？', a:'更想拉人一起推进，过程里有交流会更有劲', b:'更想自己安安静静做完，少一层配合更轻松' },
  { d:'SN', label:'信息获取', q:'面对一件还在发展中的事，你更自然地先抓住什么？', a:'已经发生的事实、眼前的状况和靠得住的细节', b:'它可能把人和事情带到哪里，背后正在形成的走向' },
  { d:'TF', label:'决策方式', q:'在争论或复盘时，你更看重什么？', a:'把事实和逻辑理准确，把对的事情求清楚', b:'维持现场的气氛与关系，让各方都还能继续参与' },
  { d:'JP', label:'生活方式', q:'在还没定下来的重大选择面前，你更舒服的是？', a:'尽快拍板，有一个确定的方向，悬着会不安', b:'先保持开放，再收集信息，不急着过早下结论' },
  { d:'EI', label:'精力来源', q:'你更常从哪里获得状态和灵感？', a:'和人见面、讨论、被现场的气氛与互动带动', b:'自己读书、想事情，待在内在的节奏里' },
  { d:'SN', label:'信息获取', q:'听一个人讲自己的近况时，你更容易先抓住什么？', a:'他具体遇到了什么，时间、地点和关键细节', b:'他现在处在怎样的变化里，这件事会把他带到哪' },
  { d:'TF', label:'决策方式', q:'你自己做错一件事时，更希望对方怎样对你？', a:'直接指出问题在哪，一起把原因和改法说清楚', b:'先顾及你的心情，再慢慢谈事情本身' },
  { d:'JP', label:'生活方式', q:'手头同时有好几件还没做完的事时，你更自然的状态是？', a:'会有点悬着的不安，想尽快收到一个确定的进度', b:'可以同时开着几个口子，觉得这样反而灵活' },
  { d:'EI', label:'精力来源', q:'工作和学习时，哪种状态更让你感到自在、也更容易进入状态？', a:'开放、随时能沟通的协作环境，和人一起推进更有劲', b:'独立、安静、少被突然打扰的空间，自己待着更沉得住' },
  { d:'SN', label:'信息获取', q:'面对一个已经有成熟做法的问题，你更想怎样？', a:'先沿用被验证过的方法，把眼前这件事做准', b:'先想想有没有另一种可能，哪怕还没被验证' },
  { d:'TF', label:'决策方式', q:'衡量一个决定好不好时，你更不能接受哪一种结果？', a:'逻辑上说不通，或标准前后不一致', b:'让在意的人受伤，或把关系弄僵' },
  { d:'JP', label:'生活方式', q:'别人邀请你参加一个细节还没完全定下来的安排时，你通常会？', a:'想先问清时间、流程和大概会怎样，确定了再答应', b:'可以先答应，细节到时候再说，变了也没关系' }
];

const typeNames = {
  INTJ:'洞察型规划者', INTP:'逻辑型探索者', ENTJ:'目标型领导者', ENTP:'创新型辩论者',
  INFJ:'理想型洞察者', INFP:'价值型追寻者', ENFJ:'共情型引领者', ENFP:'热情型启发者',
  ISTJ:'可靠型执行者', ISFJ:'守护型支持者', ESTJ:'秩序型组织者', ESFJ:'温暖型协调者',
  ISTP:'冷静型实践者', ISFP:'感受型创作者', ESTP:'行动型挑战者', ESFP:'活力型体验者'
};

const typeOrder = ['INTJ','INTP','ENTJ','ENTP','INFJ','INFP','ENFJ','ENFP','ISTJ','ISFJ','ESTJ','ESFJ','ISTP','ISFP','ESTP','ESFP'];
const typeProfiles = {
  INTJ:{tagline:'在复杂中寻找结构，把远见变成路径。',summary:'你习惯先在脑子里把地图画完，再决定走哪一步。信息一乱，你会不舒服，直到它们被收进一套能运转的结构。你不太爱解释过程，可一旦开口，往往已经想过三步。独处对你不是逃避，是把远见磨锋利的地方。别人觉得你冷，多半是因为你把热情给了「这事能不能成」，而不是当场的气氛。',howto:'把远见写成别人也能跟着走的下一步。先交出一个够小、够清楚的动作，而不是一次抛出整座系统。高阶的你不是更隐秘的天才，而是能让复杂变得可执行，并在关键处愿意把思考过程摊开。',strengths:['战略规划','独立判断','系统思考'],risks:['事情没按你的结构走时，你往往先看见低效，而不是人的为难。不耐烦写在脸上，合作就会变短。','你容易觉得想清楚了就等于说清楚了。重要的人其实需要看见过程，而不只是结论。'],relations:'你靠近一个人，通常不是靠频繁表白，而是靠靠得住。思想能对上、边界清楚、说话不必绕，你会更安心。被要求时刻热情回应时，你会退。把在意说出来一点，关系会比你预想的更稳。',work:'你适合长期布局、复杂分析和独立判断：策略、研究、产品方向、系统设计。给目标、给空间，少打断。重复的社交协调会很快抽干你。把你关进无意义的会里，等于把说明书最有用的那几页撕掉。',growth:'给方案之前先问一句：对方要的是答案，还是被听懂。允许计划里留下人的位置。把已经想过的路，用更短的话说给需要一起走的人。'},
  INTP:{tagline:'不断追问为什么，在思想中搭建新世界。',summary:'现成答案很难让你满意。你更想拆开看看齿轮怎么咬合，有没有更干净的解释。对你来说，把问题重新定义，往往比立刻做完更兴奋。你学得很快，也可能在脑子里把一座宫殿盖到第九层，门口却还没铺第一步。安静想事情时你最亮；被催着交结论时，你会觉得世界太吵。',howto:'给你的好奇装一个出口。想清楚之后，选一个足够小的验证，让现实来打磨想法。高阶的你不是永远更聪明，而是能把优雅的解释交出去，让别人用得上。完成，也是一种思考。',strengths:['逻辑分析','概念创新','快速学习'],risks:['推演太舒服，动手会一拖再拖。完美的框架如果从不落地，对你自己也会失去意义。','你可能忽略执行里那些「不够优雅」的限制：时间、人情、资源。它们不是对思考的侮辱，是思考要经过的河。'],relations:'能尊重你的独处、又愿意一起追一个有趣问题的人，会让你靠近。感情你表达得含蓄，并不代表你没有认真理解对方。被连续追问「你到底怎么想」时，先说一句「我还在想」，比消失更友善。',work:'研究、技术、策略、需要重新定义问题的创新最适合你。自由探索比严格流程更能把你点亮。把你按进重复维护，你会开始神游。给你一块能深挖的问题，比给你一张满的待办更有效。',growth:'为想法设一个小到可笑的交付点：一篇短文、一次演示、一个能跑的原型。用真实反馈代替无止境的完善。允许 70 分先出门。'},
  ENTJ:{tagline:'看见目标，组织资源，然后推动事情发生。',summary:'你看见的不是气氛，是方向。混乱出现时，你会本能地分责任、抓重点、把人带动起来。效率对你几乎是道德：浪费时间像在浪费生命。你推进事情的能力很强，也容易把别人的慢理解成不认真。你最自然的状态，是对着一个够大的目标把资源排好，然后开干。',howto:'把决断用在真正值得破局的地方，而不是每一件小事都变成冲锋。高阶的你不是更快、更硬，而是能带着不同节奏的人到达，同时把「人好不好」算进结果里。目标要亮，路也要让人走得动。',strengths:['决断推进','资源整合','目标管理'],risks:['你的节奏一快，现场就会紧张。有人还没想清楚，已经被你推进下一程。','脆弱在你眼里有时像低效。对方需要的也许只是一句「我看见你累了」，而不是立刻优化。'],relations:'你欣赏独立、有担当、能直说的人。尊重和一起把事做成，往往比仪式化的浪漫更让你感到亲密。记住：亲密不是又一次项目复盘。把「正确」先放一放，问问对方此刻要不要被推进。',work:'领导、经营、项目攻坚、关键决策会让你活过来。越复杂、越需要破局，你越有劲。权限清楚、成果可衡量的环境最合适。把你放在没有目标的消耗性会议里，是对这台发动机的浪费。',growth:'决策里加一项：这件事对人的感受意味着什么。给慢半拍的人一个说话的空隙。你已经很会抵达，下一步是让人愿意跟你抵达。'},
  ENTP:{tagline:'用新视角打破边界，让可能性不断生长。',summary:'你的脑子像一座会自己接线的车间：不相干的事突然连上，新方向就冒出来。你喜欢挑战现成答案，讨论对你是呼吸，不是负担。现场一活，你就亮；同一件事维护到第三个月，电量会往下掉。你不是故意善变，是可能性对你比结论更有吸引力。',howto:'把联想变成一次次可试的实验，而不是一场场精彩但不收尾的辩论。高阶的你不是点子更多，而是敢把少数真正重要的想法养到能用。选择，也是一种创造。',strengths:['创意联想','临场应变','观点表达'],risks:['兴趣转移很快。新火花一来，旧的半成品就会被冷落，连你自己都会内疚。','辩论赢了，人却走了。对你只是把逻辑推到底，对别人可能已经觉得被顶在墙上。'],relations:'新鲜感、智力上的来回、彼此留空，会让你靠近。机械的重复相处会让你迅速失去热情。真诚的讨论是你的亲密方式。记得问一句「你现在是想一起想，还是想被接住」。',work:'创新、产品、咨询、创业、需要快速破题的场景最适合你。重复维护会消耗你。把你放在能试验、能辩论、能转向的位置，产出会远超看起来「不守规矩」的印象。',growth:'选出少数真重要的想法，给它们一个完成的仪式。把「做完」当成创造的一部分，而不是创造力的结束。'},
  INFJ:{tagline:'安静地理解人心，也坚定地守护理想。',summary:'你常常还没开口，就已经感觉到房间里谁不舒服。意义对你不是点缀，是选择的尺子：这件事长远看值不值得，会不会把人带去更好的地方。你既敏感又固执，敏感在人心，固执在理想。内在和外在对得上时，你最有力量；对不上时，你会默默耗着，直到突然撑不住。',howto:'把洞察用在点亮方向，而不是替所有人消化情绪。高阶的你不是更无私，而是能把看见的意义做成一条别人也能走的路，同时给自己留门。安静不是消失，是你充电的方式。',strengths:['深度洞察','共情理解','价值驱动'],risks:['别人的情绪会渗进来，你还以为是自己的。吸收太多，判断会糊。','你对自己的要求常常高过对人。没达到心里那条线，你会苛责自己，却很难开口要帮助。'],relations:'你要的是深度、稳定、彼此理解。信任建得慢，一旦投入就很认真。浅来浅往会让你觉得空。把需要说出来，并不破坏神秘，它让认真的人知道怎么待你。',work:'咨询、教育、创作、研究、使命清楚的工作适合你。你需要既能安静思考、又能产生真实影响的环境。纯表演性的热闹会抽干你，完全没有人的实验室也会让你觉得意义不足。',growth:'不要等到耗尽才设边界。每周先给自己留一块不被占用的时间。把自己的需要说出来，也是维护关系，不是自私。'},
  INFP:{tagline:'忠于内心价值，为世界保留柔软与想象。',summary:'你内部的世界往往比外表热闹。值不值得、真不真、会不会伤害到谁的独特性，这些会先于利弊进入你的判断。你能把别人没说出口的感受接住，也容易把生活过成一部尚未写完的小说。理想很亮的时候你愿意走很远；理想被踩到的时候，你可能不吵，只是慢慢关上门。',howto:'把价值做成今天能碰到的一小步，而不是只活在心里的完整宇宙。高阶的你不是更纯洁，而是能让柔软变成作品、立场和可被他人进入的世界。忠于内心，也包括让内心被看见。',strengths:['真诚共情','想象创造','价值坚守'],risks:['理想化让你看见应然，有时也让你看不清眼前这个不完美的人。失望一来，退得会很深。','冲突让你不舒服，于是回避。问题不会因为你温柔就不存在，它会在沉默里长大。'],relations:'真实、安全、灵魂层面的理解会让你打开。强迫和控制会让你退到很远。细的行动比宏大承诺更打动你。你也需要练习：不舒服的时候，用具体的话说出来，而不是只在日记里写。',work:'创作、内容、助人、带个人意义的任务适合你。你需要自由度来形成自己的表达。把你按进冰冷的指标里，你会开始怀疑自己是不是坏掉了。其实是环境没给你的价值留位置。',growth:'把宏大理想拆成今天能做完的一步。练习在不舒服时清晰表达立场。你的柔软值得被保护，也值得被使用。'},
  ENFJ:{tagline:'看见每个人的潜力，让共同目标有温度。',summary:'你对气氛很敏感：谁没被看见、谁开始退缩、这句话会不会把人伤到，常常比对错更早进入你的判断。你擅长把散落的人收成一个方向，也容易把别人的成长当成自己的责任。关系顺的时候你很亮；没人回应、或你觉得自己让人失望时，你会比事情本身更累。你不是只会热心，你是真的相信人还可以更好。',howto:'把共情用在点亮别人，而不是替别人扛完。上场之前先问：这是你的责任，还是你习惯冲上去。高阶的你不是更忙、更会照顾，而是能凝聚人，同时把自己也写进计划里。温度要有，方向也要有。',strengths:['激励他人','沟通协调','团队凝聚'],risks:['你习惯先接住别人，再处理自己。时间久了会委屈，却很难说出口，于是突然垮掉，连你自己都吓一跳。','「大家还好吗」容易变成全部工作。真正要推进的事被搁下，你却觉得自己已经很努力。'],relations:'你投入、热情，也期待被看见和感谢。共同成长会让关系更稳。若长期只有你在给，热情会变成疲惫。允许对方为你做一点，不是索取，是让关系双向。',work:'教育、管理、品牌、组织发展、公共沟通适合你。人与使命结合的环境最能激发你。把你放在完全没有人、只剩表格的位置，等于关掉你最强的那盏灯。',growth:'帮助别人之前确认边界。练习说「这次我帮不到」。允许他人为自己负责，你才有余力做你真正擅长的那件事：把人带到更好的地方。'},
  ENFP:{tagline:'追随热情连接人与灵感，让生活充满可能。',summary:'你对人、对新体验、对还没发生的可能保持开放。进一个房间，你能很快让空气活起来，也能让别人忽然看见自己另一种样子。热情来时你几乎不需要闹钟；热情走时，连昨天还爱的事都会变远。你不是肤浅，是你的引擎靠意义和新鲜感点火。冷淡、机械、被关进重复里，你会像植物见不到光。',howto:'给最重要的热情一条稳定的河床，让它流得远，而不是同时开十条会干涸的渠。高阶的你不是更兴奋，而是能把点燃别人的能力，做成持续可进入的世界。热情要被你接住，才不会把你烧干。',strengths:['热情感染','灵感创造','关系连接'],risks:['同时开始的事太多，每件都亮一会儿，然后一起暗掉。你自己也会恨这种循环。','情绪和动力起伏大。低谷时你以为热情死了，其实它只是要休息，可你已经又去抓下一块新火花。'],relations:'你需要能真诚说话、给你空间、也跟你一起新鲜起来的人。冷淡和程式化相处会迅速抽走你的电。告诉对方：你的热不是表演，你的需要休息也不是变心。',work:'创意、传播、社群、产品、需要建立连接的工作适合你。多样性和自主感很重要。把你按进没有人、没有变化的流水线，产出和心情会一起下降。',growth:'减少并行项目。为最要紧的那团热情建立节奏：固定时间、可看见的完成、允许无聊的中段存在。中段过去，火还会在。'},
  ISTJ:{tagline:'用可靠与秩序，把承诺一件件变成现实。',summary:'你把事实、责任和标准看得很重。答应了，就会用稳定的行动把它做准，而不是用气氛代替结果。细节在你手里不是琐碎，是事情可信的证据。世界突然变卦时，你会紧张，不是因为胆小，是因为你已经为「按说好的走」投入了真实的力气。你也许不炫，可很多人的生活，其实靠你这种人托着。',howto:'让可靠成为你的品牌，同时给新方法留一个小试验场。高阶的你不是更死板，而是能在秩序里更新，并让人从你的行动里读到关心。把「我做到了」说出来一点，别人才能接得住。',strengths:['严谨可靠','细节管理','持续执行'],risks:['突变会让你先抓住熟悉的方法。不是你不能学新的，是你需要证据。若没有人给你试错空间，你会显得固执。','关心常常只放在做事里。对方等一句认可，你已经把下一项做完了，于是双方都觉得委屈。'],relations:'忠诚、责任、长期陪伴对你很重。你不总把感情喊出来，但会通过把细节照顾好来表达。主动说一句「我在意」，比再默默做一件事更有效。',work:'规则清楚、责任明确、重视质量的环境适合你。流程、运营、专业积累是你的主场。把你丢进没有标准、每天改方向的地方，你会消耗在重建秩序上，而不是发挥可靠。',growth:'给新方法一次小规模试验，写下来哪里更好。把认可和关心说出口，而不只用行动暗示。你已经很值得信赖，下一步是让人感受到这一点。'},
  ISFJ:{tagline:'记住细节，照顾需要，让日常变得安心。',summary:'你记得别人随口提过的偏好，也感觉得到谁今天不对。你很少抢戏，却用持续而低调的方式把关系和秩序维系住。日常在你手里会变得可依靠：饭在、事在、人被惦记着。你的难题往往不是不会爱，而是不善于在爱之前先给自己留位置。被忽视付出时，你可能不吵，只是越来越累。',howto:'把细心的照顾做成可被看见的支持，而不是隐形的消耗。高阶的你不是更忍，而是能让人安心，同时及时说出边界。被感谢不是虚荣，是让这套运转继续下去的燃料。',strengths:['细致体贴','责任感强','稳定支持'],risks:['不善拒绝。答应得太快，清单会超过身体。委屈堆到疲惫，才突然崩开。','你等别人发现你的辛苦。许多人不是冷漠，是真的没看见你藏得那么好。'],relations:'确定感、互相照顾、日常里的承诺会让你感到被爱。被忽视付出，伤得很深。明确的感谢对你不是客套。也请你练习：需要什么，直接说，不必等对方猜。',work:'服务、支持、行政、医疗、需要耐心维护的工作适合你。和谐可靠的团队让你安心。把你放在鼓励抢功、忽略维护的环境，你会既做完脏活，又得不到位置。',growth:'把自己的需求写进计划，像写别人的需求一样认真。及时表达边界。你的体贴是能力，不是默认免费。'},
  ESTJ:{tagline:'明确标准、快速行动，让团队稳定抵达。',summary:'你务实、直接，擅长定规则、分责任、盯结果。复杂事务到你面前，会被迅速拆成能执行的重点。标准对你是公平的来源：没有标准，事情会滑，人会委屈。你推进团队的能力很强，也容易在模糊和低效面前显得不耐烦。你要的不是气氛好，是大家真的到达。',howto:'把标准和执行用在让团队稳定抵达，而不是用正确压过每一个不同意见。高阶的你不是更强势，而是能听懂反对背后的原因，把问题从人身上分开，仍然把事做成。',strengths:['组织执行','规则意识','责任担当'],risks:['你一抓紧，有人就会觉得被管。本意是负责，效果却像否定整个人。','对模糊的容忍很低。还没想清楚的讨论，在你这儿像浪费。可有些关键信息，偏偏要在那些「不像话」的讨论里出现。'],relations:'可靠、坦率、共同承担让你感到安全。清楚的约定比猜测好。纠正问题时，先分开「这件事」和「这个人」。亲密需要一点不含效率的时间。',work:'运营、管理、工程、财务、需要落地负责的岗位适合你。权限和成果标准越清楚越好。没有权责的「大家一起努力」会让你抓狂，因为你知道那意味着没人真的负责。',growth:'听不同意见时先问为什么。把纠正问题和否定一个人拆开。你已经很会抵达，下一步是让人在抵达的路上仍然觉得被尊重。'},
  ESFJ:{tagline:'让每个人被看见，也让群体更温暖有序。',summary:'你进一个场合，会先看见人：谁被冷落、谁需要被介绍、现场缺了什么实际的照顾。你善于把大家组织到一起，也在意气氛好不好、自己有没有被认可。关系顺时你很有劲；冲突一来，你会比事情本身更焦虑。你不是肤浅的好好先生，你是真的相信群体可以被照顾得更好。',howto:'把看见每一个人的能力，做成温暖而有序的公共空间，而不是让所有人满意到自己消失。高阶的你不是更会迎合，而是先站稳自己的位置，再决定付出多少。被需要很好，被掏空不是必须。',strengths:['人际协调','实际照顾','合作意识'],risks:['外界认可一旦减少，你会怀疑自己是不是做错了。价值若只挂在别人的反应上，你会很不稳。','冲突让你过度负责。为了圆场，可能把真正的问题抹平，事后自己更难受。'],relations:'回应、陪伴、具体的关心会给你归属感。稳定的互动和共同仪式很重要。你也需要练习：不是每一次不回应都等于不爱。先问清楚，再决定要不要补更多。',work:'服务、教育、客户、活动、团队支持适合你。清晰反馈和好的人际氛围能提升你的表现。把你放在完全没有人、也没有感谢的后端，热情会慢慢漏光。',growth:'不必让所有人都满意。先确认立场，再决定付出。你的协调能力用在真正重要的连接上，会比用在讨好每一个人更有力量。'},
  ISTP:{tagline:'冷静观察，精准出手，在实践中解决问题。',summary:'你先看东西怎么运作，再决定动哪一下。突发状况里你常常比别人冷静，不是没感觉，是你相信动手验证比长篇讨论更接近真相。工具、结构、现场的因果关系对你很亲；空转的情绪分析会让你想离开房间。你说话少，不代表没判断，只是你觉得做对了比说对了重要。',howto:'把冷静和手感用在真正的问题上，并提前让人知道你在想什么。高阶的你不是更酷、更不问世事，而是能在关键处精准出手，也愿意用一句人话把边界说清。沉默是你的节奏，不必成为别人的谜题。',strengths:['实操解决','危机应变','客观判断'],risks:['过程你懒得解释。别人只能通过结果猜你，猜错了就产生误会。','长期规划容易被「眼前这个问题更好玩」挤掉。危机处理很强，平时的布局会空着。'],relations:'自由、信任、轻松直接的相处适合你。过度追问会让你退开。实际陪在旁边、一起做事，比分析你的内心更有效。你也可以主动给一句「我没事，只是想安静」，减少对方的脑补。',work:'技术、工程、数据、制作、现场解决问题适合你。自主、具体、有反馈的任务最合适。把你按进无尽会议和情感动员，你会用走开来保护注意力。',growth:'提前说明想法和边界，让别人不必通过沉默猜测。给长期目标留一个最小结构：哪怕只是下周要验证的一件事。'},
  ISFP:{tagline:'忠于当下感受，用审美与行动表达真实。',summary:'你对环境的味道、光线、人的情绪很敏锐。真实和自由对你不是口号，是能不能待下去的条件。你不太靠大道理说服人，更常把价值放进作品、动作和当下的选择里。被控制、被催成计划机器时，你会先失去感觉，再失去力气。你温和，不代表没有锋利的好恶，只是你习惯把它们藏在美和行动后面。',howto:'让感受成为创作和选择的指南，而不是把重要的话永远藏着。高阶的你不是更随性，而是能把真实做成别人也被打动的形式，并为喜欢的事留一点结构，好让它活得久。',strengths:['审美感知','温和包容','灵活行动'],risks:['长期压力一来，你想逃到感觉还在的地方。逃得太勤，重要的事会堆成山。','感受藏太深，别人只能看见温和。不满积到溢出，连你自己都会意外。'],relations:'自然、不控制、尊重个人节奏的关系适合你。细的行动比宏大承诺更打动你。你也需要在关系里用具体语言要空间、要理解，而不是只靠对方「懂你」。',work:'设计、艺术、手作、体验、以人为本的工作适合你。自主空间和真实反馈同样重要。把你关进没有美感、没有人的指标工厂，你会开始怀疑自己为什么要醒来。',growth:'为喜欢的事情加一点结构：固定时段、小小的完成。不满累积之前，用具体的话说需求。你的真实值得被听见，不只被感觉到。'},
  ESTP:{tagline:'迅速读懂现场，用行动抓住眼前机会。',summary:'你精力在现场。变化一来，你比很多人更快读懂局势，并动手。看得见的结果会给你燃料；看不见尽头的分析会让你坐不住。你能带动周围的情绪，也容易被刺激本身吸引，以至于还没算年后的账，人已经跳进去了。你不是没深度，是你相信深度有时要在动作里才出现。',howto:'把读懂现场的能力用在真正值得抓的机会上，并在大事上强制自己晚一步。高阶的你不是更猛，而是能在当下出手的同时，给一个月、一年后的自己留一条退路。行动是你的语言，核算是你的升级。',strengths:['果断行动','现场判断','大胆适应'],risks:['长期代价来得慢，当下的爽来得快。你可能用「先做了再说」跳过那次该有的停顿。','为了刺激把风险加码。周围人还在怕，你已经觉得这才叫活着。'],relations:'直接、有趣、一起去经历的关系适合你。给彼此空间，比反复分析情绪更自然。对方若需要谈感受，试着坐住十分钟，这十分钟往往比再去一个新地方更能连接。',work:'销售、谈判、创业、活动、快节奏现场适合你。即时反馈和可见成果会持续激励你。纯案头、无反馈的长周期会让你失去形。',growth:'重大决定前加一次延迟：一个月后、一年后分别意味着什么。把这一问写成习惯，你的果断会从冒险变成判断。'},
  ESFP:{tagline:'用热情照亮当下，让人与生活真实相遇。',summary:'你对现场的美、人的反应、空气里的情绪很敏锐，也愿意让身边的人感到被欢迎。快乐对你不是浅，是一种认真的能力：让这一刻真的发生。沉重议题一来，你可能会先把灯打开，把人带走，因为你知道暗处待太久会伤人，包括你自己。你不是不会深，是你害怕深度变成一场没有出口的阴天。',howto:'让热情继续照亮当下，同时为重要目标留一块不被情绪带走的时间。高阶的你不是更热闹，而是能让人真实相遇，也敢在短暂的不愉快里停一下。分享是你的礼物，面对是你的进阶。',strengths:['感染力强','感受敏锐','乐于分享'],risks:['沉重的话题一出现，你想换场景。躲得太勤，真正要处理的关系会一直欠着。','计划性不足让重要的事靠临场发挥。临场很亮，可有些事需要你昨天就开始。'],relations:'陪伴、回应、共同体验会给你安全感。冷漠或过度控制会把热情掐灭。告诉对方：你需要一起玩，也需要在玩累了的时候被允许歇，而不被说成「你变了」。',work:'表演、服务、内容、活动、需要人际互动的岗位适合你。有活力的环境能把你点亮。完全静止、没有观众也没有伙伴的工作，会让你的优势无处安放。',growth:'为重要目标留固定时间，哪怕很短。练习面对短期不愉快：先停三分钟，再决定要不要转移注意力。你会发现，有些深的东西，并不会浇灭你的亮。'}
};

const typeExemplars = {
  INTJ:{lead:'这一型往高处走，不是把自己藏成无人能懂的智者，而是把远见收成别人也能跟着走的路径。下面这些人常被看作把这种运转用到极致的样子。',people:[
    {name:'诸葛亮',who:'战略家',story:'他的厉害不只是料事，而是能把看不见的局势，落成一步步能走的棋：联谁、守哪、何时出、何时收。INTJ 的高阶不是更会空想，是让复杂的未来变成可执行的布局，并愿意为这盘棋承担孤独。'},
    {name:'牛顿',who:'科学家',story:'漫长的独处里，他把散落的现象收成一套能解释世界的定律。不是灵感来了就结束，而是把直觉熬成他人也能检验的结构。这一型往上走，往往发生在没人鼓掌的房间里。'},
    {name:'克里斯托弗·诺兰',who:'导演',story:'时间、梦境、记忆这些容易飘的东西，到他手里会变成严丝合缝的结构，让观众真的走进去。高阶 INTJ 愿意为想象服务，也愿意为别人的理解服务：复杂可以深，但必须能被进入。'}
  ]},
  INTP:{lead:'这一型往高处走，是把「为什么」追问到足够深，再把答案交出去，让别人用得上。不是停在更聪明，而是让思考离开房间。',people:[
    {name:'爱因斯坦',who:'物理学家',story:'他对原理的好奇没有停在有趣，而是改写了人们对时空的理解。INTP 的高阶是：问到别人觉得过头的地方，仍然把那个问题问完，并给出一个更干净的解释。'},
    {name:'老子',who:'思想家',story:'他把极复杂的人间事，收成几条更本质的道理。不是堆术语，是删到还能用。这一型往上走，常常是把脑子里的宫殿，翻译成一句别人能带着走的话。'},
    {name:'理查德·费曼',who:'物理学家',story:'他既能把难的事讲到小孩也听得见，也坚持亲手去验证。思考若不能演示、不能实验，对他就不算完成。INTP 的进阶，是让优雅和可检验待在一起。'}
  ]},
  ENTJ:{lead:'这一型往高处走，是看见目标就组织资源，把事情真正推发生，同时让人愿意跟着抵达。决断要在，人也不能被当成零件。',people:[
    {name:'拿破仑',who:'军事家',story:'他看见方向，就集结力量把它拿下来。混乱在他面前会迅速变成部署。ENTJ 的高阶有锋芒，也有代价：当推进变成唯一语言，身边的人会跟不上。值得学的是破局，不是把所有关系都当成战役。'},
    {name:'史蒂夫·乔布斯',who:'企业家',story:'判断力和标准被他用到改写一整条产业：什么该做、什么配不上、用户尚未说出口的需要是什么。高阶 ENTJ 不是只会催，而是能把审美和目标焊在一起，逼出一条别人一开始不信的路。'},
    {name:'曹操',who:'政治家',story:'乱局里他建秩序、揽人才、让人跟着走。务实、敢用人、也敢下决断。这一型的高阶样子，是在无人负责时站出来负责，并把分散的力量收成方向。'}
  ]},
  ENTP:{lead:'这一型往高处走，是把新视角变成一次次可试的创造，而不是一场场不收尾的精彩。点子要落地，辩论要给人留门。',people:[
    {name:'达·芬奇',who:'博学者',story:'解剖、机械、绘画、水流，在他那里是同一座车间的不同工位。看似无关的领域被他连成新可能。ENTP 的高阶不是兴趣更多，是敢让好奇跨界，并留下能被看见的制作。'},
    {name:'苏格拉底',who:'哲学家',story:'他用提问把现成答案拆开，逼人把没想清楚的地方说出来。锋利，却是为了更清楚，不是为了赢。这一型往上走，是让挑战变成照亮，而不是把人辩到墙角。'},
    {name:'爱迪生',who:'发明家',story:'好奇在他手里变成可以反复失败的试验。一次不成，就换一种接法。ENTP 的进阶很具体：把「会不会有另一种可能」变成今天能做的实验，而不是明天的空想。'}
  ]},
  INFJ:{lead:'这一型往高处走，是把对人心的理解，活成一条别人也能走的路。洞察要离开内心，成为可以被跟随的方向。',people:[
    {name:'王阳明',who:'思想家',story:'他把内在信念活成可以教、可以练、可以在困局里用的路。知和行被他焊在一起。INFJ 的高阶不是更敏感，是让看见的意义经得起做事的检验。'},
    {name:'马丁·路德·金',who:'民权领袖',story:'他看见人的痛苦和可能，把它们说成一个共同理想，并推动许多人一起走。共情在这里不是私下的温柔，是公共的方向。这一型往上走，是让温度成为运动，而不是只成为心事。'},
    {name:'卡尔·荣格',who:'心理学家',story:'他安静地进入人内在更深处的结构，给那些说不清的体验一套可理解的语言。INFJ 的进阶，往往是把独自看见的东西，翻译成他人也能用来理解自己的地图。'}
  ]},
  INFP:{lead:'这一型往高处走，是忠于价值，并把内在世界做成能被看见、能被进入的作品。柔软要有形状，才不会只活在心里。',people:[
    {name:'梵高',who:'画家',story:'他把几乎无法用日常语言说出的感受，画成别人站得住的世界。痛苦没有让他变假，作品却让内心被看见。INFP 的高阶不是更苦，是让真诚离开日记本。'},
    {name:'托尔金',who:'作家',story:'语言、地图、族裔、道德，他为想象建起一个完整到可以居住的世界。价值在这里不是口号，是一整套被认真对待的创造。这一型往上走，是把心里的宇宙建得能让别人走进去。'},
    {name:'李白',who:'诗人',story:'他用真诚和想象把生命过成自己的句子：豪、真、不肯被完全驯服。INFP 的进阶不必都去写诗，但要允许自己的内在有一个出口，而不是一直对外客气、对内汹涌。'}
  ]},
  ENFJ:{lead:'这一型往高处走，是看见每个人的潜力，让共同目标有温度，也不把别人的人生背到自己身上。凝聚人，同时把自己算进去。',people:[
    {name:'奥巴马',who:'政治家',story:'他不是只靠嗓门把人喊到一起，而是让不同立场的人觉得这件事里也有我。演说和组织，都是把抽象目标说成听得见的话。ENFJ 的高阶不是讨好所有人，是把温度做成方向。'},
    {name:'奥普拉',who:'媒体人',story:'她看见人的伤口和潜力，并在公共场合把它们点燃成可分享的故事。共情在这里成为舞台，而不是私下耗尽。这一型往上走，是让看见别人的能力，变成许多人也能被照亮的现场。'},
    {name:'周恩来',who:'政治家',story:'在极复杂的关系里，他协调、稳住、让事情继续向前，同时尽量不把人逼到绝路。ENFJ 的进阶很具体：把关系当成工作的一部分，而不是只有关系、没有方向。'}
  ]},
  ENFP:{lead:'这一型往高处走，是把热情做成许多人都能走进来的世界，并让那团火有河床，而不是到处点燃、到处熄灭。',people:[
    {name:'沃尔特·迪士尼',who:'创作者',story:'他把几乎孩子气的热情，做成可以进入、可以分享、可以反复被经历的世界。不是停在「我有一个想法」，而是把想法建成乐园和故事。ENFP 的高阶是让点燃变成可居住的地方。'},
    {name:'J.K.罗琳',who:'作家',story:'一个在火车上冒出来的念头，被她写成改变很多人童年的世界。中途有拒绝、有低谷，她把热情熬过了无趣的中段。这一型往上走，恰恰是在火花之后，仍然每天写。'},
    {name:'马克·吐温',who:'作家',story:'他用幽默把人连在一起，也用幽默刺破习以为常的世界。热情在这里不是只会赞美，也会照见虚假。ENFP 的进阶，是让连接里有锋芒，而不只是热闹。'}
  ]},
  ISTJ:{lead:'这一型往高处走，是用可靠和秩序把承诺一件件做实，并让人从你的稳定里读到关心。不是更死板，是更值得托付。',people:[
    {name:'曾国藩',who:'政治家',story:'克制、日课、把一件件事做实，他把自我管理变成可跟随的方法。不是天才的爆发，是长期的可靠。ISTJ 的高阶往往不好看，但能把乱世里的承诺守住。'},
    {name:'乔治·华盛顿',who:'政治家',story:'权力到手，他选择把责任放在个人荣耀前面，并愿意离开位置。可靠在这里是对公共约定的忠诚。这一型往上走，是让「我答应过」比「我还想要」更有力量。'},
    {name:'沃伦·巴菲特',who:'投资者',story:'长期、克制、按自己验证过的原则做事，他靠的不是每天的刺激，是少即是多的纪律。ISTJ 的进阶，是让标准经得起时间，而不是经得起一次情绪。'}
  ]},
  ISFJ:{lead:'这一型往高处走，是把细心的照顾做成别人能够安心依靠的事，同时让付出被看见、被界限保护。体贴是能力，不是默认免费。',people:[
    {name:'特蕾莎修女',who:'人道工作者',story:'持续、具体、不炫目的照顾，被她做成一生。不是一次感动，是每天仍然去。ISFJ 的高阶是让关怀稳定得像呼吸，也提醒我们：这样的稳定，更需要边界，才不会把自己燃尽。'},
    {name:'南丁格尔',who:'护理先驱',story:'她记住细节，把「让人少受苦」写进可以运转的秩序：卫生、流程、统计。温柔在这里变成制度。这一型往上走，是让照顾离开个人情绪，成为更多人能靠上的结构。'},
    {name:'冰心',who:'作家',story:'她以温柔而坚定的文字照看好日常的心，不喊大口号，却让人觉得被惦记。ISFJ 的进阶，也可以是把惦记写成作品、做成服务，让更多人被轻轻接住。'}
  ]},
  ESTJ:{lead:'这一型往高处走，是明确标准，让团队稳定地把事情做成，并在纠正问题时仍然把人放在人的位置上。',people:[
    {name:'亨利·福特',who:'实业家',story:'他把标准、流程和执行做到能够规模化，让复杂的制造变成可重复的到达。ESTJ 的高阶是让秩序产生规模，而不是让秩序变成对所有例外的惩罚。'},
    {name:'洛克菲勒',who:'实业家',story:'用规则把庞大系统管到可预期，他把分散的环节收成能计算的整体。这一型往上走，是对系统负责：清楚、可追、能交代。'},
    {name:'朱镕基',who:'政治家',story:'果断、标准、推动事情真正落地。该问责就问责，不把「大家都辛苦」当成没结果的借口。ESTJ 的进阶很刺耳也很难得：让负责成为公共习惯。'}
  ]},
  ESFJ:{lead:'这一型往高处走，是让每个人被看见，也让群体更温暖有序。先站稳自己，再决定为现场付出多少。',people:[
    {name:'休·杰克曼',who:'演员',story:'舞台上他常让全场觉得被照顾到：看见你、谢谢你、今晚我们在一起。ESFJ 的高阶是把热情做成公共礼仪，让每个人离开时比来时更被当人看。'},
    {name:'宋庆龄',who:'社会活动家',story:'她把关怀做成长期的公共事业，而不是一次次私人的热心。看见弱者，然后建成可以持续的事。这一型往上走，是让照顾升级为事业，而不停在场面上的得体。'},
    {name:'董卿',who:'主持人',story:'得体、温度、把一场公共场合照顾周全：谁该被介绍、节奏何时该缓、现场如何不冷。ESFJ 的进阶，是让「让大家舒服」成为专业，而不是讨好。'}
  ]},
  ISTP:{lead:'这一型往高处走，是冷静看清结构，再精准出手，并让别人不必靠猜测才能跟你共事。少话可以，不要失联。',people:[
    {name:'李小龙',who:'武术家',story:'他看清结构，把力量用在最准的一点，同时不断拆掉无用的动作。ISTP 的高阶是：理解事物如何运作，然后只保留有效的那一下。冷静是方法，不是冷漠。'},
    {name:'宫本武藏',who:'剑术家',story:'他在实战里验证，而不是停在谈论。原则要能在压力下用出来才算原则。这一型往上走，是让手感成为智慧，让经验成为可以再用来的判断。'},
    {name:'迈克尔·乔丹',who:'运动员',story:'压力现场里，他把判断立刻变成动作。准备发生在没人看见的地方，出手发生在所有人盯着的时候。ISTP 的进阶，是让关键时刻的精准，有日常的重复托底。'}
  ]},
  ISFP:{lead:'这一型往高处走，是忠于感受，把真实做成别人能被打动的形式，并为喜欢的事留一点能活下去的结构。',people:[
    {name:'莫扎特',who:'作曲家',story:'当下的感受在他手里会变成准确而美的形式，轻，却经得起听。ISFP 的高阶不是情绪更满，是让感觉有手艺：能被演奏、被重复、被他人进入。'},
    {name:'弗里达·卡罗',who:'画家',story:'痛苦和身体都被她画成自己的真实，不化妆成别人喜欢的样子。这一型往上走，是敢把不好看的真实也做成作品，而不是只把美好的部分拿出来交换喜欢。'},
    {name:'迈克尔·杰克逊',who:'音乐人',story:'身体、节奏、舞台，他把内在感受交给现场，让许多人同时被击中。ISFP 的进阶，是让私人的感觉成为可分享的形式，而不失去那一层真。'}
  ]},
  ESTP:{lead:'这一型往高处走，是读懂现场、抓住眼前，并在大事上给未来的自己留一问。行动仍是语言，核算是升级。',people:[
    {name:'海明威',who:'作家',story:'他写得像出手：读懂现场，抓住这一刻，句子里少有废动作。ESTP 的高阶可以很文学，核心仍是：看见了，就用最直接的动作把它定住。'},
    {name:'成龙',who:'演员',story:'变化里他迅速调整，把危险变成观众能跟着紧张、又能笑出来的现场。身边的人被他带动。这一型往上走，是临场不只为刺激，也为把人安全地带过这一段。'},
    {name:'穆罕默德·阿里',who:'运动员',story:'大胆、当下、把气势变成可见的结果，也把一场拳赛说成更大的事。ESTP 的进阶，是让当下的魄力连着一个配得上的名目，而不是只为了爽。'}
  ]},
  ESFP:{lead:'这一型往高处走，是用热情照亮当下，让人与生活真实相遇，也敢于在短暂的阴天里停一下。亮不是逃避，是能力。',people:[
    {name:'玛丽莲·梦露',who:'演员',story:'她走进去，房间就会被照亮。感受力和魅力成为别人也能分享的现场。ESFP 的高阶很耀眼，也提醒我们：被看见的同时，仍需要一块不被观众占用的内心。'},
    {name:'猫王',who:'音乐人',story:'他让当下的人真实相遇、一起兴奋，把身体和声音变成一场公共的释放。这一型往上走，是让热闹成为相遇，而不只是噪音。'},
    {name:'威尔·史密斯',who:'演员',story:'活力被他做成可以分享的现场：幽默、热、把人拉进来。ESFP 的进阶，是让这份亮持续为他人工作，也允许自己在镜头之外歇一歇，再回来。'}
  ]}
};

const dimMeta = {
  EI:{axis:'精力来源', left:'E', right:'I', nameLeft:'外向', nameRight:'内向'},
  SN:{axis:'信息获取', left:'S', right:'N', nameLeft:'实感', nameRight:'直觉'},
  TF:{axis:'决策方式', left:'T', right:'F', nameLeft:'思考', nameRight:'情感'},
  JP:{axis:'生活方式', left:'J', right:'P', nameLeft:'判断', nameRight:'感知'}
};

function avatarStyle(type){
  const i=Math.max(0,typeOrder.indexOf(type)), col=i%4, row=Math.floor(i/4);
  return `background-position:${col*33.333}% ${row*33.333}%`;
}

const state = { view:'home', index:0, answers:Array(questions.length).fill(null) };
const app = document.querySelector('#app');
const esc = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function render(opts = {}){
  if (!opts.quiet) window.scrollTo({top:0,behavior:'smooth'});
  app.innerHTML = state.view === 'home' ? homeView() : state.view === 'quiz' ? quizView() : resultView();
  if (opts.quiet) app.querySelector('.fade-in')?.classList.remove('fade-in');
  bind();
}

function homeView(){ return `
  <section class="screen home fade-in">
    <div class="hero-stage" aria-hidden="true"></div>
    <div class="brand">MBTI <span class="slash">/</span> TYPE</div>
    <div class="home-content">
      <h1>一场关于你的<br>人格探索</h1>
      <p class="lede">找到你的人生说明书</p>
      <p class="meta">32 道题 · 约 4 分钟</p>
    </div>
    <div class="home-actions"><button class="primary" data-action="start">Start&nbsp;&nbsp;→</button></div>
  </section>`; }

function quizView(){
  const x = questions[state.index], selected = state.answers[state.index];
  const lean = selected === null ? '' : selected < 0 ? 'lean-a' : selected > 0 ? 'lean-b' : 'lean-mid';
  const choiceLabel = (v,i) => i===0 ? `更接近左侧：${x.a}` : i===4 ? `更接近右侧：${x.b}` : `中间倾向 ${i+1}`;
  return `<section class="screen quiz fade-in">
    <header class="quiz-top">
      <button class="icon-btn" aria-label="上一题" data-action="back">←</button>
      <div class="count">${state.index + 1} / ${questions.length}</div>
      <button class="icon-btn" aria-label="退出测试" data-action="exit">×</button>
    </header>
    <div class="progress" aria-label="测试进度"><span style="width:${((state.index + 1)/questions.length)*100}%"></span></div>
    <div class="question-area">
      <h2>${esc(x.q)}</h2>
      <div class="scale-card ${lean}">
        <div class="poles">
          <button type="button" class="pole pole-a${selected < 0 ? ' active' : ''}" data-value="-2" aria-pressed="${selected < 0}">${esc(x.a)}</button>
          <span class="poles-split" aria-hidden="true"></span>
          <button type="button" class="pole pole-b${selected > 0 ? ' active' : ''}" data-value="2" aria-pressed="${selected > 0}">${esc(x.b)}</button>
        </div>
        <div class="scale-options" role="radiogroup" aria-label="倾向程度">
          ${[-2,-1,0,1,2].map((v,i)=>`<button class="choice ${selected===v?'selected':''}" role="radio" aria-checked="${selected===v}" aria-label="${esc(choiceLabel(v,i))}" data-value="${v}"></button>`).join('')}
        </div>
      </div>
      <p class="instruction">不必找标准答案，选更接近你平时的那一端</p>
    </div>
    <footer class="quiz-actions">
      <button class="secondary" data-action="back" ${state.index===0?'disabled':''}>上一题</button>
      <button class="primary" data-action="next" ${selected===null?'disabled':''}>${state.index===questions.length-1?'查看结果':'下一题 →'}</button>
    </footer>
  </section>`;
}

function calculate(){
  const sums={EI:0,SN:0,TF:0,JP:0}, max={EI:0,SN:0,TF:0,JP:0};
  questions.forEach((q,i)=>{sums[q.d]+=state.answers[i]??0;max[q.d]+=2});
  const dims=Object.keys(dimMeta).map(d=>{
    const m=dimMeta[d];
    const leftPct=Math.round(((max[d]-sums[d])/(max[d]*2))*100);
    const letter=sums[d]<=0?m.left:m.right;
    const clarity=Math.abs(leftPct-50);
    return {
      ...m, d, leftPct, rightPct:100-leftPct, letter, clarity,
      edge:clarity<=8,
      dominantName:letter===m.left?m.nameLeft:m.nameRight,
      dominantPct:letter===m.left?leftPct:100-leftPct
    };
  });
  return { type:dims.map(d=>d.letter).join(''), dims, clearCount:dims.filter(d=>!d.edge).length };
}

const dimGuide = {
  EI:{E:'互动会给你充电。人、现场、把事情说出来，思路和情绪都会跟着活起来。一个人憋太久，你不是更清楚，而像电量在往下掉。',I:'独处会给你充电。先自己想清楚，再进入人群，你会更稳。热闹本身不一定差，只是事后你需要一块不被占用的安静，把电补回来。',edge:'独处和互动对你都用得上。这一维先看成弹性：有时跟人亮，有时自己亮，按场合切换即可。'},
  SN:{S:'你先信眼前的事实和做过的经验。把这一步做准，再谈更远的可能。脚底下的路清楚了，你才愿意抬眼看天。',N:'你先看见走向和可能性。细节可以后补，方向对你更重要。若有人只跟你核对事实，你会觉得真正的事还没开始。',edge:'事实和想象你都能用。这一维不必急着站队：该落地时落地，该望远时望远。'},
  TF:{T:'你先求事情说得通、标准前后一致。把对的事求清楚，关系才站得住。含糊的好，有时会让你更不安。',F:'你先照顾价值和关系，再谈对错。决定好不好，要看在意的人会不会受伤。逻辑很完整、人却散了，对你不算赢。',edge:'逻辑和人情你都会权衡。这一维是弹性，不是含糊：你可以两边都要，只是先后不同。'},
  JP:{J:'你需要方向先定下来。计划会让你安心，变数来了也想尽快重新排好。悬着的选择，会比忙碌本身更耗你。',P:'你需要留一点空白。边走边看更自然，过早拍板反而别扭。对你来说，保持开放有时就是在负责。',edge:'计划和留白你都能适应。这一维可以跟着事情本身走：有的事该定，有的事该等。'}
};

function dimReading(d){
  const g = dimGuide[d.d];
  if (d.edge) return g.edge;
  const tip = d.letter === d.left ? g[d.left] : g[d.right];
  return `更偏向${d.dominantName}（${d.dominantPct}%）。${tip}`;
}

function resultView(){
  const r=calculate(), name=typeNames[r.type]||'人格探索者', p=typeProfiles[r.type]||typeProfiles.INFJ;
  const ex=typeExemplars[r.type];
  return `<section class="screen result fade-in">
    <header class="result-top"><div class="brand">人生说明书</div><button class="text-btn" data-action="reset">重新测试</button></header>
    <article class="type-hero">
      <div class="avatar" style="${avatarStyle(r.type)}" role="img" aria-label="${r.type} ${name}人格头像"></div>
      <h1 class="type-code">${r.type}</h1>
      <p class="type-name">${name}</p>
      <p class="tagline">${p.tagline}</p>
    </article>
    <div class="section-title"><h2>你怎样运转</h2><span class="confidence">${r.clearCount} 维写得比较清楚</span></div>
    <div class="panel meters">
      ${r.dims.map(d=>`<div class="meter${d.edge?' is-edge':''}">
        <div class="meter-axis">${esc(d.axis)}${d.edge?'<span class="edge-tag">接近中间</span>':''}</div>
        <div class="meter-label"><span>${d.nameLeft} ${d.leftPct}%</span><span>${d.rightPct}% ${d.nameRight}</span></div>
        <div class="meter-track" aria-hidden="true"><span class="meter-mid"></span><span class="meter-knob" style="left:${d.rightPct}%"></span></div>
        <p class="meter-read">${esc(dimReading(d))}</p>
      </div>`).join('')}
    </div>
    <article class="panel insight">
      <h3>先这样理解你</h3>
      <p>${p.summary}</p>
      <div class="tags">${p.strengths.map(x=>`<span class="tag">${x}</span>`).join('')}</div>
    </article>
    <article class="panel howto">
      <h3>请这样用</h3>
      <p>${p.howto}</p>
    </article>
    ${ex?`<article class="panel exemplars">
      <h3>这一型的高阶样子</h3>
      <p class="exemplar-lead">${esc(ex.lead)}</p>
      <ul class="exemplar-list">${ex.people.map(person=>`<li>
        <div class="exemplar-name">${esc(person.name)}<span>${esc(person.who)}</span></div>
        <p>${esc(person.story)}</p>
      </li>`).join('')}</ul>
      <p class="exemplar-hint">不必模仿他们的行业。要学的是把你这型的长处用到极致，向这个高阶样子靠近。</p>
    </article>`:''}
    <div class="analysis-grid">
      <article class="panel analysis"><h3>使用时留意</h3>${p.risks.map(x=>`<p>${x}</p>`).join('')}</article>
      <article class="panel analysis"><h3>和人相处</h3><p>${p.relations}</p></article>
      <article class="panel analysis"><h3>做事的时候</h3><p>${p.work}</p></article>
      <article class="panel analysis growth"><h3>给自己的提示</h3><p>${p.growth}</p></article>
    </div>
    <button class="primary" data-action="save">保存说明书长图 →</button>
    <p class="disclaimer">这是一份 32 题四维偏好的自我说明书，不用于心理诊断。典范人物来自常见讨论中的归类，只作对照，不是本人测评。接近中间的维度代表弹性，而不是缺陷。</p>
  </section>`;
}

function bind(){
  app.querySelectorAll('[data-value]').forEach(btn=>btn.addEventListener('click',()=>{state.answers[state.index]=Number(btn.dataset.value);render({quiet:true});}));
  app.querySelectorAll('[data-action]').forEach(btn=>btn.addEventListener('click',()=>{
    const a=btn.dataset.action;
    if(a==='start'){state.view='quiz';state.index=0;}
    if(a==='back'){if(state.index>0)state.index--;}
    if(a==='exit'){state.view='home';}
    if(a==='next'&&state.answers[state.index]!==null){if(state.index<questions.length-1)state.index++;else state.view='result';}
    if(a==='reset'){state.answers.fill(null);state.index=0;state.view='home';}
    if(a==='save'){ saveResultCard(); return; }
    render();
  }));
}

function wrapLines(c, text, maxWidth){
  const chars=[...String(text||'')];
  let line='', lines=[];
  chars.forEach(ch=>{
    const test=line+ch;
    if (c.measureText(test).width>maxWidth && line){ lines.push(line); line=ch; }
    else line=test;
  });
  if (line) lines.push(line);
  return lines.length ? lines : [''];
}

function fillWrap(c, text, x, y, maxWidth, lineHeight){
  const lines=wrapLines(c, text, maxWidth);
  lines.forEach((l,i)=>c.fillText(l, x, y+i*lineHeight));
  return lines.length*lineHeight;
}

function drawPoster(r, p, name, avatar){
  const W=1080, pad=88, contentW=W-pad*2, serif='"Songti SC","Noto Serif SC","STSong",Georgia,serif', sans='"Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif';
  const ex=typeExemplars[r.type];
  const tmp=document.createElement('canvas'); tmp.width=W; tmp.height=14000;
  const c=tmp.getContext('2d');
  const gold='#c9aa6c', bright='#e1c58a', text='#f1ede3', muted='#aaa394';
  let y=0;
  const rule=()=>{ c.fillStyle='rgba(225,197,138,.28)'; c.fillRect(pad,y,contentW,1); y+=36; };
  const heading=(t)=>{ c.textAlign='left'; c.fillStyle=gold; c.font=`400 34px ${serif}`; c.fillText(t,pad,y+8); y+=52; };

  y=86;
  c.textAlign='center'; c.fillStyle=gold; c.font=`500 26px ${serif}`; c.fillText('人生说明书', W/2, y);
  const cx=W/2, cy=268, rad=132;
  c.save(); c.beginPath(); c.arc(cx,cy,rad,0,Math.PI*2); c.clip();
  const i=Math.max(0,typeOrder.indexOf(r.type)), sw=avatar.naturalWidth/4, sh=avatar.naturalHeight/4;
  c.drawImage(avatar,(i%4)*sw,Math.floor(i/4)*sh,sw,sh,cx-rad,cy-rad,rad*2,rad*2);
  c.restore();
  c.strokeStyle='#d9bd7e'; c.lineWidth=4; c.beginPath(); c.arc(cx,cy,rad+4,0,Math.PI*2); c.stroke();
  y=cy+rad+78;
  c.fillStyle=text; c.font=`500 108px Georgia, ${serif}`; c.fillText(r.type, W/2, y);
  y+=56; c.font=`400 40px ${serif}`; c.fillText(name, W/2, y);
  y+=52; c.fillStyle=muted; c.font=`400 28px ${serif}`; y+=fillWrap(c, p.tagline, W/2, y, 820, 42);
  y+=48; rule();

  heading('你怎样运转');
  r.dims.forEach(d=>{
    y+=28;
    c.textAlign='left'; c.fillStyle=gold; c.font=`400 26px ${serif}`;
    c.fillText(d.axis+(d.edge?'  ·  接近中间':''), pad, y);
    y+=42;
    c.fillStyle=text; c.font=`400 24px ${serif}`;
    c.fillText(`${d.nameLeft}  ${d.leftPct}%`, pad, y);
    c.textAlign='right'; c.fillText(`${d.rightPct}%  ${d.nameRight}`, pad+contentW, y);
    y+=28;
    c.fillStyle='rgba(255,255,255,.12)'; c.fillRect(pad,y,contentW,8);
    c.fillStyle='rgba(225,197,138,.45)'; c.fillRect(pad+contentW/2-0.5, y-4, 1, 16);
    c.fillStyle=bright; c.beginPath(); c.arc(pad+contentW*(d.rightPct/100), y+4, 8, 0, Math.PI*2); c.fill();
    y+=48;
    c.textAlign='left'; c.fillStyle=muted; c.font=`400 24px ${sans}`;
    y+=fillWrap(c, dimReading(d), pad, y, contentW, 38);
    y+=22;
  });
  y+=12; rule();

  heading('先这样理解你');
  y+=8; c.textAlign='left'; c.fillStyle=muted; c.font=`400 26px ${serif}`;
  y+=fillWrap(c, p.summary, pad, y, contentW, 42);
  y+=28;
  c.fillStyle=text; c.font=`400 26px ${sans}`;
  y+=fillWrap(c, p.strengths.join('    '), pad, y, contentW, 40);
  y+=40; rule();

  heading('请这样用');
  y+=8; c.fillStyle=muted; c.font=`400 26px ${serif}`;
  y+=fillWrap(c, p.howto, pad, y, contentW, 42);
  y+=40; rule();

  if (ex){
    heading('这一型的高阶样子');
    y+=8; c.fillStyle=muted; c.font=`400 26px ${serif}`;
    y+=fillWrap(c, ex.lead, pad, y, contentW, 42);
    ex.people.forEach(person=>{
      y+=32;
      c.textAlign='left'; c.fillStyle=text; c.font=`400 30px ${serif}`;
      c.fillText(person.name, pad, y);
      const nameW=c.measureText(person.name).width;
      c.fillStyle=gold; c.font=`400 22px ${sans}`; c.fillText(person.who, pad+nameW+18, y);
      y+=40; c.fillStyle=muted; c.font=`400 24px ${serif}`;
      y+=fillWrap(c, person.story, pad, y, contentW, 38);
    });
    y+=28; c.fillStyle=gold; c.font=`400 24px ${serif}`;
    y+=fillWrap(c, '不必模仿他们的行业。要学的是把你这型的长处用到极致。', pad, y, contentW, 38);
    y+=40; rule();
  }

  const blocks=[
    ['使用时留意', p.risks.map(x=>'·  '+x).join('\n')],
    ['和人相处', p.relations],
    ['做事的时候', p.work],
    ['给自己的提示', p.growth]
  ];
  blocks.forEach(([title, body], idx)=>{
    heading(title);
    y+=8; c.fillStyle=muted; c.font=`400 26px ${serif}`;
    body.split('\n').forEach(line=>{ y+=fillWrap(c, line, pad, y, contentW, 42); y+=8; });
    y+=28;
    if (idx<blocks.length-1) rule();
  });

  y+=24;
  c.textAlign='center'; c.fillStyle='#777166'; c.font=`400 22px ${sans}`;
  c.fillText('mbti.zhixingnote.cn', W/2, y);
  y+=56;

  const H=y;
  const canvas=document.createElement('canvas'); canvas.width=W; canvas.height=H;
  const out=canvas.getContext('2d');
  const g=out.createLinearGradient(0,0,W,H);
  g.addColorStop(0,'#17160f'); g.addColorStop(.5,'#090906'); g.addColorStop(1,'#1d140f');
  out.fillStyle=g; out.fillRect(0,0,W,H);
  out.strokeStyle='rgba(225,197,138,.42)'; out.lineWidth=2; out.strokeRect(36,36,W-72,H-72);
  out.drawImage(tmp, 0, 0);
  return canvas;
}

async function saveResultCard(){
  const btn=app.querySelector('[data-action="save"]');
  if (btn) { btn.disabled=true; btn.textContent='正在生成长图…'; }
  let objectUrl='';
  try {
    const r=calculate(), p=typeProfiles[r.type], name=typeNames[r.type];
    const img=new Image(); img.src='./assets/personality-avatars.webp'; await img.decode();
    const canvas=drawPoster(r, p, name, img);
    const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(new Error('blob')), 'image/png'));
    objectUrl=URL.createObjectURL(blob);
    const filename=`${r.type}-${name}-人生说明书.png`;
    const file=new File([blob], filename, {type:'image/png'});
    const canShare=!!(navigator.canShare && navigator.canShare({files:[file]}));
    const overlay=document.createElement('div'); overlay.className='save-overlay';
    overlay.innerHTML=`<div class="save-sheet">
      <button class="save-close" aria-label="关闭">×</button>
      <p>说明书长图已生成</p>
      <span>可直接下载；手机也可长按预览图保存</span>
      <div class="save-preview"><img src="${objectUrl}" alt="${r.type} ${name}人生说明书长图"></div>
      <a class="download-card" href="${objectUrl}" download="${filename}">下载长图</a>
      ${canShare?'<button type="button" class="secondary share-card">分享长图</button>':''}
    </div>`;
    document.body.appendChild(overlay);
    const close=()=>{ overlay.remove(); if (objectUrl) URL.revokeObjectURL(objectUrl); };
    overlay.querySelector('.save-close').addEventListener('click', close);
    overlay.addEventListener('click', e=>{ if (e.target===overlay) close(); });
    overlay.querySelector('.share-card')?.addEventListener('click', async ()=>{
      try { await navigator.share({ files:[file], title:`${r.type} ${name}人生说明书` }); }
      catch (err) { if (err && err.name!=='AbortError') overlay.querySelector('.download-card')?.click(); }
    });
  } catch (err) {
    console.error(err);
    if (btn) btn.textContent='生成失败，请再试一次';
    return;
  } finally {
    if (btn) { btn.disabled=false; btn.textContent='保存说明书长图 →'; }
  }
}

render();
