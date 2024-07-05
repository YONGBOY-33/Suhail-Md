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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_13_05_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxNixcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgODQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjI5LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICAzMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDExMixcbiAgICAgICAgNjcsXG4gICAgICAgIDc3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2MCxcbiAgICAgICAgODQsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTA3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTcyLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwLFxuICAgICAgICA4NixcbiAgICAgICAgMjEyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDI3LFxuICAgICAgICA1NixcbiAgICAgICAgMTIzLFxuICAgICAgICA3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM2LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgODMsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY0LFxuICAgICAgICAzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU2LFxuICAgICAgICA5MSxcbiAgICAgICAgNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDkzLFxuICAgICAgICA1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICA4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4MixcbiAgICAgICAgMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk1LFxuICAgICAgICAzNixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDMzLFxuICAgICAgICAxMDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE2LFxuICAgICAgICA2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE1LFxuICAgICAgICA0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDksXG4gICAgICAgIDkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTY0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA1MixcbiAgICAgICAgODYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJsKytrY2F2THZqMEZmbE9oMHlYZzZaWlZSSHdzRGJmVDR0UGlMNGJsb0xRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaVEc3WWRjQlI4U1c5dW1ZOEgwSlVnXCIsXG4gIFwicGhvbmVJZFwiOiBcImRhOWU3NmNhLTVhNDUtNGUzNS1hNDYyLTVmOGRiMTk3ZDYzNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDEsXG4gICAgICAxNTYsXG4gICAgICAyMjMsXG4gICAgICA2OSxcbiAgICAgIDE2MixcbiAgICAgIDIwNixcbiAgICAgIDE0NyxcbiAgICAgIDE3LFxuICAgICAgMTcwLFxuICAgICAgMjE4LFxuICAgICAgNzgsXG4gICAgICAxMDAsXG4gICAgICAxODgsXG4gICAgICA1MCxcbiAgICAgIDkwLFxuICAgICAgOTgsXG4gICAgICA4OSxcbiAgICAgIDI0OSxcbiAgICAgIDE5LFxuICAgICAgNzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODAsXG4gICAgICA0MCxcbiAgICAgIDEzNSxcbiAgICAgIDI0MixcbiAgICAgIDI1NSxcbiAgICAgIDExNSxcbiAgICAgIDE4NyxcbiAgICAgIDE2OCxcbiAgICAgIDc2LFxuICAgICAgMTAxLFxuICAgICAgMjM3LFxuICAgICAgNTgsXG4gICAgICAyMixcbiAgICAgIDEyMCxcbiAgICAgIDI1MyxcbiAgICAgIDU3LFxuICAgICAgMTY3LFxuICAgICAgNjMsXG4gICAgICAxMTQsXG4gICAgICAxNjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNEpBRlY3S1ZcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzMzUwOTEyMjEwMzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwibXJfaDR4XCIsXG4gICAgXCJsaWRcIjogXCIxMjA4MTc5MzM3MjM5OTo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lXNnM4d0VFUExlbjdRR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUHlsOXByNnRTYWRjbEtwOTZRbDhYby93dUtkbFhsWkdkQU1hOFVzQ0p5dz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJlcUNkK1NaaWJQUjhYaTFRTzh1amJJQ21NaEpUSjBOdGRmMlBteEwxN3JBSmdsM1JaMmpwd2oyWkZ3d2xGZTYvNGJrYVQxcVlrSFl0Uk9OWTUxbGJEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyeHZ5cXlaUm9WTXA5U0pvaUNFd3A5SkR1SEVBUzNCL2p4L3hJbEZJTW9uWGtGTmpKTUtnUUlKMmVScHpkVVZJZWdZRzdCUGY2UUIwVG84QmVDQ2hnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzM1MDkxMjIxMDM6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDE4NDY5NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtVTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1VMLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSnJpVTRWWVJSSVh2akhJS0xXTVNVQ1Fka0ZZVHBBQlpRL1R2eS93SmJtWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjMzOTY4Mzg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIwMTgzMzg3Njk2XCJ9Igp9|  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "criminal-h4x",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
