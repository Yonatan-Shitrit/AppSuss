import {  storageService} from './../../../services/async-storage-service.js';
import {  utilService} from './../../../services/util-service.js';

const MAIL_KEY = 'mail'
_createMails()

export const mailService = {
  query,
  remove,
  save,
  getById,
  readPercentage,
}

function query() {
  return storageService.query(MAIL_KEY)
}

function remove(mailId) {
  return storageService.remove(MAIL_KEY, mailId);
}

function save(mail) {
  if (mail.id) return storageService.put(MAIL_KEY, mail);
  else return storageService.post(MAIL_KEY, mail);
}

function getById(mailId) {
  return storageService.get(MAIL_KEY, mailId);
}

function _createMails() {
  let mails = utilService.loadFromStorage(MAIL_KEY);
  if (!mails || !mails.length) {
    mails = [{
        sentAt: Date.now(),
        id: 'e101',
        subject: 'i need your urgent counseling',
        body: 'i know these are troubled times but i would like your advice on some issue i have with my small neighbor. i know i am asking for your advice often  but you are the best there is.',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        from: 'putin@russia.com',
        pic:"putin"

      },
      {
        id: 'e102',
        subject: '存見欲先平上無破話発',
        body: '載替保雄立若独送詳間型話述属賀能社申。心画急子百聞観 崎医回申。断負語決障掲図禁取額断件。際教州年優帰味全空万態際田味味価格市。康全朝止囲機政若転縄会並励。覚名毎知語子意真営気樫本経負予倍文割載。録療聞道際面森演中多育聴加供泰治学真。家変弁狙会説遺握専強乗海業。謙青商件転致勝験奔区援枝省礼内生銃書玉墓        ',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        from: 'xi.jin@china.com',
        pic:"xi"
      },
      {
        id: 'e103',
        subject: 'give me a call when you can',
        body: 'OMG last week party was L33T and we have to go out again to tear the city downnnnn\n i am waiting for your call ;)',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        from: 'Mila.Kunis@gmail.com',
        pic:"mila"

      },
      {
        id: 'e104',
        subject: 'i have a great business opportunity for you',
        body: 'dear john, you will not believe that new venture i just joined in the green tech industry. i want you in on this one to ensure the success on the venture. you know where to find me',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        from: 'jeff@amazon.com',
        pic:"jeff"



      },
      {
        id: 'e105',
        subject: 'where is that intergalactic controller?!',
        body: 'i think i lost it somewhere after hanging out in your house and inventing stuff together. call me if you find it under your couch of something',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        from: 'rickSanchez@wabbalubbadubdub.com',
        pic: "rick",
      },
      {
        id: 'e106',
        subject: 'hello from the other side',
        body: 'hiii john i gotta let your hear this new song i am working on this is gonna be a big hit!! let me know what you think :)',
        isRead: false,
        sentAt: 1646246582390,
        to: 'johny@gmail.com',
        from: 'adele@gmail.com',
        pic:"adele"
      },
      {
        id: 'e107',
        subject: 'go on a date with me already',
        body: 'come on johny i already asked you a few times please give me a positive answer!',
        isRead: false,
        sentAt: Date.now(),
        to: 'johny@gmail.com',
        from: 'galGadot@gmail.com',
        pic:"gal"

      },
      {
        body: "stop ignoring the anoying people in your inbox.",
        from: "johny@gmail.com",
        id: "GaB67",
        isRead: false,
        isSent: true,
        sentAt: Date.now(),
        subject: "reminder to myself",
        to: "user@appsus.com",
        pic:"me"
      },
      // {
      //   body: "dear self, kindly remember to buy more milk on your way back from work.",
      //   from: "johny@gmail.com",
      //   id: "rFSrw",
      //   isRead: false,
      //   isSent: true,
      //   sentAt: 1646246582390,
      //   subject: "just so you won't forget",
      //   to: "user@appsus.com",
      //   pic:"me"
      // },
    ]
    utilService.saveToStorage(MAIL_KEY, mails);
  }
  return mails
}

function readPercentage(){
  var unReadNum = 0
  const perc = query().then((mails)=>{ 
    mails.forEach((mail)=>{
      if(!mail.isRead)unReadNum++
    })
    const percentage = unReadNum/mails.length * 100
    return percentage
  })
  return perc
}