const fs=require("fs");
let gamewl=JSON.parse(fs.readFileSync("whitelist.json"));
let config=require("./config.json");
let wl=fs.readFileSync("whitelist.txt").toString().split("\n");
let op=true;
let wledusers={};
let outwl=[];
for(let i of gamewl){
	wledusers[i.name]=i;
}
for(let i of wl){
	if(i=="")continue;
	if(i=="==^^Maintainers^^=="){
		if(config.under_maintenance)break;
		continue;
	}
	if(wledusers.hasOwnProperty(i)){
		outwl.push(wledusers[i]);
	}else{
		outwl.push({name:i});
	}
	wledusers[i]={name:i};
}
fs.writeFileSync("whitelist.json",JSON.stringify(outwl,null,"\t"));
