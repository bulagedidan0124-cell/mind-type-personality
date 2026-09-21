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
  INTJ:{tagline:'在复杂中寻找结构，把远见变成路径。',summary:'你习惯从全局理解问题，并在脑海中搭建一套清晰的系统。独立、克制、有长期视角，是你最自然的工作方式。',strengths:['战略规划','独立判断','系统思考'],risks:['容易对低效率失去耐心','可能低估情绪沟通的重要性'],relations:'你重视真诚、边界与思想上的交流。比起频繁表达，你更常用可靠的行动证明在意。',work:'适合需要长期规划、复杂分析和自主决策的环境；清晰目标与足够空间会让你发挥最好。',growth:'在给出解决方案之前，先确认对方需要建议还是理解；让重要的人看见你的思考过程。'},
  INTP:{tagline:'不断追问为什么，在思想中搭建新世界。',summary:'你对原理、逻辑与未知保持持久好奇。比起接受现成答案，你更愿意拆开问题、重新定义，再找到更优雅的解释。',strengths:['逻辑分析','概念创新','快速学习'],risks:['容易停留在推演阶段','可能忽略执行中的现实限制'],relations:'你需要能够尊重独处、又愿意讨论有趣问题的关系。你表达感情较含蓄，但会认真理解对方。',work:'适合研究、技术、策略和创新型任务；自由探索比严格流程更能激发你的潜力。',growth:'为想法设定一个足够小的交付节点，用真实反馈代替无止境的完善。'},
  ENTJ:{tagline:'看见目标，组织资源，然后推动事情发生。',summary:'你天然关注方向、效率与结果，擅长在混乱中建立秩序，并带动他人向共同目标前进。',strengths:['决断推进','资源整合','目标管理'],risks:['节奏过快可能给人压力','容易把脆弱理解成低效'],relations:'你欣赏独立、有担当、能坦率沟通的人。尊重与共同成长往往比形式化浪漫更重要。',work:'适合承担领导、经营、项目推进和关键决策；越复杂、越需要破局的任务越能激发你。',growth:'把“正确”之外的感受也纳入决策，并给不同节奏的人留下表达空间。'},
  ENTP:{tagline:'用新视角打破边界，让可能性不断生长。',summary:'你擅长连接看似无关的信息，喜欢挑战既定答案，并从讨论与实验中产生新的方向。',strengths:['创意联想','临场应变','观点表达'],risks:['兴趣转移快','可能为了辩论忽略他人感受'],relations:'你需要新鲜感、智力互动和彼此自由。真诚的讨论会让你更靠近一个人。',work:'适合创新、产品、咨询、创业和需要快速破题的场景；重复维护会消耗你的能量。',growth:'选择少数真正重要的想法持续落地，并把完成也当作创造的一部分。'},
  INFJ:{tagline:'安静地理解人心，也坚定地守护理想。',summary:'你敏锐地感受他人的需要，又习惯从长远意义看待选择。内在价值与现实行动一致时，你最有力量。',strengths:['深度洞察','共情理解','价值驱动'],risks:['容易吸收他人情绪','对自己要求过高'],relations:'你向往深度、稳定、彼此理解的关系。信任建立较慢，一旦投入便十分认真。',work:'适合咨询、教育、创作、研究和使命感明确的工作；需要安静思考与真实影响并存。',growth:'不要等到耗尽才设边界。把自己的需要说出来，也是维护关系的一部分。'},
  INFP:{tagline:'忠于内心价值，为世界保留柔软与想象。',summary:'你拥有细腻的情感和丰富的内在世界，常从价值、意义与人的独特性出发理解生活。',strengths:['真诚共情','想象创造','价值坚守'],risks:['容易理想化','面对冲突时可能回避'],relations:'你重视真实、安全和灵魂层面的理解。强迫与控制会让你退缩，温柔坦诚则让你打开自己。',work:'适合创作、内容、助人和具有个人意义的任务；你需要一定自由度来形成自己的表达。',growth:'把宏大的理想拆成今天能完成的一步，并练习在不舒服时清晰表达立场。'},
  ENFJ:{tagline:'看见每个人的潜力，让共同目标有温度。',summary:'你善于理解群体氛围、凝聚共识，并鼓励他人走向更好的状态。你常把关系与成长放在心上。',strengths:['激励他人','沟通协调','团队凝聚'],risks:['容易过度承担','可能忽略自己的真实需求'],relations:'你投入、热情，也期待积极回应。被看见、被感谢以及共同成长会让关系更稳固。',work:'适合教育、管理、品牌、组织发展和公共沟通；人与使命结合的环境最能激发你。',growth:'帮助别人之前先确认责任边界，允许自己说“不”，也允许他人为自己负责。'},
  ENFP:{tagline:'追随热情连接人与灵感，让生活充满可能。',summary:'你对人、新鲜体验和未来可能性保持开放，能迅速点燃气氛，也擅长让别人看到新的自己。',strengths:['热情感染','灵感创造','关系连接'],risks:['容易分散精力','情绪和动力可能波动'],relations:'你需要真诚表达、自由空间和持续的新鲜感。冷淡与机械式相处会让你迅速失去能量。',work:'适合创意、传播、社群、产品和需要建立连接的工作；多样性与自主感十分重要。',growth:'减少同时启动的项目，为最重要的热情建立稳定节奏和完成机制。'},
  ISTJ:{tagline:'用可靠与秩序，把承诺一件件变成现实。',summary:'你尊重事实、责任与清晰标准，习惯通过稳定行动确保事情准确完成，是值得信赖的执行者。',strengths:['严谨可靠','细节管理','持续执行'],risks:['面对突变可能紧张','容易坚持熟悉方法'],relations:'你看重忠诚、责任和长期陪伴。虽然不总是外露，但会通过照顾细节表达重视。',work:'适合规则清楚、责任明确、重视质量的环境；你在流程、运营和专业积累中表现出色。',growth:'给新方法一个小规模试验机会，并主动说出认可与关心，而不只用行动暗示。'},
  ISFJ:{tagline:'记住细节，照顾需要，让日常变得安心。',summary:'你细心、稳定，对他人的状态十分敏感，常以低调而持续的方式维系关系与秩序。',strengths:['细致体贴','责任感强','稳定支持'],risks:['不善拒绝','容易压抑不满直到疲惫'],relations:'你珍惜确定感、互相照顾和日常承诺。被忽视付出会让你受伤，明确感谢十分重要。',work:'适合服务、支持、行政、医疗和需要耐心维护的工作；和谐可靠的团队会让你安心。',growth:'把自己的需求放进计划，及时表达边界，不必等别人主动发现你的辛苦。'},
  ESTJ:{tagline:'明确标准、快速行动，让团队稳定抵达。',summary:'你务实直接，擅长制定规则、分配责任并跟进结果，面对复杂事务时能迅速抓住执行重点。',strengths:['组织执行','规则意识','责任担当'],risks:['可能显得强势','对模糊和低效率容忍度低'],relations:'你重视可靠、坦率与共同承担。清楚的约定比猜测更能让你感到安全。',work:'适合运营、管理、工程、财务和需要落地负责的岗位；明确权限与成果标准很重要。',growth:'倾听不同意见背后的原因，并把纠正问题与否定一个人区分开来。'},
  ESFJ:{tagline:'让每个人被看见，也让群体更温暖有序。',summary:'你关注关系、氛围和现实需要，善于主动照顾他人并把大家组织在一起。',strengths:['人际协调','实际照顾','合作意识'],risks:['容易依赖外界认可','可能因冲突而过度焦虑'],relations:'你重视回应、陪伴和具体的关心。稳定互动与共同仪式会带来强烈归属感。',work:'适合服务、教育、客户、活动与团队支持；清晰反馈和良好人际氛围能提升表现。',growth:'不必让所有人都满意。先确认自己的立场，再决定愿意付出多少。'},
  ISTP:{tagline:'冷静观察，精准出手，在实践中解决问题。',summary:'你善于理解事物如何运作，并在突发状况中保持冷静。比起长篇讨论，你更信任亲手验证。',strengths:['实操解决','危机应变','客观判断'],risks:['不爱解释过程','长期规划容易被搁置'],relations:'你需要自由、信任和轻松直接的相处。过度追问会让你退开，实际陪伴更符合你的表达。',work:'适合技术、工程、数据、制作和现场解决问题；自主、具体、有反馈的任务最合适。',growth:'提前说明你的想法与边界，让别人不必通过沉默猜测你的状态。'},
  ISFP:{tagline:'忠于当下感受，用审美与行动表达真实。',summary:'你敏锐地感知环境与情绪，重视真实、自由和个人体验，常以作品或行动表达内在价值。',strengths:['审美感知','温和包容','灵活行动'],risks:['回避长期压力','容易把重要感受藏起来'],relations:'你喜欢自然、不控制、能尊重个人节奏的关系。细腻行动比宏大承诺更能打动你。',work:'适合设计、艺术、手作、体验和以人为本的工作；自主空间与真实反馈同样重要。',growth:'为喜欢的事情建立一点结构，并在不满累积之前，用具体语言表达需求。'},
  ESTP:{tagline:'迅速读懂现场，用行动抓住眼前机会。',summary:'你精力充沛、现实敏锐，善于在变化中迅速判断并采取行动，也能带动周围人的情绪。',strengths:['果断行动','现场判断','大胆适应'],risks:['可能忽略长期代价','容易因追求刺激而冒进'],relations:'你偏爱直接、有趣、一起体验生活的关系。给彼此空间比反复分析情绪更自然。',work:'适合销售、谈判、创业、活动和快节奏现场；即时反馈与可见成果会持续激励你。',growth:'重大决定前强制加入一次延迟检查：它在一个月和一年后分别意味着什么？'},
  ESFP:{tagline:'用热情照亮当下，让人与生活真实相遇。',summary:'你热情、敏锐、富有表现力，善于捕捉现场的美好，也愿意让身边的人感到轻松和被欢迎。',strengths:['感染力强','感受敏锐','乐于分享'],risks:['容易逃避沉重议题','计划性可能不足'],relations:'你重视陪伴、回应和共同体验。冷漠或过度控制会削弱你的安全感与热情。',work:'适合表演、服务、内容、活动和需要人际互动的岗位；充满活力的环境最能激发你。',growth:'为重要目标保留固定时间，同时练习面对短期不愉快，而不是立刻转移注意力。'}
};

const typeExemplars = {
  INTJ:{lead:'往高处走，是把远见收成别人也能跟着走的路径。',people:[
    {name:'诸葛亮',who:'战略家',trait:'把看不见的局势，落成一步步能走的棋。'},
    {name:'牛顿',who:'科学家',trait:'在长久的独处里，建起一套解释世界的系统。'},
    {name:'克里斯托弗·诺兰',who:'导演',trait:'用严密结构，让想象变成别人也能进入的世界。'}
  ]},
  INTP:{lead:'往高处走，是把「为什么」追问到足够深，再把答案交出去。',people:[
    {name:'爱因斯坦',who:'物理学家',trait:'对原理保持好奇，直到改写人们对世界的理解。'},
    {name:'老子',who:'思想家',trait:'把复杂收成几条更本质的道理。'},
    {name:'理查德·费曼',who:'物理学家',trait:'把难的事讲清楚，也亲手去验证。'}
  ]},
  ENTJ:{lead:'往高处走，是看见目标，组织资源，把事情真正推发生。',people:[
    {name:'拿破仑',who:'军事家',trait:'看见方向就集结力量，把它拿下来。'},
    {name:'史蒂夫·乔布斯',who:'企业家',trait:'用判断力和标准，推动一整条产业往前走。'},
    {name:'曹操',who:'政治家',trait:'在乱局里建立秩序，并让人跟着走。'}
  ]},
  ENTP:{lead:'往高处走，是把新视角变成一次次可试的创造。',people:[
    {name:'达·芬奇',who:'博学者',trait:'把看似无关的领域连成新的可能。'},
    {name:'苏格拉底',who:'哲学家',trait:'用提问打破现成答案，逼出更清楚的思想。'},
    {name:'爱迪生',who:'发明家',trait:'把好奇变成可以反复试验的事。'}
  ]},
  INFJ:{lead:'往高处走，是把对人心的理解，活成一条别人也能走的路。',people:[
    {name:'王阳明',who:'思想家',trait:'把内在信念活成可以教给别人的路。'},
    {name:'马丁·路德·金',who:'民权领袖',trait:'用洞察人心，推动一个共同的理想。'},
    {name:'卡尔·荣格',who:'心理学家',trait:'安静地看见人内在更深处的结构。'}
  ]},
  INFP:{lead:'往高处走，是忠于价值，并把内在世界做成能被看见的作品。',people:[
    {name:'梵高',who:'画家',trait:'忠于感受，把内在世界画给别人看。'},
    {name:'托尔金',who:'作家',trait:'为价值与想象，建起一个完整的世界。'},
    {name:'李白',who:'诗人',trait:'用真诚和想象，把生命过成自己的句子。'}
  ]},
  ENFJ:{lead:'往高处走，是看见每个人的潜力，让共同目标有温度。',people:[
    {name:'奥巴马',who:'政治家',trait:'把人凝聚到一个有方向、也有温度的共同目标。'},
    {name:'奥普拉',who:'媒体人',trait:'看见人的潜力，并当众把它点燃。'},
    {name:'周恩来',who:'政治家',trait:'在复杂关系里协调，让事情继续向前。'}
  ]},
  ENFP:{lead:'往高处走，是把热情做成许多人都能走进来的世界。',people:[
    {name:'沃尔特·迪士尼',who:'创作者',trait:'把热情做成许多人能走进的世界。'},
    {name:'J.K.罗琳',who:'作家',trait:'追随一个想法，直到它改变很多人。'},
    {name:'马克·吐温',who:'作家',trait:'用幽默连接人，也刺破习以为常的世界。'}
  ]},
  ISTJ:{lead:'往高处走，是用可靠和秩序，把承诺一件件做实。',people:[
    {name:'曾国藩',who:'政治家',trait:'用克制和秩序，把承诺一件件做实。'},
    {name:'乔治·华盛顿',who:'政治家',trait:'把责任放在个人荣耀前面。'},
    {name:'沃伦·巴菲特',who:'投资者',trait:'长期、克制，按自己验证过的原则做事。'}
  ]},
  ISFJ:{lead:'往高处走，是把细心的照顾，做成别人能够安心依靠的事。',people:[
    {name:'特蕾莎修女',who:'人道工作者',trait:'用持续的照顾，把关怀做成一生。'},
    {name:'南丁格尔',who:'护理先驱',trait:'记住细节，把他人的安放进可以运转的秩序。'},
    {name:'冰心',who:'作家',trait:'以温柔而坚定的文字，照看好日常的心。'}
  ]},
  ESTJ:{lead:'往高处走，是明确标准，让团队稳定地把事情做成。',people:[
    {name:'亨利·福特',who:'实业家',trait:'把标准、流程和执行，做到能够规模化。'},
    {name:'洛克菲勒',who:'实业家',trait:'用规则把庞大系统管到可预期。'},
    {name:'朱镕基',who:'政治家',trait:'用果断和标准，推动事情真正落地。'}
  ]},
  ESFJ:{lead:'往高处走，是让每个人被看见，也让群体更温暖有序。',people:[
    {name:'休·杰克曼',who:'演员',trait:'让现场的每个人被看见、被照顾到。'},
    {name:'宋庆龄',who:'社会活动家',trait:'把关怀做成长期的公共事业。'},
    {name:'董卿',who:'主持人',trait:'用得体和温度，把一场公共场合照顾周全。'}
  ]},
  ISTP:{lead:'往高处走，是冷静看清结构，再精准出手。',people:[
    {name:'李小龙',who:'武术家',trait:'看清结构，再把力量用在最准的一点。'},
    {name:'宫本武藏',who:'剑术家',trait:'在实战里验证，而不是停在谈论。'},
    {name:'迈克尔·乔丹',who:'运动员',trait:'在压力现场，把判断立刻变成动作。'}
  ]},
  ISFP:{lead:'往高处走，是忠于感受，把真实做成别人能被打动的形式。',people:[
    {name:'莫扎特',who:'作曲家',trait:'把当下感受，做成准确而美的形式。'},
    {name:'弗里达·卡罗',who:'画家',trait:'忠于自己的真实，并把它画出来。'},
    {name:'迈克尔·杰克逊',who:'音乐人',trait:'用身体和作品，把内在感受交给现场。'}
  ]},
  ESTP:{lead:'往高处走，是读懂现场，用行动抓住眼前这一刻。',people:[
    {name:'海明威',who:'作家',trait:'读懂现场，用行动抓住眼前这一刻。'},
    {name:'成龙',who:'演员',trait:'在变化里迅速调整，并把周围的人带动起来。'},
    {name:'穆罕默德·阿里',who:'运动员',trait:'大胆、当下，把气势变成可见的结果。'}
  ]},
  ESFP:{lead:'往高处走，是用热情照亮当下，让人与生活真实相遇。',people:[
    {name:'玛丽莲·梦露',who:'演员',trait:'用热情和感受力，照亮一个房间。'},
    {name:'猫王',who:'音乐人',trait:'让当下的人真实相遇，一起兴奋起来。'},
    {name:'威尔·史密斯',who:'演员',trait:'把活力变成可以分享的现场。'}
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
  EI:{E:'互动会给你充电。人、现场、把事情说出来，往往比一个人憋着更有效。',I:'独处会给你充电。先自己想清楚，再进入人群，你会更稳。',edge:'独处和互动对你都用得上。这一维先看成弹性，按场合切换即可。'},
  SN:{S:'你先信眼前的事实和做过的经验。把这一步做准，再谈更远的可能。',N:'你先看见走向和可能性。细节可以后补，方向对你更重要。',edge:'事实和想象你都能用。这一维不必急着站队。'},
  TF:{T:'你先求事情说得通、标准前后一致。',F:'你先照顾价值和关系，再谈对错。',edge:'逻辑和人情你都会权衡。这一维是弹性，不是含糊。'},
  JP:{J:'你需要方向先定下来。计划会让你安心。',P:'你需要留一点空白。边走边看更自然。',edge:'计划和留白你都能适应。这一维可以跟着事情本身走。'}
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
    ${ex?`<article class="panel exemplars">
      <h3>这一型的高阶样子</h3>
      <p class="exemplar-lead">${esc(ex.lead)}</p>
      <ul class="exemplar-list">${ex.people.map(person=>`<li>
        <div class="exemplar-name">${esc(person.name)}<span>${esc(person.who)}</span></div>
        <p>${esc(person.trait)}</p>
      </li>`).join('')}</ul>
      <p class="exemplar-hint">不必模仿他们的行业。要学的是把你这型的长处用到极致，向这个高阶样子靠近。</p>
    </article>`:''}
    <div class="analysis-grid">
      <article class="panel analysis"><h3>使用时留意</h3><ul>${p.risks.map(x=>`<li>${x}</li>`).join('')}</ul></article>
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
  const tmp=document.createElement('canvas'); tmp.width=W; tmp.height=9200;
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

  if (ex){
    heading('这一型的高阶样子');
    y+=8; c.fillStyle=muted; c.font=`400 26px ${serif}`;
    y+=fillWrap(c, ex.lead, pad, y, contentW, 42);
    ex.people.forEach(person=>{
      y+=28;
      c.textAlign='left'; c.fillStyle=text; c.font=`400 30px ${serif}`;
      c.fillText(person.name, pad, y);
      const nameW=c.measureText(person.name).width;
      c.fillStyle=gold; c.font=`400 22px ${sans}`; c.fillText(person.who, pad+nameW+18, y);
      y+=36; c.fillStyle=muted; c.font=`400 24px ${serif}`;
      y+=fillWrap(c, person.trait, pad, y, contentW, 38);
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
