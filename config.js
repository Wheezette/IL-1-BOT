const config = {
  "botowner": ["360425590089580564"],
  "botadmin": [],
  "token": process.env.TOKEN,
  "dashboard" : {
    "oauthSecret": process.env.SECRET,
    "callbackURL": 'http://iceleaders.pl/callback',
    "sessionSecret": "graficznybot",
    "domain": "iceleaders",
    "port": 8181
  },
  defaultSettings: {
  "prefix": "!",
  "modLogChannel": "modlogi",
  "modRole": "Moderator",
  "adminRole": "Administrator",
  "systemNotice": "true",
  "welcomeChannel": "lobby",
  "welcomeMessage": "Witaj **{MEMBER}** :wave:. Dołączyłeś(aś) właśnie na nasz serwer discord.",
  "welcomeEnabled": "true",
},
  permLevels: [
    { level: 0,
      name: "User", 
      check: () => true
    },
    { level: 2,
      name: "Moderator Serwera",
      check: (message) => {
        try {
          const modRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.modRole.toLowerCase());
          if (modRole && message.member.roles.has(modRole.id)) return true;
        } catch (e) {
          return false;
        }
      }
    },
    { level: 3,
      name: "Administrator Serwera", 
      check: (message) => {
        try {
          const adminRole = message.guild.roles.find(r => r.name.toLowerCase() === message.settings.adminRole.toLowerCase());
          return (adminRole && message.member.roles.has(adminRole.id));
        } catch (e) {
          return false;
        }
      }
    },
    { level: 4,
      name: "Właściciel Serwera", 
      check: (message) => message.channel.type === "text" ? (message.guild.owner.user.id === message.author.id ? true : false) : false
    },
    { level: 9,
      name: "Admin Bota",
      check: (message) => config.botadmin.includes(message.author.id)
    },
    { level: 10,
      name: "Właściciel Bota",
      check: (message) => config.botowner.includes(message.author.id)
    },
    { level: 100,
      name: "IceLeaders Team - CEO", 
      check: (message) => message.client.appInfo.owner.id === message.author.id
    }
  ]
};

module.exports = config;
