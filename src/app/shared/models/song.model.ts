import {SongDetails} from './song-details.model';

export interface Song {
  id: string;
  title: string;
  author: string;
  img: string;
  details: SongDetails;
  isLoved?: boolean;
}
