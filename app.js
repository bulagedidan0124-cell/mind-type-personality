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
    <div class="brand">MIND <span class="slash">/</span> TYPE</div>
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
  const r=calculate(), name=typeNames[r.type]||'人格探索者';
  const confidence=Math.round(r.dims.reduce((s,d)=>s+Math.abs(d.leftPct-50)*2,0)/4);
  return `<section class="screen result fade-in">
    <header class="result-top"><div class="brand">MIND <span class="slash">/</span> TYPE</div><button class="text-btn" data-action="reset">重新测试</button></header>
    <article class="type-hero">
      <p class="kicker">YOUR PERSONALITY TYPE</p>
      <h1 class="type-code">${r.type}</h1>
      <p class="type-name">${name}</p>
      <p class="tagline">先理解自己的倾向，再选择适合的行动。</p>
    </article>
    <div class="section-title"><h2>你的四维倾向</h2><span class="confidence">清晰度 ${confidence}%</span></div>
    <div class="panel">
      ${r.dims.map(d=>`<div class="meter"><div class="meter-label"><strong>${d.left} ${d.leftPct}%</strong><span>${d.rightPct}% ${d.right}</span></div><div class="meter-track"><div class="meter-fill" style="width:${d.leftPct}%"></div></div></div>`).join('')}
    </div>
    <div class="tags"><span class="tag">独立思考</span><span class="tag">内在节奏</span><span class="tag">自我觉察</span></div>
    <article class="panel insight"><h3>你更像这样的思考者</h3><p>你有自己自然的信息处理和决策方式。结果不是给你贴上固定标签，而是帮助你看见偏好，并在不同场景中更有意识地选择。</p></article>
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
    if(a==='save') window.print();
    render();
  }));
}

render();
