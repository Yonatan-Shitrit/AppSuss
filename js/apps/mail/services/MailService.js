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
        from: 'f***@russia.com',
        pic:"putin"

      },
      {
        id: 'e102',
        subject: '存見欲先平上無破話発',
        body: '載替保雄立若独送詳間型話述属賀能社申。心画急子百聞観 崎医回申。断負語決障掲図禁取額断件。際教州年優帰味全空万態際田味味価格市。康全朝止囲機政若転縄会並励。覚名毎知語子意真営気樫本経負予倍文割載。録療聞道際面森演中多育聴加供泰治学真。家変弁狙会説遺握専強乗海業。謙青商件転致勝験奔区援枝省礼内生銃書玉墓        ',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        from: 'coursera@appsus.com',
        pic:"xi"
      },
      {
        id: 'e103',
        subject: 'Take the first step to start creating more effective ads',
        body: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        from: 'Google@gmail.com'
      },
      {
        id: 'e104',
        subject: 'Want this $100?',
        body: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        from: 'Phone@gmail.com'
      },
      {
        id: 'e105',
        subject: 'This spirnt was amazing',
        body: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        from: 'ABABABAIT@gmail.com',
        pic: "",
      },
      {
        id: 'e106',
        subject: 'hello from the other side',
        body: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
        isRead: false,
        sentAt: 1646246582390,
        to: 'momo@momo.com',
        from: 'Hello@gmail.com'
      },
      {
        id: 'e107',
        subject: 'Do you want our product?',
        body: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"',
        isRead: false,
        sentAt: Date.now(),
        to: 'momo@momo.com',
        from: 'Bezeq@gmail.com'
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
      {
        body: "dear self, kindly remember to buy more milk on your way back from work.",
        from: "johny@gmail.com",
        id: "rFSrw",
        isRead: false,
        isSent: true,
        sentAt: 1646246582390,
        subject: "just so you won't forget",
        to: "user@appsus.com",
        pic:"me"
      },
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