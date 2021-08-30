const { Client: CustomBot, Collection } = require('discord.js');
const Enmap = require('enmap');
const Client = new CustomBot();
const Config = require('./settings/config');
const Loader = require('./functions/Loader');

const Auctions = new Enmap({ name: 'auctions' });
Client.auctions = Auctions;

Client.commands = new Collection();
Client.aliases = new Collection();
Client.color = Config.Commands.embed_color;
Client.config = require('./settings/config');

Loader.execute(Client);
Client.login(Config.Settings.token);