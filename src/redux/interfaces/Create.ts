export interface CreateInterface {
  name: String;
  type: Number | String;
  description: String;
  thumbnail?: String | File;
}

export interface CreateProps {
  create: CreateInterface;
}
