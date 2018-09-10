module.exports = class {
  constructor(client) {
    this.client = client;
  }

  async run() {

    setInterval (function (){
    var statusrand  = Math.floor(Math.random() * 8 + 1);
    if (statusrand === 1) {
      this.client.user.setActivity(`Dashboard wkrótce!`);   
      console.log(statusrand);
    }
    if (statusrand === 2) {
      this.client.user.setActivity(`Użyj -help`);  
      console.log(statusrand);
    }
    if (statusrand === 3) {
      this.client.user.setActivity(`"-" to domyślny prefix`);  
      console.log(statusrand);
    }
    if (statusrand === 4) {
      this.client.user.setActivity(`😈 https://discord.gg/WTekf4a`);  
      console.log(statusrand);
    }
    if (statusrand === 5) {
      this.client.user.setActivity(`${client.guilds.size} serwerów!`);  
      console.log(statusrand);
    }
    if (statusrand === 6) {
      this.client.user.setActivity(`${client.users.size} użytkowników!`); 
      console.log(statusrand); 
    }
    if (statusrand === 7) {
      this.client.user.setActivity(`${client.channels.size} kanałów!`);  
      console.log(statusrand);
    }
    if (statusrand === 8) {
      this.client.user.setActivity(`Skonfiguruj swoj serwer: -config!`);  
      console.log(statusrand);
    }

  }, 10000);
    // Why await here? Because the ready event isn't actually ready, sometimes
    // guild information will come in *after* ready. 1s is plenty, generally,
    // for all of them to be loaded.
    // NOTE: client.wait and client.log are added by ./modules/functions.js !
    await this.client.wait(1000);

    // This loop ensures that client.appInfo always contains up to date data
    // about the app's status. This includes whether the bot is public or not,
    // its description, owner, etc. Used for the dashboard amongs other things.
    this.client.appInfo = await this.client.fetchApplication();
    setInterval( async () => {
      this.client.appInfo = await this.client.fetchApplication();
    }, 60000);

    // Check whether the "Default" guild settings are loaded in the enmap.
    // If they're not, write them in. This should only happen on first load.
    if (!this.client.settings.has("default")) {
      if (!this.client.config.defaultSettings) throw new Error("defaultSettings not preset in config.js or settings database. Bot cannot load.");
      this.client.settings.set("default", this.client.config.defaultSettings);
    }

    // Initializes the dashboard, which must be done on ready otherwise some data
    // may be missing from the dashboard. 
    require("../util/dashboard.js")(this.client);
    
    // Set the game as the default help command + guild count.
    // NOTE: This is also set in the guildCreate and guildDelete events!
 //   this.client.user.setActivity({game: {name: `${this.client.settings.get("default").prefix}help | ${this.client.guilds.size} servers.`, type:0}});

    // Log that we're ready to serve, so we know the bot accepts commands.
    this.client.logger.log(`${this.client.user.tag}, został włączony. ${this.client.users.size} użytkowników na ${this.client.guilds.size} serwerach.`, "ready");  }
};
