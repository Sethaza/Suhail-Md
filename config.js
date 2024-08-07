const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_33_08_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTU1LFxuICAgICAgICAzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzksXG4gICAgICAgIDg5LFxuICAgICAgICA1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTcsXG4gICAgICAgIDcyLFxuICAgICAgICAzOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzksXG4gICAgICAgIDc4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk0LFxuICAgICAgICAzNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDY4LFxuICAgICAgICA1MCxcbiAgICAgICAgNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxOSxcbiAgICAgICAgMTAxLFxuICAgICAgICA0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDg5LFxuICAgICAgICA5MixcbiAgICAgICAgMTAxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODcsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjksXG4gICAgICAgIDM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAyLFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODAsXG4gICAgICAgIDIsXG4gICAgICAgIDYwLFxuICAgICAgICAyOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMixcbiAgICAgICAgODYsXG4gICAgICAgIDI4LFxuICAgICAgICA1MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3LFxuICAgICAgICAxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNSxcbiAgICAgICAgODMsXG4gICAgICAgIDIxLFxuICAgICAgICAxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgODFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgNjksXG4gICAgICAgIDUyLFxuICAgICAgICAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDU1LFxuICAgICAgICAwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxODcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAxMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0MixcbiAgICAgICAgMjAsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6Rk8xWmxCU052amJJSzQ4VmdLRFdkdE5vSmhnVXFpa09yWUJPK1Uyd2JnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzAxNDgzNjU3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiOTY4QzdBNUY1MUVGNkE5N0M1RDhCODdFNTA0Qzg2QThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIzMDM0MDA2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMDE0ODM2NTc4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RjgzMDQzNTE0RkM4MkQxMDEyMjZFODAzRDg5N0Q4QVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjMwMzQwMDZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiczA0emdvUDhTdGV5ZjRiZTQtdlA1d1wiLFxuICBcInBob25lSWRcIjogXCI3NzU5YjJkOS1kZjIyLTQ3YjctOWJkNC0zZWEzZGMwMzI0ZGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ0LFxuICAgICAgMTA0LFxuICAgICAgOTYsXG4gICAgICA0MixcbiAgICAgIDE4LFxuICAgICAgMTI1LFxuICAgICAgMzEsXG4gICAgICAxNDQsXG4gICAgICAyMSxcbiAgICAgIDI2LFxuICAgICAgMTQ4LFxuICAgICAgODgsXG4gICAgICAxOCxcbiAgICAgIDIxMixcbiAgICAgIDE0MCxcbiAgICAgIDI2LFxuICAgICAgMjAsXG4gICAgICAxNyxcbiAgICAgIDk3LFxuICAgICAgNjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTc3LFxuICAgICAgMTQxLFxuICAgICAgMTk5LFxuICAgICAgMTAsXG4gICAgICAxMTgsXG4gICAgICAxNzksXG4gICAgICAxNjMsXG4gICAgICAxMDAsXG4gICAgICAyNTAsXG4gICAgICAxNzEsXG4gICAgICAyMzIsXG4gICAgICAyMjAsXG4gICAgICAxNDAsXG4gICAgICAyMTEsXG4gICAgICAyMTAsXG4gICAgICAxMzQsXG4gICAgICAxOCxcbiAgICAgIDIyNSxcbiAgICAgIDUyLFxuICAgICAgMTYwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE0VFMzUVI5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwMTQ4MzY1Nzg6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE0NTU5NzU1Mzk1MTU0OjlAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTSBNdXNodGFxXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVcrOS9VSEVJN1R6YlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmbmtaU0xabEdjRkRiYjRTczJxa0dONVQvelk1MjNZRnNPL2NvMjEzVFNVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImU3RW84ZWtHV0dTUlFLK2NPcVNRL2FEbFJ4NmNNVDJnVFh2blphQjVPdmd2QlQ3VmxuT3V3aFcxRFNBcDhDcDRBeUYxZVAyemZ5VVVEazNNejdhWkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImpwNGVBSWxuUXRBck95MWpKT3I5NHRvZUxXZllsV2Q5RVVEdmtGMGRXNnYrQVpvVmI0SjdWbVBSQklYZ2hIVGo5STZLUE5iWm5hdHVDUEI4aXRJNkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzAxNDgzNjU3ODo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjMwMzQwMDIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNZWxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1lbC5qc29uIjogIntcImtleURhdGFcIjpcIldDVnpUTXFKeG9PZXh4QVV4Rk9UNWUveFUzWkhrOVJzbUcrS0pZaCtMc1k9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjEyNjM3MjYxMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIzMDM0MDA0MDU0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
