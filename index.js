import{S as c,i as m}from"./assets/vendor-BrddEoy-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const u={key:"49592968-cbe332f50941125abd5725851",image_type:"photo",orientation:"horizontal",safesearch:!0};function d(e){const t=new URLSearchParams(u);t.append("q",e);const o=`https://pixabay.com/api/?${t}`;return console.log("Request url is",o),fetch(o).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>s.hits)}function p(e){e.innerHTML=""}function f(e,t){const o=t.map(s=>g(s)).join("");console.log(`Markup is ${o}`),e.insertAdjacentHTML("beforeend",o)}function g(e){return`
        <li class="gallery-item">
            <a href="${e.largeImageURL}">
              <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
              <ul class="image-metadata-list">
                  <li class="image-metadata-item">
                      <p class="image-metadata-item-title">Likes</p>
                      <p class="image-metadata-item-value">${e.likes}</p>
                  </li>
                  <li class="image-metadata-item">
                      <p class="image-metadata-item-title">Views</p>
                      <p class="image-metadata-item-value">${e.views}</p>
                  </li>
                  <li class="image-metadata-item">
                      <p class="image-metadata-item-title">Comments</p>
                      <p class="image-metadata-item-value">${e.comments}</p>
                  </li>
                  <li class="image-metadata-item">
                      <p class="image-metadata-item-title">Downloads</p>
                      <p class="image-metadata-item-value">${e.downloads}</p>
                  </li>
              </ul>
            </a>
        </li>
    `}document.querySelector("input[name=search]");document.querySelector(".search-form button");const h=document.querySelector(".search-form"),n=document.querySelector(".gallery");h.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.search.value.trim();t!==""&&b(t)});const y=new c(".gallery a",{disableScroll:!1,captionsData:"alt",captionDelay:250,captionPosition:"bottom"});function b(e){p(n),d(e).then(t=>{if(t.length===0){l("Sorry, there are no images matching your search query. Please try again!");return}console.log(t),f(n,t),y.refresh()}).catch(t=>{l(t)})}function l(e){m.show({message:e,messageColor:"white",position:"topRight",backgroundColor:"#ef4040"})}
//# sourceMappingURL=index.js.map
