(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[514],{3203:function(e,t,a){"use strict";var n=a(4836);t.Z=void 0;var o=n(a(4938)),i=a(5893),r=(0,o.default)((0,i.jsx)("path",{d:"M16 11h-1V3c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8H8c-2.76 0-5 2.24-5 5v7h18v-7c0-2.76-2.24-5-5-5zm3 10h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3h-2v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H9v-3c0-.55-.45-1-1-1s-1 .45-1 1v3H5v-5c0-1.65 1.35-3 3-3h8c1.65 0 3 1.35 3 3v5z"}),"CleaningServices");t.Z=r},1899:function(e,t,a){"use strict";var n=a(4836);t.Z=void 0;var o=n(a(4938)),i=a(5893),r=(0,o.default)((0,i.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}),"ContentCopy");t.Z=r},940:function(e,t,a){"use strict";var n=a(4836);t.Z=void 0;var o=n(a(4938)),i=a(5893),r=(0,o.default)((0,i.jsx)("path",{d:"M15.55 5.55 11 1v3.07C7.06 4.56 4 7.92 4 12s3.05 7.44 7 7.93v-2.02c-2.84-.48-5-2.94-5-5.91s2.16-5.43 5-5.91V10l4.55-4.45zM19.93 11c-.17-1.39-.72-2.73-1.62-3.89l-1.42 1.42c.54.75.88 1.6 1.02 2.47h2.02zM13 17.9v2.02c1.39-.17 2.74-.71 3.9-1.61l-1.44-1.44c-.75.54-1.59.89-2.46 1.03zm3.89-2.42 1.42 1.41c.9-1.16 1.45-2.5 1.62-3.89h-2.02c-.14.87-.48 1.72-1.02 2.48z"}),"RotateRight");t.Z=r},6654:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cliente/linkAutoCadastro",function(){return a(7906)}])},6136:function(e,t,a){"use strict";var n=a(3870);t.Z=class{static async consultarPorId(e){return e}static async consultarPorCpf(e){try{let t=await n.Z.get("/cliente/cpf/".concat(e)),{dados:a}=t?t.data:[];return{dados:a}}catch(e){return console.log(e),{error:!0,mensagem:e.message}}}static async cadastrarTemporario(e){try{let t=await n.Z.post("/cliente/temp",e),{dados:a}=t.data;return{idCadastrado:a?a[0].insertId:null}}catch(e){return console.log(e),{error:!0,mensagem:e.message}}}static async alterarTemporario(e){try{let t=await n.Z.put("/cliente/temp",e),{dados:a}=t.data;return{registrosAlterados:a?a[0].affectedRows:0}}catch(e){return console.log(e),{error:!0,mensagem:e.message}}}constructor(){}}},3870:function(e,t,a){"use strict";var n=a(6154);let o=n.Z.create({baseURL:"https://us-central1-mldogs-backend.cloudfunctions.net/app",timeout:1e4});t.Z=o},402:function(e,t,a){"use strict";a.d(t,{X:function(){return l}});var n=a(5893),o=a(5861),i=a(5675),r=a.n(i),c=a(3319),s=a.n(c);let l=()=>(0,n.jsxs)("div",{className:s().main,children:[(0,n.jsx)(r(),{src:"/logodoguinho.png",width:50,height:60,alt:"Logo oficial Marcela Love Dogs",quality:80,sizes:"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",className:s().imagem}),(0,n.jsx)(o.Z,{className:s().titulo,children:"Escola Pet Marcela Love Dogs"})]})},7355:function(e,t,a){"use strict";var n=a(8949);let o=new class{ativarMensagem(e){let{texto:t,tipoAlerta:a}=e;this.estadoJanela=!0,this.textoMensagem=t,this.tipoAlerta=a}fecharMensagem(){this.estadoJanela=!1}fecharModal(){this.estadoModal=!1}abriModal(){this.estadoModal=!0}constructor(){this.estadoJanela=!1,this.textoMensagem="",this.tipoAlerta="info",this.estadoModal=!1,(0,n.ky)(this)}};t.Z=o},7906:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return M}});var n=a(5893),o=a(3683),i=a.n(o),r=a(1903),c=a(3321),s=a(7294);let l=e=>e.replace(/\D/g,"").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d)/,"$1.$2").replace(/(\d{3})(\d{1,2})/,"$1-$2").replace(/(-\d{2})\d+?$/,"$1");var d=a(6247),u=a(4851),m=a(7355),h=a(3235),p=a(6136),v=a(940),f=a(3203),_=a(5861),g=a(1899),x=a(7283),C=a.n(x);let Z=e=>{let{cpf:t,id:a}=e,o=Number(a);if(!t||!o)return"N\xe3o foi poss\xedvel gerar o link, tente novamente.";let i=window.location.origin||"https://mldogs-d4878.web.app",r="".concat(i,"/cliente/temp/").concat(o,"/").concat(t),s=()=>(navigator.clipboard.writeText(r),m.Z.ativarMensagem({texto:"Link copiado!",tipoAlerta:"info"}));return(0,n.jsxs)("div",{className:C().containerLinkCliente,children:[(0,n.jsx)(_.Z,{children:r}),(0,n.jsx)(c.Z,{startIcon:(0,n.jsx)(g.Z,{}),onClick:s,children:"Copiar Link"})]})};var j=a(9195),P=a(402),M=(0,u.Pi)(function(){let[e,t]=(0,s.useState)(""),[a,o]=(0,s.useState)(""),[u,_]=(0,s.useState)(!1),[g,x]=(0,s.useState)(null),[C,M]=(0,s.useState)(""),w=()=>{t(""),o(""),M(""),x(!1)},A="",N=async()=>{if(!e.length||!a.length)return m.Z.ativarMensagem({texto:"Preencha todos os campos",tipoAlerta:"atencao"});if(!(0,d.G)(e))return m.Z.ativarMensagem({texto:"CPF inv\xe1lido",tipoAlerta:"atencao"});_(!0);let{dados:t,error:n,mensagem:o}=await p.Z.consultarPorCpf(e);if(_(!1),n)return m.Z.ativarMensagem({texto:o,tipoAlerta:"error"});if(t&&t.length){let e="J\xe1 existe um cliente cadastrado para este CPF: ".concat(t[0].nome_dono);return A=e,m.Z.ativarMensagem({texto:e,tipoAlerta:"info"})}let{error:i,idCadastrado:r,mensagem:c}=await p.Z.cadastrarTemporario({nome_dono:a,cpf:e});return i||!r?m.Z.ativarMensagem({texto:c||"Ocorreu um erro no cadastro do cliente",tipoAlerta:"error"}):(M(r),x(!0),m.Z.ativarMensagem({texto:"Cliente cadastrado com sucesso - ID ".concat(r),tipoAlerta:"sucesso"}))};return A=(0,d.G)(e)||14!==e.length?"":"CPF inv\xe1lido",(0,n.jsxs)("div",{className:i().main,children:[(0,n.jsx)(P.X,{}),(0,n.jsx)(j.n,{titulo:"Pr\xe9 cadastro do cliente"}),(0,n.jsxs)("div",{className:i().inputCpf,children:[(0,n.jsx)("div",{className:i().containerCpf,children:(0,n.jsx)(r.Z,{fullWidth:!0,error:Boolean(A),id:"input-cpf-pre-cadastro",label:"CPF",placeholder:"CPF do cliente",variant:"outlined",value:e,onChange:e=>t(l(e.target.value)),helperText:A})}),(0,n.jsx)("div",{children:(0,n.jsx)(r.Z,{className:i().campoNome,id:"input-nome-cliente",label:"Nome",placeholder:"Nome do cliente",variant:"outlined",value:a,onChange:e=>o(e.target.value)})})]}),(0,n.jsxs)("div",{className:i().containerAcao,children:[(0,n.jsx)(c.Z,{variant:"contained",onClick:N,disabled:u,startIcon:u&&(0,n.jsx)(v.Z,{}),children:u?"Executando...":"Cadastrar"}),(0,n.jsx)(c.Z,{variant:"outlined",onClick:w,disabled:u,startIcon:u?(0,n.jsx)(v.Z,{}):(0,n.jsx)(f.Z,{}),children:u?"Executando...":"Limpar"})]}),(0,n.jsx)("div",{className:i().containerLink,children:g&&(0,n.jsx)(Z,{cpf:e,id:C})}),(0,n.jsx)(h.k,{})]})})},3235:function(e,t,a){"use strict";a.d(t,{k:function(){return p}});var n=a(5893),o=a(4851),i=a(7355),r=a(8703),c=a(8037),s=a(9572),l=a(4017),d=a(4721);let u={info:(0,n.jsx)(d.Z,{fontSize:"medium",color:"#fff"}),error:(0,n.jsx)(s.Z,{fontSize:"medium",color:"#fff"}),atencao:(0,n.jsx)(l.Z,{fontSize:"medium",color:"warning"}),sucesso:(0,n.jsx)(c.Z,{fontSize:"medium",color:"#fff"})};var m=a(2450);let h={info:"primary",error:"danger",atencao:"warning",sucesso:"success"},p=(0,o.Pi)(()=>(0,n.jsx)("div",{children:(0,n.jsx)(r.Z,{anchorOrigin:{vertical:"top",horizontal:"center"},open:i.Z.estadoJanela,onClose:()=>i.Z.fecharMensagem(),autoHideDuration:8e3,children:(0,n.jsxs)(m.Z,{color:h[i.Z.tipoAlerta],size:"sm",variant:"solid",children:[i.Z.textoMensagem,u[i.Z.tipoAlerta]||u.info]})},i.Z.textoMensagem)}))},9195:function(e,t,a){"use strict";a.d(t,{n:function(){return c}});var n=a(5893),o=a(5305),i=a.n(o),r=a(5861);let c=e=>{let{titulo:t,estiloCustomizado:a}=e;return(0,n.jsx)("div",{className:a||i().containerTitulo,children:(0,n.jsx)(r.Z,{style:{fontWeight:"bold"},children:t})})}},3319:function(e){e.exports={main:"Cabecalho_main__hgjEf",imagem:"Cabecalho_imagem__9sJoG",titulo:"Cabecalho_titulo__AaceH"}},7283:function(e){e.exports={containerLinkCliente:"Cliente_containerLinkCliente__tYFWH"}},3683:function(e){e.exports={main:"PageCliente_main__FLh8_",inputCpf:"PageCliente_inputCpf__7dKz_",containerCpf:"PageCliente_containerCpf__168v4",containerAcao:"PageCliente_containerAcao__QLwZk",containerLink:"PageCliente_containerLink__v1F7e",containerCamposCliente:"PageCliente_containerCamposCliente__cJ1sf",containerAcordion:"PageCliente_containerAcordion__At5_m",containerAcordionCao:"PageCliente_containerAcordionCao__2hy2R",margem10:"PageCliente_margem10__p52Sp",containerBtnEnviar:"PageCliente_containerBtnEnviar___bY3c",campoNome:"PageCliente_campoNome__rzir7"}},5305:function(e){e.exports={conteudoMsg:"Comuns_conteudoMsg__5w0TX",containerData:"Comuns_containerData__pRBUl",containerTitulo:"Comuns_containerTitulo__d0AS_",containerProcessando:"Comuns_containerProcessando__PljRU"}}},function(e){e.O(0,[461,304,780,774,888,179],function(){return e(e.s=6654)}),_N_E=e.O()}]);