const questions = [
  { d:'EI', label:'精力来源 · E / I', q:'忙碌了一周后，哪种方式更能让你恢复状态？', a:'和喜欢的人一起出去', b:'一个人安静待一会儿' },
  { d:'SN', label:'信息获取 · S / N', q:'接触一个新主题时，你通常先关注什么？', a:'具体事实和实际例子', b:'背后的规律和可能性' },
  { d:'TF', label:'决策方式 · T / F', q:'面对重要决定时，你更自然地依靠什么？', a:'逻辑是否合理一致', b:'这会给人带来什么感受' },
  { d:'JP', label:'生活方式 · J / P', q:'开始一项重要任务前，你更喜欢怎样推进？', a:'先列清计划再开始', b:'先动手再边做边调整' },
  { d:'EI', label:'精力来源 · E / I', q:'进入一个大多是陌生人的场合时，你通常会？', a:'主动寻找聊天机会', b:'先观察，等自然的契机' },
  { d:'SN', label:'信息获取 · S / N', q:'别人讲述一件事时，什么更容易被你记住？', a:'发生过的具体细节', b:'它表达的核心意思' },
  { d:'TF', label:'决策方式 · T / F', q:'朋友向你诉说烦恼时，你的第一反应通常是？', a:'一起分析问题和办法', b:'先理解并回应他的感受' },
  { d:'JP', label:'生活方式 · J / P', q:'旅行前，你会怎样安排自己的行程？', a:'提前定好主要路线', b:'到了以后看心情决定' },
  { d:'EI', label:'精力来源 · E / I', q:'讨论一个复杂问题时，你更容易怎样想清楚？', a:'边说边整理思路', b:'先独自想好再表达' },
  { d:'SN', label:'信息获取 · S / N', q:'学习一种新技能时，哪种方式更适合你？', a:'跟着步骤实际操作', b:'先理解整体原理' },
  { d:'TF', label:'决策方式 · T / F', q:'团队出现分歧时，你更倾向于优先维护什么？', a:'一致的规则和标准', b:'成员之间的关系与感受' },
  { d:'JP', label:'生活方式 · J / P', q:'面对截止日期，你通常是什么状态？', a:'尽早完成，留出余量', b:'临近时效率更高' },
  { d:'EI', label:'精力来源 · E / I', q:'经历了一件特别开心的事，你更想怎样分享？', a:'马上告诉很多人', b:'只告诉少数亲近的人' },
  { d:'SN', label:'信息获取 · S / N', q:'解决问题时，你更信任哪一种依据？', a:'已验证过的经验', b:'新出现的直觉和联想' },
  { d:'TF', label:'决策方式 · T / F', q:'给别人提出意见时，你通常更在意什么？', a:'表达得准确直接', b:'对方是否容易接受' },
  { d:'JP', label:'生活方式 · J / P', q:'原定计划突然改变时，你通常会？', a:'需要一点时间重新安排', b:'觉得变化也挺有意思' },
  { d:'EI', label:'精力来源 · E / I', q:'在一群人中长时间交流后，你通常感觉？', a:'被互动激活了状态', b:'需要独处恢复能量' },
  { d:'SN', label:'信息获取 · S / N', q:'阅读一个故事时，你更容易注意到什么？', a:'环境、动作和细节', b:'隐喻、主题和言外之意' },
  { d:'TF', label:'决策方式 · T / F', q:'如果规则与特殊情况冲突，你更可能怎样处理？', a:'尽量保持标准一致', b:'根据具体处境通融' },
  { d:'JP', label:'生活方式 · J / P', q:'你的日常空间通常更接近哪种状态？', a:'物品有相对固定的位置', b:'看似随意但自己找得到' },
  { d:'EI', label:'精力来源 · E / I', q:'有一个还不成熟的想法时，你更倾向于？', a:'找人聊聊获得启发', b:'自己推敲到比较完整' },
  { d:'SN', label:'信息获取 · S / N', q:'看待未来时，你更常想到什么？', a:'下一步可以落地的行动', b:'许多尚未展开的可能' },
  { d:'TF', label:'决策方式 · T / F', q:'评价一个方案时，你更容易先发现什么？', a:'逻辑漏洞和效率问题', b:'它对不同人的影响' },
  { d:'JP', label:'生活方式 · J / P', q:'面对多个可选方向时，你通常更舒服的是？', a:'尽快确定一个方向', b:'继续保留选择空间' }
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

function avatarStyle(type){
  const i=Math.max(0,typeOrder.indexOf(type)), col=i%4, row=Math.floor(i/4);
  return `background-position:${col*33.333}% ${row*33.333}%`;
}

const state = { view:'home', index:0, answers:Array(questions.length).fill(null) };
const app = document.querySelector('#app');
const esc = s => s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function render(){
  window.scrollTo({top:0,behavior:'smooth'});
  app.innerHTML = state.view === 'home' ? homeView() : state.view === 'quiz' ? quizView() : resultView();
  bind();
}

function homeView(){ return `
  <section class="screen home fade-in">
    <div class="hero-stage" aria-hidden="true"></div>
    <div class="brand">人格探索</div>
    <div class="home-content">
      <h1>一场关于你的<br>人格探索</h1>
      <p class="meta">24 道题 · 约 3 分钟</p>
    </div>
    <div class="home-actions"><button class="primary" data-action="start">Start&nbsp;&nbsp;→</button></div>
  </section>`; }

function quizView(){
  const x = questions[state.index], selected = state.answers[state.index];
  return `<section class="screen quiz fade-in">
    <header class="quiz-top">
      <button class="icon-btn" aria-label="上一题" data-action="back">←</button>
      <div class="count">${state.index + 1} / ${questions.length}</div>
      <button class="icon-btn" aria-label="退出测试" data-action="exit">×</button>
    </header>
    <div class="progress" aria-label="测试进度"><span style="width:${((state.index + 1)/questions.length)*100}%"></span></div>
    <div class="question-area">
      <div class="dimension">${esc(x.label)}</div>
      <h2>${esc(x.q)}</h2>
      <p class="instruction">选择与你真实状态最接近的一项</p>
      <div class="scale-card">
        <div class="scale-labels"><span>${esc(x.a)}</span><span>${esc(x.b)}</span></div>
        <div class="scale-options" role="radiogroup" aria-label="倾向程度">
          ${[-2,-1,0,1,2].map((v,i)=>`<button class="choice ${selected===v?'selected':''}" role="radio" aria-checked="${selected===v}" aria-label="选项 ${i+1}" data-value="${v}"></button>`).join('')}
        </div>
      </div>
      <p class="hint">越靠近一端，代表你的倾向越明显</p>
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
  const pairs=[['EI','E','I'],['SN','S','N'],['TF','T','F'],['JP','J','P']];
  const dims=pairs.map(([d,a,b])=>{const pctA=Math.round(((max[d]-sums[d])/(max[d]*2))*100);return {d,left:a,right:b,leftPct:pctA,rightPct:100-pctA,letter:sums[d]<=0?a:b};});
  return { type:dims.map(d=>d.letter).join(''), dims };
}

function resultView(){
  const r=calculate(), name=typeNames[r.type]||'人格探索者', p=typeProfiles[r.type]||typeProfiles.INFJ;
  const confidence=Math.round(r.dims.reduce((s,d)=>s+Math.abs(d.leftPct-50)*2,0)/4);
  return `<section class="screen result fade-in">
    <header class="result-top"><div class="brand">人格探索</div><button class="text-btn" data-action="reset">重新测试</button></header>
    <article class="type-hero">
      <div class="avatar" style="${avatarStyle(r.type)}" role="img" aria-label="${r.type} ${name}人格头像"></div>
      <p class="kicker">YOUR PERSONALITY TYPE</p>
      <h1 class="type-code">${r.type}</h1>
      <p class="type-name">${name}</p>
      <p class="tagline">${p.tagline}</p>
    </article>
    <div class="section-title"><h2>你的四维倾向</h2><span class="confidence">清晰度 ${confidence}%</span></div>
    <div class="panel">
      ${r.dims.map(d=>`<div class="meter"><div class="meter-label"><strong>${d.left} ${d.leftPct}%</strong><span>${d.rightPct}% ${d.right}</span></div><div class="meter-track"><div class="meter-fill" style="width:${d.leftPct}%"></div></div></div>`).join('')}
    </div>
    <div class="tags">${p.strengths.map(x=>`<span class="tag">${x}</span>`).join('')}</div>
    <article class="panel insight"><h3>人格概览</h3><p>${p.summary}</p></article>
    <div class="analysis-grid">
      <article class="panel analysis"><span class="analysis-no">01</span><h3>你的天然优势</h3><ul>${p.strengths.map(x=>`<li>${x}</li>`).join('')}</ul></article>
      <article class="panel analysis"><span class="analysis-no">02</span><h3>可能的盲区</h3><ul>${p.risks.map(x=>`<li>${x}</li>`).join('')}</ul></article>
      <article class="panel analysis"><span class="analysis-no">03</span><h3>关系中的你</h3><p>${p.relations}</p></article>
      <article class="panel analysis"><span class="analysis-no">04</span><h3>工作与天赋</h3><p>${p.work}</p></article>
    </div>
    <article class="panel growth"><span class="analysis-no">05</span><h3>给你的成长提示</h3><p>${p.growth}</p></article>
    <button class="primary" data-action="save">保存我的人格卡片 →</button>
    <p class="disclaimer">基于四维人格偏好的自我探索工具，不用于心理诊断。</p>
  </section>`;
}

function bind(){
  app.querySelectorAll('[data-value]').forEach(btn=>btn.addEventListener('click',()=>{state.answers[state.index]=Number(btn.dataset.value);render();}));
  app.querySelectorAll('[data-action]').forEach(btn=>btn.addEventListener('click',()=>{
    const a=btn.dataset.action;
    if(a==='start'){state.view='quiz';state.index=0;}
    if(a==='back'){if(state.index>0)state.index--;}
    if(a==='exit'){state.view='home';}
    if(a==='next'&&state.answers[state.index]!==null){if(state.index<questions.length-1)state.index++;else state.view='result';}
    if(a==='reset'){state.answers.fill(null);state.index=0;state.view='home';}
    if(a==='save') saveResultCard();
    render();
  }));
}

async function saveResultCard(){
  const r=calculate(), p=typeProfiles[r.type], name=typeNames[r.type];
  const canvas=document.createElement('canvas'); canvas.width=1080; canvas.height=1440;
  const c=canvas.getContext('2d');
  const g=c.createLinearGradient(0,0,1080,1440); g.addColorStop(0,'#17160f'); g.addColorStop(.55,'#090906'); g.addColorStop(1,'#24160f'); c.fillStyle=g; c.fillRect(0,0,1080,1440);
  c.strokeStyle='rgba(225,197,138,.42)'; c.lineWidth=2; c.strokeRect(42,42,996,1356);
  const img=new Image(); img.src='./assets/personality-avatars.webp'; await img.decode();
  const i=typeOrder.indexOf(r.type), sw=img.naturalWidth/4, sh=img.naturalHeight/4;
  c.save(); c.beginPath(); c.arc(540,290,170,0,Math.PI*2); c.clip(); c.drawImage(img,(i%4)*sw,Math.floor(i/4)*sh,sw,sh,370,120,340,340); c.restore();
  c.strokeStyle='#d9bd7e'; c.lineWidth=5; c.beginPath(); c.arc(540,290,174,0,Math.PI*2); c.stroke();
  c.textAlign='center'; c.fillStyle='#c9aa6c'; c.font='28px serif'; c.fillText('人格探索 · PERSONALITY PORTRAIT',540,530);
  c.fillStyle='#f1ede3'; c.font='bold 132px Georgia, serif'; c.fillText(r.type,540,680);
  c.font='44px serif'; c.fillText(name,540,748);
  c.fillStyle='#aaa394'; c.font='30px sans-serif'; wrapCanvasText(c,p.tagline,540,810,820,46);
  c.textAlign='left'; c.fillStyle='#c9aa6c'; c.font='26px sans-serif'; c.fillText('核心优势',120,940);
  c.fillStyle='#f1ede3'; c.font='34px sans-serif'; p.strengths.forEach((x,j)=>c.fillText(`0${j+1}  ${x}`,120,1005+j*62));
  c.fillStyle='#aaa394'; c.font='27px sans-serif'; wrapCanvasText(c,p.summary,120,1215,840,42);
  c.textAlign='center'; c.fillStyle='#777166'; c.font='22px sans-serif'; c.fillText('mbti.zhixingnote.cn',540,1360);
  const dataUrl=canvas.toDataURL('image/png');
  const overlay=document.createElement('div'); overlay.className='save-overlay';
  overlay.innerHTML=`<div class="save-sheet"><button class="save-close" aria-label="关闭">×</button><p>人格卡片已生成</p><span>手机端长按图片保存，电脑端可直接下载</span><img src="${dataUrl}" alt="${r.type} ${name}人格卡片"><a class="download-card" href="${dataUrl}" download="${r.type}-${name}-人格卡片.png">下载图片</a></div>`;
  document.body.appendChild(overlay);
  overlay.querySelector('.save-close').addEventListener('click',()=>overlay.remove());
  overlay.addEventListener('click',e=>{if(e.target===overlay) overlay.remove();});
}

function wrapCanvasText(c,text,x,y,maxWidth,lineHeight){
  const chars=[...text]; let line='', lines=[];
  chars.forEach(ch=>{const test=line+ch;if(c.measureText(test).width>maxWidth&&line){lines.push(line);line=ch;}else line=test;});
  if(line) lines.push(line); lines.slice(0,4).forEach((l,i)=>c.fillText(l,x,y+i*lineHeight));
}

render();
