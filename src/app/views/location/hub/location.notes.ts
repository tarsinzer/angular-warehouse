import { Note, Root } from 'routeshub';

export interface LocationNotes extends Root {
  map: Note;
  stocklist: Note;
}

export const LOCATION_HUB_KEY = Symbol();
