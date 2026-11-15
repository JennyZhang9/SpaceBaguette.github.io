// Manages language choices and applies translations to static and generated interface copy without changing measurements.
/* UI copy only: translations never change measurements, thresholds or user data. */
const languages={en:['English','en'],zh:['普通话（简体中文）','zh-Hans'],zhTraditional:['國語（繁體中文）','zh-Hant'],es:['Español','es'],genz:['Brainrot (Gen Z)','en'],alpha:['Brainrot (Gen Alpha)','en']};
let uiLanguage='en';try{const saved=localStorage.getItem('astro-language');if(Object.hasOwn(languages,saved))uiLanguage=saved}catch{}
const uiCopy=new Map(`Language|语言|Idioma|Pick your vibe|Pick your brainrot|語言
Appearance|外观|Apariencia|The fit check|Aura settings|外觀
Color theme|颜色主题|Tema de color|Color vibe|Aura palette|顏色主題
Reading font|阅读字体|Fuente de lectura|Font era|Font buff|閱讀字體
Dark blue|深蓝|Azul oscuro|Dark mode hits|Midnight aura|深藍
Light|浅色|Claro|Light mode era|Flashbang mode|淺色
Default|默认|Predeterminada|The OG|Default skin|默認
Dyslexia-friendly spacing|易读字距|Espaciado de lectura accesible|Roomy letters|Letters with extra space|易讀字距
Home|首页|Inicio|Main character HQ|Spawn point|首頁
What if?|情景模拟|Simulador|Delulu lab|Ohio simulator|情景模擬
My journal|我的日志|Mi diario|The receipts|Lore log|我的日志
Ask Helios|问赫利俄斯|Pregunta a Helios|Helios spill the tea|Ask NPC Helios|問赫利俄斯
Devices|设备|Dispositivos|Gadget flex|Loot inventory|設備
Wellbeing guide|身心健康指南|Guía de bienestar|Touch grass guide|Aura recovery|身心健康指南
Sleep data|睡眠数据|Datos de sueño|Sleep lore|Nap stats|睡眠資料
Meet the team|认识团队|Conoce al equipo|Meet the squad|Squad reveal|認識團隊
Data & science|数据与科学|Datos y ciencia|The actual receipts|Proof or cap|資料與科學
Understand your daily health.|了解你的每日健康。|Conoce tu salud diaria.|Your health arc, no filter.|Check your stats, chat.|了解你的每日健康。
Explore a different day.|探索不同的一天。|Explora un día diferente.|What if your day went fully off-script?|What if the mission went Ohio?|探索不同的一天。
Build your own health story.|记录自己的健康历程。|Construye tu historial de salud.|Log the lore. Receipts or it didn't happen.|Drop today's stats in the lore log.|記錄自己的健康歷程。
Meet your wearable companion.|认识你的可穿戴伙伴。|Conoce tu dispositivo portátil.|The gadgets understood the assignment.|New loot just dropped.|認識你的可穿戴伙伴。
Care for your whole self.|照顾自己的身心。|Cuida de ti en todos los aspectos.|Normalize taking a breather.|Pause the grind. Restore aura.|照顧自己的身心。
Explore sleep and daily life.|探索睡眠和日常生活。|Explora el sueño y la vida diaria.|The sleep lore is deep.|Nap stats got lore.|探索睡眠和日常生活。
What can the data tell us?|数据能告诉我们什么？|¿Qué nos dicen los datos?|Okay, show me the receipts.|Real data or cap?|資料能告訴我們什麼？
How can a crew notice changes early?|乘员如何及早发现变化？|¿Cómo detecta la tripulación los cambios a tiempo?|How do we catch the plot twist early?|Chat, did the crew stats just change?|乘員如何及早發現變化？
The challenge|挑战|El reto|The plot|Quest unlocked|挑戰
Read a signal|读取信号|Lee una señal|Clock the signal|Scan the stats|讀取信號
Add context|添加背景|Añade contexto|Drop the lore|Add lore|添加背景
Explore a next step|探索下一步|Explora el siguiente paso|What's the move?|Next quest|探索下一步
Research recording|研究记录|Registro de investigación|The original receipts|OG replay|研究記錄
Recording position|播放位置|Posición de reproducción|Scrub the tea|Replay cursor|播放位置
Play recording|播放记录|Reproducir registro|Roll the clip|Replay the lore|播放記錄
Pause|暂停|Pausa|Hold up|Pause the grind|暫停
Heart rate|心率|Frecuencia cardíaca|Heart beat check|Heart stats|心率
Respiratory rate|呼吸频率|Frecuencia respiratoria|Breathing check|Breath stats|呼吸頻率
Oxygen saturation|血氧饱和度|Saturación de oxígeno|Oxygen vibe check|Oxygen meter|血氧飽和度
Pulse rate|脉率|Frecuencia del pulso|Pulse check|Pulse stats|脈率
Mission environment|任务环境|Entorno de misión|Pick the setting|Choose your map|任務環境
Where is the crew?|乘员在哪里？|¿Dónde está la tripulación?|Where's the squad posted?|Where did the squad spawn?|乘員在哪里？
Environment|环境|Entorno|Setting|Map|環境
Spacecraft|飞船|Nave espacial|Spacecraft era|Ship map|飛船
Space station|空间站|Estación espacial|Station era|Station map|空間站
Rover|探测车|Vehículo explorador|Rover era|Rover map|探測車
Base|基地|Base|Base era|Base map|基地
Load example values|载入示例数值|Cargar valores de ejemplo|Load the example arc|Load sample stats|載入示例數值
1. Choose your scenario inputs|1. 选择模拟输入|1. Elige los datos del escenario|1. Set the vibes|1. Pick the stats|1. 選擇模擬輸入
2. Explore the 30-day story|2. 探索 30 天的变化|2. Explora los cambios de 30 días|2. Watch the plot unfold|2. Watch the 30-day lore|2. 探索 30 天的變化
Sleep last night|昨晚睡眠|Sueño de anoche|Last night's zzzs|Nap stat|昨晚睡眠
Systolic blood pressure|收缩压|Presión arterial sistólica|Top BP number|Top BP stat|收縮壓
Diastolic blood pressure|舒张压|Presión arterial diastólica|Bottom BP number|Bottom BP stat|舒張壓
How stressed do you feel?|你感到多大压力？|¿Cuánto estrés sientes?|How cooked are you?|Stress meter check|你感到多大壓力？
Plot measurement|绘图指标|Medición del gráfico|Pick the stat to plot|Pick a stat graph|繪圖指標
Play days|播放每日变化|Reproducir días|Roll the timeline|Run the simulation|播放每日變化
Show advanced model settings|显示高级模型设置|Mostrar ajustes avanzados del modelo|Unlock nerd mode|Unlock dev settings|顯示高級模型設置
How is this index calculated?|如何计算该指数？|¿Cómo se calcula este índice?|Show the math receipts|Math lore drop|如何計算該指數？
Add a daily check-in|添加每日记录|Añadir un registro diario|Clock in for the vibe check|Log your daily stats|添加每日記錄
Date|日期|Fecha|The date|Day stamp|日期
Save check-in|保存记录|Guardar registro|Save the receipts|Save the lore|儲存記錄
Your journal trends|日志趋势|Tendencias de tu diario|Your stats have a plot|Your stat progression|日志趨勢
Export CSV|导出 CSV|Exportar CSV|Export the receipts|Export stats CSV|匯出 CSV
Clear journal|清空日志|Borrar diario|Clear the lore|Wipe the lore log|清空日志
Set a small daily goal|设定一个每日小目标|Fija una pequeña meta diaria|Set a tiny win|Set a daily quest|設定一個每日小目標
Save goals|保存目标|Guardar metas|Lock in those goals|Save the quest|儲存目標
My goals|我的目标|Mis metas|My next wins|My quests|我的目標
Connect heart-rate device|连接心率设备|Conectar dispositivo de pulso|Pair the heart gadget|Equip heart sensor|連接心率設備
Disconnect|断开连接|Desconectar|Unpair the gadget|Unequip device|斷開連接
Daily crew check-in reminder|每日乘员健康提醒|Recordatorio diario de salud de la tripulación|Daily vibe-check ping|Daily stats ping|每日乘員健康提醒
Daily reminder time|每日提醒时间|Hora del recordatorio diario|Ping time|Quest ping time|每日提醒時間
Remind me daily|每天提醒我|Recordarme a diario|Ping me daily|Daily ping, chat|每天提醒我
Save reminder|保存提醒|Guardar recordatorio|Lock in the ping|Save quest ping|儲存提醒
Send test reminder|发送测试提醒|Enviar recordatorio de prueba|Test the ping|Ping check|發送測試提醒
Allow desktop notifications|允许桌面通知|Permitir notificaciones de escritorio|Allow desktop pings|Enable desktop pings|允許桌面通知
Open My journal|打开我的日志|Abrir mi diario|Open the receipts|Open lore log|打開我的日志
Dismiss|关闭|Cerrar|Bye|Skip|關閉
Crew check-in is due|到了健康签到时间|Es hora de registrar tu salud|Time for the daily check-in|Daily quest ready|到了健康簽到時間
Steady|稳定|Estable|Vibes intact|Aura steady|穩定
Keep watch|继续观察|Mantén la vigilancia|Side-eye it|Watch that stat|繼續觀察
Needs attention|需要关注|Requiere atención|This needs a look|Stat needs a look|需要關注
Highest demo concern|演示中最高关注级别|Máxima alerta de la simulación|Demo is cooked|Demo stats cooked|演示中最高關注級別
No score|无评分|Sin puntuación|No score today|Score not unlocked|無評分
Review BP first|先检查血压|Revisa primero la presión arterial|BP check first|BP check first|先檢查血壓
Play a calming sound|播放舒缓声音|Reproduce un sonido relajante|Lo-fi vibes only|Aura sound buff|播放舒緩聲音
Play sound|播放声音|Reproducir sonido|Play the vibes|Activate audio buff|播放聲音
Stop sound|停止播放|Detener sonido|Cut the vibes|Mute the buff|停止播放
Guided movement|引导运动|Movimiento guiado|Little movement break|Movement side quest|引導運動
Start movement|开始运动|Iniciar movimiento|Start the stretch arc|Start movement quest|開始運動
Stop movement|停止运动|Detener movimiento|End the stretch arc|Exit movement quest|停止運動
Physical|身体|Físico|Body check|Body stats|身體
Social|社会|Social|Bestie check|Squad aura|社會
Environmental|环境|Ambiental|Space vibe|Map vibes|環境
Explore small steps|探索小行动|Explora pequeños pasos|Find a tiny win|Open side quests|探索小行動
Download full CSV|下载完整 CSV|Descargar CSV completo|Download all receipts|Download all stats|下載完整 CSV
Look for patterns|寻找模式|Busca patrones|Spot the plot|Spot the stat pattern|尋找模式
See sources, model methods and limitations|查看来源、模型方法和局限|Ver fuentes, métodos y limitaciones|Open the source receipts|Unlock source lore|查看來源、模型方法和局限
Real recordings|真实记录|Registros reales|Actual receipts|Verified stats|真實記錄
Practice scenarios|练习情景|Escenarios de práctica|Practice arcs|Sandbox quests|練習情景
Your journal|你的日志|Tu diario|Your receipts|Your lore log|你的日志
Clear chat|清空聊天|Borrar chat|Clear the tea|Reset NPC chat|清空聊天
Ask about Astro Sensor|询问 Astro Sensor|Pregunta sobre Astro Sensor|Spill your Astro question|Ask the Astro NPC|詢問 Astro Sensor
Team Lead|队长|Líder del equipo|Squad captain|Squad leader|隊長
Placeholder Role|待定角色|Rol por definir|Role TBD|Class not unlocked|待定角色
Start with evidence|从证据开始|Empieza con la evidencia|Receipts first|Proof check|從證據開始
A hands-on health sandbox|动手体验健康模拟|Simulador interactivo de salud|The delulu sandbox|Sandbox mode unlocked|動手體驗健康模擬
Your data, your context|你的数据与背景|Tus datos y tu contexto|Your stats, your lore|Your stats spawn here|你的資料與背景
From skin to signal|从皮肤到信号|De la piel a la señal|Skin-to-signal glow-up|Sensor loot explained|從皮膚到信號
Care for the whole person|关爱完整的自己|Cuida a la persona en su conjunto|Protect your peace|Get your aura back|關愛完整的自己
A plain-language guide|简明指南|Guía en lenguaje sencillo|No jargon, just receipts|Lore without the yap|簡明指南
Another source, clearly labeled|另一个明确标注的数据来源|Otra fuente, claramente identificada|More receipts, different source|Bonus dataset unlocked|另一個明確標注的資料來源
Website guide|网站指南|Guía del sitio|The group chat guide|NPC help desk|網站指南
Replay original research recordings, try a hypothetical scenario, or start a journal with your own measurements.|重播原始研究记录、尝试假设情景，或用自己的测量值开始写日志。|Reproduce registros de investigación, prueba un escenario hipotético o empieza un diario con tus mediciones.|Replay the real receipts, get delulu with a scenario, or log your own lore.|Replay the OG stats, load a what-if quest, or start your lore log.|重播原始研究記錄、嘗試假設情景，或用自己的測量值開始寫日志。
Choose a familiar situation, adjust the health inputs, and watch the timeline, check-in index and next steps change together.|选择一个熟悉的情景，调整健康指标，观察时间线、签到指数和后续建议如何变化。|Elige una situación familiar, ajusta los datos y observa cómo cambian la cronología, el índice y los próximos pasos.|Pick a situation, tweak the vibes, and see how the whole plot changes.|Pick the map, tweak the stats, and watch the timeline get new lore.|選擇一個熟悉的情景，調整健康指標，觀察時間線、簽到指數和後續建議如何變化。
Log measurements and daily context. Review your trends and next steps without uploading your health data.|记录测量值和日常情况。无需上传健康数据，即可查看趋势和下一步建议。|Registra medidas y contexto diario. Revisa tus tendencias y próximos pasos sin subir tus datos de salud.|Drop your daily lore here. Your receipts stay on this device.|Log your stats and check your progress. No cloud side quest.|記錄測量值和日常情況。無需上傳健康資料，即可查看趨勢和下一步建議。
A conceptual wrist device: rotate the model, then click a flashing sensor or an arrow to learn how that signal could be collected.|旋转腕式概念设备模型，然后点击闪烁的传感器或箭头，了解信号如何采集。|Gira el modelo conceptual de muñeca y pulsa un sensor intermitente o una flecha para ver cómo podría captarse la señal.|Spin the wrist gadget then tap a glowing bit for the tea.|Rotate the loot; tap the glowing bit to unlock its lore.|旋轉腕式概念設備模型，然后點擊閃爍的感測器或箭頭，了解信號如何擷取。
The seven dimensions of emotional wellbeing are a whole person experience that extends beyond a single metric or numerical index.|情绪健康的七个维度涵盖整个人的体验，远不止单项指标或数值。|Las siete dimensiones del bienestar emocional abarcan a toda la persona y van más allá de un único indicador o índice.|You're a whole person, bestie. One score does not define the vibes.|Your aura is a whole build, not one stat.|情緒健康的七個維度涵蓋整個人的體驗，遠不止單項指標或數值。
The website uses three kinds of information. Here’s how to tell them apart.|网站使用三类信息。以下是区分它们的方法。|El sitio usa tres tipos de información. Así puedes distinguirlos.|Three kinds of data. Let's sort the actual receipts from the what-ifs.|Three data types. Time for a proof-or-cap check.|網站使用三類信息。以下是區分它們的方法。
Find your way around Astro Sensor. Ask about a feature, then ask a follow-up if you need more detail.|了解 Astro Sensor 的使用方法。可以询问某个功能，并继续提问。|Aprende a usar Astro Sensor. Pregunta por una función y pide más detalles si los necesitas.|Helios has the site lore. Ask for the tea, then ask for more.|NPC Helios knows the map. Ask a question, then unlock more lore.|了解 Astro Sensor 的使用方法。可以詢問某個功能，并繼續提問。
The work behind Astro Sensor.|了解 Astro Sensor 背后的团队。|Conoce al equipo detrás de Astro Sensor.|The squad behind the whole thing.|The squad that cooked this build.|了解 Astro Sensor 背後的團隊。`.split('\n').map(line=>{const [key,...values]=line.split('|');return [key,values]}));

const transIndex={zh:0,es:1,genz:2,alpha:3,zhTraditional:4};
for(const row of detailedCopy){const [key,...values]=row.split('|');uiCopy.set(key,values)}
for(const [key,...values] of extendedCopy)uiCopy.set(key,values);
for(const [photo,...values] of teamBlurbCopy){const member=teamMembers.find(m=>m.photo===photo);if(member)uiCopy.set(member.blurb,values)}
function dynamicCopy(key,lookup){let m;
 const pick=(zh,es,genz,alpha,traditional)=>[zh,es,genz,alpha,traditional][transIndex[uiLanguage]];
 if(m=key.match(/^BIDMC (\d+) · clinical record$/))return pick(`BIDMC ${m[1]} · 临床记录`,`BIDMC ${m[1]} · registro clínico`,`BIDMC ${m[1]} · clinical receipts`,`BIDMC ${m[1]} · clinical replay`,`BIDMC ${m[1]} · 臨床紀錄`);
 if(m=key.match(/^Original clinical data · record (\d+)$/))return pick(`原始临床数据 · 记录 ${m[1]}`,`Datos clínicos originales · registro ${m[1]}`,`Real clinical receipts · ${m[1]}`,`Verified clinical replay · ${m[1]}`,`原始臨床資料 · 紀錄 ${m[1]}`);
 if(m=key.match(/^Profile (\d+) · ([\d.]+)h sleep · stress (\d+)\/10$/))return pick(`资料 ${m[1]} · 睡眠 ${m[2]} 小时 · 压力 ${m[3]}/10`,`Perfil ${m[1]} · ${m[2]} h de sueño · estrés ${m[3]}/10`,`Receipts ${m[1]} · ${m[2]}h of zzzs · stress ${m[3]}/10`,`Profile ${m[1]} · nap ${m[2]}h · stress stat ${m[3]}/10`,`資料 ${m[1]} · 睡眠 ${m[2]} 小時 · 壓力 ${m[3]}/10`);
 if(m=key.match(/^Day (\d+)(: [\d.]+)? · (.+)$/))return pick(`第 ${m[1]} 天`,`Día ${m[1]}`,`Day ${m[1]}`,`Checkpoint ${m[1]}`,`第 ${m[1]} 天`)+(m[2]||'')+' · '+(lookup(m[3])||m[3]);
 if(m=key.match(/^Viewing day (\d+) of (\d+)$/))return pick(`查看第 ${m[1]} 天，共 ${m[2]} 天`,`Día ${m[1]} de ${m[2]}`,`Timeline day ${m[1]} of ${m[2]}`,`Checkpoint ${m[1]} of ${m[2]}`,`查看第 ${m[1]} 天，共 ${m[2]} 天`);
 if(m=key.match(/^Model trained on (\d+) complete observations from record (\d+); first 240 seconds only\. Other half remains outside training\.$/))return pick(`使用记录 ${m[2]} 前 240 秒中的 ${m[1]} 条完整观测训练。后半段不参与训练。`,`Modelo entrenado con ${m[1]} observaciones completas de los primeros 240 segundos del registro ${m[2]}. La otra mitad queda fuera.`,`Training got ${m[1]} complete receipts from record ${m[2]}, first 240 seconds only. The other half stays out.`,`Training used ${m[1]} complete stats from replay ${m[2]}, first 240 seconds. Second half stays held out.`,`使用紀錄 ${m[2]} 前 240 秒中的 ${m[1]} 筆完整觀測訓練。後半段不參與訓練。`);
 if(m=key.match(/^ML anomaly score: ([\d.]+|—)\./))return pick(`模型异常分数：${m[1]}。越低越接近训练参考，并不代表更健康。指数不能排除健康问题。`,`Anomalía del modelo: ${m[1]}. Un valor menor se parece más a la referencia; no indica mejor salud ni descarta problemas.`,`Anomaly score: ${m[1]}. Lower means familiar, not healthier. Not a health clearance.`,`Anomaly stat: ${m[1]}. Low = closer to baseline, not a health buff. It can't rule out issues.`,`模型異常分數：${m[1]}。越低越接近訓練參考，並不代表更健康。指數無法排除健康問題。`);
 if(m=key.match(/^([\d.]+)h sleep · You got this!$/))return pick(`睡眠 ${m[1]} 小时 · 加油！`,`Sueño: ${m[1]} h · ¡Tú puedes!`,`${m[1]}h of zzzs · you got this!`,`${m[1]}h nap goal · quest ready!`,`睡眠 ${m[1]} 小時 · 加油！`);
 if(m=key.match(/^([●◆▲■○]) (.+)$/)){const t=lookup(m[2]);if(t)return m[1]+' '+t}
 if(m=key.match(/^(.+?) · (.+?)\.(?: (.+))?$/)){const a=lookup(m[1]),b=lookup(m[2]),c=m[3]&&lookup(m[3]);if(a&&b&&(!m[3]||c))return a+' · '+b+'.'+(c?' '+c:'')}
}
const heliosTranslations=new Map(heliosCopy.map(row=>{const [key,...values]=row.split('|');return [key,values]}));
const heliosQueries=[[/蓝牙|藍牙|配对|配對|conectar|emparejar|bluetooth/i,'bluetooth'],[/提醒|recordatorio/i,'reminder'],[/保存|儲存|隐私|隱私|privacidad|guard[ao]/i,'privacy'],[/范围|範圍|rango/i,'range'],[/目标|目標|meta/i,'goals'],[/来源|來源|数据集|資料集|conjunto de datos|sintétic/i,'sources'],[/睡眠|sueño/i,'kaggle'],[/评分|評分|分数|分數|puntuaci[oó]n/i,'score'],[/情景|模拟|模擬|escenario|simulador/i,'scenario'],[/日志|日誌|diario|medici[oó]n/i,'journal'],[/运动|運動|ejercicio/i,'movement'],[/声音|聲音|sonido/i,'sound'],[/语言|語言|外观|外觀|idioma|apariencia/i,'appearance']];
function localizedHelios(question){if(uiLanguage==='en')return Helios.answer(question);const concern=/胸痛|呼吸困難|呼吸困难|急救|dolor de pecho|emergencia|falta de aire/i.test(question);if(concern)return Helios.answer('chest pain');const shortcut=heliosQueries.find(([re])=>re.test(question))?.[1];if(shortcut==='reminder')return {text:'Set a daily check-in time in Devices.',page:'wearable',id:'reminder'};return shortcut?Helios.topic(shortcut):Helios.answer(question)}
function heliosText(message){return heliosTranslations.get(message.id)?.[transIndex[uiLanguage]]||uiTranslate(message.text)}
const translatedNodes=new WeakMap();
function uiTranslate(text){const key=text.trim();const lookup=key=>uiCopy.get(key)?.[transIndex[uiLanguage]];const direct=lookup(key);if(direct)return text.replace(key,direct);const dynamic=dynamicCopy(key,lookup);if(dynamic)return text.replace(key,dynamic);const open=key.match(/^Open (.+?)(\s*→)?$/);if(open&&lookup(open[1]))return text.replace(key,({zh:'打开 ',zhTraditional:'開啟 ',es:'Abrir ',genz:'Open ',alpha:'Unlock '})[uiLanguage]+lookup(open[1])+(open[2]||''));const tail=key.match(/^([●◆▲■○]\s*)?(.+?)(\s*(?:→|↗|·\s*\d.*|\(.*\)|:\s*\d.*))$/);const label=tail&&lookup(tail[2]);return label?text.replace(key,(tail[1]||'')+label+tail[3]):text}
const translatedAttributes=new WeakMap();
function applyLanguage(){document.documentElement.lang=languages[uiLanguage][1];const roots=[qs('#app'),qs('#crew-reminder-banner')].filter(Boolean);for(const root of roots){const walk=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while(node=walk.nextNode()){const el=node.parentElement;if(el.closest('#language-menu,script,style,textarea,[contenteditable],.pulse-user p,[data-user-text]')||!node.data.trim())continue;const previous=translatedNodes.get(node),source=previous?.result===node.data?previous.source:node.data;let result=uiLanguage==='en'?source:uiTranslate(source);if(el.dataset.heliosIndex!==undefined){const message=pulseMessages[Number(el.dataset.heliosIndex)];if(message?.role==='Helios')result=heliosText(message)}if(result!==node.data){translatedNodes.set(node,{source,result});node.data=result}}for(const el of root.querySelectorAll('[aria-label],[title],[placeholder],[alt]')){if(el.closest('#language-menu,[data-user-text]'))continue;let attrs=translatedAttributes.get(el);if(!attrs)translatedAttributes.set(el,attrs={});for(const name of ['aria-label','title','placeholder','alt']){if(!el.hasAttribute(name))continue;const value=el.getAttribute(name),prior=attrs[name],source=prior?.result===value?prior.source:value,result=uiTranslate(source);if(result!==value){attrs[name]={source,result};el.setAttribute(name,result)}}}}}
const beforeLanguage=render;render=function(){beforeLanguage();qs('.appearance-menu').insertAdjacentHTML('afterend',`<details class="appearance-menu" id="language-menu"><summary>${uiTranslate('Language')}</summary><div><label class="control">${uiTranslate('Language')}<select id="site-language">${Object.entries(languages).map(([id,[label,lang]])=>`<option lang="${lang}" value="${id}" ${id===uiLanguage?'selected':''}>${label}</option>`).join('')}</select></label><small>${uiTranslate("Interface text follows your selection. Names, entered text and source data stay unchanged.")}</small></div></details>`);qs('#site-language').onchange=e=>{uiLanguage=e.target.value;try{localStorage.setItem('astro-language',uiLanguage)}catch{}const menu=qs('#language-menu');menu.querySelector('summary').textContent=uiTranslate('Language');menu.querySelector('label').firstChild.data=uiTranslate('Language');menu.querySelector('small').textContent=uiTranslate('Interface text follows your selection. Names, entered text and source data stay unchanged.');applyLanguage()};applyLanguage()};
render();
new MutationObserver(()=>applyLanguage()).observe(document.body,{childList:true,characterData:true,subtree:true});
