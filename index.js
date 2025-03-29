(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const n={key:"49592968-cbe332f50941125abd5725851",image_type:"photo",orientation:"horizontal",safesearch:!0};function c(e){const t=new URLSearchParams(n);t.append("q",e);const o=`https://pixabay.com/api/?${t}`;return console.log("Request url is",o),fetch(o).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()}).then(s=>s.hits)}function m(e){e.innerHTML=""}function u(e,t){const o=t.map(s=>d(s)).join("");console.log(`Markup is ${o}`),e.insertAdjacentHTML("beforeend",o)}function d(e){return`
        <li class="gallery-item">
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
        </li>
    `}document.querySelector("input[name=search]");document.querySelector(".search-form button");const p=document.querySelector(".search-form"),l=document.querySelector(".gallery");p.addEventListener("submit",e=>{e.preventDefault();const t=e.currentTarget.elements.search.value.trim();t!==""&&f(t)});function f(e){m(l),c(e).then(t=>{if(t.length===0){console.log("No images found");return}console.log(t),u(l,t)}).catch(t=>{console.log(t)})}
//# sourceMappingURL=index.js.map
