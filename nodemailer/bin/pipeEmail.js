var stdin = process.stdin,
    inputs = "";
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host: "smtp.ym.163.com",
    port: 994,
    secure: true,
    auth:
    {
        user: '',
        pass: ''
    }
});

function getDateString()
{
    var t=new Date();
    return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate();
}

stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function (chunk)
{
    inputs+=chunk
});

stdin.on('end', function ()
{
    console.log(inputs)
    transporter.sendMail(
    {
        from: 'Notification <noreply@levy.at>',
        to: 'zly.george@163.com',
        subject: '[From Levyink Webserver] Server digestion'+(process.argv[1]==undefined?" ":" <"+process.argv[1]+"> ")+getDateString(),
        text: 'Check the content below:\n\n\n'+inputs
    },function(error, info)
    {
        if (error==null)
            console.log("SUCC.");
        process.exit(0);
    });
});
