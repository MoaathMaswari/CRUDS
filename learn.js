let in1 =document.getElementById('in1')
let in2=document.getElementById('in2');
let in3=document.getElementById('in3');
let in4=document.getElementById('in4');
let in5=document.getElementById('inp5');
let sch=document.getElementById('sch');
let tbody=document.getElementsByTagName('tbody')[0];
let scrol=document.getElementById('scroll');

in1.focus();

let m='c';
let e;

//show
show();
function show(c=0){
let r=JSON.parse(localStorage.inf);
for(c;c<JSON.parse(localStorage.inf).length;c++){

let row=document.createElement('tr');
tbody.appendChild(row);
let pid=document.createElement('td');
let pname=document.createElement('td');
let ptype=document.createElement('td');
let pprice=document.createElement('td');
let pcount=document.createElement('td');
let pe=document.createElement('td');
let pd=document.createElement('td');
pid.innerText=c+1;

pname.innerText = r[c].name;
ptype.innerText = r[c].type;
pprice.innerText = r[c].price;
pcount.innerText = r[c].count;
pe.innerHTML=`<button onclick='edit(${c}),scrolll()'>Edit</button>`
pd.innerHTML=`<button onclick='del(${c})'>Delete</button>`
row.appendChild(pid);
row.appendChild(pname);
row.appendChild(pprice);
row.appendChild(pcount);
row.appendChild(ptype);
row.appendChild(pe);
row.appendChild(pd);
}
}


//save

function save(d=e){
 if (m=='c'){
    let info;
    if(localStorage.inf!=null)
        {
        info=JSON.parse(localStorage.inf)
        }
    else{
            info=[]
        }

if(in1.value!=''&&in2.value!=''&&in3.value!=''&&in4.value!='')
{
let pro={
    
    name:in1.value,
    type:in2.value,
    price:in3.value,
    count:in4.value
}

info.push(pro);
localStorage.inf=JSON.stringify(info);
in1.value='';
in2.value='';
in3.value='';
in4.value='';
show((JSON.parse(localStorage.inf).length)-1);
}
else{
alert('All inputs have to be filled!')
}
 }
 else{
    if(in1.value!=''&&in2.value!=''&&in3.value!=''&&in4.value!='')
{
let f=JSON.parse(localStorage.inf);
f[d].name=in1.value;
f[d].type=in2.value;
f[d].price=in3.value;
f[d].count=in4.value;
in1.value='';
in2.value='';
in3.value='';
in4.value='';
localStorage.inf=JSON.stringify(f);
document.getElementById('ce').innerText='Create';
tbody.innerHTML='';
show();
m='c'
 }
 else{
    alert('All inputs have to be filled!')
    }
}

}

//delelet
function del(i){
    let d=JSON.parse(localStorage.inf);
    d.splice(i,1);
    localStorage.inf=JSON.stringify(d)
tbody.innerHTML='';
show();


}

//edit

function edit(i){
   document.getElementById('ce').innerText='Edit';
   m='e';
   e=i;
        let d=JSON.parse(localStorage.inf);
        in1.value=d[i].name;
        in2.value=d[i].type;
        in3.value=d[i].price;
        in4.value=d[i].count;
    }

    //search
    function search(){

in5.style.display='block'
in5.focus();

if(sch.innerHTML=='Search'){

    sch.innerText='Back';
    
}
else{
sch.innerText='Search';
in5.style.display='none';
tbody.innerHTML="";
show();
}
    }

function find(){

    let d=JSON.parse(localStorage.inf);
    tbody.innerHTML="";
    for(let i=0;i<d.length;i++){
        if( d[i].name.includes(inp5.value) || d[i].type.includes(inp5.value)){
    tbody.innerHTML+=`
    
    <td>${i+1}</td>
    <td>${d[i].name}</td>
    <td>${d[i].price}</td>
    <td>${d[i].count}</td>
    <td>${d[i].type}</td>
    <td><button onclick='edit(${i}),scrolll()'>Edit</button></td>
    <td><button onclick='del(${i})'>Delete</button></td>
    </tr>
    
    `}
    }
}

function scrolll(){
scrol.style.display='none'
scrollTo({
top:0,
behavior:'smooth'
})



}
onscroll=function(){
if(this.scrollY>=300){
    scrol.style.display='block'
}
else{
    scrol.style.display='none'
}

}

