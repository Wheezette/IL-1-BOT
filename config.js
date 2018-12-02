const config = {
  "admins": ["331439167881871362"],
  "support": [],
  "token": process.env.TOKEN,
  "dashboard" : {
    "oauthSecret": process.env.SECRET,
    "callbackURL": 'http://ciebot.herokuapp.com:8181/callback',
    "sessionSecret": "kelly",
    "domain": "herokuapp",
    "port": 8181
  },
  defaultSettings: {
  "prefix": "-",
  "modLogChannel": "mod-log",
  "modRole": "Moderator",
  "adminRole": "Administrator",
  "systemNotice": "true",
  "welcomeChannel": "server-lobby",
  "welcomeMessage": "Welcome **{MEMBER}** to the **{SERVER}** server.!",
  "welcomeEnabled": "false",
  "language": "pl"
},
  permLevels: [
    { level: 0,
      name: "User", 
      check: () => true
    },
    { level: 2,
      name: "Server Moderator",
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
      name: "Server Admin", 
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
      name: "Server Owner", 
      check: (message) => message.channel.type === "text" ? (message.guild.owner.user.id === message.author.id ? true : false) : false
    },
    { level: 8,
      name: "Kelly's Global Support",
      check: (message) => config.support.includes(message.author.id)
    },
    { level: 9,
      name: "Kelly's Developer",
      check: (message) => config.admins.includes(message.author.id)
    },
    { level: 10,
      name: "Kelly's Creator", 
      check: (message) => message.client.appInfo.owner.id === message.author.id
    }
  ]
};

module.exports = config;
