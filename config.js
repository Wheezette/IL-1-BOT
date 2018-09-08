const config = {
  "admins": [],
  "support": [],
  "token": "NDU4NTY5NTM3Mjg2MTc2NzY4.DnVwxQ.V6bogJKpDlMUah-EddyS_y0qt4A",
  "dashboard" : {
    "oauthSecret": "QGKnRNJ8RD-AuFMsZw8zj6tLu_-tg4RD",
    "callbackURL": 'http://localhost:8181/callback',
    "sessionSecret": "cookiebot",
    "domain": "localhost",
    "port": 8181
  },
  defaultSettings: {
  "prefix": "-",
  "modLogChannel": "mod-log",
  "modRole": "Moderator",
  "adminRole": "Administrator",
  "systemNotice": "true",
  "welcomeChannel": "witaj-żegnaj",
  "welcomeMessage": "Witamy Cię **{{user}}** na naszym serwerze!",
  "welcomeEnabled": "false"
},
  permLevels: [
    { level: 0,
      name: "Użytkownik", 
      check: () => true
    },
    { level: 2,
      name: "Moderator",
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
      name: "Administrator", 
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
    { level: 8,
      name: "Globalny Support",
      check: (message) => config.support.includes(message.author.id)
    },
    { level: 9,
      name: "Developer Bota",
      check: (message) => config.admins.includes(message.author.id)
    },
    { level: 10,
      name: "Twórca CookieBOT'a", 
      check: (message) => message.client.appInfo.owner.id === message.author.id
    }
  ]
};

module.exports = config;
