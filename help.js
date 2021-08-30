const { MessageEmbed } = require("discord.js");

module.exports = {
    execute: async(Client, message, args) => {
        const p = Client.config.Commands.command_prefix
        const embed = new MessageEmbed()
            .setTitle(`**__${message.guild.name}'s Roleplay Actions Bot Help!__**`)
            .setDescription(`\`${p}acceptcall\` - Accept the call of another person.\n\`${p}admit\` - Lets you sdmit someone to the ER.\n\`${p}sling\` - Allows you to sling a weapon.\n\`${p}giveinfo\` - Allows you to give your info to an officer.\n\`${p}takeinfo\` - Allows you to take the info of people.\n\`${p}call\` - Lets you call another person.\n\`${p}clearweapon\` - Lets you clear a weapon.\n\`${p}cuff\` - lets LEO cuff suspects.\n\`${p}dead\` - Declare yourself dead.\n\`${p}endcall\` - Ltes you end the call with a person.\n\`${p}fireems\` - Lets you call local fire and EMS.\n\`${p}fuel\` - Lets you fuel your car.\n\`${p}givecopy\` - Gives a person their copy of something.\n\`${p}giveid\` - Give someone your ID.\n\`${p}grab\` - Lets you grab someone.\n\`${p}help\` - Brings up this menu.\n\`${p}holster\` - Lets you holster your firearm.\n\`${p}kill\` - Lets you kill someone.\n\`${p}lockcar\` - Lets you lock your car.\n\`${p}lockweapon\` - Lets you lock your weapon.\n\`${p}me\` - Allowes you to give a custom diolog of what your doing in game.\n\`${p}repair\` - Lets you repair your vehicle.\n\`${p}search\` - Lets you search someone.\n\`${p}searchvehicle\` - Lets you search a vehicle.\n\`${p}secure\` - Lets you secure a firearm.\n\`${p}selftreat\` - Lets you treat yourself.\n\`${p}sign\` - Allows you to sign a ticket.\n\`${p}takeid\` - Allows you to take a persons ID.\n\`${p}takereg\` - Allows you to take a persons reg.\n\`${p}ticket\` - Lets you giev someone a ticket.\n\`${p}treat\` - Allows you to treat someone.\n\`${p}uncuff\` - Lets you uncuff someone.\n\`${p}unholster\` - Unholster your firearm.\n\`${p}unlockcar\` - Lets you unlock your car.\n\`${p}unlockweapon\` - Lets you unlock your weapon.`)
            .setColor(Client.color)
            .setFooter(`${message.guild.name} | Made By Lewis B#7143.`, message.guild.iconURL({ dynamic: true }))
        message.channel.send(embed)
    },
    config: {
        name: 'help',
        aliases: [],
    },
};