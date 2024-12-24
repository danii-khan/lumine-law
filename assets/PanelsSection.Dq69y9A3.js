import{j as e,B as n,V as x,I as m,T as g}from"./index.BPFYR4T7.js";const s=({images:t,direction:a,speed:o})=>{const p=[...t,...t,...t,...t];return e.jsx(n,{className:"scroll-row",position:"relative",width:"100%",height:"100px",overflow:"hidden",whiteSpace:"nowrap",onMouseEnter:l=>{l.currentTarget.querySelector(".scroll-content").style.animationPlayState="paused"},onMouseLeave:l=>{l.currentTarget.querySelector(".scroll-content").style.animationPlayState="running"},display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(n,{className:"scroll-content",position:"absolute",display:"flex",alignItems:"center",animation:`scroll${a==="left"?"Left":"Right"} ${o}s linear infinite`,style:a==="right"?{left:100}:{left:0},children:p.map((l,c)=>e.jsx(n,{px:"4",display:"flex",alignItems:"center",justifyContent:"center",maxWidth:{xs:"80px",sm:"80px",md:"100px",lg:"125px",xl:"125px","2xl":"175px"},children:e.jsx(m,{src:l,alt:"Lumine Solicitors Panels",height:{xs:"25px",sm:"25px",md:"30px",lg:"40px",xl:"50px","2xl":"60px"},maxWidth:{xs:"80px",sm:"80px",md:"100px",lg:"125px",xl:"125px","2xl":"175px"},objectFit:"contain",loading:"lazy"})},c))})})},d=({images:t})=>e.jsxs(n,{height:{xs:"20%",sm:"20%",md:"25%",lg:"30%",xl:"32.5%","2xl":"35%"},width:"100%",position:"relative",alignSelf:"center",borderRadius:"8px",children:[e.jsx(n,{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(243, 239, 239, 0.53)",opacity:.75,borderRadius:"inherit"}),e.jsxs(x,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",position:"relative",zIndex:1,children:[e.jsx(s,{images:t,direction:"left",speed:50}),e.jsx(s,{images:t,direction:"right",speed:45}),e.jsx(s,{images:t,direction:"left",speed:30})]})]}),r=document.createElement("style");r.textContent=`
  @keyframes scrollLeft {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  @keyframes scrollRight {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
  
  .scroll-row .scroll-content {
    animation-play-state: running;
    will-change: transform;
  }

  .scroll-row {
    -webkit-mask-image: linear-gradient(
      to right,
      transparent 0%,
      black 5%,
      black 95%,
      transparent 100%
    );
  }
`;document.head.appendChild(r);const u="/lumine-law/assets/panels.CamS1qgG.webp",h="/lumine-law/assets/panel-barclays.CREjPO6F.png",f="/lumine-law/assets/panel-santander.8zsaIps6.png",i="/lumine-law/assets/panel-natwest.DEPCRZNC.png",w="/lumine-law/assets/panel-tsb.B-mP1ghG.png",y="/lumine-law/assets/panel-hsbc.D0PIjKXL.png",j="/lumine-law/assets/panel-pm.DEcNxr-f.png",P="/lumine-law/assets/panel-poi.B6QcOBWe.png",b="/lumine-law/assets/panel-clydesdale.BWudo8SF.png",S="/lumine-law/assets/panel-yorkshire.CWmcjsQ9.png",v="/lumine-law/assets/panel-darlington.B7U5Mx72.png",C="/lumine-law/assets/panel-ipswich.DB6eeCUM.png",k=()=>e.jsxs(n,{width:"100%",height:"100%",p:0,m:0,pt:"7.5%",display:"flex",flexDir:"column",alignItems:"flex-start",justifyContent:"center",gap:"25px",bgImage:`url(${u})`,bgPos:"center",bgSize:"cover",bgRepeat:"no-repeat",_loading:"lazy",children:[e.jsxs(g,{color:"white",fontSize:{xs:"12px",sm:"14px",md:"15px",lg:"16px",xl:"18px","2xl":"20px"},fontWeight:300,fontFamily:"HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",ml:{xs:"2.5%",sm:"5%",md:"7.5%",lg:"10%","2xl":"12.5%"},children:["A small intro about what our team is like, diverse etc. just a few lines."," "]}),e.jsx(d,{images:[h,f,i,w,y,j,P,b,S,v,C,i]})]});export{k as default};
