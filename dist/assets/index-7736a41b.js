import"./@angular/compiler-aa3f70e4.js";import"./zone.js-481687d7.js";import{b as d}from"./@angular/platform-browser-ddee6511.js";import{aQ as h,bh as g}from"./@angular/core-8a6e0b1f.js";import{C as y}from"./@angular/common-847369d3.js";import{R as _,a as v,p as O}from"./@angular/router-09c95309.js";import"./rxjs-01de3619.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();var P=Object.defineProperty,C=Object.getOwnPropertyDescriptor,b=(n,o,s,i)=>{for(var e=i>1?void 0:i?C(o,s):o,t=n.length-1,r;t>=0;t--)(r=n[t])&&(e=(i?r(o,s,e):r(e))||e);return i&&e&&P(o,s,e),e};let u=class{constructor(){}ngOnInit(){}};u=b([h({selector:"app-root",standalone:!0,imports:[y,_,v],templateUrl:"./app.component.html",styles:[`
      :host {
        display: block;
      }
    `],changeDetection:g.OnPush})],u);const L="modulepreload",R=function(n){return"/"+n},p={},m=function(o,s,i){if(!s||s.length===0)return o();const e=document.getElementsByTagName("link");return Promise.all(s.map(t=>{if(t=R(t),t in p)return;p[t]=!0;const r=t.endsWith(".css"),f=r?'[rel="stylesheet"]':"";if(!!i)for(let c=e.length-1;c>=0;c--){const a=e[c];if(a.href===t&&(!r||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${f}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":L,r||(l.as="script",l.crossOrigin=""),l.href=t,document.head.appendChild(l),r)return new Promise((c,a)=>{l.addEventListener("load",c),l.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>o())},E=[{path:"",loadComponent:()=>m(()=>import("./home.component-7551a54b.js"),["assets/home.component-7551a54b.js","assets/@angular/core-8a6e0b1f.js","assets/rxjs-01de3619.js","assets/@angular/common-847369d3.js"]).then(n=>n.HomeComponent)},{path:"about-us",loadComponent:()=>m(()=>import("./about-us.component-2e3d2800.js"),["assets/about-us.component-2e3d2800.js","assets/@angular/core-8a6e0b1f.js","assets/rxjs-01de3619.js","assets/@angular/common-847369d3.js"]).then(n=>n.AboutUsComponent)}],A=[O(E)];d(u,{providers:[...A]});
