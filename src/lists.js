export default function listElements() {
  const listContainer = document.createElement('ul');
  listContainer.classList.add('recent-scores-list');
  listContainer.innerHTML = `
  <li class="scores flex flex-jc-sb flex-ai-c">
  <span> name: </span>
  <span> 100 </span>
</li>

<li class="scores flex flex-jc-sb flex-ai-c">
  <span> name: </span>
  <span> 100 </span>
</li>

<li class="scores flex flex-jc-sb flex-ai-c">
  <span> name: </span>
  <span> 100 </span>
</li>

<li class="scores flex flex-jc-sb flex-ai-c">
  <span> name: </span>
  <span> 100 </span>
</li>

<li class="scores flex flex-jc-sb flex-ai-c">
  <span> name: </span>
  <span> 100 </span>
</li>

<li class="scores flex flex-jc-sb flex-ai-c">
  <span> name: </span>
  <span> 100 </span>
</li>

<li class="scores flex flex-jc-sb flex-ai-c">
  <span> name: </span>
  <span> 100 </span>
</li>

<li class="scores flex flex-jc-sb flex-ai-c">
  <span> name: </span>
  <span> 100 </span>
</li>

<li class="scores flex flex-jc-sb flex-ai-c">
  <span> name: </span>
  <span> 100 </span>
</li>

<li class="scores flex flex-jc-sb flex-ai-c">
  <span> name: </span>
  <span> 100 </span>
</li>

<li class="scores flex flex-jc-sb flex-ai-c">
  <span> name: </span>
  <span> 100 </span>
</li>
  `;
  return listContainer;
}