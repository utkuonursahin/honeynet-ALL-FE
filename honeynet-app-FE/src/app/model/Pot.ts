import ServerInfo from "../interface/ServerInfo";

export interface Pot{
	id: string;
	potName: string;
	description: string;
	clientUrl: string;
	category: string[];
	previewImagePath: string;
  serverInfoList: ServerInfo[];
}
