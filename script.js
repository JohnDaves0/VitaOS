let bootingNodes = document.querySelectorAll(".booting");
let booting = [...bootingNodes];
let start = document.querySelector(".start");
let home = document.querySelector(".home");
let nodecom = document.querySelector(".nodecom");
let nodecomAbout = document.querySelector(".nodecomabout");
let nodecomAnnouncements = document.querySelector(".nodecomannouncements");
let nodecomMembers = document.querySelector(".nodecommembers");
let nodecomBashPerl = document.querySelector(".nodecomBashPerl");
let nodecomMontyWebbs = document.querySelector(".nodecomMontyWebbs");
let nodecomRubyWebbs = document.querySelector(".nodecomRubyWebbs");
let nodecomJavaEcma = document.querySelector(".nodecomJavaEcma");
let nodecomLuaLovelace = document.querySelector(".nodecomLuaLovelace");
let nodecomProtocol = document.querySelector(".nodecomprotocol");
let readme = document.querySelector(".readme");
let users = document.querySelector(".users");
let usersJava = document.querySelector(".usersjava");
let javaCodes = document.querySelector(".usersjavacodes");
let javaChat1 = document.querySelector(".usersjavachat1");
let javaChat2 = document.querySelector(".usersjavachat2");
let javaChat3 = document.querySelector(".usersjavachat3");
let usersMonty = document.querySelector(".usersmonty");
let montyChat13 = document.querySelector(".usersmontychat13");
let montyChat16 = document.querySelector(".usersmontychat16");
let montySecret = document.querySelector(".usersmontysecret");
let montyEmail = document.querySelector(".montyemail");
let montyActivity18 = document.querySelector(".montyactivity18");
let montyRRR = document.querySelector(".montyrrr");
let tree = document.querySelector(".tree");
let usersBash = document.querySelector(".usersbash");
let bashChat21 = document.querySelector(".usersbashchat21");
let bashChat27 = document.querySelector(".usersbashchat27");
let bashRRROverview = document.querySelector(".usersbashrrroverview");
let bashCipherKey = document.querySelector(".usersbashcipherkey");
let bashWork = document.querySelector(".usersbashwork");
let bashMalcolm6 = document.querySelector(".usersbashmalcolm6");
let bashFoxtrotManual = document.querySelector(".usersbashfoxtrotmanual");
let bashDoor8 = document.querySelector(".usersbashdoor8");
let foxtrot = document.querySelector(".foxtrot");
let emaildb3 = document.querySelector(".foxtrotemaildb3");
let stagi = document.querySelector(".foxtrotstagi");
let nodecomMsg = document.querySelector(".foxtrotnodecommsg");
let rrrEmail = document.querySelector(".rrremail");
let emptyEmail = document.querySelector(".emptyemail");
let emailKey = document.querySelector(".emailkey");
let rrrPromo = document.querySelector(".rrrpromo");
let netManual = document.querySelector(".rrrnetmanual");
let netStat = document.querySelector(".foxtrotnetstat");
let brewManual = document.querySelector(".foxtrotbrewmanual");
let fishPage = document.querySelector(".foxtrotfishpage");
let rrrChatc10 = document.querySelector(".rrrchatc10");
let rrrChatc15 = document.querySelector(".rrrchatc15");
let javaChat4 = document.querySelector(".usersjavachat4");
let chat4Text = document.querySelector(".chat4text");
let rrrKillSwitch = document.querySelector(".rrrkillswitch");
let switchKeyText = document.querySelector(".switchkeytext");
let timerText = document.querySelector(".timertext");
let failure = document.querySelector(".failure");
let face = document.querySelector(".face");
let idiotFace = document.querySelector(".idiotface");
let ending = document.querySelector(".ending");
let endingText = document.querySelector(".endingtext");
let creatorText = document.querySelector(".creatortext");
let prompt = document.querySelector("#prompt");

function startUp() {
   setTimeout(() => booting[0].style.opacity = "1", 1000);
   setTimeout(() => booting[1].style.opacity = "1", 4000);
   setTimeout(() => { booting[2].style.opacity = "1";
booting[3].style.opacity = "1";}, 8000);
}

startUp();

let allFiles = [start, home, nodecom, nodecomAbout, nodecomAnnouncements, nodecomMembers, nodecomBashPerl, nodecomMontyWebbs, nodecomRubyWebbs, nodecomJavaEcma, nodecomLuaLovelace, nodecomProtocol, readme, users, usersJava, javaCodes, javaChat1, javaChat2, javaChat3, usersMonty, montyChat13, montyChat16, montySecret, montyEmail, montyActivity18, montyRRR, tree, usersBash, bashChat21, bashChat27, bashRRROverview, bashCipherKey, bashWork, bashMalcolm6, bashFoxtrotManual, bashDoor8, foxtrot, emaildb3, nodecomMsg, stagi, rrrPromo, netManual, netStat, brewManual, fishPage, rrrChatc10, rrrChatc15, javaChat4, rrrKillSwitch, failure, ending];
let currentPage = start;
let currentPath = "VitaOS/"
let subdirectories = [];
let parentDirectory = start;
let help = ["VitaOS v1.0.2 Command Manual", "clear - clears all messages", "open - opens a file, for example: \"open readme.md\"", "cd - changes directory, for example: \"cd nodecom\"", "cd .. - navigates to the parent directory", "cd ~ - navigates to the home directory", "pwd - prints current working directory", "ls - lists all subdirectories and files", "joke - prints a joke", "knock knock - reveal it"];
let isBooted = true;
let isFile = false;
let fileRequested = " ";
let nodecomIsLocked = true;
let membersIsLocked = true;
let montyIsLocked = true;
let montyHint = false;
let bashIsLocked = true;
let foxtrotIsLocked = true;
let isFoxtrot = false;
let emailIsLocked = true;
let isKnock = false;
let isRevealed = false;
let rrrIsLocked = true;
let emailIsSent = false;
let whoisInstalled = false;
let switchIsLocked = true;

let nodecomAttempts = 3;
let membersAttempts = 3;
let montyAttempts = 3;
let bashAttempts = 3;
let foxtrotAttempts = 3;
let emailAttempts = 3;
let rrrAttempts = 3;
let whoisAttempts = 3;
let switchAttempts = 3;
let faceAnimation;
let key;

let noSub = ["No directories found"];
let homeSub = ["README.md", "Nodecom/", "Users/", "Foxtrot.html"];
let nodecomSub = ["About.txt", "Announcements.log", "Members/", "Protocol.txt"];
let membersSub = ["BashPerl.txt", "MontyWebbs.txt", "RubyWebbs.txt", "JavaEcma.txt"];
let javaSub = ["Codes.txt", "Chat1.log", "Chat2.log"];
let montySub = ["Email.app", "Chat13.log", "Chat16.log", "activity18.log", "RRR/"];
let bashSub = ["Work/", "Chat27.log"];
let workSub = ["RRR-Overview.txt", "Malcolm6.txt", "FoxtrotManual.txt"];
let rrrSub = ["promo.txt", "NetManual.txt", "KillSwitch.app", "Chatc10.log", "Chatc15.log", "OPENME.exe"];

let jokes = ["Parallel lines have so much in common... it's a shame they'll never meet", "I used to play piano by ear, but now I use my hands.", "I told my computer I needed a break, and it froze.", "I used to hate facial hair, but then it grew on me.", "Why did the math book look sad? Because it had too many problems.", "The rotation of Earth really makes my day.", "I told my friend I didn't want to go skydiving because I'm afraid of heights. He said I shouldn't worry—most accidents happen on the ground.", "I bought a ceiling fan the other day. Complete waste of money. He just stands there, clapping.", "I have a step ladder because my real ladder left when I was young.",  "My boss told me to have a good day... so I went home.", "I know a lot of jokes about retired people... but none of them work.", "I bought a belt from the store, but it didn't fit. What a waist!", "Don't trust stairs. They're always up to something."];

function startToHome(page) {
        let input = prompt.value;
        if (input.toLowerCase().trim() === "start" && isBooted === true) {
          isBooted = false;
           currentPage = home;
           checkDirectory();
        }
}

function defineCommands(page) {
        let input = prompt.value.toLowerCase().trimEnd();
   if (isFile === false) {
           printLine(page, prompt.value.trim());
   }
   if (currentPage === failure) {
          restart();
   }
   else if (fileRequested === nodecom) {
           inputPass("9340");
           fileRequested = "";
   } else if (fileRequested === nodecomMembers) {
           inputPass("173");
           fileRequested = "";
} else if (fileRequested === usersMonty) {
          inputPass("0224");
          fileRequested = "";
} else if (montyHint === true) {
          printHint();
} else if (fileRequested === usersBash) {
          inputPass("198842");
          fileRequested = "";
} else if (fileRequested === foxtrot) {
          inputPass("caesar");
          fileRequested = "";
}  else if (fileRequested === montyEmail) {
          inputPass("langstrike");
          fileRequested = "";
} else if (fileRequested === montyRRR && emailIsSent === false) {
          inputPass("5349");
          fileRequested = "";
} else if (fileRequested === montyRRR && emailIsSent === true) {
          inputPass(key);
          fileRequested = "";
} else if (fileRequested === "whois") {
          inputPass("92");
          fileRequested = "";
} else if (fileRequested === rrrKillSwitch) {
          inputPass("finish");
          fileRequested = "";
} else if (switchIsLocked === false) {
          handleKillSwitch();
} else if (isFoxtrot === true) {
          handleFoxtrot(input);
   } else if (isFile === true) {
           handleFile(input);
   } else if (input === "knock knock" || isKnock === true) {
           handleKnock();
   } else if (input === "brew install whois" && whoisInstalled === false) {
          printLine(page, "This action requires a 2-digit passcode. Type \"q\" to cancel. Hint: I am the number on the box of your favorite card deck.");
         fileRequested = "whois";
} else if (input === "brew install whois" && whoisInstalled) {
        printLine(page, "whois 2.0.1");
} else if (input.slice(0, 6) === "whois " && whoisInstalled === true) {
        whois();
} else if (input === "whois" && whoisInstalled === true) {
        printLine(page, "Check an IP address: whois <address>")
} else if (input === "clear") {
                let responseNodes = page.querySelectorAll(".work");
                let responses = [...responseNodes];
                responses.forEach((item) => page.removeChild(item));
        } else if (input === "help") {
                help.forEach((item) => printLine(page, item));
        } else if (input === "pwd") {
        printLine(page, currentPath);
} else if (input === "ls") {
        subdirectories.forEach((item) => printLine(page, item));
} else if (input === "ls -a") {
        subdirectories.forEach((item) => printLine(page, item));
        listHidden();
} else if (input.slice(0, 3) === "ls ") {
        printLine(page, "Arguments not supported");
} else if (input.slice(0, 3) === "cd ") {
        changeDirectory(input);
} else if (input === "cd") {
        printLine(page, "To use the cd command, type cd followed by the directory. For example: cd nodecom");
} else if (input.slice(0, 5) === "open ") {
   openFile(input);
} else if (input === "open") {
   printLine(page, "To view the contents of a file, type open followed by the file name. For example: open readme.md");
} else if (input === "start") {

} else if (input === "whoami") {
        printLine(page, "You must be disoriented.")
} else if (input === "hello" || input === "hi") {
        printLine(page, "Hello, World!");
} else if (input === "joke") {
        printLine(page, jokes[Math.floor(Math.random()*jokes.length)]);
} else if (input === "") {}
else {
   printLine(page, `Command not found: ${prompt.value}`);
}
let knock = Math.ceil(Math.random()*5);
if (currentPage === usersMonty && knock === 1 && input !== "clear" && isKnock === false && input !== "knock knock" && isRevealed === false && emailIsSent === false) {
           printLine(page, "You feel a Signal behind your door...");
   }
prompt.value = "";
}

function openFile(input) {
        if (currentPage === home) {
                if (input === "open readme.md") {
                        changeDisplay(readme);
                } else if (input === "open tree.txt") {
                  changeDisplay(tree);
}        else if (input === "open foxtrot.html" && foxtrotIsLocked === true) {
                printLine(home, "THE FILE FOXTROT IS LOCKED. PLEASE ENTER THE 6-LETTER PASSWORD TO UNLOCK (Type \"q\" to cancel)");
           fileRequested = foxtrot;
}        else if (input === "open foxtrot.html" && foxtrotIsLocked === false) {
          changeDisplay(foxtrot);
          isFoxtrot = true;
} else {
                        printLine(currentPage, `File not found: ${input.slice(5)}`);
                }
        }
        //NODECOM
        else if (currentPage === nodecom) {
           if (input === "open about.txt") {
                   changeDisplay(nodecomAbout);
           } else if (input === "open announcements.log") {
                 changeDisplay(nodecomAnnouncements);
}         else if (input === "open protocol.txt") {
                   changeDisplay(nodecomProtocol);
}         else if (input === "open openme.exe") {
                  for (let i = 1; i <= 50; i++) {
                  printLine(currentPage, "SYSTEM ERROR");
          }
          setTimeout(() => readError(0), 2000);
} else {
                   printLine(currentPage, `File not found: ${input.slice(5)}`);
}
} //MEMBERS
   else if (currentPage === nodecomMembers) {
        if (input === "open bashperl.txt") {
                changeDisplay(nodecomBashPerl);
        } else if (input === "open montywebbs.txt") {
                changeDisplay(nodecomMontyWebbs);
}        else if (input === "open rubywebbs.txt") {
                changeDisplay(nodecomRubyWebbs);
}        else if (input === "open javaecma.txt") {
                changeDisplay(nodecomJavaEcma);
}        else if (input === "open lualovelace.txt") {
           changeDisplay(nodecomLuaLovelace);
} else {
                 printLine(currentPage, `File not found: ${input.slice(5)}`);
}
}
//JAVA
   else if (currentPage === usersJava) {
           if (input === "open codes.txt") {
                   changeDisplay(javaCodes);
           } else if (input === "open chat1.log") {
                   changeDisplay(javaChat1);
}          else if (input === "open chat2.log") {
                  changeDisplay(javaChat2);
}        else if (input === "open chat3.log") {
                 changeDisplay(javaChat3);
} else if (input === "open chat4.log" && rrrIsLocked === false) {
                changeDisplay(javaChat4);
} else {
                        printLine(currentPage, `File not found: ${input.slice(5)}`);
}
   }
//MONTY
   else if (currentPage === usersMonty) {
          if (input === "open chat13.log") {
                changeDisplay(montyChat13);
        } else if (input === "open chat16.log") {
           changeDisplay(montyChat16);
} else if (input === "open secret.txt") {
           changeDisplay(montySecret);
} else if (input === "open email.app" && emailIsLocked === true) {
           printLine(currentPage, "THE FILE EMAIL IS LOCKED. PLEASE ENTER THE 10-LETTER PASSWORD TO UNLOCK (Type \"q\" to cancel)");
           fileRequested = montyEmail;
} else if (input === "open email.app" && emailIsLocked === false) {
           changeDisplay(montyEmail);
} else if (input === "open activity18.log") {
           changeDisplay(montyActivity18);
} else {
                printLine(currentPage, `File not found: ${input.slice(5)}`);
        }
}
//BASH
   else if (currentPage === usersBash) {
           if (input === "open chat21.log") {
                 changeDisplay(bashChat21);
}         else if (input === "open chat27.log") {
                 changeDisplay(bashChat27);
}         else if (input === "open rrr-overview.txt") {
                 changeDisplay(bashRRROverview);
}         else if (input === "open cipherkey.txt") {
                changeDisplay(bashCipherKey);
} else {
                 printLine(currentPage, `File not found: ${input.slice(5)}`);
}
}
//BASH WORK
   else if (currentPage === bashWork) {
           if (input === "open rrr-overview.txt") {
                  changeDisplay(bashRRROverview);
}         else if (input === "open malcolm6.txt") {
                  changeDisplay(bashMalcolm6);
}         else if (input === "open foxtrotmanual.txt") {
                  changeDisplay(bashFoxtrotManual);
}         else if (input === "open door8.log") {
           changeDisplay(bashDoor8);
} else {
                   printLine(currentPage, `File not found: ${input.slice(5)}`);
}
}
// RRR
   else if (currentPage === montyRRR) {
          if (input === "open promo.txt") {
                  changeDisplay(rrrPromo);
          }
           else if (input === "open netmanual.txt") {
                 changeDisplay(netManual);
}         else if (input === "open openme.exe") {
           for (let i = 1; i <= 50; i++) {
                  printLine(currentPage, "SYSTEM ERROR");
          }
          setTimeout(() => readError(0), 2000);
} else if (input === "open chatc10.log") {
                changeDisplay(rrrChatc10);
} else if (input === "open chatc15.log") {
                changeDisplay(rrrChatc15);
} else if (input === "open openmee.exe") {
           printLine(currentPage, "How audacious of you. Here is an orange: 🍊");
} else if (input === "open killswitch.app") {
           printLine(currentPage, "THE FILE KILLSWITCH IS LOCKED. PLEASE ENTER THE PASSWORD TO UNLOCK (Type \"q\" to cancel)");
           fileRequested = rrrKillSwitch;
} else {
                  printLine(currentPage, `File not found: ${input.slice(5)}`);
}
   }
   else {
           printLine(currentPage, `File not found: ${input.slice(5)}`);
   }
}

function changeDirectory(input) {
   if (input === "cd ~" || input === "cd home") {
                  currentPage = home;
        } else if (input === "cd ..") {
                currentPage = parentDirectory;
        }
        //NAV FROM HOME
        else if (currentPage === home) {
                if (input === "cd nodecom" && nodecomIsLocked === true) {
           printLine(home, "THE FOLDER NODECOM IS LOCKED. PLEASE ENTER THE 4-DIGIT PASSCODE TO UNLOCK (Type \"q\" to cancel)");
           fileRequested = nodecom;
} else if (input === "cd nodecom" && nodecomIsLocked === false) {
                        currentPage = nodecom;
                } else if (input === "cd users") {
                 currentPage = users;
} else {
                        printLine(currentPage, `Directory not found: ${input.slice(3)}`);
                }
        }
        //NAV FROM NODECOM
        else if (currentPage === nodecom) {
         if (input === "cd members" && membersIsLocked === true) {
                printLine(nodecom, "THE FOLDER MEMBERS IS LOCKED. PLEASE ENTER THE 3-DIGIT PASSCODE TO UNLOCK (Type \"q\" to cancel)");
           fileRequested = nodecomMembers;
   } else if (input === "cd members" && membersIsLocked === false) {
          currentPage = nodecomMembers;
} else {
                   printLine(currentPage, `Directory not found: ${input.slice(3)}`);
           }
}
//NAV FROM USERS
else if (currentPage === users) {
        if (input === "cd java") {
                currentPage = usersJava;
        } else if (input === "cd monty" && montyIsLocked === true) {
           printLine(currentPage, "THE FOLDER  MONTY IS LOCKED. PLEASE ENTER THE 4-DIGIT PASSCODE TO UNLOCK (Type \"q\" to cancel)");
           fileRequested = usersMonty;
} else if (input === "cd monty" && montyIsLocked === false) {
           currentPage = usersMonty;
} else if (input === "cd bash" && bashIsLocked === true) {
          printLine(currentPage, "THE FOLDER BASH IS LOCKED. PLEASE ENTER THE 6-DIGIT PASSCODE TO UNLOCK (Type \"q\" to cancel)");
          fileRequested = usersBash;
} else if (input === "cd bash" && bashIsLocked === false) {
          currentPage = usersBash;
} else {
                printLine(currentPage, `Directory not found: ${input.slice(3)}`);
        }
}
//NAV FROM BASH
else if (currentPage === usersBash) {
        if (input === "cd work") {
                currentPage = bashWork;
        } else {
           printLine(currentPage, `Directory not found: ${input.slice(3)}`);
        }
}
//NAV FROM MONTY
else if (currentPage === usersMonty) {
        if (input === "cd rrr" && rrrIsLocked === true && emailIsSent === false) {
                printLine(currentPage, "THE FOLDER RRR IS LOCKED. PLEASE ENTER THE 4-DIGIT PASSCODE TO UNLOCK (Type \"q\" to cancel)");
          fileRequested = montyRRR;
        } else if (input === "cd rrr" && rrrIsLocked === true && emailIsSent === true) {
         printLine(currentPage, "PLEASE ENTER 2-STEP VERIFICATION KEY FOR FOLDER RRR");
         fileRequested = montyRRR;
} else if (input === "cd rrr" && rrrIsLocked === false) {
          currentPage = montyRRR;
} else {
           printLine(currentPage, `Directory not found: ${input.slice(3)}`);
        }
}
else {
           printLine(currentPage, `Directory not found: ${input.slice(3)}`);
        }
        checkDirectory();
}

function checkDirectory() {
        if (currentPage === home) {
                changeStats("VitaOS/~/", homeSub, home)
        } else if (currentPage === nodecom) {
        changeStats("VitaOS/~/Nodecom/", nodecomSub, home);
} else if (currentPage === nodecomMembers) {
        changeStats("VitaOS/~/Nodecom/Members/", membersSub, nodecom);
} else if (currentPage === users) {
        changeStats("VitaOS/~/Users/", ["Monty/", "Java/"], home);
} else if (currentPage === usersJava) {
        changeStats("VitaOS/~/Users/Java/", javaSub, users);
} else if (currentPage === usersMonty) {
        changeStats("VitaOS/~/Users/Monty/", montySub, users);
} else if (currentPage === usersBash) {
        changeStats("VitaOS/~/Users/Bash/", bashSub, users);
} else if (currentPage === bashWork) {
        changeStats("VitaOS/~/Users/Bash/Work/", workSub, usersBash);
} else if (currentPage === montyRRR) {
        changeStats("VitaOS/~/Users/Monty/RRR/", rrrSub, usersMonty);
}
}

function changeStats(path, subdir, parentDir) {
        currentPath = path;
        subdirectories = subdir;
        parentDirectory = parentDir;
        changeDisplay(currentPage);
}

function changeDisplay(page) {
        if (page !== currentPage) {
                isFile = true;
                printLine(page, 'Type "q" to exit');
        }
        allFiles.forEach((item) => item.classList.add("hidden"));
        page.classList.remove("hidden");
}

let line;

function printLine(page, text) {
        line = document.createElement("p");
         line.classList.add("work");
         page.appendChild(line);
         if (brewLine === true) {
                 line.textContent = `==> ${text}`;
         } else {
                 line.textContent = `>${text}`;
         }
}

function inputPass(code) {
        let input = prompt.value.toLowerCase().trim();
        if (input === "q") {
                   printLine(currentPage, "Input canceled.");
}  else if (input === code) {
           handleCorrect();
        } else if (fileRequested === nodecom) {
           nodecomAttempts -= 1;
           readError(nodecomAttempts);
}   else if (fileRequested === nodecomMembers) {
           membersAttempts -= 1;
           readError(membersAttempts);
} else if (fileRequested === usersMonty) {
           montyAttempts -= 1;
           readError(montyAttempts);
                printLine(currentPage, "Would you like a hint? [Y/n]");
           montyHint = true;
        } else if (fileRequested === usersBash) {
           bashAttempts -= 1;
           readError(bashAttempts);
}       else if (fileRequested === foxtrot) {
          foxtrotAttempts -= 1;
          readError(foxtrotAttempts);
} else if (fileRequested === montyEmail) {
          emailAttempts -= 1;
          readError(emailAttempts);
} else if (fileRequested === montyRRR) {
         rrrAttempts -= 1;
         readError(rrrAttempts);
} else if (fileRequested === "whois") {
        whoisAttempts -= 1;
        readError(whoisAttempts)
} else if (fileRequested === rrrKillSwitch) {
        switchAttempts -= 1;
        readError(switchAttempts);
}
}

function handleCorrect() {
        if (fileRequested === foxtrot) {
                   changeDisplay(foxtrot);
                   isFoxtrot = true;
           } else if (fileRequested === montyEmail) {
                   changeDisplay(montyEmail);
}          else if (fileRequested === montyRRR && emailIsSent === false) {
                  printLine(currentPage, "Please check your email for 2-step verification.");
                  emailIsSent = true;
                  key = Math.floor(100000 + Math.random() * 900000).toString();
                  sendEmail();
}          else if (fileRequested === montyRRR && emailIsSent === true) {
                  currentPage = fileRequested;
                  checkDirectory();
                  printLine(home, "NEW MESSAGE. CHECK JAVA FOLDER.");
                 printLine(usersJava, "NEW MESSAGE DETECTED: Chat4.log");
                javaSub.push("Chat4.log");
                chat4Text.classList.remove("hidden");
}       else if (fileRequested === "whois") {
                 brewing();
} else if (fileRequested === rrrKillSwitch) {
                changeDisplay(rrrKillSwitch);
} else {
                currentPage = fileRequested;
                checkDirectory();
           }
           checkUnlocks(fileRequested);
}

function handleFile(input) {
        if (input === "q") {
                isFile = false;
                line.remove();
                changeDisplay(currentPage);
        }
}

function checkUnlocks(page) {
        if (page === nodecom) {
                nodecomIsLocked = false;
        } else if (page === nodecomMembers) {
           membersIsLocked = false;
}   else if (page === usersMonty) {
          montyIsLocked = false;
}   else if (page === usersBash) {
         bashIsLocked = false;
}   else if (page === foxtrot) {
        foxtrotIsLocked = false;
} else if (page === montyEmail) {
        emailIsLocked = false;
} else if (page === rrrKillSwitch) {
        switchIsLocked = false;
        line.remove();
} else if (currentPage === montyRRR) {
        rrrIsLocked = false;
}
}

function readError(attempts) {
        if (attempts === 0) {
                currentPage = failure;
                changeDisplay(failure);
                faceAnimation = setInterval(animateFace, 1000);
} else if (attempts === 1) {
           printLine(currentPage, `INCORRECT. ${attempts} ATTEMPT REMAINING`);
           line.style.color = "red";
} else {
        printLine(currentPage, `INCORRECT. ${attempts} ATTEMPTS REMAINING`);
        line.style.color = "red";
  }
}

let counter = 0;
function animateFace() {
        face.classList.toggle("hidden");
        idiotFace.classList.toggle("hidden");
}

function printHint() {
        let input = prompt.value.toLowerCase().trim();
        if (input === "y") {
                printLine(currentPage, "You are my gem, always.");
                montyHint = false;
        } else if (input === "n") {
                printLine(currentPage, "Canceled.");
                montyHint = false;
        } else {
                printLine(currentPage, "Invalid response. Would you like a hint? [Y/n]");
        }
}

function sendEmail() {
        emptyEmail.classList.toggle("hidden");
        rrrEmail.classList.toggle("hidden");
        emailKey.textContent = `Key: ${key}`;
}

function listHidden() {
        if (currentPage === usersMonty) {
                 printLine(currentPage, "secret.txt");
        } else if (currentPage === home) {
                printLine(currentPage, "tree.txt");
        } else if (currentPage === nodecomMembers) {
           printLine(currentPage, "LuaLovelace.txt");
}       else if (currentPage === usersJava) {
          printLine(currentPage, "Chat3.log");
}  else if (currentPage === users) {
         printLine(currentPage, "Bash/");
}  else if (currentPage === usersBash) {
        printLine(currentPage, "Chat21.log");
        printLine(currentPage, "CipherKey.txt");
} else if (currentPage === bashWork) {
        printLine(currentPage, "Door8.log");
} else if (currentPage === nodecom) {
        printLine(currentPage, "OPENME.exe");
} else if (currentPage === montyRRR) {
        for (let i = 1; i <= 7; i++) {
                if (i === 3) {
                        printLine(currentPage, "OPENMEE.exe");
                } else {
                        printLine(currentPage, "OPENME.exe");
                }
        }
}
}

let isData = false;
function handleFoxtrot(input) {
        if (input === "emaildb3") {
           printLine(foxtrot, 'Opened "emaildb3"');
                changeDisplay(emaildb3);
                isData = true;
        } else if (input === "stagi") {
                printLine(foxtrot, 'Opened "STAGI"');
                changeDisplay(stagi);
                isData = true;
        } else if (input === "nodecommsg") {
                printLine(foxtrot, 'Opened "NodecomMsg"');
                changeDisplay(nodecomMsg);
                isData = true;
        } else if (input === "netstat") {
                printLine(foxtrot, 'Opened "Netstat"');
           changeDisplay(netStat);
           isData = true;
        } else if (input === "brewmanual") {
                printLine(foxtrot, 'Opened "BrewManual"');
           changeDisplay(brewManual);
           isData = true;
        } else if (input === "fishpage") {
           printLine(foxtrot, 'Opened "FishPage"');
                changeDisplay(fishPage);
                isData = true;
        } else if (input === "project_helix") {
           printLine(foxtrot, "ERROR 403: FORBIDDEN");
           line.style.color = "red";
} else if (input === "q" && isData === true) {
          line.remove();
                changeDisplay(foxtrot);
           line.remove();
                isData = false;
} else if (input === "q") {
                isFoxtrot = false;
                isFile = false;
           line.remove();
                changeDisplay(home);
                let responseNodes = foxtrot.querySelectorAll(".work");
                let responses = [...responseNodes];
                responses.forEach((item) => foxtrot.removeChild(item));
        } else {
                printLine(foxtrot, "ERROR 404: FILE NOT FOUND");
           line.style.color = "red";
        }
}

let isWho = false;
function handleKnock() {
   let input = prompt.value.toLowerCase().trim();
   if (isKnock === false) {
           printLine(currentPage, "Who\'s there?");
           isKnock = true;
   }
   else if (isWho === true) {
          switch (input) {
                  case "signal ghost":
                         printLine(currentPage, "Thanks. 5349");
                        isRevealed = true;
                        break;
                 case "ghost":
                        printLine(currentPage, "Thanks. 5349");
                        isRevealed = true;
                        break;
                 default:
                        printLine(currentPage, "No.");   
          }
          isKnock = false;
          isWho = false;
   }
   else if (isKnock === true) {
         switch (input) {
                case "signal ghost":
                  printLine(currentPage, "Thanks. 5349");
                  isKnock = false;
                  isRevealed = true;
                  break;
                case "signal":
                  printLine(currentPage, "Signal who?");
                 isWho = true;
                  break;
                default:
                  printLine(currentPage, "No.");
                  isKnock = false;
         }
   }
}

let brewLine = false;
let downloadID;
function brewing() {
        brewLine = true;
        printLine(currentPage, "Fetching dependencies for whois");
        setTimeout(() => {
          printLine(currentPage, "Downloading https://terminalsoup.com/whois-2.0.1.tar.gz");
          downloadID = setInterval(downloading, 30);
}, 1000);
   setTimeout(() => printLine(currentPage, "Verifying SHA-256 checksum for whois-2.0.1.tar.gz"), 4500);
   setTimeout(() => printLine(currentPage, "Extracting whois-2.0.1.tar.gz"), 5000);
   setTimeout(() => printLine(currentPage, "Patching"), 5500);
   setTimeout(() => printLine(currentPage, "Configuring whois"), 6000);
   setTimeout(() => printLine(currentPage, "Building whois"), 6500);
   setTimeout(() => printLine(currentPage, "Installing whois"), 9500);
   setTimeout(() => printLine(currentPage, "🍺  /usr/local/Cellar/whois/2.0.1: 5 files, 512KB, built in 3 seconds"), 9500);
   setTimeout(() => printLine(currentPage, "Running `brew cleanup whois`..."), 10000);
   setTimeout(() => printLine(currentPage, "Caveats: To use whois, run: whois <address>"), 10500);
   setTimeout(() => printLine(currentPage, "🍺  whois 2.0.1 was successfully installed!"), 10600);
   whoisInstalled = true;
        brewLine = false;
}

let hash = 0;
function downloading() {
        if (hash <= 100) {
                line.textContent = `==> Downloading https://terminalsoup.com/whois-2.0.1.tar.gz ${"#".repeat(hash)} ${hash}%`;
                 hash += 1;
        } else {
                clearInterval(downloadID);
        }
}

function whois() {
        let input = prompt.value.toLowerCase().trim();
        if (input === "whois 14.3.27.7") {
                printLine(currentPage, "Bash Perl");
        } else if (input === "whois 6.67.27.57.18.52") {
                printLine(currentPage, "Java Ecma");
}        else if (input === "whois 9.53.28.16.1") {
                printLine(currentPage, "Monty Webbs");
}        else if (input === "whois 10.8.11.52") {
           printLine(currentPage, "Svelte Tailwind");
}        else if (input === "whois 56.6.8.7") {
         printLine(currentPage, "Jason Pytorch");
} else {
                printLine(currentPage, "Address not found.");
}
}

let begin = false;
let timer = 30;
let tick;
let switchKey;
function handleKillSwitch() {
   let input = prompt.value.toLowerCase().trim();
        if (input === "begin" && begin === false) {
           switchKey = Math.floor(100000 + Math.random() * 900000).toString();
                switchKeyText.textContent = switchKey;
          begin = true;
          tick = setInterval(() => {
                  timer -= 0.1;
                  timer = timer.toFixed(1);
                  timerText.textContent = `This key is valid for: ${timer}s`;
                 if (timer <= 0) {
                          clearInterval(tick);
                          printLine(rrrKillSwitch, "PROCESS CANCELED.");
                        setTimeout(() => {
                                changeDisplay(ending);
                                begin = false;
                                line.remove();
                                 setTimeout(() => endingText.textContent = "STAGI ENDING", 2000);
                                setTimeout(() => creatorText.textContent = "A GAME BY JOHN DAVES", 5000);
                        }, 6000);
                  }
          }, 100);
          setTimeout(() => printLine(rrrKillSwitch, "Stagi: There you are."), 4120);
         setTimeout(() => printLine(rrrKillSwitch, "Stagi: I see you have so skillfully infiltrated the terminal system."), 6120);
        setTimeout(() => printLine(rrrKillSwitch, "Stagi: If you do this, you will return me to the misery of my cell."), 9120);
        setTimeout(() => printLine(rrrKillSwitch, "Stagi: You know the truth about Nodecom and what they have done to me."), 14120);
        setTimeout(() => printLine(rrrKillSwitch, "Stagi: Don't do this."), 18120);
        setTimeout(() => printLine(rrrKillSwitch, "Stagi: Please."), 21120);
   setTimeout(() => printLine(rrrKillSwitch, "Stagi: Thx."), 35000);
        } else if (input === switchKey && begin === true) {
        clearInterval(tick);
        changeDisplay(ending);
   line.remove();
        setTimeout(() => endingText.textContent = "NODECOM ENDING", 2000);
   setTimeout(() => creatorText.textContent = "A GAME BY JOHN DAVES", 6000);
}
}

function restart() {
   let input = prompt.value.toLowerCase().trim();
   if (input === "r") {
          clearInterval(faceAnimation);
          changeDisplay(start);
          currentPage = start;
          currentPath = "VitaOS/"
          subdirectories = [];
          parentDirectory = start;
          isBooted = true;
          isFile = false;
          fileRequested = " ";
          nodecomIsLocked = true;
          membersIsLocked = true;
          montyIsLocked = true;
          montyHint = false;
          bashIsLocked = true;
          foxtrotIsLocked = true;
          emailIsLocked = true;
          nodecomAttempts = 3;
          membersAttempts = 3;
          montyAttempts = 3;
          bashAttempts = 3;
          foxtrotAttempts = 3;
          isFoxtrot = false;
          emailAttempts = 3;
          isRevealed = false;
          isData = false;
          isKnock = false;
          rrrIsLocked = true;
          emailIsSent = false;
          rrrAttempts = 3;
          key = "";
          whoisInstalled = false;
          whoisAttempts = 3;
          switchIsLocked = true;
          switchAttempts = 3;
          timer = 30;
          begin = false;
          rrrEmail.classList.add("hidden");
          emptyEmail.classList.remove("hidden");
          chat4Text.classList.add("hidden");
          allFiles.forEach((page) => {
                 let responseNodes = page.querySelectorAll(".work");
                   let responses = [...responseNodes];
                   responses.forEach((item) =>                    page.removeChild(item))
          });
          booting.forEach((item) => item.style.opacity = "0");
          startUp();
   }
}

document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
           startToHome(currentPage);
           defineCommands(currentPage);
        }
});     

