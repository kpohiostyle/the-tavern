(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d55c07de"],{"1cb5":function(t,e,c){"use strict";c("c5b1")},c5b1:function(t,e,c){},e542:function(t,e,c){"use strict";c.r(e);var a=c("7a23");const s=Object(a["I"])("data-v-30e1b940");Object(a["v"])("data-v-30e1b940");const r={class:"account container-fluid"},b={class:"row justify-content-center"},n={class:"col-md-8 d-md-block d-none p-md-5"},i={key:0,class:"row justify-content-between shadow bg-light text-center m-3 p-md-5 p-4"},d={key:1,class:"row justify-content-between shadow bg-light text-center m-3 p-md-5 p-4"},o=Object(a["i"])("div",{class:"col-12"},[Object(a["i"])("h1",{class:" text-center"}," Please select a Character for more details ")],-1),j={class:"col-md-4 col-12 bg-primary sidebar p-md-5 pt-md-5"},O={key:0,class:"shadow bg-light text-center m-md-3 mx-1 my-3 p-md-5 p-3"},l=Object(a["i"])("h2",null,[Object(a["i"])("u",null,"Your Characters")],-1);Object(a["t"])();const u=s((t,e,c,s,u,h)=>{const p=Object(a["z"])("ActiveCharacter"),m=Object(a["z"])("CharacterListComponent");return Object(a["s"])(),Object(a["e"])("div",r,[Object(a["i"])("div",b,[Object(a["i"])("div",n,[s.state.activeCharacter.job?(Object(a["s"])(),Object(a["e"])("div",i,[Object(a["i"])(p)])):(Object(a["s"])(),Object(a["e"])("div",d,[o]))]),Object(a["i"])("div",j,[s.state.user.isAuthenticated&&s.state.characters?(Object(a["s"])(),Object(a["e"])("div",O,[l,(Object(a["s"])(!0),Object(a["e"])(a["a"],null,Object(a["y"])(s.state.characters,t=>(Object(a["s"])(),Object(a["e"])(m,{key:t.id,character:t},null,8,["character"]))),128))])):Object(a["f"])("",!0)])])])});var h=c("83fc"),p=c("da15"),m={name:"Account",setup(){const t=Object(a["w"])({user:Object(a["c"])(()=>h["a"].user),characters:Object(a["c"])(()=>h["a"].characters),activeCharacter:Object(a["c"])(()=>h["a"].activeCharacter),account:Object(a["c"])(()=>h["a"].account),AppState:Object(a["c"])(()=>h["a"])});return Object(a["q"])(async()=>{await p["a"].getCharacters(t.account.id)}),{state:t}}};c("1cb5");m.render=u,m.__scopeId="data-v-30e1b940";e["default"]=m}}]);