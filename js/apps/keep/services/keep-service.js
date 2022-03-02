import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';




const Note_KEY = 'notes'

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
        style: { backgroundColor: "#00d" },
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
    return storageService.query(Note_KEY);
}

function get(noteId) {
    return storageService.get(Note_KEY, noteId);
}

function save(note) {
    if (note.id) return storageService.put(Note_KEY, note);
    else return storageService.post(Note_KEY, note);
}

function remove(noteId) {
    return storageService.remove(Note_KEY, noteId);
}