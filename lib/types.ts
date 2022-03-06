export interface PostId {
  id: string;
}

export interface PostData extends PostId {
  fileContents: string;
}

export interface PostDetails {
  date: string;
  fileContents: string;
}

export interface MatterData {
  title: string;
  date: string;
  spoiler: string;
}

export interface Post {
  id: string;
  fileContents: string;
  title: string;
  date: string;
  spoiler: string;
}
