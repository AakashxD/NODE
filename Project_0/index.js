const { Telegraf }=require('telegraf');

require('dotenv').config();
console.log(process.env);
const binarySearchString=`function iterativeBinarySearch(arr, x) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor((start + end) / 2);

        if (arr[mid] === x) return true;
        else if (arr[mid] < x) start = mid + 1;
        else end = mid - 1;
    }
    return false;
}`;
const cmd=`Logoff:
Sign out of Windows using the command: logoff.
Shutdown:
Shutdown, restart, or log out a user using: shutdown /s.
Explore other uses of the shutdown command, such as rebooting into UEFI (BIOS) or scheduling shutdowns1.
Tasklist:
View running processes on your computer: tasklist.
Taskkill:
Terminate processes by name or process ID: taskkill /f /im [process name] or taskkill /f /pid [process ID]1.
Chkdsk:
Check and repair disk errors: chkdsk.
Sfc /scannow:
Scan and repair system files: sfc /scannow.
Format:
Format a drive: format.
Diskpart:
Manage disks and partitions: diskpart.
Ver:
Display the Windows version: ver.
Systeminfo:
Retrieve system information: systeminfo.
Dir:
List files and directories: dir.
Cd:
Change directory: cd.
Copy:
Copy files: copy.
Del:
Delete files: del.
Ipconfig:
Display network configuration: ipconfig.
Ping:
Test network connectivity: ping.
Tracert:
Trace the route to a destination: tracert.
Netsh wlan show profiles:
List wireless network profiles: netsh wlan show profiles.
Cls:
Clear the Command Prompt screen: cls.
Help:
Get help on available commands: help.`;
try{
    const bot =new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply('Welcome to Aakash`s BOT '));
bot.command('binarySearch', (ctx) => ctx.reply(binarySearchString));
bot.on('sticker',(ctx)=>ctx.reply('MUCH LOVE :)'));
bot.command('CMDc',(ctx)=>ctx.reply(cmd));



bot.on('text',(ctx)=> ctx.reply("I dont Understand Humans"));

bot.command('AakashxD',async(ctx)=>{
    const res=await axios.get('https://github.com/AakashxD/Sep-2022-Node-Batch-Notes/blob/master/Day%2016/1%20notes.pdf');
    ctx.reply(response.data);
})
bot.launch();
} catch{
    console.log("unexected Command");
}