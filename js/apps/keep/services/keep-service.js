import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';




const NOTE_KEY = 'notes';
_createNotes();


export const keepService = {
    query,
    get,
    save,
    getEmptyNote,
    remove
}

function getEmptyNote(type) {
    const note = {
        type,
        isPinned: false,
        style: { backgroundColor: "#FBF8CC" },
        info: {
            title: '',
        },
    }
    if (type === 'noteTxt') note.info.txt = '';
    else if (type === 'noteImg' || type === 'noteVideo') note.info.url = '';
    else if (type === 'noteList') note.info.todos = '';
    return note;
}

function query() {
    return storageService.query(NOTE_KEY);
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId);
}

function save(note) {
    if (note.id) return storageService.put(NOTE_KEY, note);
    else return storageService.post(NOTE_KEY, note);
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId);
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY);
    if (!notes || !notes.length) {
        notes = [
            {
              "type": "noteList",
              "isPinned": true,
              "style": {
                "backgroundColor": "#FBF8CC"
              },
              "info": {
                "title": "List",
                "todos": [
                  {
                    "txt": "click me",
                    "done": true
                  },
                  {
                    "txt": " click me",
                    "done": true
                  },
                  {
                    "txt": "click me",
                    "done": false
                  },
                  {
                    "txt": "click me",
                    "done": false
                  },
                  {
                    "txt": "click me",
                    "done": true
                  },
                  {
                    "txt": "click me",
                    "done": false
                  },
                  {
                    "txt": "click me",
                    "done": false
                  },
                  {
                    "txt": "click me",
                    "done": false
                  },
                  {
                    "txt": "click me",
                    "done": true
                  },
                  {
                    "txt": "",
                    "done": false
                  }
                ]
              },
              "id": "FsWgbiLq"
            },
            {
              "type": "noteTxt",
              "isPinned": true,
              "style": {
                "backgroundColor": "#98F5E1"
              },
              "info": {
                "title": "Edit",
                "txt": "Edit me\n\n\nclick outside edit screen too"
              },
              "id": "aPH0j13u"
            },
            {
              "type": "noteTxt",
              "isPinned": true,
              "style": {
                "backgroundColor": "#B9FBC0"
              },
              "info": {
                "title": "color",
                "txt": "Change my color\n\n\nleave this notes area\n while palette is open"
              },
              "id": "jQXlvavj"
            },
            {
              "type": "noteTxt",
              "isPinned": true,
              "style": {
                "backgroundColor": "#8EECF5"
              },
              "info": {
                "title": "Delete",
                "txt": "Delete me\n\n\n\nleave delete screen\n area while it's open"
              },
              "id": "rjmtkzc5"
            },
            {
              "type": "noteList",
              "isPinned": true,
              "style": {
                "backgroundColor": "#FBF8CC"
              },
              "info": {
                "title": "Pinned list",
                "todos": [
                  {
                    "txt": "pinned note",
                    "done": true
                  },
                  {
                    "txt": " pinned img",
                    "done": true
                  },
                  {
                    "txt": " pinned video",
                    "done": false
                  }
                ]
              },
              "id": "hqXTQnA4"
            },
            {
              "type": "noteTxt",
              "isPinned": true,
              "style": {
                "backgroundColor": "#F1C0E8"
              },
              "info": {
                "title": "Pinned note",
                "txt": "I'm a pinned note\n\nyou can also click the little \npin to unpin me"
              },
              "id": "sClkTyOx"
            },
            {
              "type": "noteImg",
              "isPinned": true,
              "style": {
                "backgroundColor": "#A3C4F3"
              },
              "info": {
                "title": "Pinned image",
                "url": "../../../img/keep/img/cat.jpg"
              },
              "id": "uDiyDxbT"
            },
            {
              "type": "noteTxt",
              "isPinned": true,
              "style": {
                "backgroundColor": "#CFBAF0"
              },
              "info": {
                "title": "Colorful ",
                "txt": "9 colors to choose from"
              },
              "id": "IsBSNV9E"
            },
            {
              "type": "noteList",
              "isPinned": false,
              "style": {
                "backgroundColor": "#FDE4CF"
              },
              "info": {
                "title": "I'm a list",
                "todos": [
                  {
                    "txt": "I have lines",
                    "done": false
                  },
                  {
                    "txt": " every line can be clicked",
                    "done": false
                  },
                  {
                    "txt": " the lines are toggled on click",
                    "done": true
                  }
                ]
              },
              "id": "41LWPs1z"
            },
            {
              "type": "noteImg",
              "isPinned": false,
              "style": {
                "backgroundColor": "#FFCFD2"
              },
              "info": {
                "title": "Broken image URL",
                "url": "not url"
              },
              "id": "MqC66acA"
            },
            {
              "type": "noteTxt",
              "isPinned": false,
              "style": {
                "backgroundColor": "#98F5E1"
              },
              "info": {
                "title": "",
                "txt": "Note can be without a title"
              },
              "id": "vmBRfavR"
            },
            {
              "type": "noteTxt",
              "isPinned": false,
              "style": {
                "backgroundColor": "#A3C4F3"
              },
              "info": {
                "title": "Note Can be empty",
                "txt": ""
              },
              "id": "xNcCtaJf"
            },
            {
              "type": "noteTxt",
              "isPinned": false,
              "style": {
                "backgroundColor": "#F1C0E8"
              },
              "info": {
                "title": "Text note",
                "txt": "I have text inside\n\nand\n\ncan \n\nhave\n\nmany\n\nlines\n\nof text inside\n\nnumbers too 1234567"
              },
              "id": "m8PaTJ2v"
            },
            {
              "type": "noteImg",
              "isPinned": false,
              "style": {
                "backgroundColor": "#CFBAF0"
              },
              "info": {
                "title": "I'm an image note",
                "url": "../../../img/keep/img/bird.jpg"
              },
              "id": "0B3ICzeW"
            },
            {
              "type": "noteTxt",
              "isPinned": false,
              "style": {
                "backgroundColor": "#FFCFD2"
              },
              "info": {
                "title": "Icecream machine broke",
                "txt": "Understandable, have a nice day"
              },
              "id": "Pv1rI5Ds"
            },
            {
              "type": "noteTxt",
              "isPinned": true,
              "style": {
                "backgroundColor": "#FFCFD2"
              },
              "info": {
                "title": "Note Manual",
                "txt": "Instructions not clear"
              },
              "id": "kI5uU8rV"
            },
            {
              "type": "noteList",
              "isPinned": false,
              "style": {
                "backgroundColor": "#B9FBC0"
              },
              "info": {
                "title": "Shopping",
                "todos": [
                  {
                    "txt": "tomatoes",
                    "done": false
                  },
                  {
                    "txt": " cucumbers",
                    "done": true
                  },
                  {
                    "txt": " milk",
                    "done": false
                  },
                  {
                    "txt": " bread",
                    "done": false
                  },
                  {
                    "txt": " oranges ",
                    "done": true
                  }
                ]
              },
              "id": "rlsC4yiP"
            },
            {
              "type": "noteVideo",
              "isPinned": false,
              "style": {
                "backgroundColor": "#FBF8CC"
              },
              "info": {
                "title": "Broken video",
                "url": "not URL"
              },
              "id": "1fs7uies"
            },
            {
              "type": "noteVideo",
              "isPinned": false,
              "style": {
                "backgroundColor": "#8EECF5"
              },
              "info": {
                "title": "video",
                "url": "https://www.youtube.com/embed/0jgrCKhxE1s"
              },
              "id": "2VuVtAE8"
            }
          ];
        utilService.saveToStorage(NOTE_KEY, notes);
    }
}
