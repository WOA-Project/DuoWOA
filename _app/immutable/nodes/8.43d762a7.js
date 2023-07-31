import{S as wt,i as Et,s as St,k as r,q as d,a as m,y as Pt,l as s,m as a,r as n,h as o,c as u,z as Wt,n as _,b as i,P as t,A as Lt,g as Dt,d as It,B as kt,a4 as Mt}from"../chunks/index.34b7596d.js";/* empty css                                                      *//* empty css                                                             */import{I as At}from"../chunks/InfoBar.82ada07f.js";function Rt(Qe){let p,U,b,w,$,E,S,F,D,v,B,I,h,P,k,y,X;return{c(){p=r("li"),U=d("Don't create partitions from Mass Storage Mode on Windows (because ABL will break with blank/spaces in names), your phone may be irrecoverable otherwise"),b=m(),w=r("li"),$=d("If you see a warning and/or error during the process, it is not normal. Contact us on telegram if you see anything odd, but do not continue or proceed on your own, you will break things further."),E=m(),S=r("li"),F=d("Do not run all commands at once."),D=m(),v=r("li"),B=d("Do not commit *any* typo with *any* commands. Parted is a very *delicate* tool, anything you do may cause permanent damage to your device."),I=m(),h=r("li"),P=d("Be familiar with command line interfaces. Parted is a very *delicate* tool, anything you do may cause permanent damage to your device."),k=m(),y=r("li"),X=d("When using TWRP, it is normal and expected for the phone to be detected as a Xiaomi phone and for touch to not work.")},l(f){p=s(f,"LI",{});var c=a(p);U=n(c,"Don't create partitions from Mass Storage Mode on Windows (because ABL will break with blank/spaces in names), your phone may be irrecoverable otherwise"),c.forEach(o),b=u(f),w=s(f,"LI",{});var Q=a(w);$=n(Q,"If you see a warning and/or error during the process, it is not normal. Contact us on telegram if you see anything odd, but do not continue or proceed on your own, you will break things further."),Q.forEach(o),E=u(f),S=s(f,"LI",{});var W=a(S);F=n(W,"Do not run all commands at once."),W.forEach(o),D=u(f),v=s(f,"LI",{});var V=a(v);B=n(V,"Do not commit *any* typo with *any* commands. Parted is a very *delicate* tool, anything you do may cause permanent damage to your device."),V.forEach(o),I=u(f),h=s(f,"LI",{});var Z=a(h);P=n(Z,"Be familiar with command line interfaces. Parted is a very *delicate* tool, anything you do may cause permanent damage to your device."),Z.forEach(o),k=u(f),y=s(f,"LI",{});var M=a(y);X=n(M,"When using TWRP, it is normal and expected for the phone to be detected as a Xiaomi phone and for touch to not work."),M.forEach(o)},m(f,c){i(f,p,c),t(p,U),i(f,b,c),i(f,w,c),t(w,$),i(f,E,c),i(f,S,c),t(S,F),i(f,D,c),i(f,v,c),t(v,B),i(f,I,c),i(f,h,c),t(h,P),i(f,k,c),i(f,y,c),t(y,X)},p:Mt,d(f){f&&o(p),f&&o(b),f&&o(w),f&&o(E),f&&o(S),f&&o(D),f&&o(v),f&&o(I),f&&o(h),f&&o(k),f&&o(y)}}}function Tt(Qe){let p,U,b,w,$,E,S,F,D,v,B,I,h,P,k,y,X,f,c,Q,W,V,Z,M,Ve,De,A,Ie,j,Ze,ke,H,eo,Me,ee,ne,oo,Ae,G,pt='<code class="language-undefined">adb reboot bootloader</code>',Re,oe,fe,to,Te,N,ht='<code class="language-undefined">fastboot boot surfaceduo1-twrp.img</code>',Ce,te,lo,Oe,le,me,io,qe,Y,_t=`<code class="language-undefined">adb push &lt;path to downloaded surfaceduo1-msc.tar&gt; /sdcard/
adb shell &quot;tar -xf /sdcard/surfaceduo1-msc.tar -C /sdcard --no-same-owner&quot;
adb shell &quot;chmod +x /sdcard/msc.sh&quot;
adb shell &quot;/sdcard/msc.sh&quot;</code>`,xe,ie,ro,Ue,g,so,$e,R,ao,z,no,fo,Fe,T,ue,ce,mo,uo,pe,he,co,Be,L,po,_e,ho,_o,ve,vo,yo,Xe,re,bo,je,J,wo,He,se,Eo,Ge,C,O,So,ye,Po,Wo,be,Lo,Do,q,Io,we,ko,Mo,Ee,Ao,Ne,x,Ro,Se,To,K,Co,Ye;return A=new At({props:{title:"Warnings",severity:"caution",closable:"false",$$slots:{default:[Rt]},$$scope:{ctx:Qe}}}),{c(){p=r("p"),U=d("AT&T devices that are "),b=r("em"),w=d("Unlocked"),$=d(" will be simlocked in Windows but not in Android™ again. In order to make Windows "),E=r("em"),S=d("Unlocked"),F=d(" like Android™ some steps are required."),D=m(),v=r("h3"),B=d("Files/Tools Needed 📃"),I=m(),h=r("ul"),P=r("li"),k=d("TWRP image: "),y=r("a"),X=d("surfaceduo1-twrp.img"),f=m(),c=r("li"),Q=d("Mass Storage Shell Script: "),W=r("a"),V=d("surfaceduo1-msc.tar"),Z=m(),M=r("li"),Ve=d("Windows Command Prompt, Linux is not required"),De=m(),Pt(A.$$.fragment),Ie=m(),j=r("h2"),Ze=d("Steps 🛠️"),ke=m(),H=r("h3"),eo=d("Getting to Mass Storage Mode"),Me=m(),ee=r("ul"),ne=r("li"),oo=d("Reboot into the bootloader menu by running this command while inside Android™:"),Ae=m(),G=r("pre"),Re=m(),oe=r("ul"),fe=r("li"),to=d("Now let’s boot TWRP:"),Te=m(),N=r("pre"),Ce=m(),te=r("p"),lo=d("Once inside TWRP, touch will not be working and the device will say it is locked. This is completely normal."),Oe=m(),le=r("ul"),me=r("li"),io=d("Let’s load the mass storage shell script in order to boot into Mass Storage from TWRP"),qe=m(),Y=r("pre"),xe=m(),ie=r("p"),ro=d("Surface Duo should now be in USB 3 SuperSpeed (or what the USB-IF currently calls it) Mass Storage Mode."),Ue=m(),g=r("h3"),so=d("Dumping Modem partitions"),$e=m(),R=r("p"),ao=d("Using the following guide ("),z=r("a"),no=d("https://github.com/WOA-Project/SurfaceDuo-Guides/blob/main/Other/ExtractingPartitions.md"),fo=d("), extract the following partitions:"),Fe=m(),T=r("ul"),ue=r("li"),ce=r("code"),mo=d("modem_fs1"),uo=m(),pe=r("li"),he=r("code"),co=d("modem_fs2"),Be=m(),L=r("p"),po=d("once done, you should have obtained the "),_e=r("code"),ho=d("modem_fs1.img"),_o=d(" and "),ve=r("code"),vo=d("modem_fs1.img"),yo=d(" files on your computer."),Xe=m(),re=r("p"),bo=d("Please note that your device is already in twrp, there’s no need to put it back again into twrp. (So jump directly to the adb shell section of the above’s guide)."),je=m(),J=r("h3"),wo=d("Copying files over"),He=m(),se=r("p"),Eo=d("Assuming the Windows partition is available under X: (will/may be different for you), do the following:"),Ge=m(),C=r("ul"),O=r("li"),So=d("Copy the "),ye=r("code"),Po=d("modem_fs1.img"),Wo=d(" file to "),be=r("code"),Lo=d("X:\\Windows\\System32\\DriverStore\\FileRepository\\qcremotefs8150_<random data here>\\bootmodem_fs1"),Do=m(),q=r("li"),Io=d("Copy the "),we=r("code"),ko=d("modem_fs2.img"),Mo=d(" file to "),Ee=r("code"),Ao=d("X:\\Windows\\System32\\DriverStore\\FileRepository\\qcremotefs8150_<random data here>\\bootmodem_fs2"),Ne=m(),x=r("p"),Ro=d("Please note bootmodem"),Se=r("em"),To=d("fs1 is the name of the file, and not a folder (same for bootmodem_fs2).\nYou may have to adjust permissions on the ```X:\\Windows\\System32\\DriverStore\\FileRepository\\qcremotefs8150"),K=r("random"),Co=d("``` folder in order to copy paste the above’s files."),this.h()},l(e){p=s(e,"P",{});var l=a(p);U=n(l,"AT&T devices that are "),b=s(l,"EM",{});var Pe=a(b);w=n(Pe,"Unlocked"),Pe.forEach(o),$=n(l," will be simlocked in Windows but not in Android™ again. In order to make Windows "),E=s(l,"EM",{});var xo=a(E);S=n(xo,"Unlocked"),xo.forEach(o),F=n(l," like Android™ some steps are required."),l.forEach(o),D=u(e),v=s(e,"H3",{id:!0});var Uo=a(v);B=n(Uo,"Files/Tools Needed 📃"),Uo.forEach(o),I=u(e),h=s(e,"UL",{});var ae=a(h);P=s(ae,"LI",{});var Oo=a(P);k=n(Oo,"TWRP image: "),y=s(Oo,"A",{href:!0,rel:!0});var $o=a(y);X=n($o,"surfaceduo1-twrp.img"),$o.forEach(o),Oo.forEach(o),f=u(ae),c=s(ae,"LI",{});var qo=a(c);Q=n(qo,"Mass Storage Shell Script: "),W=s(qo,"A",{href:!0,rel:!0});var Fo=a(W);V=n(Fo,"surfaceduo1-msc.tar"),Fo.forEach(o),qo.forEach(o),Z=u(ae),M=s(ae,"LI",{});var Bo=a(M);Ve=n(Bo,"Windows Command Prompt, Linux is not required"),Bo.forEach(o),ae.forEach(o),De=u(e),Wt(A.$$.fragment,e),Ie=u(e),j=s(e,"H2",{id:!0});var Xo=a(j);Ze=n(Xo,"Steps 🛠️"),Xo.forEach(o),ke=u(e),H=s(e,"H3",{id:!0});var jo=a(H);eo=n(jo,"Getting to Mass Storage Mode"),jo.forEach(o),Me=u(e),ee=s(e,"UL",{});var Ho=a(ee);ne=s(Ho,"LI",{});var Go=a(ne);oo=n(Go,"Reboot into the bootloader menu by running this command while inside Android™:"),Go.forEach(o),Ho.forEach(o),Ae=u(e),G=s(e,"PRE",{class:!0});var vt=a(G);vt.forEach(o),Re=u(e),oe=s(e,"UL",{});var No=a(oe);fe=s(No,"LI",{});var Yo=a(fe);to=n(Yo,"Now let’s boot TWRP:"),Yo.forEach(o),No.forEach(o),Te=u(e),N=s(e,"PRE",{class:!0});var yt=a(N);yt.forEach(o),Ce=u(e),te=s(e,"P",{});var go=a(te);lo=n(go,"Once inside TWRP, touch will not be working and the device will say it is locked. This is completely normal."),go.forEach(o),Oe=u(e),le=s(e,"UL",{});var zo=a(le);me=s(zo,"LI",{});var Jo=a(me);io=n(Jo,"Let’s load the mass storage shell script in order to boot into Mass Storage from TWRP"),Jo.forEach(o),zo.forEach(o),qe=u(e),Y=s(e,"PRE",{class:!0});var bt=a(Y);bt.forEach(o),xe=u(e),ie=s(e,"P",{});var Ko=a(ie);ro=n(Ko,"Surface Duo should now be in USB 3 SuperSpeed (or what the USB-IF currently calls it) Mass Storage Mode."),Ko.forEach(o),Ue=u(e),g=s(e,"H3",{id:!0});var Qo=a(g);so=n(Qo,"Dumping Modem partitions"),Qo.forEach(o),$e=u(e),R=s(e,"P",{});var ge=a(R);ao=n(ge,"Using the following guide ("),z=s(ge,"A",{href:!0,rel:!0});var Vo=a(z);no=n(Vo,"https://github.com/WOA-Project/SurfaceDuo-Guides/blob/main/Other/ExtractingPartitions.md"),Vo.forEach(o),fo=n(ge,"), extract the following partitions:"),ge.forEach(o),Fe=u(e),T=s(e,"UL",{});var ze=a(T);ue=s(ze,"LI",{});var Zo=a(ue);ce=s(Zo,"CODE",{});var et=a(ce);mo=n(et,"modem_fs1"),et.forEach(o),Zo.forEach(o),uo=u(ze),pe=s(ze,"LI",{});var ot=a(pe);he=s(ot,"CODE",{});var tt=a(he);co=n(tt,"modem_fs2"),tt.forEach(o),ot.forEach(o),ze.forEach(o),Be=u(e),L=s(e,"P",{});var de=a(L);po=n(de,"once done, you should have obtained the "),_e=s(de,"CODE",{});var lt=a(_e);ho=n(lt,"modem_fs1.img"),lt.forEach(o),_o=n(de," and "),ve=s(de,"CODE",{});var it=a(ve);vo=n(it,"modem_fs1.img"),it.forEach(o),yo=n(de," files on your computer."),de.forEach(o),Xe=u(e),re=s(e,"P",{});var rt=a(re);bo=n(rt,"Please note that your device is already in twrp, there’s no need to put it back again into twrp. (So jump directly to the adb shell section of the above’s guide)."),rt.forEach(o),je=u(e),J=s(e,"H3",{id:!0});var st=a(J);wo=n(st,"Copying files over"),st.forEach(o),He=u(e),se=s(e,"P",{});var at=a(se);Eo=n(at,"Assuming the Windows partition is available under X: (will/may be different for you), do the following:"),at.forEach(o),Ge=u(e),C=s(e,"UL",{});var Je=a(C);O=s(Je,"LI",{});var We=a(O);So=n(We,"Copy the "),ye=s(We,"CODE",{});var dt=a(ye);Po=n(dt,"modem_fs1.img"),dt.forEach(o),Wo=n(We," file to "),be=s(We,"CODE",{});var nt=a(be);Lo=n(nt,"X:\\Windows\\System32\\DriverStore\\FileRepository\\qcremotefs8150_<random data here>\\bootmodem_fs1"),nt.forEach(o),We.forEach(o),Do=u(Je),q=s(Je,"LI",{});var Le=a(q);Io=n(Le,"Copy the "),we=s(Le,"CODE",{});var ft=a(we);ko=n(ft,"modem_fs2.img"),ft.forEach(o),Mo=n(Le," file to "),Ee=s(Le,"CODE",{});var mt=a(Ee);Ao=n(mt,"X:\\Windows\\System32\\DriverStore\\FileRepository\\qcremotefs8150_<random data here>\\bootmodem_fs2"),mt.forEach(o),Le.forEach(o),Je.forEach(o),Ne=u(e),x=s(e,"P",{});var Ke=a(x);Ro=n(Ke,"Please note bootmodem"),Se=s(Ke,"EM",{});var ut=a(Se);To=n(ut,"fs1 is the name of the file, and not a folder (same for bootmodem_fs2).\nYou may have to adjust permissions on the ```X:\\Windows\\System32\\DriverStore\\FileRepository\\qcremotefs8150"),ut.forEach(o),K=s(Ke,"RANDOM",{data:!0,here:!0});var ct=a(K);Co=n(ct,"``` folder in order to copy paste the above’s files."),ct.forEach(o),Ke.forEach(o),this.h()},h(){_(v,"id","filestools-needed-"),_(y,"href","https://github.com/WOA-Project/SurfaceDuo-Guides/raw/main/InstallWindows/Files/surfaceduo1-twrp.img"),_(y,"rel","nofollow"),_(W,"href","https://github.com/WOA-Project/SurfaceDuo-Guides/raw/main/InstallWindows/Files/surfaceduo1-msc.tar"),_(W,"rel","nofollow"),_(j,"id","steps-️"),_(H,"id","getting-to-mass-storage-mode"),_(G,"class","language-undefined"),_(N,"class","language-undefined"),_(Y,"class","language-undefined"),_(g,"id","dumping-modem-partitions"),_(z,"href","https://github.com/WOA-Project/SurfaceDuo-Guides/blob/main/Other/ExtractingPartitions.md"),_(z,"rel","nofollow"),_(J,"id","copying-files-over"),_(K,"data",""),_(K,"here","")},m(e,l){i(e,p,l),t(p,U),t(p,b),t(b,w),t(p,$),t(p,E),t(E,S),t(p,F),i(e,D,l),i(e,v,l),t(v,B),i(e,I,l),i(e,h,l),t(h,P),t(P,k),t(P,y),t(y,X),t(h,f),t(h,c),t(c,Q),t(c,W),t(W,V),t(h,Z),t(h,M),t(M,Ve),i(e,De,l),Lt(A,e,l),i(e,Ie,l),i(e,j,l),t(j,Ze),i(e,ke,l),i(e,H,l),t(H,eo),i(e,Me,l),i(e,ee,l),t(ee,ne),t(ne,oo),i(e,Ae,l),i(e,G,l),G.innerHTML=pt,i(e,Re,l),i(e,oe,l),t(oe,fe),t(fe,to),i(e,Te,l),i(e,N,l),N.innerHTML=ht,i(e,Ce,l),i(e,te,l),t(te,lo),i(e,Oe,l),i(e,le,l),t(le,me),t(me,io),i(e,qe,l),i(e,Y,l),Y.innerHTML=_t,i(e,xe,l),i(e,ie,l),t(ie,ro),i(e,Ue,l),i(e,g,l),t(g,so),i(e,$e,l),i(e,R,l),t(R,ao),t(R,z),t(z,no),t(R,fo),i(e,Fe,l),i(e,T,l),t(T,ue),t(ue,ce),t(ce,mo),t(T,uo),t(T,pe),t(pe,he),t(he,co),i(e,Be,l),i(e,L,l),t(L,po),t(L,_e),t(_e,ho),t(L,_o),t(L,ve),t(ve,vo),t(L,yo),i(e,Xe,l),i(e,re,l),t(re,bo),i(e,je,l),i(e,J,l),t(J,wo),i(e,He,l),i(e,se,l),t(se,Eo),i(e,Ge,l),i(e,C,l),t(C,O),t(O,So),t(O,ye),t(ye,Po),t(O,Wo),t(O,be),t(be,Lo),t(C,Do),t(C,q),t(q,Io),t(q,we),t(we,ko),t(q,Mo),t(q,Ee),t(Ee,Ao),i(e,Ne,l),i(e,x,l),t(x,Ro),t(x,Se),t(Se,To),t(x,K),t(K,Co),Ye=!0},p(e,[l]){const Pe={};l&1&&(Pe.$$scope={dirty:l,ctx:e}),A.$set(Pe)},i(e){Ye||(Dt(A.$$.fragment,e),Ye=!0)},o(e){It(A.$$.fragment,e),Ye=!1},d(e){e&&o(p),e&&o(D),e&&o(v),e&&o(I),e&&o(h),e&&o(De),kt(A,e),e&&o(Ie),e&&o(j),e&&o(ke),e&&o(H),e&&o(Me),e&&o(ee),e&&o(Ae),e&&o(G),e&&o(Re),e&&o(oe),e&&o(Te),e&&o(N),e&&o(Ce),e&&o(te),e&&o(Oe),e&&o(le),e&&o(qe),e&&o(Y),e&&o(xe),e&&o(ie),e&&o(Ue),e&&o(g),e&&o($e),e&&o(R),e&&o(Fe),e&&o(T),e&&o(Be),e&&o(L),e&&o(Xe),e&&o(re),e&&o(je),e&&o(J),e&&o(He),e&&o(se),e&&o(Ge),e&&o(C),e&&o(Ne),e&&o(x)}}}class Ut extends wt{constructor(p){super(),Et(this,p,null,Tt,St,{})}}export{Ut as component};
